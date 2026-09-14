<template>
  <section
    aria-labelledby="hero-title"
    class="flex w-full flex-col items-center justify-between gap-10 sm:gap-12 md:flex-row md:items-center md:gap-8 lg:gap-10"
  >
    <div class="flex w-full min-w-0 flex-1 flex-col items-start gap-10 sm:gap-12">
      <div class="flex w-full min-w-0 flex-col items-start gap-6">
        <span class="bg-primary-500 ml-2 px-2 py-0.5 text-xs text-white uppercase">Motor de Búsqueda en Tiempo Real</span>
        <h1
          id="hero-title"
          class="text-3d-responsive font-silkscreen m-0 flex flex-col justify-center text-[45px] leading-none font-bold text-pretty sm:text-5xl lg:text-6xl xl:text-7xl"
        >
          Descubre Metadatos y Etiqueta tu Música.
        </h1>
      </div>
      <div class="shadow-3d bg-default mt-2 flex w-full flex-col gap-4 border-2 p-4 text-sm sm:gap-6 sm:p-6">
        <p>¿Tienes tracks sin nombre, letra o carátula? Encuentra la información exacta de cada canción y etiqueta tus archivos de audio (MP3, FLAC, M4A) fácilmente con un par de clics.</p>
        <nav
          aria-label="Enlaces principales"
          class="m-0 flex flex-wrap gap-4 p-0 sm:gap-6"
        >
          <UButton
            to="/buscar-track"
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
        </nav>
      </div>
    </div>
    <div class="flex w-full min-w-0 flex-1 items-center justify-center">
      <img
        src="/img/computer.svg"
        alt=""
        aria-hidden="true"
        width="400"
        height="400"
        fetchpriority="high"
        decoding="async"
        class="h-auto w-full max-w-65 object-contain sm:max-w-[320px] lg:max-w-95"
      />
    </div>
  </section>
</template>
