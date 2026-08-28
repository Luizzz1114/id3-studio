<template>
  <section
    aria-labelledby="actions-title"
    class="flex w-full min-w-0 flex-1 flex-col gap-10 text-sm sm:gap-12"
  >
    <header class="flex flex-col gap-4">
      <h3
        id="actions-title"
        class="text-3d-md m-0 font-['Silkscreen'] text-3xl leading-tight font-bold text-pretty hyphens-auto sm:text-4xl sm:hyphens-none lg:text-5xl"
      >
        Elige cómo quieres llevarte la información de este track.
      </h3>
    </header>
    <div class="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-2">
      <section
        aria-labelledby="inject-title"
        class="shadow-3d bg-default flex flex-1 flex-col gap-4 border-2 p-4 sm:gap-6 sm:p-6"
      >
        <div class="flex items-center gap-4 border-b-2 pb-4 sm:gap-6 sm:pb-6">
          <div
            aria-hidden="true"
            class="shadow-3d bg-primary-500 grid size-8 shrink-0 place-items-center border-2 border-neutral-700 p-0.5 text-white dark:border-neutral-200"
          >
            <UIcon
              name="i-lucide-file-audio"
              class="size-5"
            />
          </div>
          <div class="flex min-w-0 flex-col">
            <h4
              id="inject-title"
              class="m-0 font-['Silkscreen'] text-base font-bold"
            >
              Inyectar en un audio
            </h4>
            <p class="m-0 text-xs text-neutral-500 dark:text-neutral-400">Selecciona un MP3 para escribirle estos metadatos.</p>
          </div>
        </div>
        <div class="flex flex-1 items-end">
          <UForm
            aria-label="Formulario para inyectar metadatos en archivo de audio"
            class="w-full space-y-4"
          >
            <UFileUpload
              position="inside"
              layout="list"
              size="md"
              multiple
              accept="audio/*"
              label="Elegir audio"
              class="w-full cursor-pointer"
            />
            <UButton
              type="submit"
              icon="i-lucide-file-up"
              label="Procesar"
              color="primary"
              class="w-full cursor-pointer justify-center"
            />
          </UForm>
        </div>
      </section>
      <section
        aria-labelledby="download-title"
        class="shadow-3d bg-default flex flex-1 flex-col gap-4 border-2 p-4 sm:gap-6 sm:p-6"
      >
        <div class="flex items-center gap-4 border-b-2 pb-4 sm:gap-6 sm:pb-6">
          <div
            aria-hidden="true"
            class="shadow-3d bg-secondary-500 grid size-8 shrink-0 place-items-center border-2 border-neutral-700 p-0.5 text-white dark:border-neutral-200"
          >
            <UIcon
              name="i-lucide-file-text"
              class="size-5"
            />
          </div>
          <div class="flex min-w-0 flex-col">
            <h4
              id="download-title"
              class="m-0 font-['Silkscreen'] text-base font-bold"
            >
              Descargar ficha TXT
            </h4>
            <p class="m-0 text-xs text-neutral-500 dark:text-neutral-400">Guarda todos los metadatos en un archivo de texto.</p>
          </div>
        </div>
        <div class="flex flex-1 items-end">
          <UButton
            label="Descargar TXT"
            icon="i-lucide-arrow-down-to-line"
            color="neutral"
            variant="outline"
            class="w-full cursor-pointer justify-center"
          />
        </div>
      </section>
    </div>
  </section>
</template>
