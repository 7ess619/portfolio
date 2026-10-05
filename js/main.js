(function () {
  var S = window.SITE;
  var root = document.documentElement;
  var $ = function (id) { return document.getElementById(id); };

  // ---------- เนื้อหา ----------
  document.title = S.name + " | Portfolio";
  $("site-name").textContent = S.name;
  var A = S.about;
  $("kicker").textContent = A.heading;
  $("about-h").textContent = S.name;
  $("tagline").textContent = A.tagline;
  if (S.resume && S.resume.href) {
    var rb = $("resume");
    rb.textContent = S.resume.label;
    rb.href = S.resume.href;
    rb.hidden = false;
  }
  $("bio").textContent = A.bio;
  // ---------- รูปโปรไฟล์: สลับหลายภาพ (ภาพแรกค้างนานสุด) ----------
  var AV = A.avatar;
  var flipBtn = $("avatar");
  var inner = $("flip-inner");
  flipBtn.setAttribute("aria-label", AV.label);
  var faces = AV.slides.map(function (s) {
    var f = document.createElement("span");
    f.className = "face";
    if (s.image) {
      f.classList.add("loading");
      var im = new Image();
      im.alt = s.alt || "";
      im.onload = function () { f.classList.remove("loading"); };
      im.src = s.image;
      f.appendChild(im);
    } else {
      f.textContent = s.label || "";
    }
    inner.appendChild(f);
    return f;
  });
  var current = 0;
  var cycles = 0;
  var flipping = false;
  var timer = null;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  faces[0].classList.add("is-current");

  function show(i) {
    faces[current].classList.remove("is-current");
    current = i;
    faces[current].classList.add("is-current");
  }
  // เปลี่ยนภาพแบบ 2 มิติ: บีบแนวนอนจนบาง -> สลับภาพ -> ขยายกลับ (กดซ้ำระหว่างเปลี่ยนจะถูกข้าม)
  function go(i) {
    if (flipping || i === current) return;
    // ภาพแรก = รูปจริง: เข้า/ออกจากรูปจริงใช้การพลิก ส่วนภาพวาดสลับกันเองใช้การจางสลับ (CSS) ไม่ให้ดูวุ่น
    var withPhoto = (i === 0 || current === 0);
    if (reduceMotion || !inner.animate || !withPhoto) { show(i); return; }
    flipping = true;
    inner.classList.add("no-fade");
    var squash = inner.animate(
      [{ transform: "scaleX(1)" }, { transform: "scaleX(0.02)" }],
      { duration: 220, easing: "ease-in" }
    );
    squash.onfinish = function () {
      show(i);
      var grow = inner.animate(
        [{ transform: "scaleX(0.02)" }, { transform: "scaleX(1)" }],
        { duration: 260, easing: "ease-out" }
      );
      grow.onfinish = function () { inner.classList.remove("no-fade"); flipping = false; };
    };
  }
  function stopAuto() { if (timer) { clearTimeout(timer); timer = null; } }
  // วนเอง: ค้างตามเวลา hold ของภาพปัจจุบัน แล้วไปภาพถัดไป ครบจำนวนรอบแล้วหยุดพักที่ภาพแรก
  function loop() {
    stopAuto();
    if (reduceMotion || !AV.auto || faces.length < 2) return;
    if (AV.cycles && cycles >= AV.cycles) return;
    timer = setTimeout(function () {
      if (!document.hidden) {
        var n = (current + 1) % faces.length;
        if (n === 0) cycles++;
        go(n);
      }
      timer = setTimeout(loop, 520); // รอเปลี่ยนภาพเสร็จ แล้วนับเวลาค้างของภาพใหม่
    }, AV.slides[current].hold || 3000);
  }
  // กดเองได้เสมอ (ไปภาพถัดไป) และเริ่มนับรอบใหม่
  flipBtn.addEventListener("click", function () {
    go((current + 1) % faces.length);
    stopAuto();
    timer = setTimeout(function () { cycles = 0; loop(); }, 520);
  });
  // ใช้คีย์บอร์ดได้ (Enter / Space) เพราะไม่ใช่ <button> จริง
  flipBtn.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flipBtn.click(); }
  });
  // เมาส์ชี้ค้างอยู่ = หยุดชั่วคราว (นิ้วบนมือถือไม่นับ)
  flipBtn.addEventListener("pointerenter", function (e) { if (e.pointerType === "mouse") stopAuto(); });
  flipBtn.addEventListener("pointerleave", function (e) { if (e.pointerType === "mouse") loop(); });
  loop();
  // ป้ายปุ่มเปลี่ยนตามสถานะ: ปิดอยู่ = "ดูเพิ่มเติม" / เปิดอยู่ = "ดูน้อยลง"
  var moreEl = $("more-info");
  function setMoreLabel() {
    $("more-summary").textContent = moreEl.open ? (S.ui.less || "ดูน้อยลง") : S.ui.more;
  }
  moreEl.addEventListener("toggle", setMoreLabel);
  setMoreLabel();
  A.facts.forEach(function (f) {
    var row = document.createElement("div");
    var dt = document.createElement("dt");
    var dd = document.createElement("dd");
    dt.textContent = f.label;
    dd.textContent = f.value;
    row.appendChild(dt);
    row.appendChild(dd);
    (f.more ? $("facts-more") : $("facts")).appendChild(row);
    if (f.more) { $("more-info").hidden = false; }
  });
  $("cta").textContent = S.cta.label;
  $("cta").href = S.cta.href;
  // แสดงที่อยู่อีเมลเป็นข้อความ ให้ก๊อปได้ แม้เครื่องไม่มีโปรแกรมอีเมล
  $("email-text").textContent = S.cta.href.replace("mailto:", "");
  $("email-text").href = S.cta.href;
  $("works-title").textContent = S.ui.works;
  $("note").textContent = S.note;

  function thumb(item) {
    var a = document.createElement("a");
    a.className = "thumb";
    a.href = item.href;
    var ph = document.createElement("div");
    ph.className = "ph";
    if (item.image) {
      // skeleton กะพริบระหว่างรอภาพโหลด
      ph.classList.add("loading");
      var img = new Image();
      img.alt = item.imageAlt || "";
      img.onload = function () { ph.classList.remove("loading"); };
      img.src = item.image;
      ph.appendChild(img);
    } else {
      ph.textContent = S.ui.placeholder;
    }
    function line(cls, text) {
      var el = document.createElement("span");
      el.className = cls;
      el.textContent = text;
      return el;
    }
    a.appendChild(ph);
    a.appendChild(line("thumb-title", item.title));
    if (item.role) a.appendChild(line("thumb-role", item.role));
    if (item.status) a.appendChild(line("thumb-status", item.status));
    return a;
  }

  S.paths.forEach(function (p) {
    var card = document.createElement("div");
    card.className = "path";
    var head = document.createElement("a");
    head.className = "path-head";
    head.href = p.href;
    var h = document.createElement("h3");
    h.textContent = p.title;
    var d = document.createElement("p");
    d.textContent = p.desc;
    var more = document.createElement("span");
    more.className = "more";
    more.textContent = S.ui.viewAll;
    head.appendChild(h);
    head.appendChild(d);
    head.appendChild(more);
    var grid = document.createElement("div");
    grid.className = "thumbs";
    p.items.forEach(function (it) { grid.appendChild(thumb(it)); });
    card.appendChild(head);
    card.appendChild(grid);
    $("paths").appendChild(card);
  });

  S.links.forEach(function (l) {
    if (!l.href) return;
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = l.href;
    a.textContent = l.label;
    a.target = "_blank";
    a.rel = "noopener";
    li.appendChild(a);
    $("links").appendChild(li);
  });

  // ---------- สลับโหมดสว่าง/มืด ----------
  var btn = $("theme-btn");
  try {
    var saved = localStorage.getItem("theme");
    if (saved) root.setAttribute("data-theme", saved);
  } catch (e) {}

  function isDark() {
    var t = root.getAttribute("data-theme");
    if (t) return t === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  // แถบเบราว์เซอร์บนมือถือเปลี่ยนสีตามพื้นหลังจริงของหน้า (อ่านจาก CSS จึงไม่ต้องจำสีซ้ำ)
  var barMetas = document.querySelectorAll('meta[name="theme-color"]');
  function paintBrowserBar() {
    var c = getComputedStyle(document.body).backgroundColor;
    barMetas.forEach(function (m) { m.setAttribute("content", c); });
  }
  function label() {
    btn.textContent = isDark() ? S.ui.themeToLight : S.ui.themeToDark;
    paintBrowserBar();
  }
  btn.addEventListener("click", function () {
    var next = isDark() ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    label();
  });
  label();
})();