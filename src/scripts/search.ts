import { fold } from '../lib/rich';
import { goTo } from './jump';
import type { Entry } from '../lib/search-index';

interface MapPart { c: string; s: string; t: string; f: number; to: number; href: string }
interface Data { index: Entry[]; map: MapPart[] }

let data: Data | null = null;
const load = (): Data => (data ??= JSON.parse(document.getElementById('search-data')!.textContent!));

/** Ubica un párrafo en la estructura usando el mapa incrustado (sin cargar todo el contenido). */
export function locateRef(n: number): MapPart | undefined {
  return load().map.find((p) => n >= p.f && n <= p.to);
}

/** "Capítulo 3 · La inteligencia artificial · Párrafos iniciales" */
export const describe = (p: MapPart) => [p.c, p.s, p.t].filter(Boolean).join(' · ');

let dialog: HTMLDialogElement;
let input: HTMLInputElement;

export function openSearch(q = '') {
  if (!dialog) return;
  if (!dialog.open) dialog.showModal();
  input.value = q;
  input.dispatchEvent(new Event('input'));
  input.focus();
  input.select();
}

const escHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Marca las coincidencias respetando tildes del texto original. */
function highlight(text: string, terms: string[]): string {
  if (!terms.length) return escHtml(text);
  const folded = fold(text);
  const marks: [number, number][] = [];
  for (const t of terms) {
    let i = folded.indexOf(t);
    while (i !== -1) { marks.push([i, i + t.length]); i = folded.indexOf(t, i + t.length); }
  }
  if (!marks.length) return escHtml(text);
  marks.sort((a, b) => a[0] - b[0]);
  let out = '', pos = 0;
  for (const [s, e] of marks) {
    if (s < pos) continue;
    out += escHtml(text.slice(pos, s)) + '<mark>' + escHtml(text.slice(s, e)) + '</mark>';
    pos = e;
  }
  return out + escHtml(text.slice(pos));
}

/** Recorta el texto alrededor de la primera coincidencia. */
function snippet(text: string, terms: string[]): string {
  if (!text) return '';
  const f = fold(text);
  const i = terms.length ? Math.min(...terms.map((t) => f.indexOf(t)).filter((x) => x >= 0)) : 0;
  if (!Number.isFinite(i) || i < 60) return text;
  const start = text.lastIndexOf(' ', i - 40);
  return '…' + text.slice(start + 1);
}

const fmtRefs = (refs: number[]) => {
  if (!refs.length) return '';
  const u = [...new Set(refs)].sort((a, b) => a - b);
  const parts: string[] = [];
  let a = u[0]!, b = a;
  for (const n of u.slice(1)) {
    if (n === b + 1) { b = n; continue; }
    parts.push(a === b ? `${a}` : `${a}–${b}`); a = b = n;
  }
  parts.push(a === b ? `${a}` : `${a}–${b}`);
  return '§ ' + (parts.length > 2 ? `${parts[0]}…` : parts.join(', '));
};

export function initSearch() {
  dialog = document.querySelector<HTMLDialogElement>('[data-search]')!;
  input = dialog.querySelector('input')!;
  const list = dialog.querySelector<HTMLUListElement>('.results')!;
  const locateBox = dialog.querySelector<HTMLElement>('.locate')!;
  let results: Entry[] = [];
  let sel = 0;

  const select = (i: number) => {
    const items = list.querySelectorAll<HTMLLIElement>('li[role="option"]');
    if (!items.length) return;
    sel = (i + items.length) % items.length;
    items.forEach((li, k) => li.setAttribute('aria-selected', String(k === sel)));
    const cur = items[sel]!;
    input.setAttribute('aria-activedescendant', cur.id);
    cur.scrollIntoView({ block: 'nearest' });
  };

  const go = (i: number) => {
    const r = results[i];
    if (!r) return;
    dialog.close();
    goTo(r.href);
  };

  const render = () => {
    const { index } = load();
    const raw = input.value.trim();
    const num = raw.match(/^§?\s*(\d{1,3})$/);
    const terms = fold(raw).split(/\s+/).filter((t) => t.length > 1 && !/^§?\d+$/.test(t));

    locateBox.hidden = true;
    if (num) {
      const n = Number(num[1]);
      const loc = locateRef(n);
      if (loc) {
        locateBox.hidden = false;
        const span = loc.f === loc.to ? `§ ${loc.f}` : `§ ${loc.f}–${loc.to}`;
        locateBox.textContent = `El § ${n} está en ${describe(loc)} (${span}).`;
      } else {
        locateBox.hidden = false;
        locateBox.textContent = `La encíclica tiene 245 párrafos. Probá con un número entre 1 y 245.`;
      }
      // Lo más específico primero: entradas que citan pocos párrafos; los capítulos enteros al final
      results = index
        .filter((e) => e.refs.includes(n) && e.kind !== 'Capítulo')
        // El resumen de su sección primero; después, lo más específico
        .sort((a, b) => (b.kind === 'Resumen' ? 1 : 0) - (a.kind === 'Resumen' ? 1 : 0) || a.refs.length - b.refs.length);
    } else if (!raw) {
      results = index.filter((e) => e.kind === 'Capítulo');
    } else {
      results = index
        .map((e) => {
          const hayTitle = fold(e.title), hay = hayTitle + ' ' + fold(e.text) + ' ' + fold(e.kind);
          if (!terms.every((t) => hay.includes(t))) return null;
          const score = terms.reduce((s, t) => s + (hayTitle.includes(t) ? 3 : 1), 0);
          return { e, score };
        })
        .filter((x): x is { e: Entry; score: number } => !!x)
        .sort((a, b) => b.score - a.score)
        .map((x) => x.e);
    }

    if (!results.length) {
      list.innerHTML = `<li class="empty">Nada en esta guía coincide con “${escHtml(raw)}”. Probá con otra palabra, o con un número de párrafo.</li>`;
      input.removeAttribute('aria-activedescendant');
      return;
    }
    list.innerHTML = results
      .slice(0, 40)
      .map((r, i) => `<li role="option" id="sr-${i}" data-i="${i}">
          <span class="k">${r.kind}${r.where ? ` · ${escHtml(r.where)}` : ''}</span>
          <span class="t">${highlight(r.title, terms)}</span>
          ${r.text ? `<span class="x">${highlight(snippet(r.text, terms), terms)}</span>` : ''}
          <span class="r">${fmtRefs(r.refs)}</span>
        </li>`)
      .join('');
    select(0);
  };

  input.addEventListener('input', render);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); select(sel + 1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); select(sel - 1); }
    else if (e.key === 'Enter') { e.preventDefault(); go(sel); }
    // En un input de búsqueda, Esc solo borraría el texto: acá cierra directo
    else if (e.key === 'Escape') { e.preventDefault(); dialog.close(); }
  });
  list.addEventListener('click', (e) => {
    const li = (e.target as Element).closest<HTMLLIElement>('li[data-i]');
    if (li) go(Number(li.dataset.i));
  });
  list.addEventListener('mousemove', (e) => {
    const li = (e.target as Element).closest<HTMLLIElement>('li[data-i]');
    if (li && Number(li.dataset.i) !== sel) select(Number(li.dataset.i));
  });
  // Clic en el fondo cierra
  dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });

  document.querySelectorAll('[data-open-search]').forEach((b) => b.addEventListener('click', () => openSearch()));
  document.addEventListener('keydown', (e) => {
    const typing = (e.target as Element).closest('input, textarea, [contenteditable]');
    if ((e.key === 'k' && (e.ctrlKey || e.metaKey)) || (e.key === '/' && !typing)) {
      e.preventDefault();
      dialog.open ? dialog.close() : openSearch();
    }
  });
}
