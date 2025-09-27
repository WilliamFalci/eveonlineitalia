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

    const eveOnlineNewsQueueProcessor = (job: Job, done: () => void) => {
        console.log(`Processing job: ${job.id} - Processing News Translation - guid: ${job.data.guid}`);

        const { maskedHtml, map } = maskMedia(job.data.textToTranslate);
        try {
            translate(maskedHtml, { to: 'it' }).then(async (textTranslated: any) => {
                const restoredHtml = restoreMedia(textTranslated.text, map);
                serverSupabase.from('eveonline_news')
                    .update([{ [job.data.column]: restoredHtml }])
                    .eq('guid', job.data.guid)
                    .then(() => done())
            })
        } catch (e) {
            console.log(e)
        }
    }

    eveOnlineNewsQueue.process(eveOnlineNewsQueueProcessor)
    eveOnlineNewsQueue.on("completed", (job) => {
        console.log(`Processing job: ${job.id} - Completed`);
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