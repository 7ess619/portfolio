(function () {
  var S = window.SITE;
  var A = S.art;
  var root = document.documentElement;
  var $ = function (id) { return document.getElementById(id); };
  // art.html อยู่ที่ราก (data-art ว่าง) / หน้าในโฟลเดอร์ art/ ใส่ slug ที่ data-art
  var slug = document.body.getAttribute("data-art");
  var P = slug ? "../" : "";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }
  // path ใน data.js เป็นแบบจากรากเว็บ: หน้าในโฟลเดอร์ย่อยต้องเติม ../ ให้
  function u(path) { return path ? P + path : ""; }
  function pic(src, alt, lazy) {
    var im = new Image();
    im.alt = alt || "";
    if (lazy !== false) im.loading = "lazy";
    im.decoding = "async";
    im.src = u(src);
    return im;
  }
  // รายการจะแสดงเมื่อมีเนื้อหาอย่างน้อยหนึ่งอย่าง (ไม่มีเนื้อหา = ไม่โชว์)
  function ready(it) {
    return !!(it.image || (it.gallery && it.gallery.length) || (it.sections && it.sections.length));
  }
  function cover(it) {
    return it.image || (it.gallery && it.gallery[0] && it.gallery[0].image) || "";
  }

  $("site-name").textContent = S.name;
  $("note").textContent = S.note;

  // ---------- หน้า Art (รวมทุกหมวด) ----------
  function card(it) {
    var c = el("article", "work");
    var ph = el("div", "ph");
    var src = cover(it);
    if (it.imageRatio) { c.classList.add("art-wide"); ph.style.aspectRatio = it.imageRatio; }
    if (it.lightFrame) ph.classList.add("art-frame");
    if (src) {
      ph.classList.add("loading");
      var im = pic(src, it.imageAlt || (it.gallery && it.gallery[0] && it.gallery[0].alt));
      im.onload = function () { ph.classList.remove("loading"); };
      ph.appendChild(im);
    } else {
      ph.textContent = S.ui.placeholder;
    }
    c.appendChild(ph);
    c.appendChild(el("h3", "", it.title));
    if (it.year) c.appendChild(el("span", "work-year", it.year));
    if (it.role) c.appendChild(el("span", "work-role", it.role));
    if (it.status) c.appendChild(el("span", "thumb-status", it.status));
    if (it.page) {
      var more = el("a", "work-detail-link", S.ui.detailLink);
      more.href = u(it.page);
      c.appendChild(more);
    }
    return c;
  }

  // ---------- หน้ารายละเอียด (หมวด / ตัวละคร / งาน) ----------
  function section(title) {
    var s = el("section", "work-section");
    if (title) s.appendChild(el("h2", "", title));
    return s;
  }
  function figure(g, light) {
    var f = document.createElement("figure");
    var wrap = el("div", light ? "art-frame art-pad" : "");
    wrap.appendChild(pic(g.image, g.alt));
    f.appendChild(wrap);
    if (g.caption) f.appendChild(el("figcaption", "art-caption", g.caption));
    return f;
  }

  function renderDetail() {
    var item = null, parent = null;
    A.groups.forEach(function (g) {
      g.items.forEach(function (it) {
        if (it.slug === slug) item = it;
        (it.characters || []).forEach(function (c) {
          if (c.slug && c.slug === slug) { item = c; parent = it; }
        });
      });
    });
    var box = $("work-root");
    var back = $("back");
    if (parent) {
      back.textContent = "← " + parent.title;
      back.href = u(parent.page);
    } else {
      back.textContent = S.ui.backArt;
      back.href = "../art.html";
    }
    if (!item) { box.appendChild(el("h1", "", S.ui.notFound)); return; }

    var title = item.title || item.name;
    document.title = title + " | Art | " + S.name;
    box.appendChild(el("h1", "", title));

    var meta = el("p", "work-meta");
    if (item.year) meta.appendChild(el("span", "work-year", item.year));
    if (item.role) meta.appendChild(el("span", "", item.role));
    var st = item.status || (parent && parent.status);
    if (st) meta.appendChild(el("span", "thumb-status", st));
    if (meta.childNodes.length) box.appendChild(meta);

    if (item.desc) box.appendChild(el("p", "work-lead", item.desc));
    var notice = item.notice || (parent && parent.notice);
    if (notice) box.appendChild(el("p", "art-notice", notice));

    // ภาพหลัก (เช่น lineup): แสดงเมื่อมีภาพจริงเท่านั้น
    if (item.image) {
      var hero = el("div", "art-hero" + (item.lightFrame ? " art-frame art-pad" : ""));
      hero.appendChild(pic(item.image, item.imageAlt, false));
      box.appendChild(hero);
    }

    // รายชื่อตัวละคร: มี page = เป็นลิงก์ (ตัวที่ breakdown เสร็จ) ไม่มี = ชื่อเฉยๆ
    if (item.characters && item.characters.length) {
      var cs = section(item.charactersTitle || S.ui.charsTitle);
      var ul = el("ul", "art-chars");
      item.characters.forEach(function (c) {
        var li = document.createElement("li");
        if (c.page) {
          var a = el("a", "", c.name + " →");
          a.href = u(c.page);
          li.appendChild(a);
        } else {
          li.textContent = c.name;
        }
        ul.appendChild(li);
      });
      cs.appendChild(ul);
      box.appendChild(cs);
    }

    (item.sections || []).forEach(function (sec) {
      var s = section(sec.title);
      if (sec.text) s.appendChild(el("p", "", sec.text));
      if (sec.list) {
        var l = document.createElement("ul");
        sec.list.forEach(function (t) { l.appendChild(el("li", "", t)); });
        s.appendChild(l);
      }
      box.appendChild(s);
    });

    // ขั้นตอนการวาด (ภาพเคลื่อนไหว): ถ้าผู้ใช้ตั้งลดการเคลื่อนไหว แสดงภาพนิ่งแทน
    if (item.process && item.process.image) {
      var pr = section(item.process.title);
      pr.classList.add("wide");
      var src = reduceMotion && item.process.still ? item.process.still : item.process.image;
      var pw = el("div", "art-frame art-pad art-process");
      pw.appendChild(pic(src, item.process.alt));
      pr.appendChild(pw);
      if (item.process.caption) pr.appendChild(el("p", "art-caption", item.process.caption));
      box.appendChild(pr);
    }

    if (item.gallery && item.gallery.length) {
      var gs = section("");
      gs.classList.add("wide");
      var gal = el("div", "work-gallery");
      item.gallery.forEach(function (g) { gal.appendChild(figure(g, item.lightFrame)); });
      gs.appendChild(gal);
      box.appendChild(gs);
    }

    // ภาพเพิ่มเติม (ลองวาดสไตล์อื่น): ไม่มีภาพ = ไม่แสดงส่วนนี้ ป้ายใต้ภาพ = ชื่อตัวละคร · สไตล์อื่น
    if (item.extra && item.extra.items && item.extra.items.length) {
      var ex = section(item.extra.title);
      ex.classList.add("wide");
      if (item.extra.note) ex.appendChild(el("p", "art-caption", item.extra.note));
      var eg = el("div", "work-gallery");
      item.extra.items.forEach(function (x) {
        eg.appendChild(figure({ image: x.image, alt: x.alt, caption: (x.character ? x.character + " · " : "") + "สไตล์อื่น" }, false));
      });
      ex.appendChild(eg);
      box.appendChild(ex);
    }

    var links = (item.links || []).filter(function (l) { return l.href; });
    if (links.length) {
      var ls = section("");
      var lul = el("ul", "work-links");
      links.forEach(function (l) {
        var li = document.createElement("li");
        var a = el("a", "", l.label);
        a.href = l.href;
        a.target = "_blank";
        a.rel = "noopener";
        li.appendChild(a);
        lul.appendChild(li);
      });
      ls.appendChild(lul);
      box.appendChild(ls);
    }
  }

  if (!slug) {
    document.title = A.title + " | " + S.name;
    $("back").textContent = S.ui.back;
    $("page-h").textContent = A.title;
    $("page-intro").textContent = A.intro;
    A.groups.forEach(function (g) {
      var items = g.items.filter(ready);
      if (!items.length) return;
      var sec = el("section", "work-group");
      sec.appendChild(el("h2", "", g.title));
      var grid = el("div", "work-grid");
      items.forEach(function (it) { grid.appendChild(card(it)); });
      sec.appendChild(grid);
      $("groups").appendChild(sec);
    });
  } else {
    renderDetail();
  }

  S.links.forEach(function (l) {
    if (!l.href) return;
    var li = document.createElement("li");
    var a = el("a", "", l.label);
    a.href = l.href;
    a.target = "_blank";
    a.rel = "noopener";
    li.appendChild(a);
    $("links").appendChild(li);
  });

  // ---------- สลับโหมดสว่าง/มืด (เหมือนหน้าอื่น) ----------
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
  var barMetas = document.querySelectorAll('meta[name="theme-color"]');
  function label() {
    btn.textContent = isDark() ? S.ui.themeToLight : S.ui.themeToDark;
    var c = getComputedStyle(document.body).backgroundColor;
    barMetas.forEach(function (m) { m.setAttribute("content", c); });
  }
  btn.addEventListener("click", function () {
    var next = isDark() ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    label();
  });
  label();
})();
