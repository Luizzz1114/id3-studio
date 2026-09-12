<script setup lang="ts">
const emit = defineEmits<{
  select: [artist: string, track: string]
}>()

const suggestions = [
  { artist: 'Dua Lipa', track: 'Whatcha Doing' },
  { artist: 'Kendrick Lamar', track: 'LOVE.' },
  { artist: 'Djo', track: 'Half Life' },
  { artist: 'Balu Brigada', track: 'Backseat' },
  { artist: 'Ramma', track: 'algún día' },
  { artist: 'Rels B', track: 'yo pr1mero' }
]

function suggest(artist: string, track: string) {
  emit('select', artist, track)
}
</script>

<template>
  <section
    aria-labelledby="suggestions-title"
    class="shadow-3d bg-default flex w-full flex-col gap-4 border-2 p-4 sm:gap-6 sm:p-6 lg:flex-row"
  >
    <div class="flex flex-2 flex-col gap-6">
      <h2
        id="suggestions-title"
        class="text-3d-md font-silkscreen m-0 flex flex-col justify-center text-4xl leading-none font-bold text-pretty hyphens-auto text-white uppercase sm:text-5xl"
      >
        Sistema en espera... <br />Requiere input del usuario.
      </h2>
      <div class="flex flex-col gap-6">
        <p class="m-0 text-sm">Ingresa el artista y la canción en los campos superiores para comenzar. Si prefieres probar el sistema rápidamente, elige una de estas sugerencias:</p>
        <ul
          aria-label="Sugerencias de canciones rápidas"
          class="m-0 flex list-none flex-wrap gap-4 p-0"
        >
          <li
            v-for="item in suggestions"
            :key="`${item.artist}-${item.track}`"
          >
            <UButton
              :label="`${item.artist} - ${item.track}`"
              type="button"
              trailing-icon="i-lucide-arrow-up-right"
              class="flex h-8 cursor-pointer justify-center sm:w-auto"
              @click="suggest(item.artist, item.track)"
            />
          </li>
        </ul>
      </div>
    </div>
    <div class="flex flex-1 items-center justify-center">
      <img
        src="/img/turntable.svg"
        alt=""
        aria-hidden="true"
        width="360"
        height="360"
        loading="lazy"
        decoding="async"
        class="h-auto max-w-65 sm:max-w-xs md:max-w-sm lg:max-w-80"
      />
    </div>
  </section>
</template>
