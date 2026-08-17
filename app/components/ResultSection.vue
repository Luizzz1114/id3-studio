<script setup lang="ts">
const metadatos = ref([
  { label: 'ALBUM', value: 'Radical Optimism' },
  { label: 'ALBUMARTIST', value: 'Dua Lipa' },
  { label: 'ARTIST', value: 'Dua Lipa' },
  { label: 'BPM', value: '112' },
  { label: 'COMPOSER', value: 'Dua Lipa, Caroline Ailin, Kevin Parker & Danny L Harle' },
  { label: 'COPYRINGHT', value: '© 2024 Warner Music UK Limited' },
  { label: 'DISCNUMBER', value: '1/5' },
  { label: 'GENRE', value: 'Pop' },
  { label: 'ISRC', value: 'GBAHT2300012' },
  { label: 'LABEL', value: 'Warner Records' },
  { label: 'LENGHT', value: '198000' },
  { label: 'TRACK', value: '05/11' },
  { label: 'YEAR', value: '2024-05-03' },
]);
</script>

<template>
  <article aria-labelledby="result-heading" class="flex flex-col w-full flex-1 gap-6 p-6 text-sm bg-white border-2 shadow-3d dark:bg-neutral-900">
    <div class="flex flex-col sm:flex-row w-full gap-6">
      <div class="flex flex-col gap-4 w-full max-w-72 shrink-0">
        <figure class="w-full aspect-square border-2 border-neutral-900 shadow-3d relative m-0 dark:border-neutral-200">
          <span class="absolute top-2 inset-s-2 text-xs bg-indigo-500 text-white px-1.5 py-0.5 z-10 font-medium">
            ALBUM COVER
          </span>
          <img 
            src="../assets/img/cover.jpg" 
            alt="Portada del álbum Radical Optimism de Dua Lipa" 
            class="w-full h-full object-cover block"
          >
        </figure>
        <div class="flex items-center gap-4 w-full bg-neutral-100 p-1.5 border-2 border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800">
          <div class="flex flex-col flex-1 min-w-0">
            <span class="text-xs text-neutral-500 uppercase dark:text-neutral-400">Fuente de portada</span>
            <span class="text-xs truncate">url.com/ashjashjhjashjhjhjsahjaasasasasas</span>
          </div>
          <UButton
            to="https://is1-ssl.mzstatic.com/imag..."
            target="_blank"
            icon="i-lucide-arrow-up-right"
            color="neutral"
            variant="outline"
            class="shrink-0 size-8 grid place-items-center"
            aria-label="Abrir enlace de la fuente original"
          />
        </div>
      </div>
      <div class="flex flex-col gap-4 flex-2">
        <span id="result-heading" class="font-['Silkscreen'] text-4xl sm:text-5xl font-bold leading-none text-3d-md m-0">
          Whatcha Doing (Live From Mexico)
        </span>
        <dl class="flex flex-col gap-4 m-0">
          <div class="flex flex-col pb-2 border-b-2 border-neutral-200 dark:border-neutral-800">
            <dt class="text-xs text-neutral-500 uppercase dark:text-neutral-400">Artista</dt>
            <dd class="m-0">Dua Lipa</dd>
          </div>
          <div class="flex flex-col pb-2 border-b-2 border-neutral-200 dark:border-neutral-800">
            <dt class="text-xs text-neutral-500 uppercase dark:text-neutral-400">Álbum</dt>
            <dd class="m-0">Radical Optimism</dd>
          </div>
          <div class="flex flex-col pb-2 border-b-2 border-neutral-200 dark:border-neutral-800">
            <dt class="text-xs text-neutral-500 uppercase dark:text-neutral-400">Año</dt>
            <dd class="m-0">2024</dd>
          </div>
        </dl>
      </div>
    </div>
    <USeparator size="sm" class="mt-4 mb-2" />
    <section aria-labelledby="form-heading" class="flex flex-col gap-6">
      <header class="flex items-center justify-between gap-4 pb-2">
        <h2 id="form-heading" class="text-xl font-bold font-['Silkscreen'] m-0">Metadatos</h2>
      </header>
      <dl class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
        <div 
          v-for="(campo, index) in metadatos" 
          :key="index"
          class="flex flex-col pb-2 min-w-0 border-b-2 border-neutral-200 dark:border-neutral-800"
        >
          <dt class="text-xs text-neutral-500 uppercase dark:text-neutral-400">{{ campo.label }}</dt>
          <dd class="text-sm m-0 wrap-break-word">{{ campo.value }}</dd>
        </div>
      </dl>
    </section>
  </article>
</template>