/** Resalta brevemente el destino de un salto interno (muralla, buscador, enlaces con #). */
export function flash(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove('flash');
  void el.offsetWidth; // reinicia la animación
  el.classList.add('flash');
}

export function goTo(hash: string) {
  const id = hash.replace(/^#/, '');
  const el = document.getElementById(id);
  if (!el) return;
  history.pushState(null, '', `#${id}`);
  el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  flash(id);
}

export function initJumps() {
  document.addEventListener('click', (ev) => {
    const a = (ev.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
    if (!a || a.classList.contains('skip')) return;
    const id = a.getAttribute('href')!.slice(1);
    if (!id || !document.getElementById(id)) return;
    ev.preventDefault();
    goTo(id);
  });
  if (location.hash) requestAnimationFrame(() => flash(location.hash.slice(1)));
}
