<script setup lang="ts">
interface Props {
  data?: TrackMetadataPayload
}

const props = withDefaults(defineProps<Props>(), {
  data: () => ({})
})

const emit = defineEmits<{
  (e: 'update:data', value: TrackMetadataPayload): void
}>()

const isOpen = ref(false)
const formData = ref<TrackMetadataPayload>({})

watch(
  () => [props.data, isOpen.value],
  () => {
    formData.value = { ...props.data }
  },
  { deep: true, immediate: true }
)

const handleReset = () => {
  formData.value = { ...props.data }
}

const handleSave = () => {
  emit('update:data', { ...formData.value })
  isOpen.value = false
}
</script>

<template>
  <USlideover
    v-model:open="isOpen"
    side="right"
    inset
    :ui="{
      content: 'max-w-lg'
    }"
  >
    <UButton
      label="Editar"
      icon="i-lucide-square-pen"
      variant="outline"
      color="neutral"
      class="cursor-pointer"
      @click="isOpen = true"
    />
    <template #content>
      <div class="shadow-3d bg-default flex h-full w-full max-w-lg flex-col gap-6 border-2 p-4 sm:p-6">
        <header class="flex items-center justify-between border-b-2 pb-4 sm:pb-6">
          <div class="flex items-center gap-2">
            <h2 class="m-0 font-['Silkscreen'] text-xl font-bold">Editar metadatos</h2>
          </div>
          <UButton
            icon="i-lucide-x"
            color="neutral"
            variant="ghost"
            size="md"
            class="cursor-pointer"
            aria-label="Cerrar panel"
            @click="isOpen = false"
          />
        </header>
        <UForm class="custom-scrollbar flex flex-1 flex-col gap-6 overflow-y-auto pr-4 sm:pr-6">
          <fieldset class="m-0 flex flex-col border-0 p-0 pt-4">
            <legend class="mb-1 text-xs font-bold text-indigo-500 uppercase">Información Principal</legend>
            <div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              <UFormField
                label="TITLE"
                class="col-span-1 sm:col-span-2"
              >
                <UInput
                  v-model="formData.TITLE"
                  class="w-full"
                />
              </UFormField>

              <UFormField label="ARTIST">
                <UInput
                  v-model="formData.ARTIST"
                  class="w-full"
                />
              </UFormField>
              <UFormField label="ALBUM">
                <UInput
                  v-model="formData.ALBUM"
                  class="w-full"
                />
              </UFormField>
              <UFormField label="YEAR">
                <UInput
                  v-model="formData.YEAR"
                  class="w-full"
                />
              </UFormField>
            </div>
          </fieldset>
          <USeparator size="sm" />
          <fieldset class="m-0 flex flex-col border-0 p-0 pt-4">
            <legend class="mb-1 text-xs font-bold text-indigo-500 uppercase">Detalles de pista y estilo</legend>
            <div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              <UFormField label="GENRE">
                <UInput
                  v-model="formData.GENRE"
                  class="w-full"
                />
              </UFormField>
              <UFormField label="BPM">
                <UInput
                  v-model="formData.BPM"
                  class="w-full"
                />
              </UFormField>
              <UFormField label="LENGTH">
                <UInput
                  v-model="formData.LENGTH"
                  class="w-full"
                />
              </UFormField>
              <UFormField label="TRACK">
                <UInput
                  v-model="formData.TRACK"
                  class="w-full"
                />
              </UFormField>
              <UFormField label="DISCNUMBER">
                <UInput
                  v-model="formData.DISCNUMBER"
                  class="w-full"
                />
              </UFormField>
            </div>
          </fieldset>
          <USeparator size="sm" />
          <fieldset class="m-0 flex flex-col border-0 p-0 pt-4">
            <legend class="mb-1 text-xs font-bold text-indigo-500 uppercase">Créditos y sello</legend>
            <div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              <UFormField
                label="ALBUMARTIST"
                class="col-span-1 sm:col-span-2"
              >
                <UInput
                  v-model="formData.ALBUMARTIST"
                  class="w-full"
                />
              </UFormField>
              <UFormField label="COMPOSER">
                <UInput
                  v-model="formData.COMPOSER"
                  class="w-full"
                />
              </UFormField>
              <UFormField label="LABEL">
                <UInput
                  v-model="formData.LABEL"
                  class="w-full"
                />
              </UFormField>
              <UFormField label="ISRC">
                <UInput
                  v-model="formData.ISRC"
                  class="w-full"
                />
              </UFormField>
              <UFormField label="COPYRIGHT">
                <UInput
                  v-model="formData.COPYRIGHT"
                  class="w-full"
                />
              </UFormField>
            </div>
          </fieldset>
          <USeparator size="sm" />
          <fieldset class="m-0 flex flex-col border-0 p-0 pt-4">
            <legend class="mb-1 text-xs font-bold text-indigo-500 uppercase">Letra</legend>
            <div class="flex flex-col gap-4">
              <UFormField label="UNSYNCEDLYRICS">
                <UTextarea
                  v-model="formData.UNSYNCEDLYRICS"
                  autoresize
                  class="mt-1 w-full"
                />
              </UFormField>
            </div>
          </fieldset>
        </UForm>
        <footer class="flex items-center justify-between gap-2 border-t-2 border-neutral-200 pt-4 sm:pt-6 dark:border-neutral-800">
          <UButton
            icon="i-lucide-rotate-ccw"
            variant="outline"
            color="neutral"
            class="shrink-0 cursor-pointer"
            aria-label="Restablecer metadatos"
            @click="handleReset"
          >
            <span class="hidden sm:inline">Restablecer</span>
          </UButton>
          <div class="flex shrink-0 items-center gap-4">
            <UButton
              label="Cancelar"
              variant="ghost"
              color="neutral"
              class="cursor-pointer"
              @click="isOpen = false"
            />
            <UButton
              label="Guardar"
              icon="i-lucide-check"
              color="primary"
              class="cursor-pointer"
              @click="handleSave"
            />
          </div>
        </footer>
      </div>
    </template>
  </USlideover>
</template>
