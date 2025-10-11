import { serverSupabase } from '../utils/supabase'

export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const eve_online_id = query.eve_online_id 

  let { data: result, error } = await serverSupabase
    .from('eveonline_users')
    .select(`discord_id`)
    .eq('eve_online_id', eve_online_id)

  return result![0] ?? null
});