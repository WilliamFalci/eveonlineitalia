import { serverSupabase } from '../utils/supabase'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const slug = query.slug

  let { data: eveonline_news, error } = await serverSupabase
    .from('eveonline_news')
    .select('*')
    .eq('slug', slug)


  if (eveonline_news && eveonline_news.length > 0) {
    // Riga precedente
    const { data: next } = await serverSupabase
      .from('eveonline_news')
      .select('*')
      .neq('guid', eveonline_news![0].guid)
      .lte('pubDate', eveonline_news![0].pubDate)
      .order('pubDate', { ascending: false })
      .limit(1)
      .single()


    let previous = null
    if(next){
      // Riga successiva
      const { data: _previous } = await serverSupabase
        .from('eveonline_news')
        .select('*')
        .neq('guid', eveonline_news![0].guid)
        .neq('guid', next.guid)
        .gte('pubDate', eveonline_news![0].pubDate)
        .order('pubDate', { ascending: true })
        .limit(1)
        .single()

      previous = _previous
    }else{
      const { data: _previous } = await serverSupabase
        .from('eveonline_news')
        .select('*')
        .neq('guid', eveonline_news![0].guid)
        .gte('pubDate', eveonline_news![0].pubDate)
        .order('pubDate', { ascending: true })
        .limit(1)
        .single()

      previous = _previous
    }

    let prevPost = null
    if (previous){
      prevPost= {
        slug: previous.slug,
        title_ita: previous.title_ita,
        title_eng: previous.title_eng
      }
    }

    let nextPost = null
    if (next){
      nextPost= {
        slug: next.slug,
        title_ita: next.title_ita,
        title_eng: next.title_eng
      }
    }

    return {
      post: eveonline_news[0],
      prevPost: prevPost || null,
      nextPost: nextPost || null
    }
  }


  return null
});