/* ============================================================================
   简历站点逻辑（一般无需修改，简历文本请编辑 js/resume-data.js）
   ----------------------------------------------------------------------------
   - 语言切换：默认中文，点击右上角按钮切换，支持 ?lang=en / ?lang=zh 直达；
   - 主题切换：默认跟随系统，手动切换后记忆（localStorage）；
   - 邮箱保护：邮箱以 XOR + Base64 密文存储于 resume-data.js，
     点击「联系」后才在浏览器内解密生成；页面源码中不存在明文邮箱。
   ============================================================================ */
(function () {
  "use strict";

  var D = window.RESUME_DATA;

  /* ---------- 内置 SVG 图标库 ---------- */
  var ICONS = {
    github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
    mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
    mapPin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.92z"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    lightbulb: '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V18h8v-3.3A7 7 0 0 0 12 2z"/>',
    cpu: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>',
    layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
    zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    external: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',
    moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
    sun: '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>',
    printer: '<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
    copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    check: '<polyline points="20 6 9 17 4 12"/>',
    x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
    award: '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',
    send: '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>'
  };

  function icon(name, cls) {
    return '<svg class="icon ' + (cls || "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || "") + "</svg>";
  }

  /* ---------- HTML 转义（所有文本均经转义后插入） ---------- */
  function esc(v) {
    return String(v == null ? "" : v)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* ---------- 邮箱解密：XOR 密钥流 + Base64（点击联系后才调用） ---------- */
  function decodeEmail() {
    var raw = atob(D.emailCipher);
    var key = D.emailKey;
    var out = "";
    for (var i = 0; i < raw.length; i++) {
      out += String.fromCharCode(raw.charCodeAt(i) ^ key[i % key.length]);
    }
    return out;
  }

  /* ---------- 状态 ---------- */
  var app = document.getElementById("app");
  var qsLang = new URLSearchParams(location.search).get("lang");
  var lang = (qsLang === "zh" || qsLang === "en") ? qsLang
    : (localStorage.getItem("resume-lang") === "en" ? "en" : "zh"); /* 默认中文 */
  var theme = localStorage.getItem("resume-theme") ||
    (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  function applyTheme() {
    document.documentElement.setAttribute("data-theme", theme);
  }

  /* ---------- 渲染 ---------- */
  function render() {
    var d = D[lang];
    var ui = d.ui;
    var heroIcons = ["briefcase", "mapPin", "star"];
    var hasContact = !!(d.header.contact && d.header.contact.length);
    var sy = window.scrollY;

    document.documentElement.lang = d.htmlLang;
    document.title = d.title;
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", d.metaDesc);

    var h = "";

    /* 顶部控制条 */
    h += '<div class="controls">'
      + '<button class="ctl-btn" data-action="lang" aria-label="Switch language">' + esc(ui.langSwitch) + "</button>"
      + '<button class="ctl-btn icon-only" data-action="theme" aria-label="Toggle theme">' + icon(theme === "dark" ? "sun" : "moon") + "</button>"
      + '<button class="ctl-btn" data-action="print" aria-label="' + esc(ui.printBtn) + '">' + icon("printer") + '<span class="print-label">' + esc(ui.printBtn) + "</span></button>"
      + "</div>";

    /* 头部 */
    h += '<header class="hero">'
      + '<div class="hero-top"><div>'
      + '<p class="role">' + esc(d.header.role) + "</p>"
      + "<h1>" + esc(d.header.name) + "</h1></div>"
      + '<div class="hero-actions">'
      + '<a class="btn btn-primary" href="' + esc(D.links.github) + '" target="_blank" rel="noopener noreferrer">' + icon("github") + esc(ui.githubBtn) + "</a>"
      + '<button class="btn btn-ghost" data-action="contact">' + icon("mail") + esc(ui.contactBtn) + "</button>"
      + "</div></div>"
      + '<p class="tagline">' + esc(d.header.tagline) + "</p>"
      + '<p class="hero-summary">' + esc(d.header.summary) + "</p>"
      + '<div class="hero-meta">'
      + d.header.meta.map(function (m, i) {
          return "<span>" + icon(heroIcons[i % heroIcons.length]) + esc(m) + "</span>";
        }).join("")
      + "</div>"
      + (hasContact
        ? '<div class="hero-contact">'
          + d.header.contact.map(function (c) {
              var external = /^https?:/i.test(c.href || "");
              return '<a href="' + esc(c.href || "#") + '"'
                + (external ? ' target="_blank" rel="noopener noreferrer"' : "")
                + ">" + icon(c.icon) + esc(c.text) + "</a>";
            }).join("")
          + "</div>"
        : '<div class="print-contact"><a id="printEmail" href="#"></a><a id="printGithub" href="' + esc(D.links.github) + '">' + esc(D.links.github.replace(/^https?:\/\//, "")) + "</a></div>")
      + "</header>";

    /* 核心优势 */
    h += '<section class="about-section"><h2>' + esc(d.about.title) + '</h2><div class="about-grid">'
      + d.about.cards.map(function (c) {
          return '<article class="about-card"><div class="icon-badge">' + icon(c.icon) + "</div><h3>" + esc(c.title) + "</h3><p>" + esc(c.desc) + "</p></article>";
        }).join("")
      + "</div></section>";

    /* 技术栈 */
    h += '<section class="skills-section"><h2>' + esc(d.skills.title) + '</h2><div class="skills">'
      + d.skills.groups.map(function (g) {
          return '<div class="skill-group"><h3>' + esc(g.name) + '</h3><div class="skill-pills">'
            + g.items.map(function (s) { return '<span class="skill">' + esc(s) + "</span>"; }).join("")
            + "</div></div>";
        }).join("")
      + "</div></section>";

    /* 工作经历 */
    h += '<section class="experience-section"><h2>' + esc(d.experience.title) + '</h2><div class="timeline">'
      + d.experience.items.map(function (it) {
          var s = '<article class="item"><div class="item-head"><div>'
            + "<h3>" + esc(it.company) + "</h3>"
            + '<p class="item-role">' + esc(it.role) + '</p></div><span class="period">' + esc(it.period) + "</span></div><ul>"
            + it.bullets.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("")
            + "</ul>";
          if (it.highlights && it.highlights.length) {
            s += '<div class="highlights">'
              + it.highlights.map(function (x) { return '<span class="highlight">' + icon("star") + esc(x) + "</span>"; }).join("")
              + "</div>";
          }
          return s + "</article>";
        }).join("")
      + "</div></section>";

    /* 项目经历 */
    h += '<section class="projects-section"><h2>' + esc(d.projects.title) + "</h2>"
      + d.projects.items.map(function (p) {
          var s = '<article class="project' + (p.featured ? " featured" : "") + '">'
            + (p.featured ? '<span class="featured-badge">' + esc(ui.featuredBadge) + "</span>" : "")
            + '<div class="project-intro"><div class="proj-head"><h3>' + esc(p.name) + '</h3><span class="proj-period">' + esc(p.period) + "</span></div>"
            + '<p class="proj-role">' + esc(p.role) + "</p>"
            + '<p class="proj-desc">' + esc(p.desc) + "</p></div>";
          if (p.stats && p.stats.length) {
            s += '<div class="stats">'
              + p.stats.map(function (st) { return '<div class="stat"><b>' + esc(st.num) + "</b><span>" + esc(st.label) + "</span></div>"; }).join("")
              + "</div>";
          }
          s += '<ul class="proj-bullets">'
            + p.bullets.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("")
            + "</ul>";
          if (p.achievement) s += '<p class="achievement">' + icon("check") + "<span>" + esc(p.achievement) + "</span></p>";
          if (p.tags && p.tags.length) {
            s += '<div class="tags">'
              + p.tags.map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("")
              + "</div>";
          }
          return s + "</article>";
        }).join("")
      + "</section>";

    /* 开源与作品 */
    h += '<section class="open-source-section"><h2>' + esc(d.openSource.title) + '</h2><div class="os-grid">'
      + d.openSource.items.map(function (o) {
          return '<a class="os-card" href="' + esc(D.links[o.urlKey] || "#") + '" target="_blank" rel="noopener noreferrer">'
            + "<div><h3>" + esc(o.name) + "</h3><p>" + esc(o.desc) + "</p></div>" + icon("external") + "</a>";
        }).join("")
      + "</div></section>";

    /* 教育与证书 */
    h += '<section><div class="duo">'
      + '<div class="duo-card"><h2>' + esc(d.education.title) + "</h2>"
      + d.education.items.map(function (e) {
          return '<p class="edu"><b>' + esc(e.school) + "</b><span>" + esc(e.degree) + " · " + esc(e.period) + "</span></p>";
        }).join("")
      + "</div>"
      + '<div class="duo-card"><h2>' + esc(d.certs.title) + '</h2><div class="cert-list">'
      + d.certs.items.map(function (c) { return '<span class="cert">' + icon("award") + esc(c) + "</span>"; }).join("")
      + "</div></div></div></section>";

    /* 联系弹窗与提示条（邮箱点击「联系」后才填充，源码无明文） */
    h += '<div class="modal-overlay" id="modalOverlay">'
      + '<div class="modal" role="dialog" aria-modal="true" aria-label="' + esc(ui.contactTitle) + '">'
      + '<button class="modal-close" data-action="close" aria-label="Close">' + icon("x") + "</button>"
      + "<h3>" + icon("mail") + esc(ui.contactTitle) + "</h3>"
      + '<p class="modal-hint">' + esc(ui.modalHint) + "</p>"
      + '<div class="email-box" id="emailBox"></div>'
      + '<div class="modal-actions">'
      + '<button class="btn btn-primary" data-action="copy-email">' + icon("copy") + esc(ui.copyBtn) + "</button>"
      + '<a class="btn btn-ghost" id="mailtoLink" href="#">' + icon("send") + esc(ui.mailBtn) + "</a>"
      + "</div></div></div>"
      + '<div class="toast" id="toast">' + icon("check") + '<span id="toastText"></span></div>';

    app.innerHTML = h;
    window.scrollTo(0, sy);
  }

  /* ---------- 交互 ---------- */
  var toastTimer = null;

  function showToast(msg) {
    var t = document.getElementById("toast");
    document.getElementById("toastText").textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("show"); }, 1800);
  }

  function preparePrint() {
    var emailLink = document.getElementById("printEmail");
    if (!emailLink) return; /* 非脱敏版本已直接展示联系方式 */
    var email = decodeEmail();
    emailLink.textContent = email;
    emailLink.href = "mailto:" + email;
  }

  function printResume() {
    preparePrint();
    window.print();
  }

  function openModal() {
    var email = decodeEmail(); /* 仅在用户点击后才解密生成 */
    document.getElementById("emailBox").textContent = email;
    document.getElementById("mailtoLink").href = "mailto:" + email;
    document.getElementById("modalOverlay").classList.add("open");
  }

  function closeModal() {
    var m = document.getElementById("modalOverlay");
    if (m) m.classList.remove("open");
  }

  function fallbackCopy(text, done) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); done(); } catch (e) {}
    document.body.removeChild(ta);
  }

  function copyEmail() {
    var email = document.getElementById("emailBox").textContent;
    var done = function () { showToast(D[lang].ui.copied); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(done).catch(function () { fallbackCopy(email, done); });
    } else {
      fallbackCopy(email, done);
    }
  }

  function toggleLang() {
    lang = lang === "zh" ? "en" : "zh";
    localStorage.setItem("resume-lang", lang);
    try { history.replaceState(null, "", "?lang=" + lang); } catch (e) {}
    render();
  }

  function toggleTheme() {
    theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("resume-theme", theme);
    applyTheme();
    render();
  }

  app.addEventListener("click", function (e) {
    var t = e.target.closest ? e.target.closest("[data-action]") : null;
    if (!t) {
      if (e.target && e.target.id === "modalOverlay") closeModal();
      return;
    }
    var action = t.getAttribute("data-action");
    if (action === "lang") toggleLang();
    else if (action === "theme") toggleTheme();
    else if (action === "print") printResume();
    else if (action === "contact") openModal();
    else if (action === "close") closeModal();
    else if (action === "copy-email") copyEmail();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });
  window.addEventListener("beforeprint", preparePrint);

  /* ---------- 启动 ---------- */
  applyTheme();
  render();
})();
