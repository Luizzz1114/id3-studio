<script setup lang="ts">
const emit = defineEmits<{
  select: [artist: string, track: string]
}>()

function suggest(artist: string, track: string) {
  emit('select', artist, track)
}
</script>

<template>
  <section class="shadow-3d bg-default flex w-full flex-col gap-6 border-2 p-6 md:flex-row">
    <div class="flex flex-2 flex-col gap-6">
      <span class="m-0 flex flex-col items-start">
        <span class="text-3d-md font-['Silkscreen'] text-4xl leading-none font-bold sm:text-5xl">Sistema en espera...</span>
        <span class="text-3d-md font-['Silkscreen'] text-4xl leading-none font-bold sm:text-5xl">Requiere input del usuario.</span>
      </span>
      <div class="flex flex-col gap-6">
        <p class="m-0 text-sm">
          Para iniciar la consulta, proporcione los valores requeridos en los campos superiores. El sistema se encargará de interceptar la pista y formatear la información encontrada.
        </p>
        <div class="flex flex-wrap gap-4">
          <UButton
            @click="suggest('Dua Lipa', 'Whatcha Doing')"
            label="Dua Lipa - Whatcha Doing"
            trailing-icon="i-lucide-arrow-up-right"
            class="flex h-8 cursor-pointer justify-center sm:w-auto"
          />
          <UButton
            @click="suggest('Trueno', 'X UNAS LLANTAS')"
            label="Trueno - X UNAS LLANTAS"
            trailing-icon="i-lucide-arrow-up-right"
            class="flex h-8 cursor-pointer justify-center sm:w-auto"
          />
          <UButton
            @click="suggest('Djo', 'Link')"
            label="Djo - Link"
            trailing-icon="i-lucide-arrow-up-right"
            class="flex h-8 cursor-pointer justify-center sm:w-auto"
          />
          <UButton
            @click="suggest('Balu Brigada', 'Sideways')"
            label="Balu Brigada - Sideways"
            trailing-icon="i-lucide-arrow-up-right"
            class="flex h-8 cursor-pointer justify-center sm:w-auto"
          />
          <UButton
            @click="suggest('Ramma', 'algún día')"
            label="Ramma - algún día"
            trailing-icon="i-lucide-arrow-up-right"
            class="flex h-8 cursor-pointer justify-center sm:w-auto"
          />
        </div>
      </div>
    </div>
    <div class="flex flex-1 items-center justify-center">
      <img
        src="../assets/img/vinilo.svg"
        alt=""
        aria-hidden="true"
        class="max-w-65 sm:max-w-xs md:max-w-sm lg:max-w-80"
      />
    </div>
  </section>
</template>
