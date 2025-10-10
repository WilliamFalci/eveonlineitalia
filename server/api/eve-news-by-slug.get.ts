import { serverSupabase } from '../utils/supabase'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const slug = query.slug 

  let { data: eveonline_news, error } = await serverSupabase
    .from('eveonline_news')
    .select('*')
    .eq('slug', slug)

  return eveonline_news![0] ?? null
});