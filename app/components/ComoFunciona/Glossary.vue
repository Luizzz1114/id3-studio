<script setup lang="ts">
const glossaryTerms = [
  { label: 'TITLE', description: 'El título oficial de la obra o pista musical, incluyendo versiones o subtítulos específicos (ej. "Radio Edit", "Remix").' },
  { label: 'ARTIST', description: 'Intérprete o intérpretes que ejecutan la pista. Incluye al artista principal y a los artistas invitados (featuring).' },
  { label: 'ALBUM', description: 'El nombre de la colección a la que pertenece la pista, ya sea un álbum de estudio, un EP, un recopilatorio o un sencillo.' },
  { label: 'ALBUMARTIST', description: 'El artista principal responsable de la obra completa. Crucial para agrupar correctamente álbumes con múltiples invitados o bandas sonoras.' },
  { label: 'YEAR', description: 'El año o fecha oficial del primer lanzamiento comercial de la pista. Ayuda a contextualizar la obra cronológicamente.' },
  { label: 'TRACK', description: 'El número de orden de la pista dentro del álbum. Frecuentemente se representa como una fracción (ej. "03/12" indicando la pista 03 de 12).' },
  { label: 'DISCNUMBER', description: 'El número del volumen o disco físico/digital en lanzamientos múltiples (ej. "1/2" en un álbum doble o edición Deluxe).' },
  { label: 'GENRE', description: 'La categoría estilística o género musical primario con el que se clasifica la obra en las bases de datos y tiendas digitales.' },
  { label: 'BPM', description: 'Pulsaciones por minuto (Beats Per Minute). Valor numérico que indica el tempo de la pista, esencial para DJs y listas de reproducción.' },
  { label: 'ISRC', description: 'Código Estándar Internacional de Grabación. Un identificador alfanumérico global, único y permanente para cada grabación sonora específica.' },
  { label: 'COMPOSER', description: 'Los creadores intelectuales de la obra (compositores de la música y autores de la letra), que pueden ser distintos de quienes la interpretan.' },
  { label: 'LABEL', description: 'El sello discográfico o compañía editora que posee los derechos de distribución y comercialización del fonograma.' },
  { label: 'COPYRIGHT', description: 'Declaración legal que indica quién posee los derechos de autor de la grabación sonora (℗) y de la composición subyacente (©).' },
  { label: 'LENGTH', description: 'La duración exacta de la pista de audio, expresada habitualmente en milisegundos o en formato de minutos y segundos.' },
  { label: 'UNSYNCEDLYRICS', description: 'La letra completa de la canción en texto sin formato, sin marcas de tiempo que la sincronicen con la reproducción del audio.' }
]
</script>

<template>
  <section
    aria-labelledby="glosary-title"
    class="flex w-full flex-col gap-8 sm:gap-12"
  >
    <div class="flex flex-col items-start gap-4">
      <span class="bg-primary-500 ml-2 px-2 py-0.5 text-xs text-white uppercase">Glosario</span>
      <h2
        id="glosary-title"
        class="text-3d-md font-silkscreen m-0 flex flex-col justify-center text-4xl leading-none font-bold text-white uppercase sm:text-5xl"
      >
        Diccionario <br />de Metadatos.
      </h2>
    </div>
    <div class="shadow-3d grid w-full grid-cols-1 gap-0.5 border-2 bg-neutral-200 md:grid-cols-2 lg:grid-cols-3 dark:bg-neutral-700">
      <div
        v-for="term in glossaryTerms"
        :key="term.label"
        class="bg-default flex flex-col gap-2 p-5 md:last:col-span-2 lg:last:col-span-1"
      >
        <dt class="font-silkscreen text-primary-500 dark:text-primary-400 text-xl font-bold">{{ term.label }}</dt>
        <dd class="text-sm">{{ term.description }}</dd>
      </div>
    </div>
  </section>
</template>
