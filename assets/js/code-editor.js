/* Vixo — the playground's editor backend.
   ------------------------------------------------------------------
   Gives the playground a VS Code-grade editor by loading Monaco (the engine
   VS Code itself runs on) from a CDN, and exposes the small API that
   editor.js already used for CodeMirror:

       getValue()  setValue(v)  on('change', fn)  refresh()
       lineCount()  getCursor()  indentLine(n)  toTextArea()  focus()

   Creation is synchronous even though Monaco arrives asynchronously: every
   editor starts as a plain textarea and is upgraded in place once Monaco is
   ready, carrying its text and change handlers across. If Monaco cannot load
   at all — offline, CDN blocked, strict proxy — the textarea simply stays,
   so the playground keeps working rather than showing an empty pane.
   ------------------------------------------------------------------ */
(function () {
  'use strict';

  var CDN = 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.52.2/min';
  /* a local copy wins when present (used by the test harness) */
  if (window.IQ_MONACO_BASE) CDN = window.IQ_MONACO_BASE;

  var MODE_TO_MONACO = {
    htmlmixed: 'html',
    javascript: 'javascript',
    python: 'python',
    css: 'css',
    xml: 'html',
    json: 'json',
    markdown: 'markdown'
  };

  var monacoReady = null;

  function loadMonaco() {
    if (monacoReady) return monacoReady;
    monacoReady = new Promise(function (resolve, reject) {
      if (window.monaco && window.monaco.editor) return resolve(window.monaco);

      var timeout = setTimeout(function () { reject(new Error('monaco timeout')); }, 15000);

      var loader = document.createElement('script');
      loader.src = CDN + '/vs/loader.js';
      loader.onerror = function () { clearTimeout(timeout); reject(new Error('loader failed')); };
      loader.onload = function () {
        if (!window.require || !window.require.config) {
          clearTimeout(timeout); return reject(new Error('AMD loader missing'));
        }
        window.require.config({ paths: { vs: CDN + '/vs' } });

        /* Monaco spawns its language workers from a same-origin blob, which
           keeps it inside worker-src 'self' blob: without loosening the CSP */
        window.MonacoEnvironment = {
          getWorkerUrl: function () {
            var shim = "self.MonacoEnvironment={baseUrl:'" + CDN + "/'};" +
                       "importScripts('" + CDN + "/vs/base/worker/workerMain.js');";
            return URL.createObjectURL(new Blob([shim], { type: 'text/javascript' }));
          }
        };

        window.require(['vs/editor/editor.main'], function () {
          clearTimeout(timeout);
          if (window.monaco && window.monaco.editor) resolve(window.monaco);
          else reject(new Error('monaco did not initialise'));
        }, function () {
          clearTimeout(timeout); reject(new Error('editor.main failed'));
        });
      };
      document.head.appendChild(loader);
    });
    return monacoReady;
  }

  /* ---- the adapter ---- */
  function create(container, opts) {
    opts = opts || {};
    var listeners = [];
    var mode = opts.mode || 'javascript';
    var value = opts.value || '';
    var disposed = false;

    /* start as a textarea so the caller gets something usable immediately */
    var ta = document.createElement('textarea');
    ta.className = 'ide-fallback-ta';
    ta.spellcheck = false;
    ta.value = value;
    ta.setAttribute('aria-label', 'Code editor');
    container.appendChild(ta);
    ta.addEventListener('input', function () {
      value = ta.value;
      fire();
    });

    var ed = null;   // the monaco instance, once it exists

    function fire() { listeners.forEach(function (f) { try { f(); } catch (e) {} }); }

    var api = {
      isMonaco: function () { return !!ed; },
      getValue: function () { return ed ? ed.getValue() : ta.value; },
      setValue: function (v) {
        value = v;
        if (ed) ed.setValue(v); else ta.value = v;
      },
      on: function (evt, fn) { if (evt === 'change') listeners.push(fn); },
      refresh: function () { if (ed) ed.layout(); },
      focus: function () { (ed || ta).focus(); },
      lineCount: function () {
        return ed ? ed.getModel().getLineCount() : (ta.value.split('\n').length);
      },
      getCursor: function () {
        if (!ed) return { line: 0, ch: 0 };
        var p = ed.getPosition();
        return { line: p.lineNumber - 1, ch: p.column - 1 };
      },
      /* editor.js calls this to format; Monaco has a real formatter */
      indentLine: function () {
        if (ed) ed.getAction('editor.action.formatDocument') &&
                ed.getAction('editor.action.formatDocument').run();
      },
      setMode: function (m) {
        mode = m;
        if (ed && window.monaco) {
          window.monaco.editor.setModelLanguage(ed.getModel(), MODE_TO_MONACO[m] || m);
        }
      },
      toTextArea: function () {
        disposed = true;
        if (ed) { try { ed.dispose(); } catch (e) {} ed = null; }
        if (ta && ta.parentNode) ta.parentNode.removeChild(ta);
      }
    };

    loadMonaco().then(function (monaco) {
      if (disposed) return;
      var current = ta.value;
      ta.style.display = 'none';

      var holder = document.createElement('div');
      holder.className = 'ide-monaco';
      container.appendChild(holder);

      ed = monaco.editor.create(holder, {
        value: current,
        language: MODE_TO_MONACO[mode] || mode,
        theme: 'vs-dark',
        automaticLayout: true,
        fontSize: 14,
        fontFamily: '"Fira Code", ui-monospace, Menlo, monospace',
        fontLigatures: true,
        minimap: { enabled: true },
        scrollBeyondLastLine: false,
        tabSize: 2,
        insertSpaces: true,
        renderWhitespace: 'selection',
        smoothScrolling: true,
        cursorBlinking: 'smooth',
        bracketPairColorization: { enabled: true },
        suggestOnTriggerCharacters: true,
        quickSuggestions: true,
        formatOnPaste: true,
        padding: { top: 12, bottom: 12 },
        /* Monaco already virtualises rendering; these keep a million-line file
           responsive by not asking it to decorate what nobody can see. */
        largeFileOptimizations: true,
        wordWrap: 'off',
        stopRenderingLineAfter: 10000,
        accessibilitySupport: 'off'
      });

      ed.onDidChangeModelContent(function () { value = ed.getValue(); fire(); });

      if (opts.onRun) {
        ed.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, opts.onRun);
      }
      if (opts.onSave) {
        ed.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, opts.onSave);
      }
      fire();
    }).catch(function () {
      /* textarea stays; nothing else to do */
    });

    return api;
  }

  /* Extension -> language, driven by Monaco's own registry (91 languages) so
     it stays correct without us hand-maintaining a table. The small map below
     only covers the gap before Monaco has finished loading. */
  var SEED = {
    js:'javascript', mjs:'javascript', ts:'typescript', py:'python', html:'html',
    htm:'html', css:'css', json:'json', md:'markdown', java:'java', c:'c',
    cpp:'cpp', cs:'csharp', go:'go', rs:'rust', rb:'ruby', php:'php',
    sh:'shell', sql:'sql', kt:'kotlin', swift:'swift', yml:'yaml', yaml:'yaml', xml:'xml'
  };

  function languageForFile(name) {
    var ext = (String(name).split('.').pop() || '').toLowerCase();
    if (window.monaco && window.monaco.languages) {
      var all = window.monaco.languages.getLanguages();
      for (var i = 0; i < all.length; i++) {
        var exts = all[i].extensions || [];
        for (var j = 0; j < exts.length; j++) {
          if (exts[j].toLowerCase() === '.' + ext) return all[i].id;
        }
      }
    }
    return SEED[ext] || 'plaintext';
  }

  function listLanguages() {
    if (window.monaco && window.monaco.languages) {
      return window.monaco.languages.getLanguages()
        .map(function (l) { return l.id; }).sort();
    }
    return Object.keys(SEED).map(function (k) { return SEED[k]; });
  }

  var STARTER = {
    javascript: '// new file\nconsole.log("hello");\n',
    typescript: '// new file\nconst msg: string = "hello";\nconsole.log(msg);\n',
    python: '# new file\nprint("hello")\n',
    html: '<!DOCTYPE html>\n<html>\n<body>\n  <h1>Hello</h1>\n</body>\n</html>\n',
    css: '/* new file */\nbody { margin: 0; }\n',
    java: 'public class Main {\n  public static void main(String[] a) {\n    System.out.println("hello");\n  }\n}\n',
    cpp: '#include <iostream>\nint main(){ std::cout << "hello"; }\n',
    c: '#include <stdio.h>\nint main(){ printf("hello"); return 0; }\n',
    go: 'package main\nimport "fmt"\nfunc main(){ fmt.Println("hello") }\n',
    rust: 'fn main(){ println!("hello"); }\n',
    sql: '-- new file\nSELECT 1;\n'
  };

  function promptNewFile() {
    var ar = document.documentElement.getAttribute('data-lang') === 'ar';
    var name = window.prompt(
      ar ? 'اسم الملف (الامتداد بيحدد اللغة تلقائيًا) — مثلاً: main.py'
         : 'File name (the extension picks the language) — e.g. main.py',
      'untitled.js');
    if (!name) return null;
    name = name.trim();
    if (!name) return null;
    if (name.indexOf('.') === -1) name += '.txt';
    var lang = languageForFile(name);
    return { name: name, lang: lang, code: STARTER[lang] || '' };
  }

  window.IQEditor = {
    create: create,
    load: loadMonaco,
    languageForFile: languageForFile,
    listLanguages: listLanguages,
    promptNewFile: promptNewFile
  };
})();
