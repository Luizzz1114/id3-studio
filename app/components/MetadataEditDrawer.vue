<!-- components/MetadataEditSlideover.vue -->
<script setup lang="ts">
import { ref, watch } from 'vue'

interface Props {
  data?: Record<string, string | number | null>
}

const props = withDefaults(defineProps<Props>(), {
  data: () => ({})
})

const emit = defineEmits<{
  (e: 'update:data', value: Record<string, string | number | null>): void
}>()

const isOpen = ref(false)
const formData = ref<Record<string, any>>({})

// Clonar datos cada vez que se abre el slideover o cambian las props
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
      content: 'max-w-lg w-full p-0 bg-transparent border-0 ring-0 shadow-none'
    }"
  >
    <!-- Botón disparador -->
    <UButton
      label="Editar"
      icon="i-lucide-square-pen"
      variant="outline"
      color="neutral"
      class="cursor-pointer"
      @click="isOpen = true"
    />

    <!-- Contenedor del Slideover -->
    <template #content>
      <div class="shadow-3d bg-default flex h-full w-full flex-col border-2">
        <!-- Header -->
        <header class="flex items-center justify-between border-b-2 border-neutral-200 p-4 dark:border-neutral-800">
          <div class="flex items-center gap-2">
            <span class="size-2.5 bg-indigo-500" />
            <h4 class="m-0 font-['Silkscreen'] text-lg font-bold tracking-wider">EDITAR METADATOS</h4>
          </div>
          <UButton
            icon="i-lucide-x"
            color="neutral"
            variant="ghost"
            size="sm"
            class="cursor-pointer"
            aria-label="Cerrar panel"
            @click="isOpen = false"
          />
        </header>

        <!-- Formulario scrolleable -->
        <form
          class="custom-scrollbar flex flex-1 flex-col gap-6 overflow-y-auto p-4 sm:p-6"
          @submit.prevent="handleSave"
        >
          <!-- Grupo: Información Principal -->
          <fieldset class="m-0 flex flex-col gap-4 border-0 p-0">
            <legend class="mb-1 text-xs font-bold tracking-wider text-indigo-500 uppercase">Información Principal</legend>
            <div class="flex flex-col gap-4">
              <UFormField label="TÍTULO (TITLE)">
                <UInput
                  v-model="formData.TITLE"
                  class="w-full"
                  placeholder="Ej. Algún Día"
                />
              </UFormField>
              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <UFormField label="ARTISTA (ARTIST)">
                  <UInput
                    v-model="formData.ARTIST"
                    class="w-full"
                    placeholder="Ej. Ranna"
                  />
                </UFormField>
                <UFormField label="ÁLBUM (ALBUM)">
                  <UInput
                    v-model="formData.ALBUM"
                    class="w-full"
                    placeholder="Ej. RV"
                  />
                </UFormField>
              </div>
              <UFormField label="AÑO / FECHA (YEAR)">
                <UInput
                  v-model="formData.YEAR"
                  class="w-full"
                  placeholder="AAAA o AAAA-MM-DD"
                />
              </UFormField>
            </div>
          </fieldset>

          <USeparator size="xs" />

          <!-- Grupo: Detalles de Pista & Estilo -->
          <fieldset class="m-0 flex flex-col gap-4 border-0 p-0">
            <legend class="mb-1 text-xs font-bold tracking-wider text-indigo-500 uppercase">Detalles de Pista & Estilo</legend>
            <div class="grid grid-cols-2 gap-4">
              <UFormField label="GÉNERO">
                <UInput
                  v-model="formData.GENRE"
                  class="w-full"
                  placeholder="Ej. Latin Music"
                />
              </UFormField>
              <UFormField label="BPM">
                <UInput
                  v-model="formData.BPM"
                  class="w-full"
                  placeholder="Ej. 120"
                />
              </UFormField>
              <UFormField label="PISTA (TRACK)">
                <UInput
                  v-model="formData.TRACK"
                  class="w-full"
                  placeholder="Ej. 01/18"
                />
              </UFormField>
              <UFormField label="DISCO (DISC)">
                <UInput
                  v-model="formData.DISCNUMBER"
                  class="w-full"
                  placeholder="Ej. 1"
                />
              </UFormField>
            </div>
          </fieldset>

          <USeparator size="xs" />

          <!-- Grupo: Créditos & Sello -->
          <fieldset class="m-0 flex flex-col gap-4 border-0 p-0">
            <legend class="mb-1 text-xs font-bold tracking-wider text-indigo-500 uppercase">Créditos & Sellos</legend>
            <div class="flex flex-col gap-4">
              <UFormField label="ARTISTA DEL ÁLBUM">
                <UInput
                  v-model="formData.ALBUMARTIST"
                  class="w-full"
                />
              </UFormField>
              <UFormField label="COMPOSITOR">
                <UInput
                  v-model="formData.COMPOSER"
                  class="w-full"
                />
              </UFormField>
              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <UFormField label="DISCOGRÁFICA">
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
              </div>
              <UFormField label="COPYRIGHT">
                <UInput
                  v-model="formData.COPYRIGHT"
                  class="w-full"
                />
              </UFormField>
            </div>
          </fieldset>

          <USeparator size="xs" />

          <!-- Grupo: Multimedia & Letra -->
          <fieldset class="m-0 flex flex-col gap-4 border-0 p-0">
            <legend class="mb-1 text-xs font-bold tracking-wider text-indigo-500 uppercase">Multimedia & Letra</legend>
            <div class="flex flex-col gap-4">
              <UFormField label="URL DE PORTADA (ALBUMART)">
                <UInput
                  v-model="formData.ALBUMART"
                  class="w-full"
                  placeholder="https://..."
                />
              </UFormField>
              <UFormField label="LETRA (UNSYNCEDLYRICS)">
                <UTextarea
                  v-model="formData.UNSYNCEDLYRICS"
                  :rows="6"
                  class="w-full font-mono text-xs"
                  placeholder="Pega la letra aquí..."
                />
              </UFormField>
            </div>
          </fieldset>
        </form>

        <!-- Footer fijo -->
        <footer class="flex items-center justify-between border-t-2 border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900/40">
          <UButton
            label="Restablecer"
            icon="i-lucide-rotate-ccw"
            variant="outline"
            color="neutral"
            class="cursor-pointer text-xs"
            @click="handleReset"
          />
          <div class="flex items-center gap-2">
            <UButton
              label="Cancelar"
              variant="ghost"
              color="neutral"
              class="cursor-pointer text-xs"
              @click="isOpen = false"
            />
            <UButton
              label="Guardar cambios"
              icon="i-lucide-check"
              color="primary"
              class="cursor-pointer text-xs font-bold"
              @click="handleSave"
            />
          </div>
        </footer>
      </div>
    </template>
  </USlideover>
</template>
