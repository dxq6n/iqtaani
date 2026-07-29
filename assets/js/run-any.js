/* Vixo — run any language
   ------------------------------------------------------------------
   The browser can only execute HTML, CSS, JavaScript and (via Skulpt) Python.
   Everything else — Java, C, C++, Go, Rust, C#, Ruby, PHP, Kotlin, Swift and
   the rest — has to be compiled and run somewhere else. This sends those files
   to Piston, a free public execution API that needs no key or account, and
   prints stdout/stderr into the playground console.

   Browser-native languages are left alone: they stay instant and work offline.

   Honest limits, surfaced to the user rather than hidden:
     - needs an internet connection
     - the public endpoint is rate limited, so a burst can return 429
     - code runs on a third-party sandbox, so nothing secret should go in it
   ------------------------------------------------------------------ */
(function () {
  'use strict';

  var ENDPOINT = 'https://emkc.org/api/v2/piston/execute';
  if (window.IQ_PISTON_ENDPOINT) ENDPOINT = window.IQ_PISTON_ENDPOINT;   // test hook

  /* Monaco language id -> Piston language, plus the filename it expects. */
  var REMOTE = {
    java:       { lang: 'java',       file: 'Main.java' },
    cpp:        { lang: 'c++',        file: 'main.cpp' },
    c:          { lang: 'c',          file: 'main.c' },
    csharp:     { lang: 'csharp',     file: 'Main.cs' },
    go:         { lang: 'go',         file: 'main.go' },
    rust:       { lang: 'rust',       file: 'main.rs' },
    ruby:       { lang: 'ruby',       file: 'main.rb' },
    php:        { lang: 'php',        file: 'main.php' },
    kotlin:     { lang: 'kotlin',     file: 'Main.kt' },
    swift:      { lang: 'swift',      file: 'main.swift' },
    typescript: { lang: 'typescript', file: 'main.ts' },
    dart:       { lang: 'dart',       file: 'main.dart' },
    scala:      { lang: 'scala',      file: 'Main.scala' },
    lua:        { lang: 'lua',        file: 'main.lua' },
    perl:       { lang: 'perl',       file: 'main.pl' },
    r:          { lang: 'r',          file: 'main.r' },
    shell:      { lang: 'bash',       file: 'main.sh' },
    powershell: { lang: 'powershell', file: 'main.ps1' },
    sql:        { lang: 'sqlite3',    file: 'main.sql' },
    objective_c:{ lang: 'objective-c',file: 'main.m' },
    haskell:    { lang: 'haskell',    file: 'main.hs' },
    elixir:     { lang: 'elixir',     file: 'main.exs' },
    julia:      { lang: 'julia',      file: 'main.jl' },
    fsharp:     { lang: 'fsharp',     file: 'main.fs' },
    /* only used when Skulpt is unavailable — see below */
    python:     { lang: 'python',     file: 'main.py' }
  };

  /* Left to the browser: instant and offline. */
  var LOCAL = { html: 1, css: 1, javascript: 1, plaintext: 1, markdown: 1, json: 1, xml: 1 };

  /* Python normally runs in the browser through Skulpt: instant and offline.
     But Skulpt comes from a CDN, and if that is slow, blocked or the visitor
     is offline, the old behaviour was a dead end reading "Skulpt not loaded".
     When it genuinely is not there, fall through to the remote runner, which
     is real CPython and handles the standard library besides. */
  function skulptReady() {
    return !!(window.Sk && window.Sk.importMainWithBody);
  }

  function isAr() { return document.documentElement.getAttribute('data-lang') === 'ar'; }
  function t(en, ar) { return isAr() ? ar : en; }

  function activeEditor() {
    if (!(window.monaco && window.monaco.editor)) return null;
    var eds = window.monaco.editor.getEditors();
    for (var i = 0; i < eds.length; i++) {
      var n = eds[i].getDomNode();
      if (n && n.offsetParent !== null) return eds[i];
    }
    return eds[0] || null;
  }

  function activeLanguage() {
    var ed = activeEditor();
    if (ed && ed.getModel()) return ed.getModel().getLanguageId();
    /* no Monaco: fall back to the active tab's filename */
    var tab = document.querySelector('.ide-tab.active');
    var name = tab ? tab.textContent.replace('×', '').trim() : '';
    var ext = (name.split('.').pop() || '').toLowerCase();
    return { java:'java', cpp:'cpp', cc:'cpp', c:'c', cs:'csharp', go:'go', rs:'rust',
             rb:'ruby', php:'php', kt:'kotlin', swift:'swift', ts:'typescript',
             sh:'shell', sql:'sql', pl:'perl', lua:'lua', dart:'dart' }[ext] || 'html';
  }

  function activeCode() {
    var ed = activeEditor();
    if (ed) return ed.getValue();
    var ta = document.querySelector('.ide-fallback-ta');
    return ta ? ta.value : '';
  }

  /* ---- console output ---- */
  function consoleEl() { return document.querySelector('.ide-console'); }

  function showConsole() {
    var tab = document.querySelector('.ide-out-tab[data-out="console"]');
    if (tab) tab.click();
  }

  function write(text, kind) {
    var box = consoleEl();
    if (!box) return;
    var line = document.createElement('div');
    line.className = 'ide-line' + (kind ? ' ' + kind : '');
    line.textContent = text;
    box.appendChild(line);
    box.scrollTop = box.scrollHeight;
  }

  function clearConsole() {
    var box = consoleEl();
    if (box) box.innerHTML = '';
  }

  /* ---- the remote run ---- */
  function runRemote(langId) {
    var spec = REMOTE[langId];
    var source = activeCode();
    if (!spec || !source.trim()) return;

    showConsole();
    clearConsole();
    write('▶ ' + t('Compiling and running ', 'جاري الترجمة والتشغيل ') + spec.lang + '…', 'sys');

    var stdinBox = document.querySelector('.ide-console-input input');
    var stdin = stdinBox ? stdinBox.value : '';

    var started = Date.now();
    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        language: spec.lang,
        version: '*',
        files: [{ name: spec.file, content: source }],
        stdin: stdin || ''
      })
    })
    .then(function (r) {
      if (r.status === 429) throw new Error('RATE');
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    })
    .then(function (data) {
      clearConsole();
      var run = data.run || {};
      var compile = data.compile || {};

      if (compile.stderr && compile.stderr.trim()) {
        write(t('Compile error:', 'خطأ في الترجمة:'), 'err');
        write(compile.stderr.trim(), 'err');
        return;
      }
      if (run.stdout && run.stdout.length) write(run.stdout.replace(/\n$/, ''));
      if (run.stderr && run.stderr.trim()) write(run.stderr.trim(), 'err');
      if (!run.stdout && !(run.stderr || '').trim()) {
        write(t('(no output)', '(لا يوجد ناتج)'), 'sys');
      }
      write('— ' + spec.lang + (data.version ? ' ' + data.version : '') +
            ' · ' + ((Date.now() - started) / 1000).toFixed(1) + 's', 'sys');
    })
    .catch(function (e) {
      clearConsole();
      if (String(e.message) === 'RATE') {
        write(t('Too many runs just now — wait a few seconds and press Run again.',
                'تشغيلات كثيرة بسرعة — استنى ثواني واضغط تشغيل مرة ثانية.'), 'err');
      } else {
        write(t('Could not reach the run service. Check your connection and try again.',
                'ما قدرنا نوصل لخدمة التشغيل. تأكد من الإنترنت وجرّب مرة ثانية.'), 'err');
        write(String(e.message || e), 'sys');
      }
    });
  }

  /* ---- hook Run ----
     Capture phase, so for a remote language we can stop editor.js's local
     runner before it prints a misleading result for code it cannot execute. */
  function wire() {
    var run = document.querySelector('[data-action="run"]');
    if (!run || run.dataset.anyLang) return;
    run.dataset.anyLang = '1';

    run.addEventListener('click', function (e) {
      var lang = activeLanguage();
      if (LOCAL[lang]) return;                 // browser handles it
      if (lang === 'python' && skulptReady()) return;   // Skulpt has it covered
      if (!REMOTE[lang]) {
        showConsole(); clearConsole();
        write(t('Vixo cannot run "' + lang + '" yet — editing and highlighting still work.',
                'ما بنقدر نشغّل "' + lang + '" حاليًا — الكتابة والتلوين شغّالين.'), 'sys');
        e.stopImmediatePropagation();
        return;
      }
      e.stopImmediatePropagation();
      runRemote(lang);
    }, true);
  }

  /* The console input doubles as stdin for compiled languages, but its
     placeholder says "type JS here" — misleading the moment you are running
     C++ or Java. Keep it in step with whatever language is active. */
  function syncStdinHint() {
    var input = document.querySelector('.ide-console-input input');
    if (!input) return;
    var box = input.closest('.ide-console-input');
    var lang = activeLanguage();
    if (REMOTE[lang]) {
      input.placeholder = t('Program input (stdin) — then press Run',
                            'مدخلات البرنامج (stdin) — وبعدين اضغط تشغيل');
      input.dataset.stdin = '1';
      /* editor.js only reveals this row for JS; compiled programs need it too */
      if (box) box.style.display = '';
    } else if (input.dataset.stdin) {
      input.placeholder = t('type JS here…', 'اكتب JS هنا…');
      delete input.dataset.stdin;
      if (box) box.style.display = 'none';
    }
  }
  setInterval(syncStdinHint, 900);

  window.IQ_runRemote = runRemote;   // exposed for tests

  if (document.readyState !== 'loading') wire();
  else document.addEventListener('DOMContentLoaded', wire);
  setTimeout(wire, 700);
  setTimeout(wire, 2000);
})();
