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
</script>

<template>
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
        <span class="font-silkscreen  text-2xl font-bold">ID3 Studio</span>
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
</template>
