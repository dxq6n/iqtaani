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


  /* ---------- 3. Full-screen code / full-screen result ----------
     Two independent states:
       zen       — the playground covers the whole viewport (nav and footer out)
       result-on — the output takes the pane, the editor steps aside
     Run turns both on, so the result fills the screen. "Back to code" keeps
     zen and returns the editor, so you can edit and Run again without ever
     leaving full screen. Esc steps back one level at a time.               */
  function wireRunView() {
    var wrap = document.querySelector('.ide-wrap');
    var run = document.querySelector('[data-action="run"]');
    var outTabs = document.querySelector('.ide-output-tabs');
    var bar = document.querySelector('.ide-toolbar');
    if (!wrap || !run || !outTabs || !bar || outTabs.querySelector('.ide-exit-result')) return;

    function zen(on) {
      document.documentElement.classList.toggle('ide-zen', on);
      if (on) {
        var el = document.documentElement;
        if (el.requestFullscreen) { try { el.requestFullscreen(); } catch (e) {} }
      } else if (document.fullscreenElement && document.exitFullscreen) {
        try { document.exitFullscreen(); } catch (e) {}
      }
      relayout();
    }
    function isZen() { return document.documentElement.classList.contains('ide-zen'); }

    function result(on) {
      wrap.classList.toggle('result-on', on);
      relayout();
    }
    function isResult() { return wrap.classList.contains('result-on'); }

    /* Monaco sizes itself from its container, so tell it after every change */
    function relayout() {
      setTimeout(function () {
        if (window.monaco && window.monaco.editor) {
          window.monaco.editor.getEditors().forEach(function (e) { e.layout(); });
        }
      }, 80);
    }

    /* toolbar: enter/leave full screen for the code itself */
    var zenBtn = document.createElement('button');
    zenBtn.type = 'button';
    zenBtn.className = 'ide-tbtn ide-zen-btn';
    zenBtn.innerHTML = '⛶ <span data-ar="ملء الشاشة">Full screen</span>';
    zenBtn.title = t('Full screen (Esc to leave)', 'ملء الشاشة (Esc للخروج)');
    zenBtn.addEventListener('click', function () { zen(!isZen()); });
    bar.insertBefore(zenBtn, run);

    /* back from the result to the code, staying full screen */
    var back = document.createElement('button');
    back.type = 'button';
    back.className = 'ide-tbtn ide-exit-result';
    back.innerHTML = '← <span data-ar="رجوع للكود">Back to code</span>';
    back.title = t('Back to the editor (Esc)', 'رجوع للمحرّر (Esc)');
    back.addEventListener('click', function () { result(false); });
    outTabs.insertBefore(back, outTabs.firstChild);

    /* leave full screen entirely */
    var close = document.createElement('button');
    close.type = 'button';
    close.className = 'ide-tbtn ide-zen-exit';
    close.innerHTML = '✕ <span data-ar="إغلاق ملء الشاشة">Exit full screen</span>';
    close.addEventListener('click', function () { result(false); zen(false); });
    outTabs.appendChild(close);

    /* editor.js writes "Running..." into the console while also showing the
       preview, so both panes end up open and each takes half the height —
       which is the big empty black area under the result. Show only whichever
       tab is actually selected, and let it have the full pane. */
    function syncOutput() {
      var active = outTabs.querySelector('.ide-out-tab.active');
      var which = active ? active.getAttribute('data-out') : 'preview';
      var prev = document.querySelector('.ide-preview');
      var con = document.querySelector('.ide-console');
      if (prev) prev.classList.toggle('hidden', which !== 'preview');
      if (con) con.classList.toggle('hidden', which !== 'console');
    }
    outTabs.addEventListener('click', function () { setTimeout(syncOutput, 30); });

    run.addEventListener('click', function () {
      zen(true); result(true);
      /* run() may switch tabs itself, so settle afterwards */
      setTimeout(syncOutput, 120);
      setTimeout(syncOutput, 600);
    });
    setTimeout(syncOutput, 800);

    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      if (isResult()) { result(false); e.preventDefault(); }
      else if (isZen()) { zen(false); e.preventDefault(); }
    });

    /* leaving native full screen by F11 or the browser UI must not strand us */
    document.addEventListener('fullscreenchange', function () {
      if (!document.fullscreenElement && isZen()) {
        document.documentElement.classList.remove('ide-zen');
        relayout();
      }
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
