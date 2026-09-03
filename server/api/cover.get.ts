const ALLOWED_HOSTS = ['cdn-images.dzcdn.net', 'e-cdns-images.dzcdn.net']

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const imageUrl = query.url as string

  if (!imageUrl) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Falta el parámetro "url"'
    })
  }

  try {
    const parsedUrl = new URL(imageUrl)
    if (!ALLOWED_HOSTS.includes(parsedUrl.hostname)) {
      throw createError({
        statusCode: 403,
        statusMessage: 'Origen de imagen no autorizado. Solo se permiten portadas de Deezer.'
      })
    }
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: 'La URL proporcionada es inválida.'
    })
  }

  try {
    return sendProxy(event, imageUrl)
  } catch (error) {
    throw createError({
      statusCode: 502,
      statusMessage: 'Error al obtener la imagen desde los servidores de Deezer.'
    })
  }
})
