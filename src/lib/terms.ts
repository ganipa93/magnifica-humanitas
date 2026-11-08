import { glossary } from '../data/glossary';

const escRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Variantes de todos los términos, de la más larga a la más corta, para que
// "destino universal de los bienes" gane sobre "destino universal".
const variants = glossary
  .flatMap((t) => t.match.map((m) => ({ id: t.id, m })))
  .sort((a, b) => b.m.length - a.m.length);

/**
 * Convierte en botón el primer uso de cada término del glosario dentro de un
 * bloque de texto ya escapado. No toca referencias [§ …] ni itálicas *…*.
 * `skip`: ids que no se enlazan (p. ej. el propio término dentro de su definición).
 */
export function linkTerms(escaped: string, skip: string[] = []): string {
  const used = new Set(skip);
  const held: string[] = [];
  // Partes protegidas: referencias e itálicas/énfasis
  const parts = escaped.split(/(\[§[^\]]+\]|\*\*[^*]+\*\*|\*[^*]+\*)/);
  for (let i = 0; i < parts.length; i += 2) {
    let seg = parts[i]!;
    for (const { id, m } of variants) {
      if (used.has(id)) continue;
      const re = new RegExp(`(?<![\\p{L}])(${escRe(m)})(?![\\p{L}])`, 'iu');
      if (!re.test(seg)) continue;
      seg = seg.replace(re, (_, text: string) => {
        held.push(`<button type="button" class="term" data-term="${id}" aria-haspopup="dialog">${text}</button>`);
        return `\u0000${held.length - 1}\u0000`;
      });
      used.add(id);
    }
    parts[i] = seg;
  }
  return parts.join('').replace(/\u0000(\d+)\u0000/g, (_, n: string) => held[Number(n)]!);
}
