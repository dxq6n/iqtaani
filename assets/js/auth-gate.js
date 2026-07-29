/* IQ.T3ani auth boot gate — must load SYNCHRONOUSLY in <head>.
   ------------------------------------------------------------------
   Adds `clerk-booting` on <html> before the page paints, so that:
     - [data-auth-fallback]  (the legacy email/password form) stays hidden
     - [data-auth-gate]      (protected page content) stays hidden
   until Clerk has resolved the session. Without this, visitors see the old
   markup / stale localStorage data for a moment and then watch it get wiped
   once Clerk finishes loading.

   clerk-auth.js removes the class as soon as the session is known. A safety
   timeout removes it too, so the page can never stay blank if Clerk is
   blocked or offline. */
(function () {
  var root = document.documentElement;
  root.classList.add('clerk-booting');

  var css = [
    '.clerk-booting [data-auth-fallback]{display:none !important}',
    '.clerk-booting [data-auth-gate]{visibility:hidden !important}',
    '.clerk-boot-spinner{display:none;padding:48px 0;text-align:center;color:var(--brand,#6366f1)}',
    '.clerk-booting .clerk-boot-spinner{display:block}',
    '.clerk-boot-spinner i{display:inline-block;width:28px;height:28px;border-radius:50%;' +
      'border:3px solid rgba(127,127,127,.25);border-top-color:currentColor;' +
      'animation:clerk-spin .8s linear infinite}',
    '@keyframes clerk-spin{to{transform:rotate(360deg)}}'
  ].join('');

  var style = document.createElement('style');
  style.textContent = css;
  (document.head || root).appendChild(style);

  window.__iqUnGate = function () {
    root.classList.remove('clerk-booting');
    var sp = document.querySelectorAll('.clerk-boot-spinner');
    Array.prototype.forEach.call(sp, function (el) {
      if (el.parentNode) el.parentNode.removeChild(el);
    });
  };

  /* safety net: never leave the page gated forever */
  setTimeout(function () { window.__iqUnGate(); }, 5000);
})();
