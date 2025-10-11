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
    
    result = (await Promise.all(eveonline_ceos.map(async(ceo) => {
      const zkillboard = await (await fetch(`https://zkillboard.com/api/stats/corporationID/${ceo.eve_corp_id}/`)).json()
      return {
        eve_online_id: ceo.eve_online_id,
        eve_corp_id: ceo.eve_corp_id,
        char_name: ceo.char_name,
        picture: `https://images.evetech.net/characters/${ceo.eve_online_id}/portrait?size=512`,
        corp_logo: `https://images.evetech.net/corporations/${ceo.eve_corp_id}/logo?size=512`,
        corp_name: zkillboard.info.name,
        corp_member_count: zkillboard.info.member_count,
        corp_ticker: zkillboard.info.ticker,
        corp_top_list: zkillboard.topLists
      }
    }))).sort((a,b)=> {
      return b.corp_member_count - a.corp_member_count
    })
  }

  return result
});