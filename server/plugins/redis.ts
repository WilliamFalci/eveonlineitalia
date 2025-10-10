import { Job } from "bull";
import translate from '@iamtraction/google-translate';
import { eveOnlineNewsQueue } from '../utils/queues'
type MediaMap = Record<string, string>;


export default defineNitroPlugin(() => {
    function maskMedia(html: string): { maskedHtml: string; map: MediaMap } {
        let counterImg = 1;
        let counterVid = 1;
        const map: MediaMap = {};

        // sostituisci img
        html = html.replace(/<img\b[^>]*>/gi, (match) => {
            const key = `[[img_${counterImg++}]]`;
            map[key] = match;
            return key;
        });

        // sostituisci video (con tutto il contenuto dentro)
        html = html.replace(/<video\b[^>]*>[\s\S]*?<\/video>/gi, (match) => {
            const key = `[[vid_${counterVid++}]]`;
            map[key] = match;
            return key;
        });

        return { maskedHtml: html, map };
    }

    function restoreMedia(html: string, map: MediaMap): string {
        for (const [key, original] of Object.entries(map)) {
            const regex = new RegExp(key.replace(/[[\]]/g, "\\$&"), "gi"); // escape [[ ]]
            html = html.replace(regex, original);
        }
        return html;
    }

    function createSlug(title: string): string {
        return title
            .toLowerCase() // tutto minuscolo
            .normalize("NFD") // separa lettere accentate
            .replace(/[\u0300-\u036f]/g, "") // rimuove accenti
            .replace(/[^a-z0-9\s-]/g, "") // rimuove caratteri non validi
            .trim() // rimuove spazi iniziali e finali
            .replace(/\s+/g, "-") // sostituisce spazi con "-"
            .replace(/-+/g, "-"); // rimuove eventuali "-" multipli
    }

    const eveOnlineNewsQueueProcessor = (job: Job, done: () => void) => {
        console.log(`Processing job: ${job.id} - Processing News Translation - guid: ${job.data.guid}`);

        const { maskedHtml, map } = maskMedia(job.data.textToTranslate);
        try {
            translate(maskedHtml, { to: 'it' }).then(async (textTranslated: any) => {
                const restoredHtml = restoreMedia(textTranslated.text, map);

                let updateObj
                if (job.data.column == 'title_ita') {
                    const slug = createSlug(restoredHtml)
                    updateObj = {
                        [job.data.column]: restoredHtml,
                        slug: slug
                    };
                }else {
                    updateObj = {[job.data.column]: restoredHtml};
                }

                serverSupabase.from('eveonline_news')
                    .update([updateObj])
                    .eq('guid', job.data.guid)
                    .then(() => done())
            })
        } catch (e) {
            console.log(e)
        }
    }

    eveOnlineNewsQueue.process(eveOnlineNewsQueueProcessor)
    eveOnlineNewsQueue.on("completed", async (job) => {
        console.log(`Processing job: ${job.id} - Completed`);

        if (job.data.guid) {
            const webhookUrl = "https://discord.com/api/webhooks/1421525453180502078/0Vg57RHv0Px0MYUqlLihR8uRnoyJrhri1HDvcCiHyDLnN0153Dax9e7XSknuKUiG38gw";

            let { data: eveonline_news, error } = await serverSupabase
                .from('eveonline_news')
                .select('*')
                .eq('guid', job.data.guid)

            if (eveonline_news && eveonline_news![0] && eveonline_news![0].message == null) {
                const payload = {
                    embeds: [
                        {
                            title: eveonline_news[0].title_ita,
                            url: `https://eveonlineitalia.it/blog/${job.data.guid}`,
                            description: "Leggi l'articolo sul sito",
                            color: 0x5865F2, // blu discord
                            author: {
                                name: eveonline_news[0].author,
                            },
                            timestamp: new Date().toISOString()
                        }
                    ]
                };

                const message = await fetch(webhookUrl, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                });

                await serverSupabase.from('eveonline_news')
                    .update([{ message: message.json()}])
                    .eq('guid', job.data.guid)
            }
        }
    })
    eveOnlineNewsQueue.on("failed", async (job) => {
        if (job.failedReason === 'job stalled more than allowable limit') {
            await job.remove().catch(err => {
                console.error(`jobId: ${job.id} remove error: ${err.message}`, err.stack);
            });
        } else {
            console.log(`Processing job: ${job.id} - Failed`);
        }
    })
})