<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    message?: string
    retryLabel?: string
  }>(),
  {
    title: 'Algo salió mal...',
    message: 'Ocurrió un error al realizar la consulta, compruebe los datos e intente nuevamente.',
    retryLabel: 'Reintentar'
  }
)

const emit = defineEmits<{
  retry: []
}>()
</script>

<template>
  <section class="shadow-3d bg-default flex w-full flex-col gap-6 border-2 p-6 md:flex-row">
    <div class="flex flex-2 flex-col gap-6">
      <header class="flex flex-col justify-center">
        <span class="text-3d-md m-0 font-['Silkscreen'] text-4xl leading-none font-bold sm:text-5xl">Algo salió mal...</span>
      </header>
      <div class="flex flex-col gap-6">
        <p class="m-0 text-sm">Ocurrió un error al realizar la consulta, compruebe los datos e intente nuevamente.</p>
        <div class="flex flex-wrap gap-4">
          <UButton
            :click="emit('retry')"
            label="Reintentar"
            color="secondary"
            icon="i-lucide-rotate-ccw"
            class="flex h-8 cursor-pointer justify-center sm:w-auto"
          />
        </div>
      </div>
    </div>
    <div class="hidden flex-1 sm:block"></div>
  </section>
</template>
