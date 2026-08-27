<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    error?: ErrorState | null
  }>(),
  {
    error: null
  }
)

const emit = defineEmits<{
  retry: []
}>()

const errorContent = computed(() => {
  const defaultError = {
    title: 'Algo salió mal...',
    message: props.error?.message || 'Ocurrió un error inesperado, intente de nuevo mas tarde.'
  }

  if (!props.error) return defaultError

  switch (props.error.type) {
    case 404:
      return {
        title: 'Canción no encontrada',
        message: 'No se encontró la pista especificada. Compruebe los datos e intente nuevamente.'
      }
    case 500:
      return {
        title: 'Error del servidor',
        message: 'Ocurrió un error interno en nuestros sistemas. Intente de nuevo más tarde.'
      }
    case 429:
      return {
        title: 'Demasiadas peticiones',
        message: 'Se han procesado demasiadas peticiones. Por favor, espere un momento.'
      }
    default:
      return defaultError
  }
})
</script>

<template>
  <div
    role="alert"
    aria-labelledby="error-title"
    class="shadow-3d bg-default flex w-full flex-col gap-6 border-2 p-6 md:flex-row"
  >
    <div class="flex flex-1 flex-col gap-6">
      <header class="flex flex-col justify-center">
        <h2
          id="error-title"
          class="text-3d-md m-0 font-['Silkscreen'] text-4xl leading-none font-bold hyphens-auto sm:text-5xl"
        >
          {{ errorContent.title }}
        </h2>
      </header>
      <div class="flex flex-col gap-6">
        <p class="m-0 text-sm">
          {{ errorContent.message }}
        </p>
        <div class="flex flex-wrap gap-4">
          <UButton
            label="Reintentar"
            color="secondary"
            icon="i-lucide-rotate-ccw"
            class="flex h-8 cursor-pointer justify-center sm:w-auto"
            @click="emit('retry')"
          />
        </div>
      </div>
    </div>
    <div
      class="hidden flex-1 lg:block"
      aria-hidden="true"
    ></div>
  </div>
</template>
