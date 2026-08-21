<script setup lang="ts">
const title = 'ID3 Studio'
const description = 'Herramienta para consultar metadatos de archivos de audio.'

useHead({
  title,
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: '/favicon.svg' }],
  htmlAttrs: {
    lang: 'es'
  }
})

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})
</script>

<template>
  <UApp class="bg-body">
    <UHeader :toggle="false">
      <template #left>
        <div class="flex items-center gap-4">
          <div class="shadow-3d grid size-8 p-0.5 place-items-center border-2 bg-indigo-500">
            <img src="/favicon.svg" alt="icono-id3-studio" title="Icono ID3 Studio" />
          </div>
          <h1 class="font-['Silkscreen'] text-2xl font-bold">ID3 Studio</h1>
        </div>
      </template>
      <template #right>
        <UColorModeButton />
      </template>
    </UHeader>
    <UMain class="flex flex-col items-center">
      <NuxtPage />
    </UMain>
    <footer class="flex w-full justify-center py-6">
      <div class="flex max-w-7xl flex-1 flex-col items-center justify-center gap-6 px-6">
        <USeparator size="sm" />
        <span class="text-sm">Hecho por Luis Cortesía, 2026.</span>
      </div>
    </footer>
  </UApp>
</template>
