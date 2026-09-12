<template>
  <section
    aria-labelledby="hero-title"
    class="flex w-full flex-col items-center justify-between gap-10 sm:gap-12 md:flex-row md:items-center"
  >
    <div class="flex w-full flex-1 flex-col items-start gap-6 lg:w-1/2">
      <span class="bg-primary-500 ml-2 px-2 py-0.5 text-xs text-white uppercase">Documentación Técnica</span>
      <h1
        id="hero-title"
        class="text-3d font-silkscreen m-0 flex flex-col justify-center text-[45px] leading-none font-bold text-pretty sm:text-6xl lg:text-[76px]"
      >
        Cómo Funciona.
      </h1>
      <div class="shadow-3d bg-default mt-2 flex w-full flex-col gap-4 border-2 p-4 text-sm sm:gap-6 sm:p-6">
        <p>
          A partir de una consulta simple (artista y canción), nuestro motor valida, extrae y cruza información de tres bases de datos distintas en milisegundos. No dependemos de un solo catálogo;
          construimos la ficha perfecta combinando la mejor información disponible para entregar un paquete de metadatos ID3 estandarizado y listo para inyectar.
        </p>
        <div class="m-0 flex flex-wrap gap-4 sm:gap-6 p-0">
          <UButton
            to="/buscar-track"
            label="Probar una búsqueda"
            trailing-icon="i-lucide-arrow-up-right"
            class="flex h-8 cursor-pointer justify-center sm:w-auto"
          />
        </div>
      </div>
    </div>
    <div class="flex w-full flex-1 items-center justify-center lg:w-1/2">
      <img
        src="/img/boombox.svg"
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
