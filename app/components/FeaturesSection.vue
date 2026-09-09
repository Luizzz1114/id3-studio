<script setup lang="ts">
import IconDoc from '~/components/icons/IconDoc.vue'
import IconDownload from '~/components/icons/IconDownload.vue'
import IconSearch from '~/components/icons/IconSearch.vue'

const features = [
  {
    label: 'Busca sin ruido',
    description: 'Escribe el artista y la canción. El sistema se encarga de interceptar el track cruzando datos con fuentes oficiales.',
    icon: IconSearch
  },
  {
    label: 'Lee cada capa',
    description: 'Extrae la carátula en alta resolución, género, año y la letra completa. Toda la estructura de datos expuesta en una lectura limpia.',
    icon: IconDoc
  },
  {
    label: 'Llévate el dato',
    description: 'Descarga un reporte completo en TXT para documentar, o inyecta las etiquetas ID3 y la portada directamente en tus archivos de audio.',
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
      <div class="bg-default flex flex-col items-start justify-center gap-4 px-4 py-6 sm:px-6">
        <span class="bg-secondary-500 ml-1 px-2 py-0.5 text-xs text-white">FLUJO DEL SISTEMA</span>
        <h2
          id="features-title"
          class="m-0 flex flex-col justify-center"
        >
          <span class="text-3d font-['Silkscreen'] text-4xl leading-none font-bold text-white uppercase sm:text-5xl">
            Del QUERY <br />
            a la etiqueta.
          </span>
        </h2>
      </div>
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="bg-default flex flex-col gap-4 p-4 sm:p-6"
      >
        <div class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <span class="font-bold">0{{ index + 1 }}.</span>
          <component
            :is="feature.icon"
            class="text-secondary-500 size-8"
          />
        </div>
        <h3 class="font-['Silkscreen'] text-xl font-bold uppercase">{{ feature.label }}</h3>
        <p class="text-xs text-neutral-600 dark:text-neutral-300">{{ feature.description }}</p>
      </div>
    </div>
  </section>
</template>
