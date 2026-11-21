// ACCA 入門 — spaced-repetition scheduler (FSRS-6) and the daily plan.
// Works as a browser global (window.ACCA_SCHED) and with require() in node (sim/, _test/).
//
// Algorithm: FSRS-6, ported from py-fsrs v6.3.3 (fsrs/scheduler.py, released 2026-11-13)
//   https://github.com/open-spaced-repetition/py-fsrs/blob/main/fsrs/scheduler.py
//   description: https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-Algorithm
// Default parameters = py-fsrs DEFAULT_PARAMETERS (21 weights, w[20] = decay 0.1542).
// pyReview() reproduces py-fsrs review_card() (learning steps in minutes, no fuzz) so the
// formulas can be checked against the reference values in py-fsrs tests/test_basic.py.
//
// The app itself schedules in whole calendar days (review()):
//   - ratings: 1 = 忘れた (Again), 2 = あいまい (Hard), 3 = 覚えた (Good)
//   - a card rated 忘れた comes back tomorrow (and again later in the same session; the
//     caller handles the session); a same-day re-rating uses the FSRS short-term formula
//   - a personal factor k scales the learner's stability: R(t) = (1 + F t / (k S))^-decay,
//     next interval = k × FSRS interval. k is estimated from the learner's own recall on
//     reviews that were due (see personalUpdate) and clamped to 0.5–1.2.
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.ACCA_SCHED = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var VERSION = 'FSRS-6 (py-fsrs 6.3.3)';
  var DEFAULT_W = [
    0.212, 1.2931, 2.3065, 8.2956, 6.4133, 0.8334, 3.0194, 0.001, 1.8722, 0.1666, 0.796,
    1.4835, 0.0614, 0.2629, 1.6483, 0.6014, 1.8729, 0.5425, 0.0912, 0.0658, 0.1542
  ];
  var S_MIN = 0.001;
  var D_MIN = 1, D_MAX = 10;
  var AGAIN = 1, HARD = 2, GOOD = 3, EASY = 4;
  var DAY_MS = 86400000;

  function clampD(d) { return Math.min(Math.max(d, D_MIN), D_MAX); }
  function clampS(s) { return Math.max(s, S_MIN); }
  function decay(w) { return -w[20]; }
  function factor(w) { return Math.pow(0.9, 1 / decay(w)) - 1; }

  // probability of recall after t days for stability s
  function forgettingCurve(w, t, s) {
    return Math.pow(1 + factor(w) * Math.max(0, t) / s, decay(w));
  }
  function initStability(w, r) { return clampS(w[r - 1]); }
  function initDifficulty(w, r, clamp) {
    var d = w[4] - Math.exp(w[5] * (r - 1)) + 1;
    return clamp ? clampD(d) : d;
  }
  function nextDifficulty(w, d, r) {
    var delta = -(w[6] * (r - 3));
    var arg2 = d + (10 - d) * delta / 9;           // linear damping
    var nd = w[7] * initDifficulty(w, EASY, false) + (1 - w[7]) * arg2; // mean reversion
    return clampD(nd);
  }
  function shortTermStability(w, s, r) {
    var inc = Math.exp(w[17] * (r - 3 + w[18])) * Math.pow(s, -w[19]);
    if (r >= HARD) inc = Math.max(inc, 1);
    return clampS(s * inc);
  }
  function forgetStability(w, d, s, R) {
    var longTerm = w[11] * Math.pow(d, -w[12]) * (Math.pow(s + 1, w[13]) - 1) * Math.exp((1 - R) * w[14]);
    var shortTerm = s / Math.exp(w[17] * w[18]);
    return Math.min(longTerm, shortTerm);
  }
  function recallStability(w, d, s, R, r) {
    var hard = r === HARD ? w[15] : 1;
    var easy = r === EASY ? w[16] : 1;
    return s * (1 + Math.exp(w[8]) * (11 - d) * Math.pow(s, -w[9]) * (Math.exp((1 - R) * w[10]) - 1) * hard * easy);
  }
  function nextStability(w, d, s, R, r) {
    return clampS(r === AGAIN ? forgetStability(w, d, s, R) : recallStability(w, d, s, R, r));
  }
  // interval (days, unrounded) at which recall falls to `retention`
  function rawInterval(w, s, retention) {
    return s / factor(w) * (Math.pow(retention, 1 / decay(w)) - 1);
  }
  function nextInterval(w, s, retention, maxInterval) {
    var i = Math.round(rawInterval(w, s, retention));
    return Math.min(Math.max(i, 1), maxInterval || 36500);
  }

  // ---------------------------------------------------------------- py-fsrs review_card port
  // card: { state: 'learning'|'review'|'relearning', step, stability, difficulty, due, last } (ms)
  // opts: { w, retention, learningSteps: [ms], relearningSteps: [ms], maxInterval }
  function pyReview(card, r, now, opts) {
    opts = opts || {};
    var w = opts.w || DEFAULT_W;
    var ret = opts.retention || 0.9;
    var ls = opts.learningSteps || [60000, 600000];
    var rs = opts.relearningSteps || [600000];
    var maxI = opts.maxInterval || 36500;
    var c = {
      state: card.state || 'learning', step: card.step == null ? (card.state === 'review' ? null : 0) : card.step,
      stability: card.stability == null ? null : card.stability, difficulty: card.difficulty == null ? null : card.difficulty,
      due: card.due, last: card.last == null ? null : card.last
    };
    var days = c.last != null ? Math.floor((now - c.last) / DAY_MS) : null;
    function R() { return c.last == null || c.stability == null ? 0 : forgettingCurve(w, Math.max(0, Math.floor((now - c.last) / DAY_MS)), c.stability); }
    function toReview() { c.state = 'review'; c.step = null; return nextInterval(w, c.stability, ret, maxI) * DAY_MS; }
    var ivl;
    function stepped(steps) {
      if (steps.length === 0 || (c.step >= steps.length && r >= HARD)) return toReview();
      if (r === AGAIN) { c.step = 0; return steps[0]; }
      if (r === HARD) {
        if (c.step === 0 && steps.length === 1) return steps[0] * 1.5;
        if (c.step === 0 && steps.length >= 2) return (steps[0] + steps[1]) / 2;
        return steps[c.step];
      }
      if (r === GOOD) {
        if (c.step + 1 === steps.length) return toReview();
        c.step += 1;
        return steps[c.step];
      }
      return toReview();
    }
    if (c.state === 'learning') {
      if (c.stability == null || c.difficulty == null) {
        c.stability = initStability(w, r);
        c.difficulty = initDifficulty(w, r, true);
      } else if (days != null && days < 1) {
        c.stability = shortTermStability(w, c.stability, r);
        c.difficulty = nextDifficulty(w, c.difficulty, r);
      } else {
        c.stability = nextStability(w, c.difficulty, c.stability, R(), r);
        c.difficulty = nextDifficulty(w, c.difficulty, r);
      }
      ivl = stepped(ls);
    } else if (c.state === 'review') {
      if (days != null && days < 1) c.stability = shortTermStability(w, c.stability, r);
      else c.stability = nextStability(w, c.difficulty, c.stability, R(), r);
      c.difficulty = nextDifficulty(w, c.difficulty, r);
      if (r === AGAIN) {
        if (rs.length === 0) ivl = nextInterval(w, c.stability, ret, maxI) * DAY_MS;
        else { c.state = 'relearning'; c.step = 0; ivl = rs[0]; }
      } else ivl = nextInterval(w, c.stability, ret, maxI) * DAY_MS;
    } else {
      if (days != null && days < 1) {
        c.stability = shortTermStability(w, c.stability, r);
        c.difficulty = nextDifficulty(w, c.difficulty, r);
      } else {
        c.stability = nextStability(w, c.difficulty, c.stability, R(), r);
        c.difficulty = nextDifficulty(w, c.difficulty, r);
      }
      ivl = stepped(rs);
    }
    c.due = now + ivl;
    c.last = now;
    return c;
  }

  // ---------------------------------------------------------------- app scheduling (whole days)
  // card: { state: 'new'|'learning'|'review'|'relearning', stability, difficulty, reps, lapses }
  // elapsed: whole days since the last review (or since the card was added, for a new card); 0 = same day
  // opts: { w, retention, factor, maxInterval }
  // returns { card, interval (days from today), predicted (personal R before this review, or null) }
  var APP_MAX_INTERVAL = 180; // keep exam material within half a year of the last review
  function opt(o) {
    o = o || {};
    return { w: o.w || DEFAULT_W, retention: o.retention || 0.9, factor: o.factor || 1, maxInterval: o.maxInterval || APP_MAX_INTERVAL };
  }
  function personalR(w, elapsed, s, k) { return forgettingCurve(w, elapsed, s * (k || 1)); }
  function review(card, r, elapsed, o) {
    o = opt(o);
    var w = o.w, k = o.factor;
    var c = {
      state: card && card.state || 'new',
      stability: card && card.stability != null ? card.stability : null,
      difficulty: card && card.difficulty != null ? card.difficulty : null,
      reps: (card && card.reps) || 0, lapses: (card && card.lapses) || 0
    };
    var interval, predicted = null;
    elapsed = Math.max(0, Math.floor(elapsed || 0));
    if (c.stability == null || c.difficulty == null || c.state === 'new') {
      c.stability = initStability(w, r);
      c.difficulty = initDifficulty(w, r, true);
      if (r === AGAIN || elapsed === 0) { c.state = 'learning'; interval = 1; }
      else { c.state = 'review'; interval = nextInterval(w, c.stability * k, o.retention, o.maxInterval); }
    } else if (elapsed === 0) {
      c.stability = shortTermStability(w, c.stability, r);
      c.difficulty = nextDifficulty(w, c.difficulty, r);
      if (r === AGAIN) {
        if (c.state === 'review') c.lapses++;
        if (c.state === 'review') c.state = 'relearning';
        interval = 1;
      } else if (c.state === 'review') {
        interval = nextInterval(w, c.stability * k, o.retention, o.maxInterval);
      } else interval = 1; // learning / relearning: tomorrow again
    } else {
      predicted = personalR(w, elapsed, c.stability, k);
      c.stability = nextStability(w, c.difficulty, c.stability, predicted, r);
      c.difficulty = nextDifficulty(w, c.difficulty, r);
      if (r === AGAIN) {
        if (c.state === 'review') c.lapses++;
        c.state = 'relearning';
        interval = 1;
      } else {
        c.state = 'review';
        interval = nextInterval(w, c.stability * k, o.retention, o.maxInterval);
      }
    }
    c.reps++;
    return { card: c, interval: interval, predicted: predicted };
  }
  // predicted recall now; a card that was never rated is assumed to have the "Good" initial stability
  function recallNow(card, elapsed, o) {
    o = opt(o);
    var s = card && card.stability != null ? card.stability : initStability(o.w, GOOD);
    return personalR(o.w, Math.max(0, elapsed), s, o.factor);
  }

  // ---------------------------------------------------------------- personal adaptation
  // log entries: [elapsedDays, stabilityBeforeReview, recalled 0/1] for reviews that were due
  var LOG_MAX = 1000, MIN_REVIEWS = 30, K_MIN = 0.5, K_MAX = 1.2;
  function personalNew() { return { factor: 1, n: 0, log: [], day: null }; }
  function personalRecord(p, elapsed, s, ok) {
    p.log.push([elapsed, Math.round(s * 1000) / 1000, ok ? 1 : 0]);
    if (p.log.length > LOG_MAX) p.log.splice(0, p.log.length - LOG_MAX);
    p.n = (p.n || 0) + 1;
  }
  function meanR(log, k, w) {
    var sum = 0;
    for (var i = 0; i < log.length; i++) sum += forgettingCurve(w, log[i][0], log[i][1] * k);
    return sum / log.length;
  }
  // stability multiplier that makes the predicted recall match the observed recall
  function estimateFactor(log, w) {
    w = w || DEFAULT_W;
    if (!log.length) return 1;
    var obs = 0;
    for (var i = 0; i < log.length; i++) obs += log[i][2];
    obs /= log.length;
    var lo = 0.2, hi = 3;
    if (meanR(log, lo, w) >= obs) return lo;
    if (meanR(log, hi, w) <= obs) return hi;
    for (var it = 0; it < 50; it++) {
      var mid = (lo + hi) / 2;
      if (meanR(log, mid, w) < obs) lo = mid; else hi = mid;
    }
    return (lo + hi) / 2;
  }
  // at most once per day: move the factor 10% of the way to the (sample-size shrunk) estimate
  function personalUpdate(p, day, w) {
    if ((p.n || 0) < MIN_REVIEWS || p.log.length < MIN_REVIEWS || p.day === day) return false;
    var est = estimateFactor(p.log, w);
    var trust = Math.min(1, p.log.length / 200); // few data → stay close to 1
    var target = 1 + (est - 1) * trust;
    target = Math.min(Math.max(target, K_MIN), K_MAX);
    var f = (p.factor || 1) + 0.1 * (target - (p.factor || 1));
    p.factor = Math.round(Math.min(Math.max(f, K_MIN), K_MAX) * 1000) / 1000;
    p.day = day;
    return true;
  }
  function observedRecall(p) {
    if (!p.log.length) return null;
    var s = 0;
    for (var i = 0; i < p.log.length; i++) s += p.log[i][2];
    return s / p.log.length;
  }

  // ---------------------------------------------------------------- dates (calendar days)
  function ymdToDay(ymd) {
    var p = String(ymd).split('-');
    return Math.round(Date.UTC(+p[0], +p[1] - 1, +p[2]) / DAY_MS);
  }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function dayToYmd(day) {
    var d = new Date(day * DAY_MS);
    return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate());
  }

  // ---------------------------------------------------------------- migration from v1 {step, due}
  // v1 rules: 覚えた at step k → due = today + [1,3,7,30,90][k], step k+1; まだ → step 0, due +1.
  // A card at step k ≥ 1 was last remembered INTERVALS[k-1] days before its due date, and at 90%
  // target retention an FSRS interval equals the stability, so S ≈ that interval.
  // Step 0 = not yet remembered → stays 'new' (first rating sets S and D). Due dates are kept.
  var V1_INTERVALS = [1, 3, 7, 30, 90];
  function migrateV1Card(old, todayYmd, w) {
    w = w || DEFAULT_W;
    var step = Math.max(0, Math.min(V1_INTERVALS.length - 1, Math.floor(Number(old.step)) || 0));
    var due = old.due;
    if (step === 0) {
      var last0 = dayToYmd(ymdToDay(due) - 1);
      return { state: 'new', stability: null, difficulty: null, due: due, last: last0 <= todayYmd ? last0 : todayYmd, reps: 0, lapses: 0 };
    }
    var ivl = V1_INTERVALS[step - 1];
    // v1 capped the step at 4: a step-4 card was last scheduled +30 (from step 3) or +90 (from
    // step 4). A due date more than 30 days ahead can only come from the 90-day interval.
    if (step === V1_INTERVALS.length - 1 && ymdToDay(due) - ymdToDay(todayYmd) > V1_INTERVALS[step - 1]) ivl = V1_INTERVALS[step];
    var last = dayToYmd(ymdToDay(due) - ivl);
    if (last > todayYmd) last = todayYmd;
    return {
      state: 'review', stability: ivl, difficulty: Math.round(initDifficulty(w, GOOD, true) * 1000) / 1000,
      due: due, last: last, reps: step, lapses: 0
    };
  }

  // ---------------------------------------------------------------- daily plan
  // in: { due: [{id, r}] (r = predicted recall now; equal r keep their given order),
  //       reviewSec, budgetSec, spentSec, check: sec|0, weekly: sec|0, lessonSec: sec|0, urgentR }
  // Rules (the app's "今日やること"):
  //   1. urgent reviews (predicted recall < urgentR, default 0.85) come first, lowest recall first.
  //      If they alone do not fit the time left → overflow: the most urgent that fit, nothing new.
  //   2. otherwise the weekly test and then the next lesson are planned if they fit next to the
  //      urgent reviews; reviews that are not urgent yet fill the remaining time, and the rest
  //      may wait (they are still ≥ 85% likely to be recalled and become urgent within days).
  //      A lesson may start when the time left is at least 70% of min(lesson, day budget); the day
  //      then runs over by overSec.
  //      Without this, ~50 reviews a day leave no room for a 13-minute lesson in a 15–20 minute
  //      day and new learning would stop for good (found with sim/simulate.js).
  // out: { order, reviewIds (to do now), overflow, deferred (non-urgent left for later),
  //        reviewSec, allSec, lesson, weekly, remainingSec }
  var URGENT_R = 0.85, LESSON_FIT = 0.7;
  function plan(p) {
    var due = (p.due || []).map(function (x, i) { return { id: x.id, r: x.r, i: i }; })
      .sort(function (a, b) { return a.r - b.r || a.i - b.i; });
    var per = p.reviewSec || 12;
    var urgentR = p.urgentR || URGENT_R;
    var left = Math.max(0, (p.budgetSec || 0) - (p.spentSec || 0));
    if (p.check) left = Math.max(0, left - p.check);
    var allSec = due.length * per;
    var nUrgent = 0;
    while (nUrgent < due.length && due[nUrgent].r < urgentR) nUrgent++;
    var fit = Math.floor(left / per);
    var weekly = false, lesson = false, take, over = 0;
    var overflow = nUrgent > fit;
    if (overflow) {
      take = fit;
    } else {
      var spare = left - nUrgent * per;
      if (p.weekly && spare >= p.weekly) { weekly = true; spare -= p.weekly; }
      // a lesson is one sitting: it may run past the day's time by up to 30% of min(lesson, day budget),
      // otherwise a 15–25 minute lesson could never start in a 15–20 minute day
      var need = Math.min(p.lessonSec || 0, p.budgetSec || 0) * LESSON_FIT;
      if (p.lessonSec && spare >= p.lessonSec) { lesson = true; spare -= p.lessonSec; }
      else if (p.lessonSec && spare >= need && spare >= 0) { lesson = true; over = p.lessonSec - spare; spare = 0; }
      take = Math.min(due.length, nUrgent + Math.floor(spare / per));
    }
    var reviewIds = due.slice(0, take).map(function (x) { return x.id; });
    left -= take * per + (weekly ? p.weekly : 0) + (lesson ? p.lessonSec - over : 0);
    return {
      order: due.map(function (x) { return x.id; }), reviewIds: reviewIds, overflow: overflow,
      deferred: overflow ? 0 : due.length - take, urgent: nUrgent,
      reviewSec: take * per, allSec: allSec, lesson: lesson, overSec: over, weekly: weekly, remainingSec: Math.max(0, left)
    };
  }

  return {
    VERSION: VERSION, DEFAULT_W: DEFAULT_W, AGAIN: AGAIN, HARD: HARD, GOOD: GOOD, EASY: EASY,
    APP_MAX_INTERVAL: APP_MAX_INTERVAL, URGENT_R: URGENT_R, MIN_REVIEWS: MIN_REVIEWS, K_MIN: K_MIN, K_MAX: K_MAX,
    factor: factor, decay: decay, forgettingCurve: forgettingCurve,
    initStability: initStability, initDifficulty: initDifficulty, nextDifficulty: nextDifficulty,
    shortTermStability: shortTermStability, forgetStability: forgetStability, recallStability: recallStability,
    nextStability: nextStability, rawInterval: rawInterval, nextInterval: nextInterval,
    pyReview: pyReview, review: review, recallNow: recallNow, personalR: personalR,
    personalNew: personalNew, personalRecord: personalRecord, personalUpdate: personalUpdate,
    estimateFactor: estimateFactor, observedRecall: observedRecall,
    ymdToDay: ymdToDay, dayToYmd: dayToYmd, migrateV1Card: migrateV1Card, V1_INTERVALS: V1_INTERVALS,
    plan: plan
  };
});
