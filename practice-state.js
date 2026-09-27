export function newAttempt() {
  return { hints: 0, revealed: false, wrong: false, submitted: false, video: false, coached: false, selectedAnswer: null, feedback: null };
}

export function gradeAnswer(problem, attempt, answer) {
  const selected = problem.options.find((option) => String(option.value) === String(answer));
  if (!selected) throw new Error('Choose one of the five answers for this problem.');
  if (attempt.submitted) throw new Error('This attempt is complete. Use Try again to begin a new attempt.');
  attempt.selectedAnswer = String(selected.value);
  const correct = String(selected.value) === String(problem.answer);
  const independent = correct && attempt.hints === 0 && !attempt.revealed && !attempt.wrong && !attempt.video && !attempt.coached;
  if (correct) attempt.submitted = true;
  else attempt.wrong = true;
  attempt.feedback = { correct, independent };
  return { correct, independent, answer: correct ? problem.answer : null };
}

export function validRecords(saved, problems) {
  if (!Array.isArray(saved)) return [];
  return saved.filter((record) => record && Object.hasOwn(problems, record.problem)
    && ['correct', 'incorrect', 'revealed', 'video', 'hint', 'coach'].includes(record.result)
    && Number.isInteger(record.hints) && record.hints >= 0 && record.hints <= problems[record.problem].hints.length
    && typeof record.at === 'string' && Number.isFinite(Date.parse(record.at))).slice(-200);
}

export function summarizeProgress(records) {
  const latest = new Map();
  for (const record of records) latest.set(record.problem, record);
  const independent = [...latest.values()].filter((record) => record.result === 'correct' && record.independent === true).length;
  return { explored: latest.size, independent, revisit: latest.size - independent, latest };
}
