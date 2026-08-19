import { z } from 'zod'

export const metadataQuerySchema = z.object({
  artist: z.string().trim().min(1, 'El parámetro artist es requerido'),
  track: z.string().trim().min(1, 'El parámetro track es requerido')
})

export type MetadataQuery = z.infer<typeof metadataQuerySchema>
