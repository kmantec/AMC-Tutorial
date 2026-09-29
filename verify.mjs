import assert from 'node:assert/strict';
import fs from 'node:fs';
import { problems } from './problems.js';
import { recommendedVideos, parentSelectedVideos, walkthroughVideos } from './videos.js';
import { newAttempt, gradeAnswer, validRecords, summarizeProgress } from './practice-state.js';
import './coaching-state.test.mjs';
import './learning-store.test.mjs';
import './coach-speech.test.mjs';
import './home-plan.test.mjs';

const root = new URL('./', import.meta.url);
const read = (file) => fs.readFileSync(new URL(file, root), 'utf8');
const html = read('index.html');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
assert.equal(new Set(ids).size, ids.length, 'HTML IDs must be unique');
for (const [,asset] of html.matchAll(/(?:href|src)="(\.[^"#?]+)"/g)) assert.ok(fs.existsSync(new URL(asset, root)), 'Missing asset: ' + asset);
for (const [,id] of html.matchAll(/<use href="#([^"]+)"/g)) assert.ok(ids.includes(id), 'Missing icon: ' + id);
for (const file of ['app.js','home-plan.js','problems.js','videos.js','practice-state.js','coach-content.js','coaching-state.js','learning-store.js','coach-speech.js']) {
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
assert.deepEqual(Object.keys(problems),['2026-1','2026-2','2026-3','2026-4','2026-5']);
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
const history = validRecords([old,{...old,problem:'2026-2',independent:false},{...old,problem:'2026-3'},{...old,problem:'2026-6'}],problems);
assert.equal(history.length,3);
assert.deepEqual(history[0],old);
const summary = summarizeProgress(history);
assert.deepEqual([summary.explored,summary.independent,summary.revisit],[3,2,1]);
assert.equal(validRecords([{...old,hints:-1},{...old,at:'invalid'}],problems).length,0);
console.log('Verified: assets, UI targets, five problem datasets, video metadata, grading isolation, and legacy records.');
