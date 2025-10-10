import { serverSupabase } from '../utils/supabase'

export default defineEventHandler(async (event) => {
  let { data: eveonline_users, error } = await serverSupabase
    .from('eveonline_users')
    .select('*')

  let result: any[] | PromiseLike<any[]> = []
  if (eveonline_users && eveonline_users?.length > 0){
    result = await eveonline_users.map((user) => {
      return {
        eve_online_id: user.eve_online_id,
        eve_corp_id: user.eve_corp_id,
        char_name: user.char_name,
        picture: `https://images.evetech.net/characters/${user.eve_online_id}/portrait?size=512`,
        corp_logo: `https://images.evetech.net/corporations/${user.eve_corp_id}/logo?size=128`
      }
    })

    result.push({
      eve_online_id: "789877270",
      eve_corp_id: "98630834",
      char_name: "TremalJack",
      picture: "https://images.evetech.net/characters/789877270/portrait?size=512",
      corp_logo: "https://images.evetech.net/corporations/98630834/logo?size=128"
    })
  }
  
  return result
});