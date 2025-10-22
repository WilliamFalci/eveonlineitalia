import { serverSupabase } from '../utils/supabase'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const slug = query.slug

  let { data: eveonline_news, error } = await serverSupabase
    .from('eveonline_news')
    .select('*')
    .eq('slug', slug)


  if (eveonline_news && eveonline_news.length > 0) {
    // Riga precedente
    const { data: previous } = await serverSupabase
      .from('posts')
      .select('*')
      .lt('guid', eveonline_news![0].guid)
      .order('id', { ascending: false })
      .limit(1)
      .single()

    // Riga successiva
    const { data: next } = await serverSupabase
      .from('posts')
      .select('*')
      .gt('guid', eveonline_news![0].id)
      .order('id', { ascending: true })
      .limit(1)
      .single()

    return {
      post: eveonline_news[0],
      previousPost: previous || null,
      nextPost: next || null
    }
  }


  return null
});