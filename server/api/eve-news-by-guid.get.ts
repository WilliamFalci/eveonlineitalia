import { serverSupabase } from '../utils/supabase'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const guid = query.guid 

  let { data: eveonline_news, error } = await serverSupabase
    .from('eveonline_news')
    .select('*')
    .eq('guid', guid)

  return eveonline_news![0] ?? null
});