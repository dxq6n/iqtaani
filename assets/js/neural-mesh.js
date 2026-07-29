/* Vixo — AI Synapse Mesh
   ------------------------------------------------------------------
   An abstract neural cluster: nodes scattered through a spherical shell
   (with radial jitter so it reads organic rather than as a wireframe ball),
   joined by thin synapses, with packets of data flowing along them.

   Rendered on a 2D canvas rather than WebGL. The whole scene is a few
   hundred lines and dots; at that size a canvas holds 60fps comfortably,
   and it avoids pulling a ~600KB 3D library back in for one decoration.

   Idle    : slow 3D rotation, nodes breathing, packets travelling.
   Hover   : nodes near the cursor brighten and grow, extra synapses snap in
             around them, and the whole mesh speeds up a little.
   Drag    : grab to spin it; it resumes on its own shortly after release.
   Reduced motion: one still frame, no loop.
   ------------------------------------------------------------------ */
(function () {
  'use strict';

  var host = document.getElementById('codeGlobe');
  if (!host) return;
  var cv = host.querySelector('canvas');
  if (!cv) return;
  var ctx = cv.getContext('2d', { alpha: true });
  if (!ctx) return;

  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var dpr = Math.min(2, window.devicePixelRatio || 1);

  /* ---- tuning ---- */
  var NODE_COUNT   = 190;
  var LINK_DIST    = 0.42;   // in unit-sphere space
  var MAX_LINKS    = 520;
  var PACKETS      = 42;
  var HOVER_RADIUS = 130;    // screen px
  var CORE = { r: 0.60, spread: 0.42 };   // shell radius and how far nodes stray

  /* Brand palette: electric blue -> cyan -> white, with a rare green accent. */
  var PALETTE = [
    [ 96, 165, 250],   // electric blue
    [ 56, 189, 248],   // sky
    [ 34, 211, 238],   // cyan
    [226, 245, 255]    // near white
  ];
  var ACCENT = [ 74, 222, 128];   // neon green, used on a few nodes only

  var W = 0, H = 0, R = 0, cx = 0, cy = 0;
  var nodes = [], links = [], packets = [];
  var spin = 0.6, tilt = -0.18, spinVel = 0;
  var mouse = { x: -1e4, y: -1e4, inside: false };
  var energy = 0;            // 0 idle .. 1 fully "woken" by the cursor
  var glowCache = null, glowAt = -1, glowR = -1;

  /* one reusable segment bucket per (palette colour, alpha level) */
  var ALPHA_STEPS = 6;
  var PAL_PRE = [], buckets = [];
  (function prepBuckets() {
    for (var i = 0; i < PALETTE.length; i++) {
      PAL_PRE.push('rgba(' + PALETTE[i][0] + ',' + PALETTE[i][1] + ',' + PALETTE[i][2] + ',');
      for (var j = 0; j < ALPHA_STEPS; j++) buckets.push([]);
    }
  })();

  /* ---- build the cluster ---- */
  function seed() {
    nodes.length = 0;
    /* Fibonacci sphere gives an even angular spread; the radial jitter is what
       turns an even shell into something organic with gaps and inner depth. */
    var golden = Math.PI * (3 - Math.sqrt(5));
    for (var i = 0; i < NODE_COUNT; i++) {
      var y = 1 - (i / (NODE_COUNT - 1)) * 2;
      var rad = Math.sqrt(Math.max(0, 1 - y * y));
      var th = golden * i;
      var jitter = CORE.r + Math.pow(Math.random(), 0.6) * CORE.spread;
      var wob = 0.88 + Math.random() * 0.24;
      nodes.push({
        x: Math.cos(th) * rad * jitter * wob,
        y: y * jitter,
        z: Math.sin(th) * rad * jitter * wob,
        base: 0.9 + Math.random() * 1.5,          // dot radius
        phase: Math.random() * 6.283,
        speed: 0.6 + Math.random() * 1.4,
        pal: (Math.random() * PALETTE.length) | 0,
        pre: '',   // 'rgba(r,g,b,' filled in below
        accent: Math.random() < 0.045,
        lit: 0                                     // hover response, eased
      });
    }
    for (var pi = 0; pi < nodes.length; pi++) {
      nodes[pi].hue = PALETTE[nodes[pi].pal];
      var c0 = nodes[pi].accent ? ACCENT : nodes[pi].hue;
      nodes[pi].pre = 'rgba(' + c0[0] + ',' + c0[1] + ',' + c0[2] + ',';
    }

    /* Static synapses: every pair inside LINK_DIST, capped so a dense build
       can never blow the frame budget. */
    links.length = 0;
    for (var a = 0; a < nodes.length && links.length < MAX_LINKS; a++) {
      for (var b = a + 1; b < nodes.length && links.length < MAX_LINKS; b++) {
        var dx = nodes[a].x - nodes[b].x,
            dy = nodes[a].y - nodes[b].y,
            dz = nodes[a].z - nodes[b].z;
        var d2 = dx * dx + dy * dy + dz * dz;
        if (d2 < LINK_DIST * LINK_DIST) links.push([a, b, Math.sqrt(d2)]);
      }
    }

    packets.length = 0;
    for (var p = 0; p < PACKETS && links.length; p++) {
      packets.push({
        l: (Math.random() * links.length) | 0,
        t: Math.random(),
        sp: 0.00030 + Math.random() * 0.00055,
        back: Math.random() < 0.5
      });
    }
  }

  function size() {
    var box = host.getBoundingClientRect();
    W = Math.max(240, box.width);
    H = Math.max(240, box.height || W);
    cv.width = Math.round(W * dpr);
    cv.height = Math.round(H * dpr);
    cv.style.width = W + 'px';
    cv.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    R = Math.min(W, H) * 0.40;
    cx = W / 2;
    cy = H / 2;
  }

  /* ---- projection ---- */
  var cosY = 1, sinY = 0, cosX = 1, sinX = 0;
  function setRot() {
    cosY = Math.cos(spin);  sinY = Math.sin(spin);
    cosX = Math.cos(tilt);  sinX = Math.sin(tilt);
  }

  /* Screen positions are recomputed once per frame into flat arrays; doing it
     per-link instead would project the same node many times over. */
  var sx = [], sy = [], sz = [], sscale = [];
  var order = [];
  function depthCmp(p1, p2) { return sz[p1] - sz[p2]; }
  function projectAll() {
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      var x1 = n.x * cosY - n.z * sinY;
      var z1 = n.x * sinY + n.z * cosY;
      var y2 = n.y * cosX - z1 * sinX;
      var z2 = n.y * sinX + z1 * cosX;
      var persp = 1 / (1.85 - z2 * 0.55);          // gentle depth scaling
      sx[i] = cx + x1 * R * persp * 1.6;
      sy[i] = cy - y2 * R * persp * 1.6;
      sz[i] = z2;
      sscale[i] = persp;
    }
  }

  /* toFixed allocates and formats; in a loop this size a 2-decimal round via
     integer maths is measurably cheaper and visually identical. */
  function a2s(a) { return ((a * 100) | 0) / 100; }
  function rgba(c, a) { return 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + a2s(a) + ')'; }

  function draw(t, dt) {
    setRot();
    projectAll();
    ctx.clearRect(0, 0, W, H);

    /* soft core glow so the cluster reads as one body */
    if (!glowCache || Math.abs(energy - glowAt) > 0.05 || glowR !== R) {
      glowCache = ctx.createRadialGradient(cx, cy, R * 0.1, cx, cy, R * 1.25);
      glowCache.addColorStop(0, 'rgba(56,189,248,' + a2s(0.10 + energy * 0.10) + ')');
      glowCache.addColorStop(0.55, 'rgba(59,130,246,0.045)');
      glowCache.addColorStop(1, 'rgba(34,211,238,0)');
      glowAt = energy; glowR = R;
    }
    ctx.fillStyle = glowCache;
    ctx.beginPath(); ctx.arc(cx, cy, R * 1.25, 0, 6.283); ctx.fill();

    /* how strongly each node is being touched by the cursor */
    var hoverR2 = HOVER_RADIUS * HOVER_RADIUS;
    for (var i = 0; i < nodes.length; i++) {
      var target = 0;
      if (mouse.inside) {
        var mdx = sx[i] - mouse.x, mdy = sy[i] - mouse.y;
        var m2 = mdx * mdx + mdy * mdy;
        if (m2 < hoverR2) target = 1 - Math.sqrt(m2) / HOVER_RADIUS;
      }
      /* ease so brightening and fading are smooth, not snappy */
      nodes[i].lit += (target - nodes[i].lit) * Math.min(1, dt * 0.012);
    }

    /* ---- synapses ----
       Stroking 500+ segments individually is the single most expensive thing
       on this canvas. Instead the segments are bucketed by palette colour and
       a quantised alpha, then each bucket is stroked as ONE path — a few dozen
       stroke() calls a frame instead of hundreds, with no visible difference. */
    ctx.lineCap = 'round';
    for (var bi = 0; bi < buckets.length; bi++) buckets[bi].length = 0;

    for (var k = 0; k < links.length; k++) {
      var a = links[k][0], b = links[k][1], len = links[k][2];
      var depth = (sz[a] + sz[b]) * 0.5;                 // -1 back .. 1 front
      var fade = 1 - len / LINK_DIST;                    // shorter = stronger
      var boost = nodes[a].lit > nodes[b].lit ? nodes[a].lit : nodes[b].lit;
      var alpha = (0.07 + fade * 0.21) * (0.45 + (depth + 1) * 0.34) + boost * 0.28;
      if (alpha < 0.015) continue;
      if (alpha > 0.9) alpha = 0.9;
      var lvl = (alpha * ALPHA_STEPS / 0.9) | 0;
      if (lvl >= ALPHA_STEPS) lvl = ALPHA_STEPS - 1;
      buckets[nodes[a].pal * ALPHA_STEPS + lvl].push(sx[a], sy[a], sx[b], sy[b]);
    }

    for (var pal = 0; pal < PALETTE.length; pal++) {
      for (var lv = 0; lv < ALPHA_STEPS; lv++) {
        var seg = buckets[pal * ALPHA_STEPS + lv];
        if (!seg.length) continue;
        ctx.strokeStyle = PAL_PRE[pal] + a2s((lv + 0.5) * 0.9 / ALPHA_STEPS) + ')';
        ctx.lineWidth = 0.55 + lv * 0.09;
        ctx.beginPath();
        for (var si = 0; si < seg.length; si += 4) {
          ctx.moveTo(seg[si], seg[si + 1]);
          ctx.lineTo(seg[si + 2], seg[si + 3]);
        }
        ctx.stroke();
      }
    }

    /* ---- extra synapses that snap in around the cursor ---- */
    if (mouse.inside) {
      ctx.lineWidth = 0.6;
      /* gather the woken nodes first: pairing only those keeps this from
         being an O(n^2) sweep of the whole cluster every frame */
      var woken = [];
      for (var m = 0; m < nodes.length && woken.length < 26; m++) {
        if (nodes[m].lit > 0.3) woken.push(m);
      }
      for (var wa = 0; wa < woken.length; wa++) {
        for (var wb = wa + 1; wb < woken.length; wb++) {
          var ia = woken[wa], ib = woken[wb];
          var ddx = sx[ia] - sx[ib], ddy = sy[ia] - sy[ib];
          var dd2 = ddx * ddx + ddy * ddy;
          if (dd2 > hoverR2 * 0.85) continue;
          var st = Math.min(nodes[ia].lit, nodes[ib].lit);
          /* mostly cyan; the green accent shows on a small, stable subset */
          var col = ((ia + ib) % 9 === 0) ? ACCENT : [125, 211, 252];
          ctx.strokeStyle = rgba(col, st * 0.22);
          ctx.beginPath();
          ctx.moveTo(sx[ia], sy[ia]);
          ctx.lineTo(sx[ib], sy[ib]);
          ctx.stroke();
        }
      }
    }

    /* ---- packets flowing along the synapses ---- */
    for (var q = 0; q < packets.length; q++) {
      var pk = packets[q];
      pk.t += pk.sp * dt * (1 + energy * 0.9);
      if (pk.t >= 1) { pk.t = 0; pk.l = (Math.random() * links.length) | 0; pk.back = Math.random() < 0.5; }
      var L = links[pk.l];
      if (!L) continue;
      var u = pk.back ? 1 - pk.t : pk.t;
      var px = sx[L[0]] + (sx[L[1]] - sx[L[0]]) * u;
      var py = sy[L[0]] + (sy[L[1]] - sy[L[0]]) * u;
      var pz = sz[L[0]] + (sz[L[1]] - sz[L[0]]) * u;
      var pa = 0.28 + (pz + 1) * 0.32;
      ctx.beginPath(); ctx.arc(px, py, 2.6, 0, 6.283);
      ctx.fillStyle = 'rgba(180,240,255,' + (pa * 0.16).toFixed(3) + ')'; ctx.fill();
      ctx.beginPath(); ctx.arc(px, py, 1.15, 0, 6.283);
      ctx.fillStyle = 'rgba(236,254,255,' + pa.toFixed(3) + ')'; ctx.fill();
    }

    /* ---- nodes, farthest first so near ones sit on top ---- */
    if (order.length !== nodes.length) {
      order.length = 0;
      for (var o = 0; o < nodes.length; o++) order.push(o);
    }
    order.sort(depthCmp);

    for (var idx = 0; idx < order.length; idx++) {
      var j = order[idx], nd = nodes[j];
      nd.phase += dt * 0.0012 * nd.speed * (1 + energy * 0.7);
      var pulse = 0.62 + 0.38 * Math.sin(nd.phase);
      var depth2 = (sz[j] + 1) * 0.5;                    // 0 back .. 1 front
      var a2 = (0.24 + depth2 * 0.62) * pulse + nd.lit * 0.38;
      var rr = (nd.base * sscale[j] * 1.5) * (1 + nd.lit * 1.15);
      var col = nd.accent ? ACCENT : nd.hue;

      if (a2 > 0.16) {
      ctx.beginPath(); ctx.arc(sx[j], sy[j], rr * 3.6, 0, 6.283);
      ctx.fillStyle = nd.pre + a2s(a2 * 0.13 < 0.5 ? a2 * 0.13 : 0.5) + ')'; ctx.fill();
      }
      ctx.beginPath(); ctx.arc(sx[j], sy[j], rr, 0, 6.283);
      ctx.fillStyle = nd.pre + a2s(a2 < 1 ? a2 : 1) + ')'; ctx.fill();

      if (nd.lit > 0.4) {                                 // halo ring on hover
        ctx.strokeStyle = rgba(col, (nd.lit - 0.4) * 0.5);
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.arc(sx[j], sy[j], rr * 5.5, 0, 6.283); ctx.stroke();
      }
    }
  }

  /* ---- interaction ---- */
  var dragging = false, lastX = 0, lastY = 0, resumeAt = 0;

  host.addEventListener('pointerenter', function () { mouse.inside = true; });
  host.addEventListener('pointerleave', function () {
    mouse.inside = false; mouse.x = mouse.y = -1e4;
  });
  host.addEventListener('pointermove', function (e) {
    var r = cv.getBoundingClientRect();
    mouse.x = e.clientX - r.left;
    mouse.y = e.clientY - r.top;
    mouse.inside = true;
    if (dragging) {
      spin += (e.clientX - lastX) * 0.006;
      tilt -= (e.clientY - lastY) * 0.004;
      tilt = Math.max(-1.2, Math.min(1.2, tilt));
      lastX = e.clientX; lastY = e.clientY;
      if (e.cancelable) e.preventDefault();
    }
  }, { passive: false });
  host.addEventListener('pointerdown', function (e) {
    dragging = true; host.classList.add('is-dragging');
    lastX = e.clientX; lastY = e.clientY;
  });
  addEventListener('pointerup', function () {
    if (!dragging) return;
    dragging = false; host.classList.remove('is-dragging');
    resumeAt = performance.now() + 900;
  });

  /* ---- loop ---- */
  var last = 0, visible = true;

  function frame(t) {
    requestAnimationFrame(frame);
    if (!visible || document.hidden) { last = t; return; }
    var dt = Math.min(50, (t - last) || 16); last = t;

    /* energy eases toward 1 while hovered, back to 0 when not */
    var want = mouse.inside ? 1 : 0;
    energy += (want - energy) * Math.min(1, dt * 0.006);

    if (!dragging && t > resumeAt) spin += dt * 0.00013 * (1 + energy * 1.1);
    tilt += Math.sin(t * 0.00007) * 0.00016;

    draw(t, dt);
  }

  seed();
  size();
  if (reduce) { setRot(); projectAll(); draw(0, 16); }
  else requestAnimationFrame(frame);

  var rt = null;
  addEventListener('resize', function () {
    clearTimeout(rt);
    rt = setTimeout(function () { size(); if (reduce) draw(0, 16); }, 200);
  }, { passive: true });

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (e) { visible = e[0].isIntersecting; }, { threshold: 0 }).observe(host);
  }
})();
