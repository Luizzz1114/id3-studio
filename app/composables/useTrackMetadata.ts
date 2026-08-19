export const useTrackMetadata = () => {

  const loading = ref<boolean>(false);
  const result = ref<TrackMetadata | null>(null);
  const errorMessage = ref<string | null>(null);
  const lastQuery = reactive({
    artist: '', track: ''
  });

  const resetData = () => {
    result.value = null;
    errorMessage.value = null;
    lastQuery.artist = '';
    lastQuery.track = '';
  };

  const fetchMetadata = async (query: { artist: string; track: string }) => {

    if (lastQuery.artist === query.artist && lastQuery.track === query.track) {
      return;
    }

    loading.value = true;
    result.value = null;
    errorMessage.value = null;
    
    try {
      const response = await $fetch('/api/metadata', { query });

      if (!response.success) {
        throw new Error(response.error);
      }

      result.value = response.data as TrackMetadata;
      
    } catch (error: any) {
      errorMessage.value = error?.message || 'No se pudo consultar la canción.';
    } finally {
      loading.value = false;
      lastQuery.artist = query.artist;
      lastQuery.track = query.track;
    }
  };

  return {
    loading,
    result,
    errorMessage,
    lastQuery,
    fetchMetadata,
    resetData
  };
};