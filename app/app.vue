<script setup lang="ts">
const title = 'ID3 Studio — Buscador y Editor de Metadatos ID3'
const description = 'Busca carátulas, letras y metadatos de audio, e inyecta tags ID3 en tus archivos de música.'

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
  ogDescription: description,
  ogType: 'website'
})
</script>

<template>
  <UApp class="bg-body">
    <UHeader :toggle="false">
      <template #left>
        <NuxtLink
          to="/"
          class="flex items-center gap-4 transition-opacity hover:opacity-90"
          aria-label="ID3 Studio - Ir a página de inicio"
        >
          <div class="shadow-3d grid size-8 place-items-center border-2 bg-indigo-500 p-0.5">
            <img
              src="/favicon.svg"
              alt=""
              aria-hidden="true"
              width="32"
              height="32"
            />
          </div>
          <span class="font-['Silkscreen'] text-2xl font-bold">ID3 Studio</span>
        </NuxtLink>
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
        <p class="text-sm">Hecho por Luis Cortesia, <time datetime="2026">2026</time>.</p>
      </div>
    </footer>
  </UApp>
</template>
