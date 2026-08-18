<script setup lang="ts">
import * as v from 'valibot';

const state = reactive({
  track: '',
  artist: ''
});

const schema = v.object({
  artist: v.pipe(v.string(), v.minLength(1, 'Campo requerido')),
  track: v.pipe(v.string(), v.minLength(1, 'Campo requerido'))
});

const form = useTemplateRef('form');
const loading = ref<boolean>(false);
const result = ref<MetadataResponse | null >(null);
const errorMessage = ref<string | null>(null);
const lastQuery = reactive({
  artist: '',
  track: ''
});

function submitSuggestion(newArtist: string, newTrack: string) {
  state.artist = newArtist;
  state.track = newTrack;
  form.value?.submit();
}

function resetForm() {
  state.artist = '';
  state.track = '';
  result.value = null;
  errorMessage.value = null;
  lastQuery.artist = '';
  lastQuery.track = '';
  form.value?.clear();
}

async function onSubmit() {

  if (lastQuery.artist === state.artist && lastQuery.track === state.track) {
    return;
  }

  loading.value = true;
  result.value = null;
  errorMessage.value = null;
  
  try {
    const data = await $fetch('/api/metadata', {
      query: {
        artist: state.artist,
        track: state.track
      }
    });

    if (data && typeof data === 'object' && 'error' in data && data.error) {
      throw new Error(String(data.error));
    }

    result.value = data as MetadataResponse;
    
  } catch (error: any) {
    console.log(error);
    errorMessage.value = error?.message || 'No se pudo consultar la canción.'
  } finally {
    loading.value = false;
    lastQuery.artist = state.artist;
    lastQuery.track = state.track;
  }
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
            <UFormField label="Artista" name="artist" class="w-full sm:flex-1">
              <UInput v-model="state.artist" placeholder="Dua Lipa" class="min-w-36 w-full h-8" />
            </UFormField>
            <UFormField label="Canción" name="track" class="w-full sm:flex-1">
              <UInput v-model="state.track" placeholder="Whatcha Doing" class="min-w-36 w-full h-8" />
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
    <USeparator size="sm" />

    <ResultSection v-if="result" :data="result" />

    <ErrorSection
      v-else-if="errorMessage"
      :message="errorMessage"
      @retry="onSubmit"
    />

    <section v-else class="flex flex-col md:flex-row w-full gap-6 p-6 bg-white border-2 shadow-3d dark:bg-neutral-900">
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