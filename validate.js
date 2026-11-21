// Usage: node validate.js <unit file(s) or the content dir>
// Checks the data shape described in AUTHORING.md. Exit code 1 on any error.
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const args = process.argv.slice(2);
let files = [];
for (const a of args.length ? args : [path.join(__dirname, 'content')]) {
  if (fs.statSync(a).isDirectory()) {
    files.push(...fs.readdirSync(a).filter(f => /^u\d+\.js$/.test(f)).sort().map(f => path.join(a, f)));
  } else files.push(a);
}
const errors = [];
const warns = [];
const err = (f, m) => errors.push(`${path.basename(f)}: ${m}`);
const warn = (f, m) => warns.push(`${path.basename(f)}: ${m}`);
const isStr = v => typeof v === 'string' && v.trim().length > 0;
const isStrArr = v => Array.isArray(v) && v.length > 0 && v.every(isStr);
const SLIDE_KEYS = new Set(['title', 'paras', 'list', 'numbered', 'after', 'formula', 'note', 'table', 'tAccount', 'journal', 'example', 'svg', 'caption', 'words']);
const lessonIds = new Map();
const cardIds = new Set();

for (const f of files) {
  const ctx = { window: {} };
  try {
    vm.runInNewContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f });
  } catch (e) { err(f, 'JS error: ' + e.message); continue; }
  const units = ctx.window.ACCA_UNITS;
  if (!Array.isArray(units) || units.length !== 1) { err(f, 'must push exactly one unit to window.ACCA_UNITS'); continue; }
  const u = units[0];
  if (!Number.isInteger(u.unit)) err(f, 'unit must be an integer');
  if (!Number.isInteger(u.part)) err(f, 'part must be an integer');
  if (u.subject !== undefined && !['K2', 'K3'].includes(u.subject)) err(f, 'subject must be K2 or K3 (omit for K1)');
  const pref = u.subject === 'K2' ? /^M\d{3}$/ : u.subject === 'K3' ? /^B\d{3}$/ : /^(L\d{2,3}|X\d{2})$/;
  for (const l of u.lessons || []) if (!pref.test(l.id || '')) err(f, (l.id || '?') + ': id prefix does not match subject');
  if (!isStr(u.partTitle)) err(f, 'partTitle missing');
  if (!Array.isArray(u.lessons) || !u.lessons.length) { err(f, 'lessons missing'); continue; }
  for (const l of u.lessons) {
    const L = `${l.id || '?'}`;
    if (!/^(L\d{2,3}|X\d{2}|[MB]\d{3})$/.test(l.id || '')) err(f, `${L}: bad id`);
    if (lessonIds.has(l.id)) err(f, `${L}: duplicate lesson id (also in ${lessonIds.get(l.id)})`);
    lessonIds.set(l.id, path.basename(f));
    for (const k of ['title', 'goal']) if (!isStr(l[k])) err(f, `${L}: ${k} missing`);
    if (!(l.no !== undefined && l.no !== null && String(l.no).length)) err(f, `${L}: no missing`);
    if (!Number.isFinite(l.minutes)) err(f, `${L}: minutes missing`);
    if (typeof l.recall !== 'boolean') err(f, `${L}: recall must be boolean`);
    if (!['both', 'fa', 'k1'].includes(l.exam)) err(f, `${L}: exam must be both|fa|k1`);
    if (!isStrArr(l.outcomes)) err(f, `${L}: outcomes missing`);
    if (!Array.isArray(l.slides) || l.slides.length < 3) err(f, `${L}: needs >= 3 slides`);
    else if (l.id !== 'L01' && l.id !== 'L02' && (l.slides.length < 6 || l.slides.length > 12)) warn(f, `${L}: ${l.slides.length} slides (guide says 6-11)`);
    (l.slides || []).forEach((s, i) => {
      const S = `${L} slide ${i + 1}`;
      const keys = Object.keys(s);
      if (!keys.length) err(f, `${S}: empty`);
      for (const k of keys) if (!SLIDE_KEYS.has(k)) err(f, `${S}: unknown field "${k}"`);
      for (const k of ['paras', 'list', 'numbered']) if (s[k] !== undefined && !isStrArr(s[k])) err(f, `${S}: ${k} must be non-empty string array`);
      for (const k of ['title', 'after', 'formula', 'caption']) if (s[k] !== undefined && !isStr(s[k])) err(f, `${S}: ${k} must be string`);
      if (s.note !== undefined && (!['warn', 'tip'].includes(s.note.kind) || !isStr(s.note.text))) err(f, `${S}: note needs kind warn|tip and text`);
      if (s.table !== undefined) {
        const t = s.table;
        if (!isStrArr(t.head) || t.head.length > 3) err(f, `${S}: table.head must be 1-3 strings`);
        if (!Array.isArray(t.rows) || !t.rows.length) err(f, `${S}: table.rows missing`);
        else t.rows.forEach((r, j) => { if (!Array.isArray(r) || r.length !== (t.head || []).length || !r.every(c => typeof c === 'string')) err(f, `${S}: table row ${j + 1} must have ${(t.head || []).length} string cells`); });
        if (t.total !== undefined && (!Array.isArray(t.total) || t.total.length !== (t.head || []).length)) err(f, `${S}: table.total length mismatch`);
      }
      if (s.tAccount !== undefined) {
        const t = s.tAccount;
        if (!isStr(t.name)) err(f, `${S}: tAccount.name missing`);
        for (const side of ['debit', 'credit']) if (!Array.isArray(t[side]) || !t[side].every(r => Array.isArray(r) && r.length === 2 && r.every(c => typeof c === 'string'))) err(f, `${S}: tAccount.${side} must be [[label, amount], ...]`);
        if (t.balance !== undefined && (!['debit', 'credit'].includes(t.balance.side) || !isStr(t.balance.label) || !isStr(t.balance.amount))) err(f, `${S}: tAccount.balance needs side, label, amount`);
      }
      if (s.journal !== undefined) {
        if (!Array.isArray(s.journal) || !s.journal.length || !s.journal.every(j => ['Dr', 'Cr'].includes(j.side) && isStr(j.account) && isStr(j.amount))) err(f, `${S}: journal lines need side Dr|Cr, account, amount`);
      }
      if (s.example !== undefined) {
        const e = s.example;
        if (!isStr(e.problem) || !isStrArr(e.steps) || !isStr(e.answer)) err(f, `${S}: example needs problem, steps[], answer`);
      }
      if (s.svg !== undefined) {
        if (!isStr(s.svg) || !/^<svg[\s>]/.test(s.svg.trim()) || !/<\/svg>\s*$/.test(s.svg)) err(f, `${S}: svg must be a single <svg> element`);
        else {
          if (!/viewBox="0 0 440 \d+(\.\d+)?"/.test(s.svg)) err(f, `${S}: svg viewBox must be "0 0 440 H"`);
          if (/#[0-9a-fA-F]{3,8}\b|fill="(black|white|red|blue|green|gray|grey)"|stroke="(black|white|red|blue|green|gray|grey)"/.test(s.svg)) err(f, `${S}: svg uses a literal colour; use CSS variables`);
          if (/<script|on\w+=/i.test(s.svg)) err(f, `${S}: svg must not contain script or event handlers`);
          const small = [...s.svg.matchAll(/font-size="([\d.]+)"/g)].map(m => +m[1]).filter(n => n < 12.5);
          if (small.length) err(f, `${S}: svg font-size below 12.5`);
        }
      }
      if (s.words !== undefined && (!Array.isArray(s.words) || !s.words.every(w => Array.isArray(w) && w.length === 3 && isStr(w[0]) && typeof w[1] === 'string' && isStr(w[2])))) err(f, `${S}: words must be [[en, reading, meaning], ...]`);
    });
    if (!Array.isArray(l.quiz) || l.quiz.length < 4) err(f, `${L}: needs >= 4 quiz questions`);
    let english = 0;
    (l.quiz || []).forEach((q, i) => {
      const Q = `${L} quiz ${i + 1}`;
      if (!isStr(q.q) || !isStr(q.explain)) err(f, `${Q}: q and explain required`);
      if (/^[\x00-\x7F\s$£%,.()'":;?!\-–—/0-9]+$/.test(q.q || '')) english++;
      if (q.type === 'number') {
        if (typeof q.answer !== 'number' || !Number.isFinite(q.answer)) err(f, `${Q}: number answer must be a number`);
        if (typeof q.unit !== 'string') err(f, `${Q}: number question needs unit (string, may be empty)`);
      } else {
        if (q.type !== undefined) err(f, `${Q}: unknown type`);
        if (!isStrArr(q.choices) || q.choices.length < 2) err(f, `${Q}: choices required`);
        else if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.choices.length) err(f, `${Q}: answer index out of range`);
        else if (new Set(q.choices).size !== q.choices.length) err(f, `${Q}: duplicate choices`);
      }
    });
    if (l.id !== 'L01' && l.id !== 'L02' && english < 2) warn(f, `${L}: only ${english} English (ACCA-style) quiz questions; guide asks for >= 2`);
  }
  const ids = new Set(u.lessons.map(l => l.id));
  const perLesson = {};
  for (const c of u.cards || []) {
    if (!isStr(c.id) || !isStr(c.q) || !isStr(c.a)) err(f, `card ${c.id}: id, q, a required`);
    if (!ids.has(c.lesson)) err(f, `card ${c.id}: lesson ${c.lesson} not in this unit`);
    if (cardIds.has(c.id)) err(f, `card ${c.id}: duplicate id`);
    cardIds.add(c.id);
    perLesson[c.lesson] = (perLesson[c.lesson] || 0) + 1;
  }
  for (const id of ids) if (!perLesson[id] || perLesson[id] < 4) warn(f, `${id}: ${perLesson[id] || 0} cards (guide says 4-7)`);
}
for (const w of warns) console.log('WARN  ' + w);
for (const e of errors) console.log('ERROR ' + e);
console.log(`${files.length} file(s), ${lessonIds.size} lessons, ${cardIds.size} cards, ${errors.length} error(s), ${warns.length} warning(s)`);
process.exit(errors.length ? 1 : 0);
