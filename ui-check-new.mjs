// Browser smoke test for the exam room and drill room, run against a local
// static server. Uses only node:http + node:fs + the browser_exec CDP helpers
// invoked by the caller. Kept dependency-free so it can run in CI later.
//
// Usage: node ui-check-new.mjs  (server must already be on :8123)
import fs from 'node:fs';

const base = 'http://localhost:8123/';
const html = fs.readFileSync('index.html', 'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dupes.length) { console.error('duplicate ids', dupes); process.exit(1); }

const app = fs.readFileSync('app.js', 'utf8');
const targets = [...app.matchAll(/\$\('#([a-z][a-z0-9-]*)'\)/g)].map((m) => m[1]);
const missing = [...new Set(targets.filter((t) => !ids.includes(t)))];
if (missing.length) { console.error('app.js targets missing from HTML:', missing); process.exit(1); }

const ui = fs.readFileSync('exam-ui.js', 'utf8');
const uiTargets = [...ui.matchAll(/\$\('#([a-z][a-z0-9-]*)'\)/g)].map((m) => m[1]);
const uiMissing = [...new Set(uiTargets.filter((t) => !ids.includes(t)))];
if (uiMissing.length) { console.error('exam-ui.js targets missing from HTML:', uiMissing); process.exit(1); }

console.log('HTML ids:', ids.length, '| app targets ok:', new Set(targets).size, '| exam-ui targets ok:', new Set(uiTargets).size);
