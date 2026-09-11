<script setup lang="ts">
interface Props {
  metadata?: TrackMetadataPayload
}

const props = withDefaults(defineProps<Props>(), {
  metadata: () => ({})
})

const notify = useAppToast()
const selectedFiles = ref<File[]>([])
const isInjecting = ref(false)
const isInjectingDirect = ref(false)

const isFileSystemSupported = computed(() => {
  return typeof window !== 'undefined' && 'showOpenFilePicker' in window
})

const handleDirectInjection = async () => {
  isInjectingDirect.value = true
  try {
    const [fileHandle] = await (window as any).showOpenFilePicker({
      types: [
        {
          description: 'Archivos MP3',
          accept: { 'audio/mpeg': ['.mp3'], 'audio/mp3': ['.mp3'] }
        }
      ],
      multiple: false
    })
    const file = await fileHandle.getFile()
    const { blob, coverOmitted } = await injectId3Tags(file, props.metadata)
    if (coverOmitted) {
      notify.warning('Carátula omitida', 'No se pudo inyectar la carátula al archivo.')
    }
    const writable = await fileHandle.createWritable()
    await writable.write(blob)
    await writable.close()
    notify.success('Archivo actualizado', 'Metadatos guardados en el archivo seleccionado.')
  } catch (error: any) {
    if (error.name !== 'AbortError') {
      notify.error('Error al guardar', 'No se pudo sobrescribir el archivo.')
    }
  } finally {
    isInjectingDirect.value = false
  }
}

const handleAudioInjection = async () => {
  const file = selectedFiles.value?.[0]
  if (!file) return
  isInjecting.value = true
  try {
    const { saveAs } = await import('file-saver')
    const { blob, coverOmitted } = await injectId3Tags(file, props.metadata)
    if (coverOmitted) {
      notify.warning('Carátula omitida', 'No se pudo inyectar la carátula al archivo.')
    }
    saveAs(blob, `${props.metadata.ARTIST} - ${props.metadata.TITLE}.mp3`)
    notify.success('Archivo procesado', 'El audio con los metadatos se descargó correctamente.')
  } catch (error) {
    notify.error('Error al procesar', 'No se pudieron inyectar los metadatos al archivo de audio.')
  } finally {
    isInjecting.value = false
  }
}

const handleTxtDownload = async () => {
  try {
    const { saveAs } = await import('file-saver')
    const blob = createTxtBlob(props.metadata)
    saveAs(blob, `${props.metadata.ARTIST} - ${props.metadata.TITLE}.txt`)
    notify.success('Descarga lista', 'La ficha de texto se generó con éxito.')
  } catch (error) {
    notify.error('Error', 'No se pudo generar el archivo TXT.')
  }
}
</script>

<template>
  <section
    aria-labelledby="actions-title"
    class="flex w-full min-w-0 flex-1 flex-col gap-10 text-sm sm:gap-12"
  >
    <header class="flex flex-col gap-4">
      <h3
        id="actions-title"
        class="text-3d-md font-silkscreen m-0 text-3xl leading-tight font-bold text-pretty hyphens-auto sm:text-4xl sm:hyphens-none lg:text-5xl"
      >
        Elige cómo quieres llevarte la información de este track.
      </h3>
    </header>
    <div class="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-2">
      <section
        aria-labelledby="inject-title"
        class="shadow-3d bg-default flex flex-1 flex-col gap-4 border-2 p-4 sm:gap-6 sm:p-6"
      >
        <div class="flex items-center gap-4 border-b-2 pb-4 sm:gap-6 sm:pb-6">
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
              class="font-silkscreen m-0 text-base font-bold"
            >
              Inyectar en un audio
            </h4>
            <p class="m-0 text-xs text-neutral-600 dark:text-neutral-300">Selecciona un MP3 para escribirle estos metadatos.</p>
          </div>
        </div>
        <div class="flex flex-1 flex-col justify-end gap-6">
          <div
            v-if="isFileSystemSupported"
            class="space-y-2"
          >
            <p class="text-xs font-semibold uppercase">Modo Directo</p>
            <UButton
              @click="handleDirectInjection"
              icon="i-lucide-hard-drive-download"
              label="Sobrescribir archivo original"
              color="primary"
              variant="solid"
              class="h-8 w-full cursor-pointer justify-center"
              :loading="isInjectingDirect"
              :disabled="isInjecting"
            />
          </div>

          <USeparator
            v-if="isFileSystemSupported"
            label="o"
            size="sm"
          />

          <UForm
            aria-label="Formulario para inyectar metadatos en archivo de audio"
            class="w-full space-y-4"
            @submit.prevent="handleAudioInjection"
          >
            <p
              v-if="isFileSystemSupported"
              class="text-xs font-semibold uppercase"
            >
              Modo Copia
            </p>
            <UFileUpload
              v-model="selectedFiles"
              position="inside"
              layout="list"
              size="md"
              multiple
              accept="audio/mp3,audio/mpeg"
              label="Elegir audio"
              class="w-full cursor-pointer"
            />
            <UButton
              type="submit"
              icon="i-lucide-file-cog"
              label="Procesar"
              color="primary"
              class="h-8 w-full cursor-pointer justify-center"
              :loading="isInjecting"
              :disabled="!selectedFiles?.length || isInjectingDirect || isInjecting"
            />
          </UForm>
        </div>
      </section>
      <section
        aria-labelledby="download-title"
        class="shadow-3d bg-default flex flex-1 flex-col gap-4 border-2 p-4 sm:gap-6 sm:p-6"
      >
        <div class="flex items-center gap-4 border-b-2 pb-4 sm:gap-6 sm:pb-6">
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
              class="font-silkscreen m-0 text-base font-bold"
            >
              Descargar ficha TXT
            </h4>
            <p class="m-0 text-xs text-neutral-600 dark:text-neutral-300">Guarda todos los metadatos en un archivo de texto.</p>
          </div>
        </div>
        <div class="flex flex-1 items-end">
          <UButton
            @click="handleTxtDownload"
            label="Descargar TXT"
            icon="i-lucide-arrow-down-to-line"
            color="neutral"
            variant="outline"
            class="h-8 w-full cursor-pointer justify-center"
          />
        </div>
      </section>
    </div>
  </section>
</template>
