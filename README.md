# Magnifica Humanitas, explicada

Guía y análisis independiente de la encíclica *Magnifica Humanitas* de León XIV (15 de mayo de 2026), sobre la custodia de la persona humana en el tiempo de la inteligencia artificial.

El sitio presenta la estructura de la encíclica como una muralla en tramos (la imagen de Nehemías que recorre el texto), las ideas nuevas, las dos lecturas económicas posibles, las tensiones del texto, un resumen por capítulo y frases para citar. Todas las citas indican su número de párrafo (§) para poder verificarlas contra el [texto oficial](https://www.vatican.va/content/leo-xiv/es/encyclicals/documents/20260515-magnifica-humanitas.html).

## Qué se puede hacer

- **Buscar** (`Ctrl K` o `/`): por palabra o por número de párrafo. Escribir `107` muestra en qué capítulo cae y todo lo que la guía dice sobre él.
- **Tocar cualquier §**: dice dónde está ese párrafo, busca todo lo que lo cita, copia el enlace o abre el texto oficial.
- **Muralla navegable**: cada bloque lleva a su resumen, y el tramo que estás leyendo se marca arriba.
- **Economía**: resaltar una de las dos lecturas para ver qué párrafos usa cada lado.
- **Compartir frases**: copia la cita con su enlace (o usa el menú de compartir en el celular).
- Índice que sigue la lectura, barra de progreso, modo claro/oscuro sin parpadeo.

## Stack

[Astro](https://astro.build) + TypeScript, sitio estático. Sin frameworks de UI: los componentes se renderizan en build y el JavaScript del cliente son módulos chicos por interacción.

```
src/
  data/encyclical.ts    contenido tipado (estructura, secciones, citas)
  lib/rich.ts           mini-sintaxis del contenido: [§ 71–72], *itálica*, **énfasis**
  lib/search-index.ts   índice de búsqueda generado en build
  components/           una sección por componente
  scripts/              búsqueda, popover de §, índice activo, tema
```

Para editar contenido alcanza con tocar `src/data/encyclical.ts`: los anchos de la muralla, el índice de búsqueda y los rangos de cada capítulo se calculan solos.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # chequea tipos y genera dist/
```

Se publica en Vercel (`vercel.json` fija el framework Astro).

No es un sitio oficial de la Santa Sede.
