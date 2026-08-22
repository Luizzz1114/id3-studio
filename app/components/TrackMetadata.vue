<script setup lang="ts">
interface Props {
  loading?: boolean
  data?: Record<string, string | number | null>
}

const props = withDefaults(defineProps<Props>(), {
  loading: true,
  data: () => ({})
})

const metadata = computed<MetadataRecord[]>(() => {
  const data = props.data ?? {}
  const entries: MetadataRecord[] = [
    { label: 'ALBUM', value: data.ALBUM ?? null },
    { label: 'ALBUMARTIST', value: data.ALBUMARTIST ?? null },
    { label: 'ARTIST', value: data.ARTIST ?? null },
    { label: 'BPM', value: data.BPM ?? null },
    { label: 'COMPOSER', value: data.COMPOSER ?? null },
    { label: 'COPYRIGHT', value: data.COPYRIGHT ?? null },
    { label: 'DISCNUMBER', value: data.DISCNUMBER ?? null },
    { label: 'GENRE', value: data.GENRE ?? null },
    { label: 'ISRC', value: data.ISRC ?? null },
    { label: 'LABEL', value: data.LABEL ?? null },
    { label: 'LENGTH', value: data.LENGTH ?? null },
    { label: 'TRACK', value: data.TRACK ?? null },
    { label: 'YEAR', value: data.YEAR ?? null }
  ]
  return entries.filter((item) => item.value != null && item.value !== '')
})

const normalizeYear = (value: string | number | null | undefined) => {
  if (!value) return 'Año no disponible'
  const text = String(value)
  return text.length >= 4 ? text.slice(0, 4) : text
}

const title = computed(() => props.data?.TITLE || 'Título no disponible')
const artist = computed(() => props.data?.ARTIST || 'Artista no disponible')
const album = computed(() => props.data?.ALBUM || 'Álbum no disponible')
const year = computed(() => normalizeYear(props.data?.YEAR))
const coverUrl = computed(() => (props.data?.ALBUMART as string) || undefined)
const lyrics = computed(() => props.data?.UNSYNCEDLYRICS || 'Letra no disponible')
</script>

<template>
  <div
    v-if="loading"
    class="shadow-3d bg-default flex w-full flex-1 flex-col gap-6 border-2 p-6 lg:flex-row"
  >
    <div class="flex flex-1 flex-col gap-6">
      <div class="flex w-full flex-col gap-6 sm:flex-row">
        <USkeleton class="aspect-square w-full max-w-72" />
        <div class="flex w-full min-w-0 flex-1 flex-col gap-4">
          <USkeleton class="h-10 w-3/4 sm:h-12 lg:h-14" />
          <div class="flex flex-col gap-4">
            <div
              v-for="i in 3"
              :key="i"
              class="flex flex-col gap-2 border-b-2 border-neutral-200 pb-2 dark:border-neutral-800"
            >
              <USkeleton class="h-3 w-16" />
              <USkeleton class="h-4 w-1/2" />
            </div>
          </div>
        </div>
      </div>
      <USeparator
        size="sm"
        class="mt-2 mb-0 hidden sm:block"
      />
      <section class="flex flex-col gap-6">
        <header class="flex items-center justify-between gap-4 pb-2">
          <USkeleton class="h-7 w-32" />
        </header>
        <dl class="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 xl:grid-cols-3">
          <div
            v-for="i in 9"
            :key="i"
            class="flex min-w-0 flex-col gap-2 border-b-2 border-neutral-200 pb-2 dark:border-neutral-800"
          >
            <USkeleton class="h-3 w-20" />
            <USkeleton class="h-4 w-4/5" />
          </div>
        </dl>
      </section>
    </div>
    <USkeleton class="min-h-96 w-full lg:h-auto lg:w-80 lg:self-stretch xl:w-96" />
  </div>
  <article
    v-else
    class="shadow-3d bg-default flex w-full min-w-0 flex-1 flex-col gap-6 border-2 p-6 text-sm lg:flex-row"
  >
    <div class="flex flex-1 flex-col gap-6">
      <div class="flex w-full flex-col gap-6 sm:flex-row">
        <div class="flex w-full max-w-72 min-w-0 flex-col gap-4">
          <figure class="shadow-3d relative m-0 aspect-square w-full border-2">
            <span class="absolute inset-s-2 top-2 z-10 bg-indigo-500 px-1.5 py-0.5 text-xs font-medium text-white uppercase">Album cover</span>
            <img
              :src="coverUrl"
              :title="`Portada del álbum ${album} de ${artist}`"
              :alt="`Portada del álbum ${album} de ${artist}`"
              class="block h-full w-full object-cover"
            />
          </figure>
          <div class="shadow-3d--b flex w-full min-w-0 items-center gap-4 overflow-hidden border-2 border-neutral-200 bg-neutral-100 p-1.5 dark:border-neutral-700 dark:bg-neutral-800">
            <div class="flex min-w-0 flex-1 flex-col">
              <span class="text-xs text-neutral-500 uppercase dark:text-neutral-400">Fuente de portada</span>
              <span class="truncate text-xs">{{ coverUrl }}</span>
            </div>
            <UButton
              :to="coverUrl"
              target="_blank"
              icon="i-lucide-square-arrow-out-up-right"
              color="neutral"
              variant="outline"
              class="grid size-8 shrink-0 place-items-center"
            />
          </div>
        </div>
        <div class="flex w-full min-w-0 flex-1 flex-col gap-4">
          <h2 class="text-3d-md m-0 font-['Silkscreen'] text-3xl font-bold hyphens-auto sm:text-4xl lg:text-5xl">{{ title }}</h2>
          <dl class="m-0 flex flex-col gap-4">
            <div class="flex flex-col border-b-2 border-neutral-200 pb-2 dark:border-neutral-800">
              <dt class="text-xs text-neutral-500 uppercase dark:text-neutral-400">Artista</dt>
              <dd class="m-0 hyphens-auto">{{ artist }}</dd>
            </div>
            <div class="flex flex-col border-b-2 border-neutral-200 pb-2 dark:border-neutral-800">
              <dt class="text-xs text-neutral-500 uppercase dark:text-neutral-400">Álbum</dt>
              <dd class="m-0 hyphens-auto">{{ album }}</dd>
            </div>
            <div class="flex flex-col border-b-2 border-neutral-200 pb-2 dark:border-neutral-800">
              <dt class="text-xs text-neutral-500 uppercase dark:text-neutral-400">Año</dt>
              <dd class="m-0 hyphens-auto">{{ year }}</dd>
            </div>
          </dl>
        </div>
      </div>
      <USeparator
        size="sm"
        class="mt-2 mb-0 hidden sm:block"
      />
      <section class="flex flex-col gap-6">
        <header class="flex items-center justify-between gap-4 pb-2">
          <h3 class="m-0 font-['Silkscreen'] text-xl font-bold">Metadatos</h3>
        </header>
        <dl class="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 xl:grid-cols-3">
          <div
            v-for="(campo, index) in metadata"
            :key="index"
            class="flex min-w-0 flex-col border-b-2 border-neutral-200 pb-2 dark:border-neutral-800"
          >
            <dt class="text-xs text-neutral-500 uppercase dark:text-neutral-400">{{ campo.label }}</dt>
            <dd class="m-0 text-sm hyphens-auto">{{ campo.value }}</dd>
          </div>
        </dl>
      </section>
    </div>
    <aside class="shadow-3d bg-primary-400/35 flex w-full flex-col gap-4 border-2 p-4 pr-2.5 lg:w-80 lg:contain-size xl:w-96">
      <header class="flex items-center justify-between gap-4">
        <h3 class="m-0 font-['Silkscreen'] text-xl font-bold">Letra</h3>
      </header>
      <div class="lyrics-simple custom-scrollbar min-h-0 flex-1 overflow-y-auto pr-4 text-sm leading-relaxed">{{ lyrics }}</div>
      <span class="text-xs text-neutral-600 dark:text-neutral-300">Fuente: LRCLIB</span>
    </aside>
  </article>
  <DownloadMetadata v-if="!loading" />
</template>
