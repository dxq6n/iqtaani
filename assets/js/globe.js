/* IQ.T3ani — the hero's Earth.
   ------------------------------------------------------------------
   A dot-matrix globe on a plain 2D canvas. Land comes from a 240x120
   equirectangular bitmask (one bit per cell, base64) derived from Natural
   Earth's 110m land polygons, so the continents are the real thing for about
   4KB instead of a mapping library.

   On top of it, great-circle routes link a handful of cities and packets of
   data run back and forth along them. Drag to spin the globe; let go and it
   picks its own rotation back up. Reduced-motion visitors get one still frame.
   ------------------------------------------------------------------ */
(function () {
  'use strict';

  var host = document.getElementById('codeGlobe');
  if (!host) return;
  var cv = host.querySelector('canvas');
  if (!cv) return;
  var ctx = cv.getContext('2d');
  if (!ctx) return;

  var LAND_W = 240, LAND_H = 120;
  var LAND_B64 = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//8////44AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPx/n/////AAAA/AAYAAAAfAAAAAAAAAAAAAAAAEO3v4f////+AAAPgAAAAAAAAcAAAAAAAAAAAAAADAAAfgP////+AAAHAAAAAAAAAMAAAAAAAAAAAAAAA9jjCAAP///+AAAAAAAAHgAAP/8AAPAAAAAAAAAAcAAAAAAD///8AAAAAAAAYAAD//gAAAAAAAAAAAAAe6zs/AAB///4AAAAAAABgDA/////wGAAAAwAEAAAI/wM//AAf//////////xwHf/////z/+AAAAB//wPI/+sEP4A///wAAAAf8AACHf////////8B8P////////////////////8AAOcgEQAAAAAAAAAAAE////////////////////4AAHAAAgAAAAAAAAAAA5////////////////////wOB4AAAAAAAAAAAAAAAAAf///////Ng+AP4ADAAA/n////////////////+AD///////8COMAHwAAAAD/P///////////////v8AD/7/////4APwABgAAAAH/P//////////////wfAAA+AH////4APzAAAAAAAD/D/////////////JhgAAAFAAf///8AH/gAAAAAIAOD////////////4AHAAAAQAAP////wH/gAAAAAMBuP////////////wAPgAACAAAH////+f/8AAAAAWAhf////////////AAPAAAAAAAT////+f/+AAAAA3H//////////////+AOAAAAAAAB/////f/8AAAAAHn//////////////+AIAAAAAAAB//////8wAAAAAMf//////////////9AAAAAAAAAA//////2HAAAAAF///////////////4AAAAAAAAAAf/////+AgAAAAD///////////////4AAAAAAAAAAf//////wAAAAAB///yf//////////wAAAAAAAAAAf/////yAAAAAAB/z/gP//////////jAAAAAAAAAAf/////gAAAAAA/wY/gD/////////8HAAAAAAAAAAf/////AAAAAAA/gGfnn/////////wAAAAAAAAAAAf////+AAAAAAA/ACY//////////1gGAAAAAAAAAAP////8AAAAAAA/ACM//////////hwEAAAAAAAAAAH////4AAAAAAAOLgA//////////4wcAAAAAAAAAAH////4AAAAAAAN/gDC/////////wz8AAAAAAAAAAB////wAAAAAAAf/gAA/////////wDgAAAAAAAAAAA////AAAAAAAA//8YB/////////4EAAAAAAAAAAAAX///AAAAAAAA///f//////////4AAAAAAAAAAAAAX/5BAAAAAAAB//////z///////4AAAAAAAAAAAAAb/gBAAAAAAAH////8/5///////4AAAAAAAAAAAAAF/gBoAAAAAAP////+/4f//////wAAAAAAAAAAAAAE/gAAAAAAAAP////+f8wH/////gAAAAAAAAAAAAAAfgAAAAAAAAf/////P/4D/////IAAAAAAAAAAAAAAPgAQAAAAAAf/////v/8D/+f/4AAAAAAAAAAAAAAAPgwOAAAAAAf/////n/4Af8P+AAAAAAAAAAAAAAAAHxwAwAAAAAf/////n/wAfwH+wAAAAAAAAAAAAAAAB/gAAAAAAAf/////z/gAfgH+AMAAAAAAAAAAAAAAAT8AAAAAAAf/////z+AAfAF/AIAAAAAAAAAAAAAAAB+AAAAAAAf/////94AAOAB/gIAAAAAAAAAAAAAAAAMAAAAAAAf//////AAAOAA/gCAAAAAAAAAAAAAAAAEBQAAAAAP/////+MAAGAAHAFAAAAAAAAAAAAAAAACDfgAAAAH//////8AAGAACAAAAAAAAAAAAAAAAAABP/wAAAAH//////4AABABgADAAAAAAAAAAAAAAAAAP/4AAAAD//////4AABAAQABAAAAAAAAAAAAAAAAAP//gAAAA/H////wAAAACYBgAAAAAAAAAAAAAAAAAH//wAAAAAA////wAAAADYDAAAAAAAAAAAAAAAAAAP//wAAAAAA////gAAAABoPgAAAAAAAAAAAAAAAAAf//4AAAAAA///+AAAAAA4fuQAAAAAAAAAAAAAAAA///+AAAAAA///8AAAAAAYfASAAAAAAAAAAAAAAAA////AAAAAA///4AAAAAAcfYBYAAAAAAAAAAAAAAA////8AAAAAf//4AAAAAAOCEh/AAAAAAAAAAAAAAA/////AAAAAP//wAAAAAAGAAAPgAAAAAAAAAAAAAA/////gAAAAP//wAAAAAADIABPwIAAAAAAAAAAAAAf////gAAAAH//wAAAAAAAOAAPYCAAAAAAAAAAAAAP////AAAAAH//4AAAAAAAACAAMAAAAAAAAAAAAAAP///+AAAAAH//4AAAAAAAAAAAAAAAAAAAAAAAAAAH///+AAAAAH//4AAAAAAAAAHhAAAAAAAAAAAAAAAH///8AAAAAP//4IAAAAAAAAvjAAAAAAAAAAAAAAAD///8AAAAAP//4cAAAAAAAB/jgAAAAAAAAAAAAAAA///8AAAAAP//h4AAAAAAAD/7gAAAAAAAAAAAAAAAf//8AAAAAP//B4AAAAAAAH//wAAAAAAAAAAAAAAAf//4AAAAAH/+AwAAAAAAAf//4AQAAAAAAAAAAAAAf//4AAAAAH//BwAAAAAAB///8AIAAAAAAAAAAAAAf//gAAAAAD//BwAAAAAAD///+AAAAAAAAAAAAAAAf/8AAAAAAD/+BgAAAAAAD////AAAAAAAAAAAAAAAf/8AAAAAAD/8AAAAAAAAD////AAAAAAAAAAAAAAAf/8AAAAAAD/8AAAAAAAAD////AAAAAAAAAAAAAAA//4AAAAAAB/4AAAAAAAAB////AAAAAAAAAAAAAAA//wAAAAAAA/wAAAAAAAAB////AAAAAAAAAAAAAAA//gAAAAAAA/gAAAAAAAAB/h//AAAAAAAAAAAAAAA//AAAAAAAA+AAAAAAAAAB+Av+AAAAAAAAAAAAAAA/8AAAAAAAAAAAAAAAAAAAAAP8AAQAAAAAAAAAAAB/8AAAAAAAAAAAAAAAAAAAAAH8AAIAAAAAAAAAAAB/4AAAAAAAAAAAAAAAAAAAAADQAAOAAAAAAAAAAAB/gAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAB+AAAAAAAAAAAAAAAAAAAAAAAYAAIAAAAAAAAAAAB+AAAAAAAAAAAAAAAAAAAAAAAYAAwAAAAAAAAAAAD8AAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAD4AAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAD8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAADwAACAefH/gAAAAAAAAAAAAAAAAEAAAAAAAAAAAB//8B///////4AAAAAAAAAAAAAAA/AAAAAAAAAAH///8P////////8AAAAAAAAAAAAAB3gAAAAATf//////8//////////+AAAAAAAAAAAgAHgAAAAH////////////////////AAAAAAAB4B////gAAAAP///////////////////4AAAAD////////4AAAAD////////////////////gAAALP///////8AAAAD/////////////////////gAABj////////wAAHg//////////////////////4AAAAD///////8AQ/AB////////////////////+AAAAB//////////AGP//////////////////////AAAAA///////////////////////////////////8AAD//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';

  /* unpack the bitmask */
  var land = (function () {
    var bin = atob(LAND_B64);
    var bits = new Uint8Array(LAND_W * LAND_H);
    for (var i = 0; i < bits.length; i++) {
      bits[i] = (bin.charCodeAt(i >> 3) >> (7 - (i & 7))) & 1;
    }
    return bits;
  })();

  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var dpr = Math.min(2, window.devicePixelRatio || 1);
  var W = 0, H = 0, R = 0, cx = 0, cy = 0;

  /* ---- land points as unit vectors, built once ---- */
  var pts = [];
  (function buildLand() {
    var step = 2;                                  // every other cell
    for (var yy = 0; yy < LAND_H; yy += step) {
      var lat = 90 - (yy + 0.5) * (180 / LAND_H);
      for (var xx = 0; xx < LAND_W; xx += step) {
        if (!land[yy * LAND_W + xx]) continue;
        var lng = -180 + (xx + 0.5) * (360 / LAND_W);
        var pl = lat * Math.PI / 180, ml = lng * Math.PI / 180;
        var c = Math.cos(pl);
        pts.push({ x: c * Math.cos(ml), y: Math.sin(pl), z: c * Math.sin(ml) });
      }
    }
  })();

  /* ---- cities, and the routes between them ---- */
  function v(lat, lng) {
    var pl = lat * Math.PI / 180, ml = lng * Math.PI / 180, c = Math.cos(pl);
    return { x: c * Math.cos(ml), y: Math.sin(pl), z: c * Math.sin(ml) };
  }
  var CITIES = [
    v(31.95, 35.93),   // Amman
    v(25.20, 55.27),   // Dubai
    v(30.04, 31.24),   // Cairo
    v(41.01, 28.98),   // Istanbul
    v(51.50, -0.12),   // London
    v(52.52, 13.40),   // Berlin
    v(40.71, -74.01),  // New York
    v(37.77, -122.42), // San Francisco
    v(35.68, 139.69),  // Tokyo
    v(1.35, 103.82),   // Singapore
    v(19.07, 72.87),   // Mumbai
    v(-23.55, -46.63), // Sao Paulo
    v(-33.87, 151.21), // Sydney
    v(-1.29, 36.82)    // Nairobi
  ];
  var ROUTES = [
    [0, 1], [0, 2], [0, 3], [0, 4], [1, 10], [2, 13], [3, 5], [4, 6],
    [5, 8], [6, 7], [7, 8], [8, 9], [9, 12], [10, 9], [11, 6], [13, 12], [4, 0], [6, 11]
  ];

  /* slerp along the great circle between two unit vectors */
  function slerp(a, b, t) {
    var dot = Math.max(-1, Math.min(1, a.x * b.x + a.y * b.y + a.z * b.z));
    var om = Math.acos(dot);
    if (om < 1e-4) return { x: a.x, y: a.y, z: a.z };
    var s = Math.sin(om), s1 = Math.sin((1 - t) * om) / s, s2 = Math.sin(t * om) / s;
    return { x: a.x * s1 + b.x * s2, y: a.y * s1 + b.y * s2, z: a.z * s1 + b.z * s2 };
  }

  /* packets travelling the routes, half of them the other way */
  var packets = [];
  for (var i = 0; i < 16; i++) {
    packets.push({
      r: i % ROUTES.length,
      t: Math.random(),
      sp: 0.00022 + Math.random() * 0.00030,
      back: i % 2 === 1
    });
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
    R = Math.min(W, H) * 0.42;
    cx = W / 2;
    cy = H / 2;
  }

  var spin = 1.13, tilt = 0.38;   // opens on ~25E — Africa, Europe, the Middle East          // tilt keeps the northern hemisphere facing us
  var cosY = 1, sinY = 0, cosX = 1, sinX = 0;

  function setRot() {
    cosY = Math.cos(spin); sinY = Math.sin(spin);
    cosX = Math.cos(tilt); sinX = Math.sin(tilt);
  }

  function project(p) {
    var x1 = p.x * cosY - p.z * sinY;
    var z1 = p.x * sinY + p.z * cosY;
    var y2 = p.y * cosX - z1 * sinX;
    var z2 = p.y * sinX + z1 * cosX;
    /* canvas Y grows downward while our model's Y grows up, hence the flip */
    return { sx: cx + x1 * R, sy: cy - y2 * R, z: z2 };
  }

  function draw(t, dt) {
    setRot();
    ctx.clearRect(0, 0, W, H);

    /* outer atmosphere haze */
    var glow = ctx.createRadialGradient(cx, cy, R * 0.92, cx, cy, R * 1.42);
    glow.addColorStop(0, 'rgba(198,210,228,0.20)');
    glow.addColorStop(0.35, 'rgba(150,165,190,0.07)');
    glow.addColorStop(1, 'rgba(120,140,170,0)');
    ctx.fillStyle = glow;
    ctx.beginPath(); ctx.arc(cx, cy, R * 1.42, 0, 6.283); ctx.fill();

    /* ocean — opaque, and light enough to read as a solid body against black */
    ctx.fillStyle = '#000';
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, 6.283); ctx.fill();
    var sea = ctx.createRadialGradient(cx - R * 0.36, cy - R * 0.42, R * 0.05, cx, cy, R * 1.06);
    sea.addColorStop(0, '#39414f');
    sea.addColorStop(0.45, '#232935');
    sea.addColorStop(0.78, '#141821');
    sea.addColorStop(1, '#080a0e');
    ctx.fillStyle = sea;
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, 6.283); ctx.fill();

    /* inner rim light: the fresnel edge that sells a sphere */
    var fres = ctx.createRadialGradient(cx, cy, R * 0.80, cx, cy, R);
    fres.addColorStop(0, 'rgba(190,205,228,0)');
    fres.addColorStop(0.75, 'rgba(190,205,228,0.05)');
    fres.addColorStop(1, 'rgba(214,226,244,0.26)');
    ctx.fillStyle = fres;
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, 6.283); ctx.fill();

    /* specular sheen, upper-left, matching the light direction */
    var spec = ctx.createRadialGradient(cx - R * 0.42, cy - R * 0.46, 0, cx - R * 0.42, cy - R * 0.46, R * 0.72);
    spec.addColorStop(0, 'rgba(255,255,255,0.09)');
    spec.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = spec;
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, 6.283); ctx.fill();

    /* land as a dot matrix; squares are cheaper than arcs and read as pixels */
    var dotSize = Math.max(1, R * 0.0125);
    for (var i = 0; i < pts.length; i++) {
      var s = project(pts[i]);
      if (s.z < 0.02) continue;                    // back of the sphere
      /* dim the land as it turns away from the light in the upper left */
      var lit = 1 - Math.min(1, (Math.hypot(s.sx - (cx - R * 0.38), s.sy - (cy - R * 0.42)) / (R * 1.7)));
      var a = (0.20 + s.z * 0.55) * (0.55 + lit * 0.65);
      ctx.fillStyle = 'rgba(232,238,248,' + Math.min(1, a).toFixed(3) + ')';
      ctx.fillRect(s.sx - dotSize / 2, s.sy - dotSize / 2, dotSize, dotSize);
    }

    /* routes */
    ctx.lineWidth = 1;
    for (var r = 0; r < ROUTES.length; r++) {
      var A = CITIES[ROUTES[r][0]], B = CITIES[ROUTES[r][1]];
      var prev = null;
      for (var k = 0; k <= 14; k++) {
        var cur = project(slerp(A, B, k / 14));
        if (prev && !(prev.z < 0 && cur.z < 0)) {
          var d = Math.min(prev.z, cur.z);
          if (d > -0.05) {
            ctx.strokeStyle = 'rgba(168,176,190,' + (0.05 + Math.max(0, d) * 0.30).toFixed(3) + ')';
            ctx.beginPath(); ctx.moveTo(prev.sx, prev.sy); ctx.lineTo(cur.sx, cur.sy); ctx.stroke();
          }
        }
        prev = cur;
      }
    }

    /* packets running both directions along those routes */
    for (var q = 0; q < packets.length; q++) {
      var pk = packets[q];
      pk.t += pk.sp * dt;
      if (pk.t >= 1) { pk.t = 0; pk.r = (Math.random() * ROUTES.length) | 0; pk.back = Math.random() < 0.5; }
      var ra = CITIES[ROUTES[pk.r][0]], rb = CITIES[ROUTES[pk.r][1]];
      var pos = project(slerp(ra, rb, pk.back ? 1 - pk.t : pk.t));
      if (pos.z < 0) continue;
      var pa = 0.3 + pos.z * 0.7;
      ctx.beginPath(); ctx.arc(pos.sx, pos.sy, 3.4, 0, 6.283);
      ctx.fillStyle = 'rgba(255,255,255,' + (pa * 0.14).toFixed(3) + ')'; ctx.fill();
      ctx.beginPath(); ctx.arc(pos.sx, pos.sy, 1.5, 0, 6.283);
      ctx.fillStyle = 'rgba(255,255,255,' + pa.toFixed(3) + ')'; ctx.fill();
    }

    /* city markers */
    for (var c = 0; c < CITIES.length; c++) {
      var cp = project(CITIES[c]);
      if (cp.z < 0.02) continue;
      var pulse = 0.6 + 0.4 * Math.sin(t * 0.0022 + c);
      var ca = (0.25 + cp.z * 0.75) * pulse;
      ctx.beginPath(); ctx.arc(cp.sx, cp.sy, 5.5, 0, 6.283);
      ctx.fillStyle = 'rgba(255,255,255,' + (ca * 0.13).toFixed(3) + ')'; ctx.fill();
      ctx.beginPath(); ctx.arc(cp.sx, cp.sy, 2, 0, 6.283);
      ctx.fillStyle = 'rgba(255,255,255,' + ca.toFixed(3) + ')'; ctx.fill();
    }

    /* rim */
    ctx.strokeStyle = 'rgba(214,226,244,0.34)';
    ctx.lineWidth = 1.1;
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, 6.283); ctx.stroke();
  }

  /* ---- drag to spin ---- */
  var dragging = false, lastX = 0, lastY = 0, idleAt = 0;

  function down(e) {
    dragging = true;
    host.classList.add('is-dragging');
    lastX = e.clientX;
    lastY = e.clientY;
  }
  function move(e) {
    if (!dragging) return;
    spin += (e.clientX - lastX) * 0.006;
    tilt -= (e.clientY - lastY) * 0.004;
    tilt = Math.max(-1.2, Math.min(1.2, tilt));
    lastX = e.clientX; lastY = e.clientY;
    if (e.cancelable) e.preventDefault();
  }
  function up() {
    if (!dragging) return;
    dragging = false;
    host.classList.remove('is-dragging');
    idleAt = performance.now() + 1200;     // let it rest before auto-spin resumes
  }

  host.addEventListener('pointerdown', down);
  addEventListener('pointermove', move, { passive: false });
  addEventListener('pointerup', up);
  addEventListener('pointercancel', up);

  var last = 0, acc = 0, visible = true;

  function loop(t) {
    requestAnimationFrame(loop);
    if (!visible || document.hidden) { last = t; return; }
    var dt = (t - last) || 16; last = t;
    acc += dt;
    if (acc < 33) return;                  // ~30fps
    var step = Math.min(80, acc); acc = 0;
    if (!dragging && t > idleAt) spin += step * 0.00012;
    draw(t, step);
  }

  size();
  if (reduce) { setRot(); draw(0, 33); }
  else requestAnimationFrame(loop);

  var rt = null;
  addEventListener('resize', function () {
    clearTimeout(rt);
    rt = setTimeout(function () { size(); if (reduce) draw(0, 33); }, 200);
  }, { passive: true });

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (e) { visible = e[0].isIntersecting; }, { threshold: 0 }).observe(host);
  }
})();
