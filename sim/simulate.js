// ACCA 入門 — pass-date simulator.
// Usage: node sim/simulate.js [runs per scenario = 200] [--quick]
// Writes sim/results.json and prints a summary table.
//
// What it does: a day-by-day Monte Carlo of one learner using this app (scheduler.js + the
// app's daily plan) on the real course content (content/u*.js: lesson ids, minutes, cards and
// quiz questions per subject), from START until all of K1 → K2 → K3 are passed.
//
// ---------------------------------------------------------------- ASSUMPTIONS (explicit)
// Calendar
//   - start 2026-11-23; K1/K2/K3 can be sat on any day from 2027-07-01; booking lead 14 days.
//   - a study day happens with probability 0.85 (adherence); missed days do nothing.
// Memory model (the learner's TRUE memory, separate from what the scheduler believes)
//   - recall on a review is a Bernoulli draw with p = R_true = FSRS forgetting curve on the
//     card's TRUE stability (FSRS-6 formulas, default weights for "average").
//   - "forgetful": true stability 35% lower than the scheduler assumes — the true memory follows
//     FSRS with R_true(t) = curve(t, 0.65 × S) (and S updated with that R) — and higher
//     difficulty (initial difficulty w4 + 1.5, so stability grows more slowly). The scheduler
//     starts with default weights; only its personal factor (0.5–1.2, estimated from recall on
//     due reviews) can adapt to the learner.
//   - ratings: recalled → 覚えた (Good), or あいまい (Hard) with prob 0.4 when R_true < 0.75 and
//     0.15 otherwise; not recalled → 忘れた (Again). A card rated 忘れた is shown again later in
//     the same session (up to 2 times; recalled then with prob 0.85 average / 0.75 forgetful).
//   - a new card's first rating (思い出しチェック on the lesson day, or the first review of a
//     mistake card) is drawn: average Again/Hard/Good = 15/20/65%, forgetful 30/25/45%.
// Time
//   - review seconds per card: 10 (average), 15 (forgetful), the same for re-shows and checks.
//   - lesson minutes from content; forgetful +20%. Lesson quiz answered correctly with prob 0.80
//     (average) / 0.70 (forgetful); each wrong answer becomes a 間違いノート card.
//   - 週のまとめテスト: every 7 days, 10 questions, 5 min (6 forgetful); correct with prob = the
//     lesson's mean true recall; wrong → mistake card.
//   - ミニ模試: 24 min, weekly during a subject's consolidation phase. It is timed and done in
//     one sitting, so on those days the session can exceed the budget by up to 24 min.
//   - official specimen: 120 min, spread over consecutive study days using the budget left after
//     the day's urgent reviews (reviews still ≥ 85% likely to be recalled wait, as in the plan).
// Policy (= the app's daily plan, scheduler.plan)
//   - first the day's due reviews, lowest predicted recall first, as many as fit the budget;
//     cards of already-passed subjects are capped at 3 min/day. Then the weekly test and the next
//     lesson only if they fit and the reviews did not overflow; more lessons while they fit.
//     After a lesson its cards get the same-day 思い出しチェック (always done, ~1 min).
// Phases per subject, in order K1 → K2 → K3
//   - lessons: all lessons in course order.
//   - consolidation: no new lessons for this subject; weekly mini mock; official specimens start
//     once the scheduler's average predicted recall of the subject's cards is ≥ 0.85; after a
//     specimen below 65% the next one waits 7 days.
//   - ready = all lessons done AND average predicted recall ≥ 0.85 AND the last two official
//     specimen scores ≥ 65%. Specimen / exam score = 100 × mean TRUE recall over the subject's
//     cards − 8 (exam pressure) + Normal(0, 5); mini mock = same without the −8.
//   - exam date = max(ready + 14 days, 2027-07-01). The next subject's lessons start the day
//     after ready; the booked subject keeps full reviews until the exam. Pass = score ≥ 50.
//     A fail sends the subject back to consolidation (two new specimens ≥ 65% needed).
//   - after passing, the subject's cards keep being reviewed with a 3 min/day cap.
// Limits: horizon 2035-12-31 (a subject not passed by then is reported as not passed).
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const SCH = require(path.join(__dirname, '..', 'scheduler.js'));

const ROOT = path.join(__dirname, '..');
const START = '2026-11-23', EXAM_OPEN = '2027-07-01', HORIZON = '2035-12-31';
const BOOK_LEAD = 14, ADHERENCE = 0.85, PASSED_CAP_SEC = 180;
const MOCK_SEC = 24 * 60, SPEC_SEC = 120 * 60, PRESSURE = 8, NOISE_SD = 5;
const SUBJECTS = ['K1', 'K2', 'K3'];

const PROFILES = {
  average: { scale: 1, dShift: 0, reviewSec: 10, lessonMult: 1, first: [0.15, 0.20, 0.65], quiz: 0.80, reshow: 0.85, weeklySec: 300 },
  forgetful: { scale: 0.65, dShift: 1.5, reviewSec: 15, lessonMult: 1.2, first: [0.30, 0.25, 0.45], quiz: 0.70, reshow: 0.75, weeklySec: 360 }
};

// ---------------------------------------------------------------- content
function loadContent() {
  const ctx = { window: {} };
  vm.createContext(ctx);
  const files = fs.readdirSync(path.join(ROOT, 'content')).filter(f => /^u\d+\.js$/.test(f))
    .sort((a, b) => parseInt(a.slice(1), 10) - parseInt(b.slice(1), 10));
  for (const f of files) vm.runInContext(fs.readFileSync(path.join(ROOT, 'content', f), 'utf8'), ctx);
  const units = ctx.window.ACCA_UNITS.slice().sort((a, b) => Number(a.unit) - Number(b.unit));
  const subj = {};
  for (const s of SUBJECTS) subj[s] = { lessons: [], cards: 0, minutes: 0 };
  const lessonIdx = {};
  for (const u of units) {
    const s = u.subject || 'K1';
    for (const l of u.lessons) {
      lessonIdx[l.id] = { s, i: subj[s].lessons.length };
      subj[s].lessons.push({ id: l.id, minutes: Number(l.minutes) || 10, quiz: (l.quiz || []).length, cards: 0 });
      subj[s].minutes += Number(l.minutes) || 10;
    }
  }
  for (const u of units) for (const c of (u.cards || [])) {
    const li = lessonIdx[c.lesson];
    if (li) { subj[li.s].lessons[li.i].cards++; subj[li.s].cards++; }
  }
  return subj;
}

// ---------------------------------------------------------------- helpers
function mulberry32(a) {
  return function () {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function normal(rnd) { let u = 0, v = 0; while (u === 0) u = rnd(); while (v === 0) v = rnd(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }
function quantile(sorted, q) {
  if (!sorted.length) return null;
  const i = (sorted.length - 1) * q, lo = Math.floor(i), hi = Math.ceil(i);
  return sorted[lo] + (sorted[hi] - sorted[lo]) * (i - lo);
}
const D0 = SCH.ymdToDay(START), OPEN = SCH.ymdToDay(EXAM_OPEN), END = SCH.ymdToDay(HORIZON);

// ---------------------------------------------------------------- one run
function simulate(content, profileName, budgetMin, seed, trace, retention) {
  const RETENTION = retention || 0.9;
  const P = PROFILES[profileName];
  const rnd = mulberry32(seed);
  const wTrue = SCH.DEFAULT_W.slice();
  wTrue[4] += P.dShift;
  const trueOpt = { w: wTrue, factor: P.scale, retention: RETENTION };
  const personal = SCH.personalNew();
  const budget = budgetMin * 60;

  const cards = [];           // { s, lesson (subject lesson index), mistake, sched, tru, due, last }
  const bySubj = { K1: [], K2: [], K3: [] };  // regular card indices per subject
  const buckets = new Map();  // day -> [card idx]
  const mistakeKey = new Map();
  let pool = [];              // overdue cards carried over
  function schedule(ci, day) {
    const c = cards[ci];
    c.due = day;
    let b = buckets.get(day);
    if (!b) buckets.set(day, b = []);
    b.push(ci);
  }
  function addCard(s, li, mistake, day) {
    const ci = cards.length;
    cards.push({ s, li, mistake, sched: { state: 'new' }, tru: { state: 'new' }, due: day + 1, last: day });
    if (!mistake) {
      bySubj[s].push(ci);
      const k = s + ':' + li;
      if (!byLesson.has(k)) byLesson.set(k, []);
      byLesson.get(k).push(ci);
    }
    schedule(ci, day + 1);
    return ci;
  }
  function trueR(c, day) { return c.tru.stability == null ? 0 : SCH.forgettingCurve(wTrue, day - c.last, c.tru.stability * P.scale); }
  function schedR(c, day) { return SCH.recallNow(c.sched, day - c.last, { factor: personal.factor, retention: RETENTION }); }
  function firstRating() { const x = rnd(); return x < P.first[0] ? 1 : x < P.first[0] + P.first[1] ? 2 : 3; }
  const stats = { reviews: 0, reviewSec: 0, lessonSec: 0, testSec: 0, studyDays: 0, mistakes: 0, overflowDays: 0 };
  // one rating applied to both the scheduler's and the true memory state
  function apply(ci, rating, day) {
    const c = cards[ci], el = day - c.last;
    const wasDue = c.sched.state !== 'new' && c.sched.stability != null && c.due <= day && el >= 1;
    if (wasDue) SCH.personalRecord(personal, el, c.sched.stability, rating !== 1);
    const rs = SCH.review(c.sched, rating, el, { factor: personal.factor, retention: RETENTION });
    const rt = SCH.review(c.tru, rating, el, trueOpt);
    c.sched = rs.card; c.tru = rt.card; c.last = day;
    schedule(ci, day + rs.interval);
  }
  // a due review (with same-session re-shows); returns seconds used
  function doReview(ci, day) {
    const c = cards[ci];
    let sec = P.reviewSec, rating;
    if (c.sched.state === 'new') rating = firstRating();
    else {
      const r = trueR(c, day);
      if (rnd() < r) rating = (rnd() < (r < 0.75 ? 0.4 : 0.15)) ? 2 : 3;
      else rating = 1;
    }
    apply(ci, rating, day);
    stats.reviews++;
    for (let k = 0; k < 2 && rating === 1; k++) {
      rating = rnd() < P.reshow ? 3 : 1;
      apply(ci, rating, day);
      stats.reviews++;
      sec += P.reviewSec;
    }
    return sec;
  }
  function meanTrueR(s, day) {
    const ids = bySubj[s];
    if (!ids.length) return 0;
    let t = 0;
    for (const ci of ids) t += trueR(cards[ci], day);
    return t / ids.length;
  }
  function meanSchedR(s, day) {
    const ids = bySubj[s];
    if (!ids.length) return 0;
    let t = 0;
    for (const ci of ids) t += schedR(cards[ci], day);
    return t / ids.length;
  }
  const byLesson = new Map(); // 's:li' -> regular card indices
  function lessonTrueR(s, li, day) {
    const ids = byLesson.get(s + ':' + li) || [];
    let t = 0;
    for (const ci of ids) t += trueR(cards[ci], day);
    return ids.length ? t / ids.length : 0.5;
  }
  function addMistake(s, li, k, day) {
    const key = s + ':' + li + ':' + k;
    if (mistakeKey.has(key)) {
      const ci = mistakeKey.get(key);
      if (cards[ci].due > day + 1) schedule(ci, day + 1);
      return;
    }
    mistakeKey.set(key, addCard(s, li, true, day));
    stats.mistakes++;
  }

  // subject state
  const S = {};
  for (const s of SUBJECTS) S[s] = { phase: 'locked', next: 0, lessonStart: null, lessonEnd: null, ready: null, exam: null, passed: null,
    specs: [], specProgress: 0, specWaitUntil: 0, lastMock: null, mocks: [], fails: 0, examScores: [] };
  S.K1.phase = 'lessons'; S.K1.lessonStart = D0;
  const done = [];            // [day, s, li] completed lessons (for the weekly test)
  let lastWeekly = null, firstLessonDay = null;
  const daily = [];           // per study day: review sec, lesson sec, test sec

  for (let day = D0; day <= END; day++) {
    // exams booked for today
    for (const s of SUBJECTS) {
      const st = S[s];
      if (st.phase === 'booked' && st.exam === day) {
        const score = 100 * meanTrueR(s, day) - PRESSURE + NOISE_SD * normal(rnd);
        st.examScores.push(Math.round(score * 10) / 10);
        if (score >= 50) { st.phase = 'passed'; st.passed = day; }
        else { st.phase = 'consol'; st.fails++; st.specs = []; st.specWaitUntil = day + 7; st.exam = null; }
      }
    }
    if (SUBJECTS.every(s => S[s].phase === 'passed')) break;
    if (trace && (day - D0) % 30 === 0) {
      const cs = SUBJECTS.find(s => S[s].phase === 'consol' || S[s].phase === 'lessons');
      trace.push({ date: SCH.dayToYmd(day), phases: SUBJECTS.map(s => S[s].phase + (S[s].phase === 'lessons' ? ':' + S[s].next : '')).join(' '),
        cards: cards.length, pool: pool.length, factor: personal.factor, schedR: cs ? +meanSchedR(cs, day).toFixed(3) : null,
        trueR: cs ? +meanTrueR(cs, day).toFixed(3) : null, specs: cs ? S[cs].specs.join('/') : '', overflowDays: stats.overflowDays });
    }
    // due cards join the pool
    const b = buckets.get(day);
    // a card can sit in the same bucket more than once (scheduled again the same day: 思い出しチェック
    // after addCard, 忘れた re-shows); the pool must hold each due card once, as the app does
    if (b) {
      const inPool = new Set(pool);
      for (const ci of b) if (cards[ci].due === day && !inPool.has(ci)) { inPool.add(ci); pool.push(ci); }
      buckets.delete(day);
    }
    pool = pool.filter(ci => cards[ci].due <= day);
    if (SCH.personalUpdate(personal, day)) { /* factor moved */ }
    if (rnd() >= ADHERENCE) continue;
    stats.studyDays++;
    let left = budget, rSec = 0, lSec = 0, tSec = 0;
    const learning = SUBJECTS.find(s => S[s].phase === 'lessons');
    const consol = SUBJECTS.find(s => S[s].phase === 'consol');

    // mini mock day (consolidation): timed, one sitting, done first
    if (consol && (S[consol].lastMock === null || day - S[consol].lastMock >= 7)) {
      const st = S[consol];
      const p = Math.min(1, Math.max(0, meanTrueR(consol, day)));
      st.mocks.push(Math.round(100 * p + NOISE_SD * normal(rnd)));
      st.lastMock = day;
      const nl = content[consol].lessons.length;
      for (let q = 0; q < 20; q++) if (rnd() > p) addMistake(consol, Math.floor(rnd() * nl), Math.floor(rnd() * 5), day);
      left -= MOCK_SEC; tSec += MOCK_SEC;
    }

    // today's plan = scheduler.plan (the app's "今日やること"); passed subjects capped at 3 min
    const scored = pool.map(ci => [ci, schedR(cards[ci], day)]).sort((a, b) => a[1] - b[1]);
    let passedLeft = PASSED_CAP_SEC;
    const dueList = [];
    for (const [ci, r] of scored) {
      if (S[cards[ci].s].phase === 'passed') { if (passedLeft < P.reviewSec) continue; passedLeft -= P.reviewSec; }
      dueList.push({ id: ci, r: Math.round(r * 100) / 100 });
    }
    const L = learning ? content[learning].lessons : null;
    const nextL = learning && S[learning].next < L.length ? L[S[learning].next] : null;
    // an official specimen in progress (or due to start) takes the lesson slot of the plan
    const cst = consol && S[consol].phase === 'consol' ? S[consol] : null;
    const specWanted = !!cst && (cst.specProgress > 0 || (day >= cst.specWaitUntil && meanSchedR(consol, day) >= 0.85));
    const weeklyDue = firstLessonDay !== null && day - (lastWeekly === null ? firstLessonDay : lastWeekly) >= 7;
    // the app estimates with the measured review time and the lesson's listed minutes
    const pl = SCH.plan({ due: dueList, reviewSec: P.reviewSec, budgetSec: budget, spentSec: budget - left,
      weekly: weeklyDue ? 300 : 0, lessonSec: !specWanted && nextL ? nextL.minutes * 60 : 0 });
    if (pl.overflow) stats.overflowDays++;
    const nowIds = specWanted && !pl.overflow ? pl.reviewIds.slice(0, pl.urgent) : pl.reviewIds;
    for (const ci of nowIds) {
      const sec = doReview(ci, day);
      left -= sec; rSec += sec;
    }
    // official specimen work (consolidation): the time left after the urgent reviews, then the
    // non-urgent reviews if any time remains
    if (specWanted && !pl.overflow) {
      const st = cst;
      const use = Math.max(0, Math.min(left, SPEC_SEC - st.specProgress));
      st.specProgress += use; left -= use; tSec += use;
      if (st.specProgress >= SPEC_SEC) {
        st.specProgress = 0;
        const score = 100 * meanTrueR(consol, day) - PRESSURE + NOISE_SD * normal(rnd);
        st.specs.push(Math.round(score * 10) / 10);
        const n = st.specs.length;
        if (score < 65) st.specWaitUntil = day + 7;
        if (n >= 2 && st.specs[n - 1] >= 65 && st.specs[n - 2] >= 65 && meanSchedR(consol, day) >= 0.85) {
          st.phase = 'booked'; st.ready = day; st.exam = Math.max(day + BOOK_LEAD, OPEN);
          const nxt = SUBJECTS[SUBJECTS.indexOf(consol) + 1];
          if (nxt && S[nxt].phase === 'locked') { S[nxt].phase = 'lessons'; S[nxt].lessonStart = day + 1; }
        }
      }
      for (const ci of pl.reviewIds.slice(pl.urgent)) {
        if (left < P.reviewSec) break;
        const sec = doReview(ci, day);
        left -= sec; rSec += sec;
      }
    }
    pool = pool.filter(ci => cards[ci].due <= day);

    // weekly test
    if (pl.weekly) {
      const recent = done.filter(x => x[0] > day - 7);
      const src = recent.length ? recent : done.slice(-3);
      for (let q = 0; q < 10; q++) {
        const x = src[Math.floor(rnd() * src.length)];
        if (rnd() > lessonTrueR(x[1], x[2], day)) addMistake(x[1], x[2], Math.floor(rnd() * 5), day);
      }
      lastWeekly = day; left -= P.weeklySec; tSec += P.weeklySec;
    }

    // lessons: the planned one, then more while the listed minutes still fit
    if (pl.lesson && learning && !specWanted) {
      const st = S[learning];
      let first = true;
      while (st.next < L.length) {
        const l = L[st.next];
        if (!first && left < l.minutes * 60) break;
        first = false;
        const sec = l.minutes * 60 * P.lessonMult;
        left -= sec; lSec += sec;
        const li = st.next;
        // cards, quiz mistakes and the same-day 思い出しチェック
        const added = [];
        for (let k = 0; k < l.cards; k++) added.push(addCard(learning, li, false, day));
        for (let k = 0; k < l.quiz; k++) if (rnd() > P.quiz) addMistake(learning, li, k, day);
        for (const ci of added) { apply(ci, firstRating(), day); stats.reviews++; }
        const chk = added.length * P.reviewSec;
        left -= chk; rSec += chk;
        done.push([day, learning, li]);
        if (firstLessonDay === null) firstLessonDay = day;
        st.next++;
        if (st.next === L.length) { st.phase = 'consol'; st.lessonEnd = day; st.lastMock = day; }
      }
    }

    stats.reviewSec += rSec; stats.lessonSec += lSec; stats.testSec += tSec;
    daily.push([rSec, lSec, tSec]);
  }

  const out = { profile: profileName, budget: budgetMin, retention: RETENTION, seed, factor: personal.factor, reviews: stats.reviews, mistakes: stats.mistakes,
    studyDays: stats.studyDays,
    avgReviewMin: stats.reviewSec / 60 / Math.max(1, stats.studyDays), avgLessonMin: stats.lessonSec / 60 / Math.max(1, stats.studyDays),
    avgTestMin: stats.testSec / 60 / Math.max(1, stats.studyDays), overflowDays: stats.overflowDays, subjects: {} };
  for (const s of SUBJECTS) {
    const st = S[s];
    out.subjects[s] = {
      passed: st.passed === null ? null : SCH.dayToYmd(st.passed),
      passDay: st.passed === null ? null : st.passed - D0,
      lessonDays: st.lessonEnd === null || st.lessonStart === null ? null : st.lessonEnd - st.lessonStart + 1,
      consolDays: st.ready === null || st.lessonEnd === null ? null : st.ready - st.lessonEnd,
      waitDays: st.ready === null || st.passed === null ? null : st.passed - st.ready,
      specimens: st.specs.length, fails: st.fails, examScores: st.examScores,
      mockAvg: st.mocks.length ? st.mocks.reduce((a, b) => a + b, 0) / st.mocks.length : null
    };
  }
  return out;
}

// ---------------------------------------------------------------- scenarios
function summarize(runs) {
  const s = {};
  for (const sub of SUBJECTS) {
    // Pass-date quantiles are taken over ALL runs; a run that did not pass by HORIZON counts as
    // "later than HORIZON" (censored), shown as '>' + HORIZON. Taking quantiles over the passing
    // runs only would make the dates look earlier than the model implies.
    const days = runs.map(r => r.subjects[sub].passDay).filter(x => x !== null).sort((a, b) => a - b);
    const all = runs.map(r => r.subjects[sub].passDay === null ? Infinity : r.subjects[sub].passDay).sort((a, b) => a - b);
    const cq = q => { const i = (all.length - 1) * q, lo = Math.floor(i), hi = Math.ceil(i);
      return !isFinite(all[hi]) ? Infinity : all[lo] + (all[hi] - all[lo]) * (i - lo); };
    const med = k => { const v = runs.map(r => r.subjects[sub][k]).filter(x => x !== null).sort((a, b) => a - b); return v.length ? Math.round(quantile(v, 0.5)) : null; };
    const toDate = d => d === null ? null : !isFinite(d) ? '>' + HORIZON : SCH.dayToYmd(D0 + Math.round(d));
    s[sub] = {
      passedRuns: days.length, of: runs.length,
      median: toDate(cq(0.5)), p10: toDate(cq(0.1)), p90: toDate(cq(0.9)),
      medianOfPassedRuns: days.length ? toDate(quantile(days, 0.5)) : null,
      medianLessonDays: med('lessonDays'), medianConsolDays: med('consolDays'), medianWaitDays: med('waitDays'),
      examFailRate: runs.filter(r => r.subjects[sub].fails > 0).length / runs.length
    };
  }
  const avg = k => runs.reduce((a, r) => a + r[k], 0) / runs.length;
  return { subjects: s, avgReviewMin: avg('avgReviewMin'), avgLessonMin: avg('avgLessonMin'), avgTestMin: avg('avgTestMin'),
    avgActualMin: avg('avgReviewMin') + avg('avgLessonMin') + avg('avgTestMin'),
    avgTotalReviews: avg('reviews'), avgOverflowDays: avg('overflowDays'), avgMistakeCards: avg('mistakes'), avgFactor: avg('factor'), avgStudyDays: avg('studyDays') };
}

// [profile, minutes per day, target retention]; the first five are the requested scenarios,
// the last three are sensitivity checks for a forgetful learner
const SCENARIOS = [['average', 15, 0.9], ['average', 20, 0.9], ['forgetful', 15, 0.9], ['forgetful', 20, 0.9], ['average', 30, 0.9],
  ['forgetful', 30, 0.9], ['forgetful', 20, 0.85], ['forgetful', 30, 0.85]];
const key = (p, b, r) => p + ' ' + b + 'min' + (r !== 0.9 ? ' R' + r : '');
// runs all (scenario, seed) jobs on worker threads; resolves to { 'profile budget': [run, ...] }
function runAll(runs) {
  const { Worker } = require('worker_threads');
  const jobs = [];
  for (const [profile, budget, ret] of SCENARIOS) for (let i = 0; i < runs; i++) jobs.push([profile, budget, 1000 + i, ret]);
  const n = Math.max(1, Math.min(require('os').cpus().length - 1, 12, jobs.length));
  const out = {};
  let finished = 0;
  return new Promise((resolve, reject) => {
    for (let w = 0; w < n; w++) {
      const mine = jobs.filter((_, i) => i % n === w);
      const worker = new Worker(__filename, { workerData: mine });
      worker.on('message', res => {
        for (const r of res) { const k = key(r.profile, r.budget, r.retention); (out[k] = out[k] || []).push(r); }
        if (++finished === n) resolve(out);
      });
      worker.on('error', reject);
    }
  });
}

async function main() {
  const args = process.argv.slice(2);
  const runs = Number(args.find(a => /^\d+$/.test(a))) || 200;
  const content = loadContent();
  const scenarios = SCENARIOS;
  const result = { generated: new Date().toISOString(), scheduler: SCH.VERSION, start: START, examOpen: EXAM_OPEN, runsPerScenario: runs,
    content: Object.fromEntries(SUBJECTS.map(s => [s, { lessons: content[s].lessons.length, minutes: content[s].minutes, cards: content[s].cards,
      quiz: content[s].lessons.reduce((a, l) => a + l.quiz, 0) }])), scenarios: [] };
  const t0 = Date.now();
  const all = await runAll(runs);
  for (const [profile, budget, retention] of scenarios) {
    const rs = all[key(profile, budget, retention)].sort((a, b) => a.seed - b.seed);
    result.scenarios.push({ name: key(profile, budget, retention), profile, budget, retention, summary: summarize(rs) });
  }
  result.seconds = Math.round((Date.now() - t0) / 1000);
  process.stderr.write('simulated ' + runs * scenarios.length + ' runs in ' + result.seconds + 's\n');
  fs.writeFileSync(path.join(__dirname, 'results.json'), JSON.stringify(result, null, 2));
  // summary table (printed and written to sim/summary.txt)
  const lines = [];
  const say = x => lines.push(x);
  const pad = (x, n) => String(x === null || x === undefined ? '-' : x).padEnd(n);
  say('Content: ' + SUBJECTS.map(s => s + ' ' + result.content[s].lessons + ' lessons / ' + result.content[s].minutes + ' min / ' + result.content[s].cards + ' cards').join(', '));
  say('Runs per scenario: ' + runs + '. Pass date = median [10th-90th percentile] over ALL runs; a run not passed by ' + HORIZON +
    ' counts as later than that (shown as >' + HORIZON + '). (n/200) = runs that passed.');
  say('"actual" = average minutes actually studied per study day (reviews + lessons + tests); it can exceed the budget because a');
  say('started lesson may run over (up to 30%, longer for a slow learner), re-shown 忘れた cards and the 思い出しチェック are not');
  say('budgeted in advance, and a mini mock (24 min) is done in one sitting.');
  say('');
  say(pad('scenario', 22) + SUBJECTS.map(s => pad(s + ' pass', 40)).join('') + 'actual = rev+lesson+test min/study day, reviews, factor');
  for (const sc of result.scenarios) {
    const S = sc.summary;
    say(pad(sc.name, 22) + SUBJECTS.map(s => {
      const x = S.subjects[s];
      return pad(x.median + ' [' + x.p10 + '..' + x.p90 + ']' + (x.passedRuns < x.of ? ' (' + x.passedRuns + '/' + x.of + ')' : ''), 40);
    }).join('') + S.avgActualMin.toFixed(1) + ' = ' + S.avgReviewMin.toFixed(1) + '+' + S.avgLessonMin.toFixed(1) + '+' + S.avgTestMin.toFixed(1) + ', ' +
      Math.round(S.avgTotalReviews) + ', ' + S.avgFactor.toFixed(2));
  }
  say('');
  say('Phase lengths (median days over the runs that reached the phase: lessons / consolidation to ready / ready to pass):');
  for (const sc of result.scenarios) {
    say(pad(sc.name, 22) + SUBJECTS.map(s => {
      const x = sc.summary.subjects[s];
      return pad(x.medianLessonDays + ' / ' + x.medianConsolDays + ' / ' + x.medianWaitDays + (x.examFailRate ? ' (retake ' + Math.round(x.examFailRate * 100) + '%)' : ''), 40);
    }).join(''));
  }
  const text = lines.join(String.fromCharCode(10));
  console.log(text);
  fs.writeFileSync(path.join(__dirname, 'summary.txt'), text + String.fromCharCode(10));
}

const wt = require('worker_threads');
if (!wt.isMainThread) {
  const content = loadContent();
  wt.parentPort.postMessage(wt.workerData.map(j => simulate(content, j[0], j[1], j[2], null, j[3])));
} else if (require.main === module) {
  main().catch(e => { console.error(e); process.exit(1); });
}
module.exports = { simulate, loadContent, summarize, PROFILES };
