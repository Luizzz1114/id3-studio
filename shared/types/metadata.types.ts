export interface DeezerContributor {
  name: string
  role: string
}

export interface DeezerTrack {
  id: number
  title: string
  duration: number
  isrc?: string
  bpm?: number
  track_position?: number
  disk_number?: number
  artist: { name: string }
  album: { id: number; title: string; cover_xl: string }
  contributors?: DeezerContributor[]
}

export interface DeezerAlbum {
  nb_tracks?: number
  title: string
  label?: string
  release_date?: string
  artist: { name: string }
  genres?: { data: { name: string }[] }
}

export interface ItunesResponse {
  results?: { copyright?: string }[]
}

export interface LrcLibResponse {
  plainLyrics?: string
}

export interface TrackMetadataPayload {
  TITLE?: string
  ARTIST?: string
  ALBUM?: string
  YEAR?: string | number
  GENRE?: string
  BPM?: string | number
  LENGTH?: string | number
  TRACK?: string | number
  DISCNUMBER?: string | number
  ALBUMARTIST?: string
  COMPOSER?: string
  LABEL?: string
  ISRC?: string
  COPYRIGHT?: string
  ALBUMART?: string
  UNSYNCEDLYRICS?: string
  [key: string]: string | number | undefined
}

export interface MetadataRecord {
  label: string
  value: string | number | null
}

export interface MetadataResponse {
  success: boolean
  data?: TrackMetadataPayload
  error?: string
  details?: string
}

export interface ErrorState {
  type: number | string
  message: string
}
