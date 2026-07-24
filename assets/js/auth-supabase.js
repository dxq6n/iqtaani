(function(){"use strict";var n={url:"https://qscamzqvkalpzzxwphvw.supabase.co",anonKey:"sb_publishable_LK96zF2r76J2Dex0NpuonA_YezK8mqi"};if(!n.url||!n.anonKey)return;if(typeof window.supabase=="undefined"||!window.supabase.createClient){console.warn("[auth] supabase-js not loaded — add the CDN <script> before this file.");return}var o=window.supabase.createClient(n.url,n.anonKey);window.__IQ_SB__=o;function i(e,t){return document.documentElement.getAttribute("data-lang")==="ar"?t:e}function m(e){try{localStorage.setItem("iqt_auth","1"),localStorage.setItem("iqt_user",JSON.stringify({name:e.user_metadata&&e.user_metadata.name||e.email,email:e.email}))}catch(t){}}function s(e,t,r){var a=e.querySelector(".sb-msg");a||(a=document.createElement("div"),a.className="sb-msg",a.style.cssText="margin-top:12px;padding:10px 14px;border-radius:10px;font-size:.88rem",e.appendChild(a)),a.style.background=r?"rgba(16,185,129,.15)":"rgba(239,68,68,.14)",a.style.color=r?"#059669":"#dc2626",a.textContent=t}document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("form[data-auth]");if(e){var t=/register/.test(location.pathname);e.addEventListener("submit",async function(r){r.preventDefault(),r.stopImmediatePropagation();var a=(e.querySelector("#email")||{}).value,l=(e.querySelector("#pw")||{}).value,f=(e.querySelector("#name")||{}).value||"";if(!a||!l){s(e,i("Please fill all fields.","عبّي كل الحقول."),!1);return}try{if(t){var d=await o.auth.signUp({email:a,password:l,options:{data:{name:f}}});if(d.error)throw d.error;if(d.data&&d.data.session&&d.data.user){m(d.data.user);location.href="dashboard.html";return}var already=d.data&&d.data.user&&d.data.user.identities&&d.data.user.identities.length===0;if(already){s(e,i("This email already has an account — sign in instead.","هذا البريد عنده حساب مسبقاً — سجّل دخولك."),!1);return}s(e,i("Account created! Check your email to confirm, then sign in.","تم إنشاء الحساب! افتح بريدك واضغط رابط التأكيد، ثم سجّل دخولك."),!0)}else{var u=await o.auth.signInWithPassword({email:a,password:l});if(u.error)throw u.error;m(u.data.user),location.href="dashboard.html"}}catch(c){s(e,i("Error: ","خطأ: ")+(c.message||c),!1)}},!0)}})})();

/* Social login (Google / GitHub / Facebook) via Supabase OAuth.
   Requires each provider to be enabled in the Supabase dashboard. */
document.addEventListener("DOMContentLoaded", function () {
  var sb = window.__IQ_SB__;
  if (!sb) return;
  document.querySelectorAll("[data-oauth]").forEach(function (b) {
    b.addEventListener("click", function () {
      var isAr = document.documentElement.getAttribute("data-lang") === "ar";
      b.disabled = true;
      sb.auth.signInWithOAuth({
        provider: b.getAttribute("data-oauth"),
        options: { redirectTo: location.origin + "/dashboard.html" }
      }).then(function (res) {
        if (res && res.error) {
          b.disabled = false;
          alert((isAr ? "تعذّر تسجيل الدخول: " : "Sign-in failed: ") + res.error.message);
        }
      });
    });
  });
});

/* Mirror any existing Supabase session (incl. OAuth returns) into localStorage
   so the nav shows the user's name + avatar on every page. */
document.addEventListener("DOMContentLoaded", function () {
  var sb = window.__IQ_SB__;
  if (!sb || !sb.auth || !sb.auth.getSession) return;
  sb.auth.getSession().then(function (res) {
    var u = res && res.data && res.data.session && res.data.session.user;
    if (!u) return;
    var md = u.user_metadata || {};
    try {
      localStorage.setItem("iqt_auth", "1");
      localStorage.setItem("iqt_user", JSON.stringify({
        name: md.full_name || md.name || md.user_name || (u.email || "").split("@")[0],
        email: u.email || "",
        avatar: md.avatar_url || md.picture || ""
      }));
    } catch (e) {}
  }).catch(function () {});
});
