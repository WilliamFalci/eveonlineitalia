import { IBlog } from "~/types/blog-type";
import { serverSupabase } from '../utils/supabase'

export default cachedEventHandler(async (event) => {
  const query = getQuery(event)

  const take = Number(query.take) ?? 3
  const page = Number(query.page) ?? 1
  const q = query.q ?? null
  const queryTake = (page == 1) ? 0 : ((Number(page-1) * Number(take)))

  let _count = null
  let dataNews = null
  
  if (q !== null){
    const { data, count } = await serverSupabase
      .from('eveonline_news')
      .select('*', { count: 'exact', head: true })
      .ilike('title_ita', `%${q.toString()}%`)

    let { data: eveonline_news, error } = await serverSupabase
      .from('eveonline_news')
      .select('*')
      .ilike('title_ita', `%${q.toString()}%`)
      .order('pubDate', { ascending: false })
      .order('guid', { ascending: false })
      .range(queryTake, queryTake + (take-1))

    dataNews = eveonline_news
    _count = count
  }else{
    const { data, count } = await serverSupabase
      .from('eveonline_news')
      .select('*', { count: 'exact', head: true })
      
    let { data: eveonline_news, error } = await serverSupabase
      .from('eveonline_news')
      .select('*')
      .order('pubDate', { ascending: false })
      .order('guid', { ascending: false })
      .range(queryTake, queryTake + (take-1))

    dataNews = eveonline_news
    _count = count
  }

  const totPages = Math.ceil(Number(_count) / Number(take))

  const result = {
    elements: dataNews as IBlog[],
    totalElements: _count,
    currPage: Number(page),
    prevPage: (Number(page) > 1) ? Number(page) - 1 : null,
    nextPage: (Number(page) < totPages) ? Number(page) + 1 : null,
    totPages: Number(totPages)
  }  
  return result
}, {
  name: 'eve-news',
  maxAge: 60 * 60 * 12, // 12 ore
})