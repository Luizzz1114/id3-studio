export const useTrackMetadata = () => {
  const loading = ref<boolean>(false)
  const result = ref<TrackMetadata | null>(null)
  const errorData = ref<ErrorState | null>(null)
  const lastQuery = reactive({
    artist: '',
    track: ''
  })

  const resetData = () => {
    result.value = null
    errorData.value = null
    lastQuery.artist = ''
    lastQuery.track = ''
  }

  const fetchMetadata = async (query: { artist: string; track: string }) => {
    if (lastQuery.artist === query.artist && lastQuery.track === query.track) {
      return
    }

    loading.value = true
    resetData()

    try {
      const response = await $fetch('/api/metadata', { query })

      if (response && !response.success) {
        throw {
          statusCode: 'CUSTOM_ERROR',
          message: response.error || 'Error en la petición'
        }
      }

      result.value = response.data as TrackMetadata
    } catch (error: any) {
      const statusCode = error.data?.statusCode || error.statusCode || 500
      const message = error.data?.message || error.message || 'Ha ocurrido un error inesperado'
      errorData.value = {
        type: statusCode,
        message: message
      }
    } finally {
      loading.value = false
      lastQuery.artist = query.artist
      lastQuery.track = query.track
    }
  }

  return {
    loading,
    result,
    errorData,
    lastQuery,
    fetchMetadata,
    resetData
  }
}
