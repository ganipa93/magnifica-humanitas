/**
 * Estructura completa de Magnifica Humanitas, verificada contra el texto
 * oficial de vatican.va (títulos y rangos de párrafos exactos).
 *
 * Los resúmenes están escritos con palabras propias. Las referencias usan
 * la mini-sintaxis de src/lib/rich.ts: [§ 71], [§ 98–99], *itálica*.
 *
 * `untitled`: tramos de párrafos que en el original no llevan subtítulo
 * (aperturas de capítulo o de sección). Se muestran como "Párrafos iniciales".
 */

export interface Part {
  title: string;
  from: number;
  to: number;
  untitled?: boolean;
  summary: string;
  parts?: Part[];
}

export interface Chapter {
  slug: string;
  id: string;
  label: string;
  short: string;
  title: string;
  base?: boolean;
  /** Resumen del capítulo para la portada */
  lede: string;
  sections: Part[];
}

export const chapters: Chapter[] = [
  {
    slug: 'introduccion', id: 'cap-0', label: 'Introducción', short: 'Intro', base: true,
    title: 'Introducción',
    lede: 'Plantea la alternativa que ordena todo el texto: levantar otra torre de Babel o edificar una ciudad donde Dios y la humanidad habiten juntos [§ 1]. Señala que el poder tecnológico está hoy sobre todo en manos privadas y transnacionales [§ 5], y propone cuatro bases para construir: la relación con Dios, la aceptación del límite, la corresponsabilidad y un lenguaje evangélico [§ 11–14].',
    sections: [
      {
        title: 'Párrafos iniciales', from: 1, to: 3, untitled: true,
        summary: 'Abre con la alternativa entre una nueva Babel y la ciudad compartida con Dios [§ 1], ofrece diálogo a todos [§ 2] y recuerda los 135 años de *Rerum novarum*: la Doctrina social como un patrimonio vivo, no un sistema cerrado [§ 3].',
      },
      {
        title: 'Las “res novae” de nuestro tiempo', from: 4, to: 6,
        summary: 'La técnica no es enemiga de la persona, pero la digitalización, la IA y la robótica crean una situación nueva [§ 4]. No alcanza con regular: importa quién tiene el poder tecnológico, y hoy lo concentran actores privados, a menudo transnacionales, lo que lo vuelve más difícil de discernir, gobernar y orientar [§ 5]. Propone preguntarse juntos hacia dónde va la humanidad [§ 6].',
      },
      {
        title: 'Dos imágenes bíblicas', from: 7, to: 10,
        summary: 'Babel es una obra sin Dios, hecha de uniformidad y autosuficiencia, que busca perpetuar un nombre y termina en dispersión [§ 7]. Nehemías, en cambio, mira las ruinas en silencio y reparte la muralla en tramos entre las familias [§ 8]. Como la tecnología no es neutral, la elección real es entre construir Babel o reconstruir Jerusalén [§ 9], y pide evitar el “síndrome de Babel” [§ 10].',
      },
      {
        title: 'Edificar en el bien', from: 11, to: 14,
        summary: 'Cuatro bases para construir: la relación con Dios, con san Agustín de fondo [§ 11]; aceptar los límites y la fragilidad en vez de tratarlos como errores [§ 12]; una corresponsabilidad en la que cada sector aporta su tramo [§ 13], y un lenguaje evangélico, sin entusiasmos ingenuos ni miedos estériles [§ 14].',
      },
      {
        title: 'Permanecer siendo humanos', from: 15, to: 16,
        summary: 'Ante el riesgo de que la IA eclipse la dignidad humana, plantea el deber de seguir siendo profundamente humanos [§ 15] y llama a creyentes y no creyentes a ser constructores de comunión, no arquitectos de Babel [§ 16].',
      },
    ],
  },
  {
    slug: '1', id: 'cap-1', label: 'Capítulo 1', short: '1',
    title: 'Un pensamiento dinámico fiel al Evangelio',
    lede: 'Explica qué es la Doctrina social y cómo se formó, de León XIII a Francisco. Insiste en que no es un manual de normas para aplicar sino un camino de discernimiento comunitario [§ 27], y en que la Iglesia no quiere levantar la bandera de la posesión de la verdad [§ 25].',
    sections: [
      {
        title: 'Párrafos iniciales', from: 17, to: 18, untitled: true,
        summary: 'La IA no se trata como un tema más ni como una emergencia, sino como una transformación que interpela desde adentro las categorías de la Doctrina social [§ 17], que nace de una Iglesia que camina con la humanidad [§ 18].',
      },
      {
        title: 'Una Iglesia en camino en la historia de la humanidad', from: 19, to: 22,
        summary: 'La misión de la Iglesia tiene alcance histórico [§ 19] y reconoce que las realidades terrenas tienen consistencia propia, con *Gaudium et spes* [§ 20]. Distingue comunidad eclesial y comunidad política [§ 21] y presenta la escucha de los lenguajes de cada época como discernimiento, sin alterar la verdad revelada [§ 22].',
      },
      {
        title: 'La sabiduría de la Palabra y el diálogo con las ciencias humanas', from: 23, to: 24,
        summary: 'Quienes buscan sinceramente la verdad, el bien y la belleza son compañeros de camino [§ 23]. La Doctrina social no es un repertorio de soluciones técnicas sino principios para leer los hechos [§ 24].',
      },
      {
        title: 'La Doctrina social como discernimiento comunitario', from: 25, to: 27,
        summary: 'La verdad es un don para compartir, no un territorio que defender [§ 25]. Valora la tensión entre misión universal y arraigo local [§ 26] y concluye que la Doctrina social es un camino de discernimiento comunitario, no un manual de normas [§ 27].',
      },
      {
        title: 'El desarrollo del Magisterio social desde León XIII hasta hoy', from: 28, to: 44,
        summary: 'Un recorrido documento por documento por 135 años de enseñanza social.',
        parts: [
          {
            title: 'Párrafos iniciales', from: 28, to: 28, untitled: true,
            summary: 'Presenta el recorrido y lo apoya en el *Compendio* y en la continuidad con *Laudato si’* y *Fratelli tutti* [§ 28].',
          },
          {
            title: 'Los primeros pasos de la Doctrina social de la Iglesia', from: 29, to: 32,
            summary: 'León XIII afronta la cuestión obrera y el conflicto entre capital y trabajo; la expresión “Doctrina social de la Iglesia” la usa por primera vez Pío XII en 1950 [§ 29]. *Rerum novarum*: trabajo, salario justo, propiedad con función social [§ 30]. *Quadragesimo anno* (1931) formula la subsidiariedad frente a los totalitarismos [§ 31]. Pío XII, en sus radiomensajes, piensa el orden internacional [§ 32].',
          },
          {
            title: 'Los años del Concilio Vaticano II', from: 33, to: 36,
            summary: 'Juan XXIII, con *Mater et magistra* y *Pacem in terris*, abre la mirada mundial y el lenguaje de los derechos [§ 33]. *Gaudium et spes* y *Dignitatis humanae* muestran una Iglesia comprometida con el mundo [§ 34]. Pablo VI: el desarrollo como nuevo nombre de la paz en *Populorum progressio* [§ 35] y *Octogesima adveniens* [§ 36].',
          },
          {
            title: 'El Magisterio reciente', from: 37, to: 44,
            summary: 'Juan Pablo II: el trabajo como bien de la persona (*Laborem exercens*) [§ 37], las estructuras económicas que dañan a los débiles (*Sollicitudo rei socialis*) [§ 38], democracia y mercado sujetos a la ley moral (*Centesimus annus*) [§ 39]. Benedicto XVI: *Caritas in veritate* [§ 40–41]. Francisco: *Evangelii gaudium*, *Laudato si’*, *Fratelli tutti* y *Dilexit nos* [§ 42–44].',
          },
        ],
      },
      {
        title: 'Una lectura de la historia a la luz de la fe', from: 45, to: 45,
        summary: 'La Doctrina social no salió de un escritorio: se formó en un proceso armónico aunque no lineal, con aportes originales de cada papa y del Concilio [§ 45].',
      },
    ],
  },
  {
    slug: '2', id: 'cap-2', label: 'Capítulo 2', short: '2',
    title: 'Fundamentos y principios de la Doctrina social de la Iglesia',
    lede: 'Repasa dignidad, derechos humanos, bien común, destino universal de los bienes, subsidiariedad, solidaridad y justicia social, cada uno aplicado al mundo digital. Llama particularmente insidiosa la idea de que cada persona tiene que ganarse su valor [§ 51] y cierra con un examen de conciencia para la propia Iglesia [§ 86–89].',
    sections: [
      {
        title: 'Párrafos iniciales', from: 46, to: 47, untitled: true,
        summary: 'Anuncia que la IA obliga a releer desde adentro el bien común, el destino universal de los bienes, la subsidiariedad y la justicia social [§ 46], y pide a laicos y universidades encarnar y renovar estos principios [§ 47].',
      },
      {
        title: 'Los fundamentos de la Doctrina social', from: 48, to: 58,
        summary: 'Quién es la persona y por qué tiene derechos.',
        parts: [
          {
            title: 'El ser humano, imagen del Dios trinitario', from: 48, to: 50,
            summary: 'La Doctrina social se apoya en un Dios que es comunión de personas [§ 48], en Cristo como su rostro concreto [§ 49] y en una dignidad que es don, previa a cualquier capacidad [§ 50].',
          },
          {
            title: 'La igual dignidad de todos los seres humanos', from: 51, to: 53,
            summary: 'Rechaza, como particularmente insidiosa, la ideología que ata el valor de una persona a su eficiencia o productividad [§ 51]. Distingue varios sentidos de dignidad [§ 52] y, con *Dignitas infinita*, afirma que es infinita y no hay que ganarla [§ 53].',
          },
          {
            title: 'El altísimo valor de los derechos humanos', from: 54, to: 58,
            summary: 'Valora la Declaración Universal de 1948 [§ 54]. Los derechos son inviolables, universales e inalienables, y el primero es el derecho a la vida; juzga gravemente ilícitos el aborto y la eutanasia [§ 55]. Advierte contra derechos solo declamados [§ 56], señala que la igualdad entre varones y mujeres todavía no es plena [§ 57] y pide pensar en personas concretas [§ 58].',
          },
        ],
      },
      {
        title: 'Los principios de la Doctrina social', from: 59, to: 81,
        summary: 'Los cinco principios, uno por uno, llevados al terreno digital.',
        parts: [
          {
            title: 'El principio del bien común', from: 59, to: 64,
            summary: 'El bien común es la forma social de la dignidad [§ 59]; retoma los “valores no negociables” de Benedicto XVI y recuerda que la promoción del bien común está entre ellos. No es la suma de intereses individuales [§ 60–61]: el Estado debe armonizarlos sin dejar atrás a los débiles [§ 62–63], también entre naciones [§ 64].',
          },
          {
            title: 'El principio del destino universal de los bienes', from: 65, to: 67,
            summary: 'Los bienes de la tierra son de toda la familia humana, incluidos hoy los inmateriales [§ 65]. La propiedad privada está subordinada a ese destino y no es absoluta [§ 66]. Suma como nuevos bienes las patentes, los algoritmos, las plataformas, las infraestructuras y los datos, cuya concentración genera desequilibrios [§ 67].',
          },
          {
            title: 'El principio de subsidiariedad', from: 68, to: 72,
            summary: 'Lo que pueden hacer personas, familias y comunidades no debe absorberlo un nivel superior [§ 68], lo que no excusa al Estado de actuar [§ 69]; rechaza la gestión paternalista o asistencialista [§ 70]. En el mundo digital, el nivel que absorbe son las grandes empresas y plataformas: pide auditorías independientes, transparencia algorítmica, acceso equitativo a los datos y vías de apelación [§ 71]. Estados e instituciones supranacionales deben garantizar reglas justas [§ 72].',
          },
          {
            title: 'El principio de solidaridad', from: 73, to: 76,
            summary: 'Subsidiariedad sin solidaridad protege intereses particulares; solidaridad sin subsidiariedad cae en asistencialismo [§ 73]. La interdependencia, también la digital, solo es solidaridad cuando se elige [§ 74]. Implica sobriedad, incluso en el consumo digital [§ 75], y pensar en las generaciones futuras al decidir sobre datos e IA [§ 76].',
          },
          {
            title: 'El principio de la justicia social', from: 77, to: 81,
            summary: 'La justicia alcanza a las estructuras de convivencia [§ 77] y parte de los más vulnerables [§ 78]; tiene una dimensión reparadora frente a guerras, colonialismo y discriminaciones [§ 79]. En lo digital exige evitar exclusiones: falta de acceso, vigilancia invasiva, algoritmos opacos que reproducen prejuicios [§ 80]. Migrantes y refugiados son una prueba decisiva [§ 81].',
          },
        ],
      },
      {
        title: 'El desarrollo humano integral', from: 82, to: 85,
        summary: 'Con *Populorum progressio*, el desarrollo abarca todas las dimensiones de la vida y a las generaciones futuras [§ 82–83]. La ecología integral funciona como prueba: no es progreso el bienestar de algunos que degrada ecosistemas o traslada costos a los pobres [§ 84]. Las innovaciones, IA incluida, no son neutrales y se juzgan por si nos hacen crecer en humanidad [§ 85].',
      },
      {
        title: 'Un examen para la Iglesia', from: 86, to: 89,
        summary: 'Los mismos principios valen hacia adentro: transparencia, rendición de cuentas y evaluación [§ 86]; participación real de los bautizados, sin paternalismo [§ 87]; unidad eucarística [§ 88]. La justicia en la Iglesia incluye escuchar a las víctimas de abusos, reparar, prevenir y evaluar periódicamente a quienes tienen responsabilidades ministeriales [§ 89].',
      },
    ],
  },
  {
    slug: '3', id: 'cap-3', label: 'Capítulo 3', short: '3',
    title: 'Técnica y dominio. La grandeza de la persona humana ante las promesas de la IA',
    lede: 'El núcleo sobre inteligencia artificial: qué es y qué no es, sus riesgos en el uso personal, la responsabilidad y la gobernanza. Después discute el transhumanismo y el posthumanismo, defiende el límite humano y cierra con las dos ciudades de san Agustín [§ 130].',
    sections: [
      {
        title: 'Párrafos iniciales', from: 90, to: 91, untitled: true,
        summary: 'Vuelve a Babel y a Nehemías: con la IA ya instalada en la vida diaria, la pregunta es qué estamos construyendo [§ 90]. Anima en especial a los laicos a asumir esa responsabilidad [§ 91].',
      },
      {
        title: 'El paradigma tecnocrático y el poder digital', from: 92, to: 96,
        summary: 'Retoma de *Laudato si’* el paradigma tecnocrático, donde eficiencia, control y lucro deciden solos [§ 92]; la IA puede acelerarlo, y más poderoso no significa mejor [§ 93]. Con Pablo VI: se puede tener más sin ser más [§ 94]. Plataformas, datos, infraestructura y cómputo están en pocas manos privadas [§ 95], y los principios sociales sirven para juzgar ese poder [§ 96].',
      },
      {
        title: 'La inteligencia artificial', from: 97, to: 111,
        summary: 'Qué es, para qué sirve y cómo gobernarla.',
        parts: [
          {
            title: 'Párrafos iniciales', from: 97, to: 99, untitled: true,
            summary: 'No pretende ser un tratado sino dar criterios [§ 97]. Admite que todo lo que se diga sobre la IA envejece rápido y que sabemos muy poco de cómo funciona por dentro: estos sistemas están más “cultivados” que “construidos” [§ 98]. No equipara la IA con la inteligencia humana: no tiene experiencia, cuerpo ni conciencia moral, y su aprendizaje es adaptación estadística [§ 99].',
          },
          {
            title: 'Una ayuda valiosa que requiere atención', from: 100, to: 101,
            summary: 'En el uso personal señala tres riesgos: delegar demasiado, la apariencia de objetividad y la simulación de comunicación humana, que produce apariencia y no relación [§ 100]. En la gestión pública y empresarial, el costo ambiental: energía, agua y emisiones [§ 101].',
          },
          {
            title: 'Responsabilidad, transparencia y gobernanza de la IA', from: 102, to: 111,
            summary: 'Delegar en sistemas automáticos decisiones sobre trabajo, crédito o reputación puede crear nuevos descartes [§ 102–103]; la IA no es moralmente neutra [§ 104] y alguien tiene que rendir cuentas [§ 105]. Pide prudencia y, a veces, ralentizar su adopción [§ 106]. Critica una “alineación” decidida por pocos [§ 107], pide tratar los datos como bien común [§ 108] y reconocer el trabajo invisible detrás de los modelos [§ 109]. Propone “desarmar” la IA: sacarla de la carrera por el algoritmo más potente y romper la idea de que el poder técnico da derecho a gobernar [§ 110]. Cierra con un llamado a los desarrolladores [§ 111].',
          },
        ],
      },
      {
        title: 'Lo que no podemos perder', from: 112, to: 126,
        summary: 'La antropología de fondo: qué se pierde si el ser humano pasa a ser un proyecto a optimizar.',
        parts: [
          {
            title: 'Párrafos iniciales', from: 112, to: 114, untitled: true,
            summary: 'Advierte contra una visión que mide la plenitud por acumulación y quiere eliminar la fragilidad [§ 112]; absolutizar la inteligencia empobrece la vida [§ 113]. La calidad de una civilización se mide por el cuidado que sabe ofrecer [§ 114].',
          },
          {
            title: 'Narrativas de fondo: transhumanismo y posthumanismo', from: 115, to: 117,
            summary: 'Las presenta como el trasfondo ideológico de varios centros de poder tecnológico [§ 115] y las distingue entre sí [§ 116]. Lo problemático no es la técnica sino tratar al ser humano como materia a perfeccionar, lo que hace aceptables “sacrificios necesarios” [§ 117].',
          },
          {
            title: 'El límite, el corazón, la grandeza del ser humano', from: 118, to: 126,
            summary: 'El límite no es solo un defecto: el ser humano no florece a pesar del límite, sino a menudo a través de él [§ 118–120]. Con Frankl, la capacidad humana de barbarie y de dignidad [§ 121]; con Beethoven, *Guernica* y *La lista de Schindler*, el arte que no normaliza el mal [§ 122]. Repasa instituciones que protegen la vida común [§ 123], luchas como los derechos civiles y el fin del *apartheid* [§ 124] y mártires como Kolbe, Romero y Angelelli [§ 125].',
          },
        ],
      },
      {
        title: 'El verdadero “más que humano”: gracia y humanismo cristiano', from: 127, to: 128,
        summary: 'La respuesta cristiana a la promesa de superar lo humano es la gracia: trascenderse en el amor por don de Dios [§ 127]. Una tecnología que solo clasifica y optimiza puede estorbar el cambio personal: para un algoritmo el error se corrige; para una persona puede ser el comienzo de algo nuevo [§ 128].',
      },
      {
        title: 'Dos ciudades y dos amores', from: 129, to: 130,
        summary: 'La alternativa no es ciencia sí o no, sino un progreso que sirve a la persona o uno que la somete [§ 129]. Con san Agustín, dos amores construyen dos ciudades, y la opción entre Babel y Jerusalén empieza en cada corazón [§ 130].',
      },
    ],
  },
  {
    slug: '4', id: 'cap-4', label: 'Capítulo 4', short: '4',
    title: 'Custodiar lo humano en la transformación. Verdad, trabajo, libertad',
    lede: 'Baja a tres terrenos concretos. La verdad: desinformación, democracia y educación. El trabajo: automatización, desempleo y economía. La libertad: economía de la atención, control por datos y nuevas esclavitudes, con un pedido de perdón por el pasado de la Iglesia [§ 176].',
    sections: [
      {
        title: 'Párrafos iniciales', from: 131, to: 131, untitled: true,
        summary: 'Presenta los tres ámbitos del capítulo: la verdad como bien común, la dignidad del trabajo y la libertad frente a la dependencia y la mercantilización [§ 131].',
      },
      {
        title: 'La verdad como bien común', from: 132, to: 147,
        summary: 'Desinformación, poder sobre el relato y educación.',
        parts: [
          {
            title: 'Verdad y democracia', from: 132, to: 134,
            summary: 'Plataformas e IA multiplican la desinformación y borran la frontera entre verdadero y falso [§ 132]. Quien tiene más recursos puede influir en lo que se considera verdadero [§ 133]. Sin búsqueda de la verdad la democracia se debilita; cita a Hannah Arendt sobre el riesgo de perder la distinción entre hecho y ficción [§ 134].',
          },
          {
            title: 'Comunicación e imaginario colectivo', from: 135, to: 136,
            summary: 'Los contenidos digitales moldean deseos y percepciones, sobre todo de los jóvenes [§ 135]; quien controla plataformas y medios moldea el imaginario colectivo y debe responder a la verdad [§ 136].',
          },
          {
            title: 'Por una ecología de la comunicación', from: 137, to: 138,
            summary: 'Propone transparencia, protección de datos, periodismo serio y educación crítica [§ 137]. Admite que las comunidades cristianas no siempre comunicaron con transparencia y agradece a los periodistas que sacaron a la luz abusos [§ 138].',
          },
          {
            title: 'Una alianza educativa para la era digital', from: 139, to: 142,
            summary: 'La sobreestimulación genera apatía ante el esfuerzo de pensar [§ 139]. Educar en la IA es también educar para decidir cuándo no usarla [§ 140]. Describe los daños de la exposición temprana a pantallas y redes [§ 141] y pide límites de edad y responsabilidad de las plataformas, sin cargar todo sobre las familias [§ 142].',
          },
          {
            title: 'Rol central de la escuela', from: 143, to: 147,
            summary: 'Los padres tienen derecho a elegir la educación de sus hijos [§ 143]; reconoce el aporte de las obras educativas católicas y señala que el Estado no siempre invierte lo necesario [§ 144]. Pide formación docente continua [§ 145], una “higiene de la atención” con silencio y lectura [§ 146] y una alianza entre familias, escuelas e instituciones [§ 147].',
          },
        ],
      },
      {
        title: 'La dignidad del trabajo en la transición digital', from: 148, to: 169,
        summary: 'Automatización, desempleo, economía y familia.',
        parts: [
          {
            title: 'El valor del trabajo', from: 148, to: 150,
            summary: 'El trabajo es clave de la cuestión social [§ 148] y camino de realización: los subsidios no pueden ser la única respuesta a la pobreza [§ 149]. La automatización puede descalificar a los trabajadores y someterlos a vigilancia [§ 150].',
          },
          {
            title: 'El problema del desempleo', from: 151, to: 156,
            summary: 'El temor a una pérdida rápida de empleos puede volverse una calamidad social [§ 151]. Proteger el empleo es la norma general [§ 152]. La transición es desigual entre regiones [§ 153], y las herramientas nacidas con *Rerum novarum* ya no alcanzan [§ 155]. Pide criterios sociales para la innovación y formación continua [§ 156].',
          },
          {
            title: 'Una economía que valore la dignidad', from: 157, to: 164,
            summary: 'La iniciativa empresarial puede ser una verdadera vocación [§ 157], pero rechaza esperar que el crecimiento llegue “al final” a los pobres y pide un Estado presente [§ 158]. Propone indicadores complementarios al PIB [§ 159], defiende la función social del crédito [§ 160], impuestos que exijan más a quien más tiene [§ 162] y ya no confiar solo en la “mano invisible” [§ 163]. Tres criterios: transparencia algorítmica, acceso e inclusión, equidad [§ 164].',
          },
          {
            title: 'Familia y jóvenes: condiciones sociales de la esperanza', from: 165, to: 169,
            summary: 'La familia, fundada en la unión estable entre un hombre y una mujer, es un bien social primario y frágil [§ 165–166]. Describe la precariedad laboral juvenil [§ 167] y pide políticas de empleo y ritmos de trabajo humanos [§ 168–169].',
          },
        ],
      },
      {
        title: 'Custodiar la libertad frente a la dependencia y la mercantilización', from: 170, to: 179,
        summary: 'Atención, datos y nuevas esclavitudes.',
        parts: [
          {
            title: 'Dependencias y control social', from: 170, to: 172,
            summary: 'La economía de la atención explota la vulnerabilidad humana [§ 170]. La recolección masiva de datos permite perfilar, vigilar y controlar, y hacen falta normas y vías de recurso [§ 171]. De fondo, una mentalidad que trata a la persona como recurso manipulable [§ 172].',
          },
          {
            title: 'Romper las cadenas de las nuevas esclavitudes', from: 173, to: 179,
            summary: 'En la IA nada es inmaterial: hay trabajo oculto mal pago, mayormente de mujeres jóvenes, y chicos en la extracción de minerales [§ 173]. Reafirma la condena de la esclavitud y la trata [§ 174–175]. Reconoce que la Santa Sede llegó a legitimar formas de sometimiento y pide perdón en nombre de la Iglesia [§ 176]; las notas citan las bulas *Dum diversas* y *Romanus Pontifex*. Pide denunciar la trata de forma directa y firme [§ 177], advierte que sin cambios la era digital será colonial bajo otra forma, con los datos sanitarios y genéticos como nuevas “tierras raras” [§ 178], y pide transparencia en las cadenas de suministro [§ 179].',
          },
        ],
      },
      {
        title: 'Una responsabilidad compartida', from: 180, to: 181,
        summary: 'Si la técnica se vuelve criterio absoluto, la persona queda reducida a dato o mercancía [§ 180]. La respuesta es una responsabilidad repartida entre instituciones, empresas, cuerpos intermedios, escuelas y ciudadanos [§ 181].',
      },
    ],
  },
  {
    slug: '5', id: 'cap-5', label: 'Capítulo 5', short: '5',
    title: 'La cultura del poder y la civilización del amor',
    lede: 'Denuncia la normalización de la guerra, el negocio de las armas, la disuasión nuclear y las armas con IA, y reitera la superación de la teoría de la “guerra justa” [§ 192]. Propone cinco caminos: desarmar las palabras, la paz en la justicia, la mirada de las víctimas, un realismo sano y el diálogo [§ 214–223].',
    sections: [
      {
        title: 'Párrafos iniciales', from: 182, to: 185, untitled: true,
        summary: 'La IA puede volver más rápida e impersonal la decisión de hacer la guerra [§ 182]. Repasa las formas híbridas de conflicto [§ 183] y opone una cultura del poder en expansión a la construcción paciente de la convivencia [§ 184–185].',
      },
      {
        title: 'La civilización del amor en la era digital', from: 186, to: 187,
        summary: 'Retoma la expresión de Pablo VI y la une a *Fratelli tutti* [§ 186]. La interdependencia digital tiene que volverse solidaridad elegida, y la IA servir a toda la familia humana [§ 187].',
      },
      {
        title: 'La cultura del poder', from: 188, to: 209,
        summary: 'Guerra, armas, IA militar y crisis del orden internacional.',
        parts: [
          {
            title: 'Párrafos iniciales', from: 188, to: 188, untitled: true,
            summary: 'Describe una cultura que normaliza la guerra, busca más poder militar, debilita el multilateralismo y se apoya en un falso realismo [§ 188].',
          },
          {
            title: 'La normalización de la guerra', from: 189, to: 192,
            summary: 'Recuerda el llamado de Pablo VI en 1965 y la guerra limitada a último recurso [§ 189]; denuncia el giro hacia el rearme [§ 190] y la pérdida de memoria histórica [§ 191]. Reitera la superación de la teoría de la “guerra justa”, dejando solo la legítima defensa en sentido estricto [§ 192].',
          },
          {
            title: 'La fuerza sin límites', from: 193, to: 196,
            summary: 'La industria bélica y sus intereses [§ 193]. Llama errónea la convicción de que la disuasión nuclear es indispensable [§ 194]. Conflictos que se cronifican y actores armados que rompen el monopolio estatal de la fuerza [§ 195–196].',
          },
          {
            title: 'Armas e IA', from: 197, to: 200,
            summary: 'Las armas autónomas hacen la guerra más “viable” y menos controlable [§ 197]. Ningún algoritmo puede volverla moralmente aceptable, y no es lícito delegar en máquinas decisiones letales o irreversibles [§ 198]. Pide responsabilidad personal, tiempo para el juicio moral y protección de civiles [§ 199], con trazabilidad, control humano efectivo y reglas internacionales [§ 200].',
          },
          {
            title: 'La crisis del multilateralismo', from: 201, to: 203,
            summary: 'Atribuye la crisis a una globalización económica sin arquitectura política después de 1989 [§ 201]. Denuncia la identidad construida contra un enemigo y la ley del más fuerte [§ 202], y el debilitamiento del derecho humanitario [§ 203].',
          },
          {
            title: 'Un supuesto realismo político', from: 204, to: 209,
            summary: 'El aumento del gasto militar recae sobre los más pobres [§ 204]. La paz no es una ilusión sino fruto de la justicia; la *Realpolitik* es irresponsable [§ 205]. Advierte sobre el uso de la guerra para tapar problemas internos [§ 206–208] y apela a científicos, empresarios e inversores [§ 209].',
          },
        ],
      },
      {
        title: 'Construir la civilización del amor', from: 210, to: 228,
        summary: 'Qué puede hacer cada uno: cinco caminos, diplomacia y oración.',
        parts: [
          {
            title: 'Párrafos iniciales', from: 210, to: 211, untitled: true,
            summary: 'Hay que nombrar la beligerancia permanente como un mal, pero la mirada cristiana apuesta al crecimiento silencioso del Reino [§ 210] y a quienes, aun en tiempos oscuros, protegen a los frágiles [§ 211].',
          },
          {
            title: 'Todos podemos dar nuestro aporte', from: 212, to: 213,
            summary: 'Rechaza la idea de que las decisiones individuales no cuentan [§ 212] y, con una cita de Tolkien, presenta cinco caminos [§ 213].',
          },
          {
            title: 'Desarmar las palabras', from: 214, to: 214,
            summary: 'Revisar el propio lenguaje, sus prejuicios y su agresividad; decir la verdad, consolar y denunciar injusticias [§ 214].',
          },
          {
            title: 'Construir la paz en la justicia', from: 215, to: 215,
            summary: 'La paz verdadera nace de la justicia; con san Agustín, invita a no cansarse de buscarla [§ 215].',
          },
          {
            title: 'Asumir la mirada de las víctimas', from: 216, to: 217,
            summary: 'Ante ataques a civiles, hospitales o chicos, la neutralidad no es justa [§ 216]. Pide dar voz a las víctimas en la información y la educación [§ 217].',
          },
          {
            title: 'Cultivar un sano realismo', from: 218, to: 218,
            summary: 'Ni idealismo que manipula los hechos ni cinismo que confunde constatar con resignarse: pasos viables como negociación, prevención y protección de civiles [§ 218].',
          },
          {
            title: 'Relanzar el diálogo', from: 219, to: 223,
            summary: 'El diálogo como alternativa al conflicto, con Pío XII [§ 219]; pasar de la cultura del poder a la de la negociación [§ 220–221]; el llamado de Francisco a negociar [§ 222] y el diálogo interreligioso [§ 223].',
          },
          {
            title: 'La necesidad de la diplomacia y el multilateralismo', from: 224, to: 227,
            summary: 'Dialogar también con interlocutores incómodos [§ 224]; reglas compartidas para el ciberespacio [§ 225]; la ONU es esencial pero necesita reformas profundas [§ 226]; la diplomacia de la Santa Sede [§ 227].',
          },
          {
            title: 'Orar y esperar', from: 228, to: 228,
            summary: 'La paz como don de Dios, desarmada y desarmante, que pide oración y compromiso [§ 228].',
          },
        ],
      },
    ],
  },
  {
    slug: 'conclusion', id: 'cap-6', label: 'Conclusión', short: 'Fin',
    title: 'Conclusión',
    lede: 'Un itinerario de vida cristiana: la Encarnación frente a la promesa transhumanista [§ 232], la Eucaristía como unidad [§ 234], el “arquitecto sabio” con cuatro tareas (verdad, educación, relaciones, justicia y paz) [§ 236–240] y el Magníficat, que enseña a mirar la historia desde abajo [§ 244].',
    sections: [
      {
        title: 'Párrafos iniciales', from: 229, to: 229, untitled: true,
        summary: 'Con san Pablo, recuerda que importa cómo se construye, y anuncia el itinerario final: contemplar, vivir la unidad, edificar y orar con María [§ 229].',
      },
      {
        title: 'El Verbo se hizo carne', from: 230, to: 233,
        summary: 'El Magníficat como brújula frente a la lógica del dominio [§ 230]; la Encarnación ligada a la carne herida de los vulnerables [§ 231]. Frente al transhumanismo, un Dios que comparte la fragilidad [§ 232]. Ningún sistema de cálculo produce un corazón que se entrega [§ 233].',
      },
      {
        title: 'Un solo cuerpo en Cristo', from: 234, to: 235,
        summary: 'Una espiritualidad eucarística de unidad, con san Agustín [§ 234], que se traduce en justicia y en compartir frente a las redes que excluyen [§ 235].',
      },
      {
        title: 'La obra de nuestro tiempo', from: 236, to: 242,
        summary: 'La figura del arquitecto sabio y sus cuatro tareas [§ 236]: fidelidad a la verdad [§ 237], invertir en educación empezando por uno mismo [§ 238], cuidar las relaciones [§ 239] y amar la justicia y la paz [§ 240]. Vuelve a Nehemías [§ 241] y a la Jerusalén nueva abierta a todos [§ 242].',
      },
      {
        title: 'El canto de la esperanza: el “Magníficat”', from: 243, to: 245,
        summary: 'La oración como cuarto paso del itinerario [§ 243]. María enseña a mirar la historia desde abajo, con los ojos de quien sufre [§ 244], e invita a ser tejedores de esperanza [§ 245].',
      },
    ],
  },
];

export const chapterRange = (c: Chapter) => ({
  from: c.sections[0]!.from,
  to: c.sections[c.sections.length - 1]!.to,
});

// Una sección con subpartes comparte número inicial con su primera subparte: prefijos distintos
export const partId = (p: Part) => `${p.parts ? "s" : "p"}${p.from}`;
export const chapterHref = (c: Chapter, p?: Part) => `/capitulo/${c.slug}/${p ? `#${partId(p)}` : ''}`;

/** Recorre todas las partes (secciones y subsecciones) de un capítulo. */
export function* walk(c: Chapter): Generator<{ part: Part; depth: number; parent?: Part }> {
  for (const s of c.sections) {
    yield { part: s, depth: 0 };
    for (const sub of s.parts ?? []) yield { part: sub, depth: 1, parent: s };
  }
}

/** Ubica un párrafo: capítulo, sección y la parte más específica que lo contiene. */
export function locate(n: number) {
  for (const c of chapters)
    for (const s of c.sections)
      if (n >= s.from && n <= s.to) {
        const sub = s.parts?.find((p) => n >= p.from && n <= p.to);
        return { chapter: c, section: s, part: sub ?? s };
      }
  return undefined;
}
