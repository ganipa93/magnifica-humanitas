/**
 * Verificación de integridad del contenido. Corre antes de cada build.
 * - Los capítulos cubren los 245 párrafos sin huecos ni superposiciones.
 * - Cada sección con subpartes está cubierta exactamente por ellas.
 * - Toda referencia [§ n] cae dentro de 1–245.
 * - Cada resumen de sección solo cita párrafos de su propio rango.
 * - Las comillas tipográficas están balanceadas.
 */
import { chapters, type Part } from '../src/data/structure';
import * as home from '../src/data/encyclical';
import { topics } from '../src/data/topics';
import { glossary } from '../src/data/glossary';
import { leafStarts } from '../src/lib/topics';
import { fold } from '../src/lib/fold';
import { parseRef, refsIn } from '../src/lib/rich';

const TOTAL = 245;
const errors: string[] = [];
const fail = (m: string) => errors.push(m);

function contiguous(parts: Part[], from: number, to: number, where: string) {
  let next = from;
  for (const p of parts) {
    if (p.from !== next) fail(`${where}: "${p.title}" empieza en § ${p.from}, se esperaba § ${next}`);
    if (p.to < p.from) fail(`${where}: "${p.title}" tiene rango invertido`);
    next = p.to + 1;
  }
  if (next - 1 !== to) fail(`${where}: termina en § ${next - 1}, se esperaba § ${to}`);
}

contiguous(
  chapters.map((c) => ({ title: c.label, from: c.sections[0]!.from, to: c.sections.at(-1)!.to, summary: '' })),
  1, TOTAL, 'Encíclica',
);

for (const c of chapters) {
  const from = c.sections[0]!.from, to = c.sections.at(-1)!.to;
  contiguous(c.sections, from, to, c.label);
  for (const r of refsIn(c.lede)) if (r < from || r > to) fail(`${c.label} (resumen): cita § ${r}, fuera de § ${from}–${to}`);
  for (const s of c.sections) {
    if (s.parts) contiguous(s.parts, s.from, s.to, `${c.label} › ${s.title}`);
    for (const p of [s, ...(s.parts ?? [])])
      for (const r of refsIn(p.summary))
        if (r < p.from || r > p.to) fail(`${c.label} › ${p.title}: cita § ${r}, fuera de su rango § ${p.from}–${p.to}`);
  }
}

// Temas: cada número debe ser el inicio de una sección real, sin repetidos
const starts = new Set(leafStarts());
for (const t of topics) {
  if (new Set(t.parts).size !== t.parts.length) fail(`Tema "${t.label}": secciones repetidas`);
  for (const n of t.parts) if (!starts.has(n)) fail(`Tema "${t.label}": § ${n} no es el inicio de ninguna sección`);
}
if (new Set(topics.map((t) => t.slug)).size !== topics.length) fail('Temas con slug repetido');

// Glosario: ids únicos y cada término usado al menos una vez en el contenido
if (new Set(glossary.map((g) => g.id)).size !== glossary.length) fail('Glosario con ids repetidos');
const corpus = fold(JSON.stringify([home, chapters]));
for (const g of glossary)
  if (!g.match.some((m) => corpus.includes(fold(m)))) fail(`Glosario: "${g.term}" no aparece en ningún texto del sitio`);

// Todas las referencias de la portada
const texts: string[] = [];
const refs: string[] = [];
const collect = (v: unknown): void => {
  if (typeof v === 'string') texts.push(v);
  else if (Array.isArray(v)) v.forEach(collect);
  else if (v && typeof v === 'object')
    for (const [k, x] of Object.entries(v)) (k === 'ref' && typeof x === 'string' ? refs.push(x) : collect(x));
};
collect(home);
collect(glossary);
chapters.forEach((c) => collect(c));
for (const t of texts) for (const r of refsIn(t)) if (r < 1 || r > TOTAL) fail(`Referencia fuera de rango: § ${r} en "${t.slice(0, 50)}…"`);
for (const r of refs) for (const n of parseRef(r)) if (n < 1 || n > TOTAL) fail(`Referencia fuera de rango: § ${n}`);

for (const t of texts) {
  const open = (t.match(/“/g) ?? []).length, close = (t.match(/”/g) ?? []).length;
  if (open !== close) fail(`Comillas desbalanceadas: "${t.slice(0, 60)}…"`);
}

if (errors.length) {
  console.error(`✗ ${errors.length} problema(s) en el contenido:\n  ` + errors.join('\n  '));
  process.exit(1);
}
const parts = chapters.reduce((n, c) => n + c.sections.reduce((m, s) => m + 1 + (s.parts?.length ?? 0), 0), 0);
console.log(`✓ Contenido íntegro: ${TOTAL} párrafos, ${chapters.length} bloques, ${parts} secciones y subsecciones, ${refs.length + texts.reduce((n, t) => n + refsIn(t).length, 0)} referencias.`);
