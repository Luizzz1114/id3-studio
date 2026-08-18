<script setup lang="ts">
import * as v from 'valibot';

defineProps<{ loading: boolean }>();

const emit = defineEmits<{
  submit: [query: { artist: string; track: string }];
  reset: [];
}>();

const state = reactive({ artist: '', track: '' });
const formRef = useTemplateRef('form');

const schema = v.object({
  artist: v.pipe(v.string(), v.minLength(1, 'Campo requerido')),
  track: v.pipe(v.string(), v.minLength(1, 'Campo requerido'))
});

function injectAndSubmit(newArtist: string, newTrack: string) {
  state.artist = newArtist;
  state.track = newTrack;
  formRef.value?.submit();
}

defineExpose({ injectAndSubmit });

function onSubmit() {
  emit('submit', { artist: state.artist, track: state.track });
}

function onReset() {
  state.artist = '';
  state.track = '';
  emit('reset');
}
</script>

<template>
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
          @click="onReset"
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
</template>