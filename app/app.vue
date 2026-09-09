<script setup lang="ts">
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
    <AppHeader />
    <UMain class="flex flex-col items-center">
      <NuxtPage />
    </UMain>
    <AppFooter />
  </UApp>
</template>
