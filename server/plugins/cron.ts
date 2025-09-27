import { useScheduler } from "#scheduler"
import { fetchEveNews } from "../cron/fetch";

export default defineNitroPlugin(() => {
  startScheduler()
})

function startScheduler() {
  const scheduler = useScheduler();

  scheduler.run(async() => {
    await fetchEveNews()
  }).cron('0 0,12 * * *');

  fetchEveNews()
}