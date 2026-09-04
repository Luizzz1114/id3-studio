export const useTrackMetadata = () => {
  const notify = useAppToast()
  const loading = ref<boolean>(false)
  const result = ref<TrackMetadataPayload | null>(null)
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

      notify.success('Consulta exitosa', 'Se encontró la información del track.')

      result.value = response.data as TrackMetadataPayload
    } catch (error: any) {
      const statusCode = error.data?.statusCode || error.statusCode || 500
      const message = error.data?.message || error.message || 'Ha ocurrido un error inesperado'
      errorData.value = {
        type: statusCode,
        message: message
      }
      if (statusCode === 404) {
        notify.warning('Track no encontrado', 'Comprueba que el nombre de la canción y artista sean correctos.')
      } else if (statusCode === 429) {
        notify.warning('Demasiadas peticiones', 'Por favor, espera un momento antes de buscar otra vez.')
      } else {
        notify.error('Error inesperado', 'Ocurrió un problema en el servidor al consultar la pista.')
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
