// Browser-provided speech only. No storage, microphone, API key, or learner events.
export function spokenMath(text) {
  return String(text)
    .replace(/\bcm²/g, ' square centimeters ')
    .replace(/\bcm\b/g, ' centimeters ')
    .replace(/²/g, ' squared ').replace(/³/g, ' cubed ')
    .replace(/√/g, ' the square root of ')
    .replace(/−/g, ' minus ').replace(/(\d)\s*-\s*(?=\d)/g, '$1 minus ')
    .replace(/\+/g, ' plus ').replace(/×/g, ' times ')
    .replace(/÷/g, ' divided by ').replace(/=/g, ' equals ').replace(/%/g, ' percent ')
    .replace(/\(/g, ' open bracket ').replace(/\)/g, ' close bracket ')
    .replace(/—/g, ', ').replace(/\s+/g, ' ').trim();
}

export function spokenCheck(check) {
  return [check.prompt, ...check.options.map((option, index) =>
    (index === 0 ? 'First choice: ' : 'Second choice: ') + option.label)];
}

export function spokenProblem(problem) {
  const data = problem.expression ? [problem.expression]
    : problem.matrix ? problem.matrix.map((row, index) => 'Row ' + (index + 1) + ': ' + row.join(', ') + '.')
    : (problem.facts || []).map((fact, index) => 'Shape ' + (index + 1) + ': ' + fact);
  return [problem.label, problem.prompt, ...data,
    ...problem.options.map((option) => 'Choice ' + option.letter + ': ' + option.label)];
}

// Short utterances avoid handing a whole lesson to an engine in one long request.
export function speechChunks(parts) {
  const chunks = [];
  for (const part of parts.filter(Boolean)) {
    let chunk = '';
    for (const word of spokenMath(part).split(' ')) {
      if (chunk && chunk.length + word.length + 1 > 220) { chunks.push(chunk); chunk = ''; }
      chunk += (chunk ? ' ' : '') + word;
    }
    if (chunk) chunks.push(chunk);
  }
  return chunks;
}

export function createCoachSpeech(host, { onChange = () => {} } = {}) {
  let engine, Utterance;
  try { engine = host.speechSynthesis; Utterance = host.SpeechSynthesisUtterance; } catch { /* Text still works. */ }
  const supported = Boolean(engine && typeof engine.speak === 'function'
    && typeof engine.cancel === 'function' && typeof engine.getVoices === 'function'
    && typeof Utterance === 'function');
  let voices = [], selected = '', muted = false, status = 'idle', error = '';
  let generation = 0, active = [];
  const voiceKey = (voice) => JSON.stringify([voice.voiceURI, voice.lang, voice.name]);
  const english = (voice) => /^en(?:[-_]|$)/i.test(voice.lang);
  const snapshot = () => ({ supported, muted, status, error, selected,
    voices: voices.map((voice) => ({ id: voiceKey(voice), name: voice.name, lang: voice.lang })) });
  const notify = () => onChange(snapshot());
  function refreshVoices(notifyChange = true) {
    if (!supported) return;
    try {
      voices = Array.from(engine.getVoices()).sort((a,b) => Number(english(b)) - Number(english(a))
        || a.name.localeCompare(b.name));
      if (selected && !voices.some((voice) => voiceKey(voice) === selected)) selected = '';
    } catch { /* Let the engine use its English default if voice enumeration fails. */ }
    if (notifyChange) notify();
  }
  function stop() {
    generation++;
    const wasActive = active.length > 0;
    active = []; status = 'idle'; error = '';
    if (supported && wasActive) { try { engine.cancel(); } catch { /* Keep text and controls usable. */ } }
    notify();
  }
  function speak(parts) {
    stop();
    if (!supported || muted) return false;
    refreshVoices();
    const chunks = speechChunks(parts);
    if (!chunks.length) return false;
    const token = generation;
    const chosen = voices.find((voice) => voiceKey(voice) === selected)
      || voices.find((voice) => english(voice) && voice.default) || voices.find(english);
    function failed(reason) {
      if (generation !== token) return;
      stop();
      status = 'error';
      error = reason === 'not-allowed'
        ? 'Tap Listen again to allow your browser to start the voice.'
        : 'The voice could not play. Try another voice or tap Listen again. You can keep reading.';
      notify();
    }
    try {
      // Keep strong references until completion; canceled callbacks cannot change a newer request.
      active = chunks.map((text, index) => {
        const utterance = new Utterance(text);
        utterance.lang = chosen?.lang || 'en-US';
        if (chosen) utterance.voice = chosen;
        utterance.rate = 0.95;
        utterance.onstart = () => { if (token === generation) { status = 'speaking'; notify(); } };
        utterance.onend = () => {
          if (token === generation && index === chunks.length - 1) { active = []; status = 'idle'; notify(); }
        };
        utterance.onerror = (event) => failed(event.error);
        return utterance;
      });
      status = 'starting'; notify();
      for (const utterance of active) {
        if (generation !== token) break;
        // Called synchronously from the learner's tap; no automatic speech on render/load.
        engine.speak(utterance);
      }
      return generation === token;
    } catch { failed('unavailable'); return false; }
  }
  refreshVoices(false);
  if (supported) engine.addEventListener?.('voiceschanged', () => refreshVoices());
  return {
    get state() { return snapshot(); },
    speak, stop, refreshVoices,
    setMuted(value) { muted = Boolean(value); stop(); },
    setVoice(value) { selected = voices.some((voice) => voiceKey(voice) === value) ? value : ''; stop(); },
  };
}
