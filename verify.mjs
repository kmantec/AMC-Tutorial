import assert from 'node:assert/strict';
import fs from 'node:fs';
import { problems } from './problems.js';
import { recommendedVideos } from './videos.js';
import { newAttempt, gradeAnswer, validRecords, summarizeProgress } from './practice-state.js';
import './coaching-state.test.mjs';
import './learning-store.test.mjs';

const root = new URL('./', import.meta.url);
const read = (file) => fs.readFileSync(new URL(file, root), 'utf8');
const html = read('index.html');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
assert.equal(new Set(ids).size, ids.length, 'HTML IDs must be unique');
for (const [,asset] of html.matchAll(/(?:href|src)="(\.[^"#?]+)"/g)) assert.ok(fs.existsSync(new URL(asset, root)), 'Missing asset: ' + asset);
for (const [,id] of html.matchAll(/<use href="#([^"]+)"/g)) assert.ok(ids.includes(id), 'Missing icon: ' + id);
for (const file of ['app.js','problems.js','videos.js','practice-state.js','coach-content.js','coaching-state.js','learning-store.js']) {
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
  const videos = recommendedVideos[p.id];
  assert.ok(videos.length >= 1 && videos.length <= 3);
  for (const video of videos) {
    assert.match(video.id,/^[A-Za-z0-9_-]{11}$/);
    assert.ok(video.startSeconds >= 0 && video.endSeconds > video.startSeconds);
    assert.ok(video.reviewBasis && video.sourceUrl === p.sourceUrl);
  }
}
assert.equal(1+2-3+4+5-6+7+8-9+10+11-12,problems['2026-1'].answer);
const matrix = problems['2026-2'].matrix;
assert.equal(matrix.length,5);
assert.ok(matrix.every((row) => row.length === 7));
assert.deepEqual([1,2,3].map((value) => matrix.flat().filter((cell) => cell === value).length),[20,12,3]);
assert.equal(matrix.flat().reduce((total,value) => total+value,0),problems['2026-2'].answer);
assert.deepEqual([6*5,4*Math.sqrt(36),6+8+Math.hypot(6,8)],[30,24,24]);
assert.equal(problems['2026-3'].answer,'D');
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
const history = validRecords([old,{...old,problem:'2026-2',independent:false},{...old,problem:'2026-3'},{...old,problem:'2026-4'}],problems);
assert.equal(history.length,3);
assert.deepEqual(history[0],old);
const summary = summarizeProgress(history);
assert.deepEqual([summary.explored,summary.independent,summary.revisit],[3,2,1]);
assert.equal(validRecords([{...old,hints:-1},{...old,at:'invalid'}],problems).length,0);
console.log('Verified: assets, UI targets, three problem datasets, video metadata, grading isolation, and legacy records.');
