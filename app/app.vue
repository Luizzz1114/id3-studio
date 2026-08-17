<script setup lang="ts">
const title = 'ID3 Studio'
const description = 'Herramienta para consultar metadatos de archivos de audio.'

useHead({
  title,
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.svg' }
  ],
  htmlAttrs: {
    lang: 'es'
  }
})

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
})
</script>

<template>
  <UApp class="bg-body">
    <UHeader :toggle="false">
      <template #left>
        <div class="flex items-center gap-4">
          <div class="size-8 bg-indigo-500 border-2 shadow-3d grid place-items-center">
            <UIcon name="i-lucide-turntable" class="size-5 text-white" />
          </div>
          <h1 class="font-bold text-2xl font-['Silkscreen']">ID3 Studio</h1>
        </div>
      </template>
      <template #right>
        <UColorModeButton />
      </template>
    </UHeader>
    <UMain class="flex flex-col items-center">
      <NuxtPage />
    </UMain>
    <footer class="flex justify-center p-6 w-full">
      <div class="flex flex-col items-center justify-center flex-1 gap-6 max-w-7xl">
        <USeparator size="sm" />
        <span class="text-sm">Hecho por Luis Cortesía, 2025.</span>
      </div>
    </footer>
  </UApp>
</template>