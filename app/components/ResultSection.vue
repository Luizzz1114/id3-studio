<script setup lang="ts">
interface MetadataRecord {
  label: string
  value: string | number | null
}

const props = withDefaults(defineProps<{ data?: Record<string, string | number | null> }>(), {
  data: () => ({})
});

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
  ];

  return entries.filter((item) => item.value !== null && item.value !== undefined && item.value !== '');
});

const normalizeYear = (value: string | number | null | undefined) => {
  if (!value) return ''
  const text = String(value)
  return text.length >= 4 ? text.slice(0, 4) : text
}

const title = computed(() => props.data?.TITLE || 'Título no disponible');
const artist = computed(() => props.data?.ARTIST || props.data?.ALBUMARTIST || 'Artista no disponible');
const album = computed(() => props.data?.ALBUM || 'Álbum no disponible');
const year = computed(() => normalizeYear(props.data?.YEAR));
const coverUrl = computed(() => (props.data?.ALBUMART as string) || undefined);
</script>

<template>
  <article aria-labelledby="result-heading" class="flex flex-col w-full flex-1 gap-6 p-6 text-sm bg-white border-2 shadow-3d dark:bg-neutral-900">
    <div class="flex flex-col sm:flex-row w-full gap-6">
      <div class="flex flex-col gap-4 w-full max-w-72 shrink-0">
        <figure class="w-full aspect-square border-2 border-neutral-900 shadow-3d relative m-0 dark:border-neutral-200">
          <span class="absolute top-2 inset-s-2 text-xs bg-indigo-500 text-white px-1.5 py-0.5 z-10 font-medium">
            ALBUM COVER
          </span>
          <img 
            :src="coverUrl" 
            :alt="`Portada del álbum ${album} de ${artist}`"
            class="w-full h-full object-cover block"
          >
        </figure>
        <div class="flex items-center gap-4 w-full bg-neutral-100 p-1.5 border-2 border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800">
          <div class="flex flex-col flex-1 min-w-0">
            <span class="text-xs text-neutral-500 uppercase dark:text-neutral-400">Fuente de portada</span>
            <span class="text-xs truncate">{{ coverUrl }}</span>
          </div>
          <UButton
            :to="coverUrl"
            target="_blank"
            icon="i-lucide-arrow-up-right"
            color="neutral"
            variant="outline"
            class="shrink-0 size-8 grid place-items-center"
            aria-label="Abrir enlace de la fuente original"
          />
        </div>
      </div>
      <div class="flex flex-col gap-4 flex-2">
        <span id="result-heading" class="font-['Silkscreen'] text-4xl sm:text-5xl font-bold leading-none text-3d-md m-0">
          {{ title }}
        </span>
        <dl class="flex flex-col gap-4 m-0">
          <div class="flex flex-col pb-2 border-b-2 border-neutral-200 dark:border-neutral-800">
            <dt class="text-xs text-neutral-500 uppercase dark:text-neutral-400">Artista</dt>
            <dd class="m-0">{{ artist }}</dd>
          </div>
          <div class="flex flex-col pb-2 border-b-2 border-neutral-200 dark:border-neutral-800">
            <dt class="text-xs text-neutral-500 uppercase dark:text-neutral-400">Álbum</dt>
            <dd class="m-0">{{ album }}</dd>
          </div>
          <div class="flex flex-col pb-2 border-b-2 border-neutral-200 dark:border-neutral-800">
            <dt class="text-xs text-neutral-500 uppercase dark:text-neutral-400">Año</dt>
            <dd class="m-0">{{ year }}</dd>
          </div>
        </dl>
      </div>
    </div>
    <USeparator size="sm" class="mt-4 mb-2" />
    <section aria-labelledby="form-heading" class="flex flex-col gap-6">
      <header class="flex items-center justify-between gap-4 pb-2">
        <h2 id="form-heading" class="text-xl font-bold font-['Silkscreen'] m-0">Metadatos</h2>
      </header>
      <dl class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
        <div 
          v-for="(campo, index) in metadata" 
          :key="index"
          class="flex flex-col pb-2 min-w-0 border-b-2 border-neutral-200 dark:border-neutral-800"
        >
          <dt class="text-xs text-neutral-500 uppercase dark:text-neutral-400">{{ campo.label }}</dt>
          <dd class="text-sm m-0 wrap-break-word">{{ campo.value }}</dd>
        </div>
      </dl>
    </section>
  </article>
</template>