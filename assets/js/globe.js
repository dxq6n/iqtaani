/* IQ.T3ani — the hero's self-turning "code globe".
   ------------------------------------------------------------------
   A wireframe sphere drawn on a 2D canvas: meridians and parallels, glowing
   nodes where developers "are", great-circle links between some of them, and
   a few code tokens ({}, </>, ;) riding the surface. It spins on its own and
   needs no library — the three.js build this replaced was 596KB on its own.
   Falls back to a static frame when the visitor asks for reduced motion.
   ------------------------------------------------------------------ */
(function () {
  'use strict';

  var host = document.getElementById('codeGlobe');
  if (!host) return;
  var cv = host.querySelector('canvas');
  if (!cv) return;
  var ctx = cv.getContext('2d');
  if (!ctx) return;

  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var dpr = Math.min(2, window.devicePixelRatio || 1);
  var W = 0, H = 0, R = 0, cx = 0, cy = 0;

  var TOKENS = ['{ }', '</>', '( )', '[ ]', '=>', ';', '#', '&&', 'fn', '::'];

  /* Nodes scattered with a Fibonacci spiral so they spread evenly, not in bands. */
  var NODE_N = 64;
  var nodes = [];
  (function seed() {
    var golden = Math.PI * (3 - Math.sqrt(5));
    var tk = 0;
    for (var i = 0; i < NODE_N; i++) {
      var y = 1 - (i / (NODE_N - 1)) * 2;          // 1 .. -1
      var rad = Math.sqrt(Math.max(0, 1 - y * y));
      var th = golden * i;
      nodes.push({
        x: Math.cos(th) * rad, y: y, z: Math.sin(th) * rad,
        pulse: Math.random() * 6.283,
        big: i % 6 === 0,
        token: i % 5 === 0 ? TOKENS[tk++ % TOKENS.length] : null
      });
    }
  })();

  /* A handful of links between nearby nodes — the "network" read. */
  var links = [];
  (function link() {
    for (var i = 0; i < nodes.length; i++) {
      for (var j = i + 1; j < nodes.length; j++) {
        var a = nodes[i], b = nodes[j];
        var d = (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y) + (a.z - b.z) * (a.z - b.z);
        if (d < 0.30 && links.length < 90) links.push([i, j]);
      }
    }
  })();

  /* Packets of "data" that travel node-to-node along the mesh. */
  var packets = [];
  (function seedPackets() {
    if (!links.length) return;
    for (var i = 0; i < 14; i++) {
      packets.push({ l: (Math.random() * links.length) | 0, t: Math.random(), sp: 0.00028 + Math.random() * 0.00045 });
    }
  })();

  function size() {
    var box = host.getBoundingClientRect();
    W = Math.max(240, box.width);
    H = Math.max(240, box.height || W);
    cv.width = Math.round(W * dpr);
    cv.height = Math.round(H * dpr);
    cv.style.width = W + 'px';
    cv.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    R = Math.min(W, H) * 0.38;
    cx = W / 2;
    cy = H / 2;
  }

  /* Rotate around Y (spin) then tilt around X, and project. */
  function project(p, ry, rx) {
    var cosY = Math.cos(ry), sinY = Math.sin(ry);
    var x1 = p.x * cosY - p.z * sinY;
    var z1 = p.x * sinY + p.z * cosY;
    var cosX = Math.cos(rx), sinX = Math.sin(rx);
    var y2 = p.y * cosX - z1 * sinX;
    var z2 = p.y * sinX + z1 * cosX;
    /* light perspective so the near side reads larger */
    var k = 1 / (1.9 - z2 * 0.55);
    return { sx: cx + x1 * R * k * 1.55, sy: cy + y2 * R * k * 1.55, z: z2, k: k };
  }

  /* Draw a wire ring as a simple polyline, skipping the hidden hemisphere. */
  function wire(ry, rx, kind, idx, alpha) {
    var pts = [];
    for (var a = 0; a <= 72; a++) {
      var t = (a / 72) * Math.PI * 2, p;
      if (kind === 'meridian') {
        var m = idx * Math.PI / 5;
        p = { x: Math.sin(t) * Math.cos(m), y: Math.cos(t), z: Math.sin(t) * Math.sin(m) };
      } else {
        var lat = idx * Math.PI / 8 - Math.PI / 2;
        var r = Math.cos(lat);
        p = { x: Math.cos(t) * r, y: Math.sin(lat), z: Math.sin(t) * r };
      }
      pts.push(project(p, ry, rx));
    }
    ctx.lineWidth = 1;
    for (var i = 0; i < pts.length - 1; i++) {
      var A = pts[i], B = pts[i + 1];
      if (A.z < -0.1 && B.z < -0.1) continue;
      var depth = (A.z + 1) / 2;                 // 0 far .. 1 near
      ctx.strokeStyle = 'rgba(99,102,241,' + (alpha * (0.18 + depth * 0.82)).toFixed(3) + ')';
      ctx.beginPath();
      ctx.moveTo(A.sx, A.sy);
      ctx.lineTo(B.sx, B.sy);
      ctx.stroke();
    }
  }

  var dtGlobal = 33;

  function draw(t) {
    var ry = t * 0.00022;          // the self-spin
    var rx = -0.42 + Math.sin(t * 0.00009) * 0.06;

    ctx.clearRect(0, 0, W, H);

    /* atmosphere */
    var glow = ctx.createRadialGradient(cx, cy, R * 0.55, cx, cy, R * 1.75);
    glow.addColorStop(0, 'rgba(56,189,248,0.16)');
    glow.addColorStop(0.6, 'rgba(56,189,248,0.05)');
    glow.addColorStop(1, 'rgba(56,189,248,0)');
    ctx.fillStyle = glow;
    ctx.beginPath(); ctx.arc(cx, cy, R * 1.75, 0, 6.283); ctx.fill();

    /* the sphere body, lit from the upper left */
    var body = ctx.createRadialGradient(cx - R * 0.4, cy - R * 0.45, R * 0.1, cx, cy, R * 1.02);
    body.addColorStop(0, 'rgba(14,32,44,0.92)');
    body.addColorStop(0.7, 'rgba(6,14,20,0.92)');
    body.addColorStop(1, 'rgba(3,7,11,0.92)');
    ctx.fillStyle = body;
    ctx.beginPath(); ctx.arc(cx, cy, R * 1.02, 0, 6.283); ctx.fill();

    /* wireframe */
    for (var m = 0; m < 5; m++) wire(ry, rx, 'meridian', m, 0.30);
    for (var l = 1; l < 8; l++) wire(ry, rx, 'parallel', l, 0.22);

    /* projected nodes, sorted so the near side draws last */
    var pts = [];
    for (var i = 0; i < nodes.length; i++) {
      var s = project(nodes[i], ry, rx);
      s.n = nodes[i];
      pts.push(s);
    }

    /* links follow the surface (great-circle arcs) rather than cutting
       straight through the sphere, and each segment fades with its depth */
    ctx.lineWidth = 1;
    for (var k = 0; k < links.length; k++) {
      var na2 = nodes[links[k][0]], nb2 = nodes[links[k][1]];
      var prev = null;
      for (var seg = 0; seg <= 8; seg++) {
        var u = seg / 8;
        var ax = na2.x + (nb2.x - na2.x) * u,
            ay = na2.y + (nb2.y - na2.y) * u,
            az = na2.z + (nb2.z - na2.z) * u;
        var L = Math.sqrt(ax * ax + ay * ay + az * az) || 1;
        var cur = project({ x: ax / L, y: ay / L, z: az / L }, ry, rx);
        if (prev && !(prev.z < 0 && cur.z < 0)) {
          var dep = (Math.min(prev.z, cur.z) + 1) / 2;
          ctx.strokeStyle = 'rgba(34,211,238,' + (0.05 + dep * 0.30).toFixed(3) + ')';
          ctx.beginPath();
          ctx.moveTo(prev.sx, prev.sy);
          ctx.lineTo(cur.sx, cur.sy);
          ctx.stroke();
        }
        prev = cur;
      }
    }

    /* packets: slide along a link, hugging the sphere's surface */
    for (var w = 0; w < packets.length; w++) {
      var pk = packets[w];
      pk.t += pk.sp * dtGlobal;
      if (pk.t >= 1) { pk.t = 0; pk.l = (Math.random() * links.length) | 0; }
      var na = nodes[links[pk.l][0]], nb = nodes[links[pk.l][1]];
      var mx = na.x + (nb.x - na.x) * pk.t,
          my = na.y + (nb.y - na.y) * pk.t,
          mz = na.z + (nb.z - na.z) * pk.t;
      var len = Math.sqrt(mx * mx + my * my + mz * mz) || 1;
      var sp2 = project({ x: mx / len, y: my / len, z: mz / len }, ry, rx);
      if (sp2.z < 0) continue;
      var pa = 0.35 + sp2.z * 0.6;
      ctx.beginPath(); ctx.arc(sp2.sx, sp2.sy, 3.2 * sp2.k * 1.5, 0, 6.283);
      ctx.fillStyle = 'rgba(120,245,255,' + (pa * 0.16).toFixed(3) + ')'; ctx.fill();
      ctx.beginPath(); ctx.arc(sp2.sx, sp2.sy, 1.5 * sp2.k * 1.5, 0, 6.283);
      ctx.fillStyle = 'rgba(190,255,255,' + pa.toFixed(3) + ')'; ctx.fill();
    }

    pts.sort(function (a, b) { return a.z - b.z; });

    for (var q = 0; q < pts.length; q++) {
      var p = pts[q];
      if (p.z < -0.15) continue;
      var depth = (p.z + 1) / 2;
      var pulse = 0.65 + 0.35 * Math.sin(t * 0.002 + p.n.pulse);
      var a1 = (0.15 + depth * 0.85) * pulse;

      if (p.n.token) {
        ctx.font = (Math.max(9, R * 0.085 * p.k * 1.2)).toFixed(1) + 'px "Fira Code", monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = 'rgba(160,245,210,' + (a1 * 0.9).toFixed(3) + ')';
        ctx.fillText(p.n.token, p.sx, p.sy);
      } else {
        var r = (p.n.big ? 2.6 : 1.6) * p.k * 1.5;
        ctx.beginPath(); ctx.arc(p.sx, p.sy, r * 3.4, 0, 6.283);
        ctx.fillStyle = 'rgba(99,102,241,' + (a1 * 0.10).toFixed(3) + ')'; ctx.fill();
        ctx.beginPath(); ctx.arc(p.sx, p.sy, r, 0, 6.283);
        ctx.fillStyle = 'rgba(' + (p.n.big ? '190,255,230' : '99,102,241') + ',' + a1.toFixed(3) + ')';
        ctx.fill();
      }
    }

    /* crisp rim */
    ctx.strokeStyle = 'rgba(99,102,241,0.28)';
    ctx.lineWidth = 1.2;
    ctx.beginPath(); ctx.arc(cx, cy, R * 1.02, 0, 6.283); ctx.stroke();
  }

  var last = 0, acc = 0, visible = true;

  function loop(t) {
    requestAnimationFrame(loop);
    if (!visible || document.hidden) { last = t; return; }
    var dt = (t - last) || 16; last = t;
    acc += dt;
    if (acc < 33) return;          // ~30fps is plenty for a slow spin
    dtGlobal = Math.min(80, acc || 33);
    acc = 0;
    draw(t);
  }

  size();
  if (reduce) { draw(0); }
  else { requestAnimationFrame(loop); }

  var rt = null;
  addEventListener('resize', function () {
    clearTimeout(rt);
    rt = setTimeout(function () { size(); if (reduce) draw(0); }, 200);
  }, { passive: true });

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (e) { visible = e[0].isIntersecting; }, { threshold: 0 }).observe(host);
  }
})();
