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
  <div class="flex w-full max-w-7xl min-w-0 flex-col gap-10 px-4 py-8 sm:gap-12 sm:px-6 sm:py-12">
    <section
      aria-labelledby="hero-title"
      class="flex w-full flex-col items-center justify-between gap-10 sm:gap-12 lg:flex-row lg:items-center"
    >
      <div class="flex w-full flex-1 flex-col items-start gap-6 lg:w-1/2">
        <span class="bg-primary-500 ml-2 px-2 py-0.5 text-xs text-white">ID3 Studio v1.0</span>
        <h1
          id="hero-title"
          class="m-0 flex flex-col justify-center"
        >
          <span class="text-3d font-['Silkscreen'] text-[45px] leading-none font-bold text-pretty sm:text-6xl md:text-[76px]"> Descubre metadatos y etiqueta tu música. </span>
        </h1>
        <div class="shadow-3d bg-default mt-2 flex w-full flex-col gap-4 border-2 p-4 text-sm">
          <p>Encuentra la información correcta, busca las letras y etiqueta tus archivos musicales fácilmente con esta herramienta web gratuita.</p>
          <div class="m-0 flex flex-wrap gap-4 p-0">
            <UButton
              to="/app"
              label="Buscar track"
              trailing-icon="i-lucide-arrow-up-right"
              class="flex h-8 cursor-pointer justify-center sm:w-auto"
            />
            <UButton
              to="/como-funciona"
              label="Cómo funciona"
              color="neutral"
              trailing-icon="i-lucide-arrow-up-right"
              class="flex h-8 cursor-pointer justify-center sm:w-auto"
            />
          </div>
        </div>
      </div>
      <div class="flex w-full flex-1 items-center justify-center lg:w-1/2">
        <img
          src="/img/pc-hero.svg"
          alt=""
          aria-hidden="true"
          class="h-auto w-full max-w-65 object-contain sm:max-w-[320px] lg:max-w-95"
        />
      </div>
    </section>
    <USeparator size="sm" />
    <section
      aria-labelledby="features-title"
      class="w-full"
    >
      <div class="shadow-3d grid grid-cols-1 gap-0.5 border-2 bg-neutral-200 md:grid-cols-2 dark:bg-neutral-700">
        <div class="bg-default flex flex-col items-start justify-center gap-2 px-4 py-6 sm:px-6">
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
  </div>
</template>
