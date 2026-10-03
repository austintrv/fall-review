/* Review site app. Content lives in data/*.js; this file only renders it. */
(function () {
  "use strict";

  var SITE = window.SITE || { exams: [], order: [] };
  var COURSES = window.COURSES || {};
  var ORDER = (SITE.order || Object.keys(COURSES)).filter(function (id) { return COURSES[id]; });
  var KEY = "review-site-v1";
  var TABS = [["review", "Review"], ["maps", "Maps"], ["cards", "Flashcards"], ["quiz", "Quiz"], ["drills", "Drills & Hypos"]];
  var LET = "ABCDEFGH";
  var app = document.getElementById("app");

  /* ---------- saved progress (this browser only) ---------- */
  var store = load();
  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) { /* storage blocked */ }
  }
  function P(id) {
    if (!store[id]) store[id] = {};
    var p = store[id];
    p.again = p.again || [];
    p.missed = p.missed || [];
    p.drillBest = p.drillBest || {};
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
  var S = { deck: null, deckMode: "In order", card: 0, flip: false, quiz: null, dr: null, open: {} };
  var lastCourse = null;

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function range(n) { var a = []; for (var i = 0; i < n; i++) a.push(i); return a; }
  function daysUntil(iso) {
    if (!iso) return null;
    var d = Math.ceil((new Date(iso + "T09:00:00").getTime() - Date.now()) / 86400000);
    return d;
  }
  function route() {
    var parts = (location.hash || "#/").replace(/^#\/?/, "").split("/").filter(Boolean);
    return { course: parts[0] && COURSES[parts[0]] ? parts[0] : null, tab: parts[1] || "review" };
  }
  function go(hash) { location.hash = hash; }
  var ARROW_DOWN = '<svg width="16" height="28" viewBox="0 0 16 28" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square" aria-hidden="true"><path d="M8 0 L8 24"/><path d="M2 18 L8 25 L14 18"/></svg>';
  var ARROW_LEFT = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square" aria-hidden="true"><path d="M10 3 L5 8 L10 13"/></svg>';

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
      var stats = [
        c.units.length + " units", c.cards.length + " cards", c.quiz.length + " quiz Qs",
        p.quizBest != null ? "Best quiz " + p.quizBest + "%" : "No quiz yet",
        p.missed.length ? p.missed.length + " missed to retry" : null,
        p.again.length ? p.again.length + (p.again.length === 1 ? " card" : " cards") + " in again pile" : null
      ].filter(Boolean).map(function (s) { return '<span class="lab stat">' + esc(s) + "</span>"; }).join("");
      return '<a class="cut course-card push" href="#/' + id + '/review">' + num +
        '<span class="headline" style="font-size:26px;line-height:1.05">' + esc(c.t1 + " " + c.t2) + "</span>" +
        '<span class="lab" style="color:#4d4133">' + esc(c.exam.label + " · " + c.exam.when) + "</span>" +
        '<span style="font-size:16px;line-height:23px">' + esc(c.sub) + "</span>" +
        '<span class="stats">' + stats + "</span></a>";
    }).join("");
    app.innerHTML =
      '<div class="wrap" style="gap:48px">' +
      '<header style="display:flex;flex-direction:column;gap:20px">' +
      '<div class="lab muted">' + esc(SITE.kicker || "") + "</div>" +
      '<h1 class="mega">' + esc(SITE.title1 || "Review") + '<br><span style="color:#ff2d95">' + esc(SITE.title2 || "") + "</span></h1>" +
      '<p class="subhead">' + esc(SITE.sub || "") + "</p>" +
      '<div class="row" style="gap:12px">' + exams + "</div></header>" +
      '<section style="display:flex;flex-direction:column;gap:20px"><h2 class="h2">Pick a class</h2><div class="g3">' + cards + "</div></section>" +
      '<section style="display:flex;flex-direction:column;gap:16px"><h2 class="h2">The loop</h2><div class="g4">' +
      loopCard("01", "#ff2d95", "Review", "One unit at a time. Pink tags mark multifactor rules.") +
      loopCard("02", "#b3381a", "Map it", "Walk the flowchart for that topic without looking at the review.") +
      loopCard("03", "#5b2ea6", "Test", "Flashcards, then the quiz. Missed questions are saved for next time.") +
      loopCard("04", "#285f94", "Apply", "Sorting drills and hypos. Write your answer before revealing.") +
      "</div>" +
      '<p class="muted" style="margin:0;font-size:15px">Keys: <span class="kbd">Space</span> flip card · <span class="kbd">←</span> <span class="kbd">→</span> prev/next · <span class="kbd">1</span>–<span class="kbd">4</span> answer · <span class="kbd">Enter</span> next question</p></section>' +
      '<footer class="lab spread"><span>Progress saves in this browser only</span><button class="linkbtn lab" data-act="reset">Reset all progress</button></footer>' +
      "</div>";
  }
  function loopCard(n, color, title, text) {
    return '<div class="cut loop"><span class="n" style="color:' + color + '">' + n + "</span><b>" + title + "</b><span>" + text + "</span></div>";
  }

  /* ---------- course page ---------- */
  function renderCourse(id, tab) {
    var c = COURSES[id], p = P(id);
    if (lastCourse !== id) { S = { deck: null, deckMode: "In order", card: 0, flip: false, quiz: null, dr: null, open: {} }; lastCourse = id; }
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
    var body = tab === "maps" ? viewMaps(c, p, hue) : tab === "cards" ? viewCards(c, p) : tab === "quiz" ? viewQuiz(id, c, p) : tab === "drills" ? viewDrills(id, c, p, hue) : viewReview(c, p, hue);
    app.innerHTML =
      '<div class="wrap">' +
      '<nav class="top" aria-label="Classes"><a class="btn solid lab push" href="#/">' + ARROW_LEFT + "Review hub</a><div class=\"row\">" + others + "</div></nav>" +
      '<header class="hero"><div class="hero-text"><div class="lab muted">' + esc(c.kicker) + "</div>" +
      '<h1 class="poster' + (Math.max(c.t1.length, c.t2.length) > 10 ? " long" : "") + '">' + esc(c.t1) + '<br><span style="color:' + esc(hue) + '">' + esc(c.t2) + "</span></h1>" +
      '<p class="subhead">' + esc(c.sub) + "</p></div>" + sticker + "</header>" +
      '<nav class="tabs" aria-label="Study modes">' + tabs + "</nav>" +
      body +
      '<footer class="lab">Built from the ' + esc(c.title) + " outline and class slides · " + esc(c.cover) + "</footer></div>";
  }

  function pills(list, active, act) {
    return '<div class="row">' + list.map(function (label, i) {
      return '<button class="btn pill push' + (i === active ? " on" : " quiet") + '" data-act="' + act + '" data-i="' + i + '">' + label + "</button>";
    }).join("") + "</div>";
  }

  /* review */
  function viewReview(c, p, hue) {
    var ui = Math.min(p.unit, c.units.length - 1), U = c.units[ui];
    var list = c.units.map(function (u, i) { return '<span class="lab">' + String(i + 1).padStart(2, "0") + "</span> " + esc(u.title); });
    var blocks = U.blocks.map(function (b) {
      var items = (b.items || []).map(function (it) {
        var sub = it[2] && it[2].length ? "<ul>" + it[2].map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" : "";
        return '<li><span class="rule">' + esc(it[0]) + "</span>" + (it[1] ? " – " + esc(it[1]) : "") + sub + "</li>";
      }).join("");
      return '<article class="cut block"><div class="spread" style="align-items:flex-start"><h3 class="headline">' + esc(b.title) + "</h3>" +
        (b.multi ? '<span class="lab tag">Multifactor</span>' : "") + "</div>" +
        (b.text ? "<p>" + esc(b.text) + "</p>" : "") +
        (items ? "<ul>" + items + "</ul>" : "") +
        (b.tip ? '<div class="tip"><span class="lab">Exam tip</span><span>' + esc(b.tip) + "</span></div>" : "") +
        "</article>";
    }).join("");
    return '<section style="display:flex;flex-direction:column;gap:24px">' + pills(list, ui, "unit") +
      '<div class="unit-head"><div style="display:flex;flex-direction:column;gap:6px"><div class="lab" style="color:' + esc(hue) + '">Unit ' + (ui + 1) + " of " + c.units.length + "</div>" +
      '<h2 class="h2">' + esc(U.title) + '</h2></div><div class="row"><button class="btn lab push" data-act="unitStep" data-d="-1">Prev unit</button><button class="btn pink lab push" data-act="unitStep" data-d="1">Next unit</button></div></div>' +
      '<div class="g2">' + blocks + "</div></section>";
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
  function viewCards(c, p) {
    var keys = c.cards.map(function (x) { return hash(x[0]); });
    var deck = S.deck && S.deck.length ? S.deck : range(c.cards.length);
    if (S.card >= deck.length) S.card = 0;
    var C = c.cards[deck[S.card]];
    var againHere = p.again.filter(function (k) { return keys.indexOf(k) >= 0; });
    var face = S.flip
      ? '<div class="face back"><span class="lab">' + esc(C[0]) + '</span><span class="a">' + esc(C[1]) + '</span><span class="lab">Tap or press Space to flip back</span></div>'
      : '<div class="face front"><span class="lab">Prompt · tap or press Space</span><span class="q">' + esc(C[0]) + '</span><span class="lab" style="color:#4d4133">' + esc(c.title) + "</span></div>";
    return '<section class="narrow">' +
      '<div class="spread"><span class="lab">Card ' + (S.card + 1) + " / " + deck.length + " · " + esc(S.deckMode) + '</span><span class="lab" style="color:#ff2d95">Again pile ' + againHere.length + "</span></div>" +
      '<button class="flash push" data-act="flip" aria-label="Flip card">' + face + "</button>" +
      '<div class="row"><button class="btn lab push" data-act="cardStep" data-d="-1">Prev</button>' +
      '<button class="btn pink lab push" data-act="again">Again</button>' +
      '<button class="btn acid lab push" data-act="gotit">Got it</button>' +
      '<button class="btn lab push" data-act="cardStep" data-d="1">Skip</button><span class="grow"></span>' +
      '<button class="btn gold-o lab push" data-act="cardShuffle">Shuffle</button>' +
      (againHere.length ? '<button class="btn pink-o lab push" data-act="againOnly">Only again pile</button>' : "") +
      (S.deck ? '<button class="btn lab push" data-act="fullDeck">Full deck</button>' : "") + "</div></section>";
  }

  /* quiz */
  function startQuiz(c, p, mode) {
    var keys = c.quiz.map(function (q) { return hash(q.q); });
    var idx = range(c.quiz.length);
    if (mode === "missed") idx = idx.filter(function (i) { return p.missed.indexOf(keys[i]) >= 0; });
    if (mode === "shuffle" || mode === "missed") idx = shuffle(idx);
    S.quiz = { mode: mode, set: idx, i: 0, pick: -1, score: 0, wrong: [], done: false, order: shuffle(range(c.quiz[idx[0]] ? c.quiz[idx[0]].o.length : 4)) };
  }
  function viewQuiz(id, c, p) {
    var keys = c.quiz.map(function (q) { return hash(q.q); });
    var missedHere = p.missed.filter(function (k) { return keys.indexOf(k) >= 0; }).length;
    if (!S.quiz) startQuiz(c, p, "all");
    var Z = S.quiz;
    var modes = '<div class="row"><button class="btn pill push' + (Z.mode === "all" ? " on" : " quiet") + '" data-act="quizMode" data-m="all">All questions</button>' +
      '<button class="btn pill push' + (Z.mode === "shuffle" ? " on" : " quiet") + '" data-act="quizMode" data-m="shuffle">Shuffled</button>' +
      (missedHere ? '<button class="btn pill push' + (Z.mode === "missed" ? " on" : " quiet") + '" data-act="quizMode" data-m="missed">Missed (' + missedHere + ")</button>" : "") +
      '<span class="grow"></span><span class="lab muted">' + (p.quizBest != null ? "Best full quiz " + p.quizBest + "%" : "") + "</span></div>";
    if (!Z.set.length) return '<section class="narrow">' + modes + '<div class="cut qcard"><p>Nothing missed. Run the full quiz.</p></div></section>';
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
    var answerLetter = LET[Z.order.indexOf(Q.a)];
    return '<section class="narrow">' + modes +
      '<div class="spread"><span class="lab">Question ' + (Z.i + 1) + " / " + Z.set.length + '</span><span class="lab" style="color:#3dff5a">Score ' + Z.score + "</span></div>" +
      '<div class="bar"><div style="width:' + pct + '%"></div></div>' +
      '<div class="cut qcard"><p>' + esc(Q.q) + "</p></div>" +
      '<div style="display:flex;flex-direction:column;gap:10px">' + opts + "</div>" +
      (answered ? '<div class="feedback' + (right ? "" : " no") + '"><span class="lab verdict">' + (right ? "Correct" : "Not quite · answer " + answerLetter) + "</span><span>" + esc(Q.e) + "</span>" +
        '<div><button class="btn pink lab push" data-act="next">' + (last ? "See results" : "Next question") + "</button></div></div>" : "") +
      "</section>";
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
      case "unit": p.unit = n("data-i"); scrollTo(0, 0); break;
      case "unitStep": p.unit = (p.unit + n("data-d") + c.units.length) % c.units.length; scrollTo(0, 0); break;
      case "map": p.map = n("data-i"); break;
      case "flip": S.flip = !S.flip; break;
      case "cardStep": cardMove(c, n("data-d")); break;
      case "gotit": case "again": {
        var deck = S.deck && S.deck.length ? S.deck : range(c.cards.length);
        var k = hash(c.cards[deck[S.card]][0]);
        p.again = p.again.filter(function (x) { return x !== k; });
        if (name === "again") p.again.push(k);
        cardMove(c, 1);
        break;
      }
      case "cardShuffle": S.deck = shuffle(range(c.cards.length)); S.deckMode = "Shuffled"; S.card = 0; S.flip = false; break;
      case "againOnly": {
        var keys = c.cards.map(function (x) { return hash(x[0]); });
        S.deck = range(c.cards.length).filter(function (i) { return p.again.indexOf(keys[i]) >= 0; });
        S.deckMode = "Again pile"; S.card = 0; S.flip = false; break;
      }
      case "fullDeck": S.deck = null; S.deckMode = "In order"; S.card = 0; S.flip = false; break;
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
    render();
  }
  function cardMove(c, d) {
    var len = S.deck && S.deck.length ? S.deck.length : c.cards.length;
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
      if (Z.mode !== "missed" && Z.set.length === c.quiz.length) {
        var pct = Math.round((Z.score / Z.set.length) * 100);
        p.quizBest = Math.max(p.quizBest || 0, pct);
        p.quizLast = pct;
      }
    } else {
      Z.i++; Z.pick = -1;
      Z.order = shuffle(range(c.quiz[Z.set[Z.i]].o.length));
    }
  }

  app.addEventListener("click", function (e) {
    var el = e.target.closest("[data-act]");
    if (el) { e.preventDefault(); act(el.getAttribute("data-act"), el); }
  });
  document.addEventListener("keydown", function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var r = route();
    if (!r.course) return;
    var c = COURSES[r.course], p = P(r.course);
    if (r.tab === "cards") {
      if (e.key === " ") { e.preventDefault(); S.flip = !S.flip; render(); }
      else if (e.key === "ArrowRight") { cardMove(c, 1); render(); }
      else if (e.key === "ArrowLeft") { cardMove(c, -1); render(); }
    } else if (r.tab === "quiz" && S.quiz && !S.quiz.done) {
      var num = parseInt(e.key, 10);
      if (num >= 1 && num <= S.quiz.order.length) { pick(c, p, S.quiz.order[num - 1]); save(); render(); }
      else if (e.key === "Enter" && S.quiz.pick >= 0) { e.preventDefault(); nextQ(c, p); save(); render(); }
    }
  });

  /* ---------- render ---------- */
  function render() {
    var r = route();
    if (!r.course) renderHub(); else renderCourse(r.course, TABS.some(function (t) { return t[0] === r.tab; }) ? r.tab : "review");
  }
  var lastHash = null;
  window.addEventListener("hashchange", function () {
    var r = route();
    if (r.course !== (lastHash && lastHash.course) || r.tab !== (lastHash && lastHash.tab)) scrollTo(0, 0);
    lastHash = r;
    render();
  });
  lastHash = route();
  render();
})();
