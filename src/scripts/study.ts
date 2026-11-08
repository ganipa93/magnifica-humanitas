/**
 * Modo estudio: marcar secciones como leídas y ver el avance.
 * Se guarda solo en este navegador (localStorage). Si no está disponible,
 * todo sigue funcionando durante la visita.
 */
const KEY = 'mh-leidas';
let memory = new Set<number>();

function load(): Set<number> {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) memory = new Set(JSON.parse(raw) as number[]);
  } catch { /* modo privado o almacenamiento bloqueado */ }
  return memory;
}
function save() {
  try { localStorage.setItem(KEY, JSON.stringify([...memory])); } catch { /* idem */ }
}

/** Actualiza contadores y barras de cualquier elemento [data-leaves="1,4,7"]. */
function paint() {
  document.querySelectorAll<HTMLElement>('[data-leaves]').forEach((el) => {
    const leaves = el.dataset.leaves!.split(',').map(Number);
    const done = leaves.filter((n) => memory.has(n)).length;
    el.style.setProperty('--done', String(leaves.length ? done / leaves.length : 0));
    const count = el.querySelector<HTMLElement>('[data-count]');
    if (count) count.textContent = done === 0 ? count.dataset.empty ?? '' : `${done} de ${leaves.length} partes leídas`;
    el.classList.toggle('started', done > 0);
    el.classList.toggle('complete', done === leaves.length && leaves.length > 0);
  });
  document.querySelectorAll<HTMLButtonElement>('[data-mark]').forEach((b) => {
    const on = memory.has(Number(b.dataset.mark));
    b.setAttribute('aria-pressed', String(on));
    b.textContent = on ? 'Leída' : 'Marcar como leída';
  });
  document.querySelectorAll<HTMLElement>('[data-read-dot]').forEach((d) => {
    d.classList.toggle('is-read', memory.has(Number(d.dataset.readDot)));
  });
  document.querySelectorAll<HTMLButtonElement>('[data-reset-read]').forEach((b) => (b.hidden = memory.size === 0));
}

export function initStudy() {
  load();
  document.addEventListener('click', (ev) => {
    const t = ev.target as Element;
    const mark = t.closest<HTMLButtonElement>('[data-mark]');
    if (mark) {
      const n = Number(mark.dataset.mark);
      memory.has(n) ? memory.delete(n) : memory.add(n);
      save(); paint();
      return;
    }
    if (t.closest('[data-reset-read]')) {
      if (!confirm('¿Borrar el registro de secciones leídas en este navegador?')) return;
      memory.clear(); save(); paint();
      return;
    }
    if (t.closest('[data-print]')) window.print();
  });
  // Sincroniza entre pestañas abiertas
  addEventListener('storage', (e) => { if (e.key === KEY) { load(); paint(); } });
  paint();
}
