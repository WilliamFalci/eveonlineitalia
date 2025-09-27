import Parser from "rss-parser";
import { IBlog } from "~/types/blog-type";
import { serverSupabase } from '../utils/supabase'
import { eveOnlineNewsQueue } from "../utils/queues";

export async function fetchEveNews() {
    console.log("Cronjob eseguito:", new Date());
    const parser = new Parser();
    const feed = await parser.parseURL("https://www.eveonline.com/rss");

    const news: IBlog[] = feed.items.map((item: any) => {
        const blog = item as IBlog;
        return {
            title: blog.title,
            link: blog.link,
            author: blog.author,
            category: blog.category,
            guid: blog.guid,
            pubDate: blog.pubDate,
            content: blog.content,
        };
    });

    for await (const article of news) {
        let { data: eveonline_news, error } = await serverSupabase
            .from('eveonline_news')
            .select('*')
            .eq('guid', article.guid)

        if (!eveonline_news || eveonline_news.length == 0) {
            await serverSupabase.from('eveonline_news')
                .upsert({
                    title_eng: article.title,
                    link: article.link,
                    author: article.author,
                    category: article.category,
                    guid: article.guid,
                    pubDate: article.pubDate,
                    content_eng: article.content,
                })
                .select()
            eveOnlineNewsQueue.add({ guid: article.guid, textToTranslate: article.title, column: 'title_ita' }, { removeOnComplete: true, priority: 1 })
            eveOnlineNewsQueue.add({ guid: article.guid, textToTranslate: article.content, column: 'content_ita' }, { removeOnComplete: true, priority: 1 })
        }
    }

    console.log('Cronjob completed')
}