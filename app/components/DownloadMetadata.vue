<script setup lang="ts">
import { ID3Writer } from 'browser-id3-writer'

interface Props {
  metadata?: TrackMetadataPayload
}

const props = withDefaults(defineProps<Props>(), {
  metadata: () => ({})
})

const notify = useAppToast()

const selectedFiles = ref<File[]>([])
const isInjecting = ref(false)

const injectAudioMetadata = async () => {
  const file = selectedFiles.value?.[0]
  if (!file) return
  isInjecting.value = true
  try {
    const { saveAs } = await import('file-saver')
    const arrayBuffer = await file.arrayBuffer()
    const writer = new ID3Writer(arrayBuffer)
    const m = props.metadata

    writer.setFrame('TIT2', String(m.TITLE))
    writer.setFrame('TPE1', [m.ARTIST || ''])
    writer.setFrame('TALB', String(m.ALBUM))
    writer.setFrame('TPE2', String(m.ALBUMARTIST))
    writer.setFrame('TCOM', [m.COMPOSER || ''])
    writer.setFrame('TCON', [m.GENRE || ''])
    writer.setFrame('TPUB', String(m.LABEL))
    writer.setFrame('TCOP', String(m.COPYRIGHT))
    writer.setFrame('TSRC', String(m.ISRC))
    writer.setFrame('TRCK', String(m.TRACK))
    writer.setFrame('TPOS', String(m.DISCNUMBER))

    if (m.BPM) {
      const bpmNumber = Number.parseInt(String(m.BPM), 10)
      if (!Number.isNaN(bpmNumber)) {
        writer.setFrame('TBPM', bpmNumber)
      }
    }

    if (m.LENGTH) {
      const lengthMs = Number.parseInt(String(m.LENGTH), 10)
      if (!Number.isNaN(lengthMs)) {
        writer.setFrame('TLEN', lengthMs)
      }
    }

    if (m.YEAR) {
      const [yearStr, monthStr, dayStr] = String(m.YEAR).split('-')
      const year = Number.parseInt(String(yearStr), 10)
      if (!Number.isNaN(year)) {
        writer.setFrame('TYER', year)
      }
      if (dayStr && monthStr) {
        writer.setFrame('TDAT', `${dayStr}${monthStr}`)
      }
    }

    const lyricsContent = m.UNSYNCEDLYRICS
    if (lyricsContent && lyricsContent !== 'Letra no disponible') {
      writer.setFrame('USLT', {
        description: '',
        lyrics: String(lyricsContent),
        language: 'xxx'
      })
    }

    if (m.ALBUMART) {
      try {
        const coverRes = await fetch(`/api/cover?url=${encodeURIComponent(m.ALBUMART)}`)
        if (coverRes.ok) {
          const coverBuffer = await coverRes.arrayBuffer()
          writer.setFrame('APIC', {
            type: 3,
            data: coverBuffer,
            description: ''
          })
        } else {
          notify.warning('Advertencia', 'No se pudo inyectar la carátula desde la URL.')
        }
      } catch (coverErr) {
        notify.warning('Carátula omitida', 'Ocurrió un problema procesando la imagen.')
      }
    }

    writer.addTag()
    const finalBlob = writer.getBlob()
    const finalTitle = m.TITLE
    const finalArtist = m.ARTIST
    saveAs(finalBlob, `${finalArtist} - ${finalTitle}.mp3`)
    notify.success('Archivo procesado', 'El audio con los metadatos se descargó correctamente.')
  } catch (error) {
    notify.error('Error al procesar', 'No se pudieron inyectar los metadatos al archivo de audio.')
  } finally {
    isInjecting.value = false
  }
}

const downloadTxt = async () => {
  try {
    const { saveAs } = await import('file-saver')
    const m = props.metadata
    const metaRows = Object.entries(m)
      .filter(([_, value]) => value != null && value !== '')
      .map(([key, value]) => `${key}: ${value}`)
    const content = metaRows.join('\n\n')
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
    saveAs(blob, `${m.ARTIST} - ${m.TITLE}.txt`)
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
        class="text-3d-md m-0 font-['Silkscreen'] text-3xl leading-tight font-bold text-pretty hyphens-auto sm:text-4xl sm:hyphens-none lg:text-5xl"
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
              class="m-0 font-['Silkscreen'] text-base font-bold"
            >
              Inyectar en un audio
            </h4>
            <p class="m-0 text-xs text-neutral-500 dark:text-neutral-400">Selecciona un MP3 para escribirle estos metadatos.</p>
          </div>
        </div>
        <div class="flex flex-1 items-end">
          <UForm
            aria-label="Formulario para inyectar metadatos en archivo de audio"
            class="w-full space-y-4"
            @submit.prevent="injectAudioMetadata"
          >
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
              class="w-full cursor-pointer justify-center"
              :loading="isInjecting"
              :disabled="!selectedFiles?.length || isInjecting"
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
              class="m-0 font-['Silkscreen'] text-base font-bold"
            >
              Descargar ficha TXT
            </h4>
            <p class="m-0 text-xs text-neutral-500 dark:text-neutral-400">Guarda todos los metadatos en un archivo de texto.</p>
          </div>
        </div>
        <div class="flex flex-1 items-end">
          <UButton
            @click="downloadTxt"
            label="Descargar TXT"
            icon="i-lucide-arrow-down-to-line"
            color="neutral"
            variant="outline"
            class="w-full cursor-pointer justify-center"
          />
        </div>
      </section>
    </div>
  </section>
</template>
