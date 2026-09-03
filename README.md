<div align="center">

# ID3 Studio

**Consulta metadatos de canciones y prepara la información para tus archivos de audio.**

[![Nuxt](https://img.shields.io/badge/Nuxt-4.5.1-00DC82?logo=nuxt.js&logoColor=white)](https://nuxt.com/)
[![Vue](https://img.shields.io/badge/Vue-3-4FC08D?logo=vue.js&logoColor=white)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Nuxt UI](https://img.shields.io/badge/Nuxt%20UI-4-00DC82?logo=nuxt.js&logoColor=white)](https://ui.nuxt.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-11-F69220?logo=pnpm&logoColor=white)](https://pnpm.io/)

</div>

Aplicación web para buscar una canción, recopilar sus metadatos y preparar la información para etiquetar archivos de audio.

## ¿Qué hace?

ID3 Studio reúne información de varias fuentes para mostrar una vista clara de los datos de una pista:

- búsqueda por artista y título
- datos del álbum, artista, género, año, duración, pista, disco, BPM, ISRC y copyright
- portada del álbum
- letra no sincronizada cuando está disponible
- edición rápida de metadatos desde la interfaz
- inyección de metadatos directamente en un archivo MP3
- descarga de una ficha TXT con los datos de la canción

## Cómo funciona

1. El usuario escribe artista y canción.
2. La app consulta la API interna de Nuxt en `GET /api/metadata`.
3. El servidor busca la canción en Deezer.
4. Se obtienen detalles del álbum, artistas, copyright y letra.
5. La interfaz muestra la información y permite editarla.
6. Luego puedes:
   - guardar la información localmente en un archivo TXT
   - o inyectar esos metadatos en un MP3 seleccionado

## Fuentes de datos

- [Deezer API](https://developers.deezer.com/api): búsqueda, pista, álbum, artistas, portada y metadatos principales
- [iTunes Search API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/): copyright del álbum
- [LRCLIB](https://lrclib.net/): letras no sincronizadas

## Requisitos

- Node.js 20+
- pnpm 11+

```bash
node --version
pnpm --version
```

## Instalación

```bash
git clone https://github.com/Luizzz1114/id3-studio
cd id3-studio
pnpm install
pnpm dev
```

La aplicación normalmente se abre en `http://localhost:3000`.

## Scripts

```bash
pnpm dev        # inicia la app en modo desarrollo
pnpm build      # genera la versión de producción
pnpm preview    # sirve la build localmente
pnpm lint       # ejecuta ESLint
pnpm typecheck  # comprueba los tipos de TypeScript
```

## Estructura principal

```text
id3-studio/
├── app/
│   ├── components/      # UI de búsqueda, resultados, edición y descarga
│   ├── composables/     # lógica de consulta y estado
│   ├── pages/           # vista principal
│   └── assets/css/      # estilos globales
├── server/
│   ├── api/             # endpoints /api/metadata y /api/cover
│   └── utils/           # lógica de negocio y consultas externas
├── shared/
│   ├── schemas/         # validación de entrada
│   └── types/           # tipos compartidos
├── package.json
├── nuxt.config.ts
├── LICENSE
└── README.md
```

## Estado del proyecto

La app ya está funcionando como herramienta práctica para:

- buscar metadatos de canciones
- editar la información antes de usarla
- inyectar etiquetas ID3 en MP3
- guardar una ficha TXT con los datos

A futuro, se puede seguir mejorando la experiencia: más formatos de audio, validaciones avanzadas, exportación más flexible o mejoras visuales.

## Licencia

Este proyecto se distribuye bajo la licencia indicada en [LICENSE](LICENSE).

## Autor

Luis Reinaldo Cortesía Henríquez
