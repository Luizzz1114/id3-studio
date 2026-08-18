<script setup lang="ts">
const emit = defineEmits<{
  select: [artist: string, track: string];
}>();

function suggest(artist: string, track: string) {
  emit('select', artist, track);
}
</script>

<template>
  <section class="flex flex-col md:flex-row w-full gap-6 p-6 bg-white border-2 shadow-3d dark:bg-neutral-900">
    <div class="flex flex-col gap-6 flex-2">
      <span class="flex flex-col items-start m-0">
        <span class="font-['Silkscreen'] text-4xl sm:text-5xl font-bold leading-none text-3d-md">Sistema en espera...</span>
        <span class="font-['Silkscreen'] text-4xl sm:text-5xl font-bold leading-none text-3d-md">Requiere input del usuario.</span>
      </span>
      <div class="flex flex-col gap-6">      
        <p class="text-sm m-0">Para iniciar la consulta, proporcione los valores requeridos en los campos superiores. El sistema se encargará de interceptar la pista y formatear la información encontrada.</p>
        <div class="flex gap-4 flex-wrap">
          <UButton @click="suggest('Dua Lipa', 'Whatcha Doing')" label="Dua Lipa - Whatcha Doing" trailing-icon="i-lucide-arrow-up-right" class="flex justify-center sm:w-auto h-8 cursor-pointer" />
          <UButton @click="suggest('Trueno', 'X UNAS LLANTAS')" label="Trueno - X UNAS LLANTAS" trailing-icon="i-lucide-arrow-up-right" class="flex justify-center sm:w-auto h-8 cursor-pointer" />
          <UButton @click="suggest('Djo', 'Link')" label="Djo - Link" trailing-icon="i-lucide-arrow-up-right" class="flex justify-center sm:w-auto h-8 cursor-pointer" />
          <UButton @click="suggest('Balu Brigada', 'Sideways')" label="Balu Brigada - Sideways" trailing-icon="i-lucide-arrow-up-right" class="flex justify-center sm:w-auto h-8 cursor-pointer" />
          <UButton @click="suggest('Ramma', 'algún día')" label="Ramma - algún día" trailing-icon="i-lucide-arrow-up-right" class="flex justify-center sm:w-auto h-8 cursor-pointer" />
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center flex-1">
      <img src="../assets/img/vinilo.svg" alt="" aria-hidden="true" class="max-w-65 sm:max-w-xs md:max-w-sm lg:max-w-80" />
    </div>
  </section>
</template>