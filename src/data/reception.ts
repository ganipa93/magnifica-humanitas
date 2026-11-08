/**
 * Cómo se leyó la encíclica. Cada voz está resumida con palabras propias a
 * partir de la fuente enlazada, sin citas textuales. Se buscan lecturas de
 * distintos lados, sin tomar partido.
 */

export interface Voice {
  who: string;
  where: string;
  date: string;
  /** Resumen propio de su lectura */
  reading: string;
  source: { label: string; url: string };
  /** Si la fuente es un medio que reporta la reacción de otro */
  via?: string;
}

export interface Stance {
  id: string;
  label: string;
  voices: Voice[];
}

export const reception: Stance[] = [
  {
    id: 'tecnologia',
    label: 'Desde el mundo tecnológico',
    voices: [
      {
        who: 'Chris Olah, cofundador de Anthropic',
        where: 'Presentación oficial en el Vaticano',
        date: '25 de mayo de 2026',
        reading: 'Habló en la presentación junto al Papa. Sostuvo que quienes desarrollan IA están condicionados por incentivos de los que no pueden escapar, que por eso la industria no puede regularse sola, y pidió críticos externos que hagan rendir cuentas a los laboratorios.',
        source: { label: 'International Business Times', url: 'https://www.ibtimes.co.uk/pope-leo-xiv-ai-ethical-development-1798853' },
      },
      {
        who: 'Brendan McGuire, sacerdote y ex ejecutivo de Silicon Valley',
        where: 'Catholic World Report',
        date: '2 de junio de 2026',
        reading: 'La ve como una oportunidad de diálogo real sobre cómo la IA va a afectar a la humanidad, porque replantea la pregunta en términos de cómo puede florecer toda la humanidad. Rechaza la idea de que llegue tarde.',
        source: { label: 'Catholic World Report', url: 'https://www.catholicworldreport.com/2026/06/02/magnifica-humanitas-seen-deepening-church-tech-ties-former-silicon-valley-exec-says/' },
      },
    ],
  },
  {
    id: 'economia',
    label: 'Desde la economía',
    voices: [
      {
        who: 'Thomas Schauf, Fundación Konrad Adenauer',
        where: 'Documento de discusión de la KAS (centroderecha alemana)',
        date: '3 de septiembre de 2026',
        reading: 'La lee como un llamado a la acción regulatoria y como base para renovar la economía social de mercado en la era de la IA, en cinco áreas. Aclara que su lectura es de política económica, no teológica.',
        source: { label: 'Konrad-Adenauer-Stiftung', url: 'https://www.kas.de/en/single-title/-/content/the-encyclical-magnifica-humanitas-and-the-renewal-of-the-social-market-economy-in-the-digital-age' },
      },
    ],
  },
  {
    id: 'prensa',
    label: 'En la prensa general',
    voices: [
      {
        who: 'The New York Times',
        where: 'Según el repaso de reacciones de The Catholic Herald',
        date: 'Mayo de 2026',
        reading: 'Le pareció demasiado moderada: un diagnóstico serio sin remedios institucionales o económicos a la altura.',
        source: { label: 'The Catholic Herald', url: 'https://thecatholicherald.com/article/reactions-to-magnifica-humanitas-reveal-anxieties-of-the-ai-age' },
        via: 'The Catholic Herald',
      },
      {
        who: 'Forbes',
        where: 'Según el repaso de reacciones de The Catholic Herald',
        date: 'Mayo de 2026',
        reading: 'La leyó en clave casi apocalíptica, poniendo el foco en las advertencias sobre un colapso moral y social si se pierde el control.',
        source: { label: 'The Catholic Herald', url: 'https://thecatholicherald.com/article/reactions-to-magnifica-humanitas-reveal-anxieties-of-the-ai-age' },
        via: 'The Catholic Herald',
      },
      {
        who: 'Ferran Sáez Mateu, filósofo',
        where: 'Columna en Ara',
        date: '2 de junio de 2026',
        reading: 'Sostiene que el texto va mucho más allá de la IA y que no encaja en las etiquetas de izquierda y derecha: rechaza el uso identitario del cristianismo por la extrema derecha y piensa la migración desde la vulnerabilidad compartida. Espera un efecto más de clima que doctrinal.',
        source: { label: 'Ara', url: 'https://es.ara.cat/opinion/papamovil-avanzando-izquierda_129_5756111.html' },
      },
    ],
  },
  {
    id: 'catolicismo-critico',
    label: 'Críticas desde el catolicismo',
    voices: [
      {
        who: 'Infovaticana',
        where: 'Portal católico conservador',
        date: '26 de mayo de 2026',
        reading: 'Le reprocha dispersión temática: habla de tantas cosas (trabajo, criptomonedas, PIB, migración, disuasión nuclear) que le cuesta profundizar en alguna, y su unidad depende sobre todo de la imagen de Babel y Jerusalén.',
        source: { label: 'Infovaticana', url: 'https://infovaticana.com/en/2026/05/26/the-thematic-dispersion-of-magnifica-humanitas/' },
      },
      {
        who: 'FSSPX Actualidad',
        where: 'Servicio de noticias de la Fraternidad San Pío X (tradicionalista)',
        date: '13 de junio de 2026',
        reading: 'Sostiene que se aparta de *Rerum novarum*: deja de lado principios de León XIII y apoya la Doctrina social en la dignidad y los derechos humanos, algo que considera una deriva secularizante posterior al Concilio.',
        source: { label: 'FSSPX Actualidad', url: 'https://fsspx.news/es/news/magnifica-humanitas-se-aparta-rerum-novarum-59627' },
      },
    ],
  },
];
