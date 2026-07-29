/* Vixo authentication — Clerk.
   ------------------------------------------------------------------
   Clerk owns the accounts, so a sign-up on one device works everywhere and
   the users are visible in the Clerk dashboard. Only the Publishable Key
   lives here; it is designed to ship in the browser. The secret key is never
   referenced.

   Clerk's own components are mounted for sign-in / sign-up, themed through
   its `appearance` API so they match the site instead of dropping a stock
   white card onto a black page.

   The rest of the site reads the signed-in user from localStorage
   (iqt_auth="1" + iqt_user), so the Clerk session is mirrored there and
   cleared on sign-out — Clerk stays the source of truth.
   ------------------------------------------------------------------ */
(function () {
  'use strict';

  var PUBLISHABLE_KEY = 'pk_test_c29jaWFsLWFuY2hvdnktMjAuY2xlcmsuYWNjb3VudHMuZGV2JA';
  var FRONTEND_API = 'social-anchovy-20.clerk.accounts.dev';

  function isAr() { return document.documentElement.getAttribute('data-lang') === 'ar'; }

  /* Match the site's near-black surfaces and white primary. */
  var appearance = {
    variables: {
      colorPrimary: '#ffffff',
      colorBackground: '#0d0f14',
      colorText: '#f2f5fa',
      colorTextSecondary: '#949bab',
      colorInputBackground: '#14171e',
      colorInputText: '#f2f5fa',
      colorDanger: '#e5989b',
      colorShimmer: 'rgba(255,255,255,.08)',
      borderRadius: '12px',
      fontFamily: '"Alexandria", "Segoe UI", system-ui, sans-serif'
    },
    elements: {
      rootBox: { width: '100%' },
      card: {
        background: '#0d0f14',
        border: '1px solid #23272f',
        boxShadow: '0 30px 60px -20px rgba(0,0,0,.8)'
      },
      headerTitle: { color: '#ffffff' },
      headerSubtitle: { color: '#949bab' },
      socialButtonsBlockButton: {
        background: '#14171e',
        border: '1px solid #23272f',
        color: '#f2f5fa'
      },
      formButtonPrimary: {
        background: '#ffffff',
        color: '#000000',
        fontWeight: '700',
        textTransform: 'none'
      },
      formFieldInput: { background: '#14171e', border: '1px solid #23272f' },
      footerActionLink: { color: '#ffffff' },
      dividerLine: { background: '#23272f' },
      dividerText: { color: '#949bab' }
    }
  };

  function mirror(Clerk) {
    try {
      var u = Clerk.user;
      if (u) {
        var email = (u.primaryEmailAddress && u.primaryEmailAddress.emailAddress) || '';
        localStorage.setItem('iqt_auth', '1');
        localStorage.setItem('iqt_user', JSON.stringify({
          name: u.fullName || u.firstName || (email ? email.split('@')[0] : 'Learner'),
          email: email,
          avatar: u.imageUrl || ''
        }));
      } else {
        localStorage.removeItem('iqt_auth');
        localStorage.removeItem('iqt_user');
      }
    } catch (e) {}
  }

  /* The page's own form is a fallback for when Clerk cannot load; once Clerk
     has mounted its component the duplicate would be confusing, so hide it. */
  function hideFallback(mountNode) {
    var card = mountNode.closest ? mountNode.closest('.auth-card') : null;
    if (!card) return;
    Array.prototype.forEach.call(card.children, function (child) {
      if (child !== mountNode) child.style.display = 'none';
    });
  }

  function start(Clerk) {
    Clerk.load({ appearance: appearance }).then(function () {
      mirror(Clerk);
      try { Clerk.addListener(function () { mirror(Clerk); }); } catch (e) {}

      /* app.js routes every logout button through this */
      window.__IQ_signOut = function (done) {
        try { localStorage.removeItem('iqt_auth'); localStorage.removeItem('iqt_user'); } catch (e) {}
        var fired = false;
        function finish() { if (!fired) { fired = true; if (done) done(); } }
        try {
          Clerk.signOut().then(finish, finish);
          setTimeout(finish, 1800);   // never strand the user if the network stalls
        } catch (e) { finish(); }
      };

      var signin = document.getElementById('clerk-signin');
      var signup = document.getElementById('clerk-signup');

      if (signin) {
        hideFallback(signin);
        Clerk.mountSignIn(signin, {
          appearance: appearance,
          fallbackRedirectUrl: '/dashboard.html',
          signUpUrl: '/register.html'
        });
      }
      if (signup) {
        hideFallback(signup);
        Clerk.mountSignUp(signup, {
          appearance: appearance,
          fallbackRedirectUrl: '/dashboard.html',
          signInUrl: '/login.html'
        });
      }

      /* dashboard is members-only */
      if (/dashboard\.html$/.test(location.pathname) && !Clerk.user) {
        location.replace('login.html');
      }
    }).catch(function () { /* leave the fallback form usable */ });
  }

  var s = document.createElement('script');
  s.async = true;
  s.crossOrigin = 'anonymous';
  s.setAttribute('data-clerk-publishable-key', PUBLISHABLE_KEY);
  s.src = 'https://' + FRONTEND_API + '/npm/@clerk/clerk-js@5/dist/clerk.browser.js';
  s.addEventListener('load', function () { if (window.Clerk) start(window.Clerk); });
  document.head.appendChild(s);
})();
