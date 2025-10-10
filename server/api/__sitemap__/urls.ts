import { serverSupabase } from '../../utils/supabase'

export default defineSitemapEventHandler(async() => {
  let { data: eveonline_news, error } = await serverSupabase
    .from('eveonline_news')
    .select('slug')
    .order('pubDate', { ascending: false }) // DESC

  if (eveonline_news && eveonline_news?.length > 0)
   return eveonline_news?.map((a:any) => `/blog/${a.slug}`)


  return []
});
