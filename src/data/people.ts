/**
 * Personas, obras e instituciones que la encíclica nombra en su texto
 * (no en las notas), verificadas contra vatican.va. Se excluyen papas y
 * documentos de la Iglesia, que están en la línea de tiempo.
 * `note`: para qué los usa el texto, con palabras propias.
 */

export interface Cited {
  name: string;
  ref: string;
  note: string;
}

export interface CitedGroup {
  id: string;
  label: string;
  intro?: string;
  items: Cited[];
}

export const cited: CitedGroup[] = [
  {
    id: 'pensamiento',
    label: 'Filosofía y pensamiento',
    items: [
      { name: 'Platón', ref: '140', note: 'Para recordar que aprender de verdad lleva tiempo, esfuerzo y diálogo.' },
      { name: 'Romano Guardini', ref: '93', note: 'Sobre un ser humano moderno que no está preparado para usar bien su propio poder.' },
      { name: 'Viktor Frankl', ref: '121', note: 'Sobre lo que se revela de lo humano en situaciones extremas de horror.' },
      { name: 'Hannah Arendt', ref: '134', note: 'Sobre cómo la indiferencia ante la verdad, cuando se borra la frontera entre hecho y ficción, abre camino al totalitarismo.' },
    ],
  },
  {
    id: 'tradicion',
    label: 'Padres y doctores de la Iglesia',
    items: [
      { name: 'San Agustín', ref: '11, 130, 215, 234', note: 'El autor más citado: el corazón inquieto, las dos ciudades y los dos amores, la paz que nace de la justicia y el “Amén” de la comunión.' },
      { name: 'Santo Tomás de Aquino', ref: '127', note: 'Sobre una elevación del ser humano que supera las fuerzas de su naturaleza: la gracia.' },
      { name: 'San Benito de Nursia', ref: '148', note: 'Por unir oración y trabajo como respuesta humana al llamado de Dios.' },
    ],
  },
  {
    id: 'arte',
    label: 'Arte y literatura',
    items: [
      { name: 'Beethoven, *Novena Sinfonía*', ref: '122', note: 'Como obra que expresa un deseo de unidad entre los seres humanos.' },
      { name: '*Guernica*', ref: '122', note: 'Como denuncia de la deshumanización de la guerra.' },
      { name: '*La lista de Schindler*', ref: '122', note: 'Como llamado a no olvidar el pasado.' },
      { name: 'J. R. R. Tolkien', ref: '213', note: 'Por boca de un personaje de sus novelas, sobre la responsabilidad de cada uno en su propio tiempo y lugar.' },
    ],
  },
  {
    id: 'historia',
    label: 'Personas que cambiaron la historia',
    intro: 'El § 124 nombra a quienes, con su compromiso personal, hicieron más humana la historia.',
    items: [
      { name: 'Martin Luther King Jr.', ref: '124', note: 'El movimiento por los derechos civiles en Estados Unidos.' },
      { name: 'Nelson Mandela', ref: '124', note: 'El fin del *apartheid* sin dejar que el odio definiera el futuro.' },
      { name: 'Santa Laura Montoya', ref: '124', note: 'Entre las mujeres valientes que nombra el texto.' },
      { name: 'Santa Teresa de Calcuta', ref: '124', note: 'Entre las mujeres valientes que nombra el texto.' },
      { name: 'Dorothy Day', ref: '124', note: 'Entre las mujeres valientes que nombra el texto.' },
      { name: 'Maria Skłodowska-Curie', ref: '124', note: 'Entre las mujeres valientes que nombra el texto.' },
      { name: 'Maria Montessori', ref: '124', note: 'Entre las mujeres valientes que nombra el texto.' },
      { name: 'Elisabeth Elliot', ref: '124', note: 'Entre las mujeres valientes que nombra el texto.' },
      { name: 'Wangari Maathai', ref: '124', note: 'Entre las mujeres valientes que nombra el texto.' },
      { name: 'Benazir Bhutto', ref: '124', note: 'Entre las mujeres valientes que nombra el texto.' },
      { name: 'Giorgio La Pira', ref: '221', note: 'Por su propuesta de reemplazar el método de la guerra por el método de la paz.' },
    ],
  },
  {
    id: 'testigos',
    label: 'Mártires y testigos',
    intro: 'El § 125 los presenta como mártires de la fraternidad y la justicia y testigos de esperanza.',
    items: [
      { name: 'San Maximiliano María Kolbe', ref: '125', note: 'Mártir de la fraternidad y la justicia.' },
      { name: 'San Óscar Romero', ref: '125', note: 'Mártir de la fraternidad y la justicia.' },
      { name: 'Beato Enrique Angelelli', ref: '125', note: 'Mártir de la fraternidad y la justicia; el obispo de La Rioja asesinado en 1976.' },
      { name: 'Venerable François-Xavier Nguyễn Văn Thuận', ref: '125', note: 'Testigo de la esperanza del Evangelio en condiciones durísimas.' },
    ],
  },
  {
    id: 'instituciones',
    label: 'Instituciones y acuerdos',
    intro: 'El § 123 los pone como ejemplos, frágiles y costosos, de cómo se protege la vida común.',
    items: [
      { name: 'Comité Internacional de la Cruz Roja (1863)', ref: '123', note: 'Una institución neutral al servicio de quienes sufren.' },
      { name: 'Organización de las Naciones Unidas (1945)', ref: '123, 226', note: 'Ejemplo de institución que protege la vida común; más adelante dice que necesita reformas profundas.' },
      { name: 'Declaración Universal de los Derechos Humanos (1948)', ref: '54, 123', note: 'Un lenguaje común sobre la dignidad.' },
      { name: 'Convención sobre el Estatuto de los Refugiados (1951)', ref: '123', note: 'El deber de proteger a quien huye de la persecución.' },
    ],
  },
];
