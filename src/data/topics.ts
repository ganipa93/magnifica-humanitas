/**
 * Recorridos por tema. Cada tema lista las secciones (por su párrafo inicial)
 * cuyo resumen verificado en structure.ts trata ese tema de forma explícita.
 * scripts/check-data.ts valida que cada número sea el inicio de una sección real.
 */

export interface Topic {
  slug: string;
  label: string;
  /** Una línea: qué junta este recorrido */
  intro: string;
  /** Párrafo inicial de cada sección (hoja) incluida */
  parts: number[];
}

export const topics: Topic[] = [
  {
    slug: 'inteligencia-artificial',
    label: 'Inteligencia artificial',
    intro: 'Qué es y qué no es la IA para la encíclica, sus riesgos personales y sociales, y cómo propone gobernarla.',
    parts: [4, 17, 46, 82, 90, 92, 97, 100, 102, 127, 129, 139, 148, 151, 157, 182, 186, 197, 230],
  },
  {
    slug: 'datos-y-plataformas',
    label: 'Datos y plataformas',
    intro: 'Quién controla los datos, los algoritmos y las plataformas, y qué reglas pide para ese poder.',
    parts: [4, 65, 68, 73, 77, 92, 102, 132, 135, 137, 157, 170, 173],
  },
  {
    slug: 'trabajo-y-economia',
    label: 'Trabajo y economía',
    intro: 'Automatización, desempleo, salario, mercado, Estado e impuestos: la parte que más se discute en clave política.',
    parts: [29, 37, 51, 65, 82, 148, 151, 157, 165, 173],
  },
  {
    slug: 'guerra-y-paz',
    label: 'Guerra y paz',
    intro: 'La normalización de la guerra, las armas con IA, la disuasión nuclear y los cinco caminos de paz que propone.',
    parts: [33, 182, 186, 188, 189, 193, 197, 201, 204, 210, 212, 214, 215, 216, 218, 219, 224, 228, 236],
  },
  {
    slug: 'educacion-y-jovenes',
    label: 'Educación y jóvenes',
    intro: 'Pantallas, escuela, límites de edad y el papel de las familias frente a los modelos de negocio de la atención.',
    parts: [135, 139, 143, 165, 236],
  },
  {
    slug: 'verdad-y-democracia',
    label: 'Verdad, comunicación y democracia',
    intro: 'Desinformación, poder sobre el relato, periodismo y la verdad como bien común.',
    parts: [25, 132, 135, 137, 214, 236],
  },
  {
    slug: 'dignidad-y-derechos',
    label: 'Dignidad y derechos',
    intro: 'Por qué cada persona vale sin tener que ganárselo, y qué se sigue de eso para los derechos y los más vulnerables.',
    parts: [15, 48, 51, 54, 77, 112, 118, 173, 180],
  },
  {
    slug: 'ecologia',
    label: 'Ecología y casa común',
    intro: 'El costo ambiental de la técnica y la ecología integral como prueba de un progreso verdadero.',
    parts: [73, 82, 92, 100],
  },
  {
    slug: 'iglesia-autocritica',
    label: 'La Iglesia frente a sí misma',
    intro: 'Los pasajes donde la encíclica aplica sus principios hacia adentro: transparencia, abusos, comunicación y esclavitud.',
    parts: [86, 137, 173],
  },
  {
    slug: 'historia-doctrina-social',
    label: 'Historia de la Doctrina social',
    intro: 'De León XIII a León XIV: cómo se formó la enseñanza social que la encíclica actualiza.',
    parts: [1, 17, 19, 23, 25, 28, 29, 33, 37, 45],
  },
  {
    slug: 'fe-y-espiritualidad',
    label: 'Fe y espiritualidad',
    intro: 'El fundamento teológico del texto: Babel y Jerusalén, la gracia, la Encarnación, la Eucaristía y el Magníficat.',
    parts: [7, 11, 48, 118, 127, 129, 228, 229, 230, 234, 236, 243],
  },
];
