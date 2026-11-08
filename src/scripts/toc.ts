/** Índice activo según la sección visible, barra de progreso y tramo marcado en la muralla. */
export function initToc() {
  const links = new Map<string, HTMLAnchorElement>();
  document.querySelectorAll<HTMLAnchorElement>('.toc [data-section]').forEach((a) => links.set(a.dataset.section!, a));
  const sections = [...links.keys()].map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
  const bar = document.querySelector<HTMLElement>('.toc .progress span');
  const chapters = [...document.querySelectorAll<HTMLElement>('.chapter')];
  const courses = new Map<string, HTMLElement>();
  document.querySelectorAll<HTMLElement>('[data-course]').forEach((c) => courses.set(c.dataset.course!, c));

  let current = '';
  let currentCh = '';
  let ticking = false;

  const update = () => {
    ticking = false;
    const line = window.innerHeight * 0.3;
    // Sección activa: la última cuyo inicio ya pasó la línea de lectura
    let active = '';
    for (const s of sections) if (s.getBoundingClientRect().top <= line) active = s.id;
    if (active !== current) {
      if (current) links.get(current)?.removeAttribute('aria-current');
      if (active) {
        const a = links.get(active)!;
        a.setAttribute('aria-current', 'true');
        a.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
      }
      current = active;
    }
    // Capítulo activo → se marca su tramo en la muralla
    let ch = '';
    for (const c of chapters) {
      const r = c.getBoundingClientRect();
      if (r.top <= line && r.bottom > line) ch = c.id;
    }
    if (ch !== currentCh) {
      courses.get(currentCh)?.classList.remove('here');
      courses.get(ch)?.classList.add('here');
      currentCh = ch;
    }
    if (bar) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.setProperty('--p', String(max > 0 ? Math.min(1, window.scrollY / max) : 0));
    }
  };

  const onScroll = () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);
  update();
}
