import { getFullOverview } from "~/utils/scanner";
import { chunkArray, sleep } from "~/utils/utils";

export default defineEventHandler(async (event) => {
  const body = await readBody<{ names: string[] }>(event);
  const names = body?.names || [];

  if (names.length === 0) {
    throw createError({ statusCode: 400, message: "Missing 'names' array" });
  }

  const chunks = chunkArray(names, 499);
  let fullChars: any[] = []

  for (const [index, chunk] of chunks.entries()) {
    // Step 1: risolvi i nomi → character IDs
    const idsData = await $fetch("https://esi.evetech.net/latest/universe/ids/", {
      method: "POST",
      body: chunk,
    });

    const characters = idsData.characters || [];

    // Step 2: per ogni character, prendi corp + alliance
    const results = await Promise.allSettled(
      characters.map(async (char: any) => {
        const charInfo = await $fetch(
          `https://esi.evetech.net/latest/characters/${char.id}/`
        );

        const corpInfo = await $fetch(
          `https://esi.evetech.net/latest/corporations/${charInfo.corporation_id}/`
        );

        let allianceInfo: any = null;
        if (charInfo.alliance_id) {
          allianceInfo = await $fetch(
            `https://esi.evetech.net/latest/alliances/${charInfo.alliance_id}/`
          );
        }

        // Costruisci le URL immagini
        const imageBase = "https://images.evetech.net";
        const portraitUrl = `${imageBase}/characters/${char.id}/portrait?size=64`;
        const corpLogoUrl = `${imageBase}/corporations/${charInfo.corporation_id}/logo?size=64`;
        const allianceLogoUrl = charInfo.alliance_id
          ? `${imageBase}/alliances/${charInfo.alliance_id}/logo?size=64`
          : null;

        return {
          name: char.name,
          portraitUrl,
          corporation: corpInfo.name,
          corpTicker: corpInfo.ticker,
          corpLogoUrl,
          alliance: allianceInfo?.name || null,
          allianceTicker: allianceInfo?.ticker || null,
          allianceLogoUrl,
        };
      })
    );

    const resultChars = results
    .filter((r) => r.status === "fulfilled")
    .map((r: any) => r.value);

    fullChars = [...fullChars, ...resultChars];

    await sleep(1000); 
  }

  const overview = getFullOverview(fullChars)
  return overview;
});
