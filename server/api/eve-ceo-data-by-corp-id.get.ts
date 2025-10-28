import { serverSupabase } from '../utils/supabase'

export default cachedEventHandler(async (event) => {
    const query = getQuery(event)
    const eve_corp_id = query.eve_corp_id 

  let { data: result, error } = await serverSupabase
    .from('eveonline_users')
    .select(`*`)
    .eq('eve_corp_id', eve_corp_id)
    .or('isCeo.eq.true, isWingDirector.eq.true')

  return result![0] ?? null
}, {
  maxAge: 60 * 60 * 24 * 7, // 1 settimana
  name: 'eve-ceo-data-by-corp-id'
});