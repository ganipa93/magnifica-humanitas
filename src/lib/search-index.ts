import {
  structure, sections, summary, twoCities, novelties, economy, tensions,
  chapterSummaries, quotes, courseRange,
} from '../data/encyclical';
import { parseRef, plain, refsIn } from './rich';

export interface Entry {
  /** Tipo visible en el resultado */
  kind: 'Sección' | 'Idea nueva' | 'Economía' | 'Tensión' | 'Capítulo' | 'Frase' | 'Estructura';
  title: string;
  text: string;
  refs: number[];
  href: string;
}

const sectionLabel = (id: string) => sections.find((s) => s.id === id)?.label ?? '';

/** Índice generado en build e incrustado como JSON en la página. */
export function buildIndex(): Entry[] {
  const e: Entry[] = [];

  e.push({
    kind: 'Sección', title: sectionLabel('frase'), href: '#frase',
    text: plain([summary.lede, ...summary.body].join(' ')),
    refs: summary.body.flatMap(refsIn),
  });
  e.push({
    kind: 'Sección', title: 'Babel o Jerusalén', href: '#babel',
    text: plain([twoCities.intro, ...twoCities.babel.items, ...twoCities.jerusalem.items, twoCities.choice.quote].join(' ')),
    refs: [...refsIn(twoCities.intro), ...parseRef(twoCities.choice.ref)],
  });

  novelties.forEach((p, i) =>
    e.push({
      kind: 'Idea nueva', title: p.title, href: `#nuevo-${i + 1}`,
      text: plain(`${p.body} ${p.quote ?? ''}`), refs: parseRef(p.ref),
    }),
  );

  for (const side of [economy.moreState, economy.lessState])
    for (const it of side.items)
      e.push({ kind: 'Economía', title: plain(it.text), href: '#economia', text: side.title, refs: parseRef(it.ref) });
  e.push({
    kind: 'Economía', title: economy.fixed.title, href: '#economia',
    text: plain(economy.fixed.body), refs: refsIn(economy.fixed.body),
  });

  tensions.forEach((t, i) =>
    e.push({ kind: 'Tensión', title: t.title, href: `#tension-${i + 1}`, text: plain(t.body), refs: refsIn(t.body) }),
  );

  for (const c of structure) {
    const s = chapterSummaries[c.id]!;
    const { from, to } = courseRange(c);
    e.push({
      kind: 'Capítulo', title: `${c.label}: ${s.title}`, href: `#${c.id}`,
      text: plain(s.body), refs: Array.from({ length: to - from + 1 }, (_, k) => from + k),
    });
  }

  quotes.forEach((q, i) =>
    e.push({ kind: 'Frase', title: `“${q.text}”`, href: `#frase-${i + 1}`, text: '', refs: parseRef(q.ref) }),
  );

  return e;
}
