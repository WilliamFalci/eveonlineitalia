import { useNuxtApp } from "nuxt/app";
import { IBlog } from "~/types/blog-type";
import { serverSupabase } from '../utils/supabase'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  const take = query.take ?? 3
  const page = query.page ?? 1

  const queryTake = (page == 1) ? (Number(take)-1) : ((Number(page)*Number(take))-1)
  const { data, count } = await serverSupabase
    .from('eveonline_news')
    .select('*', { count: 'exact', head: true })

  let { data: eveonline_news, error } = await serverSupabase
    .from('eveonline_news')
    .select('*')
    .order('pubDate', { ascending: false }) // DESC
    .range(queryTake-2,queryTake)

  const totPages = Math.ceil(Number(count) / Number(take))

  const result = {
    elements: eveonline_news as IBlog[],
    totalElements: count,
    currPage: Number(page),
    prevPage: (Number(page) > 1) ? Number(page) +1 : null,
    nextPage: (Number(page) < totPages) ? Number(page) + 1 : null,
    totPages: Number(totPages)
  }

  console.log(result)
  
  return result
});