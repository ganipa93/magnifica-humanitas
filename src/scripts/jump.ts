/** Resalta brevemente el destino de un salto interno (muralla, buscador, enlaces con #). */
export function flash(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove('flash');
  void el.offsetWidth; // reinicia la animación
  el.classList.add('flash');
}

const norm = (p: string) => p.replace(/\/$/, '') || '/';

/** Va a un destino interno: en esta página hace scroll; si es otra página, navega. */
export function goTo(target: string) {
  const url = new URL(target, location.href);
  if (norm(url.pathname) !== norm(location.pathname)) {
    location.href = url.href;
    return;
  }
  const id = url.hash.slice(1);
  const el = id && document.getElementById(id);
  if (!el) return;
  // Si el destino está dentro de un <details> cerrado, se abre
  const det = el instanceof HTMLDetailsElement ? el : el.closest('details');
  if (det) det.open = true;
  history.pushState(null, '', `#${id}`);
  el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  flash(id);
}

export function initJumps() {
  document.addEventListener('click', (ev) => {
    if (ev.defaultPrevented || ev.metaKey || ev.ctrlKey || ev.shiftKey) return;
    const a = (ev.target as Element).closest<HTMLAnchorElement>('a[href*="#"]');
    if (!a || a.classList.contains('skip') || a.target) return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin || norm(url.pathname) !== norm(location.pathname)) return;
    const id = url.hash.slice(1);
    if (!id || !document.getElementById(id)) return;
    ev.preventDefault();
    goTo(`#${id}`);
  });
  if (location.hash) requestAnimationFrame(() => flash(location.hash.slice(1)));
}
