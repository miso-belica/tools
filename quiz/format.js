// Quiz file format, shared by the game (index.html) and the builder (builder.html).

export const DEFAULT_TIME = 20;

// ───────────────────────── quiz format ─────────────────────────
// Slides separated by `---`. A slide with 2+ task-list items is a question:
//   - [x] correct   - [ ] wrong      (none marked = poll, no points;
//                                     several marked = tick all that apply)
// HTML comments hold per-question settings (time, points, double, multi) or,
// for any other text, speaker notes that only the phone remote shows.
// Optional front matter: title, time (seconds per question, 0 = no limit),
// points (multiplier for every question, default 1), scoring (speed | flat).
export function parseQuiz(source, fallbackTitle = 'Quiz', { local = false } = {}) {
  const lines = source.replace(/\r\n?/g, '\n').split('\n');
  const meta = {};
  const warnings = [];                          // { step (1-based) | null, text }
  const isNum = v => String(v).trim() !== '' && Number.isFinite(Number(v));
  if (/^---\s*$/.test(lines[0] ?? '')) {
    const end = lines.findIndex((l, i) => i > 0 && /^---\s*$/.test(l));
    const body = end > 0 ? lines.slice(1, end).filter(l => l.trim()) : [];
    if (end > 0 && body.length && body.every(l => /^[\w-]+\s*:/.test(l))) {
      for (const l of body) meta[l.slice(0, l.indexOf(':')).trim().toLowerCase()] = l.slice(l.indexOf(':') + 1).trim();
      lines.splice(0, end + 1);
    }
  }
  const chunks = [[]];
  let fence = false, comment = false;
  for (const line of lines) {
    if (!comment && /^\s*(```|~~~)/.test(line)) fence = !fence;
    if (!fence && !comment && /^\s*<!--/.test(line)) comment = true;
    if (!fence && !comment && /^-{3,}\s*$/.test(line)) chunks.push([]);
    else chunks.at(-1).push(line);
    if (comment && /-->\s*$/.test(line)) comment = false;
  }
  const num = (v, d) => (Number.isFinite(Number(v)) && String(v).trim() !== '' ? Math.max(0, Math.min(3600, Number(v))) : d);
  const defaultTime = num(meta.time, DEFAULT_TIME);
  const mult = (v, d) => (Number.isFinite(Number(v)) && String(v).trim() !== '' ? Math.max(0, Math.min(100, Number(v))) : d);
  const defaultPoints = mult(meta.points, 1);
  for (const key of Object.keys(meta)) {
    if (!['title', 'time', 'points', 'scoring'].includes(key)) warnings.push({ step: null, text: `Unknown setting “${key}” at the top of the file. Known: title, time, points, scoring.` });
  }
  if ('time' in meta && !isNum(meta.time)) warnings.push({ step: null, text: `time: “${meta.time}” is not a number of seconds; using ${DEFAULT_TIME}.` });
  if ('points' in meta && !isNum(meta.points)) warnings.push({ step: null, text: `points: “${meta.points}” is not a number; using 1.` });
  if ('scoring' in meta && !/^(speed|flat)$/i.test(meta.scoring)) warnings.push({ step: null, text: `scoring: “${meta.scoring}” is not “speed” or “flat”; using speed.` });
  const TASK = /^\s*[-*+]\s+\[( |x|X)\]\s+(.*)$/;
  const SETTING = /^(time|multi|points|double)\s*(?::\s*(.*))?$/i;

  // HTML comments on their own lines stay invisible on GitHub. A known
  // setting configures the question; anything else is a speaker note.
  function takeComments(chunk) {
    const rest = [], set = {}, notes = [], odd = [];
    const take = text => {
      const inner = text.replace(/^\s*<!--/, '').replace(/-->\s*$/, '').trim();
      const m = inner.match(SETTING);
      if (m) set[m[1].toLowerCase()] = (m[2] ?? '').trim();
      else if (inner) {
        notes.push(inner.replace(/^notes?\s*:\s*/i, ''));
        if (/^[a-z]+\s*:\s*[\d.]+$/i.test(inner)) odd.push(`“${inner}” is not a known setting, so it became a speaker note. Settings: time, points, double, multi.`);
      }
    };
    let fenced = false, open = null;
    for (const line of chunk) {
      if (open) { open.push(line); if (/-->\s*$/.test(line)) { take(open.join('\n')); open = null; } continue; }
      if (/^\s*(```|~~~)/.test(line)) fenced = !fenced;
      if (!fenced && /^\s*<!--/.test(line)) { if (/-->\s*$/.test(line)) take(line); else open = [line]; continue; }
      rest.push(line);
    }
    if (open) { rest.push(...open); odd.push('A comment starting with <!-- is never closed with -->.'); } // leave the text alone
    if (fenced) odd.push('A code block is opened but never closed.');
    return { rest, set, notes: notes.join('\n\n').slice(0, 4000), odd };
  }

  const steps = [];
  for (const raw of chunks) {
    if (!raw.some(l => l.trim())) continue;
    const { rest: chunk, set, notes, odd } = takeComments(raw);
    const taskIdx = chunk.flatMap((l, i) => (TASK.test(l) ? [i] : []));
    const warn = text => warnings.push({ step: steps.length + 1, text });
    odd.forEach(warn);
    const body = chunk.join('\n');
    if (local && /!\[[^\]]*\]\((?!https?:|data:)[^)]+\)|<img[^>]+src=["']?(?!https?:|data:)/i.test(body)) {
      warn('A picture uses a relative link. That only works when the quiz is loaded from a URL (?src=…), not from a file.');
    }
    if (/data:image\/[^)\s"']{60000,}/.test(body)) warn('An embedded picture is large; it may be slow or fail to reach phones. Link to it instead.');
    if (taskIdx.length < 2) {
      if (!chunk.some(l => l.trim()) && !notes) continue;
      if (taskIdx.length === 1) warn('Looks like a question but has only one option, so it is shown as a slide.');
      else if (Object.keys(set).length) warn(`“${Object.keys(set).join(', ')}” has no effect on a slide without options.`);
      steps.push({ type: 'slide', md: chunk.join('\n').trim(), notes });
      continue;
    }
    const options = taskIdx.map(i => { const m = chunk[i].match(TASK); return { text: m[2].trim(), correct: m[1] !== ' ' }; });
    const correct = options.flatMap((o, i) => (o.correct ? [i] : []));
    if (!chunk.slice(0, taskIdx[0]).some(l => l.trim())) warn('The question has no text above its options.');
    if (new Set(options.map(o => o.text.toLowerCase())).size < options.length) warn('Two options have the same text.');
    if (options.length > 8) warn(`${options.length} options is a lot to fit on a phone.`);
    if ('time' in set && !isNum(set.time)) warn(`time: “${set.time}” is not a number of seconds.`);
    if ('points' in set && !isNum(set.points)) warn(`points: “${set.points}” is not a number.`);
    if (!correct.length && ('points' in set || 'double' in set)) warn('Points are set, but no option is marked [x], so this is a poll without points.');
    steps.push({
      type: 'question', correct, notes,
      text: chunk.slice(0, taskIdx[0]).join('\n').trim(),
      explain: chunk.slice(taskIdx.at(-1) + 1).join('\n').trim(),
      options: options.map(o => o.text),
      time: 'time' in set ? num(set.time, defaultTime) : defaultTime,
      // <!-- points: 3 --> multiplies what the question is worth; <!-- double --> is points: 2.
      points: 'points' in set ? mult(set.points, defaultPoints) : 'double' in set ? defaultPoints * 2 : defaultPoints,
      // Several correct options, or an explicit <!-- multi -->: players tick all that apply.
      multi: correct.length > 1 || ('multi' in set && !/^(off|no|false|0)$/i.test(set.multi)),
      // Which settings were written on the question itself (the builder keeps the rest as "default").
      own: { time: 'time' in set, points: 'points' in set || 'double' in set },
    });
  }
  if (!steps.length) throw new Error('The file has no slides or questions.');
  const h1 = source.match(/^#\s+(.+)$/m)?.[1];
  // scoring: speed (default) gives up to 1000 points, fewer for slower answers; flat gives 1 per question.
  const scoring = /^flat$/i.test(meta.scoring ?? '') ? 'flat' : 'speed';
  if (!steps.some(s => s.type === 'question')) warnings.push({ step: null, text: 'There are no questions. A question is a slide with a task list: “- [x] right” and “- [ ] wrong”.' });
  return {
    title: (meta.title || h1 || fallbackTitle).slice(0, 80), scoring, steps, warnings,
    meta: { title: meta.title ?? '', time: defaultTime, points: defaultPoints },
  };
}

export const SAMPLE = `---
title: Sample quiz
time: 20
---

# Sample quiz

Slides are separated by a line with three dashes.

A slide with a task list is a **question**. Everything else is a plain slide.

<!-- A comment like this is a speaker note. Only the phone remote shows it. -->

---

## What is the capital of Australia?

- [ ] Sydney
- [x] Canberra
- [ ] Melbourne
- [ ] Perth

Text after the options is shown only after the reveal: Canberra was built as a compromise between Sydney and Melbourne.

---

## Which one is **not** a programming language?

<!-- time: 30 -->

- [ ] Rust
- [ ] Kotlin
- [x] Granite
- [ ] Elixir

---

## Which of these are prime numbers?

Several options are marked, so players tick all that apply.

- [x] 2
- [ ] 9
- [x] 13
- [ ] 15

---

## Tabs or spaces?

No option is marked, so this is a poll and gives no points.

- [ ] Tabs
- [ ] Spaces
- [ ] Whatever the formatter does

---

## How many bits are in a byte?

<!-- double -->

- [ ] 4
- [x] 8
- [ ] 16

---

# Thanks for playing!
`;

// Short reference shown next to the sample.
export const SETTINGS_HELP = [
  ['time: 20', 'top of file — seconds per question, 0 = no limit'],
  ['points: 1', 'top of file — multiplier for every question'],
  ['scoring: flat', 'top of file — 1 point per question instead of speed-based points'],
  ['<!-- time: 30 -->', 'on a question — its own time limit'],
  ['<!-- points: 3 -->  <!-- double -->', 'on a question — worth 3× or 2×'],
  ['<!-- multi -->', 'on a question — players may tick several options'],
  ['<!-- any other text -->', 'speaker note, shown only on the phone remote'],
  ['- [ ] ![alt](https://…/pic.jpg)', 'picture as an answer option'],
];

// ── Builder model → Markdown. The model is what builder.html edits:
//   { title, time, points, scoring, steps: [
//       { type: 'slide', md, notes }
//     | { type: 'question', text, options: [{ text, correct }], time, points, multi, explain, notes } ] }
// A question's time/points of '' (or null) means "use the quiz default".
export function serializeQuiz(model) {
  const time = Number.isFinite(Number(model.time)) && model.time !== '' ? Number(model.time) : DEFAULT_TIME;
  const points = Number.isFinite(Number(model.points)) && model.points !== '' ? Number(model.points) : 1;
  const front = [];
  if (model.title?.trim()) front.push(`title: ${model.title.trim().replace(/\s+/g, ' ')}`);
  if (time !== DEFAULT_TIME) front.push(`time: ${time}`);
  if (points !== 1) front.push(`points: ${points}`);
  if (model.scoring === 'flat') front.push('scoring: flat');

  // A bare --- line would split the slide in two; *** renders the same rule.
  const body = text => {
    let fence = false;
    return String(text ?? '').replace(/\r\n?/g, '\n').split('\n').map(line => {
      if (/^\s*(```|~~~)/.test(line)) fence = !fence;
      return !fence && /^-{3,}\s*$/.test(line) ? '***' : line;
    }).join('\n').trim();
  };
  const note = text => (String(text ?? '').trim() ? `<!--\n${String(text).trim().replaceAll('-->', '--&gt;')}\n-->` : '');
  const has = v => v !== '' && v != null && Number.isFinite(Number(v));

  const parts = model.steps.map(s => {
    if (s.type === 'slide') return [body(s.md), note(s.notes)].filter(Boolean).join('\n\n');
    const options = s.options.filter(o => o.text.trim());
    const marked = options.filter(o => o.correct).length;
    const settings = [];
    if (has(s.time) && Number(s.time) !== time) settings.push(`<!-- time: ${Number(s.time)} -->`);
    if (has(s.points) && Number(s.points) !== points) settings.push(Number(s.points) === points * 2 ? '<!-- double -->' : `<!-- points: ${Number(s.points)} -->`);
    if (s.multi && marked <= 1) settings.push('<!-- multi -->');
    return [
      body(s.text), settings.join('\n'),
      options.map(o => `- [${o.correct ? 'x' : ' '}] ${o.text.replace(/\s+/g, ' ').trim()}`).join('\n'),
      body(s.explain), note(s.notes),
    ].filter(Boolean).join('\n\n');
  });
  return (front.length ? `---\n${front.join('\n')}\n---\n\n` : '') + parts.filter(Boolean).join('\n\n---\n\n') + '\n';
}

// ── Parsed quiz → builder model (the inverse of serializeQuiz).
export function toModel(quiz) {
  return {
    title: quiz.meta.title || quiz.title, time: quiz.meta.time, points: quiz.meta.points, scoring: quiz.scoring,
    steps: quiz.steps.map(s => (s.type === 'slide'
      ? { type: 'slide', md: s.md, notes: s.notes }
      : {
          type: 'question', text: s.text, explain: s.explain, notes: s.notes, multi: s.multi,
          options: s.options.map((text, i) => ({ text, correct: s.correct.includes(i) })),
          time: s.own.time ? s.time : '', points: s.own.points ? s.points : '',
        })),
  };
}
