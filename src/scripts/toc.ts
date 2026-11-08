/**
 * Seguimiento de lectura:
 * - marca el enlace activo de cualquier navegación con [data-section] (barra superior, índice lateral)
 * - barra de progreso
 * - en la portada, ilumina en la muralla el capítulo que se está leyendo
 */
export function initToc() {
  const links = new Map<string, HTMLAnchorElement[]>();
  document.querySelectorAll<HTMLAnchorElement>('[data-section]').forEach((a) => {
    const id = a.dataset.section!;
    links.set(id, [...(links.get(id) ?? []), a]);
  });
  const targets = [...links.keys()]
    .map((id) => document.getElementById(id))
    .filter(Boolean) as HTMLElement[];
  targets.sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));

  const bar = document.querySelector<HTMLElement>('.toc .progress span');
  const chapters = [...document.querySelectorAll<HTMLElement>('main .chapter')];
  const courses = new Map<string, HTMLElement>();
  document.querySelectorAll<HTMLElement>('[data-course]').forEach((c) => courses.set(c.dataset.course!, c));

  let current = '';
  let currentCh = '';
  let ticking = false;

  const update = () => {
    ticking = false;
    const line = window.innerHeight * 0.3;
    // Activa: la última cuyo inicio ya pasó la línea de lectura
    let active = '';
    for (const s of targets) if (s.getBoundingClientRect().top <= line) active = s.id;
    if (active !== current) {
      links.get(current)?.forEach((a) => a.removeAttribute('aria-current'));
      links.get(active)?.forEach((a) => {
        a.setAttribute('aria-current', 'true');
        // Centra el enlace activo moviendo SOLO el contenedor horizontal de la barra.
        // No usar scrollIntoView: también inicia un scroll en la ventana y corta el del usuario.
        const strip = a.closest<HTMLElement>('.toc .links');
        if (strip) {
          const left = a.offsetLeft - strip.offsetLeft - (strip.clientWidth - a.offsetWidth) / 2;
          strip.scrollTo({ left, behavior: 'smooth' });
        }
      });
      current = active;
    }
    if (courses.size) {
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
