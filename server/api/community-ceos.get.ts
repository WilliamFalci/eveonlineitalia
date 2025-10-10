import { serverSupabase } from '../utils/supabase'

export default defineEventHandler(async (event) => {
  let { data: eveonline_ceos, error } = await serverSupabase
    .from('eveonline_users')
    .select(`
      eve_online_id,
      eve_corp_id,
      char_name`)
    .eq('isCeo', true)


  let result: any[] | PromiseLike<any[]> = []
  if (eveonline_ceos && eveonline_ceos?.length > 0){
    result = await eveonline_ceos.map((ceo) => {
      return {
        eve_online_id: ceo.eve_online_id,
        eve_corp_id: ceo.eve_corp_id,
        char_name: ceo.char_name,
        picture: `https://images.evetech.net/characters/${ceo.eve_online_id}/portrait?size=512`,
        corp_logo: `https://images.evetech.net/corporations/${ceo.eve_corp_id}/logo?size=512`
      }
    })  
  }

  return result
});