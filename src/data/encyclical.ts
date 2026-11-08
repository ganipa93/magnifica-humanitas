/**
 * Contenido de la portada. Todas las afirmaciones y citas fueron verificadas
 * contra el texto oficial (vatican.va). La estructura completa está en
 * ./structure.ts.
 *
 * Mini-sintaxis (src/lib/rich.ts): [§ 71–72] referencia, *itálica*, **énfasis**.
 * Regla de copy: entre comillas va solo texto literal del original.
 */

export const OFFICIAL_URL =
  'https://www.vatican.va/content/leo-xiv/es/encyclicals/documents/20260515-magnifica-humanitas.html';

export const meta = {
  title: 'Magnifica Humanitas, explicada',
  subtitle: 'explicada, párrafo por párrafo',
  description:
    'Guía independiente de la encíclica Magnifica Humanitas de León XIV sobre la persona humana y la inteligencia artificial: sus 245 párrafos resumidos sección por sección, ideas nuevas, economía, guerra y tensiones del texto.',
  author: 'León XIV',
  signed: 'Firmada en Roma el 15 de mayo de 2026',
  released: 'Presentada el 25 de mayo de 2026',
  paragraphs: 245,
  chapters: 5,
};

export const sections = [
  { id: 'frase', label: 'En una frase' },
  { id: 'temas', label: 'Por tema' },
  { id: 'babel', label: 'Babel o Jerusalén' },
  { id: 'nuevo', label: 'Lo nuevo' },
  { id: 'economia', label: 'Economía' },
  { id: 'tensiones', label: 'Tensiones' },
  { id: 'recepcion', label: 'Cómo se leyó' },
  { id: 'historia', label: '135 años' },
  { id: 'citas', label: 'A quién cita' },
  { id: 'prueba', label: '¿Lo dice o no?' },
  { id: 'capitulos', label: 'Capítulos' },
  { id: 'frases', label: 'Frases' },
] as const;

export const summary = {
  lede:
    'Es una actualización de la Doctrina social de la Iglesia para una época en la que el poder ya no está principalmente en los Estados, sino en quien controla datos, cómputo y plataformas.',
  body: [
    'León XIV se pone en la línea de León XIII: la encíclica sale en el 135° aniversario de *Rerum novarum* (1891) [§ 3], que había respondido a la cuestión obrera [§ 29]. Hoy la novedad es la digitalización, la IA y la robótica [§ 4], y el texto aclara que no las trata como un tema más sino como algo que interpela desde adentro las categorías de la Doctrina social [§ 17]: el bien común, el destino universal de los bienes, la subsidiariedad y la justicia social [§ 46].',
    'Su pregunta de fondo no es “IA sí o no”. Es **quién la controla y al servicio de qué** [§ 5, 9].',
  ],
};

export const twoCities = {
  intro: 'Toda la encíclica está armada sobre dos imágenes bíblicas que vuelven una y otra vez, hasta la conclusión [§ 7–10].',
  babel: {
    name: 'Babel',
    source: 'Génesis 11',
    items: [
      'Una sola lengua, una sola técnica, una sola dirección.',
      'Busca perpetuar un nombre y bastarse a sí misma.',
      'Uniforma en vez de unir.',
      'Termina en dispersión: nadie se entiende.',
    ],
  },
  jerusalem: {
    name: 'Jerusalén',
    source: 'Nehemías 2–6',
    items: [
      'Antes de actuar, Nehemías reza y recorre las ruinas en silencio.',
      'No impone desde arriba: le confía a cada familia un tramo de muralla.',
      'La obra es de todos, con responsabilidad compartida.',
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
    body: 'El principio nació para que el Estado no absorbiera a familias y asociaciones. Acá se aplica a otro actor: en el mundo digital, quienes absorben datos, competencias y decisiones son las grandes empresas y plataformas. Pide cosas concretas: auditorías independientes, transparencia algorítmica, acceso equitativo a los datos y vías de apelación [§ 71]. A Estados e instituciones supranacionales les toca garantizar reglas justas [§ 72].',
  },
  {
    ref: '67, 108',
    title: 'Los datos también tienen destino universal',
    body: 'Patentes, algoritmos, plataformas, infraestructuras tecnológicas y datos entran en la doctrina del destino universal de los bienes [§ 67]. La propiedad de los datos “no puede confiarse sólo al sector privado”: son fruto del aporte de muchos y habría que regularlos como un bien común [§ 108].',
  },
  {
    ref: '98–99',
    title: 'Una descripción técnica poco habitual en un Papa',
    body: 'Admite que todo lo que se diga sobre la IA envejece rápido y que sabemos muy poco de cómo funcionan estos sistemas por dentro [§ 98]. Y marca la diferencia con la inteligencia humana: no tienen experiencia, cuerpo ni conciencia moral [§ 99].',
    quote: 'Las inteligencias artificiales modernas están más ‘cultivadas’ que ‘construidas’.',
  },
  {
    ref: '107',
    title: 'Una crítica a la “alineación” de la IA',
    body: 'No alcanza con “alinear” la IA con valores humanos si ese código ético lo decide un grupo reducido y nadie puede discutirlo.',
    quote: 'No serviría de nada una IA más moral, si esta moral es decidida por unos pocos.',
  },
  {
    ref: '106, 110',
    title: '“Desarmar” la IA, y a veces frenarla',
    body: 'Desarmarla es sacarla de la carrera por el algoritmo más eficaz y la base de datos más grande, y romper la ecuación entre poder tecnológico y derecho a gobernar. Aclara que no se trata de renunciar a la tecnología [§ 110]. También pide prudencia y, cuando haga falta, ralentizar su adopción, porque la técnica va más rápido que las normas [§ 106].',
  },
  {
    ref: '192, 198',
    title: 'La “guerra justa”, superada, y no a las armas autónomas',
    body: 'Reitera “la superación de la teoría de la ‘guerra justa’”, dejando solo la legítima defensa en el sentido más estricto [§ 192]. Y es tajante con la IA militar: no es lícito confiar a sistemas artificiales decisiones letales o irreversibles [§ 198].',
    quote: 'No existe algoritmo que pueda hacer que la guerra sea moralmente aceptable.',
  },
  {
    ref: '176',
    title: 'Un pedido de perdón por la esclavitud',
    body: 'Reconoce que la Santa Sede llegó a intervenir para regular y legitimar formas de sometimiento, y en las notas cita las bulas *Dum diversas* (1452) y *Romanus Pontifex* (1455) de Nicolás V. Pide perdón “en nombre de la Iglesia” y en el párrafo siguiente pide denunciar la trata de forma directa y firme [§ 177].',
  },
  {
    ref: '101, 173, 178',
    title: 'La cadena física detrás de la IA',
    body: 'Habla del consumo de energía y agua de estos sistemas [§ 101] y afirma que en el mundo de la IA nada es inmaterial ni mágico: nombra a jóvenes, en su mayoría mujeres, que etiquetan datos por sueldos mínimos, y a chicos que trabajan en la extracción de minerales [§ 173]. Advierte que los datos sanitarios y genéticos de poblaciones enteras se vuelven las nuevas “tierras raras” del poder [§ 178].',
  },
];

export interface LedgerItem { text: string; ref: string }

export const economy = {
  intro:
    'Es la parte que más se va a citar en clave política. Pero cada lado va a encontrar párrafos propios: como toda la Doctrina social, el texto no encaja ni en el liberalismo ni en el estatismo.',
  moreState: {
    title: 'Lo que va a citar quien pide más Estado',
    items: [
      { text: 'Rechaza esperar que el crecimiento llegue “al final” a los pobres.', ref: '158' },
      { text: 'Pide “un Estado presente” que favorezca a los más vulnerables.', ref: '158' },
      { text: 'Ya no es posible confiar únicamente en la “mano invisible” del mercado.', ref: '163' },
      { text: 'Impuestos que exijan más a quienes disponen de mayores recursos.', ref: '162' },
      { text: 'Proteger el empleo es “la norma general” frente a la automatización.', ref: '152' },
      { text: 'Medir el desarrollo con indicadores complementarios al PIB.', ref: '159' },
    ] as LedgerItem[],
  },
  lessState: {
    title: 'Lo que va a citar quien desconfía del Estado',
    items: [
      { text: 'La subsidiariedad: lo que pueden hacer personas, familias y comunidades no debe absorberlo un nivel superior.', ref: '68' },
      { text: 'Rechazo a toda “gestión paternalista o asistencialista”.', ref: '70' },
      { text: 'Los subsidios no pueden ser “la única respuesta”: el objetivo es vivir del propio trabajo.', ref: '149' },
      { text: 'La iniciativa empresarial como “verdadera vocación”.', ref: '157' },
      { text: 'La función social del crédito, “insustituible”.', ref: '160' },
      { text: 'Derecho de los padres a elegir la educación, con reconocimiento a las obras educativas católicas.', ref: '143–144' },
    ] as LedgerItem[],
  },
  fixed: {
    title: 'Lo que no cambia',
    body: 'En moral se mantiene en la línea de siempre: el aborto y la eutanasia, “gravemente ilícitas” [§ 55]; la familia “fundada en la unión estable entre un hombre y una mujer” [§ 165]. Con un movimiento hábil: retoma los “valores no negociables” de Benedicto XVI y subraya que la promoción del bien común está entre ellos, junto a la promoción de la vida [§ 59].',
  },
};

export const tensions = [
  {
    title: 'Diagnóstico fuerte, mecanismos difusos',
    body: 'Describe muy bien que el poder tecnológico es privado y transnacional [§ 5, 95]. Pero cuando llega a quién lo regula, la respuesta es general: Estados e instituciones supranacionales que garanticen reglas justas [§ 72]. Y en el capítulo 5 reconoce que el multilateralismo está en crisis y que la ONU necesita “reformas profundas” [§ 201, 226]. Queda abierta la pregunta de quién le pone límites a un actor más poderoso que muchos Estados.',
  },
  {
    title: 'Humildad sobre la IA, seguridad sobre lo que no es',
    body: 'Admite que sabemos muy poco de cómo funcionan estos sistemas por dentro [§ 98] y, en el párrafo siguiente, afirma sin matices que no tienen experiencia, cuerpo ni conciencia moral [§ 99]. Son afirmaciones más antropológicas y teológicas que técnicas, y conviven con tensión con la cautela del párrafo anterior.',
  },
  {
    title: 'Datos como bien común, pero también privados',
    body: 'Pide regular los datos como un bien común [§ 108] y, a la vez, protegerlos frente al perfilado y la vigilancia [§ 137, 171]. Las dos cosas se pueden compatibilizar, pero el texto no dice cómo.',
  },
  {
    title: 'Pide equilibrio, pero carga las tintas en los riesgos',
    body: 'Al principio pide no bendecir “entusiasmos ingenuos” ni alimentar “miedos estériles” [§ 14], y reconoce a la IA como una ayuda valiosa [§ 100]. En el desarrollo, los beneficios aparecen más afirmados que explicados, y el peso del documento cae del lado de los peligros.',
  },
];

/* ---------- 135 años: documentos que la encíclica repasa (§ 28–44) ---------- */

export interface Milestone {
  year: number;
  pope: string;
  doc: string;
  ref: string;
  note: string;
}

export const timeline: Milestone[] = [
  { year: 1891, pope: 'León XIII', doc: '*Rerum novarum*', ref: '29–30', note: 'Responde a la cuestión obrera: dignidad del trabajo, salario justo, propiedad con función social.' },
  { year: 1931, pope: 'Pío XI', doc: '*Quadragesimo anno*', ref: '31', note: 'Formula el principio de subsidiariedad frente a los totalitarismos.' },
  { year: 1950, pope: 'Pío XII', doc: 'Nace el nombre', ref: '29, 32', note: 'Usa por primera vez la expresión “Doctrina social de la Iglesia”; en sus radiomensajes piensa el orden internacional.' },
  { year: 1961, pope: 'Juan XXIII', doc: '*Mater et magistra*', ref: '33', note: 'Abre la Doctrina social a una escala mundial.' },
  { year: 1963, pope: 'Juan XXIII', doc: '*Pacem in terris*', ref: '33', note: 'Incorpora el lenguaje de los derechos humanos.' },
  { year: 1965, pope: 'Concilio Vaticano II', doc: '*Gaudium et spes*', ref: '34', note: 'Una Iglesia cercana a la humanidad, con un método de discernimiento.' },
  { year: 1967, pope: 'Pablo VI', doc: '*Populorum progressio*', ref: '35', note: 'El desarrollo como nuevo nombre de la paz.' },
  { year: 1971, pope: 'Pablo VI', doc: '*Octogesima adveniens*', ref: '36', note: 'Pide no quedarse en proclamaciones abstractas.' },
  { year: 1981, pope: 'Juan Pablo II', doc: '*Laborem exercens*', ref: '37', note: 'El trabajo como bien fundamental de la persona.' },
  { year: 1987, pope: 'Juan Pablo II', doc: '*Sollicitudo rei socialis*', ref: '38', note: 'Denuncia mecanismos económicos que perjudican a los países más débiles.' },
  { year: 1991, pope: 'Juan Pablo II', doc: '*Centesimus annus*', ref: '39', note: 'Valora la democracia y el mercado, subordinados a la ley moral.' },
  { year: 2009, pope: 'Benedicto XVI', doc: '*Caritas in veritate*', ref: '40–41', note: 'La caridad en la verdad como camino de la Doctrina social.' },
  { year: 2013, pope: 'Francisco', doc: '*Evangelii gaudium*', ref: '42–44', note: 'Abre el repaso del Magisterio social de Francisco.' },
  { year: 2015, pope: 'Francisco', doc: '*Laudato si’*', ref: '42–44, 92', note: 'Del que la encíclica retoma la crítica al paradigma tecnocrático.' },
  { year: 2020, pope: 'Francisco', doc: '*Fratelli tutti*', ref: '42–44, 186', note: 'Fraternidad y amistad social; el capítulo 5 enlaza con ella la “civilización del amor”.' },
  { year: 2024, pope: 'Francisco', doc: '*Dilexit nos*', ref: '42–44', note: 'Cierra el repaso del Magisterio de Francisco.' },
  { year: 2026, pope: 'León XIV', doc: '*Magnifica Humanitas*', ref: '3–4', note: 'En el 135° aniversario de *Rerum novarum*, lee la IA como la gran novedad de este tiempo.' },
];

/* ---------- ¿Lo dice o no lo dice? ---------- */

export interface Claim {
  claim: string;
  says: boolean;
  ref: string;
  why: string;
}

export const claims: Claim[] = [
  { claim: 'Pide dejar de usar la inteligencia artificial.', says: false, ref: '106, 110, 140', why: 'Pide aprender cuándo no usarla [§ 140] y, a veces, ralentizar su adopción [§ 106], pero aclara que no se trata de renunciar a la tecnología [§ 110].' },
  { claim: 'Reconoce que sabemos muy poco de cómo funcionan estos sistemas por dentro.', says: true, ref: '98', why: 'Lo dice tal cual, y agrega que las IA modernas están más “cultivadas” que “construidas” [§ 98].' },
  { claim: 'Sostiene que la propiedad privada es un derecho absoluto.', says: false, ref: '66', why: 'Dice lo contrario: la propiedad privada está subordinada al destino universal de los bienes y la tradición no la reconoce como absoluta [§ 66].' },
  { claim: 'Afirma que la IA es moralmente neutra y que todo depende del uso.', says: false, ref: '104', why: 'Afirma que no es moralmente neutra: todo sistema incorpora decisiones sobre qué mide, optimiza y clasifica [§ 104].' },
  { claim: 'Pide perdón en nombre de la Iglesia por haber legitimado formas de esclavitud.', says: true, ref: '176', why: 'Lo hace explícitamente en el § 176, y las notas citan bulas del siglo XV.' },
  { claim: 'Acepta las armas autónomas si reducen las bajas propias.', says: false, ref: '198', why: 'No es lícito confiar a sistemas artificiales decisiones letales o irreversibles, y ningún algoritmo vuelve la guerra moralmente aceptable [§ 198].' },
  { claim: 'Llama errónea la idea de que la disuasión nuclear es indispensable para la seguridad.', says: true, ref: '194', why: 'Lo afirma en el § 194, dentro de la sección sobre “la fuerza sin límites”.' },
  { claim: 'Propone medir el desarrollo solo por el crecimiento del PIB.', says: false, ref: '159', why: 'Pide indicadores complementarios al PIB [§ 159] y rechaza esperar que el crecimiento derrame “al final” [§ 158].' },
  { claim: 'Dice que los padres no pueden resistir solos a los modelos de negocio que monetizan la atención.', says: true, ref: '142', why: 'Por eso pide una alianza con la política y las escuelas, límites de edad y responsabilidad de las plataformas [§ 142].' },
  { claim: 'Cita a Tolkien.', says: true, ref: '213', why: 'Sí: lo cita en el § 213, al presentar los cinco caminos de paz.' },
];

export const quotes = [
  { text: 'Cuando la palabra es simulada, esta no construye una relación, sino una apariencia.', ref: '100' },
  { text: 'Para un algoritmo, el error es algo que hay que corregir; para una persona, puede ser el inicio de un cambio profundo.', ref: '128' },
  { text: 'Debemos aprender a prescindir de la IA y proteger a nuestros jóvenes de la promesa de la máquina perfecta.', ref: '140' },
  { text: 'La calidad de una civilización se mide no por el poder de sus medios, sino por el cuidado que sabe ofrecer.', ref: '114' },
  { text: 'De lo contrario, la era digital no será postcolonial, sino colonial bajo otra forma.', ref: '178' },
  { text: '[…] ser constructores de comunión, no arquitectos de Babel.', ref: '16' },
];
