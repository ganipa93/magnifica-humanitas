/**
 * Escuchar: lee en voz alta los resúmenes de un capítulo con la voz del
 * navegador (Web Speech API). No usa servicios externos.
 *
 * - Lee título y resumen de cada parte, en orden, desde la que se elija.
 * - Omite las referencias § (son citas visuales) para que la lectura fluya.
 * - Habla por oraciones: Chrome corta las locuciones largas.
 * - Marca la parte que se está leyendo y la acompaña con el scroll, salvo
 *   que el lector se haya movido a otro lado hace poco.
 */

type Part = { el: HTMLElement; title: string; chunks: string[] };

export function initListen() {
  const synth = window.speechSynthesis;
  const bar = document.querySelector<HTMLElement>('[data-listen]');
  if (!bar) return;
  if (!synth || typeof SpeechSynthesisUtterance === 'undefined') return; // el control queda oculto
  bar.hidden = false;
  document.querySelectorAll<HTMLElement>('[data-listen-from]').forEach((b) => (b.hidden = false));

  const playBtn = bar.querySelector<HTMLButtonElement>('[data-listen-play]')!;
  const stopBtn = bar.querySelector<HTMLButtonElement>('[data-listen-stop]')!;
  const rateSel = bar.querySelector<HTMLSelectElement>('[data-listen-rate]')!;
  const status = bar.querySelector<HTMLElement>('[data-listen-status]')!;

  // Texto de cada parte hoja, tomado del DOM ya renderizado
  const parts: Part[] = [...document.querySelectorAll<HTMLElement>('[data-speak]')].map((el) => {
    const heading = el.querySelector('h2, h3');
    const summary = el.querySelector('.summary')?.cloneNode(true) as HTMLElement | undefined;
    summary?.querySelectorAll('.ref').forEach((r) => r.remove());
    const title = (heading?.textContent ?? '').trim();
    const text = (summary?.textContent ?? '')
      .replace(/\s+([.,;:])/g, '$1')
      .replace(/\s+/g, ' ')
      .trim();
    // Divide en oraciones sin cortar abreviaturas comunes
    const sentences = text.match(/[^.!?…]+[.!?…]+[”"’)]*|\S[^.!?…]*$/g) ?? [text];
    return { el, title, chunks: [`${title}.`, ...sentences.map((s) => s.trim()).filter(Boolean)] };
  });

  let voice: SpeechSynthesisVoice | undefined;
  const pickVoice = () => {
    const vs = synth.getVoices();
    voice =
      vs.find((v) => v.lang === 'es-AR') ??
      vs.find((v) => v.lang === 'es-US' || v.lang === 'es-419' || v.lang === 'es-MX') ??
      vs.find((v) => v.lang.startsWith('es'));
  };
  pickVoice();
  synth.addEventListener?.('voiceschanged', pickVoice);

  let state: 'idle' | 'playing' | 'paused' = 'idle';
  let pi = 0; // parte actual
  let ci = 0; // oración actual
  let token = 0; // invalida callbacks viejos al detener o saltar
  let lastUserScroll = 0;
  addEventListener('wheel', () => (lastUserScroll = Date.now()), { passive: true });
  addEventListener('touchmove', () => (lastUserScroll = Date.now()), { passive: true });
  addEventListener('keydown', (e) => {
    if (['PageDown', 'PageUp', 'ArrowDown', 'ArrowUp', ' ', 'Home', 'End'].includes(e.key)) lastUserScroll = Date.now();
  });

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const render = () => {
    playBtn.textContent = state === 'playing' ? 'Pausar' : state === 'paused' ? 'Seguir' : 'Escuchar el capítulo';
    playBtn.setAttribute('aria-pressed', String(state === 'playing'));
    stopBtn.hidden = state === 'idle';
    parts.forEach((p, i) => p.el.classList.toggle('speaking', state !== 'idle' && i === pi));
    document.querySelectorAll<HTMLButtonElement>('[data-listen-from]').forEach((b) => {
      const on = state !== 'idle' && b.dataset.listenFrom === parts[pi]?.el.dataset.speak;
      b.textContent = on ? (state === 'playing' ? 'Leyendo…' : 'En pausa') : 'Escuchar desde acá';
    });
    status.textContent =
      state === 'idle' ? '' : `${state === 'paused' ? 'En pausa' : 'Leyendo'}: ${parts[pi]?.title ?? ''}`;
  };

  const follow = () => {
    // Acompaña la lectura salvo que la persona haya scrolleado en los últimos 5 segundos
    if (Date.now() - lastUserScroll < 5000) return;
    const r = parts[pi]!.el.getBoundingClientRect();
    if (r.top < 60 || r.top > innerHeight * 0.6)
      parts[pi]!.el.scrollIntoView({ block: 'start', behavior: reduced ? 'auto' : 'smooth' });
  };

  const speakNext = (t: number) => {
    if (t !== token || state !== 'playing') return;
    const part = parts[pi];
    if (!part) { stop(); return; }
    if (ci === 0) { render(); follow(); }
    const u = new SpeechSynthesisUtterance(part.chunks[ci]!);
    u.lang = voice?.lang ?? 'es-AR';
    if (voice) u.voice = voice;
    u.rate = Number(rateSel.value) || 1;
    u.onend = () => {
      if (t !== token) return;
      ci++;
      if (ci >= part.chunks.length) { ci = 0; pi++; }
      if (pi >= parts.length) { stop(); status.textContent = 'Terminó la lectura del capítulo.'; return; }
      speakNext(t);
    };
    u.onerror = (e) => {
      if (t !== token || e.error === 'interrupted' || e.error === 'canceled') return;
      stop();
      status.textContent = 'El navegador no pudo leer en voz alta. Probá con otro navegador.';
    };
    synth.speak(u);
  };

  const start = (from: number) => {
    token++;
    synth.cancel();
    pi = from; ci = 0; state = 'playing';
    lastUserScroll = 0;
    render();
    speakNext(token);
  };

  function stop() {
    token++;
    synth.cancel();
    state = 'idle';
    render();
  }

  playBtn.addEventListener('click', () => {
    if (state === 'idle') start(0);
    else if (state === 'playing') { synth.pause(); state = 'paused'; render(); }
    else { synth.resume(); state = 'playing'; render(); }
  });
  stopBtn.addEventListener('click', stop);
  rateSel.addEventListener('change', () => {
    // La velocidad se aplica a la próxima oración; reinicia la actual para que se note enseguida
    if (state === 'playing') { const keep = ci; token++; synth.cancel(); ci = keep; speakNext(token); }
  });
  document.addEventListener('click', (e) => {
    const b = (e.target as Element).closest<HTMLButtonElement>('[data-listen-from]');
    if (!b) return;
    const idx = parts.findIndex((p) => p.el.dataset.speak === b.dataset.listenFrom);
    if (idx < 0) return;
    if (state !== 'idle' && idx === pi) playBtn.click();
    else start(idx);
  });
  // Corta la lectura al salir de la página
  addEventListener('pagehide', () => synth.cancel());
  render();
}
