# Magnifica Humanitas, explicada

Guía y análisis independiente de la encíclica *Magnifica Humanitas* de León XIV (15 de mayo de 2026), sobre la custodia de la persona humana en el tiempo de la inteligencia artificial.

El sitio presenta la estructura de la encíclica como una muralla en tramos (la imagen de Nehemías que recorre el texto), las ideas nuevas, las dos lecturas económicas posibles, las tensiones del texto, un resumen por capítulo y frases para citar. Todas las citas indican su número de párrafo (§) para poder verificarlas contra el [texto oficial](https://www.vatican.va/content/leo-xiv/es/encyclicals/documents/20260515-magnifica-humanitas.html).

## Qué cubre

Los 245 párrafos completos, sección por sección: cada uno de los 7 bloques (introducción, 5 capítulos, conclusión) tiene su página con las 80 secciones y subsecciones del original, con sus títulos reales, resumidas con palabras propias y con la referencia a cada párrafo. No reproduce el texto íntegro, que tiene derechos de la Libreria Editrice Vaticana: cita frases cortas y remite siempre al original.

Todo el contenido se verificó contra el texto oficial. Entre comillas va solo texto literal.

## Qué se puede hacer

- **Buscar** (`Ctrl K` o `/`): por palabra o por número de párrafo. Escribir `107` muestra en qué capítulo cae y todo lo que la guía dice sobre él.
- **Tocar cualquier §**: dice dónde está ese párrafo, busca todo lo que lo cita, copia el enlace o abre el texto oficial.
- **Muralla navegable**: cada bloque lleva a su resumen, y el tramo que estás leyendo se marca arriba.
- **Economía**: resaltar una de las dos lecturas para ver qué párrafos usa cada lado.
- **Recorridos por tema**: once temas (IA, datos, trabajo, guerra, educación…) que juntan las secciones de todos los capítulos, con una franja que muestra dónde aparece cada tema en los 245 párrafos.
- **Glosario integrado**: los términos clave aparecen subrayados en el texto y muestran su definición al tocarlos; página propia con filtro y con las secciones donde aparece cada uno.
- **135 años en una línea**: los documentos de la Doctrina social que repasa el capítulo 1, ubicados en su año.
- **¿Lo dice o no lo dice?**: afirmaciones que circulan sobre la encíclica, con la respuesta y el párrafo para comprobarla.
- **Compartir frases**: copia la cita con su enlace (o usa el menú de compartir en el celular).
- Índice que sigue la lectura, barra de progreso, modo claro/oscuro sin parpadeo.

## Stack

[Astro](https://astro.build) + TypeScript, sitio estático. Sin frameworks de UI: los componentes se renderizan en build y el JavaScript del cliente son módulos chicos por interacción.

```
src/
  data/structure.ts     estructura completa: capítulos, secciones, subsecciones y resúmenes
  data/encyclical.ts    contenido de la portada (ideas nuevas, economía, línea de tiempo, prueba)
  data/topics.ts        recorridos por tema (qué secciones toca cada uno)
  data/glossary.ts      términos, variantes y definiciones
  lib/terms.ts          subraya en el texto el primer uso de cada término
  lib/rich.ts           mini-sintaxis del contenido: [§ 71–72], *itálica*, **énfasis**
  lib/search-index.ts   índice de búsqueda generado en build
  components/           una sección por componente
  pages/capitulo/       una página por capítulo, generada desde structure.ts
  pages/temas/          una página por tema
  pages/glosario.astro  glosario con filtro
  scripts/              búsqueda, popover de §, índice activo, tema
scripts/check-data.ts   verificación de integridad (corre antes de cada build)
```

Para editar contenido alcanza con tocar los archivos de `src/data/`: la muralla, las páginas de capítulo y el índice de búsqueda se generan solos. Antes de cada build, `npm run check:data` comprueba que los capítulos cubran los 245 párrafos sin huecos ni superposiciones, que cada resumen cite solo párrafos de su propio rango, que cada tema apunte a secciones reales, que cada término del glosario aparezca en el contenido y que las comillas estén balanceadas.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # chequea tipos y genera dist/
```

Se publica en Vercel (`vercel.json` fija el framework Astro).

No es un sitio oficial de la Santa Sede.
