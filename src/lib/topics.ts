import { topics, type Topic } from '../data/topics';
import { chapters, walk, chapterHref, type Chapter, type Part } from '../data/structure';

export interface Hit { chapter: Chapter; part: Part; parent?: Part; href: string }

/** Todas las secciones hoja, indexadas por su párrafo inicial. */
const leaves = new Map<number, Hit>();
for (const c of chapters)
  for (const { part, parent } of walk(c))
    if (!part.parts) leaves.set(part.from, { chapter: c, part, parent, href: chapterHref(c, part) });

export const leafStarts = () => [...leaves.keys()];

export function topicHits(t: Topic): Hit[] {
  return [...t.parts].sort((a, b) => a - b).map((n) => leaves.get(n)!).filter(Boolean);
}

/** Tramos [desde, hasta] para dibujar la franja. */
export const topicSpans = (t: Topic): [number, number][] => topicHits(t).map((h) => [h.part.from, h.part.to]);

export const paragraphsIn = (t: Topic) => topicHits(t).reduce((n, h) => n + h.part.to - h.part.from + 1, 0);

/** Temas de una sección hoja (para mostrar etiquetas en las páginas de capítulo). */
export const topicsOf = (from: number) => topics.filter((t) => t.parts.includes(from));

export const topicHref = (t: Topic) => `/temas/${t.slug}/`;

/** Título legible de una sección hoja, contando las que no tienen subtítulo. */
export const hitTitle = (h: Hit) =>
  h.part.untitled ? `${h.parent?.title ?? h.chapter.title}: párrafos iniciales` : h.part.title;
