<script setup lang="ts">
const engineSteps = [
  {
    id: '01',
    label: 'Validación de Entrada',
    description: 'El servidor recibe el artista y la canción, y valida la estructura de la consulta para evitar errores de sintaxis antes de consumir recursos.'
  },
  {
    id: '02',
    label: 'Extracción de Huella',
    description: 'Escaneo inicial en Deezer para la coincidencia exacta. Obtenemos la huella primaria (IDs únicos) y capturamos la portada en máxima resolución.'
  },
  {
    id: '03',
    label: 'Consulta en Paralelo',
    description: 'Peticiones simultáneas: Deezer extrae la data técnica profunda, iTunes intercepta la información legal (Copyright), y LRCLib recupera las letras puras.'
  },
  {
    id: '04',
    label: 'Limpieza y Formateo',
    description: 'Unificamos artistas, eliminamos compositores duplicados, asignamos el género primario y formateamos correctamente la numeración de las pistas.'
  },
  {
    id: '05',
    label: 'Ensamblaje',
    description: 'La información se empaqueta en una única estructura estandarizada. Recibes un reporte con 15 campos esenciales, listo para inyectar.'
  }
]
</script>

<template>
  <section
    aria-labelledby="process-title"
    class="flex w-full flex-col gap-8 sm:gap-12"
  >
    <div class="flex flex-col items-start gap-4">
      <span class="bg-secondary-500 ml-2 px-2 py-0.5 text-xs text-white">SECUENCIA DE OPERACIÓN</span>
      <h2
        id="process-title"
        class="text-3d font-['Silkscreen'] text-4xl leading-none font-bold text-white uppercase sm:text-5xl"
      >
        EL RECORRIDO <br />DEL MOTOR.
      </h2>
    </div>

    <div class="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="step in engineSteps"
        :key="step.id"
        class="shadow-3d bg-default flex flex-col gap-4 border-2 p-4 sm:p-6"
      >
        <div class="bg-secondary-500 grid size-9 shrink-0 place-items-center p-0.5 font-['Silkscreen'] text-base text-white">
          {{ step.id }}
        </div>
        <h3 class="font-['Silkscreen'] text-xl font-bold uppercase">{{ step.label }}</h3>
        <p class="text-sm text-neutral-600 dark:text-neutral-300">{{ step.description }}</p>
      </div>
    </div>
  </section>
</template>
