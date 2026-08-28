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
    description: 'Metadatos de audio',
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
      <h2
        id="credits-title"
        class="text-3d-md m-0 font-['Silkscreen'] text-3xl leading-tight font-bold text-pretty md:text-4xl lg:text-5xl"
      >
        Información de metadatos y letras extraída gracias a:
      </h2>
    </div>
    <ul
      aria-labelledby="credits-title"
      class="m-0 flex min-w-75 flex-1 list-none flex-col gap-6 p-0"
    >
      <li
        v-for="api in apis"
        :key="api.name"
        class="shadow-3d bg-default flex items-center gap-2.5 overflow-hidden border-2 p-2"
      >
        <div class="flex size-12 shrink-0 items-center justify-center border-2 border-neutral-200 bg-neutral-100 p-1.5 dark:border-neutral-700 dark:bg-neutral-800">
          <img
            :src="api.img"
            :alt="`Logo de ${api.name}`"
            width="40"
            height="40"
            class="h-10 w-10 object-contain"
          />
        </div>
        <div class="flex min-w-0 flex-1 flex-col">
          <span class="truncate font-['Silkscreen'] text-xl font-bold tracking-wider uppercase">
            {{ api.name }}
          </span>
          <span class="truncate text-xs text-slate-500">
            {{ api.description }}
          </span>
        </div>
        <UButton
          :to="api.url"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`Visitar sitio oficial y documentación de ${api.name}`"
          icon="i-lucide-square-arrow-out-up-right"
          color="neutral"
          variant="ghost"
          class="mr-2 ml-auto grid size-8 shrink-0 place-items-center"
        />
      </li>
    </ul>
  </div>
</template>
