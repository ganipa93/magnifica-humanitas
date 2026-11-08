import { openSearch } from './search';
import { locateRef, describe } from './search';

import { toast } from './toast';

/** Popover compartido para todas las referencias §. */
export function initRefs() {
  const pop = document.getElementById('ref-pop') as HTMLElement & { showPopover(): void; hidePopover(): void };
  if (!pop || !('showPopover' in pop)) return;
  const where = pop.querySelector<HTMLElement>('.where')!;
  const official = pop.querySelector<HTMLAnchorElement>('[data-act="official"]')!;
  const summaryLink = pop.querySelector<HTMLAnchorElement>('[data-act="summary"]')!;
  let anchor: HTMLButtonElement | null = null;

  const place = () => {
    if (!anchor) return;
    const r = anchor.getBoundingClientRect();
    const w = pop.offsetWidth, h = pop.offsetHeight;
    let left = Math.min(Math.max(16, r.left), innerWidth - w - 16);
    let top = r.bottom + 8;
    if (top + h > innerHeight - 8) top = r.top - h - 8;
    pop.style.left = `${left}px`;
    pop.style.top = `${top}px`;
  };

  document.addEventListener('click', (ev) => {
    const btn = (ev.target as Element).closest<HTMLButtonElement>('button.ref');
    if (!btn) return;
    ev.stopPropagation();
    if (anchor === btn && pop.matches(':popover-open')) { pop.hidePopover(); return; }
    anchor?.setAttribute('aria-expanded', 'false');
    anchor = btn;
    const ref = btn.dataset.ref!;
    const first = Number(btn.dataset.first);
    const loc = locateRef(first);
    where.innerHTML = '';
    const b = document.createElement('b');
    b.textContent = `§ ${ref}`;
    where.append(b, document.createTextNode(loc ? describe(loc) : ''));
    summaryLink.hidden = !loc;
    if (loc) summaryLink.href = loc.href;
    official.href = pop.dataset.official!;
    btn.setAttribute('aria-expanded', 'true');
    pop.showPopover();
    place();
    pop.querySelector<HTMLElement>('[data-act="find"]')?.focus({ preventScroll: true });
  });

  pop.addEventListener('toggle', (e) => {
    if ((e as ToggleEvent).newState === 'closed') {
      anchor?.setAttribute('aria-expanded', 'false');
      anchor?.focus({ preventScroll: true });
    }
  });
  // El popover sigue a su referencia al hacer scroll o cambiar el tamaño
  const follow = () => pop.matches(':popover-open') && place();
  addEventListener('scroll', follow, { passive: true });
  addEventListener('resize', follow);

  pop.querySelector('[data-act="find"]')!.addEventListener('click', () => {
    const q = anchor?.dataset.first ?? '';
    pop.hidePopover();
    openSearch(q);
  });
  pop.querySelector('[data-act="copy"]')!.addEventListener('click', async () => {
    const holder = anchor?.closest<HTMLElement>('[id]');
    const url = `${location.origin}${location.pathname}${holder ? `#${holder.id}` : ''}`;
    try { await navigator.clipboard.writeText(url); toast('Enlace copiado'); }
    catch { toast('No se pudo copiar el enlace'); }
    pop.hidePopover();
  });
  official.addEventListener('click', () => pop.hidePopover());
  summaryLink.addEventListener('click', () => pop.hidePopover());
}
