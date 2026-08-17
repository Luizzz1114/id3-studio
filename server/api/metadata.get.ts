import type { 
  DeezerTrack, 
  DeezerAlbum, 
  ItunesResponse, 
  LrcLibResponse, 
  MetadataResponse, 
  ErrorResponse 
} from '../types/metadata';

export default defineEventHandler(async(event): Promise<MetadataResponse | ErrorResponse> => {
  const query = getQuery(event);

  const artist = typeof query.artist === 'string' ? query.artist : undefined;
  const track = typeof query.track === 'string' ? query.track : undefined;  

  if (!artist || !track) {
    return { error: 'Faltan los pámetros artist y track.' };
  }

  try {
    const searchQuery = encodeURIComponent(`artist:"${artist}" track:"${track}"`);
    const searchUrl = `https://api.deezer.com/search?q=${searchQuery}`;

    const dzSearch = await $fetch<{ data: DeezerTrack[] }>(searchUrl);

    if (!dzSearch.data || dzSearch.data.length === 0) {
      return { error: 'Canción no encontrada' };
    }

    const firstResult = dzSearch.data[0];

    if (!firstResult) {
      return { error: 'Canción no encontrada' };
    }

    const trackId = firstResult.id;
    const albumId = firstResult.album.id;
    const albumName = firstResult.album.title;
    const trackName = firstResult.title;
    const artistName = firstResult.artist.name;
    const albumArt = firstResult.album.cover_xl;

    const [dzTrack, dzAlbum, itunesAlbum, lyricsData] = await Promise.all([
      $fetch<DeezerTrack>(`https://api.deezer.com/track/${trackId}`),
      $fetch<DeezerAlbum>(`https://api.deezer.com/album/${albumId}`),
      $fetch<ItunesResponse>(`https://itunes.apple.com/search?term=${encodeURIComponent(albumName + ' ' + artistName)}&entity=album&limit=1`),
      $fetch<LrcLibResponse>(`https://lrclib.net/api/get?artist_name=${encodeURIComponent(artistName)}&track_name=${encodeURIComponent(trackName)}`).catch(() => null)
    ]);

    const allArtists = dzTrack.contributors
      ?.filter((c: any) => ['Main', 'featured'].includes(c.role))
      .map((c: any) => c.name)
      .join(', ') || dzTrack.artist.name;
    
    const trackPos = String(dzTrack.track_position || 1).padStart(2, '0');
    const trackTotal = String(dzAlbum.nb_tracks || 1).padStart(2, '0');
    const trackFormatted = `${trackPos}/${trackTotal}`;

    const discPos = dzTrack.disk_number || 1;
    const primaryGenre = dzAlbum.genres?.data?.[0]?.name || 'Unknown';

    const parsedItunesAlbum = typeof itunesAlbum === 'string' ? JSON.parse(itunesAlbum) : itunesAlbum;
    
    let finalComposer = 'Unknown';
    if (dzTrack.contributors) {
      const composersArray = dzTrack.contributors
        .filter((c: any) => ['Composer', 'Writer', 'Author'].includes(c.role))
        .map((c: any) => c.name);
      
      if (composersArray.length > 0) {
        finalComposer = [...new Set(composersArray)].join(', ');
      }
    }

    const copyrightStr = parsedItunesAlbum.results?.length > 0 
      ? parsedItunesAlbum.results[0].copyright 
      : '';

    return {
      ALBUM: dzAlbum.title,
      ALBUMARTIST: dzAlbum.artist.name,
      ARTIST: allArtists, 
      BPM: dzTrack.bpm || null,
      COMPOSER: finalComposer, 
      DISCNUMBER: discPos,
      ISRC: dzTrack.isrc || '',
      TITLE: dzTrack.title,
      LABEL: dzAlbum.label || '',
      COPYRIGHT: copyrightStr,
      LENGTH: dzTrack.duration,
      UNSYNCEDLYRICS: lyricsData?.plainLyrics || '',
      TRACK: trackFormatted,
      YEAR: dzAlbum.release_date || '',
      GENRE: primaryGenre,
      ALBUMART: albumArt
    }

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    return { error: 'Falló la recolección de metadatos', details: errorMessage };
  }
});