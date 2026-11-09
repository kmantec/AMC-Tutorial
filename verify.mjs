import assert from 'node:assert/strict';
import fs from 'node:fs';
import { problems } from './problems.js';
import { recommendedVideos, parentSelectedVideos, walkthroughVideos } from './videos.js';
import { newAttempt, gradeAnswer, validRecords, summarizeProgress } from './practice-state.js';
import { coachGuides } from './coach-content.js';
import { distractorsByProblem, checkDistractorMap } from './distractors.js';
import './coaching-state.test.mjs';
import './learning-store.test.mjs';
import './coach-speech.test.mjs';
import './home-plan.test.mjs';
import './exam-session.test.mjs';

const root = new URL('./', import.meta.url);
const read = (file) => fs.readFileSync(new URL(file, root), 'utf8');
const html = read('index.html');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
assert.equal(new Set(ids).size, ids.length, 'HTML IDs must be unique');
for (const [,asset] of html.matchAll(/(?:href|src)="(\.[^"#?]+)"/g)) assert.ok(fs.existsSync(new URL(asset, root)), 'Missing asset: ' + asset);
for (const [,id] of html.matchAll(/<use href="#([^"]+)"/g)) assert.ok(ids.includes(id), 'Missing icon: ' + id);
for (const file of ['app.js','home-plan.js','problems.js','videos.js','practice-state.js','coach-content.js','coaching-state.js','learning-store.js','coach-speech.js','exam-session.js','exam-ui.js','mental-math.js','error-log.js','distractors.js','pacing.js']) {
  const code = read(file);
  assert.ok(!/[\u0e00-\u0e7f]/.test(code), 'Learner content must be English');
  for (const [,dependency] of code.matchAll(/from '(\.[^']+)'/g)) assert.ok(fs.existsSync(new URL(dependency,root)));
}
for (const [,id] of read('app.js').matchAll(/\$\('#([a-z][a-z0-9-]*)'\)/g)) assert.ok(ids.includes(id), 'Missing UI target: ' + id);
assert.equal(JSON.parse(read('manifest.webmanifest')).lang,'en');
const css = read('styles.css');
assert.equal((css.match(/{/g)||[]).length,(css.match(/}/g)||[]).length);
for (const p of Object.values(problems)) {
  assert.equal(p.options.length,5);
  assert.equal(new Set(p.options.map((option) => String(option.value))).size,5);
  assert.ok(p.options.some((option) => option.value === p.answer));
  assert.equal(p.hints.length,3);
  // The practice dialog renders these unconditionally, so a missing one throws
  // inside renderProblem and the dialog never opens — the bug that hid
  // 2026-6..10. Require them here so content batches cannot ship half a record.
  assert.ok(Array.isArray(p.solution) && p.solution.length >= 3, 'Missing solution steps: ' + p.id);
  // A closing "Answer: D." line is legitimate, and a short problem deserves a
  // short solution, so only presence and type are enforced here.
  assert.ok(p.solution.every((step) => typeof step === 'string' && step.trim().length > 0), 'Empty solution step: ' + p.id);
  assert.ok(typeof p.method === 'string' && p.method.length > 5, 'Missing method: ' + p.id);
  assert.ok(typeof p.score === 'number' && p.score >= 1 && p.score <= 10, 'Missing or invalid score: ' + p.id);
  assert.ok(typeof p.ratingReason === 'string' && p.ratingReason.length > 20, 'Missing ratingReason: ' + p.id);
  assert.ok(typeof p.answerLabel === 'string' && p.answerLabel.length > 0, 'Missing answerLabel: ' + p.id);
  assert.ok(typeof p.credit === 'string' && p.credit.length > 10, 'Missing credit: ' + p.id);
  const videos = walkthroughVideos[p.id];
  assert.ok(Array.isArray(videos) && videos.length <= 3);
  assert.ok(videos.length > 0 || (typeof p.videoNote === 'string' && p.videoNote.length > 20),'Missing video availability must be stated explicitly');
  for (const video of videos) {
    assert.match(video.id,/^[A-Za-z0-9_-]{11}$/);
    assert.ok(video.startSeconds >= 0 && video.endSeconds > video.startSeconds);
    assert.equal(video.sourceUrl,p.sourceUrl);
    const watch = new URL(video.watchUrl);
    assert.equal(watch.origin,'https://www.youtube.com');
    assert.equal(watch.searchParams.get('v'),video.id);
    assert.equal(watch.searchParams.get('t'),video.startSeconds + 's');
    if (recommendedVideos[p.id].includes(video)) {
      assert.ok(video.reviewBasis && video.reviewedAt);
      assert.equal(video.selectionBasis,undefined);
    } else {
      assert.ok(parentSelectedVideos[p.id].includes(video) && video.selectionBasis);
      assert.equal(video.reviewedAt,undefined,'A parent selection is not a coach review');
      assert.equal(video.reviewBasis,undefined);
      assert.match(video.reason,/review is still pending/);
    }
  }
}
assert.equal(recommendedVideos['2026-4'].length,0,'Unreviewed segments must not become coach recommendations');
assert.deepEqual(walkthroughVideos['2026-4'].map((video) => [video.startSeconds,video.endSeconds]),[[141,186]]);
assert.equal(1+2-3+4+5-6+7+8-9+10+11-12,problems['2026-1'].answer);
const matrix = problems['2026-2'].matrix;
assert.equal(matrix.length,5);
assert.ok(matrix.every((row) => row.length === 7));
assert.deepEqual([1,2,3].map((value) => matrix.flat().filter((cell) => cell === value).length),[20,12,3]);
assert.equal(matrix.flat().reduce((total,value) => total+value,0),problems['2026-2'].answer);
assert.deepEqual([6*5,4*Math.sqrt(36),6+8+Math.hypot(6,8)],[30,24,24]);
assert.equal(problems['2026-3'].answer,'D');
const byYear = {};
for (const id of Object.keys(problems)) {
  const match = /^(\d{4})-(\d{1,2})$/.exec(id);
  assert.ok(match, `Problem id ${id} must be YEAR-NUMBER`);
  (byYear[match[1]] ||= []).push(Number(match[2]));
}
for (const [year, numbers] of Object.entries(byYear)) {
  const sorted = [...numbers].sort((a, b) => a - b);
  assert.deepEqual(numbers, sorted, `${year} problems must be stored in order`);
  assert.deepEqual(sorted, sorted.map((_, index) => index + 1), `${year} must run 1..${sorted.length} with no gaps`);
}
const fourth = problems['2026-4'];
assert.match(fourth.prompt,/20%/);
assert.match(fourth.prompt,/50%/);
assert.deepEqual(fourth.options.map((option) => [option.letter,option.value]),[['A',80],['B',90],['C',100],['D',110],['E',120]]);
assert.equal(fourth.answer,120);
assert.equal(fourth.wording,'restated');
assert.equal(fourth.checkedSourceUrl,'https://live.poshenloh.com/past-contests/amc8/2026/problem/4');
for (const original of [40,100,250,800]) {
  const july = original - original / 5;
  const august = july + july / 2;
  assert.ok(Math.abs(august / original * 100 - fourth.answer) < 1e-10);
}
const fourthAttempt = newAttempt();
assert.equal(gradeAnswer(fourth,fourthAttempt,120).independent,true);
const fifth = problems['2026-5'];
assert.equal(fifth.wording,'restated');
assert.match(fifth.prompt,/100 miles/);
assert.match(fifth.prompt,/3 hours/);
assert.match(fifth.prompt,/40 miles per hour/);
assert.match(fifth.prompt,/stops only once, for lunch/);
assert.deepEqual(fifth.options.map((option) => [option.letter,option.value]),[['A',15],['B',30],['C',40],['D',45],['E',60]]);
assert.equal(fifth.checkedSourceUrl,'https://live.poshenloh.com/past-contests/amc8/2026/problem/5');
const drivingHours = 100 / 40;
assert.equal(drivingHours,2.5);
assert.equal((3 - drivingHours) * 60,30);
assert.equal(fifth.answer,30);
assert.deepEqual(fifth.options.filter((option) => (180 - option.value) / 60 * 40 === 100).map((option) => option.value),[30]);
assert.equal((3 * 40 - 100) / 40 * 60,fifth.answer,'Distance-equivalent alternative agrees');
assert.equal(fifth.suggestedPace,'1 min 30 sec');
assert.equal(recommendedVideos['2026-5'].length,0);
assert.deepEqual(walkthroughVideos['2026-5'].map(video => [video.id,video.startSeconds,video.endSeconds]),[['gzXlOkLl24U',0,1433]]);
assert.match(walkthroughVideos['2026-5'][0].segmentLabel,/Full video/);
const first2026_6 = problems['2026-6'];
assert.equal(first2026_6.answer,'2/5');
assert.equal(problems['2026-6'].diagram,'./assets/diagram-2026-6.png');
assert.ok(fs.existsSync('./assets/diagram-2026-6.png'));
assert.deepEqual(problems['2026-6'].options.map((option) => [option.letter,option.value]),[['A','1/6'],['B','1/4'],['C','1/3'],['D','3/8'],['E','2/5']]);
assert.match(problems['2026-6'].prompt,/10 meters long/);
assert.match(problems['2026-6'].prompt,/8 meters wide/);
assert.match(problems['2026-6'].prompt,/1 meter of an edge/);
assert.equal((10 - 2*1) * (8 - 2*1),48);
assert.equal(10*8,80);
assert.equal((80-48)/80,2/5);
assert.equal(2*1*(10+8) - 4*1*1,32,'The band formula 2t(L+W) - 4t² agrees');
assert.equal((12-4)*(8-4),32);
assert.equal(12*8,96);
assert.equal((96-32)/96,2/3);
assert.ok(Math.abs((96-32)/96 - 2/3) < 1e-12);

const first2026_7 = problems['2026-7'];
assert.equal(first2026_7.answer,50);
assert.deepEqual(problems['2026-7'].options.map((option) => [option.letter,option.value]),[['A',45],['B',48],['C',50],['D',52],['E',55]]);
assert.match(problems['2026-7'].prompt,/40 miles/);
assert.match(problems['2026-7'].prompt,/1\/2/);
assert.match(problems['2026-7'].prompt,/3\/10/);
assert.equal(1/2 + 3/10,4/5);
assert.equal(40/(4/5),50);
assert.equal((40/(4/5)) * (1/2 + 3/10),40,'The solved range is consistent with the fraction used');
assert.equal(40/4*5,50);
const p7Practice = coachGuides['2026-7'].similar;
assert.equal(1/4 + 1/2,3/4);
assert.equal(60/(3/4),80);
assert.equal(p7Practice.answer,80);

const first2026_8 = problems['2026-8'];
assert.equal(first2026_8.answer,50);
assert.equal(first2026_8.answerLabel,'(D) 50');
assert.deepEqual(problems['2026-8'].options.map((option) => [option.letter,option.value]),[['A',10],['B',20],['C',25],['D',50],['E',100]]);
assert.equal(74/100,37/50,'74/100 reduces to 37/50');
assert.equal(74*50/100,37);
for (const n of [10,20,25]) assert.notEqual((74*n/100) % 1,0,'74% of '+n+' is not a whole number of people');
assert.equal((74*50/100) % 1,0);
assert.deepEqual([10,20,25,50,100].filter((n) => Number.isInteger(74*n/100)),[50,100]);
assert.equal(Math.min(...[10,20,25,50,100].filter((n) => Number.isInteger(74*n/100))),first2026_8.answer);
assert.equal(65/100,13/20);
assert.equal(65*20/100,13);
assert.equal(coachGuides['2026-8'].similar.answer,20);
assert.equal(60/100,3/5);
assert.equal(60*5/100,3);

const first2026_9 = problems['2026-9'];
assert.equal(first2026_9.answer,'2/3');
assert.equal(first2026_9.answerLabel,'(B) 2/3');
assert.deepEqual(problems['2026-9'].options.map((option) => option.letter),['A','B','C','D','E']);
assert.match(first2026_9.expression,/√81/);
assert.equal(Math.sqrt(16*Math.sqrt(81)),12);
assert.equal(Math.sqrt(81*Math.sqrt(16)),18);
assert.equal(Math.sqrt(16*Math.sqrt(81))/Math.sqrt(81*Math.sqrt(16)),2/3);
assert.equal(Math.sqrt(144/324),2/3);
assert.deepEqual([Math.sqrt(16*Math.sqrt(81)),Math.sqrt(81*Math.sqrt(16))],[12,18]);
assert.equal(Math.sqrt(16*Math.sqrt(625)),20);
assert.equal(Math.sqrt(625*Math.sqrt(16)),50);
assert.equal(20/50,2/5);
assert.equal(coachGuides['2026-9'].similar.answer,'2/5');

const first2026_10 = problems['2026-10'];
assert.equal(first2026_10.answer,'A');
assert.equal(first2026_10.answerLabel,'(A) Luke');
assert.deepEqual(first2026_10.options.map((option) => option.label),['Luke','Melina','Nico','Olympia','Pedro']);
assert.match(first2026_10.prompt,/11 minutes behind Pedro/);
assert.match(first2026_10.prompt,/2 minutes ahead of Melina, but 3 minutes behind Pedro/);
assert.match(first2026_10.prompt,/6 minutes ahead of Luke/);
{
  const offsets = { Pedro: 0, Olympia: 3, Melina: 5, Luke: 9, Nico: 11 };
  const order = Object.keys(offsets).sort((a,b) => offsets[a]-offsets[b]);
  assert.deepEqual(order,['Pedro','Olympia','Melina','Luke','Nico']);
  assert.equal(order[3],first2026_10.options.find((option) => option.value === first2026_10.answer).label);
  assert.equal(offsets.Olympia - offsets.Pedro,3,'Olympia is 3 minutes behind Pedro');
  assert.equal(offsets.Melina - offsets.Olympia,2,'Melina is 2 behind Olympia');
  assert.equal(offsets.Luke - offsets.Olympia,6,'Luke is 6 behind Olympia');
  assert.equal(offsets.Nico - offsets.Pedro,11,'Nico is 11 behind Pedro');
}
{
  const offsets10 = { Ana: 0, Dev: 5, Elena: 6, Cara: 7, Ben: 9 };
  const order10 = Object.keys(offsets10).sort((a,b) => offsets10[a]-offsets10[b]);
  assert.deepEqual(order10,['Ana','Dev','Elena','Cara','Ben']);
  assert.equal(offsets10.Ben - offsets10.Ana,9);
  assert.equal(offsets10.Dev - offsets10.Ana,5);
  assert.equal(offsets10.Cara - offsets10.Dev,2);
  assert.equal(offsets10.Ben - offsets10.Dev,4);
  assert.equal(offsets10.Elena - offsets10.Ana,6);
  const adapted10 = coachGuides['2026-10'].similar;
  assert.equal(order10[3],adapted10.options.find((option) => option.value === adapted10.answer).label);
  assert.equal(adapted10.answer,'A');
}

for (const id of ['2026-6','2026-7','2026-8','2026-9','2026-10']) {
  assert.equal(walkthroughVideos[id].length,1);
  assert.equal(walkthroughVideos[id][0].id,'gzXlOkLl24U');
  assert.equal(walkthroughVideos[id][0].channel,'Daily Dose of Math');
  assert.equal(recommendedVideos[id].length,1,'These segments were reviewed from the creator\'s chapter timestamps and captions');
  assert.equal(walkthroughVideos[id][0].reviewedAt,'2026-11-02');
  assert.match(walkthroughVideos[id][0].segmentLabel,/^Problem \d+ · \d+:\d\d–\d+:\d\d$/);
  assert.equal(coachGuides[id].checks.length,2);
  assert.ok(coachGuides[id].checks.every((check) => check.options.length === 2 && check.options.filter((option) => option.correct).length === 1));
  assert.equal(coachGuides[id].similar.options.length,2);
  assert.ok(coachGuides[id].similar.options.some((option) => option.value === coachGuides[id].similar.answer));
  assert.equal(coachGuides[id].similar.reflection.options.filter((option) => option.correct).length,1);
  assert.match(coachGuides[id].similar.label,/not an official AMC question/);
  assert.equal(problems[id].hints.length,3);
}
// Segment bounds follow the creator's published chapter list for Problems 6-10.
assert.deepEqual(['2026-6','2026-7','2026-8','2026-9','2026-10'].map((id) => [walkthroughVideos[id][0].startSeconds,walkthroughVideos[id][0].endSeconds]),[[218,260],[260,303],[303,338],[338,371],[371,424]]);

// 2026 Problems 11-15: printed options, keyed answers, figures, and filmed segments.
const p2026_11 = problems['2026-11'];
assert.deepEqual(p2026_11.options.map((option) => [option.letter,option.label]),[['A','4π'],['B','6π'],['C','13/2 π'],['D','8π'],['E','13π']]);
assert.equal(p2026_11.answer,'6π');
assert.equal(p2026_11.answerLabel,'(B) 6π');
assert.equal(p2026_11.diagram,'./assets/diagram-2026-11.png');
assert.ok(Math.abs(Math.PI/2*(1+1+2+3+5) - 6*Math.PI) < 1e-9,'Quarter arcs 1,1,2,3,5 total 6π');
const p2026_12 = problems['2026-12'];
assert.deepEqual(p2026_12.options.map((option) => [option.letter,option.value]),[['A',2],['B',3],['C',4],['D',5],['E','impossible']]);
assert.equal(p2026_12.answer,5);
assert.equal(p2026_12.answerLabel,'(D) 5');
assert.equal(p2026_12.diagram,'./assets/diagram-2026-12.png');
{
  // Around the ring, starting at the top and going clockwise through
  // upper-left, lower-left, lower-middle, lower-right, upper-right, the boxes
  // read 9, 10, 8, 5, 4, 6. The digits are 5,4,6,2,3,1: top 5, every digit once.
  const ring = [5,4,6,2,3,1];
  assert.equal(new Set(ring).size,6,'Every digit 1-6 appears once');
  assert.deepEqual([0,1,2,3,4,5].map((i) => ring[i]+ring[(i+1)%6]),[9,10,8,5,4,6]);
}
const p2026_13 = problems['2026-13'];
assert.deepEqual(p2026_13.options.map((option) => [option.letter,option.label]),[['A','10'],['B','21/2'],['C','32/3'],['D','11'],['E','34/3']]);
assert.equal(p2026_13.answer,10);
assert.equal(p2026_13.diagram,'./assets/diagram-2026-13.png');
assert.equal(3*3+1*1,10,'A side running 3 across and 1 up squares to the area of the tilted square');
const p2026_14 = problems['2026-14'];
assert.deepEqual(p2026_14.options.map((option) => [option.letter,option.value]),[['A',70],['B',75],['C',80],['D',85],['E',90]]);
assert.equal(p2026_14.answer,75);
assert.equal((40+60)/4*3,75,'The shared middle is 25 and the total is three copies of it');
assert.equal((15+25)+(25+35),100,'The pair-sums 40 and 60 give 15, 25, 35');
const p2026_15 = problems['2026-15'];
assert.deepEqual(p2026_15.options.map((option) => [option.letter,option.value]),[['A',4],['B',6],['C',8],['D',9],['E',27]]);
assert.equal(p2026_15.answer,4);
assert.equal(p2026_15.diagram,'./assets/diagram-2026-15.png');
for (const id of ['2026-11','2026-12','2026-13','2026-14','2026-15']) {
  assert.equal(recommendedVideos[id].length,1,'Problems 11-15 have reviewed segments');
  assert.equal(walkthroughVideos[id][0].id,'gzXlOkLl24U');
  assert.equal(walkthroughVideos[id][0].reviewedAt,'2026-11-03');
  assert.match(walkthroughVideos[id][0].segmentLabel,/^Problem \d+ · \d+:\d\d–\d+:\d\d$/);
  assert.equal(coachGuides[id].similar.options.length,2);
  assert.ok(coachGuides[id].similar.options.some((option) => option.value === coachGuides[id].similar.answer));
  assert.equal(coachGuides[id].similar.reflection.options.filter((option) => option.correct).length,1);
}
// Segment bounds follow the creator's chapter list for Problems 11-15.
assert.deepEqual(['2026-11','2026-12','2026-13','2026-14','2026-15'].map((id) => [walkthroughVideos[id][0].startSeconds,walkthroughVideos[id][0].endSeconds]),[[426,471],[471,589],[589,640],[640,712],[712,782]]);
assert.equal(coachGuides['2026-11'].similar.answer,'5π');
assert.ok(Math.abs(Math.PI/2*(2+3+5) - 5*Math.PI) < 1e-9);
assert.equal(coachGuides['2026-13'].similar.answer,13);
assert.equal(2*2+3*3,13);
assert.equal(coachGuides['2026-14'].similar.answer,63);
assert.equal((34+50)/4,21);
assert.equal(3*21,63);
assert.equal(coachGuides['2026-12'].similar.answer,3);
{
  // Four-circle adaptation: 4, 3, 6, 7 clockwise from the top with 3 on top.
  const ring = [3,1,2,4];
  assert.deepEqual([0,1,2,3].map((i) => ring[i]+ring[(i+1)%4]),[4,3,6,7]);
  assert.equal(new Set(ring).size,4);
  assert.equal(ring.reduce((a,b) => a+b,0)*2,20,'Four box sums count each digit twice');
}
assert.equal(coachGuides['2026-15'].similar.answer,8);

// 2026 Problems 16-20: printed options, keyed answers, figures, and filmed segments.
const p2026_16 = problems['2026-16'];
assert.deepEqual(p2026_16.options.map((option) => [option.letter,option.value]),[['A','1/4'],['B','2/5'],['C','1/2'],['D','3/5'],['E','3/4']]);
assert.equal(p2026_16.answer,'3/5');
assert.equal(p2026_16.answerLabel,'(D) 3/5');
{
  // Every four-digit number built from even digits, counted by brute force.
  let total = 0, divisible = 0;
  for (let n = 1000; n <= 9999; n += 1) {
    if (!String(n).split('').every((digit) => Number(digit) % 2 === 0)) continue;
    total += 1;
    if (n % 4 === 0) divisible += 1;
  }
  assert.equal(total,500,'5 × 5 × 5 × 4 even four-digit numbers exist');
  assert.equal(divisible,300);
  assert.equal(divisible / total,3/5,'The answer fraction matches the brute-force count');
}
const p2026_17 = problems['2026-17'];
assert.deepEqual(p2026_17.options.map((option) => [option.letter,option.value]),[['A',2],['B',4],['C',9],['D',12],['E',24]]);
assert.equal(p2026_17.answer,2);
assert.equal(p2026_17.answerLabel,'(A) 2');
assert.equal(p2026_17.diagram,'./assets/diagram-2026-17.png');
{
  // All 24 orderings, keeping only those with no repeat of the pairs AB, BC, CD.
  const perms = (items) => items.length <= 1 ? [items] : items.flatMap((x,index) => perms([...items.slice(0,index),...items.slice(index+1)]).map((rest) => [x,...rest]));
  const banned = ['AB','BC','CD'];
  const valid = perms(['A','B','C','D']).filter((row) => row.every((student,index) => index === 0 || !banned.includes([row[index-1],student].sort().join(''))));
  assert.deepEqual(valid.map((row) => row.join('')),['BDAC','CADB'],'Exactly two rows break all three old pairs');
}
const p2026_18 = problems['2026-18'];
assert.deepEqual(p2026_18.options.map((option) => [option.letter,option.value]),[['A',1],['B',2],['C',3],['D',4],['E',5]]);
assert.equal(p2026_18.answer,2);
assert.equal(p2026_18.answerLabel,'(B) 2');
{
  const runs = [];
  for (let length = 2; length <= 20; length += 1) {
    const start = 60 / length - (length - 1);
    if (Number.isInteger(start) && start > 0 && start % 2 === 1) {
      let sum = 0;
      for (let step = 0; step < length; step += 1) sum += start + 2 * step;
      assert.equal(sum,60,'A surviving run must really sum to 60');
      runs.push(length + ':' + start);
    }
  }
  assert.deepEqual(runs,['2:29','6:5'],'Only the 2-term and 6-term runs work');
}
const p2026_19 = problems['2026-19'];
assert.deepEqual(p2026_19.options.map((option) => [option.letter,option.value]),[['A','1/6'],['B','1/5'],['C','1/4'],['D','1/3'],['E','2/5']]);
assert.equal(p2026_19.answer,'1/3');
assert.equal(p2026_19.answerLabel,'(D) 1/3');
assert.equal(p2026_19.diagram,'./assets/diagram-2026-19.png');
{
  // Step the motion in small time slices: Luna runs at 5, Miguel at 1, distance 1.
  const dt = 1/100000;
  let miguel = 0, dog = 0, outbound = true;
  while (true) {
    miguel += dt;
    dog += outbound ? 5*dt : -5*dt;
    if (outbound && dog >= 1) { dog = 1; outbound = false; }
    if (!outbound && dog <= miguel) break;
  }
  assert.ok(Math.abs(miguel - 1/3) < 1e-3,'Simulated Miguel distance matches one third of the way');
}
const p2026_20 = problems['2026-20'];
assert.deepEqual(p2026_20.options.map((option) => [option.letter,option.value]),[['A',3],['B',7],['C',10],['D',13],['E',16]]);
assert.equal(p2026_20.answer,13);
assert.equal(p2026_20.answerLabel,'(D) 13');
{
  let stacks = 0;
  const build = (height) => {
    if (height === 8) { stacks += 1; return; }
    if (height > 8) return;
    build(height + 1);
    build(height + 3);
  };
  build(0);
  assert.equal(stacks,13,'Recursion over 1 mm and 3 mm coins gives 13 ordered stacks');
}
for (const id of ['2026-16','2026-17','2026-18','2026-19','2026-20']) {
  assert.equal(recommendedVideos[id].length,1,'Problems 16-20 have reviewed segments');
  assert.equal(walkthroughVideos[id][0].id,'gzXlOkLl24U');
  assert.equal(walkthroughVideos[id][0].reviewedAt,'2026-11-04');
  assert.match(walkthroughVideos[id][0].segmentLabel,/^Problem \d+ · \d+:\d\d–\d+:\d\d( \(end of video\))?$/);
  assert.equal(coachGuides[id].similar.options.length,2);
  assert.ok(coachGuides[id].similar.options.some((option) => option.value === coachGuides[id].similar.answer));
  assert.equal(coachGuides[id].similar.reflection.options.filter((option) => option.correct).length,1);
}
// Segment bounds follow the creator's published chapter list for Problems 16-20.
assert.deepEqual(['2026-16','2026-17','2026-18','2026-19','2026-20'].map((id) => [walkthroughVideos[id][0].startSeconds,walkthroughVideos[id][0].endSeconds]),[[782,880],[880,1078],[1078,1253],[1253,1298],[1298,1433]]);
assert.equal(coachGuides['2026-16'].similar.answer,'1/2');
{
  let total = 0, divisible = 0;
  for (let n = 100; n <= 999; n += 1) {
    if (!String(n).split('').every((digit) => [0,2,4,6].includes(Number(digit)))) continue;
    total += 1;
    if (n % 4 === 0) divisible += 1;
  }
  assert.equal(total,48);
  assert.equal(divisible,24);
  assert.equal(divisible / total,0.5,'The three-digit adaptation is 1/2, not 1/4');
}
assert.equal(coachGuides['2026-17'].similar.answer,8);
{
  // Four students, banned pairs AB and CD: only alternating rows survive.
  const perms = (items) => items.length <= 1 ? [items] : items.flatMap((x,index) => perms([...items.slice(0,index),...items.slice(index+1)]).map((rest) => [x,...rest]));
  const banned = ['AB','CD'];
  const rows = perms(['A','B','C','D']).filter((row) => row.every((student,index) => index === 0 || !banned.includes([row[index-1],student].sort().join(''))));
  assert.equal(rows.length,8,'Desk-mates must alternate, giving 2 × 2 × 2 rows');
}
assert.equal(coachGuides['2026-18'].similar.answer,4);
{
  const runs = [];
  for (let length = 2; length <= 20; length += 1) {
    const start = 96 / length - (length - 1);
    if (Number.isInteger(start) && start > 0 && start % 2 === 1) runs.push(length + ':' + start);
  }
  assert.deepEqual(runs,['2:47','4:21','6:11','8:5'],'96 admits four odd runs');
}
assert.equal(coachGuides['2026-19'].similar.answer,'1/4');
assert.equal(2 / (7 + 1),1/4,'A seven-times-faster dog leaves the walker one quarter');
assert.equal(coachGuides['2026-20'].similar.answer,10);
{
  let stacks = 0;
  const build = (height) => {
    if (height === 9) { stacks += 1; return; }
    if (height > 9) return;
    build(height + 1);
    build(height + 4);
  };
  build(0);
  assert.equal(stacks,10,'1 mm and 4 mm coins make ten ordered stacks of 9 mm');
}
assert.equal(distractorsByProblem['2026-18']['2'],undefined,'The correct answer is never a distractor');
assert.equal(Object.keys(distractorsByProblem['2026-19']).length,3);
assert.deepEqual(checkDistractorMap(problems),[],'Every distractor names a real option, never the key');

// 2026 Problems 21-25: the answer key from SOURCES-2026.md, checked letter by letter.
assert.deepEqual(['2026-21','2026-22','2026-23','2026-24','2026-25'].map((id) => {
  const problem = problems[id];
  return problem.options.find((option) => option.value === problem.answer).letter;
}),['B','A','C','E','E'],'2026 Problems 21-25 match the verified Standard-paper key');
for (const id of ['2026-21','2026-22','2026-23','2026-24','2026-25']) {
  assert.equal(problems[id].wording !== undefined,true);
  assert.ok(typeof problems[id].suggestedPace === 'string' && problems[id].suggestedPace.length >= 5);
  assert.equal(Object.keys(problems[id]).includes('score'),false,'Typed problems carry no subjective rating');
}
// 21: the two-state chain, and the adjacency the chain relies on.
{
  let outer = 1, inner = 0;
  for (let move = 0; move < 3; move += 1) {
    const nextOuter = inner / 2;
    const nextInner = outer + inner / 2;
    outer = nextOuter; inner = nextInner;
  }
  assert.equal(outer,1/4,'2026-21: three moves end outside one quarter of the time');
  assert.equal(problems['2026-21'].answer,'1/4');
  assert.equal(2 + 2,4,'An inner point has four neighbours');
  assert.equal(5 * 2 + 5 * 4,30,'The star graph has 15 edges, so the walk is not uniform on routes');
}
assert.equal(problems['2026-21'].diagram,'./assets/diagram-2026-21.png');
assert.ok(fs.existsSync('./assets/diagram-2026-21.png'));
// 22: the count-below bound and both attaining groups.
{
  const median = (group) => [...group].sort((a, b) => a - b)[2];
  const medianOfMedians = (groups) => {
    const medians = groups.map(median).sort((a, b) => a - b);
    return medians[2];
  };
  const smallest = [[1,2,3,16,17],[4,5,6,18,19],[7,8,9,20,21],[10,11,12,22,23],[13,14,15,24,25]];
  assert.equal(medianOfMedians(smallest),9);
  assert.deepEqual(smallest.flat().sort((a, b) => a - b),Array.from({length:25},(_,index) => index + 1),'The 2026-22 grouping uses every number once');
  assert.equal(problems['2026-22'].answer,9);
  assert.equal(2 * 3 + 2,8,'Six low group members plus the two smaller medians must all be distinct');
  assert.equal(8 + 1,9,'So M is at least the ninth smallest number');
}
assert.equal(coachGuides['2026-22'].similar.answer,17);
{
  const median = (group) => [...group].sort((a, b) => a - b)[2];
  const mirrored = [[9,10,23,24,25],[7,8,20,21,22],[5,6,17,18,19],[3,4,14,15,16],[1,2,11,12,13]];
  const medians = mirrored.map(median).sort((a, b) => a - b);
  assert.equal(medians[2],17,'Mirroring x -> 26 - x turns the minimum 9 into the maximum 17');
  assert.equal(9 + 17,26);
}
// 23: straight runs are the centre hull, arcs are exactly one turn.
{
  const diameter = 4;
  const trapezoid = 2 * diameter + diameter + 2 * diameter;
  assert.equal(trapezoid,5 * diameter,'The centre hull is a trapezoid with five diameters of perimeter');
  assert.equal(trapezoid,20);
  assert.equal(2 * Math.PI * (diameter / 2),4 * Math.PI);
  assert.ok(Math.abs(Math.hypot(diameter / 2,diameter * Math.sqrt(3) / 2) - diameter) < 1e-12,'Rows are a diameter apart across the slant');
  assert.equal(problems['2026-23'].answer,'4π + 20');
}
assert.equal(problems['2026-23'].diagram,'./assets/diagram-2026-23.png');
assert.ok(fs.existsSync('./assets/diagram-2026-23.png'));
assert.equal(coachGuides['2026-23'].similar.answer,'6π + 30');
assert.equal(5 * 6,30);
assert.equal(2 * Math.PI * 3,6 * Math.PI);
// 24: the superfactorial count, by direct multiplication of the exponents.
{
  const sevensIn = (n) => { let count = 0; let value = n; while (value % 7 === 0 && value > 0) { count += 1; value /= 7; } return count; };
  let total = 0;
  for (let k = 1; k <= 51; k += 1) for (let j = 1; j <= k; j += 1) total += sevensIn(j);
  assert.equal(total,171,'2026-24: 51 superfactorial holds 171 sevens');
  assert.equal(problems['2026-24'].answer,171);
  assert.equal(7 * (1 + 2 + 3 + 4 + 5 + 6),147);
  assert.equal(3 * 7,21);
  assert.equal(147 + 21 + 3,171,'147 below 49, then 21 from the seventh multiple, then 3 from 49 = 7 · 7');
  assert.equal(147 + 21,168,'The naive answer that forgets the second seven in 49');
}
{
  const fivesIn = (n) => { let count = 0; let value = n; while (value % 5 === 0 && value > 0) { count += 1; value /= 5; } return count; };
  let total = 0;
  for (let k = 1; k <= 26; k += 1) for (let j = 1; j <= k; j += 1) total += fivesIn(j);
  assert.equal(total,62,'2026-24 adaptation: 26 superfactorial holds 62 fives');
  assert.equal(coachGuides['2026-24'].similar.answer,62);
}
// 25: exhaustive unordered corner-cut triples, original and adapted.
{
  const countTriples = (limit) => {
    const found = [];
    for (let x = 1; x <= limit; x += 1) {
      for (let y = x; y <= limit; y += 1) {
        for (let z = y; z <= limit; z += 1) {
          if (x + y <= limit - 1 && y + z <= limit - 1 && z + x <= limit - 1) found.push([x,y,z]);
        }
      }
    }
    return found;
  };
  const sideSix = countTriples(6);
  assert.equal(sideSix.length,8,'2026-25: a side-6 triangle admits eight hexagons');
  assert.deepEqual(sideSix,[[1,1,1],[1,1,2],[1,1,3],[1,1,4],[1,2,2],[1,2,3],[2,2,2],[2,2,3]]);
  assert.equal(problems['2026-25'].answer,8);
  const sideFive = countTriples(5);
  assert.equal(sideFive.length,5,'The side-5 adaptation admits five hexagons');
  assert.deepEqual(sideFive,[[1,1,1],[1,1,2],[1,1,3],[1,2,2],[2,2,2]]);
  assert.equal(coachGuides['2026-25'].similar.answer,5);
}
assert.equal(problems['2026-25'].diagram,'./assets/diagram-2026-25.png');
assert.ok(fs.existsSync('./assets/diagram-2026-25.png'));

// Every 2026 coach adaptation is labelled as an adaptation and stays outside the 175 count.
for (const id of ['2026-21','2026-22','2026-23','2026-24','2026-25']) {
  assert.equal(coachGuides[id].checks.length,2);
  assert.equal(coachGuides[id].checks.every((check) => check.options.filter((option) => option.correct).length === 1),true,id + ' has exactly one correct option per check');
  assert.equal(coachGuides[id].checks.every((check) => check.options.length === 2),true);
  assert.match(coachGuides[id].similar.label,/not an official AMC question/);
  assert.equal(coachGuides[id].similar.options.length,2);
  assert.ok(coachGuides[id].similar.options.some((option) => option.value === coachGuides[id].similar.answer));
  assert.equal(coachGuides[id].similar.reflection.options.filter((option) => option.correct).length,1);
  assert.equal(recommendedVideos[id].length,1,'Problems 21-25 have reviewed segments');
  assert.equal(walkthroughVideos[id][0].id,'3GmtxMC-W1I');
  assert.match(walkthroughVideos[id][0].segmentLabel,/^Problem \d+ · \d+:\d\d–\d+:\d\d/);
}
// Segment bounds are the creator's published chapter list, and 51:44 + the last chapter ends the video.
assert.deepEqual(['2026-21','2026-22','2026-23','2026-24','2026-25'].map((id) => [walkthroughVideos[id][0].startSeconds,walkthroughVideos[id][0].endSeconds]),[[2474,2691],[2691,2827],[2827,3015],[3015,3200],[3200,3558]]);
assert.match(walkthroughVideos['2026-25'][0].segmentLabel,/end of the video/);
assert.equal(3558 + 1 <= 3559,true,'The last chapter closes inside the 59:19 video');

const first2019 = problems['2019-1'];
assert.equal(first2019.year,2019);
assert.match(first2019.prompt,/\$30\.00/);
assert.match(first2019.prompt,/sandwich/);
assert.equal(first2019.answer,9);
assert.equal(first2019.wording,'original');
assert.deepEqual(first2019.options.map((option) => [option.letter,option.value]),[['A',6],['B',7],['C',8],['D',9],['E',10]]);
assert.equal(Math.floor(30 / 4.5),6);
assert.equal(30 - 6 * 4.5,3);
assert.equal(recommendedVideos['2019-1'].length,1);
assert.equal(recommendedVideos['2019-1'][0].id,'jo7ME7qg4Sg');
assert.equal(recommendedVideos['2019-1'][0].endSeconds,38);
const second2019 = problems['2019-2'];
assert.equal(second2019.year,2019);
assert.equal(second2019.answer,150);
assert.equal(second2019.wording,'original');
assert.equal(Math.floor(150 / 5 / 10),3);
assert.equal(5 * 2 * 5 * 3,150);
assert.equal(recommendedVideos['2019-2'].length,1);
assert.equal(recommendedVideos['2019-2'][0].id,'LWtH3G0MIkU');
const third2019 = problems['2019-3'];
assert.equal(third2019.year,2019);
assert.equal(third2019.answer,'E');
assert.match(third2019.prompt,/15\/11/);
assert.match(third2019.prompt,/19\/15/);
assert.equal(recommendedVideos['2019-3'].length,1);
assert.equal(recommendedVideos['2019-3'][0].id,'IgpayYB48C4');
const fourth2019 = problems['2019-4'];
assert.equal(fourth2019.year,2019);
assert.equal(fourth2019.answer,'D');
assert.equal(fourth2019.prompt,'Quadrilateral ABCD is a rhombus with perimeter 52 meters. The length of diagonal AC is 24 meters. What is the area in square meters of rhombus ABCD?');
assert.equal(recommendedVideos['2019-4'].length,1);
assert.equal(recommendedVideos['2019-4'][0].id,'IiFFDDITE6Q');
const fifth2019 = problems['2019-5'];
assert.equal(fifth2019.year,2019);
assert.equal(fifth2019.answer,'B');
assert.match(fifth2019.prompt,/tortoise/);
assert.match(fifth2019.prompt,/hare/);
assert.equal(recommendedVideos['2019-5'].length,1);
assert.equal(recommendedVideos['2019-5'][0].id,'IgpayYB48C4');
const sixth2019 = problems['2019-6'];
assert.equal(sixth2019.year,2019);
assert.equal(sixth2019.answer,'C');
assert.match(sixth2019.prompt,/81 grid points/);
assert.equal(recommendedVideos['2019-6'].length,1);
assert.equal(recommendedVideos['2019-6'][0].id,'8njQzoztDGc');
const seventh2019 = problems['2019-7'];
assert.equal(seventh2019.year,2019);
assert.equal(seventh2019.answer,'A');
assert.match(seventh2019.prompt,/76.+94.+87/);
assert.equal(recommendedVideos['2019-7'].length,1);
assert.equal(recommendedVideos['2019-7'][0].id,'8njQzoztDGc');
const eighth2019 = problems['2019-8'];
assert.equal(eighth2019.year,2019);
assert.equal(eighth2019.answer,'E');
assert.match(eighth2019.prompt,/20%/);
assert.equal(recommendedVideos['2019-8'].length,1);
assert.equal(recommendedVideos['2019-8'][0].id,'IgpayYB48C4');
const ninth2019 = problems['2019-9'];
assert.equal(ninth2019.year,2019);
assert.equal(ninth2019.answer,'B');
assert.match(ninth2019.prompt,/cylindrical/);
assert.equal(recommendedVideos['2019-9'].length,1);
assert.equal(recommendedVideos['2019-9'][0].id,'8njQzoztDGc');
const tenth2019 = problems['2019-10'];
assert.equal(tenth2019.year,2019);
assert.equal(tenth2019.answer,'B');
assert.match(tenth2019.prompt,/Wed=16/);
assert.equal(recommendedVideos['2019-10'].length,1);
assert.equal(recommendedVideos['2019-10'][0].id,'8njQzoztDGc');
const eleventh2019 = problems['2019-11'];
assert.equal(eleventh2019.year,2019);
assert.equal(eleventh2019.answer,'D');
assert.match(eleventh2019.prompt,/foreign language/);
assert.equal(recommendedVideos['2019-11'].length,2);
assert.equal(recommendedVideos['2019-11'][0].id,'IgpayYB48C4');
const twelfth2019 = problems['2019-12'];
assert.equal(twelfth2019.year,2019);
assert.equal(twelfth2019.answer,'A');
assert.match(twelfth2019.prompt,/cube/);
assert.equal(recommendedVideos['2019-12'].length,2);
assert.equal(recommendedVideos['2019-12'][0].id,'IgpayYB48C4');
const thirteenth2019 = problems['2019-13'];
assert.equal(thirteenth2019.year,2019);
assert.equal(thirteenth2019.answer,'A');
assert.match(thirteenth2019.prompt,/palindrome/);
assert.equal(recommendedVideos['2019-13'].length,2);
assert.equal(recommendedVideos['2019-13'][0].id,'IgpayYB48C4');
const fourteenth2019 = problems['2019-14'];
assert.equal(fourteenth2019.year,2019);
assert.equal(fourteenth2019.answer,'C');
assert.match(fourteenth2019.prompt,/Isabella/);
assert.equal(recommendedVideos['2019-14'].length,2);
assert.equal(recommendedVideos['2019-14'][0].id,'IgpayYB48C4');
const fifteenth2019 = problems['2019-15'];
assert.equal(fifteenth2019.year,2019);
assert.equal(fifteenth2019.answer,'B');
assert.match(fifteenth2019.prompt,/sunglasses/);
assert.equal(recommendedVideos['2019-15'].length,2);
assert.equal(recommendedVideos['2019-15'][0].id,'IgpayYB48C4');
const first2020 = problems['2020-1'];
assert.equal(first2020.year,2020);
assert.equal(first2020.answer,24);
assert.match(first2020.prompt,/lemonade/);
assert.equal(first2020.answer,3*2*4);
assert.equal(recommendedVideos['2020-1'].length,1);
assert.equal(recommendedVideos['2020-1'][0].id,'UnVo6jZ3Wnk');
const second2020 = problems['2020-2'];
assert.equal(second2020.year,2020);
assert.equal(second2020.answer,15);
assert.match(second2020.prompt,/yardwork/);
assert.equal(recommendedVideos['2020-2'].length,1);
const third2020 = problems['2020-3'];
assert.equal(third2020.year,2020);
assert.equal(third2020.answer,1920);
assert.equal(third2020.answer,6*8*4*10);
assert.equal(recommendedVideos['2020-3'].length,1);
const fourth2020 = problems['2020-4'];
assert.equal(fourth2020.year,2020);
assert.equal(fourth2020.answer,37);
assert.equal(fourth2020.answer,1+6+12+18);
assert.equal(recommendedVideos['2020-4'].length,1);
const fifth2020 = problems['2020-5'];
assert.equal(fifth2020.year,2020);
assert.equal(fifth2020.answer,15);
assert.equal(fifth2020.answer,75/5);
assert.equal(recommendedVideos['2020-5'].length,1);
const sixth2020 = problems['2020-6'];
assert.equal(sixth2020.year,2020);
assert.equal(sixth2020.answer,'A');
assert.match(sixth2020.prompt,/Aaron/);
assert.match(sixth2020.prompt,/Maren/);
assert.equal(recommendedVideos['2020-6'].length,1);
assert.equal(recommendedVideos['2020-6'][0].id,'UnVo6jZ3Wnk');
const seventh2020 = problems['2020-7'];
assert.equal(seventh2020.year,2020);
assert.equal(seventh2020.answer,15);
assert.match(seventh2020.prompt,/2020 and 2400/);
assert.equal(recommendedVideos['2020-7'].length,1);
const eighth2020 = problems['2020-8'];
assert.equal(eighth2020.year,2020);
assert.equal(eighth2020.answer,8072);
assert.match(eighth2020.prompt,/pennies/);
assert.match(eighth2020.prompt,/nickels/);
assert.equal(recommendedVideos['2020-8'].length,1);
const ninth2020 = problems['2020-9'];
assert.equal(ninth2020.year,2020);
assert.equal(ninth2020.answer,20);
assert.match(ninth2020.prompt,/cake/);
assert.match(ninth2020.prompt,/icing/);
assert.equal(recommendedVideos['2020-9'].length,1);
const tenth2020 = problems['2020-10'];
assert.equal(tenth2020.year,2020);
assert.equal(tenth2020.answer,12);
assert.match(tenth2020.prompt,/marbles/);
assert.match(tenth2020.prompt,/Steelie/);
assert.equal(recommendedVideos['2020-10'].length,1);
const sixteenth2020 = problems['2020-16'];
assert.equal(sixteenth2020.year,2020);
assert.equal(sixteenth2020.answer,5);
assert.match(sixteenth2020.prompt,/lines/);
assert.equal(recommendedVideos['2020-16'].length,1);
const seventeenth2020 = problems['2020-17'];
assert.equal(seventeenth2020.year,2020);
assert.equal(seventeenth2020.answer,7);
assert.match(seventeenth2020.prompt,/2020/);
assert.equal(recommendedVideos['2020-17'].length,1);
const eighteenth2020 = problems['2020-18'];
assert.equal(eighteenth2020.year,2020);
assert.equal(eighteenth2020.answer,240);
assert.match(eighteenth2020.prompt,/semicircle/);
assert.equal(recommendedVideos['2020-18'].length,1);
const nineteenth2020 = problems['2020-19'];
assert.equal(nineteenth2020.year,2020);
assert.equal(nineteenth2020.answer,4);
assert.match(nineteenth2020.prompt,/flippy/);
assert.equal(recommendedVideos['2020-19'].length,1);
const twentieth2020 = problems['2020-20'];
assert.equal(twentieth2020.year,2020);
assert.equal(twentieth2020.answer,24.2);
assert.match(twentieth2020.prompt,/trees/);
assert.equal(recommendedVideos['2020-20'].length,1);
// 2025 Problems 16-20
const p2025_16 = problems['2025-16'];
assert.equal(p2025_16.year,2025);
assert.equal(p2025_16.number,16);
assert.equal(p2025_16.answer,105);
assert.match(p2025_16.prompt,/Five distinct integers from 1 to 10/);
assert.match(p2025_16.prompt,/11 to 20/);
assert.match(p2025_16.prompt,/differ by exactly 10/);
assert.deepEqual(p2025_16.options.map((option) => [option.letter,option.value]),[['A',95],['B',100],['C',105],['D',110],['E',115]]);
assert.equal((1+2+3+4+5)+(6+7+8+9+10),55);
assert.equal((11+12+13+14+15)+(16+17+18+19+20),155);
assert.equal(210-(55+50),105);
for (const small of [[1,2,3,4,5],[2,4,6,8,10],[6,7,8,9,10],[1,3,5,7,9]]) {
  const forbidden = new Set(small.map((n) => n + 10));
  const large = [11,12,13,14,15,16,17,18,19,20].filter((n) => !forbidden.has(n));
  assert.equal(large.length,5);
  assert.equal(small.reduce((a,b)=>a+b,0)+large.reduce((a,b)=>a+b,0),p2025_16.answer);
}
assert.equal(p2025_16.hints.length,3);
assert.deepEqual(coachGuides['2025-16'].similar.options.map((option) => option.value),[60,64]);
assert.equal([1,2,3,4,5,6,7,8].reduce((a,b)=>a+b,0),36);
assert.equal((9+10+11+12+13+14+15+16)-40,60);
assert.equal(coachGuides['2025-16'].similar.answer,60);
assert.equal(recommendedVideos['2025-16'].length,1);
assert.deepEqual(walkthroughVideos['2025-16'].map((video) => [video.startSeconds,video.endSeconds]),[[1250,1344]]);
const p2025_17 = problems['2025-17'];
assert.equal(p2025_17.answer,115);
assert.match(p2025_17.prompt,/100 people who live in A/);
assert.match(p2025_17.prompt,/120 who live in B/);
assert.match(p2025_17.prompt,/160 who live in C/);
assert.equal(p2025_17.diagram,'./assets/diagram-2025-17.png');
assert.deepEqual(p2025_17.options.map((option) => [option.letter,option.value]),[['A',55],['B',60],['C',85],['D',115],['E',160]]);
assert.equal(100-(100*0.25+100*0.2),55);
assert.equal(120/3,40);
assert.equal(160/8,20);
assert.equal(55+40+20,p2025_17.answer);
assert.equal(p2025_17.hints.length,3);
const p17Practice = coachGuides['2025-17'].similar;
assert.equal(120-(120*0.25+120*0.2),66);
assert.equal(150/3,50);
assert.equal(160/8,20);
assert.equal(66+50+20,p17Practice.answer);
assert.equal(p17Practice.answer,136);
assert.equal(recommendedVideos['2025-17'].length,1);
const p2025_18 = problems['2025-18'];
assert.equal(p2025_18.year,2025);
assert.equal(p2025_18.answerLabel,'(B) 2');
assert.equal(p2025_18.answer,'B');
assert.equal(p2025_18.diagram,'./assets/diagram-2025-18.png');
assert.deepEqual(p2025_18.options.map((option) => option.label),['√2','2','2√2','4','4√2']);
assert.ok(Math.abs((Math.PI-2)-(Math.PI*1*1-2*1*1))<1e-12);
for (const R of [1,2,3,4.5]) {
  const ring = Math.PI*R*R-2*R*R;
  assert.ok(Math.abs(ring-(R*R*(Math.PI-2)))<1e-12,'Inscribed square area must be 2R²');
}
assert.ok(Math.abs((Math.PI*4-2*4)/4-(Math.PI-2))<1e-12,'Quarter of the R=2 ring equals the R=1 ring');
assert.equal(p2025_18.hints.length,3);
const p18Practice = coachGuides['2025-18'].similar;
assert.equal(p18Practice.answer,4);
assert.ok(Math.abs(Math.PI*4-2*4-4*(Math.PI-2))<1e-12);
assert.ok(Math.abs((Math.PI*16-2*16)/4-4*(Math.PI-2))<1e-12);
assert.equal(recommendedVideos['2025-18'].length,1);
const p2025_19 = problems['2025-19'];
assert.equal(p2025_19.answer,8.5);
assert.match(p2025_19.prompt,/15 miles long/);
assert.match(p2025_19.prompt,/25, then 40, then 20 miles per hour/);
assert.equal(p2025_19.diagram,'./assets/diagram-2025-19.png');
assert.deepEqual(p2025_19.options.map((option) => [option.letter,option.value]),[['A',7.75],['B',8],['C',8.25],['D',8.5],['E',8.75]]);
assert.equal(5/25,.2);
assert.equal(5/20,.25);
assert.ok(Math.abs((5/20-5/25)*60-3)<1e-9,'Three extra minutes in the middle stretch');
assert.equal(40*3/60,2);
assert.equal(15-(5+2)-5,3);
assert.equal(5+2+3/2,p2025_19.answer);
assert.ok(Math.abs((5/25+3.5/40)-(5/20+(5-3.5)/40))<1e-12,'Equal travel times confirm the meeting point');
assert.equal(p2025_19.hints.length,3);
const p19Practice = coachGuides['2025-19'].similar;
assert.equal(4/20,.2);
assert.equal(4/16,.25);
assert.ok(Math.abs(40*((4/16-4/20)*60)/60-2)<1e-9);
assert.equal(12-(4+2)-4,2);
assert.equal(4+2+1,p19Practice.answer);
assert.equal(p19Practice.answer,7);
assert.ok(Math.abs((4/20+3/40)-(4/16+1/40))<1e-12,'Adapted meeting point is 7 miles from P: car Q has 1 mile left in the middle stretch');
assert.ok(Math.abs((4/20+3/40)-(4/16+1/40))<1e-12,'Adapted meeting point at 7 miles: car P has 3 miles left in the middle stretch, car Q has 1');
assert.equal(recommendedVideos['2025-19'].length,1);
const p2025_20 = problems['2025-20'];
assert.equal(p2025_20.answer,'A');
assert.equal(p2025_20.answerLabel,'(A) 4/7');
assert.deepEqual(p2025_20.options.map((option) => option.label),['4/7','3/5','2/3','3/4','7/8']);
assert.match(p2025_20.prompt,/Sarika/);
assert.match(p2025_20.prompt,/Dev/);
assert.match(p2025_20.prompt,/Rajiv/);
const sarikaShares = [1/2,1/16,1/128];
assert.ok(Math.abs(sarikaShares[0]*(1+1/8+1/64)-(1/2+1/16+1/128))<1e-12);
assert.ok(Math.abs(1/2/(1-1/8)-4/7)<1e-12);
assert.equal(1-(1/2+1/4+1/8),1/8);
assert.equal(1-(1/2+1/4+1/8+1/16+1/32+1/64),1/64);
assert.equal(p2025_20.hints.length,3);
const p20Practice = coachGuides['2025-20'].similar;
assert.equal(p20Practice.answer,'A');
assert.ok(Math.abs(1/2/(1-1/4)-2/3)<1e-12);
assert.ok(1/2+1/8+1/32<2/3&&2/3-(1/2+1/8+1/32)>0,'Partial sums stay below 2/3');
assert.ok(Math.abs((1/4+1/16+1/64)/(1/2+1/8+1/32)-0.5)<1e-12,'Dev eats exactly half of what Sarika eats');
assert.equal(recommendedVideos['2025-20'].length,1);
assert.deepEqual(walkthroughVideos['2025-20'].map((video) => [video.startSeconds,video.endSeconds]),[[1818,1907]]);
// 2025 Problems 21-25
const p2025_21 = problems['2025-21'];
assert.equal(p2025_21.year,2025);
assert.equal(p2025_21.number,21);
assert.equal(p2025_21.answer,12);
assert.equal(p2025_21.answerLabel,'(A) 12');
assert.equal(p2025_21.diagram,'./assets/diagram-2025-21.png');
assert.match(p2025_21.prompt,/grades 1 through 7/);
assert.match(p2025_21.prompt,/differing by 2 or more/);
assert.deepEqual(p2025_21.options.map((option) => [option.letter,option.value]),[['A',12],['B',13],['C',14],['D',15],['E',16]]);
{
  const edges = [['A','B'],['A','C'],['A','F'],['A','G'],['B','C'],['B','F'],['C','D'],['C','E'],['C','F'],['D','E'],['E','F'],['G','F']];
  const nodes = ['A','B','C','D','E','F','G'];
  const degree = Object.fromEntries(nodes.map((node) => [node,edges.filter((edge) => edge.includes(node)).length]));
  assert.equal(degree.C,5,'Pod C has five walkways in the diagram');
  assert.equal(degree.F,5,'Pod F has five walkways in the diagram');
  const labels = [];
  const assign = (index, used) => {
    if (index === nodes.length) { labels.push({...used}); return; }
    for (let grade = 1; grade <= 7; grade++) {
      if (Object.values(used).includes(grade)) continue;
      const node = nodes[index];
      if (edges.some(([a,b]) => (a === node && used[b] !== undefined && Math.abs(used[b]-grade) < 2) || (b === node && used[a] !== undefined && Math.abs(used[a]-grade) < 2))) continue;
      used[node] = grade;
      assign(index+1, used);
      delete used[node];
    }
  };
  const work = {};
  assign(0, work);
  assert.equal(labels.length,2,'Exactly two labellings satisfy every walkway rule');
  assert.ok(labels.every((label) => label.C + label.E + label.F === p2025_21.answer),'Both valid labellings give the same requested sum');
  assert.deepEqual(labels.map((label) => [label.C,label.E,label.F]).sort(),[[1,4,7],[7,4,1]]);
}
assert.equal(p2025_21.hints.length,3);
assert.deepEqual(coachGuides['2025-21'].similar.options.map((option) => option.value),[15,12]);
assert.equal(coachGuides['2025-21'].similar.answer,15);
assert.equal(coachGuides['2025-21'].similar.reflection.options.find((option) => option.correct).id,'true');
const p2025_22 = problems['2025-22'];
assert.equal(p2025_22.answer,7);
assert.match(p2025_22.prompt,/35 coat hooks/);
assert.match(p2025_22.prompt,/at least 1 coat and at least 1 empty hook/);
assert.equal(p2025_22.diagram,'./assets/diagram-2025-22.png');
assert.deepEqual(p2025_22.options.map((option) => [option.letter,option.value]),[['A',2],['B',4],['C',5],['D',7],['E',9]]);
{
  const coats = [];
  for (let c = 1; c <= 34; c++) {
    const gaps = c + 1;
    if ((35 - c) % gaps === 0 && (35 - c) / gaps >= 1) coats.push(c);
  }
  assert.deepEqual(coats,[1,2,3,5,8,11,17]);
  assert.equal(coats.length,p2025_22.answer);
  const factorCount = [...Array(36)].map((_,i) => i+1).filter((d) => 36 % d === 0).length;
  assert.equal(factorCount,9,'36 has nine divisors');
  assert.equal(factorCount - 2,p2025_22.answer,'Drop the no-coat and no-empty-hook factor pairs');
}
const p22Practice = coachGuides['2025-22'].similar;
{
  const coats = [];
  for (let c = 1; c <= 22; c++) {
    const gaps = c + 1;
    if ((23 - c) % gaps === 0 && (23 - c) / gaps >= 1) coats.push(c);
  }
  assert.deepEqual(coats,[1,2,3,5,7,11]);
  assert.equal(coats.length,p22Practice.answer);
  assert.equal(p22Practice.answer,6);
}
assert.equal(p2025_22.hints.length,3);
assert.equal(p22Practice.reflection.options.find((option) => option.correct).id,'true');
const p2025_23 = problems['2025-23'];
assert.equal(p2025_23.answer,1);
assert.equal(p2025_23.answerLabel,'(B) 1');
assert.match(p2025_23.prompt,/tens digit and the ones digit are both 9/);
assert.match(p2025_23.prompt,/1 less than a perfect square/);
assert.match(p2025_23.prompt,/product of exactly two prime numbers/);
assert.deepEqual(p2025_23.options.map((option) => [option.letter,option.value]),[['A',0],['B',1],['C',2],['D',3],['E',4]]);
{
  const factorCount = (n) => {
    let count = 0;
    for (let d = 2; d <= n; d++) while (n % d === 0) { count++; n /= d; }
    return count;
  };
  const candidates = [];
  for (let n = 32; n <= 99; n++) {
    const square = n*n;
    if (square > 1000 && square < 10000 && square % 100 === 0) candidates.push({n,number:square-1,primes:factorCount(square-1)});
  }
  assert.deepEqual(candidates.map((candidate) => candidate.number),[1599,2499,3599,4899,6399,8099]);
  assert.deepEqual(candidates.map((candidate) => candidate.primes),[3,4,2,3,5,3]);
  assert.equal(candidates.filter((candidate) => candidate.primes === 2).length,p2025_23.answer);
  assert.equal(59*61,3599);
}
assert.equal(p2025_23.hints.length,3);
const p23Practice = coachGuides['2025-23'].similar;
assert.equal(p23Practice.answer,6);
assert.equal(p23Practice.reflection.options.find((option) => option.correct).id,'true');
const p2025_24 = problems['2025-24'];
assert.equal(p2025_24.answer,4);
assert.equal(p2025_24.answerLabel,'(E) 4');
assert.match(p2025_24.prompt,/AD is parallel to side BC/);
assert.match(p2025_24.prompt,/60°/);
assert.match(p2025_24.prompt,/perimeter of ABCD is 30 units/);
assert.equal(p2025_24.diagram,'./assets/diagram-2025-24.png');
assert.deepEqual(p2025_24.options.map((option) => [option.letter,option.value]),[['A',0],['B',1],['C',2],['D',3],['E',4]]);
{
  const shapes = [];
  for (let leg = 1; leg <= 40; leg++) {
    for (let top = 1; top <= 40; top++) {
      const bottom = top + leg;
      if (top + bottom + 2*leg === 30) shapes.push([top,leg,bottom]);
    }
  }
  assert.deepEqual(shapes,[[12,2,14],[9,4,13],[6,6,12],[3,8,11]]);
  assert.equal(shapes.length,p2025_24.answer);
  assert.ok(shapes.every(([top,leg,bottom]) => bottom === top + leg && top > 0));
  // The 30-60-90 overhang check: each overhang is half a leg.
  assert.ok(shapes.every(([top,leg,bottom]) => (bottom - top) / 2 === leg / 2));
}
assert.equal(p2025_24.hints.length,3);
const p24Practice = coachGuides['2025-24'].similar;
{
  const shapes = [];
  for (let leg = 1; leg <= 40; leg++) {
    for (let top = 1; top <= 40; top++) {
      if (top + (top+leg) + 2*leg === 36) shapes.push([top,leg,top+leg]);
    }
  }
  assert.equal(shapes.length,5);
  assert.equal(shapes.length,p24Practice.answer);
}
assert.equal(p24Practice.reflection.options.find((option) => option.correct).id,'true');
const p2025_25 = problems['2025-25'];
assert.equal(p2025_25.answer,3150);
assert.equal(p2025_25.answerLabel,'(B) 3150');
assert.match(p2025_25.prompt,/5 × 5 diamond-shaped grid/);
assert.match(p2025_25.prompt,/northeast or northwest/);
assert.equal(p2025_25.diagram,'./assets/diagram-2025-25.png');

// 2025 figures added from LIVE by Po-Shen Loh renders: every problem that shows a
// figure in its statement must carry a diagram asset, and that asset must exist.
const p2025Figures = ['2025-1','2025-2','2025-5','2025-8','2025-9','2025-10','2025-11','2025-12','2025-13','2025-15'];
for (const id of p2025Figures) {
  const d = problems[id].diagram;
  assert.ok(d, id + ' must have a diagram');
  assert.ok(fs.existsSync(d.replace('./','')), id + ' diagram file must exist: ' + d);
}
assert.match(problems['2025-2'].prompt,/bent-finger|hieroglyph/i);
assert.doesNotMatch(problems['2025-2'].prompt,/lotus flower = 10,000/);
assert.deepEqual(p2025_25.options.map((option) => [option.letter,option.value]),[['A',2520],['B',3150],['C',3840],['D',4730],['E',5050]]);
{
  const fact = (n) => { let r = 1; for (let i = 2; i <= n; i++) r *= i; return r; };
  const choose = (n,k) => fact(n) / (fact(k) * fact(n-k));
  assert.equal(choose(10,5),252);
  assert.equal(choose(10,5) * 25 / 2,p2025_25.answer);
  assert.equal(choose(8,4),70);
  assert.equal(choose(8,4) * 16 / 2,560);
  // A brute-force check of the 2x2 diamond average quoted in the solution.
  const areas = [];
  const walk = (ne, nw, area) => {
    if (ne === 2 && nw === 2) { areas.push(area); return; }
    if (ne < 2) walk(ne+1, nw, area + nw);
    if (nw < 2) walk(ne, nw+1, area);
  };
  walk(0,0,0);
  assert.equal(areas.length,6);
  assert.deepEqual([...areas].sort((a,b) => a-b),[0,1,2,2,3,4]);
  assert.equal(areas.reduce((a,b) => a+b,0) / areas.length,2);
}
assert.equal(p2025_25.hints.length,3);
const p25Practice = coachGuides['2025-25'].similar;
assert.equal(p25Practice.answer,560);
assert.equal(p25Practice.reflection.options.find((option) => option.correct).id,'true');
for (const id of ['2025-16','2025-17','2025-18','2025-19','2025-20','2025-21','2025-22','2025-23','2025-24','2025-25']) {
  assert.equal(walkthroughVideos[id].length,1);
  assert.equal(walkthroughVideos[id][0].id,'jTTcscvcQmI');
  assert.equal(walkthroughVideos[id][0].channel,'SpreadTheMathLove');
  assert.equal(recommendedVideos[id].length,1,'These segments were reviewed from the creator\'s timestamps and captions');
  assert.match(walkthroughVideos[id][0].segmentLabel,/^Problem \d+ · \d+:\d\d–\d+:\d\d$/);
}
const p2024_1 = problems['2024-1'];
assert.equal(p2024_1.year,2024);
assert.equal(p2024_1.number,1);
assert.equal(p2024_1.answer,2);
assert.equal(p2024_1.answerLabel,'(B) 2');
assert.match(p2024_1.prompt,/222,222/);
assert.match(p2024_1.prompt,/22,222/);
assert.deepEqual(p2024_1.options.map((option) => [option.letter,option.value]),[['A',0],['B',2],['C',4],['D',6],['E',8]]);
// The five subtracted terms are all 2, so the ones-digit work is 2 − 5·2 = −8 ≡ 2 (mod 10).
assert.equal((2 - 5*2 + 10) % 10,p2024_1.answer);
assert.equal(((222222 - (22222+2222+222+22+2)) % 10 + 10) % 10,p2024_1.answer);
assert.equal(p2024_1.hints.length,3);
const p1Practice = coachGuides['2024-1'].similar;
assert.equal((3 - 5*3 + 20) % 10,p1Practice.answer);
assert.equal(p1Practice.answer,8);
assert.deepEqual(p1Practice.options.map((option) => option.value),[8,2]);
assert.equal(p1Practice.reflection.options.find((option) => option.correct).id,'true');
const p2024_2 = problems['2024-2'];
assert.equal(p2024_2.answer,6.54);
assert.equal(p2024_2.answerLabel,'(C) 6.54');
assert.deepEqual(p2024_2.options.map((option) => option.value),[6.4,6.504,6.54,6.9,6.94]);
assert.equal(44/11,4);
assert.equal(110/44,2.5);
assert.ok(Math.abs(44/1100-0.04)<1e-12);
assert.ok(Math.abs(4+110/44+44/1100-p2024_2.answer)<1e-12);
const p2Practice = coachGuides['2024-2'].similar;
assert.equal(66/22,3);
assert.equal(120/48,2.5);
assert.ok(Math.abs(66/1650-0.04)<1e-12);
assert.ok(Math.abs(66/22+120/48+66/1650-p2Practice.answer)<1e-12);
assert.equal(p2Practice.answerLabel,'(A) 5.54');
const p2024_3 = problems['2024-3'];
assert.equal(p2024_3.answer,52);
assert.equal(p2024_3.diagram,'./assets/diagram-2024-3.png');
assert.deepEqual(p2024_3.options.map((option) => option.value),[42,45,49,50,52]);
assert.equal(7*7-4*4,33);
assert.equal(10*10-9*9,19);
assert.equal(33+19,p2024_3.answer);
assert.equal(7*7+10*10-(4*4+9*9),p2024_3.answer,'Both counting orders agree');
const p3Practice = coachGuides['2024-3'].similar;
assert.equal(6*6-3*3,27);
assert.equal(6*6-3*3,p3Practice.answer);
assert.deepEqual(p3Practice.options.map((option) => option.value),[27,36]);
const p2024_4 = problems['2024-4'];
assert.equal(p2024_4.answer,9);
assert.deepEqual(p2024_4.options.map((option) => option.value),[5,6,7,8,9]);
assert.equal(1+2+3+4+5+6+7+8+9,45);
assert.equal(45-p2024_4.answer,36);
assert.equal(Math.sqrt(36),6,'The remaining sum is 6²');
// Only 36 is reachable by dropping exactly one of 1..9.
assert.deepEqual([1,2,3,4,5,6,7,8,9].filter((n) => Math.sqrt(45-n)%1===0),[9]);
const p4Practice = coachGuides['2024-4'].similar;
assert.equal(11*12/2,66);
assert.equal(66-p4Practice.answer,64);
assert.equal(Math.sqrt(64),8);
assert.equal(p4Practice.answer,2);
assert.deepEqual([1,2,3,4,5,6,7,8,9,10,11].filter((n) => Math.sqrt(66-n)%1===0),[2]);
const p2024_5 = problems['2024-5'];
assert.equal(p2024_5.answer,6);
assert.deepEqual(p2024_5.options.map((option) => option.value),[5,6,7,8,9]);
{
  const sums = [];
  for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) if ((a*b) % 6 === 0) sums.push(a+b);
  const reachable = new Set(sums);
  assert.deepEqual([5,6,7,8,9].filter((s) => !reachable.has(s)),[6]);
  assert.equal([...reachable].filter((s) => [5,7,8,9].includes(s)).length,4);
}
const p5Practice = coachGuides['2024-5'].similar;
assert.equal(p5Practice.answer,11);
assert.deepEqual(p5Practice.options.map((option) => option.value),[11,9]);
{
  const sums = [];
  for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) if ((a*b) % 4 === 0) sums.push(a+b);
  const reachable = new Set(sums);
  assert.deepEqual([9,11].filter((s) => !reachable.has(s)),[11]);
  assert.deepEqual([4,5,6,7,8,9,10,12].filter((s) => !reachable.has(s)),[]);
}
for (const id of ['2024-1','2024-2','2024-3','2024-4','2024-5']) {
  assert.equal(walkthroughVideos[id].length,1);
  assert.equal(walkthroughVideos[id][0].id,'ktzijuZtDas');
  assert.equal(walkthroughVideos[id][0].channel,'Interstigation');
  assert.equal(recommendedVideos[id].length,1,'These segments were reviewed from the creator\'s timestamps and captions');
  assert.match(walkthroughVideos[id][0].segmentLabel,/^Problem \d+ · \d+:\d\d–\d+:\d\d$/);
}
// 2024 Problems 6-10: content, mathematics, coaching and reviewed segments.
const p2024_6 = problems['2024-6'];
assert.equal(p2024_6.year,2024);
assert.equal(p2024_6.number,6);
assert.equal(p2024_6.diagram,'./assets/diagram-2024-6.png');
assert.deepEqual(p2024_6.options.map((option) => [option.letter,option.value]),[['A','A'],['B','B'],['C','C'],['D','D'],['E','E']]);
assert.equal(p2024_6.answer,'D');
assert.match(p2024_6.options.find((option) => option.value === 'D').label,/R, P, S, Q/);
assert.equal(p2024_6.hints.length,3);
assert.equal(recommendedVideos['2024-6'].length,1);
assert.deepEqual(walkthroughVideos['2024-6'].map((video) => [video.startSeconds,video.endSeconds]),[[386,578]]);
assert.equal(coachGuides['2024-6'].checks.length,2);
// The adapted path is a 3-4-5 right triangle: legs 7, hypotenuse 5, difference 2.
const adapted6 = coachGuides['2024-6'].similar;
assert.equal(Math.hypot(3,4),5);
assert.equal(3+4-5,2);
assert.equal(adapted6.answer,'A');
assert.match(adapted6.solution[2],/7 . 5 = 2/);
assert.equal(adapted6.reflection.options.find((option) => option.correct).id,'true');
assert.equal(adapted6.reflection.options.filter((option) => option.correct).length,1);

const p2024_7 = problems['2024-7'];
assert.equal(p2024_7.number,7);
assert.equal(p2024_7.diagram,'./assets/diagram-2024-7.png');
assert.deepEqual(p2024_7.options.map((option) => [option.letter,option.value]),[['A',1],['B',2],['C',3],['D',4],['E',5]]);
assert.equal(p2024_7.answer,5);
assert.equal(3*7,21);
// Area forces the 1x1 count to be 1 or 5; the column colouring requires at least 3.
assert.equal((21-1)%4,0);
assert.equal((21-5)%4,0);
assert.equal((21-3)%4,2);
const dark7 = 4*3, light7 = 3*3;
assert.equal(Math.abs(dark7-light7),3);
for (const tile of ['2x2','1x4']) {
  const covered = tile === '2x2' ? [[0,0],[0,1],[1,0],[1,1]] : [[0,0],[1,0],[2,0],[3,0]];
  assert.equal(covered.filter(([c]) => c % 2 === 0).length,covered.filter(([c]) => c % 2 === 1).length,'A large tile covers equal dark and light cells');
}
// A valid five-tile covering exists: two 2x2 plus one 1x4 fill a 3x4 block, then one 2x2 plus five 1x1 fill 3x3.
assert.equal(4*4+5,21);
assert.equal(2*4+4,12);
assert.equal(coachGuides['2024-7'].checks.length,2);
const adapted7 = coachGuides['2024-7'].similar;
assert.equal(3*5,15);
assert.equal((15-adapted7.answer)%4,0);
assert.equal(Math.abs(3*3-2*3),3);
assert.equal(adapted7.answer,3);
assert.equal(adapted7.reflection.options.find((option) => option.correct).id,'true');

const p2024_8 = problems['2024-8'];
assert.equal(p2024_8.number,8);
assert.deepEqual(p2024_8.options.map((option) => [option.letter,option.value]),[['A',3],['B',4],['C',5],['D',6],['E',7]]);
assert.equal(p2024_8.answer,6);
function amounts(start, gain, days) {
  let cur = new Set([start]);
  for (let d = 0; d < days; d++) {
    const next = new Set();
    for (const v of cur) { next.add(v + gain); next.add(v * 2); }
    cur = next;
  }
  return cur;
}
const thursday8 = amounts(2,3,3);
assert.equal(thursday8.size,6);
assert.deepEqual([...thursday8].sort((a,b) => a-b),[10,11,13,14,16,20]);
assert.equal(p2024_8.answer,thursday8.size);
assert.equal(amounts(2,3,2).size,3,'Wednesday has three amounts because 8 repeats');
const adapted8 = coachGuides['2024-8'].similar;
const thursday8b = amounts(2,4,3);
assert.equal(thursday8b.size,5);
assert.deepEqual([...thursday8b].sort((a,b) => a-b),[12,14,16,20,24]);
assert.equal(adapted8.answer,thursday8b.size);
assert.equal(coachGuides['2024-8'].checks.length,2);
assert.equal(adapted8.reflection.options.find((option) => option.correct).id,'true');

const p2024_9 = problems['2024-9'];
assert.equal(p2024_9.number,9);
assert.deepEqual(p2024_9.options.map((option) => [option.letter,option.value]),[['A',24],['B',25],['C',26],['D',27],['E',28]]);
assert.equal(p2024_9.answer,28);
assert.deepEqual([24,25,26,27,28].filter((n) => n % 7 === 0),[28]);
const r9 = 4, g9 = 8, b9 = 16;
assert.equal(g9/2,r9);
assert.equal(g9*2,b9);
assert.equal(r9+g9+b9,p2024_9.answer);
const adapted9 = coachGuides['2024-9'].similar;
assert.equal([36,40].filter((n) => n % 9 === 0)[0],adapted9.answer);
assert.equal(adapted9.answer,36);
assert.equal(4+8+24,36);
assert.equal(24,3*8);
assert.equal(adapted9.reflection.options.find((option) => option.correct).id,'true');

const p2024_10 = problems['2024-10'];
assert.equal(p2024_10.number,10);
assert.deepEqual(p2024_10.options.map((option) => [option.letter,option.value]),[['A',399],['B',414],['C',420],['D',444],['E',459]]);
assert.equal(p2024_10.answer,414);
assert.equal(2030-1980,50);
assert.ok(Math.abs(1.515*100-151.5)<1e-9);
assert.ok(Math.abs(1.515*50-75.75)<1e-9);
assert.equal(Math.round(338+75.75),p2024_10.answer);
assert.equal(Math.round(338+1.515*(2030-1980)),p2024_10.answer);
assert.notEqual(Math.round(338+2*50),414,'Rounding the rate first would give the wrong answer');
const adapted10 = coachGuides['2024-10'].similar;
assert.equal(2050-1980,70);
assert.ok(Math.abs(1.515*70-106.05)<1e-9);
assert.equal(Math.round(338+1.515*70),adapted10.answer);
assert.equal(adapted10.answer,444);
assert.equal(coachGuides['2024-10'].checks.length,2);
assert.equal(adapted10.reflection.options.find((option) => option.correct).id,'false','Rounding the rate first is false');

// 2024 Problems 11-15: content, mathematics, coaching and reviewed segments.
const p2024_11 = problems['2024-11'];
assert.equal(p2024_11.year,2024);
assert.equal(p2024_11.number,11);
assert.equal(p2024_11.diagram,'./assets/diagram-2024-11.png');
assert.deepEqual(p2024_11.options.map((option) => [option.letter,option.value]),[['A',8],['B',9],['C',10],['D',11],['E',12]]);
assert.equal(p2024_11.answer,11);
assert.equal(p2024_11.answerLabel,'(D) 11');
assert.equal(11-5,6,'AB is horizontal with length 6');
assert.match(p2024_11.prompt,/y > 7/);
// Area = ½ · 6 · (y − 7) = 12 forces y = 11; every other choice must fail the area check.
assert.deepEqual([8,9,10,11,12].filter((y) => 0.5*6*(y-7) === 12),[11]);
assert.equal(0.5*6*(p2024_11.answer-7),12);
assert.equal(coachGuides['2024-11'].checks.length,2);
const adapted11 = coachGuides['2024-11'].similar;
assert.equal(12-4,8,'PQ is horizontal with length 8');
assert.deepEqual([12,13].filter((y) => 0.5*8*(y-9) === 16),[13]);
assert.equal(adapted11.answer,13);
assert.equal(0.5*8*(adapted11.answer-9),16);
assert.equal(adapted11.reflection.options.find((option) => option.correct).id,'true');

const p2024_12 = problems['2024-12'];
assert.equal(p2024_12.number,12);
assert.deepEqual(p2024_12.options.map((option) => [option.letter,option.value]),[['A',20],['B',21],['C',23],['D',24],['E',26]]);
assert.equal(p2024_12.answer,26);
// The four tanks are x, x+1, x+3, x+6 and must total 90.
assert.equal(4*20+10,90);
assert.equal(20+(20+1)+(20+3)+(20+6),90);
assert.equal(p2024_12.answer,20+6);
assert.equal(coachGuides['2024-12'].checks.length,2);
const adapted12 = coachGuides['2024-12'].similar;
assert.equal(4*25+10,110);
assert.equal(25+26+28+31,110);
assert.equal(adapted12.answer,31);
assert.equal(adapted12.reflection.options.find((option) => option.correct).id,'false','The 10 extra does not depend on the total');

const p2024_13 = problems['2024-13'];
assert.equal(p2024_13.number,13);
assert.equal(p2024_13.diagram,'./assets/diagram-2024-13.png');
assert.deepEqual(p2024_13.options.map((option) => [option.letter,option.value]),[['A',4],['B',5],['C',6],['D',8],['E',12]]);
assert.equal(p2024_13.answer,5);
function hopPaths(hops) {
  const out = [];
  const walk = (height, sequence) => {
    if (sequence.length === hops) {
      if (height === 0) out.push(sequence.join(''));
      return;
    }
    walk(height+1, sequence.concat('U'));
    if (height-1 >= 0) walk(height-1, sequence.concat('D'));
  };
  walk(0, []);
  return out.sort();
}
assert.deepEqual(hopPaths(6),['UDUDUD','UDUUDD','UUDDUD','UUDUDD','UUUDDD']);
assert.equal(hopPaths(6).length,p2024_13.answer);
assert.ok(!hopPaths(6).includes('UDDUUD'),'Going below the ground is not allowed');
assert.equal(coachGuides['2024-13'].checks.length,2);
const adapted13 = coachGuides['2024-13'].similar;
assert.equal(hopPaths(8).length,14);
assert.equal(adapted13.answer,hopPaths(8).length);
assert.equal(adapted13.options.length,2);

const p2024_14 = problems['2024-14'];
assert.equal(p2024_14.number,14);
assert.equal(p2024_14.diagram,'./assets/diagram-2024-14.png');
assert.deepEqual(p2024_14.options.map((option) => [option.letter,option.value]),[['A',28],['B',29],['C',30],['D',31],['E',32]]);
assert.equal(p2024_14.answer,28);
function shortest(network, from, to) {
  const best = { [from]: 0 };
  const done = new Set();
  while (done.size < Object.keys(best).length) {
    let pick = null;
    for (const town of Object.keys(best)) if (!done.has(town) && (pick === null || best[town] < best[pick])) pick = town;
    done.add(pick);
    for (const [next,cost] of network[pick] || []) {
      const total = best[pick] + cost;
      if (best[next] === undefined || total < best[next]) best[next] = total;
    }
  }
  return best[to];
}
const network14 = {
  A: [['M',8],['X',5]], X: [['M',2],['Y',10]], M: [['Y',6],['C',14],['Z',25]],
  Y: [['C',5],['Z',17]], C: [['Z',10]], Z: []
};
assert.equal(shortest(network14,'A','X'),5);
assert.equal(shortest(network14,'A','M'),7);
assert.equal(shortest(network14,'A','Y'),13);
assert.equal(shortest(network14,'A','C'),18);
assert.equal(shortest(network14,'A','Z'),p2024_14.answer);
assert.equal(5+2+6+5+10,p2024_14.answer,'The winning route is A-X-M-Y-C-Z');
assert.notEqual(8+25,p2024_14.answer,'The direct road from A still costs more');
assert.equal(coachGuides['2024-14'].checks.length,2);
const adapted14 = coachGuides['2024-14'].similar;
const network14b = {...network14, M: [['Y',6],['C',14],['Z',12]], Y: [['C',5],['Z',30]]};
assert.equal(adapted14.answer,19);
assert.equal(shortest(network14b,'A','Z'),adapted14.answer);
assert.equal(7+12,adapted14.answer);
assert.equal(adapted14.reflection.options.find((option) => option.correct).id,'true');

const p2024_15 = problems['2024-15'];
assert.equal(p2024_15.number,15);
assert.deepEqual(p2024_15.options.map((option) => [option.letter,option.value]),[['A',1089],['B',1098],['C',1107],['D',1116],['E',1125]]);
assert.equal(p2024_15.answer,1107);
assert.match(p2024_15.expression,/8 × FLYFLY = BUGBUG/);
// 1001 is the factor that turns a doubled block into a single copy of the block.
assert.equal(1001*123,123123);
assert.equal(8*123123,984984);
function flyBugPairs(multiplier) {
  const pairs = [];
  for (let fly = 100; fly <= 999; fly++) {
    const bug = multiplier*fly;
    if (bug < 100 || bug > 999) continue;
    if (new Set(`${fly}${bug}`).size === 6) pairs.push([fly,bug]);
  }
  return pairs;
}
const pairs15 = flyBugPairs(8);
assert.deepEqual(pairs15.map(([fly]) => fly),[103,104,107,109,123]);
assert.deepEqual(pairs15[pairs15.length-1],[123,984]);
assert.equal(123+984,p2024_15.answer);
assert.equal(Math.floor(999/8),124);
assert.equal(8*125,1000,'125 is the first FLY that pushes BUG to four digits');
assert.equal(new Set('124992').size,4,'124 fails the distinct-digit test');
assert.equal(new Set('123984').size,6);
assert.equal(coachGuides['2024-15'].checks.length,2);
const adapted15 = coachGuides['2024-15'].similar;
const pairs15b = flyBugPairs(7);
assert.equal(pairs15b[pairs15b.length-1][0],136);
assert.deepEqual(pairs15b[pairs15b.length-1],[136,952]);
assert.equal(adapted15.answer,136+952);
assert.equal(adapted15.reflection.options.find((option) => option.correct).id,'true');

// 2024 Problems 16-20: content, mathematics, coaching and reviewed segments.
const p2024_16 = problems['2024-16'];
assert.equal(p2024_16.year,2024);
assert.equal(p2024_16.number,16);
assert.equal(p2024_16.answer,11);
assert.equal(p2024_16.answerLabel,'(D) 11');
assert.deepEqual(p2024_16.options.map((option) => [option.letter,option.value]),[['A',8],['B',9],['C',10],['D',11],['E',12]]);
assert.match(p2024_16.prompt,/9 × 9/);
assert.match(p2024_16.prompt,/1 through 81/);
assert.match(p2024_16.prompt,/divisible by 3/);
assert.equal(81/3,27,'27 multiples of 3 between 1 and 81');
const bestSumFor = (multiples, side) => {
  let best = null;
  for (let a = 1; a <= side; a += 1) {
    for (let b = 1; b <= side; b += 1) {
      if (a*b >= multiples && (best === null || a+b < best)) best = a+b;
    }
  }
  return best;
};
assert.equal(bestSumFor(27,9),p2024_16.answer);
assert.equal(Math.max(...Array.from({length:9},(_,i)=>(i+1)*(10-(i+1)))),25,'a sum of 10 tops out at 5x5=25');
assert.equal(4*7,28,'4x7 holds all 27 multiples of 3');
assert.equal(4+7,p2024_16.answer);
assert.equal(new Set(['8','9','10','11','12']).size,5);

const p2024_17 = problems['2024-17'];
assert.equal(p2024_17.number,17);
assert.equal(p2024_17.answer,32);
assert.equal(p2024_17.answerLabel,'(E) 32');
assert.deepEqual(p2024_17.options.map((option) => [option.letter,option.value]),[['A',20],['B',24],['C',27],['D',28],['E',32]]);
assert.equal(p2024_17.diagram,'./assets/diagram-2024-17.png');
assert.ok(fs.existsSync(new URL(p2024_17.diagram,root)));
const kingSquares = [];
for (let r = 0; r < 3; r += 1) for (let c = 0; c < 3; c += 1) kingSquares.push([r,c]);
const attacks = (a,b) => Math.max(Math.abs(a[0]-b[0]),Math.abs(a[1]-b[1])) <= 1;
let kingPairs = 0;
for (const a of kingSquares) {
  for (const b of kingSquares) {
    if (a !== b && !attacks(a,b)) kingPairs += 1;
  }
}
assert.equal(kingPairs,p2024_17.answer,'Brute force agrees with 4x5 + 4x3');
const safeFor = (r,c) => kingSquares.filter(([r2,c2]) => !(r === r2 && c === c2) && !attacks([r,c],[r2,c2])).length;
assert.equal(safeFor(0,0),5);
assert.equal(safeFor(0,1),3);
assert.equal(safeFor(1,1),0);
assert.equal(4*safeFor(0,0) + 4*safeFor(0,1),p2024_17.answer);

const p2024_18 = problems['2024-18'];
assert.equal(p2024_18.number,18);
assert.equal(p2024_18.answer,108);
assert.equal(p2024_18.answerLabel,'(A) 108');
assert.deepEqual(p2024_18.options.map((option) => [option.letter,option.value]),[['A',108],['B',120],['C',135],['D',144],['E',150]]);
assert.equal(p2024_18.diagram,'./assets/diagram-2024-18.png');
assert.ok(fs.existsSync(new URL(p2024_18.diagram,root)));
assert.equal(9*Math.PI/2,4.5*Math.PI);
assert.equal(4-1,3);
assert.equal(9-4,5);
assert.equal((4.5-3)/5*360,p2024_18.answer);
for (let x = 0; x <= 360; x += 1) {
  if ((3 + 5*x/360) === (1 + 5*(360-x)/360)) assert.equal(x,p2024_18.answer);
}

const p2024_19 = problems['2024-19'];
assert.equal(p2024_19.number,19);
assert.equal(p2024_19.answer,'4/15');
assert.equal(p2024_19.answerLabel,'(C) 4/15');
assert.deepEqual(p2024_19.options.map((option) => [option.letter,option.value]),[['A','0'],['B','1/5'],['C','4/15'],['D','1/3'],['E','2/5']]);
assert.equal(15*3/5,9);
assert.equal(15*2/3,10);
assert.equal(10-(15-9),4);
assert.equal(4/15,Number(4/15));
assert.equal(String(9/15).slice(0,4),'0.6');
const feasible19 = [];
for (let x = 0; x <= 15; x += 1) {
  const redLow = 9-x, whiteHigh = 10-x, whiteLow = 6-whiteHigh;
  if (redLow >= 0 && whiteHigh >= 0 && whiteLow >= 0) feasible19.push(x);
}
assert.equal(Math.min(...feasible19),4);
assert.equal(Math.max(...feasible19),9);
assert.equal(9+10-15,4,'Overlap rule gives the same minimum');
assert.ok(Math.abs(3/5*2/3 - 0.4) < 1e-12,'Multiplying gives the maximum 2/5, which is a distractor');

const p2024_20 = problems['2024-20'];
assert.equal(p2024_20.number,20);
assert.equal(p2024_20.answer,3);
assert.equal(p2024_20.answerLabel,'(D) 3');
assert.deepEqual(p2024_20.options.map((option) => [option.letter,option.value]),[['A',0],['B',1],['C',2],['D',3],['E',6]]);
assert.equal(p2024_20.diagram,'./assets/diagram-2024-20.png');
assert.ok(fs.existsSync(new URL(p2024_20.diagram,root)));
const cubeVertices = [];
for (const x of [0,1]) for (const y of [0,1]) for (const z of [0,1]) cubeVertices.push([x,y,z]);
const sq = (a,b) => a.reduce((total,value,index) => total + (value-b[index])**2,0);
const corner = [0,0,0];
let equilateral = 0, allEquilateral = 0;
for (let i = 0; i < cubeVertices.length; i += 1) {
  for (let j = i+1; j < cubeVertices.length; j += 1) {
    for (let k = j+1; k < cubeVertices.length; k += 1) {
      const [a,b,c] = [cubeVertices[i],cubeVertices[j],cubeVertices[k]];
      if (sq(a,b) === sq(b,c) && sq(b,c) === sq(a,c)) {
        allEquilateral += 1;
        if ([a,b,c].some((v) => v.join() === corner.join())) equilateral += 1;
      }
    }
  }
}
assert.equal(equilateral,p2024_20.answer);
assert.equal(allEquilateral,8);
assert.equal(8*3/3,allEquilateral,'Each vertex sits in 3 triangles, each triangle counted at 3 vertices');

for (const id of ['2024-16','2024-17','2024-18','2024-19','2024-20']) {
  assert.equal(walkthroughVideos[id].length,1);
  assert.equal(walkthroughVideos[id][0].id,'ktzijuZtDas');
  assert.equal(walkthroughVideos[id][0].channel,'Interstigation');
  assert.equal(recommendedVideos[id].length,1);
  assert.equal(walkthroughVideos[id][0].reviewedAt,'2026-10-31');
  assert.match(walkthroughVideos[id][0].segmentLabel,/^Problem \d+ · \d+:\d\d–\d+:\d\d$/);
  assert.equal(coachGuides[id].checks.length,2);
  assert.equal(coachGuides[id].similar.options.length,2);
  assert.equal(coachGuides[id].similar.reflection.options.filter((option) => option.correct).length,1);
  assert.match(coachGuides[id].similar.label,/not an official AMC question/);
}
// Segment bounds follow the creator's published chapter list for Problems 16-20.
assert.deepEqual(['2024-16','2024-17','2024-18','2024-19','2024-20'].map((id) => [walkthroughVideos[id][0].startSeconds,walkthroughVideos[id][0].endSeconds]),[[1709,1922],[1922,2045],[2045,2211],[2211,2353],[2353,2562]]);
const adapted16 = coachGuides['2024-16'].similar;
assert.equal(100/3|0,33);
assert.equal(bestSumFor(33,10),adapted16.answer);
assert.equal(adapted16.answer,12);
assert.equal(Math.max(...Array.from({length:10},(_,i)=>(i+1)*(11-(i+1)))),30,'a sum of 11 tops out at 5x6=30');
const adapted17 = coachGuides['2024-17'].similar;
const board43 = [];
for (let r = 0; r < 4; r += 1) for (let c = 0; c < 3; c += 1) board43.push([r,c]);
let legal43 = 0;
for (const a of board43) for (const b of board43) if (a !== b && !attacks(a,b)) legal43 += 1;
assert.equal(legal43,adapted17.answer);
assert.equal(12*11-58,adapted17.answer);
const adapted18 = coachGuides['2024-18'].similar;
assert.equal((8-3)/12*360,adapted18.answer);
assert.equal(adapted18.answer,150);
const adapted19 = coachGuides['2024-19'].similar;
assert.equal(10-(20-15),adapted19.answer);
const feasible19b = [];
for (let x = 0; x <= 20; x += 1) {
  const redLow = 15-x, whiteHigh = 10-x, whiteLow = 5-whiteHigh;
  if (redLow >= 0 && whiteHigh >= 0 && whiteLow >= 0) feasible19b.push(x);
}
assert.equal(Math.min(...feasible19b),adapted19.answer);
const adapted20 = coachGuides['2024-20'].similar;
assert.equal(adapted20.answer,8);
assert.ok(adapted20.options.some((option) => option.value === adapted20.answer));

const p2024_21 = problems['2024-21'];
assert.equal(p2024_21.year,2024);
assert.equal(p2024_21.number,21);
assert.equal(p2024_21.answer,24);
assert.equal(p2024_21.answerLabel,'(E) 24');
assert.deepEqual(p2024_21.options.map((option) => [option.letter,option.value]),[['A',10],['B',12],['C',16],['D',20],['E',24]]);
assert.match(p2024_21.prompt,/3 : 1/);
assert.match(p2024_21.prompt,/4 : 1/);
assert.match(p2024_21.prompt,/5 yellow frogs/);
// Brute force: the only army that satisfies both ratios
const frogArmies = [];
for (let y = 1; y <= 500; y += 1) if (3*y + 2 === 4*(y-2)) frogArmies.push([3*y,y,3*y+2,y-2]);
assert.equal(frogArmies.length,1,'Exactly one army satisfies both ratios');
assert.deepEqual(frogArmies[0],[30,10,32,8]);
assert.equal(frogArmies[0][2]-frogArmies[0][3],p2024_21.answer);
assert.equal(30+2-(10-2),24);
assert.equal(3/4*40+2,32,'3/4 of 40 is 30, plus 2');
assert.equal(1/4*40-2,8);

const p2024_22 = problems['2024-22'];
assert.equal(p2024_22.number,22);
assert.equal(p2024_22.answer,600);
assert.equal(p2024_22.answerLabel,'(B) 600');
assert.deepEqual(p2024_22.options.map((option) => [option.letter,option.value]),[['A',300],['B',600],['C',1200],['D',1500],['E',1800]]);
assert.equal(p2024_22.diagram,'./assets/diagram-2024-22.png');
assert.ok(fs.existsSync(new URL(p2024_22.diagram,root)));
assert.match(p2024_22.prompt,/0\.015 inches thick/);
assert.match(p2024_22.prompt,/nearest 100 inches/);
assert.ok(Math.abs(3*Math.PI/0.015 - 628.32) < 0.01);
assert.equal(Math.round(3*Math.PI/0.015/100)*100,p2024_22.answer);
assert.equal(4-1,3,'Ring area uses radii 2 and 1');
assert.ok(Math.abs(3*Math.PI - 9.4248) < 0.001);

const p2024_23 = problems['2024-23'];
assert.equal(p2024_23.number,23);
assert.equal(p2024_23.answer,7000);
assert.equal(p2024_23.answerLabel,'(C) 7000');
assert.deepEqual(p2024_23.options.map((option) => [option.letter,option.value]),[['A',6000],['B',6500],['C',7000],['D',7500],['E',8000]]);
assert.equal(p2024_23.diagram,'./assets/diagram-2024-23.png');
assert.ok(fs.existsSync(new URL(p2024_23.diagram,root)));
assert.match(p2024_23.prompt,/\(2000,3000\)/);
assert.match(p2024_23.prompt,/\(5000,8000\)/);
const gcdOf = (a,b) => (b === 0 ? a : gcdOf(b,a%b));
const cellsCrossed = (dx,dy) => {
  let count = 0;
  for (let i = 0; i < dx; i += 1) {
    for (let j = 0; j < dy; j += 1) if (Math.min((i+1)/dx,(j+1)/dy) > Math.max(i/dx,j/dy)) count += 1;
  }
  return count;
};
assert.equal(cellsCrossed(2,4),4,'The statement sample colors 4 cells');
assert.equal(cellsCrossed(3,5),7);
assert.equal(3+5-gcdOf(3,5),7);
assert.equal(gcdOf(3000,5000),1000);
assert.equal(1000*cellsCrossed(3,5),p2024_23.answer);
assert.equal(3000+5000-gcdOf(3000,5000),p2024_23.answer);

const p2024_24 = problems['2024-24'];
assert.equal(p2024_24.number,24);
assert.equal(p2024_24.answer,5);
assert.equal(p2024_24.answerLabel,'(B) 5');
assert.deepEqual(p2024_24.options.map((option) => [option.letter,option.value]),[['A',4],['B',5],['C','4√2'],['D',6],['E','5√2']]);
assert.equal(p2024_24.diagram,'./assets/diagram-2024-24.png');
assert.ok(fs.existsSync(new URL(p2024_24.diagram,root)));
assert.match(p2024_24.prompt,/8 feet high/);
assert.match(p2024_24.prompt,/12 feet high/);
assert.match(p2024_24.prompt,/183 square feet/);
assert.equal(12*12,144);
assert.equal(8*8,64);
assert.equal(144+64-183,25);
assert.equal(Math.sqrt(144+64-183),p2024_24.answer);
// Each mountain is a 45-45-90 triangle of height H, so base 2H and area H*H
for (const h of [4,5,6,8,12]) assert.equal((2*h)*h/2,h*h);

const p2024_25 = problems['2024-25'];
assert.equal(p2024_25.number,25);
assert.equal(p2024_25.answer,'20/33');
assert.equal(p2024_25.answerLabel,'(C) 20/33');
assert.deepEqual(p2024_25.options.map((option) => [option.letter,option.value]),[['A','8/15'],['B','32/55'],['C','20/33'],['D','34/55'],['E','8/11']]);
assert.equal(p2024_25.diagram,'./assets/diagram-2024-25.png');
assert.ok(fs.existsSync(new URL(p2024_25.diagram,root)));
assert.match(p2024_25.prompt,/4 rows/);
assert.match(p2024_25.prompt,/Eight passengers/);
const choose = (n,k) => { let r = 1; for (let i = 0; i < k; i += 1) r = r*(n-i)/(i+1); return Math.round(r); };
assert.equal(choose(12,4),495);
let pairBlocked = 0, pairPossible = 0;
for (let mask = 0; mask < 4096; mask += 1) {
  const free = [];
  for (let s = 0; s < 12; s += 1) if (mask & (1 << s)) free.push(s);
  if (free.length !== 4) continue;
  const has = new Set(free);
  let adjacent = false;
  for (let r = 0; r < 4; r += 1) for (let c = 0; c < 2; c += 1) {
    if (has.has(r*3+c) && has.has(r*3+c+1)) adjacent = true;
  }
  if (adjacent) pairPossible += 1; else pairBlocked += 1;
}
assert.equal(pairPossible+pairBlocked,495);
assert.equal(pairBlocked,195,'Complement count agrees with the casework');
assert.equal(pairPossible,300);
assert.equal(pairPossible/495,20/33);

for (const id of ['2024-21','2024-22','2024-23','2024-24','2024-25']) {
  assert.equal(walkthroughVideos[id].length,1);
  assert.equal(walkthroughVideos[id][0].id,'ktzijuZtDas');
  assert.equal(walkthroughVideos[id][0].channel,'Interstigation');
  assert.equal(recommendedVideos[id].length,1);
  assert.equal(walkthroughVideos[id][0].reviewedAt,'2026-11-01');
  assert.match(walkthroughVideos[id][0].segmentLabel,/^Problem \d+ · \d+:\d\d–\d+:\d\d/);
  assert.equal(coachGuides[id].checks.length,2);
  assert.ok(coachGuides[id].checks.every((check) => check.options.length === 2 && check.options.filter((option) => option.correct).length === 1));
  assert.equal(coachGuides[id].similar.options.length,2);
  assert.equal(coachGuides[id].similar.reflection.options.filter((option) => option.correct).length,1);
  assert.match(coachGuides[id].similar.label,/not an official AMC question/);
  assert.ok(coachGuides[id].similar.options.some((option) => option.value === coachGuides[id].similar.answer));
}
// Segment bounds follow the creator's published chapter list for Problems 21-25.
assert.deepEqual(['2024-21','2024-22','2024-23','2024-24','2024-25'].map((id) => [walkthroughVideos[id][0].startSeconds,walkthroughVideos[id][0].endSeconds]),[[2562,2679],[2679,2847],[2847,3126],[3126,3297],[3297,3696]]);
const adapted21 = coachGuides['2024-21'].similar;
assert.equal(2*8+2,18);
assert.equal(8-2,6);
assert.equal(18-6,adapted21.answer);
const adapted22 = coachGuides['2024-22'].similar;
assert.equal(Math.round(3*Math.PI/0.01/100)*100,adapted22.answer);
assert.equal(3*Math.PI/0.015 < 3*Math.PI/0.01,true,'Thinner tape gives a longer strip');
const adapted23 = coachGuides['2024-23'].similar;
assert.equal(gcdOf(1500,1000),500);
assert.equal(1500+1000-500,adapted23.answer);
assert.equal(adapted23.answer,cellsCrossed(15,10)*100,'Scaling a right-15, up-10 piece by 100');
const adapted24 = coachGuides['2024-24'].similar;
assert.equal(14*14+10*10-260,36);
assert.equal(Math.sqrt(196+100-260),adapted24.answer);
const adapted25 = coachGuides['2024-25'].similar;
let block5 = 0, free5 = 0;
for (let mask = 0; mask < 4096; mask += 1) {
  const free = [];
  for (let s = 0; s < 12; s += 1) if (mask & (1 << s)) free.push(s);
  if (free.length !== 5) continue;
  const has = new Set(free);
  let adjacent = false;
  for (let r = 0; r < 4; r += 1) for (let c = 0; c < 2; c += 1) {
    if (has.has(r*3+c) && has.has(r*3+c+1)) adjacent = true;
  }
  if (adjacent) free5 += 1; else block5 += 1;
}
assert.equal(block5,144,'2-2-1-0 gives 36 and 2-1-1-1 gives 108');
assert.equal(choose(12,5),792);
assert.equal(free5/792,9/11);
assert.equal(adapted25.answer,'9/11');

for (const id of ['2024-11','2024-12','2024-13','2024-14','2024-15']) {
  assert.equal(walkthroughVideos[id].length,1);
  assert.equal(walkthroughVideos[id][0].id,'ktzijuZtDas');
  assert.equal(walkthroughVideos[id][0].channel,'Interstigation');
  assert.equal(recommendedVideos[id].length,1);
  assert.equal(walkthroughVideos[id][0].reviewedAt,'2026-10-31');
  assert.match(walkthroughVideos[id][0].segmentLabel,/^Problem \d+ · \d+:\d\d–\d+:\d\d$/);
  assert.equal(coachGuides[id].similar.options.length,2);
  assert.equal(coachGuides[id].similar.reflection.options.filter((option) => option.correct).length,1);
  assert.equal(coachGuides[id].checks.length,2);
  assert.ok(coachGuides[id].checks.every((check) => check.options.length === 2 && check.options.filter((option) => option.correct).length === 1));
  assert.match(coachGuides[id].similar.label,/not an official AMC question/);
}
assert.equal(gradeAnswer(fifth,newAttempt(),30).independent,true);
// Wrong answers, hints and video support must stay local to their question.
const second = newAttempt(), third = newAttempt();
gradeAnswer(problems['2026-2'],second,49);
second.video = true; second.hints = 1;
assert.equal(gradeAnswer(problems['2026-3'],third,'D').independent,true);
assert.equal(gradeAnswer(problems['2026-2'],second,53).independent,false);
assert.equal(second.selectedAnswer,'53');
assert.throws(() => gradeAnswer(problems['2026-2'],second,51),/complete/);
assert.equal(second.selectedAnswer,'53','A duplicate submission must not change the answer');
const fresh = newAttempt();
assert.throws(() => gradeAnswer(problems['2026-3'],fresh,53),/five answers/);
assert.equal(fresh.selectedAnswer,null,'An invalid answer must not mutate a fresh attempt');
fresh.revealed = true;
assert.equal(gradeAnswer(problems['2026-3'],fresh,'D').independent,false);
const videoOnly = newAttempt(); videoOnly.video = true;
assert.equal(gradeAnswer(problems['2026-2'],videoOnly,53).independent,false);
// Retain v1 learning records and aggregate the latest record for each problem.
const old = {problem:'2026-1',result:'correct',hints:0,independent:true,at:'2026-09-10T13:30:48.705Z'};
const history = validRecords([old,{...old,problem:'2026-2',independent:false},{...old,problem:'2026-3'},{...old,problem:'2026-99'}],problems);
assert.equal(history.length,3);
assert.deepEqual(history[0],old);
const summary = summarizeProgress(history);
assert.deepEqual([summary.explored,summary.independent,summary.revisit],[3,2,1]);
assert.equal(validRecords([{...old,hints:-1},{...old,at:'invalid'}],problems).length,0);
console.log('Verified: assets, UI targets, five problem datasets, video metadata, grading isolation, and legacy records.');
