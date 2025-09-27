export default defineEventHandler((event) => {
  const origin = getHeader(event, 'origin')

  // consenti solo il tuo dominio
  const allowedOrigin = 'https://miodominio.com'

  if (origin === allowedOrigin) {
    setHeader(event, 'Access-Control-Allow-Origin', allowedOrigin)
    setHeader(event, 'Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
    setHeader(event, 'Access-Control-Allow-Headers', 'Content-Type, Authorization')
  }

  // gestisci preflight OPTIONS
  if (event.node.req.method === 'OPTIONS') {
    event.node.res.statusCode = 204
    return 'OK'
  }
})