import { problems } from './problems.js';

const ids = [
  '2019-8', '2019-10', '2019-15', '2019-20', '2019-23', '2019-24',
  '2020-2', '2020-3', '2020-8', '2020-10', '2020-12', '2020-15', '2020-17', '2020-18', '2020-20', '2020-22', '2020-24',
  '2024-7', '2024-10', '2024-11', '2024-15',
  '2025-1', '2025-9', '2025-10', '2025-15', '2025-20', '2025-24',
];

for (const id of ids) {
  const p = problems[id];
  console.log(`\n##### ${id} — ${p.title}  [${p.topic}]`);
  console.log('Q: ' + p.prompt);
  (p.hints || []).forEach((h, i) => console.log(`H${i + 1}: ${h}`));
  console.log('ANS: ' + p.answerLabel);
}
