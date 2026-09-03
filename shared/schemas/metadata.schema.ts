import { z } from 'zod'

export const metadataQuerySchema = z.object({
  artist: z.string().trim().min(1, 'Falta el parámetro "artist"'),
  track: z.string().trim().min(1, 'Falta el parámetro "track"')
})

export const metadataFormSchema = z.object({
  artist: z.string().trim().min(1, 'El nombre del artista es requerido'),
  track: z.string().trim().min(1, 'El nombre de la canción es requerido')
})

export type MetadataQuery = z.infer<typeof metadataQuerySchema>
export type MetadataForm = z.infer<typeof metadataFormSchema>