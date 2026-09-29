import { summarizeProgress } from './practice-state.js';

// Descriptive topic labels, never hints or inferred skill ratings.
export const homeTopics = {
  '2026-1': ['Arithmetic', 'Explore an arithmetic expression.'],
  '2026-2': ['Number arrays', 'Explore a number array.'],
  '2026-3': ['Geometry', 'Explore shapes and perimeter.'],
  '2026-4': ['Percentages', 'Explore changing percentages.'],
  '2026-5': ['Speed & time', 'Explore a journey with a stop.']
};
export function hasUnfinishedWork(attempt) {
  return Boolean(attempt && !attempt.submitted && !attempt.revealed &&
    (attempt.selectedAnswer !== null || attempt.hints || attempt.wrong || attempt.coached || attempt.video));
}
export function homePlan(problems, records, attempts = new Map(), activeId = null) {
  const ids = Object.keys(problems);
  const summary = summarizeProgress(records);
  const items = ids.map(id => {
    const record = summary.latest.get(id), current = attempts.get(id);
    const continuing = hasUnfinishedWork(current);
    const independent = record?.result === 'correct' && record.independent === true;
    const status = continuing ? 'continuing' : !record ? 'new' : independent ? 'independent' : record.result === 'correct' ? 'supported' : 'exploring';
    const label = {continuing:'In progress',new:'Not yet tried',independent:'On my own',supported:'With support',exploring:'Exploring'}[status];
    const detail = continuing ? 'Your current attempt is still here, including any choices and help already used.'
      : !record ? 'A new idea to explore. Take the time you need; help is here when you want it.'
      : independent ? 'You answered on your own in your latest recorded attempt. A later revisit can help you check your thinking again.'
      : record.result === 'correct' ? 'Your latest answer was correct with support. Come back to the idea when you feel ready to try again.'
      : record.result === 'incorrect' ? 'Your last checked answer did not match yet. There is room to keep exploring the idea.'
      : ({hint:'You opened a hint',coach:'You opened the guided coach checks',video:'You opened a walkthrough',revealed:'You reviewed the solution'}[record.result] || 'You started exploring this idea') + '. You can return to the problem when you feel ready.';
    return {id,number:problems[id].number,topic:homeTopics[id]?.[0] || problems[id].topic,
      title:homeTopics[id]?.[1] || problems[id].title,record,continuing,status,label,detail,
      action:(continuing ? 'Continue Problem ' : record ? 'Try Problem ' : 'Start Problem ') + problems[id].number + (record && !continuing ? ' again' : '')};
  });
  const oldestFirst = list => [...list].sort((a,b) => Date.parse(a.record.at) - Date.parse(b.record.at));
  const review = oldestFirst(items.filter(item => item.record && !(item.record.result === 'correct' && item.record.independent === true)));
  const continuing = items.find(item => item.id === activeId && item.continuing) || items.find(item => item.continuing);
  const next = continuing || items.find(item => !item.record) || review[0] || oldestFirst(items)[0];
  const reason = continuing ? 'Pick up where you left off in this session.'
    : !summary.explored ? 'Begin with one small step, or choose any problem on your map.'
    : !next.record ? 'This is the next available problem you have not explored yet.'
    : review.length ? 'You have explored every available problem. Here is an idea to return to gently.'
    : 'You have tried every available problem on your own. Revisit an idea whenever you feel ready.';
  return {...summary,items,next,reason,review};
}
