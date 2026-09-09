<template>
  <section
    aria-labelledby="hero-title"
    class="flex w-full flex-col items-center justify-between gap-10 sm:gap-12 md:flex-row md:items-center"
  >
    <div class="flex w-full flex-1 flex-col items-start gap-6 lg:w-1/2">
      <span class="bg-primary-500 ml-2 px-2 py-0.5 text-xs text-white">MOTOR DE BÚSQUEDA EN TIEMPO REAL</span>
      <h1
        id="hero-title"
        class="m-0 flex flex-col justify-center"
      >
        <span class="text-3d font-silkscreen  text-[45px] leading-none font-bold text-pretty sm:text-6xl lg:text-[76px]">Descubre metadatos y etiqueta tu música.</span>
      </h1>
      <div class="shadow-3d bg-default mt-2 flex w-full flex-col gap-4 border-2 p-4 text-sm">
        <p>¿Tu colección de música es un caos? Encuentra la información exacta de tus tracks y etiqueta tus archivos de audio fácilmente con un par de clics.</p>
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
</template>
