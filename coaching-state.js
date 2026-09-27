// Page-session state stays separate for each original problem and its adaptation.
export function newCoachState() {
  return { open: false, checkIndex: 0, answers: [], similarOpen: false,
    similarAnswer: null, similarSeen: false, reflectionAnswer: null, reflectionSeen: false };
}
function choose(check, answer) {
  const option = check.options.find((item) => item.id === answer);
  if (!option) throw new Error('Choose one of these two answers.');
  return { id: check.id, answer: option.id, correct: option.correct, feedback: option.feedback };
}
export function answerCoachCheck(guide, state, answer) {
  if (!state.open) throw new Error('Open Coach’s Corner first.');
  if (state.answers[state.checkIndex]) throw new Error('This check is already answered.');
  const result = { ...choose(guide.checks[state.checkIndex], answer), firstTry: true };
  state.answers[state.checkIndex] = result;
  return result;
}
export function nextCoachCheck(guide, state) {
  if (!state.open || !state.answers[state.checkIndex]) throw new Error('Choose an answer before the next check.');
  if (state.checkIndex >= guide.checks.length - 1) throw new Error('There are no more checks.');
  state.checkIndex++;
}
export function answerSimilar(guide, state, answer) {
  if (!state.similarOpen) throw new Error('Open the similar problem first.');
  if (state.similarAnswer) throw new Error('This practice is already answered.');
  const similar = guide.similar;
  const option = similar.options.find((item) => String(item.value) === String(answer));
  if (!option) throw new Error('Choose one of these two answers.');
  const correct = String(option.value) === String(similar.answer);
  const result = { id: similar.id, answer: String(option.value), correct,
    firstTry: !state.similarSeen, independent: correct && !state.similarSeen };
  state.similarAnswer = result;
  state.similarSeen = true;
  return result;
}
export function retrySimilar(state) {
  if (!state.similarAnswer) throw new Error('Finish this practice before trying again.');
  state.similarAnswer = null;
  state.reflectionAnswer = null;
  // Retrying after feedback must not erase the fact that the answer was seen.
}
export function answerReflection(guide, state, answer) {
  if (!state.similarOpen || !state.similarAnswer) throw new Error('Try the similar problem before this check.');
  if (state.reflectionAnswer) throw new Error('This check is already answered.');
  const result = { ...choose(guide.similar.reflection, answer), firstTry: !state.reflectionSeen };
  state.reflectionAnswer = result;
  state.reflectionSeen = true;
  return result;
}
