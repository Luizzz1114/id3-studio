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
  </div>
</template>
