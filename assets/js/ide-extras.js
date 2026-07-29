/* Vixo playground extras
   ------------------------------------------------------------------
   Two additions that sit on top of editor.js without touching it:

   1. Media — pick images, video or audio and drop them straight into the
      code. Files are inlined as data URLs so the sandboxed preview can show
      them without any upload or server.

   2. Split view — open the playground beside a lesson on the course pages,
      with a divider you can drag. The editor runs in a same-origin iframe so
      it keeps its own tabs, files and Run button.
   ------------------------------------------------------------------ */
(function () {
  'use strict';

  function isAr() { return document.documentElement.getAttribute('data-lang') === 'ar'; }
  function t(en, ar) { return isAr() ? ar : en; }

  var MAX_BYTES = 3 * 1024 * 1024;   // keeps the project inside localStorage

  /* ---------- 1. media insert ---------- */
  function activeEditor() {
    if (window.monaco && window.monaco.editor) {
      var eds = window.monaco.editor.getEditors();
      for (var i = 0; i < eds.length; i++) {
        if (eds[i].hasTextFocus && eds[i].hasTextFocus()) return eds[i];
      }
      /* nothing focused: fall back to the one that is actually on screen */
      for (var j = 0; j < eds.length; j++) {
        var n = eds[j].getDomNode();
        if (n && n.offsetParent !== null) return eds[j];
      }
      return eds[0] || null;
    }
    return null;
  }

  function snippetFor(file, dataUrl, name) {
    var kind = file.type.split('/')[0];
    var lang = 'html';
    var ed = activeEditor();
    if (ed && ed.getModel()) lang = ed.getModel().getLanguageId();

    if (lang === 'css') return "url('" + dataUrl + "')";
    if (lang === 'javascript' || lang === 'typescript') {
      return 'const ' + name.replace(/\W/g, '_') + ' = "' + dataUrl + '";\n';
    }
    if (kind === 'image') return '<img src="' + dataUrl + '" alt="' + name + '" style="max-width:100%">\n';
    if (kind === 'video') return '<video src="' + dataUrl + '" controls style="max-width:100%"></video>\n';
    if (kind === 'audio') return '<audio src="' + dataUrl + '" controls></audio>\n';
    return dataUrl;
  }

  function insert(text) {
    var ed = activeEditor();
    if (ed) {
      var sel = ed.getSelection();
      ed.executeEdits('media', [{ range: sel, text: text, forceMoveMarkers: true }]);
      ed.focus();
      return true;
    }
    /* Monaco absent: fall back to the textarea */
    var ta = document.querySelector('.ide-fallback-ta');
    if (ta && ta.offsetParent !== null) {
      var s = ta.selectionStart || 0;
      ta.value = ta.value.slice(0, s) + text + ta.value.slice(ta.selectionEnd || s);
      ta.dispatchEvent(new Event('input', { bubbles: true }));
      return true;
    }
    return false;
  }

  function toast(msg) {
    var el = document.createElement('div');
    el.className = 'iq-toast-mini';
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(function () { el.classList.add('in'); }, 10);
    setTimeout(function () {
      el.classList.remove('in');
      setTimeout(function () { el.remove(); }, 300);
    }, 2600);
  }

  function wireMedia() {
    var bar = document.querySelector('.ide-toolbar');
    if (!bar || bar.querySelector('[data-media]')) return;

    var btn = document.createElement('button');
    btn.className = 'ide-tbtn';
    btn.setAttribute('data-media', '');
    btn.title = t('Insert image, video or audio', 'أدرج صورة أو فيديو أو صوت');
    btn.innerHTML = '🖼️ <span data-ar="وسائط">Media</span>';

    var input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*,video/*,audio/*';
    input.multiple = true;
    input.hidden = true;

    btn.addEventListener('click', function () { input.click(); });

    input.addEventListener('change', function () {
      var files = Array.prototype.slice.call(input.files || []);
      if (!files.length) return;
      var done = 0, skipped = 0;

      files.forEach(function (f) {
        if (f.size > MAX_BYTES) { skipped++; step(); return; }
        var fr = new FileReader();
        fr.onload = function () {
          insert(snippetFor(f, fr.result, f.name));
          done++; step();
        };
        fr.onerror = function () { skipped++; step(); };
        fr.readAsDataURL(f);
      });

      function step() {
        if (done + skipped < files.length) return;
        input.value = '';
        if (skipped) {
          toast(t(skipped + ' file(s) skipped — 3MB max each',
                  'تخطّينا ' + skipped + ' ملف — الحد 3 ميجا للملف'));
        } else {
          toast(t('Inserted ' + done + ' file(s) — press Run',
                  'أُدرج ' + done + ' ملف — اضغط تشغيل'));
        }
      }
    });

    var runBtn = bar.querySelector('[data-action="run"]');
    if (runBtn) bar.insertBefore(btn, runBtn); else bar.appendChild(btn);
    bar.appendChild(input);
  }

  /* ---------- 2. split view on the course pages ---------- */
  function wireSplit() {
    if (!/course\.html$/.test(location.pathname)) return;
    if (document.querySelector('.split-toggle')) return;

    var KEY = 'iqt_split_open';

    var toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'split-toggle';
    toggle.innerHTML = '⌨️ <span data-ar="افتح المحرّر بجانب الدرس">Open editor beside the lesson</span>';

    var panel = document.createElement('aside');
    panel.className = 'split-panel';
    panel.innerHTML =
      '<div class="split-grip" role="separator" aria-orientation="vertical" tabindex="0" aria-label="Resize"></div>' +
      '<div class="split-head">' +
        '<b data-ar="المحرّر">Playground</b>' +
        '<a class="split-open" href="editor.html" target="_blank" rel="noopener" data-ar="فتح بتبويب">Open in a tab</a>' +
        '<button class="split-close" aria-label="Close">✕</button>' +
      '</div>' +
      '<iframe class="split-frame" title="Code playground" src="about:blank"></iframe>';

    document.body.appendChild(toggle);
    document.body.appendChild(panel);

    var frame = panel.querySelector('.split-frame');

    function open(on) {
      document.body.classList.toggle('split-on', on);
      toggle.classList.toggle('hidden', on);
      if (on && frame.getAttribute('src') === 'about:blank') {
        frame.setAttribute('src', 'editor.html?embed=1');
      }
      try { localStorage.setItem(KEY, on ? '1' : '0'); } catch (e) {}
    }

    toggle.addEventListener('click', function () { open(true); });
    panel.querySelector('.split-close').addEventListener('click', function () { open(false); });

    /* drag the divider */
    var grip = panel.querySelector('.split-grip'), dragging = false;
    function widthFrom(x) {
      var w = Math.min(Math.max(window.innerWidth - x, 320), window.innerWidth * 0.8);
      document.documentElement.style.setProperty('--split-w', w + 'px');
    }
    grip.addEventListener('pointerdown', function (e) {
      dragging = true; grip.setPointerCapture(e.pointerId); e.preventDefault();
    });
    grip.addEventListener('pointermove', function (e) { if (dragging) widthFrom(e.clientX); });
    grip.addEventListener('pointerup', function () { dragging = false; });
    grip.addEventListener('keydown', function (e) {
      var cur = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--split-w'), 10) || 520;
      if (e.key === 'ArrowLeft') { widthFrom(window.innerWidth - (cur + 40)); e.preventDefault(); }
      if (e.key === 'ArrowRight') { widthFrom(window.innerWidth - (cur - 40)); e.preventDefault(); }
    });

    try { if (localStorage.getItem(KEY) === '1') open(true); } catch (e) {}
  }

  /* ---------- embedded mode: strip the chrome so the editor gets the room ---------- */
  function embedMode() {
    try {
      if (new URLSearchParams(location.search).get('embed') !== '1') return;
    } catch (e) { return; }
    document.documentElement.classList.add('ide-embed');
  }


  /* ---------- 3. Run opens the result full-width ---------- */
  function wireRunView() {
    var wrap = document.querySelector('.ide-wrap');
    var run = document.querySelector('[data-action="run"]');
    var outTabs = document.querySelector('.ide-output-tabs');
    if (!wrap || !run || !outTabs || outTabs.querySelector('.ide-exit-result')) return;

    var exit = document.createElement('button');
    exit.type = 'button';
    exit.className = 'ide-tbtn ide-exit-result';
    exit.innerHTML = '← <span data-ar="رجوع للكود">Back to code</span>';
    exit.title = t('Back to the editor (Esc)', 'رجوع للمحرّر (Esc)');
    exit.addEventListener('click', function () { show(false); });
    outTabs.insertBefore(exit, outTabs.firstChild);

    function show(on) {
      wrap.classList.toggle('result-on', on);
      /* Monaco measures itself on layout, so let it know the pane resized */
      if (window.monaco && window.monaco.editor) {
        setTimeout(function () {
          window.monaco.editor.getEditors().forEach(function (e) { e.layout(); });
        }, 60);
      }
    }

    run.addEventListener('click', function () { show(true); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && wrap.classList.contains('result-on')) show(false);
    });
  }

  function init() {
    embedMode();
    wireMedia();
    wireSplit();
    wireRunView();
  }

  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
  /* editor.js builds its toolbar asynchronously */
  setTimeout(function(){ wireMedia(); wireRunView(); }, 600);
  setTimeout(function(){ wireMedia(); wireRunView(); }, 1800);
})();
