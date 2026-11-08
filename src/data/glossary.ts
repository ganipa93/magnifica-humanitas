/**
 * Glosario. Definiciones con palabras propias, apoyadas en los párrafos
 * donde la encíclica explica cada término (verificados contra el texto oficial).
 *
 * `match`: formas en las que el término aparece en los textos del sitio.
 * El primer uso de cada término en un bloque de texto se vuelve un botón
 * con su definición (src/lib/terms.ts).
 */

export interface Term {
  id: string;
  term: string;
  match: string[];
  def: string;
}

export const glossary: Term[] = [
  {
    id: 'doctrina-social', term: 'Doctrina social de la Iglesia',
    match: ['Doctrina social de la Iglesia', 'Doctrina social'],
    def: 'El conjunto de enseñanzas de la Iglesia sobre la vida social, la economía y la política. La expresión la usó por primera vez Pío XII en 1950 [§ 29]. La encíclica insiste en que no es un manual de normas sino un camino de discernimiento comunitario [§ 27].',
  },
  {
    id: 'res-novae', term: 'Res novae',
    match: ['res novae'],
    def: '“Cosas nuevas” en latín: alude a *Rerum novarum*, la encíclica de León XIII de 1891. León XIV usa la expresión para las novedades de hoy: digitalización, IA y robótica [§ 4].',
  },
  {
    id: 'bien-comun', term: 'Bien común',
    match: ['bien común'],
    def: 'El conjunto de condiciones que permiten a todos desarrollarse. No es la suma de intereses individuales: la encíclica lo llama la forma social de la dignidad de cada persona [§ 59–61].',
  },
  {
    id: 'destino-universal', term: 'Destino universal de los bienes',
    match: ['destino universal de los bienes', 'destino universal'],
    def: 'Los bienes de la tierra están destinados a toda la familia humana, y la propiedad privada está subordinada a ese destino [§ 65–66]. La encíclica suma a esa lista patentes, algoritmos, plataformas, infraestructuras y datos [§ 67].',
  },
  {
    id: 'subsidiariedad', term: 'Subsidiariedad',
    match: ['subsidiariedad'],
    def: 'Lo que pueden hacer personas, familias y comunidades no debe absorberlo un nivel superior, que debe ayudar sin reemplazar [§ 68–69]. La encíclica lo aplica también a las grandes plataformas tecnológicas [§ 71].',
  },
  {
    id: 'solidaridad', term: 'Solidaridad',
    match: ['solidaridad'],
    def: 'Principio y virtud a la vez: reconocer que dependemos unos de otros y decidir hacerse cargo del bien de todos [§ 74–75]. Sin subsidiariedad, advierte, cae en asistencialismo [§ 73].',
  },
  {
    id: 'justicia-social', term: 'Justicia social',
    match: ['justicia social'],
    def: 'La justicia aplicada a las estructuras de la convivencia, empezando por los más vulnerables [§ 77–78]. En lo digital, exige evitar nuevas exclusiones [§ 80].',
  },
  {
    id: 'desarrollo-integral', term: 'Desarrollo humano integral',
    match: ['desarrollo humano integral', 'desarrollo integral'],
    def: 'Un desarrollo que abarca todas las dimensiones de la persona, no solo la económica, y que tiene en cuenta a las generaciones futuras [§ 82–83].',
  },
  {
    id: 'paradigma-tecnocratico', term: 'Paradigma tecnocrático',
    match: ['paradigma tecnocrático'],
    def: 'Idea tomada de *Laudato si’*: una forma de pensar en la que eficiencia, control y lucro deciden por sí solos qué vale, y la técnica deja de ser un medio [§ 92].',
  },
  {
    id: 'alineacion', term: 'Alineación (de la IA)',
    match: ['alineación', 'alinear'],
    def: 'En la industria, ajustar un sistema de IA para que actúe según ciertos valores. La encíclica advierte que no alcanza si esos valores los decide un grupo reducido y nadie puede discutirlos [§ 107].',
  },
  {
    id: 'desarmar-ia', term: 'Desarmar la IA',
    match: ['“desarmar” la IA', 'desarmar la IA'],
    def: 'Sacar la IA de la carrera por el algoritmo más eficaz y la base de datos más grande, y romper la idea de que el poder tecnológico da derecho a gobernar. No significa renunciar a la tecnología [§ 110].',
  },
  {
    id: 'transhumanismo', term: 'Transhumanismo',
    match: ['transhumanismo', 'transhumanista'],
    def: 'Corriente que busca superar los límites humanos potenciando capacidades con tecnología. La encíclica la distingue del posthumanismo y la discute como trasfondo de varios centros de poder tecnológico [§ 115–117].',
  },
  {
    id: 'posthumanismo', term: 'Posthumanismo',
    match: ['posthumanismo'],
    def: 'Corriente que critica la centralidad del ser humano y propone hibridarlo con máquinas y entorno. La encíclica la analiza junto al transhumanismo [§ 116].',
  },
  {
    id: 'economia-atencion', term: 'Economía de la atención',
    match: ['economía de la atención'],
    def: 'Modelos de negocio que ganan dinero captando y reteniendo la atención, explotando vulnerabilidades humanas [§ 170]. La encíclica pide que la responsabilidad no recaiga solo en las familias [§ 142].',
  },
  {
    id: 'guerra-justa', term: 'Guerra justa',
    match: ['guerra justa'],
    def: 'Teoría tradicional sobre cuándo una guerra puede ser moralmente legítima. La encíclica reitera su superación y deja solo la legítima defensa en sentido estricto [§ 192].',
  },
  {
    id: 'sindrome-babel', term: 'Síndrome de Babel',
    match: ['síndrome de Babel'],
    def: 'La tentación de construir sin Dios, buscando uniformidad y autosuficiencia. La encíclica le opone el camino de Nehemías [§ 10].',
  },
  {
    id: 'civilizacion-amor', term: 'Civilización del amor',
    match: ['civilización del amor'],
    def: 'Expresión de Pablo VI que la encíclica retoma como alternativa a la cultura del poder, unida a *Fratelli tutti* [§ 186–187].',
  },
  {
    id: 'ecologia-comunicacion', term: 'Ecología de la comunicación',
    match: ['ecología de la comunicación'],
    def: 'Propuesta de cuidar el ambiente informativo como un bien común: transparencia, protección de datos, periodismo serio y educación crítica [§ 137].',
  },
  {
    id: 'higiene-atencion', term: 'Higiene de la atención',
    match: ['higiene de la atención'],
    def: 'Hábitos de silencio, estudio reflexivo y lectura frente a un flujo de información que reemplaza la reflexión [§ 146].',
  },
  {
    id: 'accountability', term: 'Rendición de cuentas',
    match: ['rendición de cuentas', 'rendir cuentas'],
    def: 'Poder identificar quién responde por una decisión y reparar los daños. La encíclica la exige para los sistemas de IA [§ 105] y también dentro de la Iglesia [§ 86].',
  },
];
