import { chapters, chapterHref } from '../data/structure';

/** Navegación de las páginas internas: capítulos, temas y glosario. */
export function siteLinks(current?: string) {
  return [
    ...chapters.map((c) => ({
      href: chapterHref(c),
      label: c.short === 'Intro' ? 'Introducción' : c.short === 'Fin' ? 'Conclusión' : `Capítulo ${c.short}`,
      current: c.slug === current,
    })),
    { href: '/#temas', label: 'Temas', current: current === 'temas' },
    { href: '/glosario/', label: 'Glosario', current: current === 'glosario' },
  ];
}
