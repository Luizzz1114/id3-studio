<script setup lang="ts">
const searchFormRef = useTemplateRef('searchFormRef')

const { loading, result, errorData, lastQuery, fetchMetadata, resetData } = useTrackMetadata()

function handleSuggestion(artist: string, track: string) {
  searchFormRef.value?.injectAndSubmit(artist, track)
}

function handleClearError() {
  searchFormRef.value?.onReset()
}
</script>

<template>
  <div class="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-12 px-4 pt-10 pb-20 sm:gap-16 sm:px-6 lg:gap-20 lg:px-8 lg:pt-16 lg:pb-28">
    <section
      aria-labelledby="app-title"
      class="mx-auto flex w-full flex-wrap items-start justify-between gap-10 sm:gap-12 lg:items-center"
    >
      <div class="flex w-full flex-1 flex-col items-start gap-6 lg:w-1/2">
        <span class="bg-primary-500 ml-2 px-2 py-0.5 text-xs text-white">BUSCADOR</span>
        <h1
          id="app-title"
          class="m-0 flex flex-1 flex-col justify-center"
        >
          <span class="text-3d font-['Silkscreen'] text-[45px] leading-none font-bold sm:text-6xl md:text-[76px]">Busca,</span>
          <span class="text-3d font-['Silkscreen'] text-[45px] leading-none font-bold sm:text-6xl md:text-[76px]">Descubre,</span>
          <span class="text-3d font-['Silkscreen'] text-[45px] leading-none font-bold sm:text-6xl md:text-[76px]">Etiqueta.</span>
        </h1>
      </div>
      <TrackSearchForm
        ref="searchFormRef"
        :loading="loading"
        @submit="fetchMetadata"
        @reset="resetData"
      />
    </section>
    <USeparator size="sm" />
    <section
      id="consulta"
      aria-live="polite"
      aria-label="Resultados de la consulta"
      class="flex flex-col gap-12 sm:gap-16 lg:gap-20"
    >
      <TrackMetadata
        v-if="loading || result"
        :loading="loading"
        :data="result ?? undefined"
        @update:data="result = $event"
      />
      <TrackSearchError
        v-else-if="errorData"
        :error="errorData"
        @retry="fetchMetadata(lastQuery)"
        @clear="handleClearError"
      />
      <TrackSearchSuggestions
        v-else
        @select="handleSuggestion"
      />
    </section>
  </div>
</template>
