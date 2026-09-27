import { validRecords } from './practice-state.js';

export const learningStorageKeys = Object.freeze({
  original: 'pingping-amc8-practice-v1',
  coaching: 'pingping-amc8-coaching-v1',
  mode: 'pingping-amc8-mode-v1',
});

export function validCoachingRecords(saved, problems) {
  if (!Array.isArray(saved)) return [];
  return saved.filter((record) => record && Object.hasOwn(problems, record.problem)
    && ['check', 'similar', 'reflection'].includes(record.kind)
    && typeof record.id === 'string' && record.id.length > 0
    && typeof record.answer === 'string' && record.answer.length > 0
    && typeof record.correct === 'boolean' && typeof record.firstTry === 'boolean'
    && typeof record.at === 'string' && Number.isFinite(Date.parse(record.at))
    && (record.independent === undefined || (record.kind === 'similar'
      && typeof record.independent === 'boolean'
      && (!record.independent || (record.correct && record.firstTry)))))
    .slice(-200).map((record) => ({
      problem: record.problem, kind: record.kind, id: record.id, answer: record.answer,
      correct: record.correct, firstTry: record.firstTry, at: record.at,
      ...(record.independent === undefined ? {} : { independent: record.independent }),
    }));
}

const copyRecords = (records) => records.map((record) => ({ ...record }));

function parseSaved(value) {
  try { return JSON.parse(value); } catch { return null; }
}

// Preview never writes, including on first load. Only an explicit startLearning
// action opts this page into saved learning; a fresh start resets these two lists.
export function createLearningStore(storage, problems, { forcePreview = false } = {}) {
  let available = Boolean(storage && typeof storage.getItem === 'function' && typeof storage.setItem === 'function');
  let saved = { original: [], coaching: [], mode: 'preview' };
  let currentMode;
  let original = [];
  let coaching = [];

  function readSaved() {
    if (!available) return saved;
    try {
      const snapshot = {
        original: validRecords(parseSaved(storage.getItem(learningStorageKeys.original)), problems),
        coaching: validCoachingRecords(parseSaved(storage.getItem(learningStorageKeys.coaching)), problems),
        mode: storage.getItem(learningStorageKeys.mode) === 'learning' ? 'learning' : 'preview',
      };
      saved = snapshot;
    } catch {
      // Retain the last readable snapshot for a session-only resume.
      available = false;
    }
    return saved;
  }

  function writeSaved(key, value) {
    if (!available) return false;
    try { storage.setItem(key, value); return true; }
    catch { available = false; return false; }
  }

  readSaved();
  currentMode = forcePreview ? 'preview' : saved.mode;
  if (currentMode === 'learning') {
    original = copyRecords(saved.original);
    coaching = copyRecords(saved.coaching);
  }

  function add(record, type) {
    const checked = type === 'original' ? validRecords([record], problems) : validCoachingRecords([record], problems);
    if (checked.length !== 1) return null;
    const accepted = { ...checked[0] };
    let current = type === 'original' ? original : coaching;
    if (currentMode === 'learning' && available) {
      const latest = readSaved();
      if (available) current = copyRecords(latest[type]);
    }
    const updated = [...current, accepted].slice(-200);
    if (type === 'original') original = updated;
    else coaching = updated;
    if (currentMode === 'learning' && writeSaved(learningStorageKeys[type], JSON.stringify(updated))) {
      saved[type] = copyRecords(updated);
    }
    return { ...accepted };
  }

  return {
    get mode() { return currentMode; },
    get records() { return copyRecords(original); },
    get coachingRecords() { return copyRecords(coaching); },
    get storageAvailable() { return available; },
    get hasSavedRecords() { const latest = readSaved(); return latest.original.length > 0 || latest.coaching.length > 0; },
    addOriginal(record) { return add(record, 'original'); },
    addCoaching(record) { return add(record, 'coaching'); },
    startLearning({ fresh = false } = {}) {
      readSaved();
      original = fresh ? [] : copyRecords(saved.original);
      coaching = fresh ? [] : copyRecords(saved.coaching);
      if (fresh) {
        if (writeSaved(learningStorageKeys.original, '[]')) saved.original = [];
        if (writeSaved(learningStorageKeys.coaching, '[]')) saved.coaching = [];
      }
      if (writeSaved(learningStorageKeys.mode, 'learning')) saved.mode = 'learning';
      currentMode = 'learning';
      // The action succeeds even without storage; storageAvailable explicitly
      // distinguishes session-only learning from persisted learning in the UI.
      return true;
    },
    enterPreview() {
      currentMode = 'preview';
      original = [];
      coaching = [];
    },
    refresh() {
      if (currentMode === 'preview') return { reset: false, modeChanged: false };
      const priorMode = currentMode;
      const hadRecords = original.length > 0 || coaching.length > 0;
      const latest = readSaved();
      if (!available) return { reset: false, modeChanged: false };
      currentMode = latest.mode;
      original = currentMode === 'learning' ? copyRecords(latest.original) : [];
      coaching = currentMode === 'learning' ? copyRecords(latest.coaching) : [];
      return { reset: hadRecords && original.length === 0 && coaching.length === 0,
        modeChanged: priorMode !== currentMode };
    },
  };
}
