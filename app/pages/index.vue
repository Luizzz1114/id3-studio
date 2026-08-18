<script setup lang="ts">
const searchFormRef = useTemplateRef('searchFormRef');

const { 
  loading, 
  result, 
  errorMessage, 
  lastQuery, 
  fetchMetadata, 
  resetData 
} = useTrackMetadata();

function handleSuggestion(artist: string, track: string) {
  searchFormRef.value?.injectAndSubmit(artist, track);
}
</script>

<template>
  <div class="flex flex-col gap-12 px-6 py-10 max-w-7xl">
    <div class="mx-auto flex flex-wrap w-full items-start justify-between lg:items-center gap-12">
      <div class="flex flex-col justify-center flex-1 m-0">
        <span class="font-['Silkscreen'] text-[45px] font-bold leading-none text-3d sm:text-6xl md:text-[76px]">Busca,</span>
        <span class="font-['Silkscreen'] text-[45px] font-bold leading-none text-3d sm:text-6xl md:text-[76px]">Descubre,</span>
        <span class="font-['Silkscreen'] text-[45px] font-bold leading-none text-3d sm:text-6xl md:text-[76px]">Etiqueta.</span>
      </div>
      <TrackSearchForm 
        ref="searchFormRef"
        :loading="loading"
        @submit="fetchMetadata"
        @reset="resetData"
      />
    </div>
    <USeparator size="sm" />
    <ResultSection
      v-if="result"
      :data="result"
    />
    <ErrorSection
      v-else-if="errorMessage"
      :message="errorMessage"
      @retry="fetchMetadata(lastQuery)"
    />
    <TrackSearchSuggestions 
      v-else 
      @select="handleSuggestion" 
    />
  </div>
</template>