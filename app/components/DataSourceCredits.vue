<script setup lang="ts">
const apis = ref([
  {
    name: 'Deezer API',
    description: 'Metadatos de audio',
    img: '/img/deezer-logo.png',
    url: 'https://developers.deezer.com/api'
  },
  {
    name: 'iTunes API',
    description: 'Metadatos de Audio',
    img: '/img/itunes-logo.png',
    url: 'https://performance-partners.apple.com/search-api'
  },
  {
    name: 'LRCLIB',
    description: 'Letras',
    img: '/img/lrclib-logo.png',
    url: 'https://lrclib.net/'
  }
])
</script>

<template>
  <div class="mx-auto flex w-full flex-wrap items-start justify-between gap-12 lg:items-center">
    <div class="min-w-75 flex-1">
      <p class="text-3d-md m-0 font-['Silkscreen'] text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">Información de metadatos y letras extraída gracias a:</p>
    </div>
    <div class="flex min-w-75 flex-1 flex-col gap-6">
      <div
        v-for="api in apis"
        :key="api.name"
        class="shadow-3d bg-default flex items-center gap-6 border-2 p-2"
      >
        <div class="flex size-12 shrink-0 items-center justify-center border-2 border-neutral-200 bg-neutral-100 p-1.5 dark:border-neutral-700 dark:bg-neutral-800">
          <img
            :src="api.img"
            :alt="api.name + ' Logo'"
            class="h-10 w-10 object-contain"
          />
        </div>
        <div class="flex flex-col">
          <span class="font-['Silkscreen'] text-xl font-bold tracking-wider uppercase">{{ api.name }}</span>
          <span class="text-xs text-slate-500">{{ api.description }}</span>
        </div>
        <UButton
          :to="api.url"
          target="_blank"
          icon="i-lucide-square-arrow-out-up-right"
          color="neutral"
          variant="ghost"
          class="ml-auto mr-2 grid size-8 shrink-0 place-items-center"
        />
      </div>
    </div>
  </div>
</template>
