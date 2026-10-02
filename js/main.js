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
  function fillFace(el, f, fallback) {
    if (f.image) {
      el.classList.add("loading");
      var im = new Image();
      im.alt = f.alt || "";
      im.onload = function () { el.classList.remove("loading"); };
      im.src = f.image;
      el.appendChild(im);
    } else {
      el.textContent = fallback;
    }
  }
  fillFace($("face-front"), A.avatar.front, "ตัวละคร");
  fillFace($("face-back"), A.avatar.back, "รูปถ่าย");
  var flipBtn = $("avatar");
  flipBtn.setAttribute("aria-label", A.avatar.label);
  function setFlip(on) {
    flipBtn.classList.toggle("is-flipped", on);
    flipBtn.setAttribute("aria-pressed", on ? "true" : "false");
  }
  // พลิกเองเป็นรอบๆ (ไม่พลิกถ้าผู้ใช้ตั้งค่าลดการเคลื่อนไหว)
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var timer = null;
  function stopAuto() { if (timer) { clearInterval(timer); timer = null; } }
  function startAuto() {
    stopAuto();
    if (reduceMotion || !A.avatar.auto) return;
    timer = setInterval(function () {
      if (!document.hidden) setFlip(!flipBtn.classList.contains("is-flipped"));
    }, A.avatar.interval || 4000);
  }
  // กดเองได้เสมอ และเริ่มนับรอบใหม่ จะได้ไม่พลิกกลับทันที
  flipBtn.addEventListener("click", function () {
    setFlip(!flipBtn.classList.contains("is-flipped"));
    startAuto();
  });
  // เมาส์ชี้ค้างอยู่ = หยุดพลิกชั่วคราว (นิ้วบนมือถือไม่นับ)
  flipBtn.addEventListener("pointerenter", function (e) { if (e.pointerType === "mouse") stopAuto(); });
  flipBtn.addEventListener("pointerleave", function (e) { if (e.pointerType === "mouse") startAuto(); });
  startAuto();
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
  function label() {
    btn.textContent = isDark() ? S.ui.themeToLight : S.ui.themeToDark;
  }
  btn.addEventListener("click", function () {
    var next = isDark() ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    label();
  });
  label();
})();