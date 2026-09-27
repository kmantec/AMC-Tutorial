// Synthetic Web Speech API stand-in. It does not make sound or access a browser.
export function fakeSpeech(initialVoices = []) {
  let voices = initialVoices, cancelCount = 0, throws = false;
  const calls = [], pending = [], listeners = new Map();
  class Utterance { constructor(text) { this.text = text; } }
  const engine = {
    getVoices: () => voices,
    addEventListener: (name, listener) => listeners.set(name,listener),
    speak(utterance) { if (throws) throw new Error('Unavailable engine'); calls.push(utterance); pending.push(utterance); },
    cancel() {
      cancelCount++;
      for (const utterance of pending.splice(0)) utterance.onerror?.({error:'canceled'});
    },
  };
  return {
    host: {speechSynthesis:engine,SpeechSynthesisUtterance:Utterance},
    calls, pending,
    get cancelCount() { return cancelCount; },
    get text() { return pending.map((utterance) => utterance.text).join(' '); },
    changeVoices(next) { voices = next; listeners.get('voiceschanged')?.(); },
    fail(error) { pending[0]?.onerror?.({error}); },
    throwOnSpeak(value) { throws = value; },
    finish() { for (const utterance of pending.splice(0)) { utterance.onstart?.(); utterance.onend?.(); } },
  };
}
export const sampleVoices = [
  {name:'Thai device voice',lang:'th-TH',voiceURI:'test-thai',default:true},
  {name:'English one',lang:'en-US',voiceURI:'test-english-one',default:false},
  {name:'English two',lang:'en-GB',voiceURI:'test-english-two',default:false},
];
