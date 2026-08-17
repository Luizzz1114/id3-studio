<script setup lang="ts">
import * as v from 'valibot';
import type { FormSubmitEvent } from '@nuxt/ui';

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

const loading = ref<boolean>(false);

async function onSubmit(event: FormSubmitEvent<Schema>) {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);

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
      <section class="flex flex-col gap-4 border-2 bg-white p-4 shadow-3d dark:bg-neutral-900 flex-1">
        <header class="flex items-center justify-between gap-4 border-b-2 pb-4">
          <span class="text-xl font-bold font-['Silkscreen'] m-0">Buscar canción</span>
          <UIcon name="i-lucide-disc-3" class="size-5 animate-spin [animation-duration:3s]" />
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
              :loading="loading"
            />
            <UButton 
              @click="resetForm"
              type="reset"
              label="Limpiar" 
              color="neutral"
              icon="i-lucide-eraser"
              class="flex justify-center h-8 cursor-pointer"
              :disabled="loading"
            />
          </div>
        </UForm>
      </section>
    </div>
    <USeparator :label="loading ? 'Consultando...' : 'Esperando consulta'" size="sm" />
    <section class="flex flex-col md:flex-row w-full gap-6 p-6 bg-white border-2 shadow-3d dark:bg-neutral-900">
      <div class="flex flex-col gap-6 flex-2">
        <span class="flex flex-col items-start m-0">
          <span class="font-['Silkscreen'] text-4xl sm:text-5xl font-bold leading-none text-3d-md">Sistema en espera...</span>
          <span class="font-['Silkscreen'] text-4xl sm:text-5xl font-bold leading-none text-3d-md">Requiere input del usuario.</span>
        </span>
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
            <UButton
              @click="submitSuggestion('Ramma', 'algún día')"
              label="Ramma - algún día"
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
  </div>
</template>