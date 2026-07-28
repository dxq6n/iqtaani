/* Clerk authentication (vanilla @clerk/clerk-js) for the IQ.T3ani static site.
   ------------------------------------------------------------------------
   - Uses ONLY the public Publishable Key (safe to ship). The secret key is
     never referenced here.
   - Mounts Clerk's Sign in / Sign up on the auth pages and mirrors the Clerk
     session into localStorage (iqt_auth / iqt_user) so the rest of the site
     (nav avatar, dashboard, account page) keeps working unchanged.
   - Graceful: if Clerk fails to load, the existing forms stay usable, so the
     site is never left broken.
   ------------------------------------------------------------------------ */
(function () {
  var PUBLISHABLE_KEY = 'pk_test_c29jaWFsLWFuY2hvdnktMjAuY2xlcmsuYWNjb3VudHMuZGV2JA';
  var FRONTEND_API   = 'social-anchovy-20.clerk.accounts.dev';

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
      var isDash = /dashboard\.html$/.test(location.pathname);

      if (signin) {
        if (Clerk.user) { location.replace('dashboard.html'); return; }
        soloMount(signin);
        Clerk.mountSignIn(signin, { fallbackRedirectUrl: '/dashboard.html', signUpUrl: '/register.html' });
      }
      if (signup) {
        if (Clerk.user) { location.replace('dashboard.html'); return; }
        soloMount(signup);
        Clerk.mountSignUp(signup, { fallbackRedirectUrl: '/dashboard.html', signInUrl: '/login.html' });
      }
      // protected page: if Clerk resolves with no user, send to sign in
      if (isDash && !Clerk.user) { location.replace('login.html'); }
    }).catch(function () { /* keep the fallback form usable */ });
  }

  var s = document.createElement('script');
  s.async = true;
  s.crossOrigin = 'anonymous';
  s.setAttribute('data-clerk-publishable-key', PUBLISHABLE_KEY);
  s.src = 'https://' + FRONTEND_API + '/npm/@clerk/clerk-js@5/dist/clerk.browser.js';
  s.addEventListener('load', function () { if (window.Clerk) start(window.Clerk); });
  document.head.appendChild(s);
})();
