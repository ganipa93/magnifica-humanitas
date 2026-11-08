import {
  sections, summary, twoCities, novelties, economy, tensions, quotes, claims, timeline,
} from '../data/encyclical';
import { chapters, chapterRange, chapterHref, walk } from '../data/structure';
import { parseRef, plain, refsIn } from './rich';
import { topics } from '../data/topics';
import { glossary } from '../data/glossary';
import { topicHref } from './topics';
import { cited } from '../data/people';
import { reception } from '../data/reception';

export interface Entry {
  kind: 'Sección' | 'Idea nueva' | 'Economía' | 'Tensión' | 'Capítulo' | 'Resumen' | 'Frase' | '¿Lo dice?' | 'Historia' | 'Tema' | 'Glosario' | 'Cita' | 'Recepción';
  title: string;
  /** Contexto (capítulo, sección madre) */
  where?: string;
  text: string;
  refs: number[];
  /** Siempre absoluto (/ruta#ancla) para funcionar desde cualquier página */
  href: string;
}

const range = (a: number, b: number) => Array.from({ length: b - a + 1 }, (_, k) => a + k);
const sectionLabel = (id: string) => sections.find((s) => s.id === id)?.label ?? '';

/** Índice generado en build e incrustado como JSON en cada página. */
export function buildIndex(): Entry[] {
  const e: Entry[] = [];

  e.push({
    kind: 'Sección', title: sectionLabel('frase'), href: '/#frase',
    text: plain([summary.lede, ...summary.body].join(' ')),
    refs: summary.body.flatMap(refsIn),
  });
  e.push({
    kind: 'Sección', title: 'Babel o Jerusalén', href: '/#babel',
    text: plain([twoCities.intro, ...twoCities.babel.items, ...twoCities.jerusalem.items, twoCities.choice.quote].join(' ')),
    refs: [...refsIn(twoCities.intro), ...parseRef(twoCities.choice.ref)],
  });

  novelties.forEach((p, i) =>
    e.push({
      kind: 'Idea nueva', title: p.title, href: `/#nuevo-${i + 1}`,
      text: plain(`${p.body} ${p.quote ?? ''}`), refs: [...parseRef(p.ref), ...refsIn(p.body)],
    }),
  );

  for (const side of [economy.moreState, economy.lessState])
    for (const it of side.items)
      e.push({ kind: 'Economía', title: plain(it.text), where: side.title, href: '/#economia', text: '', refs: parseRef(it.ref) });
  e.push({
    kind: 'Economía', title: economy.fixed.title, href: '/#economia',
    text: plain(economy.fixed.body), refs: refsIn(economy.fixed.body),
  });

  tensions.forEach((t, i) =>
    e.push({ kind: 'Tensión', title: t.title, href: `/#tension-${i + 1}`, text: plain(t.body), refs: refsIn(t.body) }),
  );

  timeline.forEach((m, i) =>
    e.push({
      kind: 'Historia', title: `${m.year} · ${plain(m.doc)}`, where: m.pope, href: `/#hito-${i + 1}`,
      text: plain(m.note), refs: parseRef(m.ref),
    }),
  );

  claims.forEach((c, i) =>
    e.push({ kind: '¿Lo dice?', title: c.claim, href: `/#afirmacion-${i + 1}`, text: plain(c.why), refs: parseRef(c.ref) }),
  );

  for (const c of chapters) {
    const { from, to } = chapterRange(c);
    e.push({ kind: 'Capítulo', title: `${c.label}: ${c.title}`, href: chapterHref(c), text: plain(c.lede), refs: range(from, to) });
    for (const { part, parent } of walk(c)) {
      // Las secciones con subpartes solo resumen en una línea; su contenido está en las hijas
      if (part.parts) continue;
      const title = part.untitled ? `${parent?.title ?? c.title}: párrafos iniciales` : part.title;
      e.push({
        kind: 'Resumen', title, where: c.label, href: chapterHref(c, part),
        text: plain(part.summary), refs: range(part.from, part.to),
      });
    }
  }

  for (const t of topics)
    e.push({
      kind: 'Tema', title: t.label, href: topicHref(t), text: t.intro,
      // No se indexan sus párrafos: un tema abarca demasiados como para competir por número
      refs: [],
    });

  for (const g of glossary)
    e.push({ kind: 'Glosario', title: g.term, href: `/glosario/#${g.id}`, text: plain(g.def), refs: refsIn(g.def) });

  for (const g of cited)
    for (const c of g.items)
      e.push({ kind: 'Cita', title: plain(c.name), where: g.label, href: '/#citas', text: plain(c.note), refs: parseRef(c.ref) });

  for (const st of reception)
    for (const v of st.voices)
      e.push({ kind: 'Recepción', title: v.who, where: st.label, href: '/#recepcion', text: plain(v.reading), refs: [] });

  quotes.forEach((q, i) =>
    e.push({ kind: 'Frase', title: `“${q.text}”`, href: `/#frase-${i + 1}`, text: '', refs: parseRef(q.ref) }),
  );

  return e;
}

/** Mapa mínimo para ubicar un § en el cliente (la parte más específica que lo contiene). */
export function buildMap() {
  const out: { c: string; s: string; t: string; f: number; to: number; href: string }[] = [];
  for (const c of chapters)
    for (const { part, parent } of walk(c)) {
      if (part.parts) continue;
      out.push({
        c: c.label,
        s: parent && !parent.untitled ? parent.title : '',
        t: part.untitled ? 'párrafos iniciales' : part.title,
        f: part.from, to: part.to, href: chapterHref(c, part),
      });
    }
  return out;
}
