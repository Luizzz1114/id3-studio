<script setup lang="ts">
const searchFormRef = useTemplateRef('searchFormRef')

const { loading, result, errorData, lastQuery, fetchMetadata, resetData } = useTrackMetadata()

function handleSuggestion(artist: string, track: string) {
  searchFormRef.value?.injectAndSubmit(artist, track)
}
</script>

<template>
  <div class="flex max-w-7xl flex-col gap-12 px-6 py-10">
    <div class="mx-auto flex w-full flex-wrap items-start justify-between gap-12 lg:items-center">
      <h2 class="m-0 flex flex-1 flex-col justify-center">
        <span class="text-3d font-['Silkscreen'] text-[45px] leading-none font-bold sm:text-6xl md:text-[76px]">Busca,</span>
        <span class="text-3d font-['Silkscreen'] text-[45px] leading-none font-bold sm:text-6xl md:text-[76px]">Descubre,</span>
        <span class="text-3d font-['Silkscreen'] text-[45px] leading-none font-bold sm:text-6xl md:text-[76px]">Etiqueta.</span>
      </h2>
      <TrackSearchForm
        ref="searchFormRef"
        :loading="loading"
        @submit="fetchMetadata"
        @reset="resetData"
      />
    </div>
    <USeparator label="Consulta" size="sm" />
    <TrackMetadata
      v-if="loading || result"
      :loading="loading"
      :data="result ?? undefined"
    />
    <TrackSearchError
      v-else-if="errorData"
      :error="errorData"
      @retry="fetchMetadata(lastQuery)"
    />
    <TrackSearchSuggestions
      v-else
      @select="handleSuggestion"
    />
    <USeparator label="Atribuciones" size="sm" />
    <DataSourceCredits />
  </div>
</template>
