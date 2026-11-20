// ACCA FA 入門 — app logic (vanilla JS, no build step).
// Content lives in content.js as window.ACCA_CONTENT.
(function () {
  'use strict';

  var C = window.ACCA_CONTENT;
  var app = document.getElementById('app');
  if (!C || !Array.isArray(C.lessons) || !Array.isArray(C.cards)) {
    app.innerHTML = '<p class="fatal">教材データを読み込めませんでした。</p>';
    return;
  }

  var KEY = 'acca-study-v1';
  var INTERVALS = [1, 3, 7, 30, 90];
  var cardById = {};
  C.cards.forEach(function (c) { cardById[c.id] = c; });

  // ---------- dates (local calendar) ----------
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function fmt(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function today() { return fmt(new Date()); }
  function parse(ymd) { var p = ymd.split('-').map(Number); return new Date(p[0], p[1] - 1, p[2]); }
  function addDays(ymd, n) { var d = parse(ymd); return fmt(new Date(d.getFullYear(), d.getMonth(), d.getDate() + n)); }
  function mdLabel(ymd) { var d = parse(ymd); return (d.getMonth() + 1) + '月' + d.getDate() + '日'; }
  function longDate(ymd) { var d = parse(ymd); return mdLabel(ymd) + '（' + '日月火水木金土'.charAt(d.getDay()) + '）'; }
  function dueLabel(ymd) {
    var t = today();
    if (ymd <= t) return '今日';
    if (ymd === addDays(t, 1)) return '明日（' + mdLabel(ymd) + '）';
    return mdLabel(ymd);
  }

  // ---------- persistence ----------
  var DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
  function load() {
    var s = null;
    try { s = JSON.parse(localStorage.getItem(KEY)); } catch (e) { s = null; }
    if (!s || typeof s !== 'object' || Array.isArray(s)) s = {};
    if (!s.completed || typeof s.completed !== 'object' || Array.isArray(s.completed)) s.completed = {};
    if (!s.cards || typeof s.cards !== 'object' || Array.isArray(s.cards)) s.cards = {};
    Object.keys(s.cards).forEach(function (id) {
      var c = s.cards[id];
      if (!c || typeof c !== 'object' || typeof c.due !== 'string' || !DATE_RE.test(c.due)) { delete s.cards[id]; return; }
      var st = Math.floor(Number(c.step));
      c.step = isFinite(st) ? Math.max(0, Math.min(INTERVALS.length - 1, st)) : 0;
    });
    return { completed: s.completed, cards: s.cards };
  }
  var state = load();
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* storage unavailable */ }
  }

  // ---------- scheduling ----------
  function rate(id, remembered) {
    var c = state.cards[id] || { step: 0, due: today() };
    if (remembered) {
      c.due = addDays(today(), INTERVALS[c.step]);
      c.step = Math.min(c.step + 1, INTERVALS.length - 1);
    } else {
      c.step = 0;
      c.due = addDays(today(), 1);
    }
    state.cards[id] = { step: c.step, due: c.due };
    save();
  }
  function byDue(a, b) {
    var da = state.cards[a].due, db = state.cards[b].due;
    return da < db ? -1 : da > db ? 1 : 0;
  }
  function deckIds() {
    return C.cards.filter(function (c) { return state.cards[c.id]; }).map(function (c) { return c.id; });
  }
  function dueIds() {
    var t = today();
    return deckIds().filter(function (id) { return state.cards[id].due <= t; });
  }

  // ---------- helpers ----------
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
    });
  }
  function langAttr(s) { return /^[\x20-\x7E]+$/.test(String(s)) ? ' lang="en"' : ''; }
  var ICON_CLOSE = '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';
  var ICON_OK = '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
  var ICON_NG = '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M7 7l10 10M17 7L7 17"/></svg>';
  function lessonNo(lesson) { return C.lessons.indexOf(lesson) + 1; }
  function $(sel) { return app.querySelector(sel); }
  function focusTitle() {
    var h = app.querySelector('h1');
    if (h) { h.setAttribute('tabindex', '-1'); try { h.focus({ preventScroll: true }); } catch (e) { h.focus(); } }
  }

  // ---------- view state & history ----------
  var view = 'home';
  var flow = null;
  var review = null;
  // A history entry is pushed when a lesson or review opens, so the phone's back
  // gesture returns to Home instead of leaving the app.
  var pushed = false;       // our entry is on top of the history stack
  var ignorePop = false;    // the next popstate comes from our own history.back()
  var pendingPush = false;  // a push requested while that back() is still in flight
  var firstRender = true;

  function doPush() {
    try { history.pushState({ acca: 1 }, ''); pushed = true; } catch (e) { pushed = false; }
  }
  function enterSubview() {
    if (pushed) return;
    if (ignorePop) { pendingPush = true; return; }
    doPush();
  }
  function goHome() {
    if (pushed) {
      pushed = false;
      ignorePop = true;
      try { history.back(); } catch (e) { ignorePop = false; }
    }
    pendingPush = false;
    renderHome();
  }
  window.addEventListener('popstate', function () {
    if (ignorePop) {
      ignorePop = false;
      if (pendingPush) { pendingPush = false; doPush(); }
      return;
    }
    pushed = false;
    if (view !== 'home') renderHome();
  });

  // ---------- home ----------
  function renderHome() {
    view = 'home'; flow = null; review = null;
    var t = today();
    var deck = deckIds();
    var due = dueIds();
    var next = null;
    for (var i = 0; i < C.lessons.length; i++) { if (!state.completed[C.lessons[i].id]) { next = C.lessons[i]; break; } }

    var h = '<main class="page home">';
    h += '<header class="home-head"><h1 class="app-title">ACCA FA 入門</h1><p class="today">' + esc(longDate(t)) + '</p></header>';

    h += '<section class="review-box" aria-label="復習">';
    if (due.length) {
      h += '<button type="button" class="btn btn-primary btn-big" data-act="review-due">今日の復習（' + due.length + '枚）</button>';
    } else {
      h += '<p class="review-done">今日の復習は終わりました</p>';
      if (deck.length) {
        h += '<button type="button" class="btn btn-secondary" data-act="review-all">全部のカードを復習する</button>';
      } else {
        h += '<p class="note">レッスンを終えると、ここに復習カードが追加されます。</p>';
      }
    }
    h += '</section>';

    h += '<section class="block" aria-labelledby="next-label"><h2 class="label" id="next-label">次のレッスン</h2>';
    if (next) {
      h += '<button type="button" class="next-card" data-lesson="' + esc(next.id) + '">' +
        '<span class="next-num">レッスン ' + lessonNo(next) + '</span>' +
        '<span class="next-title">' + esc(next.title) + '</span>' +
        '<span class="next-goal">' + esc(next.goal) + '</span>' +
        '<span class="next-foot"><span>' + esc(next.minutes) + '分</span><span class="next-go">はじめる</span></span>' +
        '</button>';
    } else {
      h += '<p class="all-done">すべてのレッスンを完了しました。復習を続けましょう。</p>';
    }
    h += '</section>';

    h += '<section class="block" aria-labelledby="list-label"><h2 class="label" id="list-label">レッスン一覧</h2><ul class="lesson-list">';
    C.lessons.forEach(function (l) {
      var done = !!state.completed[l.id];
      var meta = esc(l.minutes) + '分';
      if (done) {
        var dues = C.cards.filter(function (c) { return c.lesson === l.id && state.cards[c.id]; })
          .map(function (c) { return state.cards[c.id].due; }).sort();
        if (dues.length) meta += '<span class="nw review-line">次の復習 ' + esc(dueLabel(dues[0])) + '</span>';
      }
      var cls = 'lesson-row' + (done ? ' is-done' : '') + (next === l ? ' is-next' : '');
      h += '<li><button type="button" class="' + cls + '" data-lesson="' + esc(l.id) + '">' +
        '<span class="num" aria-hidden="true">' + lessonNo(l) + '</span>' +
        '<span class="row-main"><span class="row-title"><span class="sr-only">レッスン ' + lessonNo(l) + ' </span>' + esc(l.title) + '</span>' +
        '<span class="row-meta">' + meta + '</span></span>' +
        '<span class="badge">' + (done ? '完了' : '未学習') + '</span>' +
        '</button></li>';
    });
    h += '</ul></section>';

    h += '<footer class="home-foot"><button type="button" class="link-btn" data-act="reset">学習記録をリセット</button></footer>';
    h += '</main>';
    app.innerHTML = h;
    if (!firstRender) { window.scrollTo(0, 0); focusTitle(); }
    firstRender = false;
  }

  // ---------- lesson flow ----------
  function recallIds(lesson) {
    var idx = C.lessons.indexOf(lesson);
    var earlier = {};
    C.lessons.slice(0, idx).forEach(function (l) { if (state.completed[l.id]) earlier[l.id] = true; });
    var t = today();
    var pool = C.cards.filter(function (c) { return earlier[c.lesson] && state.cards[c.id]; }).map(function (c) { return c.id; });
    pool.sort(function (a, b) {
      var ad = state.cards[a].due <= t, bd = state.cards[b].due <= t;
      if (ad !== bd) return ad ? -1 : 1;
      return byDue(a, b);
    });
    return pool.slice(0, 3);
  }

  function startLesson(id) {
    var lesson = null;
    C.lessons.forEach(function (l) { if (l.id === id) lesson = l; });
    if (!lesson) return;
    var screens = [];
    if (lesson.recall) recallIds(lesson).forEach(function (cid, k, arr) { screens.push({ type: 'recall', cid: cid, k: k, n: arr.length }); });
    screens.push({ type: 'goal' });
    (lesson.slides || []).forEach(function (s, k, arr) { screens.push({ type: 'slide', s: s, k: k, n: arr.length }); });
    (lesson.quiz || []).forEach(function (q, k, arr) { screens.push({ type: 'quiz', q: q, k: k, n: arr.length }); });
    screens.push({ type: 'finish' });
    flow = { lesson: lesson, screens: screens, i: 0, answers: {}, rated: {}, revealed: {}, result: null };
    view = 'flow';
    enterSubview();
    renderFlow();
  }

  function cur() { return flow.screens[flow.i]; }

  function canGoNext() {
    var sc = cur();
    if (sc.type === 'quiz') return flow.answers[sc.k] !== undefined;
    if (sc.type === 'recall') return !!flow.rated[sc.cid];
    if (sc.type === 'finish') return false;
    return true;
  }

  function stepLabel(sc) {
    var no = 'レッスン ' + lessonNo(flow.lesson);
    if (sc.type === 'recall') return no + ' ・ 準備';
    if (sc.type === 'goal') return no;
    if (sc.type === 'slide') return no + ' ・ ' + (sc.k + 1) + ' / ' + sc.n;
    if (sc.type === 'quiz') return no + ' ・ 確認問題';
    return no + ' ・ 完了';
  }

  function slideHTML(s, k) {
    var h = '<div class="slide">';
    h += '<h1 class="screen-title">' + esc(s.title || ('スライド ' + (k + 1))) + '</h1>';
    (s.paras || []).forEach(function (p) { h += '<p>' + esc(p) + '</p>'; });
    if (s.list && s.list.length) h += '<ul>' + s.list.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
    if (s.numbered && s.numbered.length) h += '<ol>' + s.numbered.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ol>';
    if (s.after) h += '<p>' + esc(s.after) + '</p>';
    if (s.svg) h += '<div class="figure">' + s.svg + '</div>';
    if (s.caption) h += '<p class="caption">' + esc(s.caption) + '</p>';
    if (s.formula) h += '<div class="formula" role="note" aria-label="式"><span class="formula-label" aria-hidden="true">式</span><p class="formula-text"' + langAttr(s.formula) + '>' + esc(s.formula) + '</p></div>';
    if (s.words && s.words.length) {
      h += '<ul class="words">' + s.words.map(function (w) {
        return '<li class="word"><span class="w-en" lang="en">' + esc(w[0]) + '</span>' +
          (w[1] ? '<span class="w-read">' + esc(w[1]) + '</span>' : '') +
          '<span class="w-mean">' + esc(w[2]) + '</span></li>';
      }).join('') + '</ul>';
    }
    h += '</div>';
    return h;
  }

  // flashcard markup shared by recall and review
  function cardFaceHTML(cid, revealed) {
    var c = cardById[cid];
    if (!revealed) {
      return '<button type="button" class="flashcard" data-act="reveal" aria-label="問題: ' + esc(c.q) + '。タップして答えを見る">' +
        '<span class="fc-label" aria-hidden="true">問題</span>' +
        '<span class="fc-q" aria-hidden="true">' + esc(c.q) + '</span>' +
        '<span class="fc-hint" aria-hidden="true">タップして答えを見る</span></button>';
    }
    return '<div class="flashcard is-open">' +
      '<span class="fc-label">問題</span><p class="fc-q">' + esc(c.q) + '</p>' +
      '<div class="fc-answer"><span class="fc-label">答え</span><p class="fc-a">' + esc(c.a) + '</p></div></div>';
  }
  function recallActionsHTML(sc) {
    var rated = flow.rated[sc.cid];
    if (rated) return '<p class="rated">記録しました: ' + esc(rated) + '</p>';
    if (!flow.revealed[sc.cid]) return '<div class="fc-actions"><button type="button" class="btn btn-secondary" data-act="reveal">答えを見る</button></div>';
    return '<div class="fc-actions two"><button type="button" class="btn btn-ng" data-act="rate" data-ok="0">まだ</button>' +
      '<button type="button" class="btn btn-ok" data-act="rate" data-ok="1">覚えた</button></div>';
  }

  function quizHTML(sc) {
    var q = sc.q;
    var ans = flow.answers[sc.k];
    var answered = ans !== undefined;
    var h = '<p class="kicker">確認問題 ' + (sc.k + 1) + ' / ' + sc.n + '</p>';
    h += '<h1 class="screen-title q-text"' + langAttr(q.q) + '>' + esc(q.q) + '</h1>';
    h += '<div class="choices' + (answered ? ' answered' : '') + '" role="group" aria-label="選択肢">';
    q.choices.forEach(function (ch, ci) {
      h += choiceHTML(q, ci, ans);
    });
    h += '</div>';
    h += '<div class="feedback" aria-live="polite">' + (answered ? feedbackHTML(q, ans) : '') + '</div>';
    return h;
  }
  function choiceHTML(q, ci, ans) {
    var answered = ans !== undefined;
    var cls = 'choice', result = '';
    if (answered) {
      if (ci === q.answer) { cls += ' is-correct'; result = ICON_OK + '正解'; }
      else if (ci === ans) { cls += ' is-wrong'; result = ICON_NG + 'あなたの答え'; }
    }
    return '<button type="button" class="' + cls + '" data-act="choose" data-c="' + ci + '"' + (answered ? ' disabled' : '') + '>' +
      '<span class="choice-mark" aria-hidden="true">' + 'ABCDEFGH'.charAt(ci) + '</span>' +
      '<span class="choice-text"' + langAttr(q.choices[ci]) + '>' + esc(q.choices[ci]) + '</span>' +
      '<span class="choice-result">' + result + '</span></button>';
  }
  function feedbackHTML(q, ans) {
    var ok = ans === q.answer;
    var h = ok
      ? '<p class="fb-title ok">' + ICON_OK + '正解です</p>'
      : '<p class="fb-title ng">' + ICON_NG + '不正解です</p><p class="fb-correct">正解は「' + esc(q.choices[q.answer]) + '」です。</p>';
    if (q.explain) h += '<p class="fb-explain">' + esc(q.explain) + '</p>';
    return h;
  }

  function finishLesson() {
    if (flow.result) return flow.result;
    var l = flow.lesson;
    var correct = 0, total = (l.quiz || []).length;
    (l.quiz || []).forEach(function (q, k) { if (flow.answers[k] === q.answer) correct++; });
    if (!state.completed[l.id]) state.completed[l.id] = today();
    var added = 0, tomorrow = addDays(today(), 1);
    C.cards.forEach(function (c) {
      if (c.lesson === l.id && !state.cards[c.id]) { state.cards[c.id] = { step: 0, due: tomorrow }; added++; }
    });
    save();
    flow.result = { correct: correct, total: total, added: added };
    return flow.result;
  }

  function renderFlow() {
    var f = flow, sc = cur(), total = f.screens.length;
    var pct = total > 1 ? Math.round(f.i / (total - 1) * 100) : 100;
    var body = '';
    var isFinish = sc.type === 'finish';

    if (sc.type === 'recall') {
      body = '<p class="kicker">前のレッスンのカード ' + (sc.k + 1) + ' / ' + sc.n + '</p><h1 class="screen-title">まず思い出す</h1>' +
        '<div class="fc-wrap" aria-live="polite">' + cardFaceHTML(sc.cid, !!f.revealed[sc.cid]) + '</div>' +
        '<div class="fc-ctrl">' + recallActionsHTML(sc) + '</div>';
    } else if (sc.type === 'goal') {
      body = '<p class="kicker">レッスン ' + lessonNo(f.lesson) + '</p><h1 class="screen-title">' + esc(f.lesson.title) + '</h1>' +
        '<div class="goal-card"><p class="label">今日のゴール</p><p class="goal-text">' + esc(f.lesson.goal) + '</p>' +
        '<p class="goal-min">目安 ' + esc(f.lesson.minutes) + '分</p></div>' +
        '<p class="hint">「次へ」または左にスワイプで進みます。</p>';
    } else if (sc.type === 'slide') {
      body = slideHTML(sc.s, sc.k);
    } else if (sc.type === 'quiz') {
      body = quizHTML(sc);
    } else {
      var r = finishLesson();
      body = '<div class="result"><p class="kicker">レッスン ' + lessonNo(f.lesson) + '</p><h1 class="screen-title">レッスン完了</h1>' +
        '<div class="score"><span class="score-num">' + r.correct + ' / ' + r.total + '</span><span class="score-sub">確認問題の正解数</span></div>' +
        '<p class="result-msg">' + (r.added
          ? '復習カードに追加しました（' + r.added + '枚）。明日から「今日の復習」に出てきます。'
          : 'このレッスンの復習カードは、すでに追加されています。') + '</p>' +
        '<button type="button" class="btn btn-primary btn-big" data-act="home">ホームに戻る</button></div>';
    }

    var h = '<div class="topbar"><div class="progress" role="progressbar" aria-label="進み具合" aria-valuemin="0" aria-valuemax="' + (total - 1) +
      '" aria-valuenow="' + f.i + '"><span style="width:' + pct + '%"></span></div>' +
      '<div class="topbar-row"><span class="step-label">' + esc(stepLabel(sc)) + '</span>' +
      '<button type="button" class="icon-btn" data-act="close" aria-label="閉じてホームに戻る">' + ICON_CLOSE + '</button></div></div>';
    h += '<main class="page flow-page' + (isFinish ? ' no-nav' : '') + '" id="screen">' + body + '</main>';
    if (!isFinish) {
      h += '<nav class="bottom-nav" aria-label="ページ移動"><div class="nav-inner">' +
        '<button type="button" class="btn btn-secondary" data-act="prev"' + (f.i === 0 ? ' disabled' : '') + '>戻る</button>' +
        '<button type="button" class="btn btn-primary" data-act="next"' + (canGoNext() ? '' : ' disabled') + '>次へ</button>' +
        '</div></nav>';
    }
    app.innerHTML = h;
    window.scrollTo(0, 0);
    focusTitle();
  }

  function go(d) {
    if (!flow) return;
    var ni = flow.i + d;
    if (ni < 0 || ni >= flow.screens.length) return;
    if (cur().type === 'finish') return;
    if (d > 0 && !canGoNext()) return;
    flow.i = ni;
    renderFlow();
  }

  function answerQuiz(ci) {
    var sc = cur();
    if (sc.type !== 'quiz' || flow.answers[sc.k] !== undefined) return;
    flow.answers[sc.k] = ci;
    var q = sc.q;
    var box = $('.choices');
    box.classList.add('answered');
    box.innerHTML = q.choices.map(function (_, i) { return choiceHTML(q, i, ci); }).join('');
    var fb = $('.feedback');
    fb.innerHTML = feedbackHTML(q, ci);
    var nb = $('[data-act="next"]');
    if (nb) { nb.disabled = false; try { nb.focus({ preventScroll: true }); } catch (e) { nb.focus(); } }
    if (fb.scrollIntoView) fb.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  function revealRecall() {
    var sc = cur();
    if (sc.type !== 'recall' || flow.revealed[sc.cid]) return;
    flow.revealed[sc.cid] = true;
    $('.fc-wrap').innerHTML = cardFaceHTML(sc.cid, true);
    $('.fc-ctrl').innerHTML = recallActionsHTML(sc);
    var b = $('[data-act="rate"][data-ok="1"]');
    if (b) { try { b.focus({ preventScroll: true }); } catch (e) { b.focus(); } }
  }

  function rateRecall(ok) {
    var sc = cur();
    if (sc.type !== 'recall' || flow.rated[sc.cid] || !flow.revealed[sc.cid]) return;
    rate(sc.cid, ok);
    flow.rated[sc.cid] = ok ? '覚えた' : 'まだ';
    go(1);
  }

  // ---------- review ----------
  function startReview(all) {
    var ids = all ? deckIds() : dueIds();
    ids.sort(byDue);
    review = { queue: ids, idx: 0, reshown: {}, first: {}, revealed: false, all: !!all };
    view = 'review';
    enterSubview();
    renderReview();
  }

  function renderReview() {
    var r = review;
    var left = r.queue.length - r.idx;
    var total = r.queue.length;
    var pct = total ? Math.round(r.idx / total * 100) : 100;
    var h = '<div class="topbar"><div class="progress" role="progressbar" aria-label="進み具合" aria-valuemin="0" aria-valuemax="' + total +
      '" aria-valuenow="' + r.idx + '"><span style="width:' + pct + '%"></span></div>' +
      '<div class="topbar-row"><span class="step-label">' + (r.all ? '全部のカードを復習' : '今日の復習') + '</span>' +
      '<button type="button" class="icon-btn" data-act="close" aria-label="閉じてホームに戻る">' + ICON_CLOSE + '</button></div></div>';

    if (left <= 0) {
      var ok = 0, ng = 0;
      Object.keys(r.first).forEach(function (id) { if (r.first[id]) ok++; else ng++; });
      h += '<main class="page flow-page no-nav"><div class="result"><h1 class="screen-title">今日の復習は終わり</h1>' +
        '<div class="score"><div class="score-row"><div><span class="score-num">' + ok + '</span><br><span class="score-sub">覚えた</span></div>' +
        '<div><span class="score-num">' + ng + '</span><br><span class="score-sub">まだ</span></div></div></div>' +
        '<p class="result-msg">' + (ng ? '「まだ」のカードは明日もう一度出てきます。' : 'おつかれさまでした。次の復習日に、また出てきます。') + '</p>' +
        '<button type="button" class="btn btn-primary btn-big" data-act="home">ホームに戻る</button></div></main>';
    } else {
      var id = r.queue[r.idx];
      h += '<main class="page flow-page"><p class="kicker">残り ' + left + '枚</p><h1 class="sr-only">復習カード</h1>' +
        '<div class="fc-wrap" aria-live="polite">' + cardFaceHTML(id, r.revealed) + '</div></main>';
      h += '<nav class="bottom-nav" aria-label="復習の操作"><div class="nav-inner' + (r.revealed ? '' : ' single') + '">' +
        (r.revealed
          ? '<button type="button" class="btn btn-ng" data-act="review-rate" data-ok="0">まだ</button><button type="button" class="btn btn-ok" data-act="review-rate" data-ok="1">覚えた</button>'
          : '<button type="button" class="btn btn-primary" data-act="reveal">答えを見る</button>') +
        '</div></nav>';
    }
    app.innerHTML = h;
    focusTitle();
  }

  function revealReview() {
    if (!review || review.revealed || review.idx >= review.queue.length) return;
    review.revealed = true;
    var id = review.queue[review.idx];
    $('.fc-wrap').innerHTML = cardFaceHTML(id, true);
    var nav = $('.nav-inner');
    nav.classList.remove('single');
    nav.innerHTML = '<button type="button" class="btn btn-ng" data-act="review-rate" data-ok="0">まだ</button>' +
      '<button type="button" class="btn btn-ok" data-act="review-rate" data-ok="1">覚えた</button>';
    var b = $('[data-act="review-rate"][data-ok="1"]');
    if (b) { try { b.focus({ preventScroll: true }); } catch (e) { b.focus(); } }
  }

  function rateReview(ok) {
    var r = review;
    if (!r || !r.revealed || r.idx >= r.queue.length) return;
    var id = r.queue[r.idx];
    rate(id, ok);
    if (r.first[id] === undefined) r.first[id] = ok;
    if (!ok && !r.reshown[id]) { r.reshown[id] = true; r.queue.push(id); }
    r.idx++;
    r.revealed = false;
    window.scrollTo(0, 0);
    renderReview();
  }

  // ---------- events ----------
  app.addEventListener('click', function (e) {
    var el = e.target.closest('[data-act],[data-lesson]');
    if (!el || el.disabled) return;
    if (el.hasAttribute('data-lesson') && !el.hasAttribute('data-act')) { startLesson(el.getAttribute('data-lesson')); return; }
    var act = el.getAttribute('data-act');
    switch (act) {
      case 'review-due': startReview(false); break;
      case 'review-all': startReview(true); break;
      case 'reset':
        if (window.confirm('学習記録（完了したレッスンと復習カード）をすべて消去します。よろしいですか？')) {
          state = { completed: {}, cards: {} };
          save();
          renderHome();
        }
        break;
      case 'close':
      case 'home': goHome(); break;
      case 'prev': go(-1); break;
      case 'next': go(1); break;
      case 'choose': answerQuiz(Number(el.getAttribute('data-c'))); break;
      case 'reveal': if (view === 'review') revealReview(); else revealRecall(); break;
      case 'rate': rateRecall(el.getAttribute('data-ok') === '1'); break;
      case 'review-rate': rateReview(el.getAttribute('data-ok') === '1'); break;
    }
  });

  // swipe left/right inside the lesson flow
  var touch = null;
  document.addEventListener('touchstart', function (e) {
    if (view !== 'flow' || e.touches.length !== 1) { touch = null; return; }
    touch = { x: e.touches[0].clientX, y: e.touches[0].clientY, t: Date.now() };
  }, { passive: true });
  document.addEventListener('touchend', function (e) {
    if (!touch || view !== 'flow') return;
    var t = e.changedTouches[0];
    var dx = t.clientX - touch.x, dy = t.clientY - touch.y;
    var dt = Date.now() - touch.t;
    touch = null;
    if (dt > 800 || Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    go(dx < 0 ? 1 : -1);
  }, { passive: true });

  document.addEventListener('keydown', function (e) {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    if (view === 'flow') {
      if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
    }
  });

  // refresh due counts when coming back to the app on a new day
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible' && view === 'home') { state = load(); renderHome(); }
  });

  renderHome();

  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () { /* offline cache unavailable */ });
    });
  }
})();
