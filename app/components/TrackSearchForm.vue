<script setup lang="ts">
import * as v from 'valibot'

defineProps<{
  loading: boolean
}>()

const emit = defineEmits<{
  submit: [
    query: {
      artist: string
      track: string
    }
  ]
  reset: []
}>()

const state = reactive({
  artist: '',
  track: ''
})

const formRef = useTemplateRef('form')

const schema = v.object({
  artist: v.pipe(v.string(), v.minLength(1, 'Campo requerido')),
  track: v.pipe(v.string(), v.minLength(1, 'Campo requerido'))
})

function injectAndSubmit(newArtist: string, newTrack: string) {
  state.artist = newArtist
  state.track = newTrack
  formRef.value?.submit()
}

defineExpose({ injectAndSubmit })

function onSubmit() {
  emit('submit', {
    artist: state.artist,
    track: state.track
  })
}

function onReset() {
  state.artist = ''
  state.track = ''
  emit('reset')
}
</script>

<template>
  <section class="shadow-3d bg-default flex flex-1 flex-col gap-4 border-2 p-4">
    <header class="flex items-center justify-between gap-4 border-b-2 pb-4">
      <span class="m-0 font-['Silkscreen'] text-xl font-bold">Buscar canción</span>
      <UIcon
        name="i-lucide-disc-3"
        class="size-5 animate-spin [animation-duration:3s]"
      />
    </header>
    <p class="m-0 text-sm">Decodifica el ADN de cualquier pista. Ingresa las coordenadas de audio para extraer sus etiquetas.</p>
    <UForm
      :schema="schema"
      :state="state"
      ref="form"
      @submit="onSubmit"
      class="flex flex-col gap-4"
    >
      <div class="flex flex-col gap-4 sm:flex-row sm:items-end">
        <UFormField
          label="Artista"
          name="artist"
          class="w-full sm:flex-1"
        >
          <UInput
            v-model="state.artist"
            placeholder="Dua Lipa"
            class="h-8 w-full min-w-36"
          />
        </UFormField>
        <UFormField
          label="Canción"
          name="track"
          class="w-full sm:flex-1"
        >
          <UInput
            v-model="state.track"
            placeholder="Whatcha Doing"
            class="h-8 w-full min-w-36"
          />
        </UFormField>
      </div>
      <div class="flex items-center gap-4">
        <UButton
          type="submit"
          label="Buscar track"
          color="primary"
          icon="i-lucide-search"
          class="flex h-8 cursor-pointer justify-center"
          :loading="loading"
        />
        <UButton
          @click="onReset"
          type="reset"
          label="Limpiar"
          color="neutral"
          icon="i-lucide-eraser"
          class="flex h-8 cursor-pointer justify-center"
          :disabled="loading"
        />
      </div>
    </UForm>
  </section>
</template>
