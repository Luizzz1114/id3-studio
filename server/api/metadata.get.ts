import { metadataQuerySchema } from '~~/shared/schemas/metadata.schema'

export default defineEventHandler(async (event): Promise<MetadataResponse> => {
  const query = getQuery(event)
  const result = metadataQuerySchema.safeParse(query)

  if (!result.success) {
    const errorMessages = result.error.issues.map((e) => e.message).join(', ')
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      message: errorMessages
    })
  }

  const { artist, track } = result.data

  try {
    const metadata = await getTrackMetadata(artist, track)
    return {
      success: true,
      data: metadata
    }
  } catch (error: any) {
    if (error.statusCode) {
      throw error
    }
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      message: 'Falló la recolección de metadatos en el servidor',
      data: error instanceof Error ? error.message : 'Error desconocido'
    })
  }
})
