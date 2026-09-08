<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Inicio',
    to: '/'
  },
  {
    label: 'Buscar track',
    to: '/app'
  },
  {
    label: 'Cómo funciona',
    to: '/como-funciona'
  }
])

const title = 'ID3 Studio | Descubre Metadatos y Etiqueta tu Música'
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
    <UHeader mode="drawer">
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
        <nav class="mr-4 hidden items-center gap-1 sm:flex">
          <NuxtLink
            v-for="item in items"
            :to="item.to"
            class="border-transparent px-3 py-1.5 text-xs font-medium transition-all duration-200 hover:bg-indigo-400/25"
            exact-active-class="bg-indigo-500 text-white hover:bg-indigo-500/80"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
        <UColorModeButton />
      </template>
      <template #body>
        <UNavigationMenu
          :items="items"
          orientation="vertical"
        />
      </template>
    </UHeader>
    <UMain class="flex flex-col items-center">
      <NuxtPage />
    </UMain>
    <footer class="flex w-full justify-center">
      <div class="bg-default flex flex-1 flex-col items-center justify-center gap-6 border-t-2 px-4 py-6 sm:px-6">
        <p class="text-sm">Hecho por Luis Cortesia, <time datetime="2026">2026</time>.</p>
      </div>
    </footer>
  </UApp>
</template>
