/** Render de la mini-sintaxis del contenido. Se usa solo en build. */
import { linkTerms } from './terms';
export { fold } from './fold';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** "71–72, 108" → [71, 72, 108] (expande rangos). */
export function parseRef(ref: string): number[] {
  const out: number[] = [];
  for (const part of ref.split(',')) {
    const [a, b] = part.split(/[–-]/).map((x) => parseInt(x.trim(), 10));
    if (a === undefined || Number.isNaN(a)) continue;
    const end = b !== undefined && !Number.isNaN(b) ? b : a;
    for (let n = a; n <= end; n++) out.push(n);
  }
  return out;
}

/** HTML del botón de referencia. El popover lo maneja src/scripts/refs.ts. */
export function refButton(ref: string): string {
  const nums = parseRef(ref);
  return `<button type="button" class="ref" data-ref="${esc(ref)}" data-first="${nums[0] ?? ''}" aria-haspopup="dialog" aria-label="Párrafo ${esc(ref)}: opciones">§&nbsp;${esc(ref)}</button>`;
}

/**
 * Convierte la mini-sintaxis del contenido en HTML seguro.
 * Por defecto enlaza los términos del glosario; `terms: false` lo desactiva
 * y `skip` evita enlazar ciertos términos.
 */
export function rich(src: string, opts: { terms?: boolean; skip?: string[] } = {}): string {
  const base = esc(src);
  return (opts.terms === false ? base : linkTerms(base, opts.skip))
    .replace(/\[§\s*([^\]]+)\]/g, (_, r: string) => refButton(r))
    .replace(/\*\*([^*]+)\*\*/g, '<em class="strong">$1</em>')
    .replace(/\*([^*]+)\*/g, '<i>$1</i>');
}

/** Texto plano para el índice de búsqueda. */
export function plain(src: string): string {
  return src.replace(/\[§\s*([^\]]+)\]/g, '§ $1').replace(/\*+/g, '');
}

/** Todas las referencias citadas en un texto con mini-sintaxis. */
export function refsIn(src: string): number[] {
  const out: number[] = [];
  for (const m of src.matchAll(/\[§\s*([^\]]+)\]/g)) out.push(...parseRef(m[1]!));
  return out;
}
