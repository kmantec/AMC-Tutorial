import { problems } from './problems.js';
import { recommendedVideos } from './videos.js';
import { newAttempt, gradeAnswer, validRecords, summarizeProgress } from './practice-state.js';

const YEARS = [2026, 2025, 2024, 2023, 2022, 2020, 2019];
const ids = Object.keys(problems);
const STORAGE_KEY = 'pingping-amc8-practice-v1';
const $ = (selector) => document.querySelector(selector);
const icon = (name) => '<svg class="icon" aria-hidden="true"><use href="#i-' + name + '"/></svg>';
const escape = (value) => String(value).replace(/[&<>"']/g, (character) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
const source = (year) => 'https://artofproblemsolving.com/wiki/index.php?title=' + year + '_AMC_8';
const attempts = new Map();
let activeId = ids[0];
let records = [];
let storageAvailable = true;
let toastTimer;
const problem = () => problems[activeId];
const attempt = () => {
  if (!attempts.has(activeId)) attempts.set(activeId, newAttempt());
  return attempts.get(activeId);
};
try {
  records = validRecords(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'), problems);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
} catch { storageAvailable = false; }

function practiceButton(id, label, className = 'text-button') {
  return '<button class="' + className + '" data-action="practice" data-problem="' + id + '">' + escape(label) + '</button>';
}
$('#today-date').textContent = new Intl.DateTimeFormat('en', {weekday:'long',month:'long',day:'numeric'}).format(new Date()).toUpperCase();
$('#home-years').innerHTML = YEARS.map((year) => '<a class="year-card" href="' + source(year) + '" target="_blank" rel="noopener noreferrer" aria-label="Open ' + year + ' AMC 8 on AoPS"><strong>' + year + '</strong><small>25 problems</small>' + icon('external') + '</a>').join('');
$('#paper-grid').innerHTML = YEARS.map((year) => '<article class="paper-card"><div class="paper-year"><h2>' + year + '</h2><span>AMC 8</span></div><p>25 original problems<br>Source solutions on AoPS</p><a href="' + source(year) + '" target="_blank" rel="noopener noreferrer">Explore this exam ' + icon('external') + '</a>' + (year === 2026 ? '<div class="paper-practice-links">' + ids.map((id) => practiceButton(id, 'Practice Problem ' + problems[id].number)).join('') + '</div>' : '') + '</article>').join('');
$('#available-practice').innerHTML = ids.map((id) => '<button class="practice-pick" data-action="practice" data-problem="' + id + '"><span class="eyebrow">2026 AMC 8</span><strong>Problem ' + problems[id].number + '</strong><span>' + (id === '2026-1' ? 'First guide' : 'New guide') + ' · Hints, explanation & video</span>' + icon('arrow') + '</button>').join('');
$('#coach-techniques').innerHTML = ids.map((id) => '<article class="white-card"><span class="eyebrow">PROBLEM ' + problems[id].number + '</span><h3>' + escape(problems[id].title) + '</h3><p>' + escape(problems[id].topic) + '</p>' + practiceButton(id, 'Open this practice') + '</article>').join('');

function navigate(view, focus = false) {
  if (!['home','papers','notebook','coach'].includes(view)) view = 'home';
  document.querySelectorAll('.view').forEach((node) => { node.hidden = node.id !== 'view-' + view; });
  document.querySelectorAll('.nav-item').forEach((node) => {
    const active = node.dataset.view === view;
    node.classList.toggle('active', active);
    if (active) node.setAttribute('aria-current', 'page'); else node.removeAttribute('aria-current');
  });
  if (location.hash !== '#' + view) history.replaceState(null, '', '#' + view);
  if (view === 'notebook') renderProgress();
  if (focus) { $('#main').focus({preventScroll:true}); window.scrollTo({top:0,behavior:'instant'}); }
  return {view};
}
function stopVideo() {
  $('#video-player').replaceChildren();
  $('#video-player-area').hidden = true;
}
function hideVideos() {
  stopVideo();
  $('#video-section').hidden = true;
  $('#video-button').setAttribute('aria-expanded','false');
  $('#video-review-note').textContent = '';
}
function openPractice(id = ids[0]) {
  if (!Object.hasOwn(problems,id)) throw new Error('Choose an available reviewed problem.');
  hideVideos();
  activeId = id;
  renderProblem();
  if (!$('#practice-dialog').open) $('#practice-dialog').showModal();
  document.body.classList.add('dialog-open');
  $('#practice-dialog').scrollTop = 0;
  $('#practice-heading').focus({preventScroll:true});
  return {problem:activeId,opened:true,selectedAnswer:attempt().selectedAnswer,submitted:attempt().submitted};
}
function renderProblem() {
  const p = problem(), state = attempt();
  $('#exam-name').textContent = p.year + ' AMC 8';
  $('#exam-problem-number').textContent = 'PROBLEM ' + p.number;
  $('#practice-heading').textContent = p.year + ' AMC 8 — Problem ' + p.number;
  $('#suggested-pace').textContent = 'Suggested pace: within ' + p.suggestedPace;
  $('#problem-prompt').innerHTML = '<strong class="exam-number">' + p.number + '.</strong> ' + escape(p.prompt);
  $('#wording-note').hidden = p.wording !== 'restated';
  $('#problem-data').className = p.expression ? 'practice-expression' : 'problem-data';
  if (p.expression) $('#problem-data').innerHTML = '<span class="math-line">' + escape(p.expression) + '</span>';
  else if (p.matrix) $('#problem-data').innerHTML = '<table class="number-array" aria-label="Number array, 5 rows and 7 columns"><tbody>' + p.matrix.map((row) => '<tr>' + row.map((value) => '<td>' + value + '</td>').join('') + '</tr>').join('') + '</tbody></table>';
  else $('#problem-data').innerHTML = '<ol class="shape-facts" type="I">' + p.facts.map((fact) => '<li>' + escape(fact) + '</li>').join('') + '</ol>';
  $('#answer-options').classList.toggle('long-options',p.options.some((option) => option.label.length > 8));
  $('#answer-options').innerHTML = p.options.map((option,i) => '<label><input type="radio" name="answer" value="' + escape(option.value) + '"' + (i === 0 ? ' required' : '') + (state.selectedAnswer === String(option.value) ? ' checked' : '') + (state.submitted ? ' disabled' : '') + '><span><small>(' + option.letter + ')</small>' + escape(option.label) + '</span></label>').join('');
  $('#check-answer').disabled = state.submitted;
  $('#problem-source').href = p.sourceUrl;
  $('#problem-position').textContent = 'Problem ' + p.number + ' · ' + ids.length + ' guides available';
  $('#previous-problem').disabled = ids.indexOf(activeId) === 0;
  $('#next-problem').disabled = ids.indexOf(activeId) === ids.length - 1;
  $('#next-problem').textContent = ids.indexOf(activeId) === ids.length - 1 ? 'Last available problem' : 'Next problem';
  renderSolution(); renderAttempt(); renderVideos();
}
function renderSolution() {
  const p = problem();
  $('#solution-title').textContent = p.method;
  $('#solution-steps').innerHTML = p.solution.map((step) => '<li>' + escape(step) + '</li>').join('');
  $('#solution-answer').textContent = p.answerLabel;
  $('#method-score').textContent = String(p.score);
  $('#rating-reason').textContent = p.ratingReason;
  $('#solution-credit').textContent = p.credit + ' Teaching suitability is a subjective AI assessment, not an official AMC rating.';
  $('#tip-title').textContent = p.tipTitle;
  $('#tip-text').textContent = p.tip;
  $('#tip-credit').textContent = p.tipCredit;
  $('#common-error').textContent = p.commonError;
  $('#reflection').textContent = p.reflection;
  $('#alternative-text').textContent = p.alternative;
  $('#alternative-method').open = false;
}
function renderAttempt() {
  const state = attempt(), p = problem();
  $('#hint-content').hidden = state.hints === 0;
  $('#hint-content').innerHTML = state.hints ? p.hints.slice(0,state.hints).map((hint,i) => '<div><strong>HINT ' + (i+1) + ' OF ' + p.hints.length + '</strong>' + escape(hint) + '</div>').join('') : '';
  $('#hint-button').disabled = state.submitted || state.hints === p.hints.length;
  $('#hint-button').innerHTML = icon('spark') + (state.hints === p.hints.length ? 'All hints shown' : state.hints ? 'Another hint' : 'Give me a hint');
  $('#before-solution').hidden = state.revealed;
  $('#solution-content').hidden = !state.revealed;
  $('#reveal-button').disabled = state.revealed;
  const feedback = $('#answer-feedback');
  feedback.hidden = !state.feedback && !state.revealed;
  feedback.className = 'feedback' + (state.feedback?.correct ? ' success' : '');
  if (state.feedback?.correct) feedback.textContent = 'Correct — ' + p.answerLabel + '. ' + (state.feedback.independent ? 'You solved this attempt on your own.' : 'You worked through it with support. Revisit it later to try on your own.');
  else if (state.feedback) feedback.textContent = 'Not quite yet. Check the information and your calculation, then try again. A hint is here if you need one.';
  else if (state.revealed) feedback.textContent = 'Solution reviewed. Come back later and try it without the steps.';
}
function persist(result, independent = false) {
  const state = attempt();
  records.push({problem:activeId,result,hints:state.hints,independent,video:state.video,at:new Date().toISOString()});
  records = records.slice(-200);
  if (storageAvailable) {
    try { localStorage.setItem(STORAGE_KEY,JSON.stringify(records)); }
    catch { storageAvailable = false; toast('This browser could not save your record. Your practice remains available in this session.'); }
  }
  renderProgress();
}
function showHint() {
  requirePractice();
  const state = attempt();
  if (state.submitted) throw new Error('This attempt is complete. Try again before requesting hints.');
  if (state.hints < problem().hints.length) { state.hints++; persist('hint'); }
  renderAttempt();
  return {problem:activeId,hint:problem().hints[state.hints-1],count:state.hints};
}
function showSolution() {
  requirePractice();
  const state = attempt();
  if (!state.revealed && !state.submitted) { state.revealed = true; persist('revealed'); }
  state.revealed = true;
  renderAttempt();
  return {problem:activeId,solution:problem().method,answer:problem().answer};
}
function checkAnswer(answer) {
  requirePractice();
  const result = gradeAnswer(problem(),attempt(),answer);
  persist(result.correct ? 'correct' : 'incorrect',result.independent);
  if (result.correct) attempt().revealed = true;
  $('#answer-options').querySelectorAll('input').forEach((input) => {
    input.checked = input.value === attempt().selectedAnswer;
    input.disabled = attempt().submitted;
  });
  $('#check-answer').disabled = attempt().submitted;
  renderAttempt();
  return {problem:activeId,...result};
}
function retryPractice() {
  requirePractice();
  attempts.set(activeId,newAttempt());
  hideVideos(); renderProblem();
  $('#practice-dialog').scrollTop = 0;
  $('#answer-options input').focus({preventScroll:true});
  return {problem:activeId,reset:true};
}
function renderProgress() {
  const {explored,independent,revisit,latest} = summarizeProgress(records);
  $('#completed-count').textContent = String(explored);
  $('#independent-count').textContent = String(independent);
  $('#review-count').textContent = String(revisit);
  const degrees = explored / ids.length * 360;
  $('#progress-ring').style.background = 'conic-gradient(#8daaeb 0deg ' + degrees + 'deg, #edf1f8 ' + degrees + 'deg 360deg)';
  $('#progress-heading').textContent = explored ? revisit ? 'Ideas to revisit.' : 'Good steps forward.' : 'A fresh page.';
  $('#progress-message').textContent = explored ? explored + ' of ' + ids.length + ' available problems explored. “On my own” reflects your latest attempt, not mastery.' : 'Your learning record begins with your first problem.';
  $('#storage-status').textContent = storageAvailable ? explored ? 'Practice saved on this device' : 'Practice stays on this device' : 'Practice available for this session';
  $('#notebook-storage').textContent = storageAvailable ? 'Saved in this browser on this device. Your current selections stay in place while you switch problems; reloading begins fresh attempts.' : 'Saving is unavailable. Your learning record lasts for this session.';
  const date = (at) => new Intl.DateTimeFormat('en',{month:'short',day:'numeric',hour:'numeric',minute:'2-digit'}).format(new Date(at));
  const resultText = (record) => ({video:'Video walkthrough opened',hint:'Hint ' + record.hints + ' opened',revealed:'Solution reviewed',incorrect:'An attempt to learn from',correct:record.independent ? 'Correct · On my own this attempt' : 'Correct · With support this attempt'}[record.result]);
  if (!explored) {
    $('#notebook-content').innerHTML = '<div class="empty-notebook">' + icon('note') + '<h2>Your progress starts here.</h2><p>Try a problem to begin your learning record.</p>' + practiceButton(ids[0],'Start my first practice','button button-primary') + '</div>';
    return;
  }
  $('#notebook-content').innerHTML = ids.filter((id) => latest.has(id)).map((id) => {
    const record = latest.get(id), count = records.filter((item) => item.problem === id).length;
    return '<article class="notebook-card"><div><span class="eyebrow">2026 AMC 8 · PROBLEM ' + problems[id].number + '</span><h2>' + escape(problems[id].title) + '</h2><p>' + resultText(record) + '</p><p>' + count + ' learning ' + (count === 1 ? 'moment' : 'moments') + ' recorded</p></div>' + practiceButton(id,'Return to this problem','button button-primary') + '</article>';
  }).join('') + '<section class="notebook-history"><h3>Your recent learning moments</h3>' + records.slice(-12).reverse().map((record) => '<div class="history-row"><span>Problem ' + problems[record.problem].number + ' · ' + resultText(record) + '</span><small>' + date(record.at) + '</small></div>').join('') + '</section>';
}
function toast(message) {
  $('#toast').textContent = message; $('#toast').hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { $('#toast').hidden = true; },5000);
}
function requirePractice() {
  if (!$('#practice-dialog').open) throw new Error('Start a practice problem first.');
}
function markVideoSupport() {
  if (!attempt().video && !attempt().submitted) { attempt().video = true; persist('video'); }
}
function renderVideos() {
  const videos = recommendedVideos[activeId] || [];
  $('#video-button').hidden = !videos.length;
  $('#video-recommendations').replaceChildren();
  for (const video of videos) {
    const card = document.createElement('article'); card.className = 'video-card';
    card.innerHTML = '<span class="eyebrow">COACH’S PICK · ' + escape(video.segmentLabel) + '</span><h4>' + escape(video.title) + '</h4><p class="video-channel">' + escape(video.channel) + '</p><p>' + escape(video.reason) + '</p>';
    const actions = document.createElement('div'); actions.className = 'video-card-actions';
    const play = document.createElement('button'); play.type = 'button'; play.className = 'button button-primary'; play.textContent = 'Watch here';
    play.addEventListener('click',() => loadWalkthrough(video.id));
    const link = document.createElement('a'); link.className = 'text-button'; link.href = video.watchUrl; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = 'Open on YouTube ↗';
    link.addEventListener('click',markVideoSupport);
    actions.append(play,link); card.append(actions); $('#video-recommendations').append(card);
  }
}
function openVideoSection() {
  requirePractice();
  $('#video-section').hidden = false;
  $('#video-button').setAttribute('aria-expanded','true');
  $('#video-section').scrollIntoView({behavior:'instant',block:'start'});
  return {problem:activeId,availableVideos:(recommendedVideos[activeId] || []).map((video) => ({id:video.id,title:video.title,channel:video.channel}))};
}
function loadWalkthrough(videoId) {
  requirePractice();
  const video = (recommendedVideos[activeId] || []).find((item) => item.id === videoId);
  if (!video) throw new Error('Choose a reviewed walkthrough for this problem.');
  openVideoSection(); stopVideo(); markVideoSupport();
  const embed = new URL('https://www.youtube-nocookie.com/embed/' + video.id);
  for (const [key,value] of Object.entries({playsinline:1,rel:0,autoplay:0,start:video.startSeconds || 0})) embed.searchParams.set(key,String(value));
  if (Number.isInteger(video.endSeconds)) embed.searchParams.set('end',String(video.endSeconds));
  const frame = document.createElement('iframe');
  frame.src = embed.href; frame.title = video.title + ' — ' + video.channel;
  frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  frame.allowFullscreen = true; frame.referrerPolicy = 'strict-origin-when-cross-origin';
  $('#video-player').append(frame); $('#video-player-area').hidden = false;
  $('#youtube-fallback').href = video.watchUrl;
  $('#playing-video-label').textContent = video.channel + ' · ' + video.segmentLabel;
  $('#video-review-note').textContent = video.reviewNote;
  $('#video-player-area').scrollIntoView({behavior:'instant',block:'start'});
  return {problem:activeId,id:video.id,embedUrl:embed.href,fallbackUrl:video.watchUrl,assistedAttempt:attempt().video};
}
function backToProblem() {
  requirePractice(); hideVideos();
  $('.problem-column').scrollIntoView({behavior:'instant',block:'start'});
  $('#video-button').focus({preventScroll:true});
  return {problem:activeId,selectedAnswer:attempt().selectedAnswer,videoStopped:true};
}
document.addEventListener('click',(event) => {
  const target = event.target.closest('[data-view],[data-action]');
  if (!target) return;
  if (target.dataset.view) navigate(target.dataset.view,true);
  else if (target.dataset.action === 'practice') openPractice(target.dataset.problem || ids[0]);
});
$('#answer-form').addEventListener('change',(event) => { if (event.target.name === 'answer') attempt().selectedAnswer = event.target.value; });
$('#answer-form').addEventListener('submit',(event) => {
  event.preventDefault();
  const choice = new FormData(event.currentTarget).get('answer');
  if (choice) checkAnswer(choice);
});
$('#previous-problem').addEventListener('click',() => openPractice(ids[ids.indexOf(activeId)-1]));
$('#next-problem').addEventListener('click',() => openPractice(ids[ids.indexOf(activeId)+1]));
$('#close-practice').addEventListener('click',() => $('#practice-dialog').close());
$('#practice-dialog').addEventListener('close',() => { hideVideos(); document.body.classList.remove('dialog-open'); });
$('#hint-button').addEventListener('click',showHint);
$('#reveal-button').addEventListener('click',showSolution);
$('#retry-button').addEventListener('click',retryPractice);
$('#video-button').addEventListener('click',openVideoSection);
$('#back-to-problem').addEventListener('click',backToProblem);
window.addEventListener('hashchange',() => { if (location.hash !== '#main') navigate(location.hash.slice(1),true); });
window.addEventListener('storage',(event) => {
  if (event.key !== STORAGE_KEY) return;
  try { records = validRecords(JSON.parse(event.newValue || '[]'),problems); renderProgress(); } catch { /* Keep current records on invalid JSON. */ }
});
window.addEventListener('pagehide',stopVideo);
renderProgress();
navigate(location.hash.slice(1));

const modelContext = document.modelContext;
if (modelContext?.registerTool) {
  const lifecycle = new AbortController();
  const objectSchema = (properties = {},required = []) => ({type:'object',properties,required,additionalProperties:false});
  const register = (name,title,description,inputSchema,readOnlyHint,execute) => {
    try { Promise.resolve(modelContext.registerTool({name,title,description,inputSchema,annotations:{readOnlyHint},execute},{signal:lifecycle.signal})).catch(() => {}); } catch { /* Optional browser capability. */ }
  };
  register('read_practice_progress','Read practice progress','Read the actual device-local records, available questions, and current attempt.',objectSchema(),true,() => ({
    reviewedProblemsAvailable:ids.length,examEditions:YEARS,availableProblems:ids.map((id) => ({id,number:problems[id].number})),
    records:records.map((record) => ({...record})),activeProblem:activeId,practiceOpen:$('#practice-dialog').open,
    submitted:attempt().submitted,selectedAnswer:attempt().selectedAnswer,hintsUsed:attempt().hints,
    videoUsed:attempt().video,videoOpen:$('#practice-dialog').open && !$('#video-section').hidden,activeEmbed:$('#video-player iframe')?.src || null,
    choices:problem().options,videos:(recommendedVideos[activeId] || []).map((video) => ({id:video.id,segment:video.segmentLabel}))
  }));
  register('start_practice_problem','Open a reviewed AMC 8 problem','Open or resume a reviewed question, preserving each question’s attempt while switching. Use retry_practice_problem to reset.',objectSchema({problemId:{type:'string',enum:ids}},['problemId']),false,(input) => { if (!ids.includes(input?.problemId)) throw new Error('Choose an available reviewed problem.'); return openPractice(input.problemId); });
  register('submit_practice_answer','Submit a practice answer','Check a current choice and record the attempt. Use a numeric value for numeric choices, or A–E for text choices.',objectSchema({answer:{type:['integer','string']}},['answer']),false,(input) => {
    if (!['number','string'].includes(typeof input?.answer)) throw new Error('Provide an answer from the current question.');
    return checkAnswer(input.answer);
  });
  register('request_practice_hint','Show the next hint','Show and record the next staged hint for the current question.',objectSchema(),false,showHint);
  register('reveal_practice_solution','Reveal the solution','Reveal the explanation and record solution support for an unfinished attempt.',objectSchema(),false,showSolution);
  register('retry_practice_problem','Start a new attempt','Reset only the current question’s attempt. Keep saved learning records and other questions unchanged.',objectSchema(),false,retryPractice);
  register('open_recommended_walkthrough','Open a reviewed video walkthrough','Load the reviewed segment for the current question and record support for an unfinished attempt. The learner presses play to begin.',objectSchema({videoId:{type:'string'}},['videoId']),false,(input) => loadWalkthrough(input?.videoId));
  register('return_to_practice_problem','Return from video to the problem','Stop and remove the video while preserving the current answer and attempt state.',objectSchema(),false,backToProblem);
  window.addEventListener('pagehide',() => lifecycle.abort(),{once:true});
}
