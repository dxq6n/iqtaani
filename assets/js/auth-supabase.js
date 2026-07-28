/* IQ.T3ani authentication — real accounts stored in Supabase.
   ------------------------------------------------------------------
   Email/password and social sign-in both go through Supabase Auth, so an
   account created on one device works on every other device.

   The rest of the site reads the signed-in user from localStorage
   (iqt_auth="1" + iqt_user), so every Supabase session is mirrored there and
   cleared on sign-out. Supabase itself remains the source of truth.
   ------------------------------------------------------------------ */
(function () {
  "use strict";

  var SB_URL = "https://qscamzqvkalpzzxwphvw.supabase.co";
  var SB_KEY = "sb_publishable_LK96zF2r76J2Dex0NpuonA_YezK8mqi";

  var sb = null;
  try {
    if (window.supabase && window.supabase.createClient) {
      sb = window.supabase.createClient(SB_URL, SB_KEY, {
        auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
      });
      window.__IQ_SB__ = sb;
    }
  } catch (e) {}

  function isAr() { return document.documentElement.getAttribute("data-lang") === "ar"; }
  function t(en, ar) { return isAr() ? ar : en; }

  /* ---- mirror a Supabase user into the localStorage the site reads ---- */
  function profileOf(user) {
    var md = (user && user.user_metadata) || {};
    var email = (user && user.email) || "";
    return {
      name: md.full_name || md.name || md.user_name || (email ? email.split("@")[0] : "Learner"),
      email: email,
      avatar: md.avatar_url || md.picture || ""
    };
  }
  function setSession(user) {
    try {
      localStorage.setItem("iqt_auth", "1");
      localStorage.setItem("iqt_user", JSON.stringify(profileOf(user)));
    } catch (e) {}
  }
  function clearSession() {
    try {
      localStorage.removeItem("iqt_auth");
      localStorage.removeItem("iqt_user");
    } catch (e) {}
  }

  /* Sign out of Supabase *and* the mirrored session, then run `done`.
     Exposed so the logout buttons in app.js end the real session too — a
     leftover Supabase session would otherwise sign the user straight back in. */
  window.__IQ_signOut = function (done) {
    clearSession();
    var finished = false;
    function finish() { if (!finished) { finished = true; if (done) done(); } }
    try {
      if (sb && sb.auth && sb.auth.signOut) {
        sb.auth.signOut().then(finish, finish);
        setTimeout(finish, 1500); // never strand the user if the network hangs
        return;
      }
    } catch (e) {}
    finish();
  };

  /* ---- inline form feedback ---- */
  function msg(form, text, ok) {
    var el = form.querySelector(".sb-msg");
    if (!el) {
      el = document.createElement("div");
      el.className = "sb-msg";
      el.style.cssText = "margin-top:12px;padding:10px 14px;border-radius:10px;font-size:.88rem;line-height:1.5";
      form.appendChild(el);
    }
    el.style.background = ok ? "rgba(56,189,248,.14)" : "rgba(239,68,68,.14)";
    el.style.color = ok ? "#7dd3fc" : "#f87171";
    el.textContent = text;
    return el;
  }

  /* Supabase returns English error strings; map the common ones to Arabic. */
  function readableError(err) {
    var m = ((err && err.message) || "").toLowerCase();
    if (m.indexOf("invalid login credentials") > -1)
      return t("Wrong email or password.", "البريد الإلكتروني أو كلمة السر غير صحيحة.");
    if (m.indexOf("email not confirmed") > -1)
      return t("Please confirm your email first — check your inbox.", "أكّد بريدك الإلكتروني أولًا — شيّك على الإيميل.");
    if (m.indexOf("already registered") > -1 || m.indexOf("already been registered") > -1)
      return t("This email already has an account — sign in instead.", "هذا البريد عنده حساب مسبقًا — سجّل دخولك.");
    if (m.indexOf("password") > -1 && m.indexOf("6") > -1)
      return t("Password must be at least 6 characters.", "كلمة السر يجب أن تكون 6 أحرف على الأقل.");
    if (m.indexOf("rate limit") > -1 || m.indexOf("too many") > -1)
      return t("Too many attempts — please wait a moment.", "محاولات كثيرة — استنى شوي وجرّب كمان مرة.");
    if (m.indexOf("failed to fetch") > -1 || m.indexOf("network") > -1)
      return t("Can't reach the server — check your connection.", "ما قدرنا نوصل للسيرفر — تأكد من اتصالك بالإنترنت.");
    return (err && err.message) || t("Something went wrong. Please try again.", "صار خطأ، جرّب مرة ثانية.");
  }

  /* ---- email / password (register.html + login.html) ---- */
  document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form[data-auth]");
    if (!form) return;
    var isRegister = /register/i.test(location.pathname) || !!form.querySelector("#name");
    var submit = form.querySelector('button[type="submit"]');

    function busy(on, label) {
      if (!submit) return;
      submit.disabled = on;
      submit.style.opacity = on ? ".7" : "";
      if (on) {
        if (!submit.dataset.label) submit.dataset.label = submit.innerHTML;
        submit.textContent = label;
      } else if (submit.dataset.label) {
        submit.innerHTML = submit.dataset.label;
      }
    }

    form.addEventListener("submit", async function (ev) {
      ev.preventDefault();
      ev.stopImmediatePropagation();

      if (!sb) { msg(form, t("Sign-in is unavailable right now. Please refresh.", "تسجيل الدخول مش متاح حاليًا. حدّث الصفحة."), false); return; }

      var email = ((form.querySelector("#email") || {}).value || "").trim();
      var pwEl = form.querySelector("#pw") || form.querySelector("#loginPw") || form.querySelector('input[type="password"]');
      var pw = (pwEl || {}).value || "";
      var name = ((form.querySelector("#name") || {}).value || "").trim();

      if (!email || !pw) { msg(form, t("Please fill in all fields.", "عبّي كل الحقول."), false); return; }
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { msg(form, t("Please enter a valid email.", "أدخل بريدًا إلكترونيًا صحيحًا."), false); return; }
      if (isRegister && pw.length < 6) { msg(form, t("Password must be at least 6 characters.", "كلمة السر يجب أن تكون 6 أحرف على الأقل."), false); return; }

      busy(true, isRegister ? t("Creating account…", "جاري إنشاء الحساب…") : t("Signing in…", "جاري تسجيل الدخول…"));
      try {
        if (isRegister) {
          var out = await sb.auth.signUp({
            email: email,
            password: pw,
            options: {
              data: { full_name: name || email.split("@")[0] },
              emailRedirectTo: location.origin + "/dashboard.html"
            }
          });
          if (out.error) { busy(false); msg(form, readableError(out.error), false); return; }

          // Supabase returns a user but no session when email confirmation is
          // switched on for the project — the user must click the emailed link.
          if (out.data && out.data.session) {
            setSession(out.data.user);
            msg(form, t("Account created! Signing you in…", "تم إنشاء الحساب! جاري الدخول…"), true);
            location.href = "dashboard.html";
          } else {
            busy(false);
            msg(form, t(
              "Almost there — we sent a confirmation link to " + email + ". Open it to activate your account.",
              "ضلّ خطوة — بعتنالك رابط تأكيد على " + email + ". افتحه لتفعيل حسابك."
            ), true);
          }
        } else {
          var res = await sb.auth.signInWithPassword({ email: email, password: pw });
          if (res.error) { busy(false); msg(form, readableError(res.error), false); return; }
          setSession(res.data.user);
          location.href = "dashboard.html";
        }
      } catch (err) {
        busy(false);
        msg(form, readableError(err), false);
      }
    }, true);

    /* ---- forgot password ---- */
    var forgot = form.querySelector('a[data-ar="نسيت كلمة المرور؟"]');
    if (forgot && !isRegister) {
      forgot.addEventListener("click", async function (ev) {
        ev.preventDefault();
        if (!sb) return;
        var email = ((form.querySelector("#email") || {}).value || "").trim();
        if (!email) {
          msg(form, t("Enter your email above first, then tap “Forgot password?”.", "اكتب بريدك فوق أولًا، وبعدين اضغط «نسيت كلمة المرور؟»."), false);
          return;
        }
        msg(form, t("Sending reset link…", "جاري إرسال رابط الاستعادة…"), true);
        try {
          var r = await sb.auth.resetPasswordForEmail(email, { redirectTo: location.origin + "/account.html" });
          if (r.error) { msg(form, readableError(r.error), false); return; }
          msg(form, t("Reset link sent to " + email + ".", "بعتنا رابط استعادة على " + email + "."), true);
        } catch (e) {
          msg(form, readableError(e), false);
        }
      });
    }
  });

  /* ---- social login (Google / GitHub / Facebook) ---- */
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

  /* ---- keep the mirrored session in step with Supabase on every page ---- */
  if (sb && sb.auth) {
    try {
      sb.auth.getSession().then(function (res) {
        var u = res && res.data && res.data.session && res.data.session.user;
        if (u) setSession(u); else clearSession();
      }).catch(function () {});

      sb.auth.onAuthStateChange(function (event, session) {
        if (session && session.user) setSession(session.user);
        else if (event === "SIGNED_OUT") clearSession();
      });
    } catch (e) {}
  }
})();
