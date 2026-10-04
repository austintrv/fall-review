/* Review site app. Content lives in the class .js files; this file only renders it. */
(function () {
  "use strict";

  var SITE = window.SITE || { exams: [], order: [] };
  var COURSES = window.COURSES || {};
  var ORDER = (SITE.order || Object.keys(COURSES)).filter(function (id) { return COURSES[id]; });
  var KEY = "review-site-v1";
  var TABS = [["review", "Review"], ["maps", "Maps"], ["cards", "Flashcards"], ["quiz", "Quiz"], ["drills", "Drills & Hypos"]];
  var LET = "ABCDEFGH";
  var CONF = [["shaky", "Shaky", "#ff2d95"], ["ok", "Getting there", "#ffc400"], ["solid", "Solid", "#3dff5a"]];
  var app = document.getElementById("app");

  /* ---------- saved progress (this browser only) ---------- */
  var store = load();
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) { /* storage blocked */ } }
  function P(id) {
    if (!store[id]) store[id] = {};
    var p = store[id];
    p.again = p.again || [];
    p.missed = p.missed || [];
    p.drillBest = p.drillBest || {};
    p.conf = p.conf || {};
    p.unit = p.unit || 0;
    p.map = p.map || 0;
    p.drill = p.drill || 0;
    return p;
  }
  // stable key from text, so editing other content never scrambles progress
  function hash(s) {
    var h = 5381;
    for (var i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
    return "k" + (h >>> 0).toString(36);
  }

  /* ---------- session state (resets on reload) ---------- */
  function freshS() { return { deck: null, deckMode: "Full deck", cardUnit: -1, card: 0, flip: false, quiz: null, quizUnit: -1, dr: null, open: {}, openBlocks: {} }; }
  var S = freshS();
  var lastCourse = null;

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function paras(x, cls) {
    if (!x) return "";
    var arr = Array.isArray(x) ? x : [x];
    return arr.map(function (t) { return "<p" + (cls ? ' class="' + cls + '"' : "") + ">" + esc(t) + "</p>"; }).join("");
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function range(n) { var a = []; for (var i = 0; i < n; i++) a.push(i); return a; }
  function daysUntil(iso) {
    if (!iso) return null;
    return Math.ceil((new Date(iso + "T09:00:00").getTime() - Date.now()) / 86400000);
  }
  function route() {
    var raw = (location.hash || "#/").replace(/^#\/?/, "");
    var parts = raw.split("/");
    if (parts[0] === "search") return { search: decodeURIComponent(parts.slice(1).join("/") || "") };
    var course = parts[0] && COURSES[parts[0]] ? parts[0] : null;
    return { course: course, tab: parts[1] || "review" };
  }
  function cardUnit(c) { return c.length > 2 && typeof c[2] === "number" ? c[2] : -1; }
  function thinList(c) {
    var out = [];
    c.units.forEach(function (u, ui) {
      if (u.check && u.check.status === "thin") out.push({ ui: ui, unit: u.title, block: "", note: u.check.note });
      (u.blocks || []).forEach(function (b) {
        if (b.check && b.check.status === "thin") out.push({ ui: ui, unit: u.title, block: b.title, note: b.check.note });
      });
    });
    return out;
  }
  var ARROW_DOWN = '<svg width="16" height="28" viewBox="0 0 16 28" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square" aria-hidden="true"><path d="M8 0 L8 24"/><path d="M2 18 L8 25 L14 18"/></svg>';
  var ARROW_LEFT = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square" aria-hidden="true"><path d="M10 3 L5 8 L10 13"/></svg>';
  var SEARCH_ICON = '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="7.5" cy="7.5" r="5.5"/><path d="M12 12 L16.5 16.5"/></svg>';

  function searchBar(value) {
    return '<form class="searchbar" data-form="search" role="search"><label class="sr" for="q">Search all classes</label>' + SEARCH_ICON +
      '<input id="q" name="q" type="search" placeholder="Search rules, cases, terms across all classes" value="' + esc(value || "") + '" autocomplete="off"></form>';
  }

  /* ---------- hub ---------- */
  function renderHub() {
    document.title = SITE.title || "Review";
    var exams = (SITE.exams || []).map(function (x) {
      var d = daysUntil(x.date);
      if (d !== null && d < 0) return "";
      return '<div class="sticker" style="flex-direction:row;align-items:center;gap:14px">' +
        (d !== null ? '<span class="big-num" style="font-size:64px">' + d + "</span>" : "") +
        '<span class="lab" style="max-width:220px">' + esc(x.label) + "</span></div>";
    }).join("");
    var cards = ORDER.map(function (id, i) {
      var c = COURSES[id], p = P(id);
      var hue = c.hue || "#ff2d95";
      var num = hue === "#3dff5a"
        ? '<span class="num" style="background:#3dff5a;align-self:flex-start;padding:4px 8px">0' + (i + 1) + "</span>"
        : '<span class="num" style="color:' + esc(hue) + '">0' + (i + 1) + "</span>";
      var solid = c.units.filter(function (u) { return p.conf[hash(u.title)] === "solid"; }).length;
      var stats = [
        c.units.length + " units", c.cards.length + " cards", c.quiz.length + " quiz Qs",
        p.quizBest != null ? "Best quiz " + p.quizBest + "%" : "No quiz yet",
        p.missed.length ? p.missed.length + " missed to retry" : null,
        p.again.length ? p.again.length + (p.again.length === 1 ? " card" : " cards") + " in again pile" : null
      ].filter(Boolean).map(function (s) { return '<span class="lab stat">' + esc(s) + "</span>"; }).join("");
      var bar = '<div class="confbar" aria-label="' + solid + " of " + c.units.length + ' units rated solid">' + c.units.map(function (u) {
        var v = p.conf[hash(u.title)], col = v === "solid" ? "#3dff5a" : v === "ok" ? "#ffc400" : v === "shaky" ? "#ff2d95" : "rgba(22,20,18,0.15)";
        return '<span style="background:' + col + '"></span>';
      }).join("") + '</div><span class="lab" style="color:#4d4133;font-size:11px">' + solid + " / " + c.units.length + " units rated solid</span>";
      return '<a class="cut course-card push" href="#/' + id + '/review">' + num +
        '<span class="headline" style="font-size:26px;line-height:1.05">' + esc(c.t1 + " " + c.t2) + "</span>" +
        '<span class="lab" style="color:#4d4133">' + esc(c.exam.label + " · " + c.exam.when) + "</span>" +
        '<span style="font-size:16px;line-height:23px">' + esc(c.sub) + "</span>" + bar +
        '<span class="stats">' + stats + "</span></a>";
    }).join("");
    app.innerHTML =
      '<div class="wrap" style="gap:48px">' +
      '<header style="display:flex;flex-direction:column;gap:20px">' +
      '<div class="lab muted">' + esc(SITE.kicker || "") + "</div>" +
      '<h1 class="mega">' + esc(SITE.title1 || "Review") + '<br><span style="color:#ff2d95">' + esc(SITE.title2 || "") + "</span></h1>" +
      '<p class="subhead">' + esc(SITE.sub || "") + "</p>" +
      '<div class="row" style="gap:12px">' + exams + "</div>" + searchBar("") + "</header>" +
      '<section style="display:flex;flex-direction:column;gap:20px"><h2 class="h2">Pick a class</h2><div class="g3">' + cards + "</div></section>" +
      '<section style="display:flex;flex-direction:column;gap:16px"><h2 class="h2">The loop</h2><div class="g4">' +
      loopCard("01", "#ff2d95", "Review", "Read the unit overview, then each block. Rate the unit when you finish.") +
      loopCard("02", "#b3381a", "Map it", "Walk the flowchart for that topic without looking at the review.") +
      loopCard("03", "#5b2ea6", "Test", "Quiz that unit from the button at the bottom of the review. Read why each wrong choice fails.") +
      loopCard("04", "#285f94", "Apply", "Sorting drills and hypos. Write your answer before revealing.") +
      "</div>" +
      '<p class="muted" style="margin:0;font-size:15px">Keys: <span class="kbd">/</span> search · <span class="kbd">Space</span> flip card · <span class="kbd">←</span> <span class="kbd">→</span> prev/next · <span class="kbd">1</span>–<span class="kbd">4</span> answer · <span class="kbd">Enter</span> next question</p></section>' +
      '<footer class="lab spread"><span>Progress saves in this browser only</span><button class="linkbtn lab" data-act="reset">Reset all progress</button></footer>' +
      "</div>";
  }
  function loopCard(n, color, title, text) {
    return '<div class="cut loop"><span class="n" style="color:' + color + '">' + n + "</span><b>" + title + "</b><span>" + text + "</span></div>";
  }

  /* ---------- search ---------- */
  function renderSearch(q) {
    document.title = "Search · " + (SITE.title || "Review");
    var terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    var results = [];
    function hit(text) { var t = text.toLowerCase(); return terms.length && terms.every(function (w) { return t.indexOf(w) >= 0; }); }
    function snippet(text) {
      var t = text, i = t.toLowerCase().indexOf(terms[0] || "");
      var start = Math.max(0, i - 70), s = (start ? "…" : "") + t.slice(start, start + 220) + (start + 220 < t.length ? "…" : "");
      var out = esc(s);
      terms.forEach(function (w) { out = out.replace(new RegExp("(" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig"), "<mark>$1</mark>"); });
      return out;
    }
    if (terms.length) ORDER.forEach(function (id) {
      var c = COURSES[id];
      c.units.forEach(function (u, ui) {
        var ov = [].concat(u.overview || []).join(" ");
        if (hit(u.title + " " + ov)) results.push({ id: id, kind: "Unit", title: u.title, text: ov || u.title, href: "#/" + id + "/review", unit: ui });
        (u.blocks || []).forEach(function (b) {
          var body = [b.title].concat(b.explain || [], (b.items || []).map(function (it) { return it[0] + " – " + (it[1] || "") + " " + (it[2] || []).join(" "); }), b.tip || "").join(" ");
          if (hit(body)) results.push({ id: id, kind: "Review", title: u.title + " › " + b.title, text: body, href: "#/" + id + "/review", unit: ui });
        });
      });
      c.cards.forEach(function (cd) { if (hit(cd[0] + " " + cd[1])) results.push({ id: id, kind: "Card", title: cd[0], text: cd[1], href: "#/" + id + "/cards" }); });
      c.quiz.forEach(function (qq) { if (hit(qq.q + " " + (qq.e || ""))) results.push({ id: id, kind: "Quiz", title: qq.q, text: qq.e || "", href: "#/" + id + "/quiz" }); });
    });
    var list = results.slice(0, 80).map(function (r, i) {
      return '<a class="cut result-row push" href="' + r.href + '" data-act="goResult" data-i="' + i + '"><span class="row"><span class="lab stat">' + esc(COURSES[r.id].title) + '</span><span class="lab stat" style="background:#5b2ea6">' + r.kind + "</span></span>" +
        '<span class="headline" style="font-size:17px;line-height:1.25">' + esc(r.title) + "</span><span>" + snippet(r.text) + "</span></a>";
    }).join("");
    S.results = results;
    app.innerHTML = '<div class="wrap"><nav class="top"><a class="btn solid lab push" href="#/">' + ARROW_LEFT + "Review hub</a></nav>" +
      '<h1 class="h2">Search</h1>' + searchBar(q) +
      '<p class="lab muted" style="margin:0">' + (terms.length ? results.length + " result" + (results.length === 1 ? "" : "s") + (results.length > 80 ? " · showing 80" : "") : "Type a rule, case, or term") + "</p>" +
      '<div style="display:flex;flex-direction:column;gap:12px">' + list + "</div></div>";
    var input = document.getElementById("q");
    if (input) { input.focus(); input.setSelectionRange(input.value.length, input.value.length); }
  }

  /* ---------- course page ---------- */
  function renderCourse(id, tab) {
    var c = COURSES[id], p = P(id);
    if (lastCourse !== id) { S = freshS(); lastCourse = id; }
    document.title = c.title + " · Review";
    var hue = c.hue || "#ff2d95";
    var others = ORDER.filter(function (o) { return o !== id; }).map(function (o) {
      return '<a class="btn quiet lab push" href="#/' + o + "/" + tab + '">' + esc(COURSES[o].title) + "</a>";
    }).join("");
    var d = daysUntil(c.exam.date);
    var sticker = '<div class="sticker" style="min-width:220px;padding:20px 24px"><div class="lab">' + esc(c.exam.label) + "</div>" +
      (d !== null && d >= 0 ? '<div style="display:flex;align-items:baseline;gap:10px"><span class="big-num">' + d + '</span><span class="lab">days left</span></div>' : "") +
      '<div class="headline" style="font-size:18px">' + esc(c.exam.when) + "</div></div>";
    var tabs = TABS.map(function (t) {
      return '<a class="btn tab lab push' + (t[0] === tab ? " on" : "") + '" href="#/' + id + "/" + t[0] + '"' + (t[0] === tab ? ' aria-current="page"' : "") + ">" + t[1] + "</a>";
    }).join("");
    var body = tab === "maps" ? viewMaps(c, p, hue) : tab === "cards" ? viewCards(c, p) : tab === "quiz" ? viewQuiz(id, c, p) : tab === "drills" ? viewDrills(id, c, p, hue) : viewReview(id, c, p, hue);
    var thin = thinList(c);
    var checkPanel = thin.length
      ? '<details class="panel checkpanel"><summary class="lab">Content check · ' + thin.length + " spot" + (thin.length === 1 ? "" : "s") + " need more source material</summary><ul>" +
        thin.map(function (t) { return "<li><b>" + esc(t.unit + (t.block ? " › " + t.block : "")) + "</b> – " + esc(t.note) + "</li>"; }).join("") + "</ul></details>"
      : "";
    app.innerHTML =
      '<div class="wrap">' +
      '<nav class="top" aria-label="Classes"><a class="btn solid lab push" href="#/">' + ARROW_LEFT + "Review hub</a><div class=\"row\">" + others +
      '<a class="btn quiet lab push" href="#/search/" aria-label="Search">' + SEARCH_ICON + "</a></div></nav>" +
      '<header class="hero"><div class="hero-text"><div class="lab muted">' + esc(c.kicker) + "</div>" +
      '<h1 class="poster' + (Math.max(c.t1.length, c.t2.length) > 10 ? " long" : "") + '">' + esc(c.t1) + '<br><span style="color:' + esc(hue) + '">' + esc(c.t2) + "</span></h1>" +
      '<p class="subhead">' + esc(c.sub) + "</p></div>" + sticker + "</header>" +
      '<nav class="tabs" aria-label="Study modes">' + tabs + "</nav>" +
      body + checkPanel +
      '<footer class="lab">Built from the ' + esc(c.title) + " outline, slides, and your notes · " + esc(c.cover) + "</footer></div>";
  }

  function pills(list, active, act, dots) {
    return '<div class="row">' + list.map(function (label, i) {
      var dot = dots && dots[i] ? '<span class="dot" style="background:' + dots[i] + '"></span>' : "";
      return '<button class="btn pill push' + (i === active ? " on" : " quiet") + '" data-act="' + act + '" data-i="' + i + '">' + dot + label + "</button>";
    }).join("") + "</div>";
  }
  function unitSelect(c, value, act) {
    return '<label class="selectwrap lab"><span>Unit</span><select data-change="' + act + '"><option value="-1"' + (value < 0 ? " selected" : "") + ">All units</option>" +
      c.units.map(function (u, i) { return '<option value="' + i + '"' + (value === i ? " selected" : "") + ">" + String(i + 1).padStart(2, "0") + " " + esc(u.title) + "</option>"; }).join("") + "</select></label>";
  }

  /* review */
  /* sentence splitting for bullet layout (keeps legal abbreviations together) */
  var ABBR = /(?:^|[\s(])(?:art|arts|v|vs|cmt|cmts|no|nos|st|mr|ms|dr|inc|co|corp|cir|ct|rev|supp|stat|pub|para|paras|pp|p|ch|concl|concls|ed|res|doc|reg|cl|n|e\.g|i\.e|etc|u\.s|u\.n|jr|sr|sec|secs|ss|fed|tex|cal|minn|kan|subch|id|cf|al|op|seq|approx|incl|govt|dept|admin|amend|const|r|ann)\.$/i;
  function sentences(text) {
    var out = [], buf = "", i = 0, s = String(text || "");
    while (i < s.length) {
      var ch = s[i];
      buf += ch;
      if ((ch === "." || ch === "?" || ch === "!") ) {
        var j = i + 1;
        while (j < s.length && /[”"’)\]]/.test(s[j])) { buf += s[j]; j++; }
        var rest = s.slice(j);
        var m = rest.match(/^\s+(?=[A-Z“"(\[§0-9])/);
        var prev = buf.replace(/[”"’)\]]+$/, "");
        var single = /(?:^|\s)[A-Z]\.$/.test(prev);
        if (m && !ABBR.test(prev) && !single) { out.push(buf.trim()); buf = ""; i = j + m[0].length; continue; }
        i = j; continue;
      }
      i++;
    }
    if (buf.trim()) out.push(buf.trim());
    return out;
  }
  function bulletsFromParas(arr) {
    return (Array.isArray(arr) ? arr : [arr]).filter(Boolean).map(function (para) {
      var ss = sentences(para);
      if (ss.length <= 2) return "<li>" + esc(ss.join(" ")) + "</li>";
      return "<li>" + esc(ss[0]) + '<ul class="sub">' + ss.slice(1).map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></li>";
    }).join("");
  }
  function firstSentence(b) {
    var src = (b.explain && b.explain[0]) || (b.items && b.items[0] && (b.items[0][1] || b.items[0][0])) || b.text || "";
    var s = sentences(Array.isArray(src) ? src[0] : src)[0] || "";
    return s.length > 180 ? s.slice(0, 177) + "…" : s;
  }

  /* review */
  function viewReview(id, c, p, hue) {
    var ui = Math.min(p.unit, c.units.length - 1), U = c.units[ui];
    var dots = c.units.map(function (u) { var v = p.conf[hash(u.title)]; return v === "solid" ? "#3dff5a" : v === "ok" ? "#ffc400" : v === "shaky" ? "#ff2d95" : ""; });
    var list = c.units.map(function (u, i) { return '<span class="lab">' + String(i + 1).padStart(2, "0") + "</span> " + esc(u.title); });
    var expandAll = !!p.expandAll;
    var ovArr = U.overview ? (Array.isArray(U.overview) ? U.overview : [U.overview]) : [];
    var ov = ovArr.length ? '<section class="overview" id="overview"><h3 class="sec-title" style="color:' + esc(hue) + '">Overview</h3>' +
      '<p class="lead">' + esc(ovArr[0]) + "</p>" + (ovArr.length > 1 ? '<ul class="bul">' + bulletsFromParas(ovArr.slice(1)) + "</ul>" : "") + "</section>" : "";
    var toc = '<nav class="toc" aria-label="Sections in this unit"><span class="lab">In this unit</span><ol>' +
      (ov ? '<li><a href="#" data-act="jump" data-target="overview">Overview</a></li>' : "") +
      U.blocks.map(function (b, bi) {
        var flag = b.check && b.check.status === "thin" ? ' <span class="tocflag" title="Needs more source">!</span>' : "";
        return '<li><a href="#" data-act="jump" data-target="b-' + bi + '">' + esc(b.title) + "</a>" + flag + "</li>";
      }).join("") + "</ol>" +
      '<button class="btn quiet lab push toc-toggle" data-act="expandAll">' + (expandAll ? "Collapse all" : "Expand all") + "</button></nav>";
    var blocks = U.blocks.map(function (b, bi) {
      var key = ui + ":" + bi;
      var open = expandAll || !!S.openBlocks[key];
      var how = b.explain && b.explain.length ? '<div class="sec"><h4 class="sec-h">How it works</h4><ul class="bul">' + bulletsFromParas(b.explain) + "</ul></div>" : "";
      var txt = b.text ? '<div class="sec"><ul class="bul">' + bulletsFromParas([b.text]) + "</ul></div>" : "";
      var rules = (b.items || []).map(function (it) {
        var ss = it[1] ? sentences(it[1]) : [];
        var subs = it[2] && it[2].length ? '<ul class="sub">' + it[2].map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" : "";
        var lis = ss.map(function (x, k) { return "<li>" + esc(x) + (k === ss.length - 1 ? subs : "") + "</li>"; }).join("");
        if (!ss.length && subs) lis = "<li>" + subs + "</li>";
        return '<div class="rule-item"><h5 class="rule-h">' + esc(it[0]) + "</h5>" + (lis ? '<ul class="bul">' + lis + "</ul>" : "") + "</div>";
      }).join("");
      var rulesSec = rules ? '<div class="sec"><h4 class="sec-h">' + (b.multi ? "The elements" : "The rules") + "</h4>" + rules + "</div>" : "";
      var tip = b.tip ? '<div class="tip"><span class="lab">Exam tip</span><span>' + esc(b.tip) + "</span></div>" : "";
      var thin = b.check && b.check.status === "thin" ? '<div class="thin"><span class="lab">Needs more source</span><span>' + esc(b.check.note || "") + "</span></div>" : "";
      return '<details class="cut block" id="b-' + bi + '" data-key="' + key + '"' + (open ? " open" : "") + ">" +
        '<summary><span class="sum-top"><span class="lab sum-n">' + String(bi + 1).padStart(2, "0") + '</span><span class="headline">' + esc(b.title) + "</span>" +
        (b.multi ? '<span class="lab tag">Multifactor</span>' : "") + (b.check && b.check.status === "thin" ? '<span class="lab tag" style="background:#ffc400">Thin</span>' : "") +
        '<span class="chev" aria-hidden="true"></span></span><span class="sum-line">' + esc(firstSentence(b)) + "</span></summary>" +
        '<div class="block-body">' + how + txt + rulesSec + tip + thin + "</div></details>";
    }).join("");
    var cur = p.conf[hash(U.title)] || "";
    var rate = '<div class="cut ratebox"><div style="display:flex;flex-direction:column;gap:4px"><span class="lab">Finished this unit?</span><span class="headline" style="font-size:20px">How solid is it?</span></div><div class="row">' +
      CONF.map(function (cf) { return '<button class="btn lab push conf' + (cur === cf[0] ? " picked" : "") + '" style="--c:' + cf[2] + '" data-act="conf" data-v="' + cf[0] + '">' + cf[1] + "</button>"; }).join("") +
      '</div><div class="row"><button class="btn ink lab push" data-act="quizUnit">Quiz this unit</button><button class="btn ink lab push" data-act="cardsUnit">Cards for this unit</button><button class="btn pink lab push" data-act="unitStep" data-d="1">Next unit</button></div></div>';
    return '<section style="display:flex;flex-direction:column;gap:24px">' + pills(list, ui, "unit", dots) +
      '<div class="unit-head"><div style="display:flex;flex-direction:column;gap:6px"><div class="lab" style="color:' + esc(hue) + '">Unit ' + (ui + 1) + " of " + c.units.length + "</div>" +
      '<h2 class="h2">' + esc(U.title) + '</h2></div><div class="row"><button class="btn lab push" data-act="unitStep" data-d="-1">Prev unit</button><button class="btn pink lab push" data-act="unitStep" data-d="1">Next unit</button></div></div>' +
      '<div class="review-layout">' + toc + '<div class="review-main">' + ov + '<div class="blocks">' + blocks + "</div>" + rate + "</div></div></section>";
  }

  /* maps */
  var LAYER = [["#ff2d95", "#161412"], ["#ffc400", "#161412"], ["#3dff5a", "#161412"], ["#f3ead8", "#161412"], ["#5b2ea6", "#f3ead8"]];
  function viewMaps(c, p, hue) {
    var mi = Math.min(p.map, c.maps.length - 1), M = c.maps[mi], inner = "";
    if (M.kind === "flow") {
      inner = '<ol class="flow">' + M.steps.map(function (st, i) {
        return '<li><div class="flowrow"><div class="cut step"><span class="step-n">' + (i + 1) + "</span><span>" + esc(st.q) + "</span></div>" +
          (st.out ? '<div class="out"><span class="lab">' + esc(st.out[0]) + "</span><span>" + esc(st.out[1]) + "</span></div>" : '<div class="hide-sm"></div>') +
          '</div><div class="conn">' + ARROW_DOWN + '<span class="lab">' + esc(st.go || "") + "</span></div></li>";
      }).join("") + "</ol>" + (M.end ? '<div class="result"><span class="lab">Result</span><span>' + esc(M.end) + "</span></div>" : "");
    } else if (M.kind === "stack") {
      var n = M.layers.length;
      inner = '<div class="stack">' + M.layers.map(function (l, i) {
        var col = LAYER[i % LAYER.length], w = Math.round(62 + 38 * (i / Math.max(1, n - 1)));
        return '<div class="layer" style="width:' + w + "%;background:" + col[0] + ";color:" + col[1] + '"><b>' + esc(l.label) + "</b><span>" + esc(l.text) + "</span></div>";
      }).join("") + "</div>";
    } else if (M.kind === "compare") {
      inner = '<div class="tablewrap"><table class="cmp"><thead><tr>' + M.cols.map(function (h) { return '<th scope="col" class="lab">' + esc(h) + "</th>"; }).join("") + "</tr></thead><tbody>" +
        M.rows.map(function (r) { return '<tr><th scope="row">' + esc(r[0]) + "</th>" + r.slice(1).map(function (x) { return "<td>" + esc(x) + "</td>"; }).join("") + "</tr>"; }).join("") +
        "</tbody></table></div>";
    }
    return '<section style="display:flex;flex-direction:column;gap:24px">' + pills(c.maps.map(function (m) { return esc(m.title); }), mi, "map") +
      '<div class="panel map"><div style="display:flex;flex-direction:column;gap:8px"><div class="lab" style="color:' + esc(hue) + '">' + esc(M.caption || "") + "</div>" +
      '<h2 class="h2">' + esc(M.title) + "</h2></div>" + inner + "</div></section>";
  }

  /* flashcards */
  function deckFor(c) {
    if (S.deck && S.deck.length) return S.deck;
    return range(c.cards.length).filter(function (i) { return S.cardUnit < 0 || cardUnit(c.cards[i]) === S.cardUnit; });
  }
  function viewCards(c, p) {
    var keys = c.cards.map(function (x) { return hash(x[0]); });
    var deck = deckFor(c);
    var againHere = p.again.filter(function (k) { return keys.indexOf(k) >= 0; });
    var head = '<div class="spread">' + unitSelect(c, S.cardUnit, "cardUnit") + '<span class="lab" style="color:#ff2d95">Again pile ' + againHere.length + "</span></div>";
    if (!deck.length) return '<section class="narrow">' + head + '<div class="cut qcard"><p>No cards tagged to this unit yet.</p></div></section>';
    if (S.card >= deck.length) S.card = 0;
    var C = c.cards[deck[S.card]];
    var uTag = cardUnit(C) >= 0 && c.units[cardUnit(C)] ? c.units[cardUnit(C)].title : c.title;
    var face = S.flip
      ? '<div class="face back"><span class="lab">' + esc(C[0]) + '</span><span class="a">' + esc(C[1]) + '</span><span class="lab">Tap or press Space to flip back</span></div>'
      : '<div class="face front"><span class="lab">Prompt · tap or press Space</span><span class="q">' + esc(C[0]) + '</span><span class="lab" style="color:#4d4133">' + esc(uTag) + "</span></div>";
    return '<section class="narrow">' + head +
      '<div class="spread"><span class="lab">Card ' + (S.card + 1) + " / " + deck.length + " · " + esc(S.deckMode) + "</span></div>" +
      '<button class="flash push" data-act="flip" aria-label="Flip card">' + face + "</button>" +
      '<div class="row"><button class="btn lab push" data-act="cardStep" data-d="-1">Prev</button>' +
      '<button class="btn pink lab push" data-act="again">Again</button>' +
      '<button class="btn acid lab push" data-act="gotit">Got it</button>' +
      '<button class="btn lab push" data-act="cardStep" data-d="1">Skip</button><span class="grow"></span>' +
      '<button class="btn gold-o lab push" data-act="cardShuffle">Shuffle</button>' +
      (againHere.length ? '<button class="btn pink-o lab push" data-act="againOnly">Only again pile</button>' : "") +
      (S.deck ? '<button class="btn lab push" data-act="fullDeck">Back to deck</button>' : "") + "</div></section>";
  }

  /* quiz */
  function startQuiz(c, p, mode) {
    var keys = c.quiz.map(function (q) { return hash(q.q); });
    var idx = range(c.quiz.length);
    if (S.quizUnit >= 0) idx = idx.filter(function (i) { return c.quiz[i].unit === S.quizUnit; });
    if (mode === "missed") idx = idx.filter(function (i) { return p.missed.indexOf(keys[i]) >= 0; });
    if (mode === "shuffle" || mode === "missed") idx = shuffle(idx);
    S.quiz = { mode: mode, set: idx, i: 0, pick: -1, score: 0, wrong: [], done: false, order: idx.length ? shuffle(range(c.quiz[idx[0]].o.length)) : [] };
  }
  function viewQuiz(id, c, p) {
    var keys = c.quiz.map(function (q) { return hash(q.q); });
    var inScope = function (i) { return S.quizUnit < 0 || c.quiz[i].unit === S.quizUnit; };
    var missedHere = range(c.quiz.length).filter(function (i) { return inScope(i) && p.missed.indexOf(keys[i]) >= 0; }).length;
    if (!S.quiz) startQuiz(c, p, "all");
    var Z = S.quiz;
    var modes = '<div class="spread">' + unitSelect(c, S.quizUnit, "quizUnit") + '<span class="lab muted">' + (p.quizBest != null ? "Best full quiz " + p.quizBest + "%" : "") + "</span></div>" +
      '<div class="row"><button class="btn pill push' + (Z.mode === "all" ? " on" : " quiet") + '" data-act="quizMode" data-m="all">In order</button>' +
      '<button class="btn pill push' + (Z.mode === "shuffle" ? " on" : " quiet") + '" data-act="quizMode" data-m="shuffle">Shuffled</button>' +
      (missedHere ? '<button class="btn pill push' + (Z.mode === "missed" ? " on" : " quiet") + '" data-act="quizMode" data-m="missed">Missed (' + missedHere + ")</button>" : "") + "</div>";
    if (!Z.set.length) return '<section class="narrow">' + modes + '<div class="cut qcard"><p>' + (Z.mode === "missed" ? "Nothing missed here." : "No questions tagged to this unit yet.") + "</p></div></section>";
    if (Z.done) {
      return '<section class="narrow">' + modes + '<div class="cut" style="padding:40px;display:flex;flex-direction:column;gap:16px"><span class="lab">Final score</span>' +
        '<span class="score-big">' + Z.score + "<small> / " + Z.set.length + "</small></span>" +
        '<span style="font-size:20px;font-weight:600">' + Z.wrong.length + " missed this round. They’re saved under Missed.</span>" +
        '<div class="row">' + (missedHere ? '<button class="btn pink lab push" data-act="quizMode" data-m="missed">Retry missed</button>' : "") +
        '<button class="btn ink lab push" data-act="quizMode" data-m="shuffle">Shuffle and restart</button></div></div></section>';
    }
    var Q = c.quiz[Z.set[Z.i]], answered = Z.pick >= 0, right = answered && Z.pick === Q.a;
    var opts = Z.order.map(function (oi, pos) {
      var cls = "opt push", tag = "";
      if (answered) {
        if (oi === Q.a) { cls += " right"; tag = "Answer"; }
        else if (oi === Z.pick) { cls += " wrong"; tag = "Your pick"; }
        else cls += " dim";
      }
      return '<button class="' + cls + '" data-act="pick" data-o="' + oi + '"><span class="letter">' + LET[pos] + '</span><span class="grow">' + esc(Q.o[oi]) + "</span>" + (tag ? '<span class="lab">' + tag + "</span>" : "") + "</button>";
    }).join("");
    var pct = Math.round(((Z.i + (answered ? 1 : 0)) / Z.set.length) * 100);
    var last = Z.i + 1 >= Z.set.length;
    var feedback = "";
    if (answered) {
      var L = function (oi) { return LET[Z.order.indexOf(oi)]; };
      var why = Q.why || [];
      var mine = !right && why[Z.pick] ? '<div class="fb-sec"><span class="lab" style="color:#ff2d95">Why ' + L(Z.pick) + " is wrong</span><p>" + esc(why[Z.pick]) + "</p></div>" : "";
      var correct = '<div class="fb-sec"><span class="lab" style="color:#3dff5a">Why ' + L(Q.a) + " is right</span><p>" + esc(Q.e || why[Q.a] || "") + "</p></div>";
      var rest = Z.order.filter(function (oi) { return oi !== Q.a && oi !== Z.pick && why[oi]; }).map(function (oi) {
        return "<li><b>" + L(oi) + ".</b> " + esc(why[oi]) + "</li>";
      }).join("");
      var others = rest ? '<div class="fb-sec"><span class="lab" style="color:#ffc400">The other choices</span><ul>' + rest + "</ul></div>" : "";
      feedback = '<div class="feedback' + (right ? "" : " no") + '"><span class="lab verdict">' + (right ? "Correct" : "Not quite · answer " + L(Q.a)) + "</span>" + mine + correct + others +
        '<div><button class="btn pink lab push" data-act="next">' + (last ? "See results" : "Next question") + "</button></div></div>";
    }
    var uTag = typeof Q.unit === "number" && c.units[Q.unit] ? '<span class="lab muted">' + esc(c.units[Q.unit].title) + "</span>" : "";
    return '<section class="narrow">' + modes +
      '<div class="spread"><span class="lab">Question ' + (Z.i + 1) + " / " + Z.set.length + "</span>" + uTag + '<span class="lab" style="color:#3dff5a">Score ' + Z.score + "</span></div>" +
      '<div class="bar"><div style="width:' + pct + '%"></div></div>' +
      '<div class="cut qcard"><p>' + esc(Q.q) + "</p></div>" +
      '<div style="display:flex;flex-direction:column;gap:10px">' + opts + "</div>" + feedback + "</section>";
  }

  /* drills + hypos */
  function viewDrills(id, c, p, hue) {
    var dk = Math.min(p.drill, c.drills.length - 1), DR = c.drills[dk];
    if (!S.dr || S.dr.k !== dk) S.dr = { k: dk, i: 0, pick: "", score: 0, done: false, order: shuffle(range(DR.items.length)) };
    var Z = S.dr, inner;
    var best = p.drillBest[hash(DR.title)];
    if (Z.done) {
      inner = '<div class="cut spread" style="padding:32px"><span class="score-big" style="font-size:96px">' + Z.score + "<small> / " + DR.items.length + "</small></span>" +
        '<button class="btn ink lab push" data-act="drillRestart">Run it again</button></div>';
    } else {
      var IT = DR.items[Z.order[Z.i]], ans = !!Z.pick, ok = ans && Z.pick === IT[1];
      var cats = DR.cats.map(function (cat, ci) {
        var cls = "cat lab push";
        if (ans) cls += cat === IT[1] ? " right" : cat === Z.pick ? " wrong" : " dim";
        return '<button class="' + cls + '" data-act="dpick" data-c="' + ci + '">' + esc(cat) + "</button>";
      }).join("");
      inner = '<div class="spread"><span class="lab">' + esc(DR.prompt) + " · " + (Z.i + 1) + " / " + DR.items.length + '</span><span class="lab" style="color:#3dff5a">Score ' + Z.score + (best != null ? " · best " + best + "/" + DR.items.length : "") + "</span></div>" +
        '<div class="cut prompt-card">' + esc(IT[0]) + "</div>" +
        '<div class="row" style="gap:10px">' + cats + "</div>" +
        (ans ? '<div class="feedback' + (ok ? "" : " no") + '" style="flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px"><div style="display:flex;flex-direction:column;gap:6px;flex:1 1 360px"><span class="lab verdict">' +
          (ok ? "Correct · " : "No · it’s ") + esc(IT[1]) + "</span><span>" + esc(IT[2] || "") + "</span></div>" +
          '<button class="btn pink lab push" data-act="dnext">' + (Z.i + 1 >= DR.items.length ? "Finish" : "Next") + "</button></div>" : "");
    }
    var hypos = c.hypos.map(function (h, i) {
      var open = !!S.open[i];
      return '<article class="cut hypo"><h3 class="headline">' + esc(h.title) + "</h3><p>" + esc(h.facts) + '</p><p style="font-weight:700">' + esc(h.ask) + "</p>" +
        '<label class="lab" for="hy' + i + '">Your answer (not saved)</label><textarea id="hy' + i + '" rows="4" placeholder="Write your issues and analysis before revealing"></textarea>' +
        '<div><button class="btn ink lab push" data-act="hypo" data-i="' + i + '">' + (open ? "Hide model answer" : "Show model answer") + "</button></div>" +
        (open ? "<ol>" + h.answer.map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("") + "</ol>" : "") + "</article>";
    }).join("");
    return '<section style="display:flex;flex-direction:column;gap:24px">' + pills(c.drills.map(function (d) { return esc(d.title); }), dk, "drill") +
      '<div class="narrow">' + inner + "</div>" +
      '<div style="display:flex;flex-direction:column;gap:8px;border-top:3px solid #f3ead8;padding-top:24px"><div class="lab" style="color:' + esc(hue) + '">Practice hypos · answer before revealing</div><h2 class="h2">Issue spotters</h2></div>' +
      '<div class="g2">' + hypos + "</div></section>";
  }

  /* ---------- actions ---------- */
  function act(name, el) {
    var r = route(), id = r.course, c = id ? COURSES[id] : null, p = id ? P(id) : null;
    var n = function (a) { return parseInt(el.getAttribute(a), 10); };
    switch (name) {
      case "reset":
        if (window.confirm("Reset all saved progress on this browser?")) { store = {}; save(); }
        break;
      case "goResult": {
        var res = S.results && S.results[n("data-i")];
        if (res && typeof res.unit === "number") { P(res.id).unit = res.unit; save(); }
        location.hash = el.getAttribute("href");
        return;
      }
      case "unit": p.unit = n("data-i"); pendingScroll = ".unit-head"; break;
      case "unitStep": p.unit = (p.unit + n("data-d") + c.units.length) % c.units.length; pendingScroll = ".unit-head"; break;
      case "conf": {
        var k = hash(c.units[p.unit].title), v = el.getAttribute("data-v");
        p.conf[k] = p.conf[k] === v ? undefined : v;
        break;
      }
      case "quizUnit": S.quizUnit = p.unit; S.quiz = null; save(); location.hash = "#/" + id + "/quiz"; return;
      case "cardsUnit": S.cardUnit = p.unit; S.deck = null; S.deckMode = "Full deck"; S.card = 0; S.flip = false; save(); location.hash = "#/" + id + "/cards"; return;
      case "map": p.map = n("data-i"); break;
      case "expandAll": p.expandAll = !p.expandAll; S.openBlocks = {}; break;
      case "jump": {
        var tgt = el.getAttribute("data-target");
        var m = /^b-(\d+)$/.exec(tgt);
        if (m) S.openBlocks[p.unit + ":" + m[1]] = true;
        pendingScroll = "#" + tgt;
        break;
      }
      case "flip": S.flip = !S.flip; break;
      case "cardStep": cardMove(c, n("data-d")); break;
      case "gotit": case "again": {
        var deck = deckFor(c);
        var kk = hash(c.cards[deck[S.card]][0]);
        p.again = p.again.filter(function (x) { return x !== kk; });
        if (name === "again") p.again.push(kk);
        cardMove(c, 1);
        break;
      }
      case "cardShuffle": S.deck = shuffle(deckFor(c)); S.deckMode = "Shuffled"; S.card = 0; S.flip = false; break;
      case "againOnly": {
        var keys = c.cards.map(function (x) { return hash(x[0]); });
        S.deck = range(c.cards.length).filter(function (i) { return p.again.indexOf(keys[i]) >= 0; });
        S.deckMode = "Again pile"; S.card = 0; S.flip = false; break;
      }
      case "fullDeck": S.deck = null; S.deckMode = "Full deck"; S.card = 0; S.flip = false; break;
      case "quizMode": startQuiz(c, p, el.getAttribute("data-m")); break;
      case "pick": pick(c, p, n("data-o")); break;
      case "next": nextQ(c, p); break;
      case "drill": p.drill = n("data-i"); S.dr = null; break;
      case "dpick": {
        var DR = c.drills[S.dr.k], IT = DR.items[S.dr.order[S.dr.i]];
        if (S.dr.pick) break;
        S.dr.pick = DR.cats[n("data-c")];
        if (S.dr.pick === IT[1]) S.dr.score++;
        break;
      }
      case "dnext": {
        var D2 = c.drills[S.dr.k];
        if (S.dr.i + 1 >= D2.items.length) {
          S.dr.done = true;
          var hk = hash(D2.title);
          p.drillBest[hk] = Math.max(p.drillBest[hk] || 0, S.dr.score);
        } else { S.dr.i++; S.dr.pick = ""; }
        break;
      }
      case "drillRestart": S.dr = null; break;
      case "hypo": S.open[n("data-i")] = !S.open[n("data-i")]; break;
    }
    save();
    var y = window.scrollY;
    render();
    window.scrollTo(0, y);
    if (pendingScroll) { scrollToEl(pendingScroll); pendingScroll = null; }
  }
  var pendingScroll = null;
  function scrollToEl(sel) {
    var el = document.querySelector(sel);
    if (!el) return;
    var top = el.getBoundingClientRect().top + window.scrollY - 16;
    window.scrollTo(0, Math.max(0, top));
  }
  function cardMove(c, d) {
    var len = deckFor(c).length || 1;
    S.card = (S.card + d + len) % len; S.flip = false;
  }
  function pick(c, p, oi) {
    var Z = S.quiz;
    if (!Z || Z.done || Z.pick >= 0) return;
    var Q = c.quiz[Z.set[Z.i]], k = hash(Q.q);
    Z.pick = oi;
    if (oi === Q.a) { Z.score++; p.missed = p.missed.filter(function (x) { return x !== k; }); }
    else { Z.wrong.push(k); if (p.missed.indexOf(k) < 0) p.missed.push(k); }
  }
  function nextQ(c, p) {
    var Z = S.quiz;
    if (!Z || Z.pick < 0) return;
    if (Z.i + 1 >= Z.set.length) {
      Z.done = true;
      if (Z.mode !== "missed" && S.quizUnit < 0 && Z.set.length === c.quiz.length) {
        var pct = Math.round((Z.score / Z.set.length) * 100);
        p.quizBest = Math.max(p.quizBest || 0, pct);
        p.quizLast = pct;
      }
    } else {
      Z.i++; Z.pick = -1;
      Z.order = shuffle(range(c.quiz[Z.set[Z.i]].o.length));
      var qc = document.querySelector(".qcard");
      if (qc && qc.getBoundingClientRect().top < 0) pendingScroll = ".qcard";
    }
  }

  app.addEventListener("click", function (e) {
    var el = e.target.closest("[data-act]");
    if (el) { e.preventDefault(); act(el.getAttribute("data-act"), el); }
  });
  app.addEventListener("change", function (e) {
    var el = e.target.closest("[data-change]");
    if (!el) return;
    var v = parseInt(el.value, 10), what = el.getAttribute("data-change");
    var r = route(), c = COURSES[r.course], p = P(r.course);
    if (what === "quizUnit") { S.quizUnit = v; startQuiz(c, p, "all"); }
    if (what === "cardUnit") { S.cardUnit = v; S.deck = null; S.deckMode = "Full deck"; S.card = 0; S.flip = false; }
    var y5 = window.scrollY; render(); window.scrollTo(0, y5);
  });
  app.addEventListener("toggle", function (e) {
    var d = e.target;
    if (!d.matches || !d.matches("details.block")) return;
    S.openBlocks[d.getAttribute("data-key")] = d.open;
  }, true);
  var searchTimer = null;
  app.addEventListener("input", function (e) {
    if (e.target.id !== "q") return;
    clearTimeout(searchTimer);
    var val = e.target.value;
    searchTimer = setTimeout(function () { location.hash = "#/search/" + encodeURIComponent(val); }, 250);
  });
  app.addEventListener("submit", function (e) {
    var f = e.target.closest("[data-form=search]");
    if (!f) return;
    e.preventDefault();
    location.hash = "#/search/" + encodeURIComponent(f.q.value);
  });
  document.addEventListener("keydown", function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var typing = /INPUT|TEXTAREA|SELECT/.test((document.activeElement || {}).tagName || "");
    if (typing) return;
    if (e.key === "/") { e.preventDefault(); location.hash = "#/search/"; return; }
    var r = route();
    if (!r.course) return;
    var c = COURSES[r.course], p = P(r.course);
    if (r.tab === "cards") {
      var y4 = window.scrollY;
      if (e.key === " ") { e.preventDefault(); S.flip = !S.flip; render(); }
      else if (e.key === "ArrowRight") { cardMove(c, 1); render(); }
      else if (e.key === "ArrowLeft") { cardMove(c, -1); render(); }
      window.scrollTo(0, y4);
    } else if (r.tab === "quiz" && S.quiz && !S.quiz.done) {
      var num = parseInt(e.key, 10);
      if (num >= 1 && num <= S.quiz.order.length) { pick(c, p, S.quiz.order[num - 1]); save(); var y3 = window.scrollY; render(); window.scrollTo(0, y3); }
      else if (e.key === "Enter" && S.quiz.pick >= 0) { e.preventDefault(); nextQ(c, p); save(); var y2 = window.scrollY; render(); window.scrollTo(0, y2); if (pendingScroll) { scrollToEl(pendingScroll); pendingScroll = null; } }
    }
  });

  /* ---------- render ---------- */
  function render() {
    var r = route();
    if (r.search !== undefined) return renderSearch(r.search);
    if (!r.course) renderHub(); else renderCourse(r.course, TABS.some(function (t) { return t[0] === r.tab; }) ? r.tab : "review");
  }
  var last = null;
  window.addEventListener("hashchange", function () {
    var r = route();
    var key = r.search !== undefined ? "search" : (r.course || "") + "/" + r.tab;
    var sameCourse = last && r.course && last.split("/")[0] === r.course;
    var y = window.scrollY;
    last = key;
    render();
    if (key === "search") return;
    if (sameCourse) { window.scrollTo(0, y); var tb = document.querySelector(".tabs"); if (tb && tb.getBoundingClientRect().top < 0) scrollToEl(".tabs"); }
    else window.scrollTo(0, 0);
  });
  last = (function () { var r = route(); return r.search !== undefined ? "search" : (r.course || "") + "/" + r.tab; })();
  render();
})();
