import { eveMember } from '~/types/eve';
import { serverSupabase } from '../utils/supabase'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  const take = Number(query.take) ?? 9
  const page = Number(query.page) ?? 1
  const q = query.q ?? null
  const queryTake = (page == 1) ? 0 : ((Number(page-1) * Number(take)))
  
  let _count = null
  let dataUsers = null
  
  if (q !== null){
    const { data, count } = await serverSupabase
      .from('eveonline_users')
      .select('*', { count: 'exact', head: true })
      .ilike('char_name', `%${q.toString()}%`)

    let { data: eveonline_users, error } = await serverSupabase
      .from('eveonline_users')
      .select('*')
      .ilike('char_name', `%${q.toString()}%`)
      .order('eve_online_id', { ascending: false })
      .range(queryTake, queryTake + (take-1))

    dataUsers = eveonline_users
    _count = count
  }else{
    const { data, count } = await serverSupabase
      .from('eveonline_users')
      .select('*', { count: 'exact', head: true })
      
    let { data: eveonline_users, error } = await serverSupabase
      .from('eveonline_users')
      .select('*')
      .order('eve_online_id', { ascending: false })
      .range(queryTake, queryTake + (take-1))

    dataUsers = eveonline_users
    _count = count
  }

  const totPages = Math.ceil(Number(_count) / Number(take))

  let result: any[] | PromiseLike<any[]> = []
  if (dataUsers && dataUsers?.length > 0) {
    result = await dataUsers.map((user) => {
      return {
        eve_online_id: user.eve_online_id,
        eve_corp_id: user.eve_corp_id,
        char_name: user.char_name,
        picture: `https://images.evetech.net/characters/${user.eve_online_id}/portrait?size=512`,
        corp_logo: `https://images.evetech.net/corporations/${user.eve_corp_id}/logo?size=128`
      }
    })
  }

  return {
    elements: result as eveMember[],
    totalElements: _count,
    currPage: Number(page),
    prevPage: (Number(page) > 1) ? Number(page) - 1 : null,
    nextPage: (Number(page) < totPages) ? Number(page) + 1 : null,
    totPages: Number(totPages)
  }
});