<script setup lang="ts">
import * as v from 'valibot';
import type { FormSubmitEvent } from '@nuxt/ui';

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

const state = reactive({
  songTitle: '',
  artistName: ''
});

const schema = v.object({
  artistName: v.pipe(v.string(), v.minLength(1, 'Campo requerido')),
  songTitle: v.pipe(v.string(), v.minLength(1, 'Campo requerido'))
});

type Schema = v.InferOutput<typeof schema>;
const form = useTemplateRef('form');

function submitSuggestion(newArtistName: string, newSongTitle: string) {
  state.artistName = newArtistName;
  state.songTitle = newSongTitle;
  form.value?.submit();
}

function resetForm() {
  state.artistName = '';
  state.songTitle = '';
  form.value?.clear();
}

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log('Datos enviados:', event.data);
}
</script>

<template>
  <div class="flex flex-col gap-12 px-6 py-10 max-w-7xl">
    <div class="mx-auto flex flex-wrap w-full items-start justify-between lg:items-center gap-12">
      <div class="flex flex-col justify-center flex-1 m-0">
        <span class="font-['Silkscreen'] text-[45px] font-bold leading-none text-3d sm:text-6xl md:text-[76px]">Busca,</span>
        <span class="font-['Silkscreen'] text-[45px] font-bold leading-none text-3d sm:text-6xl md:text-[76px]">Descubre,</span>
        <span class="font-['Silkscreen'] text-[45px] font-bold leading-none text-3d sm:text-6xl md:text-[76px]">Etiqueta.</span>
      </div>
      
      <section aria-labelledby="form-heading" class="flex flex-col gap-4 border-2 bg-white p-4 shadow-3d dark:bg-neutral-900 flex-1">
        <header class="flex items-center justify-between gap-4 border-b-2 pb-4">
          <h2 id="form-heading" class="text-lg font-bold font-['Silkscreen'] m-0">Buscar canción</h2>
          <UIcon name="i-lucide-disc-3" class="size-5 animate-spin [animation-duration:3s]" aria-hidden="true" />
        </header>
        <p class="text-sm m-0">Decodifica el ADN de cualquier pista. Ingresa las coordenadas de audio para extraer sus etiquetas.</p>
        <UForm :schema="schema" :state="state" ref="form" @submit="onSubmit" class="flex flex-col gap-4">
          <div class="flex flex-col sm:flex-row sm:items-end gap-4">
            <UFormField label="Artista" name="artistName" class="w-full sm:flex-1">
              <UInput v-model="state.artistName" placeholder="Dua Lipa" class="min-w-36 w-full h-8" />
            </UFormField>
            <UFormField label="Canción" name="songTitle" class="w-full sm:flex-1">
              <UInput v-model="state.songTitle" placeholder="Whatcha Doing" class="min-w-36 w-full h-8" />
            </UFormField>
          </div>
          <div class="flex items-center gap-4">
            <UButton 
              type="submit"
              label="Buscar track" 
              color="primary"
              icon="i-lucide-search"
              class="flex justify-center h-8 cursor-pointer"
            />
            <UButton 
              @click="resetForm"
              type="reset"
              label="Limpiar" 
              color="neutral"
              icon="i-lucide-eraser"
              class="flex justify-center h-8 cursor-pointer"
            />
          </div>
        </UForm>
      </section>
    </div>

    <USeparator label="Esperando consulta" size="sm" />

    <section aria-labelledby="waiting-heading" class="flex flex-col md:flex-row w-full gap-6 p-6 bg-white border-2 shadow-3d dark:bg-neutral-900">
      <div class="flex flex-col gap-6 flex-2">
        <h2 id="waiting-heading" class="flex flex-col m-0">
          <span class="font-['Silkscreen'] text-4xl sm:text-5xl font-bold leading-none text-3d-md">Sistema en espera...</span>
          <span class="font-['Silkscreen'] text-4xl sm:text-5xl font-bold leading-none text-3d-md">Requiere input del usuario.</span>
        </h2>
        <div class="flex flex-col gap-6">      
          <p class="text-sm m-0">Para iniciar la consulta, proporcione los valores requeridos en los campos superiores. El sistema se encargará de interceptar la pista y formatear la información encontrada.</p>
          <div class="flex gap-4 flex-wrap">
            <UButton
              @click="submitSuggestion('Dua Lipa', 'Whatcha Doing')"
              label="Dua Lipa - Whatcha Doing"
              trailing-icon="i-lucide-arrow-up-right"
              class="flex justify-center sm:w-auto h-8 cursor-pointer"
            />
            <UButton
              @click="submitSuggestion('Trueno', 'X UNAS LLANTAS')"
              label="Trueno - X UNAS LLANTAS"
              trailing-icon="i-lucide-arrow-up-right"
              class="flex justify-center sm:w-auto h-8 cursor-pointer"
            />
            <UButton
              @click="submitSuggestion('Djo', 'Link')"
              label="Djo - Link"
              trailing-icon="i-lucide-arrow-up-right"
              class="flex justify-center sm:w-auto h-8 cursor-pointer"
            />
            <UButton
              @click="submitSuggestion('Balu Brigada', 'Sideways')"
              label="Balu Brigada - Sideways"
              trailing-icon="i-lucide-arrow-up-right"
              class="flex justify-center sm:w-auto h-8 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center flex-1">
        <img
          src="../assets/img/vinilo.svg"
          alt="" 
          aria-hidden="true" 
          class="max-w-65 sm:max-w-xs md:max-w-sm lg:max-w-80"
        >
      </div>
    </section>


    <section aria-labelledby="error-heading" class="flex flex-col md:flex-row w-full gap-6 p-6 bg-white border-2 shadow-3d dark:bg-neutral-900">
      <div class="flex flex-col gap-6 flex-2">
        <header class="flex flex-col justify-center">
          <h2 id="error-heading" class="font-['Silkscreen'] text-4xl sm:text-5xl font-bold leading-none text-3d-md m-0">Algo salió mal...</h2>
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

    <article aria-labelledby="result-heading" class="flex flex-col w-full flex-1 gap-6 p-6 text-sm bg-white border-2 shadow-3d dark:bg-neutral-900">
      <div class="flex flex-col sm:flex-row w-full gap-6">
        <div class="flex flex-col gap-4 w-full max-w-72 shrink-0">
          <figure class="w-full aspect-square border-2 border-neutral-900 shadow-3d relative m-0">
            <span class="absolute top-2 inset-s-2 text-xs bg-indigo-500 text-white px-1.5 py-0.5 z-10 font-medium">
              ALBUM COVER
            </span>
            <img 
              src="../assets/img/cover.jpg" 
              alt="Portada del álbum Radical Optimism de Dua Lipa" 
              class="w-full h-full object-cover block"
            >
          </figure>
          <div class="flex items-center gap-4 w-full bg-neutral-100 p-1.5 border-2 border-neutral-200">
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
          <h2 id="form-heading" class="text-2xl font-bold font-['Silkscreen'] m-0">Metadatos</h2>
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
  </div>
</template>