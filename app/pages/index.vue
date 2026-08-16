<script setup lang="ts">
const songTitle = ref('');
const artistName = ref('');
</script>

<template>
  <div class="flex flex-col gap-12 px-6 py-10 max-w-7xl">
    <div class="mx-auto flex flex-wrap w-full items-start justify-between lg:items-center gap-12">
      <div class="flex flex-col justify-center flex-1">
        <span class="font-['Silkscreen'] text-[45px] font-bold leading-none text-3d sm:text-6xl md:text-[76px]">Busca,</span>
        <span class="font-['Silkscreen'] text-[45px] font-bold leading-none text-3d sm:text-6xl md:text-[76px]">Descubre,</span>
        <span class="font-['Silkscreen'] text-[45px] font-bold leading-none text-3d sm:text-6xl md:text-[76px]">Etiqueta.</span>
      </div>
      <div class="flex flex-col gap-4 border-2 bg-white p-4 shadow-3d dark:bg-neutral-900 flex-1">
        <div class="flex items-center justify-between gap-4 border-b-2 pb-4">
          <span class="text-lg font-bold font-['Silkscreen']">Buscar canción</span>
          <UIcon name="i-lucide-disc-3" class="size-5 animate-spin [animation-duration:3s]" />
        </div>
        <span class="text-sm">Decodifica el ADN de cualquier pista. Ingresa las coordenadas de audio para extraer sus etiquetas.</span>
        <div class="flex flex-col sm:flex-row sm:items-end gap-4">
          <UFormField label="Artista" class="w-full sm:flex-1">
            <UInput v-model="artistName" placeholder="Dua Lipa" class="min-w-36 w-full h-8" />
          </UFormField>
          <UFormField label="Canción" class="w-full sm:flex-1">
            <UInput v-model="songTitle" placeholder="Whatcha Doing" class="min-w-36 w-full h-8" />
          </UFormField>
        </div>
        <div class="flex items-center gap-4">
          <UButton 
            @click=""
            label="Buscar track" 
            color="primary"
            icon="i-lucide-search"
            class="flex justify-center w-full sm:w-auto h-8 cursor-pointer"
          />
          <UButton 
            @click=""
            label="Limpiar" 
            color="neutral"
            icon="i-lucide-eraser"
            class="flex justify-center w-full sm:w-auto h-8 cursor-pointer"
          />
        </div>
      </div>
    </div>
    <USeparator
      label="Esperando consulta" 
      size="sm"
    />
    <div class="flex flex-col md:flex-row w-full gap-6 p-6 bg-white border-2 shadow-3d dark:bg-neutral-900">
      <div class="flex flex-col gap-6 flex-2">
        <div class="flex flex-col justify-center">
          <span class="font-['Silkscreen'] text-4xl sm:text-5xl font-bold leading-none text-3d-md">Sistema en espera...</span>
          <span class="font-['Silkscreen'] text-4xl sm:text-5xl font-bold leading-none text-3d-md">Require input del usuario.</span>
        </div>
        <div class="flex flex-col gap-6">       
          <span class="text-sm">Para iniciar la consulta, proporcione los valores requeridos en los campos superiores. El sistema se encargará de interceptar la pista y formatear la información encontrada.</span>
          <div class="flex gap-4 flex-wrap">
            <UButton
              @click=""
              label="Dua Lipa - Whatcha Doing"
              trailing-icon="i-lucide-arrow-up-right"
              class="flex justify-center sm:w-auto h-8 cursor-pointer"
            />
            <UButton
              @click=""
              label="Trueno - X UNAS LLANTAS"
              trailing-icon="i-lucide-arrow-up-right"
              class="flex justify-center sm:w-auto h-8 cursor-pointer"
            />
            <UButton
              @click=""
              label="Djo - Link"
              trailing-icon="i-lucide-arrow-up-right"
              class="flex justify-center sm:w-auto h-8 cursor-pointer"
            />
            <UButton
              @click=""
              label="Balu Brigada - Sideways"
              trailing-icon="i-lucide-arrow-up-right"
              class="flex justify-center sm:w-auto h-8 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center flex-1">
        <img
          src="../assets/img/vinilo.svg"
          alt="Vinilo ilustrativo"
          class="max-w-65 sm:max-w-xs md:max-w-sm lg:max-w-80"
        >
      </div>
    </div>
  </div>
</template>