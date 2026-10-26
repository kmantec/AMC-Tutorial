import assert from 'node:assert/strict';
import fs from 'node:fs';
import { problems } from './problems.js';
import { recommendedVideos, parentSelectedVideos, walkthroughVideos } from './videos.js';
import { newAttempt, gradeAnswer, validRecords, summarizeProgress } from './practice-state.js';
import { coachGuides } from './coach-content.js';
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
assert.deepEqual(Object.keys(problems),['2026-1','2026-2','2026-3','2026-4','2026-5','2019-1','2019-2','2019-3','2019-4','2019-5','2019-6','2019-7','2019-8','2019-9','2019-10','2019-11','2019-12','2019-13','2019-14','2019-15','2019-16','2019-17','2019-18','2019-19','2019-20','2019-21','2019-22','2019-23','2019-24','2019-25','2020-1','2020-2','2020-3','2020-4','2020-5','2020-6','2020-7','2020-8','2020-9','2020-10','2020-11','2020-12','2020-13','2020-14','2020-15','2020-16','2020-17','2020-18','2020-19','2020-20','2020-21','2020-22','2020-23','2020-24','2020-25','2025-1','2025-2','2025-3','2025-4','2025-5','2025-6','2025-7','2025-8','2025-9','2025-10','2025-11','2025-12','2025-13','2025-14','2025-15','2025-16','2025-17','2025-18','2025-19','2025-20','2025-21','2025-22','2025-23','2025-24','2025-25']);
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
