<script setup lang="ts">
import IconDoc from '~/components/Icons/IconDoc.vue'
import IconDownload from '~/components/Icons/IconDownload.vue'
import IconSearch from '~/components/Icons/IconSearch.vue'

const features = [
  {
    label: 'Búsqueda de canción',
    description: 'Escribe el artista y el nombre de la canción. El sistema se encargará de encontrar toda la información en las bases de datos oficiales.',
    icon: IconSearch
  },
  {
    label: 'Resultados claros',
    description: 'El sistema encuentra la carátula en alta resolución, los detalles del álbum y la letra completa para que revises todo fácilmente.',
    icon: IconDoc
  },
  {
    label: 'Guardar o Descargar',
    description: 'Guarda la información y la imagen directamente en tu archivo de audio, o descarga un reporte en texto plano si solo buscas leerlo.',
    icon: IconDownload
  }
]
</script>

<template>
  <section
    aria-labelledby="features-title"
    class="shadow-3d grid w-full grid-cols-1 gap-0.5 border-2 bg-neutral-200 md:grid-cols-2 dark:bg-neutral-700"
  >
    <div class="bg-default flex flex-col items-start justify-center gap-6 px-4 py-8 sm:px-6">
      <span class="bg-secondary-500 ml-2 px-2 py-0.5 text-xs text-white uppercase">Características</span>
      <h2
        id="features-title"
        class="text-3d-md font-silkscreen m-0 flex flex-col justify-center text-4xl leading-none font-bold text-pretty hyphens-auto text-white uppercase sm:text-5xl"
      >
        Proceso de <br />Etiquetado.
      </h2>
    </div>
    <ul class="contents">
      <li
        v-for="(feature, index) in features"
        :key="index"
        class="bg-default flex flex-col gap-4 p-4 sm:p-6"
      >
        <div class="bg-secondary-500 font-silkscreen grid size-8 shrink-0 place-items-center p-0.5 text-base text-white">
          <component
            :is="feature.icon"
            class="size-6 text-white"
          />
        </div>
        <h3 class="font-silkscreen text-xl font-bold uppercase">{{ feature.label }}</h3>
        <p class="text-sm">{{ feature.description }}</p>
      </li>
    </ul>
  </section>
</template>
