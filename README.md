# ID3 Studio

<div align="center">

**Consulta metadatos de canciones y prepara la información para tus archivos de audio.**

[![Nuxt](https://img.shields.io/badge/Nuxt-4.5.1-00DC82?logo=nuxt.js&logoColor=white)](https://nuxt.com/)
[![Vue](https://img.shields.io/badge/Vue-3-4FC08D?logo=vue.js&logoColor=white)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Nuxt UI](https://img.shields.io/badge/Nuxt%20UI-4-00DC82?logo=nuxt.js&logoColor=white)](https://ui.nuxt.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-11-F69220?logo=pnpm&logoColor=white)](https://pnpm.io/)

</div>

## Sobre el proyecto

ID3 Studio es una aplicación web para buscar una canción y obtener sus metadatos en un formato útil para etiquetar archivos de audio. La página recibe el nombre del artista y de la canción, consulta distintas fuentes y presenta la información reunida en una sola vista.

La incrustación de los metadatos directamente en archivos de audio es una idea prevista para una siguiente etapa y todavía no forma parte de la aplicación.

## Funcionalidades

- Búsqueda por artista y título de canción.
- Visualización de título, artistas, álbum, género, año, duración, pista, disco, BPM, ISRC, compositor, sello y copyright.
- Obtención de letras no sincronizadas cuando están disponibles.
- Visualización de la portada del álbum.
- Sugerencias de búsqueda para probar la aplicación rápidamente.
- Estados de carga, errores y opción para reintentar una consulta.
- Validación de los parámetros de búsqueda en el servidor.

## Cómo funciona

1. El usuario introduce un artista y una canción en la interfaz.
2. Nuxt envía la consulta a `GET /api/metadata`.
3. El servidor busca la coincidencia en Deezer.
4. Con el resultado encontrado, consulta los detalles de la pista y el álbum en Deezer.
5. Apple iTunes aporta información de copyright y LRCLIB aporta letras cuando existen.
6. La aplicación combina y muestra los metadatos resultantes.

## Fuentes de datos

- [Deezer API](https://developers.deezer.com/api): búsqueda, pista, álbum, artistas, portada y datos principales.
- [iTunes Search API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/): copyright del álbum.
- [LRCLIB](https://lrclib.net/): letras no sincronizadas, cuando están disponibles.

## Requisitos

- Node.js 20 o superior.
- pnpm 11 o superior.

Puedes comprobar las versiones instaladas con:

```bash
node --version
pnpm --version
```

## Instalación y desarrollo

Clona el repositorio, instala las dependencias y arranca el servidor de desarrollo:

```bash
git clone https://github.com/Luizzz1114/id3-studio
cd id3-studio
pnpm install
pnpm dev
```

La aplicación estará disponible en la URL que indique Nuxt, normalmente `http://localhost:3000`.

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `pnpm dev` | Inicia el servidor de desarrollo. |
| `pnpm build` | Genera la aplicación para producción. |
| `pnpm preview` | Sirve localmente la compilación de producción. |
| `pnpm lint` | Ejecuta ESLint. |
| `pnpm typecheck` | Comprueba los tipos de TypeScript. |

## Estructura principal

```text
id3-studio/
│
├── app/
│   ├── components/       # Componentes de búsqueda, resultados, errores y créditos
│   ├── composables/      # Estado y lógica de consulta de metadatos
│   ├── pages/index.vue   # Página principal
│   └── assets/css/       # Estilos globales
│
├──server/
│   ├── api/              # Endpoint `/api/metadata`
│   └── utils/            # Integración con las fuentes externas
│
└── shared/
    ├── schemas/          # Validación de consultas
    └── types/            # Tipos compartidos
```

## Estado del proyecto

La consulta y visualización de metadatos está implementada. Como siguiente paso se contempla permitir la selección de un archivo de audio y escribir los campos obtenidos en sus etiquetas ID3, probablemente desde el navegador o mediante una capa de procesamiento en el servidor.

## Licencia

Este proyecto se distribuye bajo la licencia indicada en [LICENSE](LICENSE).

## Autores
Luis Reinaldo Cortesía Henríquez