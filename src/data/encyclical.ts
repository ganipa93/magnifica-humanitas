/**
 * Contenido del sitio, tipado.
 *
 * Mini-sintaxis para textos enriquecidos (ver src/lib/rich.ts):
 *   [§ 71–72]  → referencia a párrafo, se vuelve un botón con popover
 *   *texto*    → itálica (títulos de documentos)
 *   **texto**  → énfasis
 */

export const OFFICIAL_URL =
  'https://www.vatican.va/content/leo-xiv/es/encyclicals/documents/20260515-magnifica-humanitas.html';

export const meta = {
  title: 'Magnifica Humanitas, explicada',
  subtitle: 'explicada, párrafo por párrafo',
  description:
    'Guía y análisis independiente de la encíclica Magnifica Humanitas de León XIV sobre la persona humana en el tiempo de la inteligencia artificial: estructura, ideas nuevas, economía, guerra y tensiones del texto.',
  author: 'León XIV',
  date: 'Roma, 15 de mayo de 2026',
  paragraphs: 245,
  chapters: 5,
};

/* ---------- Estructura (la muralla) ---------- */

export interface Block {
  title: string;
  from: number;
  to: number;
  href: string;
}
export interface Course {
  id: string;
  label: string;
  short: string;
  base?: boolean;
  blocks: Block[];
}

export const structure: Course[] = [
  {
    id: 'cap-0', label: 'Introducción', short: 'Intro', base: true,
    blocks: [
      { title: 'Las “res novae” de nuestro tiempo', from: 1, to: 6, href: '#cap-0' },
      { title: 'Babel y Nehemías', from: 7, to: 10, href: '#babel' },
      { title: 'Edificar en el bien', from: 11, to: 14, href: '#cap-0' },
      { title: 'Seguir siendo humanos', from: 15, to: 16, href: '#cap-0' },
    ],
  },
  {
    id: 'cap-1', label: 'Capítulo 1', short: '1',
    blocks: [
      { title: 'Una Iglesia en camino', from: 17, to: 27, href: '#cap-1' },
      { title: 'De León XIII a Francisco', from: 28, to: 44, href: '#cap-1' },
      { title: 'Leer la historia', from: 45, to: 45, href: '#cap-1' },
    ],
  },
  {
    id: 'cap-2', label: 'Capítulo 2', short: '2',
    blocks: [
      { title: 'Dignidad y derechos', from: 46, to: 58, href: '#cap-2' },
      { title: 'Los principios', from: 59, to: 81, href: '#cap-2' },
      { title: 'Desarrollo integral', from: 82, to: 85, href: '#cap-2' },
      { title: 'Examen para la Iglesia', from: 86, to: 89, href: '#cap-2' },
    ],
  },
  {
    id: 'cap-3', label: 'Capítulo 3', short: '3',
    blocks: [
      { title: 'Poder digital', from: 90, to: 96, href: '#cap-3' },
      { title: 'La inteligencia artificial', from: 97, to: 111, href: '#cap-3' },
      { title: 'Lo que no podemos perder', from: 112, to: 126, href: '#cap-3' },
      { title: 'Gracia y dos ciudades', from: 127, to: 130, href: '#cap-3' },
    ],
  },
  {
    id: 'cap-4', label: 'Capítulo 4', short: '4',
    blocks: [
      { title: 'Verdad y educación', from: 131, to: 147, href: '#cap-4' },
      { title: 'Trabajo, economía, familia', from: 148, to: 169, href: '#cap-4' },
      { title: 'Libertad y nuevas esclavitudes', from: 170, to: 179, href: '#cap-4' },
      { title: 'Tarea común', from: 180, to: 181, href: '#cap-4' },
    ],
  },
  {
    id: 'cap-5', label: 'Capítulo 5', short: '5',
    blocks: [
      { title: 'Civilización del amor', from: 182, to: 187, href: '#cap-5' },
      { title: 'La cultura del poder', from: 188, to: 209, href: '#cap-5' },
      { title: 'Cinco caminos de paz', from: 210, to: 228, href: '#cap-5' },
    ],
  },
  {
    id: 'cap-6', label: 'Conclusión', short: 'Fin',
    blocks: [
      { title: 'El Verbo se hizo carne', from: 229, to: 233, href: '#cap-6' },
      { title: 'Un solo cuerpo', from: 234, to: 235, href: '#cap-6' },
      { title: 'La obra de nuestro tiempo', from: 236, to: 242, href: '#cap-6' },
      { title: 'Magníficat', from: 243, to: 245, href: '#cap-6' },
    ],
  },
];

export const courseRange = (c: Course) => ({
  from: c.blocks[0]!.from,
  to: c.blocks[c.blocks.length - 1]!.to,
});

/** Dónde cae un párrafo dentro de la estructura. */
export function locate(n: number): { course: Course; block: Block } | undefined {
  for (const course of structure)
    for (const block of course.blocks)
      if (n >= block.from && n <= block.to) return { course, block };
  return undefined;
}

/* ---------- Secciones ---------- */

export const sections = [
  { id: 'frase', label: 'En una frase' },
  { id: 'babel', label: 'Babel o Jerusalén' },
  { id: 'nuevo', label: 'Lo nuevo' },
  { id: 'economia', label: 'Economía' },
  { id: 'tensiones', label: 'Tensiones' },
  { id: 'capitulos', label: 'Capítulo por capítulo' },
  { id: 'frases', label: 'Frases' },
] as const;

export const summary = {
  lede:
    'Es una actualización de la Doctrina social de la Iglesia para una época en la que el poder ya no está principalmente en los Estados, sino en quien controla datos, cómputo y plataformas.',
  body: [
    'León XIV se pone explícitamente en la línea de León XIII: si *Rerum novarum* (1891) leyó la “cuestión obrera” de la revolución industrial, *Magnifica Humanitas* sale 135 años después a leer la inteligencia artificial como la gran novedad de este tiempo [§ 3–4]. No la trata como un tema más para sumar a la lista, sino como algo que obliga a repensar desde adentro las categorías de siempre: bien común, propiedad, subsidiariedad, trabajo [§ 17].',
    'Su tesis de fondo no es “IA sí o no”. Es **quién la controla y al servicio de qué**.',
  ],
};

export const twoCities = {
  intro: 'Toda la encíclica está armada sobre dos imágenes bíblicas que vuelven una y otra vez, hasta la conclusión [§ 7–10].',
  babel: {
    name: 'Babel',
    source: 'Génesis 11',
    items: [
      'Una sola lengua, una sola técnica, una sola dirección.',
      'Busca “hacerse un nombre” y bastarse a sí misma.',
      'Uniforma en vez de unir; sacrifica personas a la eficiencia.',
      'Termina en dispersión: nadie se entiende.',
    ],
  },
  jerusalem: {
    name: 'Jerusalén',
    source: 'Nehemías 2–6',
    items: [
      'Antes de actuar, Nehemías reza, escucha y mira las ruinas en silencio.',
      'No impone desde arriba: le da a cada familia un tramo de muralla.',
      'Reconstruye los vínculos antes que las piedras.',
      'El resultado es comunión, no uniformidad.',
    ],
  },
  choice: {
    quote: 'La primera elección no es entre un ‘sí’ o un ‘no’ a la tecnología, sino entre construir Babel o reconstruir Jerusalén.',
    ref: '9',
  },
};

export interface Point {
  ref: string;
  title: string;
  body: string;
  quote?: string;
}

export const novelties: Point[] = [
  {
    ref: '71–72',
    title: 'La subsidiariedad ahora apunta a las plataformas',
    body: 'El principio nació para que el Estado no absorbiera a las familias y asociaciones. Acá se da vuelta: en el mundo digital, el “nivel superior” que absorbe datos, competencias y decisiones son las grandes empresas tecnológicas. Pide cosas concretas: auditorías independientes, transparencia de algoritmos, acceso equitativo a los datos y vías para apelar.',
  },
  {
    ref: '67, 108',
    title: 'Los datos también tienen destino universal',
    body: 'Patentes, algoritmos, plataformas, infraestructura y datos entran en la doctrina del destino universal de los bienes. La propiedad de los datos “no puede confiarse sólo al sector privado”: son fruto del aporte de muchos y habría que gestionarlos como un bien común.',
  },
  {
    ref: '98–99',
    title: 'Una descripción técnica poco habitual en un Papa',
    body: 'Reconoce que nadie, ni sus diseñadores, entiende del todo cómo funcionan estos sistemas por dentro.',
    quote: 'Las inteligencias artificiales modernas están más ‘cultivadas’ que ‘construidas’.',
  },
  {
    ref: '107',
    title: 'Una crítica a la “alineación” de la IA',
    body: 'No alcanza con hacer que la IA respete “valores humanos” si nadie puede discutir qué valores son esos. Si no, la moral de quien controla el sistema se vuelve su infraestructura invisible.',
    quote: 'No serviría de nada una IA más moral, si esta moral es decidida por unos pocos.',
  },
  {
    ref: '106, 110',
    title: '“Desarmar” la IA, y a veces frenarla',
    body: 'Desarmarla es sacarla de la carrera por el algoritmo más potente y la base de datos más grande, y romper la idea de que el poder tecnológico da derecho a gobernar. También pide, cuando haga falta, ralentizar su adopción, y aclara que eso no es estar contra el progreso.',
  },
  {
    ref: '192, 198',
    title: 'Fin de la “guerra justa” y no a las armas autónomas',
    body: 'Habla de “superación de la teoría de la ‘guerra justa’”, dejando solo la legítima defensa en su sentido más estricto. Y es tajante con la IA militar: ninguna máquina puede tomar decisiones letales o irreversibles.',
    quote: 'No existe algoritmo que pueda hacer que la guerra sea moralmente aceptable.',
  },
  {
    ref: '176',
    title: 'Un pedido de perdón por la esclavitud, con nombre y apellido',
    body: 'Reconoce que la Sede Apostólica legitimó formas de esclavitud, cita en nota las bulas *Dum diversas* y *Romanus Pontifex* del siglo XV, y admite que en 1866 el Santo Oficio todavía no la condenaba del todo. Pide perdón “en nombre de la Iglesia”, y lo usa como advertencia: no quiere tener que volver a pedirlo por callar ante la trata y la explotación de hoy.',
  },
  {
    ref: '101, 173, 178',
    title: 'La cadena física detrás de la IA',
    body: '“En el mundo de la IA nada es inmaterial o mágico.” Nombra a quienes etiquetan datos y moderan contenido por sueldos mínimos (mayormente mujeres jóvenes), a los chicos que trabajan en la extracción de tierras raras, el consumo de agua y energía de los centros de datos, y un “colonialismo de datos”: los datos sanitarios y genéticos de poblaciones enteras como “las nuevas tierras raras del poder”.',
  },
];

export interface LedgerItem { text: string; ref: string }

export const economy = {
  intro:
    'Es la parte que más se va a citar en clave política. Pero cada lado va a encontrar párrafos propios: como toda la Doctrina social, el texto no encaja ni en el liberalismo ni en el estatismo.',
  moreState: {
    title: 'Lo que va a citar quien pide más Estado',
    items: [
      { text: 'Rechaza esperar que el crecimiento “al final” derrame sobre los pobres.', ref: '158' },
      { text: 'Pide “un Estado presente” orientado a los más vulnerables.', ref: '158' },
      { text: '“Ya no es posible confiar únicamente en la ‘mano invisible’ del mercado.”', ref: '163' },
      { text: 'Impuestos que exijan más a quien más tiene.', ref: '162' },
      { text: 'Proteger el empleo es “la norma general” frente a la automatización.', ref: '152' },
      { text: 'Medir el desarrollo con indicadores más allá del PIB.', ref: '159' },
    ] as LedgerItem[],
  },
  lessState: {
    title: 'Lo que va a citar quien desconfía del Estado',
    items: [
      { text: 'La subsidiariedad: lo que pueden hacer personas, familias y comunidades no debe absorberlo un nivel superior.', ref: '68' },
      { text: 'Rechazo a la “gestión paternalista o asistencialista” de la vida social.', ref: '70' },
      { text: 'Los subsidios no pueden ser “la única respuesta”: el objetivo es vivir del propio trabajo.', ref: '149' },
      { text: 'La iniciativa empresarial como “verdadera vocación”.', ref: '157' },
      { text: 'Defensa del ahorro y de la función social del crédito.', ref: '160' },
      { text: 'Derecho de los padres a elegir la educación, con apoyo también a escuelas privadas.', ref: '143–144' },
    ] as LedgerItem[],
  },
  fixed: {
    title: 'Lo que no cambia',
    body: 'En moral se mantiene en la línea de siempre: aborto y eutanasia como “gravemente ilícitos” [§ 55]; la familia “fundada en la unión estable entre un hombre y una mujer” [§ 165]. Con un movimiento hábil: retoma los “valores no negociables” de Benedicto XVI y subraya que el bien común está entre ellos, al mismo nivel que la defensa de la vida [§ 59].',
  },
};

export const tensions = [
  {
    title: 'Diagnóstico fuerte, mecanismos difusos',
    body: 'Describe muy bien que el poder tecnológico es privado, transnacional y más grande que muchos gobiernos [§ 5]. Pero cuando llega a quién lo regula, la respuesta es genérica: Estados, instituciones supranacionales, “una política más presente”. Y en el capítulo 5 reconoce que el multilateralismo está en crisis y que la ONU necesita “reformas profundas” [§ 201, 226]. La pregunta de quién le pone límites a un actor más poderoso que los Estados queda sin respuesta.',
  },
  {
    title: 'Humildad sobre la IA, seguridad sobre lo que no es',
    body: 'En el párrafo 98 admite que sabemos muy poco sobre cómo funcionan estos sistemas por dentro. En el 99 afirma con total seguridad que no tienen experiencia, ni cuerpo, ni conciencia moral. Son afirmaciones más antropológicas y teológicas que técnicas, pero conviven mal con la cautela del párrafo anterior [§ 98–99].',
  },
  {
    title: 'Datos como bien común, pero también privados',
    body: 'Pide tratar los datos como un bien colectivo y compartido [§ 108] y, a la vez, proteger los datos personales frente a la vigilancia y el perfilado [§ 137, 171]. Las dos cosas se pueden compatibilizar, pero el texto no dice cómo.',
  },
  {
    title: 'Pide equilibrio, pero carga las tintas en los riesgos',
    body: 'Al principio advierte contra “entusiasmos ingenuos” y “miedos estériles” por igual [§ 14]. En el desarrollo, los beneficios de la IA aparecen más afirmados que explicados, y el peso del documento cae claramente del lado de los peligros.',
  },
];

export const chapterSummaries: Record<string, { title: string; body: string }> = {
  'cap-0': {
    title: 'Las “res novae” de nuestro tiempo',
    body: 'Plantea la pregunta: la humanidad puede “levantar una nueva torre de Babel o edificar la ciudad donde Dios y la humanidad habiten juntos”. Advierte que hoy los motores de la innovación ya no son los Estados sino actores privados transnacionales, y que eso hace al poder tecnológico “más difícil de discernir, gobernar y orientar”. Propone cuatro bases para construir: la relación con Dios, aceptar el límite humano, la corresponsabilidad y un lenguaje que no humille.',
  },
  'cap-1': {
    title: 'Un pensamiento dinámico fiel al Evangelio',
    body: 'Repasa cómo se formó la Doctrina social: *Rerum novarum*, *Quadragesimo anno*, Pío XII, Juan XXIII, el Concilio, Pablo VI, Juan Pablo II, Benedicto XVI y Francisco. Insiste en que no es “un manual de principios y normas que hay que aplicar, sino un camino de discernimiento comunitario”, y en que la Iglesia “no quiere levantar la bandera de la posesión de la verdad”.',
  },
  'cap-2': {
    title: 'Fundamentos y principios',
    body: 'Dignidad, derechos humanos, bien común, destino universal de los bienes, subsidiariedad, solidaridad y justicia social, cada uno llevado al terreno digital. Denuncia como “particularmente insidiosa” la idea de que cada persona debe ganarse su valor siendo productiva. Cierra con un “examen para la Iglesia”: transparencia, rendición de cuentas, escucha de las víctimas de abusos y evaluación de quienes ejercen cargos.',
  },
  'cap-3': {
    title: 'Técnica y dominio',
    body: 'El núcleo sobre IA. Qué es y qué no es, los riesgos del uso personal (delegar el juicio, la falsa objetividad, la simulación de afecto), la responsabilidad y la gobernanza. Después discute el transhumanismo y el posthumanismo, y defiende el límite humano: “el ser humano no florece a pesar del límite, sino a menudo a través del límite”. Termina con las dos ciudades de san Agustín.',
  },
  'cap-4': {
    title: 'Verdad, trabajo, libertad',
    body: 'La desinformación como amenaza a la democracia (con cita de Hannah Arendt). Educación: “educar en el uso de la IA implica educar para decidir cuándo y para qué no utilizarla”, y leyes con límites de edad que responsabilicen a las plataformas, no a las familias. Trabajo: riesgo de desempleo masivo, descalificación y vigilancia de los trabajadores, y criterios sociales para cada automatización. Libertad: la economía de la atención, el control por datos, la trata, el perdón por la esclavitud y el colonialismo de datos.',
  },
  'cap-5': {
    title: 'La cultura del poder y la civilización del amor',
    body: 'Describe la “normalización de la guerra”, el negocio armamentístico, la vuelta de la disuasión nuclear, las armas con IA y la crisis del multilateralismo. Critica un “falso realismo” que da la guerra por inevitable. Propone cinco caminos: desarmar las palabras, construir la paz con justicia, mirar desde las víctimas, un realismo sano y relanzar el diálogo y la diplomacia.',
  },
  'cap-6': {
    title: 'Conclusión',
    body: 'Un programa de vida cristiana en cuatro pasos: la Encarnación como respuesta a la promesa transhumanista, la Eucaristía como fuente de unidad, la figura del “arquitecto sabio” (ser fieles a la verdad, invertir en educación, cuidar las relaciones, amar la justicia y la paz) y el Magníficat, que enseña a mirar la historia “desde abajo, con los ojos de quien sufre”.',
  },
};

export const quotes = [
  { text: 'Cuando la palabra es simulada, esta no construye una relación, sino una apariencia.', ref: '100' },
  { text: 'Para un algoritmo, el error es algo que hay que corregir; para una persona, puede ser el inicio de un cambio profundo.', ref: '128' },
  { text: 'Debemos aprender a prescindir de la IA y proteger a nuestros jóvenes de la promesa de la máquina perfecta.', ref: '140' },
  { text: 'La calidad de una civilización se mide no por el poder de sus medios, sino por el cuidado que sabe ofrecer.', ref: '114' },
  { text: 'De lo contrario, la era digital no será postcolonial, sino colonial bajo otra forma.', ref: '178' },
  { text: 'Ser constructores de comunión, no arquitectos de Babel.', ref: '16' },
];
