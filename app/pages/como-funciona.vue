<script setup lang="ts"></script>

<template>
  <div class="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 pt-10 pb-20 sm:gap-16 sm:px-6 lg:gap-20 lg:px-8 lg:pt-16 lg:pb-28">
    <section
      aria-labelledby="hero-title"
      class="flex w-full flex-col items-center justify-between gap-10 sm:gap-12 lg:flex-row lg:items-center"
    >
      <div class="flex w-full flex-1 flex-col items-start gap-6 lg:w-1/2">
        <span class="bg-primary-500 ml-2 px-2 py-0.5 text-xs text-white">FAQ</span>
        <h1
          id="hero-title"
          class="m-0 flex flex-col justify-center"
        >
          <span class="text-3d font-['Silkscreen'] text-[45px] leading-none font-bold text-pretty sm:text-6xl md:text-[76px]">Cómo funciona</span>
        </h1>
        <div class="shadow-3d bg-default mt-2 flex w-full flex-col gap-4 border-2 p-4 text-sm">
          <p>ID3 Studio convierte una búsqueda mínima en metadatos listos para usar. A continuación, te explicamos el recorrido del motor y la estructura de datos que obtienes como resultado.</p>
          <div class="m-0 flex flex-wrap gap-4 p-0">
            <UButton
              to="/app"
              label="Probar una búsqueda"
              trailing-icon="i-lucide-arrow-up-right"
              class="flex h-8 cursor-pointer justify-center sm:w-auto"
            />
          </div>
        </div>
      </div>
      <div class="flex-1">

      </div>
    </section>
    <USeparator size="sm" />
  </div>
</template>
