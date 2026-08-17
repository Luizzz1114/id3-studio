<template>
  <section class="flex flex-col md:flex-row w-full gap-6 p-6 bg-white border-2 shadow-3d dark:bg-neutral-900">
    <div class="flex flex-col gap-6 flex-2">
      <header class="flex flex-col justify-center">
        <span class="font-['Silkscreen'] text-4xl sm:text-5xl font-bold leading-none text-3d-md m-0">Algo salió mal...</span>
      </header>
      <div class="flex flex-col gap-6">      
        <p class="text-sm m-0">Ocurrió un error al realizar la consulta, compruebe los datos e intente nuevamente.</p>
        <div class="flex gap-4 flex-wrap">
          <UButton
            label="Reintentar"
            color="secondary"
            icon="i-lucide-rotate-ccw"
            class="flex justify-center sm:w-auto h-8 cursor-pointer"
          />
        </div>
      </div>
    </div>
    <div class="flex-1 hidden sm:block"></div>
  </section>
</template>