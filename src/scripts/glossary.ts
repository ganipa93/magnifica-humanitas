/** Definición emergente para los términos del glosario subrayados en el texto. */
export function initTerms() {
  const pop = document.getElementById('term-pop') as (HTMLElement & { showPopover(): void; hidePopover(): void }) | null;
  if (!pop || !('showPopover' in pop)) return;
  const title = pop.querySelector<HTMLElement>('#term-pop-title')!;
  const def = pop.querySelector<HTMLElement>('.def')!;
  const link = pop.querySelector<HTMLAnchorElement>('[data-act="glossary"]')!;
  let anchor: HTMLButtonElement | null = null;

  const place = () => {
    if (!anchor) return;
    const r = anchor.getBoundingClientRect();
    const w = pop.offsetWidth, h = pop.offsetHeight;
    const left = Math.min(Math.max(16, r.left), innerWidth - w - 16);
    let top = r.bottom + 8;
    if (top + h > innerHeight - 8) top = r.top - h - 8;
    pop.style.left = `${left}px`;
    pop.style.top = `${top}px`;
  };

  document.addEventListener('click', (ev) => {
    const btn = (ev.target as Element).closest<HTMLButtonElement>('button.term');
    if (!btn) return;
    if (anchor === btn && pop.matches(':popover-open')) { pop.hidePopover(); return; }
    const id = btn.dataset.term!;
    const tpl = document.querySelector<HTMLTemplateElement>(`template[data-term-def="${id}"]`);
    if (!tpl) return;
    anchor?.setAttribute('aria-expanded', 'false');
    anchor = btn;
    title.textContent = tpl.dataset.termName ?? '';
    def.replaceChildren(tpl.content.cloneNode(true));
    link.href = `/glosario/#${id}`;
    btn.setAttribute('aria-expanded', 'true');
    pop.showPopover();
    place();
    // Lleva el foco a la definición para que el lector de pantalla la lea
    title.focus({ preventScroll: true });
  });

  pop.addEventListener('toggle', (e) => {
    if ((e as ToggleEvent).newState === 'closed') {
      anchor?.setAttribute('aria-expanded', 'false');
      // Devuelve el foco al término si quedó dentro del popover
      if (pop.contains(document.activeElement) || document.activeElement === document.body) anchor?.focus({ preventScroll: true });
    }
  });
  const follow = () => pop.matches(':popover-open') && place();
  addEventListener('scroll', follow, { passive: true });
  addEventListener('resize', follow);
}
