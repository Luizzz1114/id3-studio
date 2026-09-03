<script setup lang="ts">
import { metadataFormSchema, type MetadataForm } from '~~/shared/schemas/metadata.schema'

defineProps<{
  loading: boolean
}>()

const emit = defineEmits<{
  submit: [query: MetadataForm]
  reset: []
}>()

const state = reactive({
  artist: '',
  track: ''
})

const formRef = useTemplateRef('form')

const schema = metadataFormSchema

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
  formRef.value?.clear()
  emit('reset')
}
</script>

<template>
  <section
    aria-labelledby="search-form-title"
    class="shadow-3d bg-default flex flex-1 flex-col gap-4 border-2 p-4 sm:gap-6 sm:p-6"
  >
    <header class="flex items-center justify-between border-b-2 pb-4 sm:pb-6">
      <h2
        id="search-form-title"
        class="m-0 font-['Silkscreen'] text-xl font-bold"
      >
        Buscar canción
      </h2>
    </header>
    <p class="m-0 text-sm">Decodifica el ADN de cualquier pista. Ingresa las coordenadas de audio para extraer sus etiquetas.</p>
    <UForm
      ref="form"
      role="search"
      aria-label="Buscador de pistas y metadatos"
      :schema="schema"
      :state="state"
      class="flex flex-col gap-4 sm:gap-6"
      @submit.prevent="onSubmit"
    >
      <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-6">
        <UFormField
          label="Artista"
          name="artist"
          class="w-full sm:flex-1"
        >
          <UInput
            v-model="state.artist"
            placeholder="Dua Lipa"
            autocomplete="off"
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
            autocomplete="off"
            class="h-8 w-full min-w-36"
          />
        </UFormField>
      </div>
      <div class="flex items-center gap-4 sm:gap-6">
        <UButton
          type="submit"
          label="Buscar track"
          color="primary"
          icon="i-lucide-search"
          class="flex h-8 cursor-pointer justify-center"
          :loading="loading"
        />
        <UButton
          type="button"
          label="Limpiar"
          color="neutral"
          icon="i-lucide-eraser"
          class="flex h-8 cursor-pointer justify-center"
          :disabled="loading"
          @click="onReset"
        />
      </div>
    </UForm>
  </section>
</template>
