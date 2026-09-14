<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'

const faqItems = ref<AccordionItem[]>([
  {
    label: '¿Qué son exactamente los metadatos de una canción?',
    content:
      'Son la información integrada dentro del propio archivo de audio (como el título, el artista, el álbum, el año, el género, las letras y la carátula) que los reproductores de música utilizan para organizar, buscar y mostrar tu biblioteca.'
  },
  {
    label: '¿Qué formatos de archivo de audio son compatibles?',
    content: 'Actualmente puedes procesar y guardar información en archivos de audio con formatos MP3, FLAC y M4A.'
  },
  {
    label: '¿Por qué algunos campos dicen "No disponibles" o están vacíos?',
    content:
      'Nuestra API extrae exactamente lo que las discográficas han registrado en las plataformas oficiales. Si un sello independiente no registró los BPM, el ISRC o el compositor en Deezer o iTunes, el motor devolverá el campo vacío para mantener la integridad de los datos.'
  },
  {
    label: '¿La letra de la canción siempre está disponible?',
    content:
      'No siempre. Extraemos las letras a través de la API de LRCLib, una base de datos impulsada por la comunidad. Si la canción es muy nueva, puramente instrumental, o no ha sido documentada por los usuarios, este campo no será devuelto.'
  },
  {
    label: '¿Puedo modificar los datos antes de exportarlos?',
    content:
      'Sí. ID3 Studio actúa como un recolector base. Una vez generada la lectura en pantalla, puedes utilizar el modo de edición para ajustar, corregir o sobrescribir manualmente cualquier metadato antes de guardarlo en tu archivo.'
  },
  {
    label: '¿Cómo funcionan las opciones para guardar los metadatos?',
    content:
      'ID3 Studio te ofrece dos vías. El "Modo Directo" guarda los datos sobrescribiendo tu archivo original (el navegador te pedirá un permiso de seguridad), lo cual es ideal para no generar duplicados. Ten en cuenta que esta opción usa tecnología reciente y no aparece en todos los navegadores. Alternativamente, el "Modo Copia" procesa tu audio y genera la descarga de un archivo de audio (MP3, FLAC, M4A) completamente nuevo con el nombre formateado.'
  },
  {
    label: '¿El sistema le cambia el nombre a mi archivo de audio?',
    content:
      'Depende del modo. El "Modo Directo" modifica solo el contenido interno (las etiquetas) y mantiene intacto el nombre original, debido a que las reglas de seguridad de los navegadores impiden alterar directamente el sistema de archivos de tu equipo. En cambio, si utilizas el "Modo Copia", ID3 Studio renombrará el archivo descargado usando el formato "Artista - Título" para facilitar tu organización.'
  },
  {
    label: '¿Mis archivos de audio se suben a la nube para ser procesados?',
    content:
      'No, en absoluto. Todo el proceso de guardado de metadatos, escritura de archivos y generación de descargas ocurre 100% de manera local en tu navegador. Tus canciones nunca abandonan tu dispositivo ni pasan por nuestros servidores, garantizando total privacidad y velocidad.'
  }
])
</script>

<template>
  <section
    aria-labelledby="faq-title"
    class="flex w-full flex-col gap-8 sm:gap-12"
  >
    <div class="flex flex-col items-start gap-4">
      <span class="bg-secondary-500 ml-2 px-2 py-0.5 text-xs text-white uppercase">FAQ</span>
      <h2
        id="faq-title"
        class="text-3d-md font-silkscreen m-0 flex flex-col justify-center text-4xl leading-none font-bold text-pretty hyphens-auto text-white uppercase sm:text-5xl"
      >
        Preguntas <br />Frecuentes.
      </h2>
    </div>
    <div class="bg-default shadow-3d border-2">
      <UAccordion :items="faqItems" />
    </div>
  </section>
</template>
