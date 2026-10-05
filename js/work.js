(function () {
  var S = window.SITE;
  var root = document.documentElement;
  var $ = function (id) { return document.getElementById(id); };
  var slug = document.body.getAttribute("data-work");

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }

  // หางานจาก slug (ข้อมูลอยู่ที่ SITE.build ใน data.js)
  var item = null;
  S.build.groups.forEach(function (g) {
    g.items.forEach(function (it) { if (it.slug === slug) item = it; });
  });

  $("site-name").textContent = S.name;
  $("back").textContent = S.ui.backBuild;
  $("note").textContent = S.note;
  var box = $("work-root");

  // ลิงก์ Figma (ไฟล์หรือ prototype ที่ตั้งเป็น "ใครมีลิงก์ก็ดูได้") -> ลิงก์ฝัง
  // รูปแบบปัจจุบันของ Figma (Embed Kit 2.0): เปลี่ยน www เป็น embed และใส่ embed-host
  // ไฟล์ Figma Make และไฟล์ที่ใส่รหัสผ่านฝังไม่ได้ / โฮสต์อื่นที่ไม่ใช่ Figma จะถูกปฏิเสธ
  function figmaEmbedUrl(u) {
    try {
      var url = new URL(u);
      if (!/^(www\.|embed\.)?figma\.com$/.test(url.hostname)) return "";
      url.hostname = "embed.figma.com";
      url.pathname = url.pathname.replace(/^\/file\//, "/design/");
      if (!/^\/(design|board|proto|slides)\//.test(url.pathname)) return "";
      url.searchParams.set("embed-host", "share");
      return url.toString();
    } catch (e) { return ""; }
  }

  function placeholderOrImage(wrap, src, alt) {
    if (src) {
      wrap.classList.add("loading");
      var img = new Image();
      img.alt = alt || "";
      img.onload = function () { wrap.classList.remove("loading"); };
      img.src = src;
      wrap.appendChild(img);
    } else {
      wrap.textContent = S.ui.placeholder;
    }
  }

  // เลือกสีตัวอักษรบนพื้นสี (ใช้ในป้ายตัวอย่างสี)
  function validHex(h) { return /^#[0-9a-f]{6}$/i.test(h); }

  if (!item) {
    box.appendChild(el("h1", "", S.ui.notFound));
  } else {
    box.appendChild(el("h1", "", item.title));

    var meta = el("p", "work-meta");
    if (item.role) meta.appendChild(el("span", "", item.role));
    if (item.status) meta.appendChild(el("span", "thumb-status", item.status));
    if (meta.childNodes.length) box.appendChild(meta);

    if (item.desc) box.appendChild(el("p", "work-lead", item.desc));

    // กรอบ Figma (ถ้ามีลิงก์) โหลดแบบ lazy / ถ้ามี Figma แล้วไม่ต้องมีภาพหน้าปก (ภาพย่อยังอยู่ที่การ์ดหน้า Build)
    var embed = item.figma ? figmaEmbedUrl(item.figma) : "";
    if (!embed) {
      var hero = el("div", "work-hero");
      var ph = el("div", "ph");
      placeholderOrImage(ph, item.image, item.imageAlt);
      hero.appendChild(ph);
      box.appendChild(hero);
    }
    if (embed) {
      var fs = el("section", "work-section wide");
      fs.appendChild(el("h2", "", S.ui.figmaTitle));
      var frame = el("div", "work-embed");
      var ratio = item.figmaRatio || "16 / 10";
      frame.style.aspectRatio = ratio;
      var parts = ratio.split("/");
      if (parts.length === 2 && parseFloat(parts[0]) < parseFloat(parts[1])) frame.classList.add("portrait");
      // ถ้าหน้านี้มีนโยบายความปลอดภัย (CSP) ที่ห้ามกรอบจาก Figma (เช่นหน้าพรีวิวบางที่)
      // ให้โชว์ข้อความแทนกล่องข้อผิดพลาดของเบราว์เซอร์ (ปุ่ม "เปิดใน Figma" อยู่ใต้กรอบเสมอ)
      document.addEventListener("securitypolicyviolation", function (e) {
        if (/figma\.com/.test(e.blockedURI || "") && /frame|child/.test(e.violatedDirective || "")) {
          frame.classList.add("is-blocked");
          frame.textContent = S.ui.figmaBlocked;
        }
      });
      var f = document.createElement("iframe");
      f.src = embed;
      f.title = "Figma: " + item.title;
      f.loading = "lazy";
      f.allowFullscreen = true;
      frame.appendChild(f);
      fs.appendChild(frame);
      var open = el("a", "work-embed-open", S.ui.figmaOpen);
      open.href = item.figma;
      open.target = "_blank";
      open.rel = "noopener";
      fs.appendChild(open);
      box.appendChild(fs);
    }

    (item.sections || []).forEach(function (sec) {
      var s = el("section", "work-section");
      s.appendChild(el("h2", "", sec.title));
      if (sec.text) s.appendChild(el("p", "", sec.text));
      if (sec.list) {
        var ul = document.createElement("ul");
        sec.list.forEach(function (t) { ul.appendChild(el("li", "", t)); });
        s.appendChild(ul);
      }
      // ตัวอย่างสี: แสดงต่อท้ายหัวข้อ "ธีมและการออกแบบ" ถ้ามี palette
      if (sec.title === "ธีมและการออกแบบ" && item.palette && item.palette.length) {
        var colors = item.palette.filter(function (c) { return validHex(c.hex); });
        var pal = el("div", "palette");
        pal.style.gridTemplateColumns = "repeat(" + Math.min(colors.length, 6) + ", 1fr)";
        colors.forEach(function (c) {
          var sw = el("div", "swatch");
          var col = el("div", "swatch-color");
          col.style.background = c.hex;
          sw.appendChild(col);
          var lab = el("span", "swatch-label");
          lab.appendChild(el("span", "swatch-name", c.name));
          lab.appendChild(el("span", "swatch-hex", c.hex.toUpperCase()));
          sw.appendChild(lab);
          pal.appendChild(sw);
        });
        s.appendChild(pal);
      }
      box.appendChild(s);
    });

    if (item.gallery && item.gallery.length) {
      var gs = el("section", "work-section wide");
      var gal = el("div", "work-gallery");
      item.gallery.forEach(function (g) {
        var fig = document.createElement("figure");
        var im = new Image();
        im.alt = g.alt || "";
        im.loading = "lazy";
        im.src = g.image;
        fig.appendChild(im);
        gal.appendChild(fig);
      });
      gs.appendChild(gal);
      box.appendChild(gs);
    }

    var links = (item.links || []).filter(function (l) { return l.href; });
    if (links.length) {
      var ls = el("section", "work-section");
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
