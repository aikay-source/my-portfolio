// Lightweight synthesized UI sound effects (Web Audio API, no audio files).
// A single sine oscillator + exponential envelope, reused for two cases:
// a two-tone sweep for the binary dark/light toggle, and a lighter single
// tick for hover feedback (list rows, filmstrip).

const MUTE_STORAGE_KEY = 'soundMuted';

let ctx: AudioContext | null = null;
const lastPlayedAt: Record<string, number> = {};
let muted = typeof localStorage !== 'undefined' && localStorage.getItem(MUTE_STORAGE_KEY) === 'true';

export function isSoundMuted(): boolean {
  return muted;
}

export function setSoundMuted(value: boolean) {
  muted = value;
  try {
    localStorage.setItem(MUTE_STORAGE_KEY, String(value));
  } catch {
    // localStorage unavailable (private browsing, etc.) — mute state just won't persist.
  }
}

function getContext(): AudioContext | null {
  if (typeof window === 'undefined' || muted) return null;
  const AudioContextCtor = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioContextCtor) return null;
  if (!ctx) ctx = new AudioContextCtor();
  return ctx;
}

/** Mobile browsers (notably iOS Safari) often leave a freshly-created
 * AudioContext in a "suspended" state until resume() has actually resolved —
 * scheduling nodes before that settles can silently drop the sound rather
 * than queue it. Running already-"running" contexts synchronously keeps
 * desktop and warmed-up mobile taps instant; only a cold first tap waits. */
function scheduleSound(build: (audioCtx: AudioContext, now: number) => void) {
  const audioCtx = getContext();
  if (!audioCtx) return;

  const run = () => build(audioCtx, audioCtx.currentTime);

  if (audioCtx.state === 'running') {
    run();
  } else {
    audioCtx.resume().then(run).catch(() => {});
  }
}

if (typeof document !== 'undefined') {
  const unlock = () => {
    getContext()?.resume().catch(() => {});
    document.removeEventListener('touchend', unlock);
    document.removeEventListener('pointerdown', unlock);
  };
  document.addEventListener('touchend', unlock, { once: true, passive: true });
  document.addEventListener('pointerdown', unlock, { once: true, passive: true });
}

function throttled(key: string, minGapMs: number): boolean {
  const now = performance.now();
  if (now - (lastPlayedAt[key] ?? -Infinity) < minGapMs) return false;
  lastPlayedAt[key] = now;
  return true;
}

function playTone(startFreq: number, endFreq: number, peakGain: number, totalDuration: number) {
  scheduleSound((audioCtx, now) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(startFreq, now);
    if (endFreq !== startFreq) {
      osc.frequency.exponentialRampToValueAtTime(endFreq, now + totalDuration * 0.9);
    }

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(peakGain, now + totalDuration * 0.125);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + totalDuration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(now);
    osc.stop(now + totalDuration + 0.05);
  });
}

/** Two-tone sweep for a binary toggle: rises when turning on, falls when turning off. */
export function playToggleChime(turningOn: boolean) {
  const [from, to] = turningOn ? [330, 494] : [494, 330];
  playTone(from, to, 0.13, 0.4);
}

/** A single light tick for hover feedback — subtler and shorter than the toggle chime. */
export function playHoverTick() {
  if (!throttled('hover-tick', 70)) return;
  playTone(494, 494, 0.08, 0.18);
}

/** A quiet, neutral tick for general clickable elements (nav links, buttons,
 * cards) — deliberately quieter and shorter than the other cues since it
 * fires on almost every interaction across the site. */
export function playClickSound() {
  if (!throttled('click', 50)) return;
  playTone(600, 600, 0.06, 0.1);
}

/** A short, percussive mechanical click — like a scroll dial's detent — for
 * discrete step changes (e.g. the filmstrip landing on the next image).
 * Filtered noise burst, not a pitched tone, so it reads as physical rather
 * than musical. */
export function playScrollDialTick() {
  if (!throttled('scroll-dial', 60)) return;

  scheduleSound((audioCtx, now) => {
    const duration = 0.035;

    const bufferSize = Math.max(1, Math.floor(audioCtx.sampleRate * duration));
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;

    const filter = audioCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(2800, now);
    filter.Q.setValueAtTime(1.1, now);

    const gain = audioCtx.createGain();
    gain.gain.setValueAtTime(0.22, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);

    noise.start(now);
    noise.stop(now + duration + 0.01);
  });
}
