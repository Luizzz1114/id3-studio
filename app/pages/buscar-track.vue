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
      aria-labelledby="browser-title"
      class="flex w-full flex-col items-center justify-between gap-10 sm:gap-12 md:flex-row md:items-center md:gap-8 lg:gap-10"
    >
      <div class="flex w-full min-w-0 flex-1 flex-col items-start gap-10 sm:gap-12">
        <div class="flex w-full min-w-0 flex-col items-start gap-6">
          <span class="bg-primary-500 ml-2 px-2 py-0.5 text-xs text-white uppercase">Buscador</span>
          <h1
            id="browser-title"
            class="text-3d-responsive font-silkscreen m-0 flex flex-col justify-center text-[45px] leading-none font-bold text-pretty sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Busca, <br />Descubre, <br />Etiqueta.
          </h1>
        </div>
      </div>
      <div class="flex w-full min-w-0 flex-1 items-center justify-center">
        <BuscarTrackForm
          ref="searchFormRef"
          :loading="loading"
          class="w-full"
          @submit="fetchMetadata"
          @reset="resetData"
        />
      </div>
    </section>
    <USeparator size="sm" />
    <section
      id="consulta"
      aria-live="polite"
      class="flex flex-col gap-12 sm:gap-16 lg:gap-20"
    >
      <template v-if="loading || result">
        <BuscarTrackResult
          :loading="loading"
          :data="result ?? undefined"
          @update:data="result = $event"
        />
        <BuscarTrackDownload
          v-if="!loading && result"
          :metadata="result"
        />
      </template>
      <BuscarTrackError
        v-else-if="errorData"
        :error="errorData"
        @retry="fetchMetadata(lastQuery)"
        @clear="handleClearError"
      />
      <BuscarTrackSuggestions
        v-else
        @select="handleSuggestion"
      />
    </section>
  </div>
</template>
