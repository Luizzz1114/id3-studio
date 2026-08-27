<template>
  <!-- Sección funcional principal -->
  <section
    aria-labelledby="actions-title"
    class="shadow-3d bg-default flex w-full min-w-0 flex-1 flex-col gap-6 border-2 p-6 text-sm"
  >
    <header class="flex flex-col gap-4">
      <h3
        id="actions-title"
        class="text-3d-md m-0 font-['Silkscreen'] text-3xl font-bold hyphens-auto sm:text-4xl lg:text-5xl"
      >
        Usa tus metadatos
      </h3>
      <p class="m-0 text-sm">Elige cómo quieres llevarte la información de este track.</p>
    </header>

    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <!-- Tarjeta 1: Inyectar metadatos -->
      <section
        aria-labelledby="inject-title"
        class="shadow-3d--b flex flex-col gap-4 border-2 border-neutral-200 p-4 dark:border-neutral-700"
      >
        <div class="flex items-center gap-4 border-b-2 border-neutral-200 pb-4 dark:border-neutral-700">
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
              class="w-full"
            />
            <UButton
              type="submit"
              icon="i-lucide-tags"
              label="Inyectar metadatos"
              color="neutral"
              class="w-full justify-center"
            />
          </UForm>
        </div>
      </section>

      <!-- Tarjeta 2: Descargar ficha TXT -->
      <section
        aria-labelledby="download-title"
        class="shadow-3d--b flex flex-col gap-4 border-2 border-neutral-200 p-4 dark:border-neutral-700"
      >
        <div class="flex items-center gap-4 border-b-2 border-neutral-200 pb-4 dark:border-neutral-700">
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
            icon="i-lucide-download"
            color="neutral"
            variant="outline"
            class="w-full justify-center"
          />
        </div>
      </section>
    </div>
  </section>
</template>
