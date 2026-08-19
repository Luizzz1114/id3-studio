export interface DeezerContributor {
  name: string;
  role: string;
}

export interface DeezerTrack {
  id: number;
  title: string;
  duration: number;
  isrc?: string;
  bpm?: number;
  track_position?: number;
  disk_number?: number;
  artist: { name: string };
  album: { id: number; title: string; cover_xl: string };
  contributors?: DeezerContributor[];
}

export interface DeezerAlbum {
  nb_tracks?: number;
  title: string;
  label?: string;
  release_date?: string;
  artist: { name: string };
  genres?: { data: { name: string }[] };
}

export interface ItunesResponse {
  results?: { copyright?: string }[];
}

export interface LrcLibResponse {
  plainLyrics?: string;
}

export interface MetadataResponse {
  ALBUM: string;
  ALBUMARTIST: string;
  ARTIST: string;
  BPM: number | null;
  COMPOSER: string;
  DISCNUMBER: number;
  ISRC: string;
  TITLE: string;
  LABEL: string;
  COPYRIGHT: string;
  LENGTH: number;
  UNSYNCEDLYRICS: string;
  TRACK: string;
  YEAR: string;
  GENRE: string;
  ALBUMART: string;
}

export interface MetadataRecord {
  label: string
  value: string | number | null
}

export interface Response {
  success: boolean;
  data?: MetadataResponse;
  error?: string;
  details?: string;
}