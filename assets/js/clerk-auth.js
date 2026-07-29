/* Clerk authentication (vanilla @clerk/clerk-js) for the IQ.T3ani static site.
   ------------------------------------------------------------------------
   - Uses ONLY the public Publishable Key (safe to ship). The secret key is
     never referenced here.
   - Mounts Clerk's Sign in / Sign up on the auth pages and mirrors the Clerk
     session into localStorage (iqt_auth / iqt_user) so the rest of the site
     (nav avatar, dashboard, account page) keeps working unchanged.
   - Works together with auth-gate.js (loaded in <head>): the legacy fallback
     form and the protected page content stay hidden until the session is
     known, so nothing old flashes on screen and then gets wiped.
   - Graceful: if Clerk fails to load, the gate is lifted and the existing
     forms stay usable, so the site is never left broken.
   ------------------------------------------------------------------------ */
(function () {
  var PUBLISHABLE_KEY = 'pk_test_c29jaWFsLWFuY2hvdnktMjAuY2xlcmsuYWNjb3VudHMuZGV2JA';
  var FRONTEND_API   = 'social-anchovy-20.clerk.accounts.dev';

  function unGate() {
    if (typeof window.__iqUnGate === 'function') window.__iqUnGate();
    else document.documentElement.classList.remove('clerk-booting');
  }

  /* a session created by the local email/password fallback must survive a
     Clerk load that resolves with no Clerk user — otherwise signing in with
     the fallback form looks like it "resets everything". */
  function localSession() {
    try {
      return localStorage.getItem('iqt_auth') === '1' &&
             localStorage.getItem('iqt_auth_src') !== 'clerk';
    } catch (e) { return false; }
  }

  function mirror(Clerk) {
    try {
      var u = Clerk.user;
      if (u) {
        var email = (u.primaryEmailAddress && u.primaryEmailAddress.emailAddress) || '';
        localStorage.setItem('iqt_auth', '1');
        localStorage.setItem('iqt_auth_src', 'clerk');
        localStorage.setItem('iqt_user', JSON.stringify({
          name: u.fullName || u.firstName || (email ? email.split('@')[0] : 'Learner'),
          email: email,
          avatar: u.imageUrl || ''
        }));
      } else if (!localSession()) {
        localStorage.removeItem('iqt_auth');
        localStorage.removeItem('iqt_auth_src');
        localStorage.removeItem('iqt_user');
      }
    } catch (e) {}
  }

  /* hide everything in the auth card except the Clerk mount node */
  function soloMount(node) {
    var card = node.closest ? node.closest('.auth-card') : null;
    if (!card) return;
    Array.prototype.forEach.call(card.children, function (ch) {
      if (ch !== node) ch.style.display = 'none';
    });
  }

  function start(Clerk) {
    Clerk.load().then(function () {
      mirror(Clerk);
      try { Clerk.addListener(function () { mirror(Clerk); }); } catch (e) {}
      // let the logout button also end the Clerk session
      window.__clerkSignOut = function () { try { return Clerk.signOut(); } catch (e) {} };

      var signin = document.getElementById('clerk-signin');
      var signup = document.getElementById('clerk-signup');
      var gated  = document.querySelector('[data-auth-gate]');
      var mount  = signin || signup;

      if (mount) {
        // already signed in: leave for the dashboard while still gated, so the
        // old form never appears on the way out.
        if (Clerk.user || localSession()) { location.replace('dashboard.html'); return; }
        unGate();
        soloMount(mount);
        if (signin) {
          Clerk.mountSignIn(signin, { fallbackRedirectUrl: '/dashboard.html', signUpUrl: '/register.html' });
        } else {
          Clerk.mountSignUp(signup, { fallbackRedirectUrl: '/dashboard.html', signInUrl: '/login.html' });
        }
        return;
      }

      // protected page: no user means straight to sign in, still gated so no
      // stale dashboard data is ever painted.
      if (gated && !Clerk.user && !localSession()) { location.replace('login.html'); return; }
      unGate();
    }).catch(function () { unGate(); /* keep the fallback form usable */ });
  }

  var s = document.createElement('script');
  s.async = true;
  s.crossOrigin = 'anonymous';
  s.setAttribute('data-clerk-publishable-key', PUBLISHABLE_KEY);
  s.src = 'https://' + FRONTEND_API + '/npm/@clerk/clerk-js@5/dist/clerk.browser.js';
  s.addEventListener('load', function () { if (window.Clerk) start(window.Clerk); else unGate(); });
  s.addEventListener('error', function () { unGate(); });
  document.head.appendChild(s);
})();
