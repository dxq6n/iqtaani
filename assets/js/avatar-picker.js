/* Gaming avatar picker for IQ.T3ani account page.
   Shows a grid of pre-made gaming-style emoji avatars users can choose. */
(function () {
  var AVATARS = [
    '🧙‍♂️','🧙‍♀️','🦸‍♂️','🦸‍♀️','🦹‍♂️','🦹‍♀️','🧝‍♂️','🧝‍♀️','🧛‍♂️','🧛‍♀️',
    '🧟‍♂️','🧟‍♀️','🧞‍♂️','🧞‍♀️','🧜‍♂️','🧜‍♀️','🥷','🧑‍🚀','👾','🤖',
    '🎮','🕹️','👻','🐉','🦊','🐺','🦁','🐲','🦅','🐙',
    '🎯','⚡','🔥','💎','🌟','🏆','🛡️','⚔️','🗡️','🎪'
  ];

  function isAr() { return document.documentElement.getAttribute('data-lang') === 'ar'; }

  function open() {
    var existing = document.querySelector('.avatar-picker-overlay');
    if (existing) { existing.classList.add('open'); return; }

    var overlay = document.createElement('div');
    overlay.className = 'avatar-picker-overlay open';

    var picker = document.createElement('div');
    picker.className = 'avatar-picker';
    picker.innerHTML =
      '<h3>' + (isAr() ? 'اختر أفاتار 🎮' : 'Pick your avatar 🎮') + '</h3>' +
      '<p class="ap-sub">' + (isAr() ? 'اختر شخصية تعبّر عنك!' : 'Choose a character that represents you!') + '</p>' +
      '<div class="avatar-grid"></div>' +
      '<div class="ap-actions">' +
        '<button type="button" class="btn btn-ghost ap-cancel">' + (isAr() ? 'إلغاء' : 'Cancel') + '</button>' +
        '<button type="button" class="btn btn-primary ap-save">' + (isAr() ? 'حفظ' : 'Save') + '</button>' +
      '</div>';

    var grid = picker.querySelector('.avatar-grid');
    var selected = null;

    AVATARS.forEach(function (emoji) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'avatar-opt';
      btn.textContent = emoji;
      btn.addEventListener('click', function () {
        var prev = grid.querySelector('.selected');
        if (prev) prev.classList.remove('selected');
        btn.classList.add('selected');
        selected = emoji;
      });
      grid.appendChild(btn);
    });

    picker.querySelector('.ap-cancel').addEventListener('click', function () {
      overlay.classList.remove('open');
    });

    picker.querySelector('.ap-save').addEventListener('click', function () {
      if (!selected) return;
      try {
        var u = JSON.parse(localStorage.getItem('iqt_user') || '{}');
        u.avatar = selected;
        localStorage.setItem('iqt_user', JSON.stringify(u));
      } catch (e) {}
      var av = document.getElementById('acctAvatar');
      if (av) { av.textContent = selected; }
      var msg = document.getElementById('avatarMsg');
      if (msg) { msg.hidden = false; msg.textContent = isAr() ? 'تم حفظ الأفاتار ✓' : 'Avatar saved ✓'; msg.style.color = 'var(--brand,#0ea5e9)'; }
      overlay.classList.remove('open');
      if (typeof window.dispatchEvent === 'function') {
        window.dispatchEvent(new Event('storage'));
      }
    });

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) overlay.classList.remove('open');
    });

    overlay.appendChild(picker);
    document.body.appendChild(overlay);
  }

  window.__openAvatarPicker = open;

  document.addEventListener('DOMContentLoaded', function () {
    var link = document.getElementById('avatarLink');
    if (link) {
      var pickBtn = document.createElement('button');
      pickBtn.type = 'button';
      pickBtn.className = 'acct-photo-link';
      pickBtn.style.marginInlineStart = '12px';
      pickBtn.textContent = isAr() ? 'أو اختر أفاتار 🎮' : 'Or pick an avatar 🎮';
      pickBtn.setAttribute('data-ar', 'أو اختر أفاتار 🎮');
      pickBtn.addEventListener('click', open);
      link.parentNode.insertBefore(pickBtn, link.nextSibling);
    }
  });
})();
