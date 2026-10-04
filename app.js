/* Review site app. Content lives in the class .js files; this file only renders it. */
(function () {
  "use strict";

  var SITE = window.SITE || { exams: [], order: [] };
  var COURSES = window.COURSES || {};
  var ORDER = (SITE.order || Object.keys(COURSES)).filter(function (id) { return COURSES[id]; });
  var KEY = "review-site-v1";
  var TABS = [["review", "Review"], ["maps", "Maps"], ["cards", "Flashcards"], ["quiz", "Quiz"], ["drills", "Drills & Hypos"]];
  var STUDY_TABS = [["today", "Today"], ["cards", "Flashcards"], ["quiz", "Quiz"]];
  var LET = "ABCDEFGH";
  var CONF = [["shaky", "Shaky", "#ff2d95"], ["ok", "Getting there", "#ffc400"], ["solid", "Solid", "#3dff5a"]];
  var DAY = 86400000;
  var INTERVALS = [0, 1, 2, 4, 8, 16, 32]; // days until the next review, by box
  var NEW_CAP = 15; // unseen items added to a "due" set
  var SIZES = [1, 1.1, 1.2, 1.35];
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
    p.done = p.done || {};
    p.notes = p.notes || {};
    p.hl = p.hl || {};
    p.hypo = p.hypo || {};
    p.srs = p.srs || {};
    p.unit = p.unit || 0;
    p.map = p.map || 0;
    p.drill = p.drill || 0;
    return p;
  }
  function UI() { if (!store._ui) store._ui = { size: 0, plain: false }; return store._ui; }
  function applyUI() {
    var u = UI();
    document.documentElement.style.setProperty("--zoom", String(SIZES[u.size] || 1));
    document.body.classList.toggle("plain", !!u.plain);
  }
  // stable key from text, so editing other content never scrambles progress
  function hash(s) {
    var h = 5381;
    for (var i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
    return "k" + (h >>> 0).toString(36);
  }

  /* ---------- session state (resets on reload) ---------- */
  function freshS() { return { deck: null, deckMode: "Full deck", cardUnit: -1, card: 0, flip: false, quiz: null, quizUnit: -1, examN: 20, examMin: 1.5, dr: null, open: {}, openBlocks: {} }; }
  var S = freshS();   // the class page you are on
  var SS = freshS();  // the cross-class daily review
  var lastCourse = null, pendingOpen = null, lastSel = null, pendingScroll = null;

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
    if (parts[0] === "study") return { study: true, tab: parts[1] || "today" };
    var course = parts[0] && COURSES[parts[0]] ? parts[0] : null;
    return { course: course, tab: parts[1] || "review", arg: parts[2] };
  }
  function go(h) {
    if (location.hash !== h) { location.hash = h; return; }
    render();
    if (pendingScroll) { scrollToEl(pendingScroll); pendingScroll = null; }
  }
  function toast(msg) {
    var t = document.getElementById("toast");
    if (!t) { t = document.createElement("div"); t.id = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.textContent = msg; t.className = "show";
    clearTimeout(toast.tm);
    toast.tm = setTimeout(function () { t.className = ""; }, 3600);
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

  /* ---------- items across classes: refs are {id, i} ---------- */
  function cardOf(r) { return COURSES[r.id].cards[r.i]; }
  function qOf(r) { return COURSES[r.id].quiz[r.i]; }
  function cardKey(r) { return hash(cardOf(r)[0]); }
  function qKey(r) { return hash(qOf(r).q); }
  function courseRefs(id, kind, unit) {
    var c = COURSES[id], list = kind === "q" ? c.quiz : c.cards;
    return range(list.length).filter(function (i) {
      if (unit == null || unit < 0) return true;
      return kind === "q" ? list[i].unit === unit : cardUnit(list[i]) === unit;
    }).map(function (i) { return { id: id, i: i }; });
  }
  function allRefs(kind) { return ORDER.reduce(function (a, id) { return a.concat(courseRefs(id, kind, -1)); }, []); }
  function isMissed(r) { return P(r.id).missed.indexOf(qKey(r)) >= 0; }
  function inAgain(r) { return P(r.id).again.indexOf(cardKey(r)) >= 0; }

  /* spaced repetition: right answers push an item out 1, 2, 4, 8, 16, 32 days; a miss brings it back today */
  function srsKey(kind, r) { return kind + (kind === "q" ? qKey(r) : cardKey(r)); }
  function endOfToday() { var d = new Date(); d.setHours(23, 59, 59, 999); return d.getTime(); }
  function grade(kind, r, ok) {
    var s = P(r.id).srs, k = srsKey(kind, r), cur = s[k] || { b: 0 };
    var b = ok ? Math.min(cur.b + 1, INTERVALS.length - 1) : 0;
    s[k] = { b: b, due: Date.now() + (ok ? INTERVALS[b] * DAY : 0) };
  }
  function srsDue(kind, refs, newCap) {
    var end = endOfToday(), due = [], fresh = [];
    refs.forEach(function (r) {
      var e = P(r.id).srs[srsKey(kind, r)];
      if (!e) fresh.push(r); else if (e.due <= end) due.push(r);
    });
    return due.concat(fresh.slice(0, newCap == null ? NEW_CAP : newCap));
  }
  function srsLabel(kind, r) {
    var e = P(r.id).srs[srsKey(kind, r)];
    if (!e) return "New";
    if (e.due <= endOfToday()) return "Due today";
    var d = Math.round((e.due - Date.now()) / DAY);
    return "Next review in " + d + (d === 1 ? " day" : " days");
  }
  function dailyCards() {
    return shuffle(ORDER.reduce(function (a, id) { return a.concat(srsDue("c", courseRefs(id, "c", -1), 10)); }, [])).slice(0, 40);
  }
  function missedAll() { return allRefs("q").filter(isMissed); }
  function dailyQuiz() {
    var seen = {}, out = [];
    missedAll().concat(ORDER.reduce(function (a, id) { return a.concat(srsDue("q", courseRefs(id, "q", -1), 5)); }, [])).forEach(function (r) {
      var k = r.id + ":" + r.i;
      if (!seen[k]) { seen[k] = 1; out.push(r); }
    });
    return shuffle(out).slice(0, 25);
  }

  /* ---------- sections, check-offs, study plan ---------- */
  function doneKey(U, b) { return hash(U.title + "::" + b.title); }
  function unitFinished(p, u) {
    return p.conf[hash(u.title)] === "solid" || (u.blocks.length > 0 && u.blocks.every(function (b) { return p.done[doneKey(u, b)]; }));
  }
  function sectionCounts(c, p) {
    var total = 0, done = 0;
    c.units.forEach(function (u) { u.blocks.forEach(function (b) { total++; if (p.done[doneKey(u, b)]) done++; }); });
    return { total: total, done: done };
  }
  function nextUnchecked(c, p, u0, b0) {
    var n = c.units.length;
    for (var step = 0; step <= n; step++) {
      var u = (u0 + step) % n, blocks = c.units[u].blocks;
      var start = step === 0 ? b0 + 1 : 0, stop = step === n ? Math.min(b0 + 1, blocks.length) : blocks.length;
      for (var b = start; b < stop; b++) if (!p.done[doneKey(c.units[u], blocks[b])]) return { u: u, b: b };
    }
    return null;
  }
  function dayStr(off) {
    var d = new Date(Date.now() + off * DAY);
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function dayLabel(off) {
    if (off === 0) return "Today";
    if (off === 1) return "Tomorrow";
    return new Date(Date.now() + off * DAY).toLocaleDateString(undefined, { weekday: "short", month: "numeric", day: "numeric" });
  }
  // Spreads unfinished units over the days left, keeping the day before the exam for review.
  // Today's list is fixed the first time you open the site each day, so finishing it does not pull tomorrow forward.
  function planFor(id) {
    var c = COURSES[id], p = P(id), d = daysUntil(c.exam.date);
    if (d === null) return { none: true };
    if (d < 0) return { past: true };
    var studyDays = d >= 2 ? d - 1 : 1, today = dayStr(0);
    store._plan = store._plan || {};
    var snap = store._plan[id];
    if (!snap || snap.date !== today) {
      var rem0 = range(c.units.length).filter(function (i) { return !unitFinished(p, c.units[i]); });
      snap = store._plan[id] = { date: today, units: rem0.slice(0, Math.ceil(rem0.length / studyDays)) };
      save();
    }
    var todays = snap.units.filter(function (i) { return i < c.units.length; });
    var later = range(c.units.length).filter(function (i) { return todays.indexOf(i) < 0 && !unitFinished(p, c.units[i]); });
    var restDays = studyDays - 1, days = [{ off: 0, units: todays }];
    if (restDays <= 0) days[0].units = todays.concat(later);
    else {
      var per = Math.ceil(later.length / restDays);
      for (var k = 1; k <= restDays; k++) days.push({ off: k, units: per ? later.slice((k - 1) * per, k * per) : [] });
    }
    if (d >= 2) days.push({ off: d - 1, review: true });
    return { d: d, days: days, today: days[0] };
  }
  function planCards(full) {
    return ORDER.map(function (id) {
      var c = COURSES[id], p = P(id), pl = planFor(id), body;
      if (pl.none) body = "<p>No exam date set yet. The plan starts once a date is added.</p>";
      else if (pl.past) body = "<p>The exam date has passed.</p>";
      else if (!pl.today.units.length) body = "<p>No units assigned today. Use the daily review for flashcards and missed questions.</p>";
      else body = '<ul class="plan-list">' + pl.today.units.map(function (ui) {
        var u = c.units[ui], f = unitFinished(p, u);
        return "<li" + (f ? ' class="fin"' : "") + '><span class="pmark" aria-label="' + (f ? "Finished" : "Not finished") + '">' + (f ? "✓" : "○") + "</span>" +
          '<a href="#/' + id + '/review" data-act="goUnit" data-id="' + id + '" data-u="' + ui + '">' + esc(u.title) + "</a></li>";
      }).join("") + "</ul>";
      var when = pl.d != null ? (pl.d === 0 ? "Exam today" : pl.d + (pl.d === 1 ? " day" : " days") + " to exam") : esc(c.exam.when);
      var more = "";
      if (full && pl.days) {
        more = '<details class="fullplan"><summary class="lab">Full plan</summary><ol>' + pl.days.map(function (dd) {
          var what = dd.review ? "Final review: missed questions, units rated Shaky, flashcards due."
            : dd.units.length ? dd.units.map(function (ui) { return esc(c.units[ui].title); }).join(" · ") : "Catch-up day";
          return "<li><b>" + esc(dayLabel(dd.off)) + ":</b> " + what + "</li>";
        }).join("") + "</ol></details>";
      }
      return '<div class="cut plan-card"><div class="spread"><span class="headline" style="font-size:18px">' + esc(c.title) + '</span><span class="lab">' + when + "</span></div>" +
        '<span class="lab muted-dark">Today</span>' + body + more + "</div>";
    }).join("");
  }

  /* ---------- display settings ---------- */
  function displayBar() {
    var u = UI();
    return '<div class="display row" role="group" aria-label="Display settings"><span class="lab muted">Text</span>' +
      '<button class="btn quiet lab push sm" data-act="size" data-d="-1" aria-label="Smaller text"' + (u.size <= 0 ? " disabled" : "") + ">A−</button>" +
      '<button class="btn quiet lab push sm" data-act="size" data-d="1" aria-label="Larger text"' + (u.size >= SIZES.length - 1 ? " disabled" : "") + ">A+</button>" +
      '<button class="btn quiet lab push sm" data-act="plain" aria-pressed="' + !!u.plain + '">Background: ' + (u.plain ? "plain" : "plaid") + "</button></div>";
  }

  /* ---------- backup code ---------- */
  function encodeStore() { return "FR1:" + btoa(unescape(encodeURIComponent(JSON.stringify(store)))); }
  function decodeStore(code) {
    var s = String(code || "").replace(/\s+/g, "").replace(/^FR1:/, "");
    var obj = JSON.parse(decodeURIComponent(escape(atob(s))));
    if (!obj || typeof obj !== "object" || Array.isArray(obj)) throw new Error("bad");
    return obj;
  }
  function restoreFrom(code) {
    var obj;
    try { obj = decodeStore(code); } catch (e) { toast("That code could not be read. Copy the whole code and try again."); return; }
    if (!window.confirm("Replace the progress on this browser with the backup?")) return;
    store = obj; save(); render(); toast("Progress restored.");
  }
  function backupPanel() {
    return '<details class="panel backup"><summary class="lab">Move progress to another device</summary><div class="backup-body">' +
      "<p>Progress saves in this browser only. To move it, copy the backup code on this device. On the other device, open this site, paste the code in the box below, and press Restore.</p>" +
      '<div class="row"><button class="btn gold-o lab push" data-act="backupCopy">Copy backup code</button><button class="btn quiet lab push" data-act="backupFile">Download backup file</button>' +
      '<label class="btn quiet lab push filebtn">Load backup file<input type="file" accept=".txt,text/plain" data-file="backup" class="sr"></label></div>' +
      '<label class="lab" for="bk">Backup code</label><textarea id="bk" rows="3" placeholder="Paste a backup code here"></textarea>' +
      '<div><button class="btn pink lab push" data-act="backupRestore">Restore from code</button></div></div></details>';
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
      var sc = sectionCounts(c, p);
      var stats = [
        c.units.length + " units", c.cards.length + " cards", c.quiz.length + " quiz Qs",
        p.quizBest != null ? "Best quiz " + p.quizBest + "%" : "No quiz yet",
        p.missed.length ? p.missed.length + " missed to retry" : null,
        p.again.length ? p.again.length + (p.again.length === 1 ? " card" : " cards") + " in again pile" : null
      ].filter(Boolean).map(function (s) { return '<span class="lab stat">' + esc(s) + "</span>"; }).join("");
      var bar = '<div class="confbar" aria-label="' + solid + " of " + c.units.length + ' units rated solid">' + c.units.map(function (u) {
        var v = p.conf[hash(u.title)], col = v === "solid" ? "#3dff5a" : v === "ok" ? "#ffc400" : v === "shaky" ? "#ff2d95" : "rgba(22,20,18,0.15)";
        return '<span style="background:' + col + '"></span>';
      }).join("") + '</div><span class="lab muted-dark">' + solid + " / " + c.units.length + " units rated solid</span>";
      var pct = sc.total ? Math.round((sc.done / sc.total) * 100) : 0;
      var checks = '<div class="checkbar" aria-label="' + sc.done + " of " + sc.total + ' sections checked off"><span style="width:' + pct + '%"></span></div>' +
        '<span class="lab muted-dark">' + sc.done + " / " + sc.total + " sections checked off</span>";
      return '<a class="cut course-card push" href="#/' + id + '/review">' + num +
        '<span class="headline" style="font-size:26px;line-height:1.05">' + esc(c.t1 + " " + c.t2) + "</span>" +
        '<span class="lab muted-dark">' + esc(c.exam.label + " · " + c.exam.when) + "</span>" +
        '<span style="font-size:16px;line-height:24px">' + esc(c.sub) + "</span>" + bar + checks +
        '<span class="stats">' + stats + "</span></a>";
    }).join("");
    var missedN = missedAll().length;
    var today = '<section style="display:flex;flex-direction:column;gap:20px"><div class="spread"><h2 class="h2">Today</h2><div class="row">' +
      '<a class="btn pink lab push" href="#/study">Open daily review</a>' +
      (missedN ? '<button class="btn pink-o lab push" data-act="missedAll">Missed questions, all classes (' + missedN + ")</button>" : "") +
      '</div></div><div class="g3">' + planCards(false) + "</div></section>";
    app.innerHTML =
      '<div class="wrap" style="gap:48px">' +
      '<header style="display:flex;flex-direction:column;gap:20px">' +
      '<div class="spread"><div class="lab muted">' + esc(SITE.kicker || "") + "</div>" + displayBar() + "</div>" +
      '<h1 class="mega">' + esc(SITE.title1 || "Review") + '<br><span style="color:#ff2d95">' + esc(SITE.title2 || "") + "</span></h1>" +
      '<p class="subhead">' + esc(SITE.sub || "") + "</p>" +
      '<div class="row" style="gap:12px">' + exams + "</div>" + searchBar("") + "</header>" +
      today +
      '<section style="display:flex;flex-direction:column;gap:20px"><h2 class="h2">Pick a class</h2><div class="g3">' + cards + "</div></section>" +
      '<section style="display:flex;flex-direction:column;gap:16px"><h2 class="h2">The loop</h2><div class="g4">' +
      loopCard("01", "#ff2d95", "Review", "Read the unit overview, then each section. Check off each section and rate the unit when you finish.") +
      loopCard("02", "#b3381a", "Map it", "Walk the flowchart for that topic without looking at the review.") +
      loopCard("03", "#5b2ea6", "Test", "Quiz that unit from the button at the bottom of the review. Read why each wrong choice fails.") +
      loopCard("04", "#285f94", "Apply", "Sorting drills and hypos. Write your answer before revealing.") +
      "</div>" +
      '<p class="muted" style="margin:0;font-size:15px">Keys: <span class="kbd">/</span> search · <span class="kbd">Space</span> flip card · <span class="kbd">←</span> <span class="kbd">→</span> prev/next · <span class="kbd">1</span>–<span class="kbd">4</span> answer · <span class="kbd">Enter</span> next question</p></section>' +
      backupPanel() +
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
  function topNav(extra) {
    return '<nav class="top" aria-label="Pages"><div class="row"><a class="btn solid lab push" href="#/">' + ARROW_LEFT + "Review hub</a>" +
      '<a class="btn quiet lab push" href="#/study">Daily review</a>' + (extra || "") +
      '<a class="btn quiet lab push" href="#/search/" aria-label="Search">' + SEARCH_ICON + "</a></div>" + displayBar() + "</nav>";
  }
  function renderCourse(id, tab) {
    var c = COURSES[id], p = P(id);
    if (lastCourse !== id) { S = freshS(); lastCourse = id; }
    if (pendingOpen && pendingOpen.id === id) { S.openBlocks[pendingOpen.key] = true; pendingScroll = pendingOpen.scroll; pendingOpen = null; }
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
    var body = tab === "maps" ? viewMaps(c, p, hue) : tab === "cards" ? viewCards(cardCtx()) : tab === "quiz" ? viewQuiz(quizCtx()) : tab === "drills" ? viewDrills(id, c, p, hue) : viewReview(id, c, p, hue);
    var thin = thinList(c);
    var checkPanel = thin.length
      ? '<details class="panel checkpanel"><summary class="lab">Content check · ' + thin.length + " spot" + (thin.length === 1 ? "" : "s") + " need more source material</summary><ul>" +
        thin.map(function (t) { return "<li><b>" + esc(t.unit + (t.block ? " › " + t.block : "")) + "</b> – " + esc(t.note) + "</li>"; }).join("") + "</ul></details>"
      : "";
    app.innerHTML =
      '<div class="wrap">' + topNav(others) +
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
  function blockContent(b) {
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
    return how + txt + rulesSec + tip + thin;
  }
  function viewReview(id, c, p, hue) {
    var ui = Math.min(p.unit, c.units.length - 1), U = c.units[ui];
    var dots = c.units.map(function (u) { var v = p.conf[hash(u.title)]; return v === "solid" ? "#3dff5a" : v === "ok" ? "#ffc400" : v === "shaky" ? "#ff2d95" : ""; });
    var list = c.units.map(function (u, i) { return '<span class="lab">' + String(i + 1).padStart(2, "0") + "</span> " + esc(u.title); });
    var expandAll = !!p.expandAll, hideDone = !!p.hideDone;
    var ovArr = U.overview ? (Array.isArray(U.overview) ? U.overview : [U.overview]) : [];
    var ov = ovArr.length ? '<section class="overview" id="overview"><h3 class="sec-title" style="color:' + esc(hue) + '">Overview</h3>' +
      '<p class="lead">' + esc(ovArr[0]) + "</p>" + (ovArr.length > 1 ? '<ul class="bul">' + bulletsFromParas(ovArr.slice(1)) + "</ul>" : "") + "</section>" : "";
    var doneCount = U.blocks.filter(function (b) { return p.done[doneKey(U, b)]; }).length;
    var toc = '<nav class="toc" aria-label="Sections in this unit"><span class="lab">In this unit · ' + doneCount + "/" + U.blocks.length + " checked</span><ol>" +
      (ov ? '<li><a href="#" data-act="jump" data-target="overview">Overview</a></li>' : "") +
      U.blocks.map(function (b, bi) {
        var flag = b.check && b.check.status === "thin" ? ' <span class="tocflag" title="Needs more source">!</span>' : "";
        var dn = !!p.done[doneKey(U, b)];
        return "<li" + (dn ? ' class="done"' : "") + '><a href="#" data-act="jump" data-target="b-' + bi + '">' + esc(b.title) + "</a>" + (dn ? ' <span class="tocdone" title="Checked off">✓</span>' : "") + flag + "</li>";
      }).join("") + "</ol>" +
      '<div class="toc-actions"><button class="btn pink lab push sm" data-act="nextUnchecked" data-b="-1">Next unchecked</button>' +
      '<button class="btn quiet lab push sm" data-act="expandAll">' + (expandAll ? "Collapse all" : "Expand all") + "</button>" +
      '<button class="btn quiet lab push sm" data-act="hideDone" aria-pressed="' + hideDone + '">' + (hideDone ? "Show all sections" : "Show only unchecked") + "</button>" +
      '<a class="btn quiet lab push sm" href="#/' + id + "/print/" + ui + '">Print this unit</a>' +
      '<a class="btn quiet lab push sm" href="#/' + id + '/print/all">Print whole class</a></div></nav>';
    var hidden = 0;
    var blocks = U.blocks.map(function (b, bi) {
      var key = ui + ":" + bi, hk = doneKey(U, b);
      var dn = !!p.done[hk];
      if (hideDone && dn) { hidden++; return ""; }
      var open = key in S.openBlocks ? !!S.openBlocks[key] : expandAll;
      var note = p.notes[hk] || "", hlN = (p.hl[hk] || []).length;
      var box = '<button class="checkbox push' + (dn ? " on" : "") + '" data-act="done" data-b="' + bi + '" role="checkbox" aria-checked="' + dn + '" aria-label="' + (dn ? "Uncheck" : "Check off") + " " + esc(b.title) + '"></button>';
      var tools = '<div class="block-tools"><div class="row"><button class="btn ink-o lab push sm" data-act="hl" data-hk="' + hk + '" data-hc="' + id + '">Highlight selected text</button>' +
        (hlN ? '<button class="btn ink-o lab push sm" data-act="hlClear" data-hk="' + hk + '" data-hc="' + id + '">Clear highlights (' + hlN + ")</button>" : "") +
        '<span class="hint">Select words above, then press Highlight. Click a highlight to remove it.</span></div>' +
        '<label class="lab" for="nt-' + bi + '">Your notes</label><textarea class="note" id="nt-' + bi + '" rows="3" data-save="note" data-hc="' + id + '" data-hk="' + hk + '" placeholder="Notes for this section. They save in this browser.">' + esc(note) + "</textarea></div>";
      var foot = '<div class="block-foot"><button class="btn lab push' + (dn ? " acid" : "") + '" data-act="done" data-b="' + bi + '">' + (dn ? "✓ Checked off" : "Check off") + "</button>" +
        '<button class="btn ink lab push" data-act="closeBlock" data-b="' + bi + '">Close section</button>' +
        '<button class="btn pink lab push" data-act="nextUnchecked" data-b="' + bi + '">Next unchecked section</button></div>';
      return '<details class="cut block' + (dn ? " is-done" : "") + '" id="b-' + bi + '" data-key="' + key + '"' + (open ? " open" : "") + ">" +
        '<summary><span class="sum-top">' + box + '<span class="lab sum-n">' + String(bi + 1).padStart(2, "0") + '</span><span class="headline">' + esc(b.title) + "</span>" +
        (b.multi ? '<span class="lab tag">Multifactor</span>' : "") + (b.check && b.check.status === "thin" ? '<span class="lab tag" style="background:#ffc400">Thin</span>' : "") +
        (note ? '<span class="lab tag" style="background:#9fd3ff">Note</span>' : "") +
        '<span class="chev" aria-hidden="true"></span></span><span class="sum-line">' + esc(firstSentence(b)) + "</span></summary>" +
        '<div class="block-body"><div class="hl-zone" data-hk="' + hk + '" data-hc="' + id + '">' + blockContent(b) + "</div>" + tools + foot + "</div></details>";
    }).join("");
    if (hidden) blocks += '<div class="hidden-note"><span class="lab">' + hidden + " checked " + (hidden === 1 ? "section" : "sections") + ' hidden</span><button class="btn quiet lab push sm" data-act="hideDone">Show all sections</button></div>';
    var cur = p.conf[hash(U.title)] || "";
    var rate = '<div class="cut ratebox" id="ratebox"><div style="display:flex;flex-direction:column;gap:4px"><span class="lab">Finished this unit?</span><span class="headline" style="font-size:20px">How solid is it?</span><span class="lab">' + doneCount + " of " + U.blocks.length + " sections checked off</span></div><div class=\"row\">" +
      CONF.map(function (cf) { return '<button class="btn lab push conf' + (cur === cf[0] ? " picked" : "") + '" style="--c:' + cf[2] + '" data-act="conf" data-v="' + cf[0] + '">' + cf[1] + "</button>"; }).join("") +
      '</div><div class="row"><button class="btn ink lab push" data-act="quizUnit">Quiz this unit</button><button class="btn ink lab push" data-act="cardsUnit">Cards for this unit</button><button class="btn pink lab push" data-act="unitStep" data-d="1">Next unit</button></div></div>';
    return '<section style="display:flex;flex-direction:column;gap:24px">' + pills(list, ui, "unit", dots) +
      '<div class="unit-head"><div style="display:flex;flex-direction:column;gap:6px"><div class="lab" style="color:' + esc(hue) + '">Unit ' + (ui + 1) + " of " + c.units.length + "</div>" +
      '<h2 class="h2">' + esc(U.title) + '</h2></div><div class="row"><button class="btn lab push" data-act="unitStep" data-d="-1">Prev unit</button><button class="btn pink lab push" data-act="unitStep" data-d="1">Next unit</button></div></div>' +
      '<div class="review-layout">' + toc + '<div class="review-main">' + ov + '<div class="blocks">' + blocks + "</div>" + rate + "</div></div></section>";
  }

  /* highlights: stored as text snippets per section, wrapped after each render */
  var lastPruned = 0;
  function wrapTerm(root, term, hk, hc, isStatic) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), nodes = [], found = false;
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      if (node.parentNode && node.parentNode.closest && node.parentNode.closest("mark.hl")) return;
      var idx = node.nodeValue.indexOf(term);
      while (idx >= 0) {
        found = true;
        var mid = node.splitText(idx), rest = mid.splitText(term.length);
        var mk = document.createElement("mark");
        mk.className = "hl";
        if (!isStatic) { mk.title = "Click to remove this highlight"; mk.setAttribute("data-act", "unhl"); mk.setAttribute("data-hk", hk); mk.setAttribute("data-hc", hc); mk.setAttribute("data-t", term); }
        mid.parentNode.replaceChild(mk, mid);
        mk.appendChild(mid);
        node = rest;
        idx = node.nodeValue.indexOf(term);
      }
    });
    return found;
  }
  function applyHighlights() {
    lastPruned = 0;
    var zones = app.querySelectorAll(".hl-zone");
    for (var i = 0; i < zones.length; i++) {
      var z = zones[i], hc = z.getAttribute("data-hc"), hk = z.getAttribute("data-hk");
      if (!COURSES[hc]) continue;
      var p = P(hc), list = p.hl[hk];
      if (!list || !list.length) continue;
      var keep = list.filter(function (t) { return wrapTerm(z, t, hk, hc, z.hasAttribute("data-static")); });
      if (keep.length !== list.length) {
        lastPruned += list.length - keep.length;
        if (keep.length) p.hl[hk] = keep; else delete p.hl[hk];
        save();
      }
    }
  }

  /* print view */
  function renderPrint(id, arg) {
    var c = COURSES[id], p = P(id);
    var units = arg === "all" ? range(c.units.length) : [Math.max(0, Math.min(parseInt(arg, 10) || 0, c.units.length - 1))];
    document.title = c.title + (arg === "all" ? " · full review" : " · " + c.units[units[0]].title);
    var body = units.map(function (ui) {
      var U = c.units[ui];
      var ovArr = U.overview ? [].concat(U.overview) : [];
      var ov = ovArr.length ? '<div class="p-overview"><h3>Overview</h3>' + ovArr.map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("") + "</div>" : "";
      var blocks = U.blocks.map(function (b, bi) {
        var hk = doneKey(U, b), note = p.notes[hk];
        return '<section class="p-block"><h3>' + String(bi + 1).padStart(2, "0") + " · " + esc(b.title) + (p.done[hk] ? ' <span class="p-done">✓ checked off</span>' : "") + "</h3>" +
          '<div class="hl-zone" data-static="1" data-hk="' + hk + '" data-hc="' + id + '">' + blockContent(b) + "</div>" +
          (note ? '<div class="p-note"><b>Your notes</b><p>' + esc(note) + "</p></div>" : "") + "</section>";
      }).join("");
      return '<article class="p-unit"><h2>Unit ' + (ui + 1) + ": " + esc(U.title) + "</h2>" + ov + blocks + "</article>";
    }).join("");
    app.innerHTML = '<div class="print-doc"><div class="noprint print-bar"><a class="btn ink lab push" href="#/' + id + '/review">' + ARROW_LEFT + 'Back to review</a>' +
      '<button class="btn pink lab push" data-act="print">Print or save as PDF</button>' +
      '<span>To get a PDF, choose “Save as PDF” as the printer in the print window.</span></div>' +
      '<h1>' + esc(c.title) + "</h1>" + body + "</div>";
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
  function cardCtx() {
    var r = route();
    if (r.study) return { st: SS, c: null, id: null, full: function () { return []; } };
    return { st: S, c: COURSES[r.course], id: r.course, full: function () { return courseRefs(r.course, "c", S.cardUnit); } };
  }
  function deckOf(ctx) { return ctx.st.deck && ctx.st.deck.length ? ctx.st.deck : ctx.full(); }
  function viewCards(ctx) {
    var st = ctx.st, deck = deckOf(ctx), head;
    if (ctx.c) {
      var againHere = courseRefs(ctx.id, "c", -1).filter(inAgain).length;
      head = '<div class="spread">' + unitSelect(ctx.c, st.cardUnit, "cardUnit") + '<span class="lab" style="color:#ff2d95">Again pile ' + againHere + "</span></div>";
    } else head = '<div class="spread"><span class="lab">Flashcards from every class</span></div>';
    if (!deck.length) {
      return '<section class="narrow">' + head + '<div class="cut qcard"><p>' + (ctx.c ? "No cards tagged to this unit yet." : "Start a flashcard session from the Today tab.") + "</p>" +
        (ctx.c ? "" : '<div><a class="btn ink lab push" href="#/study">Go to Today</a></div>') + "</div></section>";
    }
    if (st.card >= deck.length) st.card = 0;
    var ref = deck[st.card], C = cardOf(ref), cc = COURSES[ref.id];
    var uTag = (ctx.c ? "" : cc.title + " · ") + (cardUnit(C) >= 0 && cc.units[cardUnit(C)] ? cc.units[cardUnit(C)].title : cc.title);
    var face = st.flip
      ? '<div class="face back"><span class="lab">' + esc(C[0]) + '</span><span class="a">' + esc(C[1]) + '</span><span class="lab">Tap or press Space to flip back</span></div>'
      : '<div class="face front"><span class="lab">Prompt · tap or press Space</span><span class="q">' + esc(C[0]) + '</span><span class="spread"><span class="lab muted-dark">' + esc(uTag) + '</span><span class="lab muted-dark">' + esc(srsLabel("c", ref)) + "</span></span></div>";
    var extra = "";
    if (ctx.c) {
      var dueN = srsDue("c", courseRefs(ctx.id, "c", st.cardUnit)).length;
      var againHere2 = courseRefs(ctx.id, "c", -1).filter(inAgain).length;
      extra = (dueN ? '<button class="btn acid-o lab push" data-act="dueCards">Due today (' + dueN + ")</button>" : "") +
        (againHere2 ? '<button class="btn pink-o lab push" data-act="againOnly">Only again pile</button>' : "") +
        (st.deck ? '<button class="btn lab push" data-act="fullDeck">Back to deck</button>' : "");
    }
    return '<section class="narrow">' + head +
      '<div class="spread"><span class="lab">Card ' + (st.card + 1) + " / " + deck.length + " · " + esc(st.deckMode) + "</span></div>" +
      '<button class="flash push" data-act="flip" aria-label="Flip card">' + face + "</button>" +
      '<div class="row"><button class="btn lab push" data-act="cardStep" data-d="-1">Prev</button>' +
      '<button class="btn pink lab push" data-act="again">Again</button>' +
      '<button class="btn acid lab push" data-act="gotit">Got it</button>' +
      '<button class="btn lab push" data-act="cardStep" data-d="1">Skip</button><span class="grow"></span>' +
      '<button class="btn gold-o lab push" data-act="cardShuffle">Shuffle</button>' + extra + "</div>" +
      '<p class="hint-dark">Got it schedules the card for 1, 2, 4, 8, 16, then 32 days out. Again brings it back today and adds it to the again pile.</p></section>';
  }
  function cardMove(ctx, d) {
    var len = deckOf(ctx).length || 1;
    ctx.st.card = (ctx.st.card + d + len) % len; ctx.st.flip = false;
  }

  /* quiz */
  function quizCtx() {
    var r = route();
    if (r.study) return { st: SS, c: null, id: null, base: function () { return allRefs("q"); } };
    return { st: S, c: COURSES[r.course], id: r.course, base: function () { return courseRefs(r.course, "q", S.quizUnit); } };
  }
  function startQuiz(st, base, mode) {
    if (mode === "exam") { st.quiz = { mode: "exam", setup: true }; return; }
    var set = mode === "daily" ? dailyQuiz()
      : mode === "missed" ? shuffle(base.filter(isMissed))
      : mode === "due" ? shuffle(srsDue("q", base))
      : mode === "shuffle" ? shuffle(base) : base.slice();
    st.quiz = { mode: mode, set: set, i: 0, pick: -1, score: 0, wrong: [], res: [], done: false, order: set.length ? shuffle(range(qOf(set[0]).o.length)) : [] };
  }
  function examStart(st, base) {
    var set = shuffle(base).slice(0, st.examN);
    st.quiz = { mode: "exam", exam: true, set: set, i: 0, answers: set.map(function () { return -1; }),
      orders: set.map(function (r) { return shuffle(range(qOf(r).o.length)); }),
      endAt: Date.now() + Math.round(set.length * st.examMin * 60000), done: false, res: [], wrong: [], score: 0 };
  }
  function record(Z, r, ok) {
    var p = P(r.id), k = qKey(r);
    Z.res.push({ r: r, ok: ok });
    if (ok) { Z.score++; p.missed = p.missed.filter(function (x) { return x !== k; }); }
    else { Z.wrong.push(k); if (p.missed.indexOf(k) < 0) p.missed.push(k); }
    grade("q", r, ok);
  }
  function pick(ctx, oi) {
    var Z = ctx.st.quiz;
    if (!Z || Z.done || Z.exam || Z.setup || Z.pick >= 0) return;
    var r = Z.set[Z.i];
    Z.pick = oi;
    record(Z, r, oi === qOf(r).a);
  }
  function nextQ(ctx) {
    var Z = ctx.st.quiz;
    if (!Z || Z.exam || Z.pick < 0) return;
    if (Z.i + 1 >= Z.set.length) {
      Z.done = true;
      if (ctx.c && (Z.mode === "all" || Z.mode === "shuffle") && S.quizUnit < 0 && Z.set.length === ctx.c.quiz.length) {
        var p = P(ctx.id), pct = Math.round((Z.score / Z.set.length) * 100);
        p.quizBest = Math.max(p.quizBest || 0, pct);
        p.quizLast = pct;
      }
    } else {
      Z.i++; Z.pick = -1;
      Z.order = shuffle(range(qOf(Z.set[Z.i]).o.length));
      var qc = document.querySelector(".qcard");
      if (qc && qc.getBoundingClientRect().top < 0) pendingScroll = ".qcard";
    }
  }
  function examSubmit(st, timeUp) {
    var Z = st.quiz;
    if (!Z || !Z.exam || Z.done) return;
    Z.res = []; Z.wrong = []; Z.score = 0;
    Z.set.forEach(function (r, k) { record(Z, r, Z.answers[k] === qOf(r).a); });
    Z.done = true; Z.timeUp = !!timeUp;
    save();
  }
  function fmtLeft(ms) {
    var s = Math.max(0, Math.ceil(ms / 1000));
    return "Time left " + Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
  }
  function unitLabel(r, multi) {
    var Q = qOf(r), c = COURSES[r.id];
    return (multi ? c.title + " · " : "") + (typeof Q.unit === "number" && c.units[Q.unit] ? c.units[Q.unit].title : "Other");
  }
  function breakdown(res, multi) {
    var groups = {}, keys = [];
    res.forEach(function (x) {
      var u = qOf(x.r).unit, k = x.r.id + ":" + (typeof u === "number" ? u : -1);
      if (!groups[k]) { groups[k] = { r: x.r, id: x.r.id, u: typeof u === "number" ? u : -1, n: 0, ok: 0 }; keys.push(k); }
      groups[k].n++; if (x.ok) groups[k].ok++;
    });
    keys.sort(function (a, b) { var A = groups[a], B = groups[b]; return ORDER.indexOf(A.id) - ORDER.indexOf(B.id) || A.u - B.u; });
    if (!keys.length) return "";
    return '<div class="breakdown"><span class="lab">Results by unit</span>' + keys.map(function (k) {
      var g = groups[k], pct = Math.round((g.ok / g.n) * 100);
      var label = esc(unitLabel(g.r, multi));
      var link = g.u >= 0 ? '<a href="#/' + g.id + '/review" data-act="goUnit" data-id="' + g.id + '" data-u="' + g.u + '">' + label + "</a>" : label;
      return '<div class="bu-row' + (pct < 70 ? " weak" : "") + '"><span class="bu-label">' + link + '</span><span class="bu-bar"><span style="width:' + pct + '%"></span></span><span class="lab">' + g.ok + "/" + g.n + " · " + pct + "%</span></div>";
    }).join("") + '<span class="hint-ink">Units under 70% are marked in pink. Click a unit name to review it.</span></div>';
  }
  function examReview(Z) {
    return '<div class="exam-review"><h3 class="h2" style="font-size:36px">Every question, with explanations</h3>' + Z.set.map(function (r, k) {
      var Q = qOf(r), a = Z.answers[k], ok = a === Q.a, why = Q.why || [];
      return '<div class="cut er-item' + (ok ? "" : " no") + '"><span class="lab">' + (k + 1) + " · " + (ok ? "Correct" : a < 0 ? "Not answered" : "Missed") + " · " + esc(unitLabel(r, true)) + "</span>" +
        '<p class="er-q">' + esc(Q.q) + "</p>" +
        (a >= 0 && !ok ? "<p><b>Your answer:</b> " + esc(Q.o[a]) + "</p>" + (why[a] ? '<p class="er-why">' + esc(why[a]) + "</p>" : "") : "") +
        "<p><b>Correct answer:</b> " + esc(Q.o[Q.a]) + '</p><p class="er-why">' + esc(Q.e || why[Q.a] || "") + "</p></div>";
    }).join("") + "</div>";
  }
  function examSetup(st, base) {
    if (!base.length) return '<div class="cut qcard"><p>No questions here yet.</p></div>';
    var nOpts = [10, 20, 30, 50].filter(function (n) { return n < base.length; }).concat([base.length]);
    if (nOpts.indexOf(st.examN) < 0) st.examN = nOpts[Math.min(1, nOpts.length - 1)];
    var mins = st.examN * st.examMin;
    return '<div class="cut exam-setup"><span class="lab">Timed exam</span>' +
      "<p>Questions are drawn at random. You get no feedback until you submit or the time runs out. Then you see your score, results by unit, and the explanation for every question.</p>" +
      '<div class="row"><label class="selectwrap lab"><span>Questions</span><select data-change="examN">' +
      nOpts.map(function (n) { return '<option value="' + n + '"' + (n === st.examN ? " selected" : "") + ">" + (n === base.length ? "All (" + n + ")" : n) + "</option>"; }).join("") + "</select></label>" +
      '<label class="selectwrap lab"><span>Minutes per question</span><select data-change="examMin">' +
      [1, 1.5, 2, 3].map(function (m) { return '<option value="' + m + '"' + (m === st.examMin ? " selected" : "") + ">" + m + "</option>"; }).join("") + "</select></label></div>" +
      '<p class="lab">Time limit: ' + (Math.round(mins * 10) / 10) + " minutes</p>" +
      '<div><button class="btn ink lab push" data-act="examStart">Start exam</button></div></div>';
  }
  function examView(Z) {
    var Q = qOf(Z.set[Z.i]), order = Z.orders[Z.i], ans = Z.answers[Z.i];
    var answered = Z.answers.filter(function (a) { return a >= 0; }).length;
    var opts = order.map(function (oi, pos) {
      return '<button class="opt push' + (ans === oi ? " chosen" : "") + '" data-act="examPick" data-o="' + oi + '" aria-pressed="' + (ans === oi) + '"><span class="letter">' + LET[pos] + '</span><span class="grow">' + esc(Q.o[oi]) + "</span>" + (ans === oi ? '<span class="lab">Your answer</span>' : "") + "</button>";
    }).join("");
    var grid = '<div class="qgrid" aria-label="Jump to question">' + Z.set.map(function (r, k) {
      return '<button class="qnum' + (k === Z.i ? " cur" : "") + (Z.answers[k] >= 0 ? " ans" : "") + '" data-act="examGo" data-i="' + k + '" aria-label="Question ' + (k + 1) + (Z.answers[k] >= 0 ? ", answered" : "") + '">' + (k + 1) + "</button>";
    }).join("") + "</div>";
    var left = Z.endAt - Date.now();
    return '<div class="spread"><span class="lab">Question ' + (Z.i + 1) + " / " + Z.set.length + " · " + answered + ' answered</span><span class="lab timer' + (left < 60000 ? " low" : "") + '" id="exam-timer">' + fmtLeft(left) + "</span></div>" +
      '<div class="cut qcard"><p>' + esc(Q.q) + "</p></div>" +
      '<div style="display:flex;flex-direction:column;gap:10px">' + opts + "</div>" +
      '<div class="row"><button class="btn lab push" data-act="examNav" data-d="-1"' + (Z.i === 0 ? " disabled" : "") + ">Prev</button>" +
      '<button class="btn pink lab push" data-act="examNav" data-d="1"' + (Z.i + 1 >= Z.set.length ? " disabled" : "") + ">Next</button>" +
      '<span class="grow"></span><button class="btn acid lab push" data-act="examSubmit">Submit exam</button></div>' + grid;
  }
  function modePills(Z, list) {
    return '<div class="row">' + list.filter(Boolean).map(function (m) {
      return '<button class="btn pill push' + (Z && Z.mode === m[0] ? " on" : " quiet") + '" data-act="quizMode" data-m="' + m[0] + '">' + m[1] + "</button>";
    }).join("") + "</div>";
  }
  function viewQuiz(ctx) {
    var st = ctx.st, base = ctx.base();
    var missedHere = base.filter(isMissed).length, head;
    if (ctx.c) {
      if (!st.quiz) startQuiz(st, base, "all");
      var dueHere = srsDue("q", base).length;
      head = '<div class="spread">' + unitSelect(ctx.c, st.quizUnit, "quizUnit") + '<span class="lab muted">' + (P(ctx.id).quizBest != null ? "Best full quiz " + P(ctx.id).quizBest + "%" : "") + "</span></div>" +
        modePills(st.quiz, [["all", "In order"], ["shuffle", "Shuffled"], missedHere ? ["missed", "Missed (" + missedHere + ")"] : null, dueHere ? ["due", "Due today (" + dueHere + ")"] : null, ["exam", "Timed exam"]]);
    } else {
      head = '<div class="spread"><span class="lab">Questions from every class</span></div>' +
        modePills(st.quiz, [["daily", "Daily mix (" + dailyQuiz().length + ")"], missedHere ? ["missed", "All missed (" + missedHere + ")"] : null, ["exam", "Timed exam"]]);
      if (!st.quiz) return '<section class="narrow">' + head + '<div class="cut qcard"><p>Pick a set above to start.</p></div></section>';
    }
    var Z = st.quiz, multi = !ctx.c;
    if (Z.setup) return '<section class="narrow">' + head + examSetup(st, base) + "</section>";
    if (Z.exam && !Z.done) return '<section class="narrow">' + head + examView(Z) + "</section>";
    if (!Z.set.length) return '<section class="narrow">' + head + '<div class="cut qcard"><p>' + (Z.mode === "missed" ? "Nothing missed here." : Z.mode === "due" || Z.mode === "daily" ? "Nothing due right now." : "No questions tagged to this unit yet.") + "</p></div></section>";
    if (Z.done) {
      var again = base.filter(isMissed).length;
      return '<section class="narrow">' + head + '<div class="cut results"><span class="lab">Final score</span>' +
        '<span class="score-big">' + Z.score + "<small> / " + Z.set.length + "</small></span>" +
        (Z.timeUp ? '<span class="lab" style="color:#b3381a">Time ran out. Unanswered questions count as missed.</span>' : "") +
        '<span style="font-size:20px;font-weight:600">' + Z.wrong.length + " missed this round. They’re saved under Missed.</span>" +
        breakdown(Z.res, multi) +
        '<div class="row">' + (again ? '<button class="btn pink lab push" data-act="quizMode" data-m="missed">Retry missed</button>' : "") +
        (ctx.c ? '<button class="btn ink lab push" data-act="quizMode" data-m="shuffle">Shuffle and restart</button>' : '<button class="btn ink lab push" data-act="quizMode" data-m="daily">New daily mix</button>') +
        '<button class="btn ink lab push" data-act="quizMode" data-m="exam">New timed exam</button></div></div>' +
        (Z.exam ? examReview(Z) : "") + "</section>";
    }
    var r = Z.set[Z.i], Q = qOf(r), answered = Z.pick >= 0, right = answered && Z.pick === Q.a;
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
    var uTag = typeof Q.unit === "number" ? '<span class="lab muted">' + esc(unitLabel(r, multi)) + "</span>" : "";
    return '<section class="narrow">' + head +
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
      var open = !!S.open[i], hk = hash(h.title);
      return '<article class="cut hypo"><h3 class="headline">' + esc(h.title) + "</h3><p>" + esc(h.facts) + '</p><p style="font-weight:700">' + esc(h.ask) + "</p>" +
        '<label class="lab" for="hy' + i + '">Your answer (saves in this browser)</label><textarea id="hy' + i + '" rows="5" data-save="hypo" data-hc="' + id + '" data-hk="' + hk + '" placeholder="Write your issues and analysis before revealing">' + esc(p.hypo[hk] || "") + "</textarea>" +
        '<div><button class="btn ink lab push" data-act="hypo" data-i="' + i + '">' + (open ? "Hide model answer" : "Show model answer") + "</button></div>" +
        (open ? "<ol>" + h.answer.map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("") + "</ol>" : "") + "</article>";
    }).join("");
    return '<section style="display:flex;flex-direction:column;gap:24px">' + pills(c.drills.map(function (d) { return esc(d.title); }), dk, "drill") +
      '<div class="narrow">' + inner + "</div>" +
      '<div style="display:flex;flex-direction:column;gap:8px;border-top:3px solid #f3ead8;padding-top:24px"><div class="lab" style="color:' + esc(hue) + '">Practice hypos · answer before revealing</div><h2 class="h2">Issue spotters</h2></div>' +
      '<div class="g2">' + hypos + "</div></section>";
  }

  /* ---------- daily review (all classes) ---------- */
  function renderStudy(tab) {
    document.title = "Daily review · " + (SITE.title || "Review");
    var tabs = STUDY_TABS.map(function (t) {
      return '<a class="btn tab lab push' + (t[0] === tab ? " on" : "") + '" href="#/study/' + t[0] + '"' + (t[0] === tab ? ' aria-current="page"' : "") + ">" + t[1] + "</a>";
    }).join("");
    var body = tab === "cards" ? viewCards(cardCtx()) : tab === "quiz" ? viewQuiz(quizCtx()) : studyToday();
    app.innerHTML = '<div class="wrap">' + topNav("") +
      '<header class="hero"><div class="hero-text"><div class="lab muted">All classes</div><h1 class="poster">Daily<br><span style="color:#3dff5a">Review</span></h1>' +
      "<p class=\"subhead\">Today’s study plan, flashcards due, missed questions, and sections left to read, from every class in one place.</p></div></header>" +
      '<nav class="tabs" aria-label="Daily review modes">' + tabs + "</nav>" + body + "</div>";
  }
  function studyToday() {
    var cardsN = ORDER.reduce(function (a, id) { return a + srsDue("c", courseRefs(id, "c", -1), 10).length; }, 0);
    var quizN = dailyQuiz().length, missedN = missedAll().length;
    var shaky = [];
    ORDER.forEach(function (id) {
      var c = COURSES[id], p = P(id);
      c.units.forEach(function (u, ui) { if (p.conf[hash(u.title)] === "shaky") shaky.push('<li><a href="#/' + id + '/review" data-act="goUnit" data-id="' + id + '" data-u="' + ui + '">' + esc(c.title + " · " + u.title) + "</a></li>"); });
    });
    var unread = ORDER.map(function (id) {
      var sc = sectionCounts(COURSES[id], P(id)), left = sc.total - sc.done;
      return '<li><span>' + esc(COURSES[id].title) + ": " + left + " of " + sc.total + " sections unchecked</span>" +
        (left ? ' <button class="linkbtn-ink lab" data-act="goNext" data-id="' + id + '">Next unchecked</button>' : "") + "</li>";
    }).join("");
    return '<section style="display:flex;flex-direction:column;gap:32px"><div class="g3">' +
      '<div class="cut study-card"><span class="lab">Flashcards</span><span class="big-num">' + cardsN + "</span><p>Cards due today plus up to 10 new cards per class.</p>" +
      '<div><button class="btn ink lab push" data-act="dailyCards"' + (cardsN ? "" : " disabled") + ">Start flashcards</button></div></div>" +
      '<div class="cut study-card"><span class="lab">Quiz</span><span class="big-num">' + quizN + "</span><p>Every missed question plus questions due today, up to 25.</p>" +
      '<div class="row"><button class="btn ink lab push" data-act="dailyQuizGo"' + (quizN ? "" : " disabled") + ">Start daily quiz</button>" +
      (missedN ? '<button class="btn ink-o lab push" data-act="missedAll">All missed (' + missedN + ")</button>" : "") +
      '<button class="btn ink-o lab push" data-act="studyExam">Timed exam</button></div></div>' +
      '<div class="cut study-card"><span class="lab">Go back to</span>' +
      (shaky.length ? '<span class="lab muted-dark">Units rated Shaky</span><ul class="plain-list">' + shaky.join("") + "</ul>" : '<p>No units rated Shaky.</p>') +
      '<span class="lab muted-dark">Sections left to read</span><ul class="plain-list">' + unread + "</ul></div>" +
      "</div>" +
      '<div style="display:flex;flex-direction:column;gap:16px"><h2 class="h2">Study plan</h2>' +
      '<p class="muted" style="margin:0">Unfinished units are spread over the days left before each exam, with the last day kept for review. A unit counts as finished when every section is checked off or you rate it Solid.</p>' +
      '<div class="g3">' + planCards(true) + "</div></div></section>";
  }

  /* ---------- actions ---------- */
  function act(name, el) {
    var r = route(), id = r.course, c = id ? COURSES[id] : null, p = id ? P(id) : null;
    var n = function (a) { return parseInt(el.getAttribute(a), 10); };
    switch (name) {
      case "reset":
        if (window.confirm("Reset all saved progress on this browser?")) { store = { _ui: store._ui }; save(); }
        break;
      case "size": { var u = UI(); u.size = Math.max(0, Math.min(SIZES.length - 1, u.size + n("data-d"))); break; }
      case "plain": UI().plain = !UI().plain; break;
      case "backupCopy": {
        var code = encodeStore(), ta = document.getElementById("bk");
        if (ta) ta.value = code;
        var fallback = function () { if (ta) { ta.focus(); ta.select(); } toast("The code is in the box. Copy it, then paste it on the other device."); };
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(code).then(function () { toast("Backup code copied. Paste it on the other device."); }, fallback);
        else fallback();
        return;
      }
      case "backupFile": {
        var blob = new Blob([encodeStore()], { type: "text/plain" }), a = document.createElement("a");
        a.href = URL.createObjectURL(blob); a.download = "fall-review-backup-" + dayStr(0) + ".txt";
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
        return;
      }
      case "backupRestore": { var t2 = document.getElementById("bk"); restoreFrom(t2 ? t2.value : ""); return; }
      case "print": window.print(); return;
      case "goResult": {
        var res = S.results && S.results[n("data-i")];
        if (res && typeof res.unit === "number") { P(res.id).unit = res.unit; save(); }
        location.hash = el.getAttribute("href");
        return;
      }
      case "goUnit": { var gid = el.getAttribute("data-id"); P(gid).unit = n("data-u"); save(); pendingScroll = ".unit-head"; go("#/" + gid + "/review"); return; }
      case "goNext": {
        var nid = el.getAttribute("data-id"), np = P(nid), nx = nextUnchecked(COURSES[nid], np, 0, -1);
        if (!nx) { toast("Every section in this class is checked off."); return; }
        np.unit = nx.u; save();
        pendingOpen = { id: nid, key: nx.u + ":" + nx.b, scroll: "#b-" + nx.b };
        if (lastCourse === nid) { S.openBlocks[pendingOpen.key] = true; pendingScroll = pendingOpen.scroll; pendingOpen = null; }
        go("#/" + nid + "/review");
        return;
      }
      case "missedAll": startQuiz(SS, allRefs("q"), "missed"); save(); go("#/study/quiz"); return;
      case "dailyQuizGo": startQuiz(SS, allRefs("q"), "daily"); save(); go("#/study/quiz"); return;
      case "studyExam": startQuiz(SS, allRefs("q"), "exam"); go("#/study/quiz"); return;
      case "dailyCards": {
        var dc = dailyCards();
        if (!dc.length) { toast("No flashcards due right now."); return; }
        SS.deck = dc; SS.deckMode = "Daily"; SS.card = 0; SS.flip = false;
        go("#/study/cards");
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
      case "done": {
        var bi = n("data-b"), U = c.units[p.unit], dk2 = doneKey(U, U.blocks[bi]);
        if (p.done[dk2]) delete p.done[dk2];
        else {
          p.done[dk2] = 1;
          if (p.hideDone) {
            var nb = null;
            for (var j = bi + 1; j < U.blocks.length; j++) if (!p.done[doneKey(U, U.blocks[j])]) { nb = j; break; }
            pendingScroll = nb != null ? "#b-" + nb : "#ratebox";
          }
        }
        break;
      }
      case "closeBlock": S.openBlocks[p.unit + ":" + n("data-b")] = false; pendingScroll = "#b-" + n("data-b"); break;
      case "nextUnchecked": {
        var from = n("data-b"), hit = nextUnchecked(c, p, p.unit, from);
        if (from >= 0) S.openBlocks[p.unit + ":" + from] = false;
        if (!hit) { toast("Every section in this class is checked off."); break; }
        if (hit.u !== p.unit) toast("Moved to unit " + (hit.u + 1) + ": " + c.units[hit.u].title);
        p.unit = hit.u; S.openBlocks[hit.u + ":" + hit.b] = true; pendingScroll = "#b-" + hit.b;
        break;
      }
      case "hideDone": p.hideDone = !p.hideDone; break;
      case "hl": {
        var hk = el.getAttribute("data-hk"), hc = el.getAttribute("data-hc");
        if (!lastSel || lastSel.hk !== hk) { toast("Select some words in this section first, then press Highlight."); return; }
        var pieces = lastSel.text.split(/\s*\n\s*/).map(function (s) { return s.trim(); }).filter(function (s) { return s.length >= 2; });
        var hp = P(hc), hl = hp.hl[hk] = hp.hl[hk] || [];
        pieces.forEach(function (s) { if (hl.indexOf(s) < 0) hl.push(s); });
        lastSel = null;
        try { window.getSelection().removeAllRanges(); } catch (e) { /* ignore */ }
        save();
        var y0 = window.scrollY; render(); window.scrollTo(0, y0);
        if (lastPruned) toast("Part of that selection could not be highlighted. Highlight within one bullet or heading at a time.");
        return;
      }
      case "hlClear": delete P(el.getAttribute("data-hc")).hl[el.getAttribute("data-hk")]; break;
      case "unhl": {
        var sel0 = window.getSelection && window.getSelection();
        if (sel0 && !sel0.isCollapsed) return;
        var up = P(el.getAttribute("data-hc")), uk = el.getAttribute("data-hk"), term = el.getAttribute("data-t");
        up.hl[uk] = (up.hl[uk] || []).filter(function (x) { return x !== term; });
        if (!up.hl[uk].length) delete up.hl[uk];
        break;
      }
      case "map": p.map = n("data-i"); break;
      case "expandAll": p.expandAll = !p.expandAll; S.openBlocks = {}; break;
      case "jump": {
        var tgt = el.getAttribute("data-target");
        var m = /^b-(\d+)$/.exec(tgt);
        if (m) {
          S.openBlocks[p.unit + ":" + m[1]] = true;
          var JU = c.units[p.unit];
          if (p.hideDone && p.done[doneKey(JU, JU.blocks[+m[1]])]) p.hideDone = false;
        }
        pendingScroll = "#" + tgt;
        break;
      }
      case "flip": { var cx = cardCtx(); cx.st.flip = !cx.st.flip; break; }
      case "cardStep": cardMove(cardCtx(), n("data-d")); break;
      case "gotit": case "again": {
        var cx2 = cardCtx(), deck = deckOf(cx2), ref = deck[cx2.st.card];
        if (!ref) break;
        var cp = P(ref.id), kk = cardKey(ref);
        cp.again = cp.again.filter(function (x) { return x !== kk; });
        if (name === "again") cp.again.push(kk);
        grade("c", ref, name === "gotit");
        cardMove(cx2, 1);
        break;
      }
      case "cardShuffle": { var cx3 = cardCtx(); cx3.st.deck = shuffle(deckOf(cx3)); cx3.st.deckMode = cx3.c ? "Shuffled" : "Daily · shuffled"; cx3.st.card = 0; cx3.st.flip = false; break; }
      case "againOnly": {
        S.deck = courseRefs(id, "c", -1).filter(inAgain);
        S.deckMode = "Again pile"; S.card = 0; S.flip = false; break;
      }
      case "dueCards": {
        var due = srsDue("c", courseRefs(id, "c", S.cardUnit));
        if (!due.length) { toast("No cards due right now."); return; }
        S.deck = shuffle(due); S.deckMode = "Due today"; S.card = 0; S.flip = false; break;
      }
      case "fullDeck": S.deck = null; S.deckMode = "Full deck"; S.card = 0; S.flip = false; break;
      case "quizMode": { var q1 = quizCtx(); startQuiz(q1.st, q1.base(), el.getAttribute("data-m")); pendingScroll = ".tabs"; break; }
      case "pick": pick(quizCtx(), n("data-o")); break;
      case "next": nextQ(quizCtx()); break;
      case "examStart": { var q2 = quizCtx(); examStart(q2.st, q2.base()); break; }
      case "examPick": { var Z1 = quizCtx().st.quiz; if (Z1 && Z1.exam && !Z1.done) Z1.answers[Z1.i] = n("data-o"); break; }
      case "examNav": { var Z2 = quizCtx().st.quiz; if (Z2 && Z2.exam) Z2.i = Math.max(0, Math.min(Z2.set.length - 1, Z2.i + n("data-d"))); break; }
      case "examGo": { var Z3 = quizCtx().st.quiz; if (Z3 && Z3.exam) Z3.i = n("data-i"); break; }
      case "examSubmit": {
        var q3 = quizCtx(), Z4 = q3.st.quiz;
        if (!Z4 || !Z4.exam) break;
        var blank = Z4.answers.filter(function (a) { return a < 0; }).length;
        if (blank && !window.confirm(blank + " unanswered. Submit anyway? Unanswered questions count as missed.")) return;
        examSubmit(q3.st, false);
        pendingScroll = ".tabs";
        break;
      }
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
          var hk2 = hash(D2.title);
          p.drillBest[hk2] = Math.max(p.drillBest[hk2] || 0, S.dr.score);
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
  function scrollToEl(sel) {
    var el = document.querySelector(sel);
    if (!el) return;
    var top = el.getBoundingClientRect().top + window.scrollY - 16;
    window.scrollTo(0, Math.max(0, top));
  }

  app.addEventListener("click", function (e) {
    var el = e.target.closest("[data-act]");
    if (el && !el.disabled) { e.preventDefault(); act(el.getAttribute("data-act"), el); }
  });
  app.addEventListener("change", function (e) {
    var f = e.target.closest("[data-file]");
    if (f) {
      var file = f.files && f.files[0];
      if (!file) return;
      var rd = new FileReader();
      rd.onload = function () { restoreFrom(String(rd.result || "")); };
      rd.readAsText(file);
      f.value = "";
      return;
    }
    var el = e.target.closest("[data-change]");
    if (!el) return;
    var v = parseFloat(el.value), what = el.getAttribute("data-change");
    if (what === "quizUnit") { S.quizUnit = v; var q = quizCtx(); startQuiz(S, q.base(), "all"); }
    if (what === "cardUnit") { S.cardUnit = v; S.deck = null; S.deckMode = "Full deck"; S.card = 0; S.flip = false; }
    if (what === "examN") curState().examN = v;
    if (what === "examMin") curState().examMin = v;
    var y5 = window.scrollY; render(); window.scrollTo(0, y5);
  });
  function curState() { return route().study ? SS : S; }
  app.addEventListener("toggle", function (e) {
    var d = e.target;
    if (!d.matches || !d.matches("details.block")) return;
    S.openBlocks[d.getAttribute("data-key")] = d.open;
  }, true);
  var searchTimer = null, saveTimer = null;
  app.addEventListener("input", function (e) {
    var t = e.target;
    if (t.id === "q") {
      clearTimeout(searchTimer);
      var val = t.value;
      searchTimer = setTimeout(function () { location.hash = "#/search/" + encodeURIComponent(val); }, 250);
      return;
    }
    var kind = t.getAttribute && t.getAttribute("data-save");
    if (!kind || !COURSES[t.getAttribute("data-hc")]) return;
    var sp = P(t.getAttribute("data-hc")), bag = kind === "note" ? sp.notes : sp.hypo, key = t.getAttribute("data-hk");
    if (t.value.trim()) bag[key] = t.value; else delete bag[key];
    clearTimeout(saveTimer);
    saveTimer = setTimeout(save, 300);
  });
  window.addEventListener("pagehide", save);
  app.addEventListener("submit", function (e) {
    var f = e.target.closest("[data-form=search]");
    if (!f) return;
    e.preventDefault();
    location.hash = "#/search/" + encodeURIComponent(f.q.value);
  });
  // remember the last text selected inside a section so the Highlight button can use it (tapping a button can clear the selection)
  document.addEventListener("selectionchange", function () {
    var sel = window.getSelection();
    if (!sel || sel.isCollapsed || !sel.rangeCount) return;
    var node = sel.anchorNode, el = node && (node.nodeType === 1 ? node : node.parentElement);
    var zone = el && el.closest && el.closest(".hl-zone");
    if (!zone || zone.hasAttribute("data-static")) return;
    var txt = sel.toString().trim();
    if (txt.length < 2) return;
    lastSel = { hk: zone.getAttribute("data-hk"), hc: zone.getAttribute("data-hc"), text: txt };
  });
  document.addEventListener("keydown", function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var typing = /INPUT|TEXTAREA|SELECT/.test((document.activeElement || {}).tagName || "");
    if (typing) return;
    if (e.key === "/") { e.preventDefault(); location.hash = "#/search/"; return; }
    var r = route();
    if (!r.course && !r.study) return;
    var y = window.scrollY;
    if (r.tab === "cards") {
      var cx = cardCtx();
      if (!deckOf(cx).length) return;
      if (e.key === " ") { e.preventDefault(); cx.st.flip = !cx.st.flip; render(); }
      else if (e.key === "ArrowRight") { cardMove(cx, 1); render(); }
      else if (e.key === "ArrowLeft") { cardMove(cx, -1); render(); }
      window.scrollTo(0, y);
    } else if (r.tab === "quiz") {
      var qc = quizCtx(), Z = qc.st.quiz;
      if (!Z || Z.done || Z.setup) return;
      var num = parseInt(e.key, 10);
      if (Z.exam) {
        var order = Z.orders[Z.i];
        if (num >= 1 && num <= order.length) { Z.answers[Z.i] = order[num - 1]; render(); window.scrollTo(0, y); }
        else if (e.key === "Enter" || e.key === "ArrowRight") { e.preventDefault(); Z.i = Math.min(Z.set.length - 1, Z.i + 1); render(); window.scrollTo(0, y); }
        else if (e.key === "ArrowLeft") { Z.i = Math.max(0, Z.i - 1); render(); window.scrollTo(0, y); }
        return;
      }
      if (num >= 1 && num <= Z.order.length) { pick(qc, Z.order[num - 1]); save(); render(); window.scrollTo(0, y); }
      else if (e.key === "Enter" && Z.pick >= 0) { e.preventDefault(); nextQ(qc); save(); render(); window.scrollTo(0, y); if (pendingScroll) { scrollToEl(pendingScroll); pendingScroll = null; } }
    }
  });
  // exam countdown
  setInterval(function () {
    var r = route();
    if (r.tab !== "quiz" || (!r.course && !r.study)) return;
    var st = curState(), Z = st.quiz;
    if (!Z || !Z.exam || Z.done) return;
    var left = Z.endAt - Date.now(), t = document.getElementById("exam-timer");
    if (left <= 0) { examSubmit(st, true); render(); scrollToEl(".tabs"); return; }
    if (t) { t.textContent = fmtLeft(left); t.classList.toggle("low", left < 60000); }
  }, 1000);

  /* ---------- render ---------- */
  function render() {
    applyUI();
    var r = route();
    if (r.search !== undefined) renderSearch(r.search);
    else if (r.study) renderStudy(STUDY_TABS.some(function (t) { return t[0] === r.tab; }) ? r.tab : "today");
    else if (!r.course) renderHub();
    else if (r.tab === "print") renderPrint(r.course, r.arg);
    else renderCourse(r.course, TABS.some(function (t) { return t[0] === r.tab; }) ? r.tab : "review");
    applyHighlights();
  }
  function routeKey(r) { return r.search !== undefined ? "search" : r.study ? "study/" + r.tab : (r.course || "") + "/" + r.tab; }
  var last = null;
  window.addEventListener("hashchange", function () {
    var r = route(), key = routeKey(r);
    var grp = key.split("/")[0];
    var same = last && grp && key !== "search" && r.tab !== "print" && last.split("/")[0] === grp && last.split("/")[1] !== "print";
    var y = window.scrollY;
    last = key;
    render();
    if (key === "search") return;
    if (same) { window.scrollTo(0, y); var tb = document.querySelector(".tabs"); if (tb && tb.getBoundingClientRect().top < 0) scrollToEl(".tabs"); }
    else window.scrollTo(0, 0);
    if (pendingScroll) { scrollToEl(pendingScroll); pendingScroll = null; }
  });
  last = routeKey(route());
  render();
})();
