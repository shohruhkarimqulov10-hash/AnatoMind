/* AnatoMind 3D — asosiy skript (Three.js r128) */
(function () {
  "use strict";

  var loadingEl = document.getElementById("loading");

  if (typeof THREE === "undefined" || !THREE.OrbitControls) {
    loadingEl.innerHTML =
      "<p>3D kutubxona yuklanmadi.<br>Internetga ulanib, sahifani yangilang.</p>";
    return;
  }

  var $ = function (s) { return document.querySelector(s); };
  var ORGANS = window.ORGANS;
  var info = {};
  ORGANS.forEach(function (o) { info[o.id] = o; });

  /* ---------- Sahna ---------- */
  var canvas = $("#scene");
  var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(38, 1, 0.1, 300);
  var HOME = {
    pos: new THREE.Vector3(0, 2.5, 31),
    target: new THREE.Vector3(0, 0.3, 0)
  };
  camera.position.copy(HOME.pos);

  var controls = new THREE.OrbitControls(camera, canvas);
  controls.target.copy(HOME.target);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.minDistance = 3;
  controls.maxDistance = 50;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1.4;
  controls.update();

  scene.add(new THREE.AmbientLight(0xffffff, 0.7));
  var key = new THREE.DirectionalLight(0xffffff, 0.85);
  key.position.set(6, 12, 14);
  scene.add(key);
  var rim = new THREE.DirectionalLight(0x6fa8ff, 0.5);
  rim.position.set(-8, 4, -12);
  scene.add(rim);
  var fill = new THREE.PointLight(0xb08cff, 0.5, 80);
  fill.position.set(-10, -4, 10);
  scene.add(fill);

  /* ---------- Yordamchi funksiyalar ---------- */
  var SPH = new THREE.SphereGeometry(1, 32, 24);
  var UP = new THREE.Vector3(0, 1, 0);

  function segment(a, b, rA, rB, mat) {
    var A = new THREE.Vector3(a[0], a[1], a[2]);
    var B = new THREE.Vector3(b[0], b[1], b[2]);
    var len = A.distanceTo(B);
    var geo = new THREE.CylinderGeometry(rB, rA, len, 20, 1, false);
    var m = new THREE.Mesh(geo, mat);
    m.position.copy(A).add(B).multiplyScalar(0.5);
    m.quaternion.setFromUnitVectors(UP, B.clone().sub(A).normalize());
    return m;
  }

  /* ---------- Tana (shaffof "teri") ---------- */
  var skinMat = new THREE.MeshPhongMaterial({
    color: 0x7fb2ff, transparent: true, opacity: 0.14, depthWrite: false,
    side: THREE.DoubleSide, shininess: 80
  });
  var wireMat = new THREE.MeshBasicMaterial({
    color: 0x9cc7ff, wireframe: true, transparent: true, opacity: 0.07, depthWrite: false
  });
  var body = new THREE.Group();
  scene.add(body);

  function addSkin(mesh) {
    mesh.renderOrder = 5;
    body.add(mesh);
    var w = new THREE.Mesh(mesh.geometry, wireMat);
    w.position.copy(mesh.position);
    w.quaternion.copy(mesh.quaternion);
    w.scale.copy(mesh.scale);
    w.renderOrder = 5;
    body.add(w);
  }
  function skinSphere(x, y, z, sx, sy, sz) {
    var m = new THREE.Mesh(SPH, skinMat);
    m.position.set(x, y, z);
    m.scale.set(sx, sy, sz);
    addSkin(m);
  }
  function skinLimb(a, b, rA, rB) { addSkin(segment(a, b, rA, rB, skinMat)); }

  // Bosh va bo'yin
  skinSphere(0, 8.3, 0, 0.95, 1.1, 1.02);
  skinLimb([0, 6.0, 0], [0, 7.5, 0], 0.55, 0.5);

  // Tana (lathe)
  var prof = [
    [0.55, 6.5], [0.9, 6.35], [1.6, 6.0], [1.75, 5.5], [1.7, 4.5],
    [1.55, 3.3], [1.35, 2.0], [1.33, 1.0], [1.5, 0.0], [1.55, -0.6], [1.4, -1.3]
  ].map(function (p) { return new THREE.Vector2(p[0], p[1]); });
  var profPts = new THREE.SplineCurve(prof).getPoints(80);
  var torso = new THREE.Mesh(new THREE.LatheGeometry(profPts, 48), skinMat);
  torso.scale.set(1.12, 1, 0.68);
  addSkin(torso);

  // Qo'llar
  [-1, 1].forEach(function (s) {
    skinSphere(s * 2.3, 5.6, 0, 0.55, 0.55, 0.55);
    skinLimb([s * 2.3, 5.6, 0], [s * 2.9, 2.9, 0], 0.5, 0.4);
    skinSphere(s * 2.9, 2.9, 0, 0.4, 0.4, 0.4);
    skinLimb([s * 2.9, 2.9, 0], [s * 3.15, 0.6, 0.1], 0.4, 0.28);
    skinSphere(s * 3.2, -0.05, 0.1, 0.3, 0.55, 0.2);
  });
  // Oyoqlar
  [-1, 1].forEach(function (s) {
    skinSphere(s * 0.75, -1.0, 0, 0.72, 0.72, 0.72);
    skinLimb([s * 0.75, -1.0, 0], [s * 0.85, -4.6, 0], 0.7, 0.52);
    skinSphere(s * 0.85, -4.6, 0, 0.52, 0.52, 0.52);
    skinLimb([s * 0.85, -4.6, 0], [s * 0.9, -8.3, 0], 0.52, 0.34);
    skinSphere(s * 0.9, -8.6, 0.35, 0.36, 0.2, 0.75);
  });

  /* ---------- Organlar ---------- */
  var organs = {};     // id -> { group, meshes, op, opTarget, glow, glowTarget, hover }
  var pickables = [];

  function makeMat(color) {
    return new THREE.MeshPhongMaterial({
      color: color, shininess: 55, specular: 0x333333,
      transparent: true, opacity: 1,
      emissive: new THREE.Color(color), emissiveIntensity: 0
    });
  }
  function makeGroup(id, pos) {
    var g = new THREE.Group();
    if (pos) g.position.set(pos[0], pos[1], pos[2]);
    scene.add(g);
    organs[id] = { group: g, meshes: [], op: 1, opTarget: 1, glow: 0, hover: false };
    return g;
  }
  function addMesh(id, geo, pos, scale, rot, color) {
    var o = organs[id];
    var m = new THREE.Mesh(geo, makeMat(color || info[id].color));
    m.position.set(pos[0], pos[1], pos[2]);
    if (scale) m.scale.set(scale[0], scale[1], scale[2]);
    if (rot) m.rotation.set(rot[0], rot[1], rot[2]);
    m.userData.organ = id;
    o.group.add(m);
    o.meshes.push(m);
    pickables.push(m);
    return m;
  }
  function addTube(id, a, b, rA, rB, color) {
    var m = segment(a, b, rA, rB, makeMat(color || info[id].color));
    m.userData.organ = id;
    organs[id].group.add(m);
    organs[id].meshes.push(m);
    pickables.push(m);
    return m;
  }
  function addCurveTube(id, points, radius, segs, color) {
    var curve = new THREE.CatmullRomCurve3(points);
    var geo = new THREE.TubeGeometry(curve, segs, radius, 10, false);
    return addMesh(id, geo, [0, 0, 0], null, null, color);
  }

  // --- Miya ---
  makeGroup("brain");
  addMesh("brain", SPH, [-0.33, 8.6, 0.02], [0.58, 0.5, 0.68]);
  addMesh("brain", SPH, [0.33, 8.6, 0.02], [0.58, 0.5, 0.68]);
  addMesh("brain", SPH, [0, 8.1, -0.55], [0.4, 0.24, 0.3], null, "#d98ba0");
  addTube("brain", [0, 8.15, -0.25], [0, 7.3, -0.3], 0.14, 0.1, "#e7a9b8");

  // --- Qalqonsimon bez ---
  makeGroup("thyroid");
  addMesh("thyroid", SPH, [-0.2, 6.5, 0.35], [0.14, 0.26, 0.12]);
  addMesh("thyroid", SPH, [0.2, 6.5, 0.35], [0.14, 0.26, 0.12]);
  addMesh("thyroid", SPH, [0, 6.42, 0.37], [0.16, 0.06, 0.08]);

  // --- O'pka ---
  var lungG = makeGroup("lungs", [0, 4.6, 0]);
  addMesh("lungs", SPH, [-0.9, 0, 0], [0.7, 1.3, 0.62]);
  addMesh("lungs", SPH, [0.9, 0, 0], [0.65, 1.3, 0.62]);
  addTube("lungs", [0, 1.9, 0.05], [0, 0.6, 0.05], 0.14, 0.14, "#cfd9ea");
  addTube("lungs", [0, 0.6, 0.05], [-0.7, 0.0, 0.05], 0.1, 0.07, "#cfd9ea");
  addTube("lungs", [0, 0.6, 0.05], [0.7, 0.0, 0.05], 0.1, 0.07, "#cfd9ea");

  // --- Yurak ---
  var heartG = makeGroup("heart", [0.3, 4.15, 0.35]);
  addMesh("heart", SPH, [0, 0, 0], [0.5, 0.62, 0.44], [0, 0, 0.5]);
  addMesh("heart", SPH, [-0.1, 0.4, 0], [0.22, 0.2, 0.2], null, "#c01f35");
  addTube("heart", [-0.05, 0.45, 0], [-0.1, 1.15, -0.05], 0.14, 0.12, "#f05b6e");

  // --- Jigar (bemorning o'ng tomoni — ko'ruvchining chap tomoni) ---
  makeGroup("liver");
  addMesh("liver", SPH, [-0.72, 2.95, 0.3], [0.92, 0.5, 0.55], [0, 0, 0.1]);
  addMesh("liver", SPH, [-0.25, 2.7, 0.35], [0.45, 0.32, 0.4]);
  addMesh("liver", SPH, [-1.1, 2.6, 0.2], [0.35, 0.3, 0.4], null, "#7e2f26");

  // --- Oshqozon ---
  makeGroup("stomach");
  addMesh("stomach", SPH, [0.7, 2.85, 0.3], [0.62, 0.5, 0.42], [0, 0, -0.5]);
  addMesh("stomach", SPH, [0.3, 2.45, 0.32], [0.3, 0.22, 0.25], null, "#e57b5d");
  addTube("stomach", [0.55, 3.55, 0.25], [0.7, 3.2, 0.3], 0.1, 0.1, "#f3a58f");

  // --- Oshqozon osti bezi ---
  makeGroup("pancreas");
  addMesh("pancreas", SPH, [0.1, 2.05, 0.02], [1.0, 0.16, 0.2], [0, 0, 0.1]);
  addMesh("pancreas", SPH, [-0.9, 2.0, 0.02], [0.3, 0.26, 0.24]);

  // --- Buyraklar ---
  makeGroup("kidneys");
  addMesh("kidneys", SPH, [-0.78, 2.25, -0.5], [0.26, 0.42, 0.2], [0, 0, 0.15]);
  addMesh("kidneys", SPH, [0.78, 2.25, -0.5], [0.26, 0.42, 0.2], [0, 0, -0.15]);
  addTube("kidneys", [-0.62, 1.85, -0.45], [-0.25, -0.5, 0.0], 0.05, 0.05, "#e0b070");
  addTube("kidneys", [0.62, 1.85, -0.45], [0.25, -0.5, 0.0], 0.05, 0.05, "#e0b070");

  // --- Ichaklar ---
  makeGroup("intestines");
  var big = [
    [-0.95, -0.1], [-1.0, 0.6], [-0.95, 1.3], [-0.8, 1.7], [-0.3, 1.75], [0.3, 1.7],
    [0.8, 1.7], [0.95, 1.3], [1.0, 0.6], [0.95, -0.1], [0.7, -0.5], [0.3, -0.3],
    [-0.1, -0.6], [0.1, -0.95]
  ].map(function (p) { return new THREE.Vector3(p[0], p[1], 0.22); });
  addCurveTube("intestines", big, 0.16, 220, "#c98466");

  var small = [];
  for (var k = 0; k <= 80; k++) {
    var t = k / 80;
    small.push(new THREE.Vector3(
      0.55 * Math.sin(t * Math.PI * 2 * 6) * (1 - 0.1 * t),
      1.4 - 1.5 * t,
      0.27 + 0.1 * Math.sin(t * 45)
    ));
  }
  addCurveTube("intestines", small, 0.1, 500, "#f0a0a0");

  // --- Siydik pufagi ---
  makeGroup("bladder");
  addMesh("bladder", SPH, [0, -0.7, 0.25], [0.38, 0.36, 0.34]);

  // --- Umurtqa pog'onasi ---
  makeGroup("spine");
  var N = 24;
  for (var i = 0; i < N; i++) {
    var tt = i / (N - 1);
    var y = 6.2 - tt * 6.9;
    var z = -0.8 + 0.2 * Math.sin(tt * Math.PI * 2 + 0.3);
    var r = 0.2 + 0.12 * tt;
    var v = addMesh("spine", new THREE.CylinderGeometry(r, r, 0.2, 14), [0, y, z]);
    v.rotation.x = 0.0;
    var sp = addMesh("spine", SPH, [0, y - 0.02, z - r - 0.05], [0.06, 0.1, 0.12]);
    sp.material = v.material;
  }

  /* ---------- Hover / tanlash ---------- */
  var ray = new THREE.Raycaster();
  var mouse = new THREE.Vector2();
  var hoverId = null;
  var selected = null;
  var tooltip = $("#tooltip");

  function pick(ev) {
    var r = canvas.getBoundingClientRect();
    mouse.x = ((ev.clientX - r.left) / r.width) * 2 - 1;
    mouse.y = -((ev.clientY - r.top) / r.height) * 2 + 1;
    ray.setFromCamera(mouse, camera);
    var hits = ray.intersectObjects(pickables, false);
    return hits.length ? hits[0].object.userData.organ : null;
  }

  function setHover(id) {
    if (hoverId === id) return;
    if (hoverId) organs[hoverId].hover = false;
    hoverId = id;
    if (id) organs[id].hover = true;
    canvas.style.cursor = id ? "pointer" : "grab";
  }

  canvas.addEventListener("pointermove", function (ev) {
    if (ev.buttons) { tooltip.classList.remove("show"); return; }
    var id = pick(ev);
    setHover(id);
    if (id) {
      tooltip.textContent = info[id].name;
      tooltip.style.left = ev.clientX + "px";
      tooltip.style.top = ev.clientY + "px";
      tooltip.classList.add("show");
    } else {
      tooltip.classList.remove("show");
    }
  });
  canvas.addEventListener("pointerleave", function () {
    setHover(null);
    tooltip.classList.remove("show");
  });

  var down = null;
  canvas.addEventListener("pointerdown", function (ev) { down = { x: ev.clientX, y: ev.clientY }; });
  canvas.addEventListener("pointerup", function (ev) {
    if (!down) return;
    var moved = Math.hypot(ev.clientX - down.x, ev.clientY - down.y);
    down = null;
    if (moved > 6) return;
    var id = pick(ev);
    if (id) selectOrgan(id);
  });

  /* ---------- Kamera uchish ---------- */
  var fly = null;
  function flyTo(pos, target) { fly = { pos: pos.clone(), target: target.clone() }; }
  controls.addEventListener("start", function () { fly = null; });

  var viewBack = false;

  function focusOrgan(o) {
    var c = new THREE.Vector3(o.focus[0], o.focus[1], o.focus[2]);
    var dir = o.side === "back" ? -1 : 1;
    flyTo(new THREE.Vector3(c.x, c.y + 0.5, c.z + dir * o.dist), c);
    viewBack = o.side === "back";
  }

  /* ---------- UI: ro'yxat ---------- */
  var listEl = $("#organList");
  var sidebar = $("#sidebar");

  function renderList(filter) {
    var q = (filter || "").trim().toLowerCase();
    listEl.innerHTML = "";
    var shown = 0;
    ORGANS.forEach(function (o) {
      if (q && (o.name + " " + o.latin).toLowerCase().indexOf(q) === -1) return;
      shown++;
      var li = document.createElement("li");
      li.dataset.id = o.id;
      if (o.id === selected) li.className = "active";
      li.innerHTML =
        '<span class="dot" style="background:' + o.color + ";color:" + o.color + '"></span>' +
        '<span><div class="nm">' + o.name + '</div><div class="lt">' + o.latin + "</div></span>";
      li.addEventListener("click", function () {
        selectOrgan(o.id);
        if (window.innerWidth <= 860) sidebar.classList.remove("open");
      });
      listEl.appendChild(li);
    });
    if (!shown) {
      var e = document.createElement("li");
      e.className = "empty";
      e.textContent = "Hech narsa topilmadi";
      listEl.appendChild(e);
    }
  }
  renderList("");
  $("#search").addEventListener("input", function (e) { renderList(e.target.value); });
  $("#menuBtn").addEventListener("click", function () { sidebar.classList.toggle("open"); });

  /* ---------- UI: ma'lumot paneli ---------- */
  var panel = $("#panel");

  function ul(items) {
    return '<ul class="p-list">' + items.map(function (t) { return "<li>" + t + "</li>"; }).join("") + "</ul>";
  }

  function renderPanel(o) {
    panel.innerHTML =
      '<div class="p-head">' +
        '<span class="p-badge" style="background:' + o.color + ";color:" + o.color + '"></span>' +
        '<div class="p-title"><h2>' + o.name + "</h2><em>" + o.latin + "</em></div>" +
        '<button class="p-close" id="pClose" aria-label="Yopish">✕</button>' +
      "</div>" +
      '<p class="p-short">' + o.short + "</p>" +
      '<div class="chips">' + o.facts.map(function (f) { return '<span class="chip">' + f + "</span>"; }).join("") + "</div>" +
      '<div class="sec-title">Vazifalari</div>' + ul(o.functions) +
      '<details class="acc care" open><summary>🩹 Og\'riganda nima qilish kerak</summary><div class="body">' + ul(o.care) + "</div></details>" +
      '<details class="acc doctor"><summary>👨‍⚕️ Qachon shifokorga borish kerak</summary><div class="body">' + ul(o.doctor) + "</div></details>" +
      '<details class="acc emergency" open><summary>🚨 Shoshilinch holatlar — ' + window.EMERGENCY_NUMBER + '</summary><div class="body">' + ul(o.emergency) + "</div></details>" +
      '<p class="disclaimer">Bu ma\'lumotlar faqat umumiy bilim uchun va shifokor maslahati yoki tashxisini almashtirmaydi. Jiddiy alomatlarda darhol tez yordam (' + window.EMERGENCY_NUMBER + ') yoki shifokorga murojaat qiling.</p>';
    panel.scrollTop = 0;
    $("#pClose").addEventListener("click", deselect);
  }

  /* ---------- Tanlash / bekor qilish ---------- */
  var hint = $("#hint");
  var shiftTarget = { x: 0, y: 0 };
  var shiftCur = { x: 0, y: 0 };

  function updateShift() {
    var mobile = window.innerWidth <= 860;
    if (mobile) {
      shiftTarget.x = 0;
      shiftTarget.y = selected ? window.innerHeight * 0.14 : 0;
    } else {
      var left = 284;
      var right = selected ? 414 : 0;
      shiftTarget.x = (left - right) / 2;
      shiftTarget.y = 0;
    }
  }

  function setRotate(on) {
    controls.autoRotate = on;
    $("#btnRotate").classList.toggle("active", on);
  }

  function selectOrgan(id) {
    selected = id;
    var o = info[id];
    Object.keys(organs).forEach(function (k) {
      organs[k].opTarget = k === id ? 1 : 0.14;
    });
    renderPanel(o);
    panel.classList.remove("hidden");
    hint.classList.add("gone");
    setRotate(false);
    focusOrgan(o);
    renderList($("#search").value);
    updateShift();
  }

  function deselect() {
    selected = null;
    Object.keys(organs).forEach(function (k) { organs[k].opTarget = 1; });
    panel.classList.add("hidden");
    renderList($("#search").value);
    updateShift();
  }

  window.addEventListener("keydown", function (e) { if (e.key === "Escape") deselect(); });

  /* ---------- Asboblar paneli ---------- */
  $("#btnRotate").addEventListener("click", function () { setRotate(!controls.autoRotate); });
  $("#btnReset").addEventListener("click", function () {
    deselect();
    viewBack = false;
    flyTo(HOME.pos, HOME.target);
  });
  $("#btnBack").addEventListener("click", function () {
    viewBack = !viewBack;
    var d = controls.target.clone();
    var dist = Math.max(camera.position.distanceTo(controls.target), 12);
    flyTo(new THREE.Vector3(d.x, d.y + 1.5, d.z + (viewBack ? -dist : dist)), d);
    setRotate(false);
  });
  $("#skin").addEventListener("input", function (e) {
    var v = parseInt(e.target.value, 10) / 100;
    skinMat.opacity = v;
    wireMat.opacity = Math.min(0.2, v * 0.5);
    body.visible = v > 0.005;
  });

  /* ---------- O'lcham ---------- */
  function resize() {
    var w = window.innerWidth, h = window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    updateShift();
    applyShift(true);
  }
  function applyShift(force) {
    var dx = shiftTarget.x - shiftCur.x;
    var dy = shiftTarget.y - shiftCur.y;
    if (!force && Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) return;
    shiftCur.x += dx * 0.12;
    shiftCur.y += dy * 0.12;
    var w = window.innerWidth, h = window.innerHeight;
    camera.setViewOffset(w, h, -shiftCur.x, shiftCur.y, w, h);
  }
  window.addEventListener("resize", resize);

  /* ---------- Animatsiya ---------- */
  var clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    var t = clock.getElapsedTime();

    if (fly) {
      camera.position.lerp(fly.pos, 0.07);
      controls.target.lerp(fly.target, 0.07);
      if (camera.position.distanceTo(fly.pos) < 0.05 && controls.target.distanceTo(fly.target) < 0.05) fly = null;
    }

    // Yurak urishi va nafas olish
    var beat = Math.pow(Math.max(0, Math.sin(t * Math.PI * 1.25)), 10);
    var hs = 1 + 0.12 * beat;
    heartG.scale.set(hs, hs, hs);
    var bs = 1 + 0.025 * Math.sin(t * 1.6);
    lungG.scale.set(bs, bs, bs);

    // Organlarning shaffofligi va yorug'ligi
    Object.keys(organs).forEach(function (id) {
      var o = organs[id];
      o.op += (o.opTarget - o.op) * 0.12;
      var glowT = id === selected ? 0.28 : (o.hover ? 0.5 : 0);
      o.glow += (glowT - o.glow) * 0.2;
      for (var i = 0; i < o.meshes.length; i++) {
        var m = o.meshes[i].material;
        m.opacity = o.op;
        m.emissiveIntensity = o.glow;
        o.meshes[i].visible = o.op > 0.02;
      }
    });

    applyShift(false);
    controls.update();
    renderer.render(scene, camera);
  }

  resize();
  animate();

  // Yuklash ekranini yopish
  setTimeout(function () { loadingEl.classList.add("done"); }, 400);
})();
