<script setup lang="ts">
const emit = defineEmits<{
  select: [artist: string, track: string]
}>()

const suggestions = [
  { artist: 'Dua Lipa', track: 'Whatcha Doing' },
  { artist: 'Kendrick Lamar, Zacari', track: 'LOVE.' },
  { artist: 'Djo', track: 'Half Life' },
  { artist: 'Balu Brigada', track: 'I Should Be Home' },
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
    class="shadow-3d bg-default flex w-full flex-col gap-4 border-2 p-4 sm:gap-6 sm:p-6 md:flex-row"
  >
    <div class="flex flex-2 flex-col gap-6">
      <h2
        id="suggestions-title"
        class="m-0 flex flex-col items-start"
      >
        <span class="text-3d font-['Silkscreen'] text-4xl leading-none font-bold sm:text-5xl">Sistema en espera...</span>
        <span class="text-3d font-['Silkscreen'] text-4xl leading-none font-bold sm:text-5xl">Requiere input del usuario.</span>
      </h2>
      <div class="flex flex-col gap-6">
        <p class="m-0 text-sm">
          Para iniciar la consulta, proporcione los valores requeridos en los campos superiores. El sistema se encargará de interceptar la pista y formatear la información encontrada.
        </p>
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
        src="/img/vinilo.svg"
        alt=""
        aria-hidden="true"
        width="280"
        height="280"
        class="h-auto max-w-65 sm:max-w-xs md:max-w-sm lg:max-w-80"
      />
    </div>
  </section>
</template>
