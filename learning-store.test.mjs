import assert from 'node:assert/strict';
import { createLearningStore, learningStorageKeys as keys, validCoachingRecords } from './learning-store.js';

const problems = { '2026-1': { hints: ['one', 'two', 'three'] }, '2026-2': { hints: ['one', 'two', 'three'] } };
const original = (problem = '2026-1', extra = {}) => ({ problem, result: 'correct', hints: 0,
  independent: true, at: '2026-09-14T00:00:00.000Z', ...extra });
const coached = (extra = {}) => ({ problem: '2026-1', kind: 'check', id: 'signs', answer: 'A',
  correct: true, firstTry: true, at: '2026-09-14T00:00:01.000Z', ...extra });

function fakeStorage(entries = {}) {
  const values = new Map(Object.entries(entries));
  const writes = [];
  return { values, writes, getItem: (key) => values.get(key) ?? null,
    setItem(key, value) { writes.push([key, value]); values.set(key, value); } };
}

const legacy = original();
const storage = fakeStorage({ [keys.original]: JSON.stringify([legacy]), otherSite: 'keep me' });
const preview = createLearningStore(storage, problems);
assert.equal(preview.mode, 'preview');
assert.equal(preview.hasSavedRecords, true);
assert.deepEqual(preview.records, []);
preview.addOriginal(original('2026-2'));
preview.addCoaching(coached());
preview.refresh();
assert.equal(preview.records.length, 1);
assert.equal(preview.coachingRecords.length, 1);
assert.equal(storage.writes.length, 0, 'Preview initialization and actions must never write');
assert.deepEqual(createLearningStore(storage, problems).records, [], 'Preview records disappear on reload');
assert.equal(storage.getItem(keys.original), JSON.stringify([legacy]), 'Legacy history remains untouched');

preview.startLearning();
assert.equal(preview.mode, 'learning');
assert.deepEqual(preview.records, [legacy], 'Resume restores saved history, excluding preview events');
assert.deepEqual(preview.coachingRecords, []);
assert.equal(storage.writes.length, 1, 'Resume only saves the learning mode');
preview.addCoaching(coached());
preview.addOriginal(original('2026-2'));
const reloaded = createLearningStore(storage, problems);
assert.equal(reloaded.mode, 'learning');
assert.equal(reloaded.records.length, 2);
assert.equal(reloaded.coachingRecords.length, 1);

const forced = createLearningStore(storage, problems, { forcePreview: true });
assert.equal(forced.mode, 'preview');
assert.deepEqual(forced.records, []);
const beforePreview = storage.writes.length;
forced.addOriginal(original());
forced.addCoaching(coached());
forced.refresh();
forced.enterPreview();
assert.equal(storage.writes.length, beforePreview);
assert.equal(storage.getItem(keys.mode), 'learning', 'Preview does not change persisted learning mode');
forced.startLearning({ fresh: true });
assert.equal(forced.mode, 'learning', 'An explicit user action can leave forced preview');
assert.deepEqual(forced.records, []);
assert.deepEqual(forced.coachingRecords, []);
assert.equal(storage.getItem(keys.original), '[]');
assert.equal(storage.getItem(keys.coaching), '[]');
assert.equal(storage.getItem('otherSite'), 'keep me', 'Fresh start only clears this app record keys');
assert.deepEqual(reloaded.refresh(), { reset: true, modeChanged: false }, 'A second tab detects cleared history');
assert.equal(reloaded.records.length, 0);

const firstTab = createLearningStore(storage, problems);
const secondTab = createLearningStore(storage, problems);
firstTab.addOriginal(original());
secondTab.addOriginal(original('2026-2'));
firstTab.addCoaching(coached());
secondTab.addCoaching(coached({ kind: 'similar', id: 'practice', independent: true }));
assert.equal(JSON.parse(storage.getItem(keys.original)).length, 2, 'Sequential tabs merge original records');
assert.equal(JSON.parse(storage.getItem(keys.coaching)).length, 2, 'Sequential tabs merge coaching records');
firstTab.refresh();
assert.equal(firstTab.records.length, 2);
assert.equal(firstTab.coachingRecords.length, 2);
firstTab.records.pop();
assert.equal(firstTab.records.length, 2, 'Returned collections cannot mutate the store');
const recordCopy = firstTab.records[0];
recordCopy.problem = 'changed outside';
assert.equal(firstTab.records[0].problem, '2026-1');

const beforeInvalid = storage.writes.length;
assert.equal(firstTab.addOriginal(original('unknown')), null);
assert.equal(firstTab.addCoaching(coached({ firstTry: 'yes' })), null);
assert.equal(firstTab.addCoaching(coached({ kind: 'similar', independent: true, firstTry: false })), null);
assert.equal(storage.writes.length, beforeInvalid, 'Invalid records do not write');
assert.equal(validCoachingRecords([coached({ kind: 'similar', independent: true, correct: false }),
  coached({ problem: 'unknown' }), coached({ at: 'bad' }), coached({ answer: '' }),
  coached({ kind: 'other' }), coached({ id: '' }), coached({ independent: true }),
  coached({ kind: 'similar', firstTry: false, independent: false })], problems).length, 1);

const capped = createLearningStore(fakeStorage(), problems);
for (let index = 0; index < 205; index++) {
  capped.addOriginal(original('2026-1', { marker: index }));
  capped.addCoaching(coached({ id: String(index) }));
}
assert.equal(capped.records.length, 200);
assert.equal(capped.coachingRecords.length, 200);
assert.equal(capped.records[0].marker, 5);
assert.equal(capped.coachingRecords[0].id, '5');

const corrupt = fakeStorage({ [keys.original]: '{bad json', [keys.coaching]: 'null', [keys.mode]: 'learning' });
assert.deepEqual(createLearningStore(corrupt, problems).records, []);
assert.equal(corrupt.writes.length, 0, 'Reading corrupt data does not silently rewrite it');

const denied = { getItem() { throw new Error('blocked'); }, setItem() { throw new Error('blocked'); } };
const unavailable = createLearningStore(denied, problems);
assert.equal(unavailable.storageAvailable, false);
assert.equal(unavailable.mode, 'preview');
unavailable.addOriginal(original());
assert.equal(unavailable.startLearning({ fresh: true }), true);
assert.deepEqual(unavailable.records, []);
unavailable.addOriginal(original());
unavailable.addCoaching(coached());
unavailable.refresh();
assert.equal(unavailable.records.length, 1);
assert.equal(unavailable.coachingRecords.length, 1);
assert.equal(unavailable.storageAvailable, false);
assert.equal(createLearningStore(null, problems).storageAvailable, false);

const quotaStorage = fakeStorage({ [keys.original]: JSON.stringify([legacy]), [keys.mode]: 'learning' });
quotaStorage.setItem = () => { throw new Error('quota exceeded'); };
const quota = createLearningStore(quotaStorage, problems);
quota.addOriginal(original('2026-2'));
assert.equal(quota.storageAvailable, false);
quota.addOriginal(original());
quota.refresh();
assert.equal(quota.records.length, 3, 'Failed writes retain records for the current session');
assert.deepEqual(JSON.parse(quotaStorage.getItem(keys.original)), [legacy]);

console.log('Verified learning store: no-write preview, legacy preservation, explicit fresh start, reload, cross-tab merging, validation, caps, and unavailable storage.');
