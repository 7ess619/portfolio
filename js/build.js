(function () {
  var S = window.SITE;
  var B = S.build;
  var root = document.documentElement;
  var $ = function (id) { return document.getElementById(id); };

  // ---------- เนื้อหา ----------
  document.title = B.title + " | " + S.name;
  $("site-name").textContent = S.name;
  $("back").textContent = S.ui.back;
  $("page-h").textContent = B.title;
  $("page-intro").textContent = B.intro;
  $("note").textContent = S.note;

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }

  function card(item) {
    var c = el("article", "work");
    var ph = el("div", "ph");
    if (item.image) {
      ph.classList.add("loading");
      var img = new Image();
      img.alt = item.imageAlt || "";
      img.onload = function () { ph.classList.remove("loading"); };
      img.src = item.image;
      ph.appendChild(img);
    } else {
      ph.textContent = S.ui.placeholder;
    }
    c.appendChild(ph);
    c.appendChild(el("h3", "", item.title));
    if (item.role) c.appendChild(el("span", "work-role", item.role));
    if (item.status) c.appendChild(el("span", "thumb-status", item.status));
    // ลิงก์ไปหน้างาน: แสดงเมื่อสร้างหน้านั้นแล้ว (ใส่ page ใน data.js) ยังไม่มีหน้า = ไม่แสดง ไม่มีลิงก์เสีย
    if (item.page) {
      var more = el("a", "work-detail-link", S.ui.detailLink);
      more.href = item.page;
      c.appendChild(more);
    }
    // ปุ่มลิงก์: ช่องที่ href ว่างจะไม่แสดง (ใส่หลังเช็กแล้วว่าเปิดได้จริง)
    var links = (item.links || []).filter(function (l) { return l.href; });
    if (links.length) {
      var ul = el("ul", "work-links");
      links.forEach(function (l) {
        var li = document.createElement("li");
        var a = el("a", "", l.label);
        a.href = l.href;
        a.target = "_blank";
        a.rel = "noopener";
        li.appendChild(a);
        ul.appendChild(li);
      });
      c.appendChild(ul);
    }
    return c;
  }

  B.groups.forEach(function (g) {
    var sec = el("section", "work-group");
    sec.appendChild(el("h2", "", g.title));
    var grid = el("div", "work-grid");
    g.items.forEach(function (it) { grid.appendChild(card(it)); });
    sec.appendChild(grid);
    $("groups").appendChild(sec);
  });

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

  // ---------- สลับโหมดสว่าง/มืด (เหมือนหน้าแรก) ----------
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
