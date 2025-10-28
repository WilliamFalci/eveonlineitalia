import { serverSupabase } from '../utils/supabase'

export default cachedEventHandler(async (event) => {
  const query = getQuery(event)
  const guid = query.guid 

  let { data: eveonline_news, error } = await serverSupabase
    .from('eveonline_news')
    .select('*')
    .eq('guid', guid)

  return eveonline_news![0] ?? null
}, {
  maxAge: 60 * 60 * 24 * 365, // 1 anno
  name: 'eve-news-by-guid'
});