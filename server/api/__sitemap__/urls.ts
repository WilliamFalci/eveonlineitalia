import { serverSupabase } from '../../utils/supabase'

export default defineSitemapEventHandler(async() => {
  let { data: eveonline_news } = await serverSupabase
    .from('eveonline_news')
    .select('slug')
    .order('pubDate', { ascending: false }) // DESC

  let { data: eveonline_users } = await serverSupabase
    .from('eveonline_users')
    .select('*')

  let news = [] as any
  let giocatori = [] as any
  let corporazioni = [] as any
  let giocatoriSearch = [] as any
  let blog = [] as any

  if (eveonline_news && eveonline_news?.length > 0){
    news = eveonline_news?.map((a:any) => `/blog/${a.slug}`)
    const totNews = eveonline_news.length
    blog = Array.from({ length: (Math.ceil(totNews/3)) }, (_, i) => `/blog/?page=${i+1}&take=3`);
  }

  if (eveonline_users && eveonline_users?.length > 0){
    giocatori = eveonline_users?.map((a:any) => `/giocatore/${a.eve_online_id}`)
    const totUsers = eveonline_users.length
    giocatoriSearch = Array.from({ length: (Math.ceil(totUsers/9)) }, (_, i) => `/giocatori/?page=${i+1}&take=9`);
  }

  if (eveonline_users && eveonline_users?.length > 0)
   corporazioni = eveonline_users?.filter((x:any) => x.isCeo == true).map((a:any) => `/corporazione/${a.eve_corp_id}`)

  return [...news,...corporazioni,...giocatori, ...giocatoriSearch, ...blog]
});
