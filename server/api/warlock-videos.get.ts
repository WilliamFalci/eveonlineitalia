import { defineEventHandler } from 'h3'
import { parseStringPromise } from 'xml2js'

export default defineEventHandler(async () => {
  const channelId = 'UCfKSRU7Rv8WmZzojn4t8_0w'
  const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`

  const res = await fetch(feedUrl)
  if (!res.ok) {
    throw createError({ statusCode: res.status, statusMessage: 'Errore nel feed YouTube' })
  }

  const xml = await res.text()
  const json = await parseStringPromise(xml, { explicitArray: false })
  const entries = json.feed.entry || []

  return entries.map((entry: any) => ({
    id: entry['yt:videoId'],
    title: entry.title,
    thumbnail: entry['media:group']['media:thumbnail']['$']?.url,
    publishedAt: entry.published,
  }))
})
