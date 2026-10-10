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
    if (item.year) meta.appendChild(el("span", "work-year", item.year));
    if (item.role) meta.appendChild(el("span", "", item.role));
    if (item.status) meta.appendChild(el("span", "thumb-status", item.status));
    if (meta.childNodes.length) box.appendChild(meta);

    if (item.desc) box.appendChild(el("p", "work-lead", item.desc));

    // กรอบ Figma: สร้างจากฟังก์ชันเดียวกันทั้งแบบลิงก์เดียวและแบบมีตัวเลือกสลับ
    function makeEmbedSection(title, ratio) {
      var fs = el("section", "work-section wide");
      fs.appendChild(el("h2", "", title));
      var frame = el("div", "work-embed");
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
      f.title = "Figma: " + item.title;
      f.loading = "lazy";
      f.allowFullscreen = true;
      frame.appendChild(f);
      fs.appendChild(frame);
      var open = el("a", "work-embed-open", S.ui.figmaOpen);
      open.target = "_blank";
      open.rel = "noopener";
      fs.appendChild(open);
      return { section: fs, frame: frame, iframe: f, open: open };
    }

    var ratio = item.figmaRatio || "16 / 10";
    var embed = item.figma ? figmaEmbedUrl(item.figma) : "";
    // ตัวเลือกสลับแบบทดลอง (dropdown): แสดงเฉพาะแบบที่ใส่ลิงก์ Figma ที่ฝังได้แล้ว
    var variants = (item.variants || []).map(function (v) {
      return { label: v.label, figma: v.figma, preview: v.preview, embed: v.figma ? figmaEmbedUrl(v.figma) : "" };
    }).filter(function (v) { return v.embed; });

    // ภาพหน้าปก: แสดงเมื่อมีภาพจริงและไม่มี Figma เท่านั้น (ไม่มีภาพ = ไม่โชว์กรอบเปล่า)
    if (!embed && !variants.length && item.image) {
      var hero = el("div", "work-hero");
      var ph = el("div", "ph");
      placeholderOrImage(ph, item.image, item.imageAlt);
      hero.appendChild(ph);
      box.appendChild(hero);
    }

    if (embed) {
      var one = makeEmbedSection(S.ui.figmaTitle, ratio);
      one.iframe.src = embed;
      one.open.href = item.figma;
      box.appendChild(one.section);
    }

    if (variants.length) {
      var vsec = makeEmbedSection(item.variantsTitle || S.ui.variantsTitle, ratio);
      if (item.variantsNote) {
        vsec.section.insertBefore(el("p", "variant-note", item.variantsNote), vsec.frame);
      }
      var bar = el("div", "variant-bar");
      var lab = el("label", "variant-label", S.ui.variantPick);
      lab.setAttribute("for", "variant-select");
      var sel = document.createElement("select");
      sel.id = "variant-select";
      sel.className = "variant-select";
      variants.forEach(function (v, i) {
        var o = document.createElement("option");
        o.value = String(i);
        o.textContent = v.label;
        sel.appendChild(o);
      });
      bar.appendChild(lab);
      bar.appendChild(sel);
      vsec.section.insertBefore(bar, vsec.frame);
      var pv = el("img", "variant-preview");
      pv.alt = "";
      pv.loading = "lazy";
      vsec.section.insertBefore(pv, vsec.frame);
      function pick(i) {
        var v = variants[i];
        vsec.iframe.src = v.embed;
        vsec.open.href = v.figma;
        pv.alt = v.label;
        if (v.preview) { pv.src = v.preview; pv.hidden = false; } else { pv.removeAttribute("src"); pv.hidden = true; }
      }
      sel.addEventListener("change", function () { pick(parseInt(sel.value, 10)); });
      pick(0);
      box.appendChild(vsec.section);
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
