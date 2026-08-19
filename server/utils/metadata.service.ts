export const getTrackMetadata = async (artist: string, track: string) => {
  const searchQuery = encodeURIComponent(`artist:"${artist}" track:"${track}"`)
  const searchUrl = `https://api.deezer.com/search?q=${searchQuery}`

  const dzSearch = await $fetch<{ data: any[] }>(searchUrl)
  const firstResult = dzSearch.data[0] || null

  if (!firstResult) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Not Found',
      message: 'Canción no encontrada'
    })
  }

  const trackId = firstResult.id
  const albumId = firstResult.album.id
  const albumName = firstResult.album.title
  const trackName = firstResult.title
  const artistName = firstResult.artist.name
  const albumArt = firstResult.album.cover_xl

  const [dzTrack, dzAlbum, itunesAlbum, lyricsData] = await Promise.all([
    $fetch<any>(`https://api.deezer.com/track/${trackId}`),
    $fetch<any>(`https://api.deezer.com/album/${albumId}`),
    $fetch<any>(`https://itunes.apple.com/search?term=${encodeURIComponent(albumName + ' ' + artistName)}&entity=album&limit=1`),
    $fetch<any>(`https://lrclib.net/api/get?artist_name=${encodeURIComponent(artistName)}&track_name=${encodeURIComponent(trackName)}`).catch(() => null)
  ])

  const allArtists =
    dzTrack.contributors
      ?.filter((c: any) => ['Main', 'featured'].includes(c.role))
      .map((c: any) => c.name)
      .join(', ') || dzTrack.artist.name

  const trackPos = String(dzTrack.track_position || 1).padStart(2, '0')
  const trackTotal = String(dzAlbum.nb_tracks || 1).padStart(2, '0')
  const trackFormatted = `${trackPos}/${trackTotal}`

  const discPos = dzTrack.disk_number || 1
  const primaryGenre = dzAlbum.genres?.data?.[0]?.name || 'Unknown'

  const parsedItunesAlbum = typeof itunesAlbum === 'string' ? JSON.parse(itunesAlbum) : itunesAlbum

  let finalComposer = 'Unknown'
  if (dzTrack.contributors) {
    const composersArray = dzTrack.contributors.filter((c: any) => ['Composer', 'Writer', 'Author'].includes(c.role)).map((c: any) => c.name)

    if (composersArray.length > 0) {
      finalComposer = [...new Set(composersArray)].join(', ')
    }
  }

  const copyrightStr = parsedItunesAlbum.results?.length > 0 ? parsedItunesAlbum.results[0].copyright : ''

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
}
