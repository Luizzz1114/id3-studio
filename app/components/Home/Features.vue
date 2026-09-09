<script setup lang="ts">
import IconDoc from '~/components/icons/IconDoc.vue'
import IconDownload from '~/components/icons/IconDownload.vue'
import IconSearch from '~/components/icons/IconSearch.vue'

const features = [
  {
    label: 'Consulta de datos',
    description: 'Escribe el artista y el nombre de la canción. El sistema se encargará de consultar la información en las bases de datos de fuentes oficiales.',
    icon: IconSearch
  },
  {
    label: 'Lectura y Organización',
    description: 'El sistema extrae la carátula en alta resolución, los metadatos y la letra completa. Toda la estructura de datos expuesta en una lectura limpia.',
    icon: IconDoc
  },
  {
    label: 'Inyeccción o Descarga',
    description: 'Aplica las etiquetas ID3 y la imagen directamente al archivo de audio, o exporta un reporte en texto plano para documentar.',
    icon: IconDownload
  }
]
</script>

<template>
  <section
    aria-labelledby="features-title"
    class="w-full"
  >
    <div class="shadow-3d grid grid-cols-1 gap-0.5 border-2 bg-neutral-200 md:grid-cols-2 dark:bg-neutral-700">
      <div class="bg-default flex flex-col items-start justify-center gap-6 px-4 py-8 sm:px-6">
        <span class="bg-secondary-500 ml-1 px-2 py-0.5 text-xs text-white">MECÁNICA DEL SISTEMA</span>
        <h2
          id="features-title"
          class="m-0 flex flex-col justify-center"
        >
          <span class="text-3d font-silkscreen  text-4xl leading-none font-bold text-white uppercase sm:text-5xl">
            PROCESO DE <br />
            ETIQUETADO.
          </span>
        </h2>
      </div>
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="bg-default flex flex-col gap-4 p-4 sm:p-6"
      >
        <div class="bg-secondary-500 grid size-8 shrink-0 place-items-center p-0.5 font-silkscreen  text-base text-white">
          <component
            :is="feature.icon"
            class="size-6 text-white"
          />
        </div>
        <h3 class="font-silkscreen  text-xl font-bold uppercase">{{ feature.label }}</h3>
        <p class="text-sm text-neutral-600 dark:text-neutral-300">{{ feature.description }}</p>
      </div>
    </div>
  </section>
</template>
