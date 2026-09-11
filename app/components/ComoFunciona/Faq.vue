<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'

const faqItems = ref<AccordionItem[]>([
  {
    label: '¿Qué diferencia hay entre ARTIST y ALBUMARTIST?',
    content:
      'El campo ARTIST incluye a todos los intérpretes involucrados en la pista específica (incluyendo colaboraciones o "featurings"). Por otro lado, ALBUMARTIST es el artista principal bajo el cual se lanzó el álbum completo. Esto es vital para que los reproductores agrupen correctamente tu biblioteca.'
  },
  {
    label: '¿Por qué algunos campos dicen "Unknown" o están vacíos?',
    content:
      'Nuestra API extrae exactamente lo que las discográficas han registrado en las plataformas oficiales. Si un sello independiente no registró los BPM, el ISRC o el compositor en Deezer o iTunes, el motor devolverá el campo vacío para mantener la integridad de los datos.'
  },
  {
    label: '¿La letra de la canción siempre está disponible?',
    content:
      'No siempre. Extraemos las letras a través de la API de LRCLib, una base de datos impulsada por la comunidad. Si la canción es muy nueva, puramente instrumental, o no ha sido documentada por los usuarios, este campo no será devuelto.'
  },
  {
    label: '¿Puedo modificar los datos antes de exportarlos?',
    content:
      'Sí. ID3 Studio actúa como un recolector base. Una vez generada la lectura en pantalla, puedes utilizar el modo de edición para ajustar, corregir o sobrescribir manualmente cualquier metadato antes de inyectarlo en tu archivo.'
  }
])
</script>

<template>
  <section
    aria-labelledby="faq-title"
    class="flex w-full flex-col gap-8 sm:gap-12"
  >
    <div class="flex flex-col items-start gap-4">
      <span class="bg-secondary-500 ml-2 px-2 py-0.5 text-xs text-white">FAQ</span>
      <h2
        id="faq-title"
        class="text-3d font-silkscreen text-4xl leading-none font-bold text-white uppercase sm:text-5xl"
      >
        PREGUNTAS <br />FRECUENTES.
      </h2>
    </div>
    <div class="bg-default shadow-3d border-2">
      <UAccordion :items="faqItems" />
    </div>
  </section>
</template>
