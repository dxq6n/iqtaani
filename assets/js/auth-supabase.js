/* IQ.T3ani authentication.
   ------------------------------------------------------------------
   Email / password works 100% CLIENT-SIDE (instant, zero setup — no email
   confirmation, no rate limits, no dashboard configuration needed).
   Social login (Google / GitHub / Facebook) still uses Supabase OAuth when
   those providers are enabled in the Supabase dashboard.
   A signed-in user is represented by localStorage: iqt_auth="1" + iqt_user.
   ------------------------------------------------------------------ */
(function () {
  "use strict";

  var SB_URL = "https://qscamzqvkalpzzxwphvw.supabase.co";
  var SB_KEY = "sb_publishable_LK96zF2r76J2Dex0NpuonA_YezK8mqi";

  /* Supabase client — used ONLY for social OAuth + restoring a social session. */
  var sb = null;
  try {
    if (window.supabase && window.supabase.createClient) {
      sb = window.supabase.createClient(SB_URL, SB_KEY);
      window.__IQ_SB__ = sb;
    }
  } catch (e) {}

  function isAr() { return document.documentElement.getAttribute("data-lang") === "ar"; }
  function t(en, ar) { return isAr() ? ar : en; }

  function setSession(user) {
    try {
      localStorage.setItem("iqt_auth", "1");
      /* marks the session as NOT created by Clerk, so clerk-auth.js never
         wipes it when it loads and finds no Clerk user. */
      localStorage.setItem("iqt_auth_src", "local");
      localStorage.setItem("iqt_user", JSON.stringify(user || {}));
    } catch (e) {}
  }

  function msg(form, text, ok) {
    var el = form.querySelector(".sb-msg");
    if (!el) {
      el = document.createElement("div");
      el.className = "sb-msg";
      el.style.cssText = "margin-top:12px;padding:10px 14px;border-radius:10px;font-size:.88rem;line-height:1.5";
      form.appendChild(el);
    }
    el.style.background = ok ? "rgba(16,185,129,.15)" : "rgba(239,68,68,.14)";
    el.style.color = ok ? "#059669" : "#dc2626";
    el.textContent = text;
  }

  /* ---- tiny local account store (localStorage) ---- */
  function users() { try { return JSON.parse(localStorage.getItem("iqt_users") || "[]") || []; } catch (e) { return []; } }
  function saveUsers(a) { try { localStorage.setItem("iqt_users", JSON.stringify(a)); } catch (e) {} }
  function findUser(email) {
    var e = (email || "").toLowerCase();
    return users().filter(function (u) { return (u.email || "").toLowerCase() === e; })[0] || null;
  }
  function rand() { return Math.random().toString(36).slice(2) + Date.now().toString(36); }
  async function hash(pw, salt) {
    try {
      if (window.crypto && crypto.subtle && window.TextEncoder) {
        var buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(salt + "|" + pw));
        return Array.prototype.map.call(new Uint8Array(buf), function (b) { return ("0" + b.toString(16)).slice(-2); }).join("");
      }
    } catch (e) {}
    var h = 5381, s = salt + pw;
    for (var i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
    return "f" + (h >>> 0).toString(36);
  }

  /* ---- email / password form (register.html + login.html) ---- */
  document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form[data-auth]");
    if (!form) return;
    var isRegister = /register/i.test(location.pathname) || !!form.querySelector("#name");

    form.addEventListener("submit", async function (ev) {
      ev.preventDefault();
      ev.stopImmediatePropagation();

      var email = ((form.querySelector("#email") || {}).value || "").trim();
      var pwEl = form.querySelector("#pw") || form.querySelector("#loginPw") || form.querySelector('input[type="password"]');
      var pw = (pwEl || {}).value || "";
      var name = ((form.querySelector("#name") || {}).value || "").trim();

      if (!email || !pw) { msg(form, t("Please fill in all fields.", "عبّي كل الحقول."), false); return; }
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { msg(form, t("Please enter a valid email.", "أدخل بريدًا إلكترونيًا صحيحًا."), false); return; }

      try {
        if (isRegister) {
          if (pw.length < 6) { msg(form, t("Password must be at least 6 characters.", "كلمة السر يجب أن تكون 6 أحرف على الأقل."), false); return; }
          if (findUser(email)) { msg(form, t("This email already has an account — sign in instead.", "هذا البريد عنده حساب مسبقًا — سجّل دخولك."), false); return; }
          var salt = rand();
          var h = await hash(pw, salt);
          var list = users();
          list.push({ name: name || email.split("@")[0], email: email, salt: salt, hash: h, created: Date.now() });
          saveUsers(list);
          setSession({ name: name || email.split("@")[0], email: email });
          msg(form, t("Account created! Signing you in…", "تم إنشاء الحساب! جاري الدخول…"), true);
          location.href = "dashboard.html";
        } else {
          var u = findUser(email);
          if (!u) { msg(form, t("No account found for this email — create one first.", "ما في حساب بهذا البريد — أنشئ حساب أول."), false); return; }
          var hh = await hash(pw, u.salt);
          if (hh !== u.hash) { msg(form, t("Wrong email or password.", "البريد الإلكتروني أو كلمة السر غير صحيحة."), false); return; }
          setSession({ name: u.name || email.split("@")[0], email: u.email, avatar: u.avatar || "" });
          location.href = "dashboard.html";
        }
      } catch (err) {
        msg(form, t("Something went wrong. Please try again.", "صار خطأ، جرّب مرة ثانية."), false);
      }
    }, true);
  });

  /* ---- Social login (Google / GitHub / Facebook) via Supabase OAuth ---- */
  document.addEventListener("DOMContentLoaded", function () {
    if (!sb) return;
    document.querySelectorAll("[data-oauth]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        btn.disabled = true;
        sb.auth.signInWithOAuth({
          provider: btn.getAttribute("data-oauth"),
          options: { redirectTo: location.origin + "/dashboard.html" }
        }).then(function (res) {
          if (res && res.error) {
            btn.disabled = false;
            alert(t("Sign-in failed: ", "تعذّر تسجيل الدخول: ") + res.error.message);
          }
        });
      });
    });
  });

  /* ---- Mirror an existing Supabase (OAuth) session into localStorage ---- */
  document.addEventListener("DOMContentLoaded", function () {
    if (!sb || !sb.auth || !sb.auth.getSession) return;
    sb.auth.getSession().then(function (res) {
      var u = res && res.data && res.data.session && res.data.session.user;
      if (!u) return;
      var md = u.user_metadata || {};
      setSession({
        name: md.full_name || md.name || md.user_name || (u.email || "").split("@")[0],
        email: u.email || "",
        avatar: md.avatar_url || md.picture || ""
      });
    }).catch(function () {});
  });
})();
