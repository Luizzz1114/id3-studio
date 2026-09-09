<template>
  <section
    aria-labelledby="hero-title"
    class="flex w-full flex-col items-center justify-between gap-10 sm:gap-12 lg:flex-row lg:items-center"
  >
    <div class="flex w-full flex-1 flex-col items-start gap-6 lg:w-1/2">
      <span class="bg-primary-500 ml-2 px-2 py-0.5 text-xs text-white">DOCUMENTACIÓN TÉCNICA</span>
      <h1
        id="hero-title"
        class="m-0 flex flex-col justify-center"
      >
        <span class="text-3d font-['Silkscreen'] text-[45px] leading-none font-bold text-pretty sm:text-6xl lg:text-[76px]">Cómo funciona</span>
      </h1>
      <div class="shadow-3d bg-default mt-2 flex w-full flex-col gap-4 border-2 p-4 text-sm">
        <p>
          A partir de una consulta simple (artista y canción), nuestro motor valida, extrae y cruza información de tres bases de datos distintas en milisegundos. No dependemos de un solo catálogo;
          construimos la ficha perfecta combinando la mejor información disponible para entregar un paquete de metadatos ID3 estandarizado y listo para inyectar.
        </p>
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
    <div class="flex-1"></div>
  </section>
</template>
