import { defineEventHandler, setHeader } from 'h3'

export default defineEventHandler((event) => {
  const url = event.node.req.url || ''
  
  // Applica cache solo alle immagini
  if (url.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
    // Cache per 30 giorni
    setHeader(event, 'Cache-Control', 'public, max-age=2592000, immutable')
  }
})