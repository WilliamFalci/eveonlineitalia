import { getFullOverview } from "../utils/scanner";
import { chunkArray, fetchWithRetry, sleep } from "../utils/utils";

type EveItem = {
    typeId: number
    name: string
    className: string
    objectType: string
    groupId: number
    categoryId: number
}

function getCurrentDateUTCMinus11(): string {
  const now = new Date();
  
  // Offset UTC-11 in minuti
  const offsetMinutes = -11 * 60;
  
  // Calcola l'orario in UTC-11
  const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
  const dateInUTCMinus11 = new Date(utcTime + offsetMinutes * 60000);

  // Formatta in YYYY-MM-DD
  const year = dateInUTCMinus11.getFullYear();
  const month = String(dateInUTCMinus11.getMonth() + 1).padStart(2, '0');
  const day = String(dateInUTCMinus11.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export async function getEsiDataLocal(names: string[]) {

    try {
        if (names.length === 0) {
            throw new Error("Missing 'names' array");
        }
    
        const chunks = chunkArray(names, 499);
        let fullChars: any[] = []
    
        for (const [index, chunk] of chunks.entries()) {
            // Step 1: risolvi i nomi → character IDs

            const idsData = await fetchWithRetry("https://esi.evetech.net/latest/universe/ids/",{
                method: "POST",
                body: JSON.stringify(chunk),
                headers: {
                    "X-Compatibility-Date": getCurrentDateUTCMinus11(),
                    "Accept-Language": "en",
                    "Content-Type": "application/json"
                }
            })
            
            const characters = (await idsData.json()).characters || [];
    
            // Step 2: per ogni character, prendi corp + alliance
            const results = await Promise.allSettled(
                characters.map(async (char: any) => {
                    const charInfo = await (await fetch(
                        `https://esi.evetech.net/latest/characters/${char.id}/`
                    )).json();
    
                    const corpInfo = await (await fetch(
                        `https://esi.evetech.net/latest/corporations/${charInfo.corporation_id}/`
                    )).json();
    
                    let allianceInfo: any = null;
                    if (charInfo.alliance_id) {
                        allianceInfo = await (await fetch(
                            `https://esi.evetech.net/latest/alliances/${charInfo.alliance_id}/`
                        )).json();
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
    } catch (e) {
        console.log(e)
    }
}

export async function getEsiDataDSscan(uniqueTypes: string[]) {
    if (!uniqueTypes || !Array.isArray(uniqueTypes) || uniqueTypes.some(n => typeof n !== 'string')) {
        throw new Error('Invalid request body. Expected { names: string[] }');
    }

    const names = uniqueTypes || [];

    try {
        const chunks = chunkArray(names, 499);
        let fullResult: any[] = [];

        for (const [index, chunk] of chunks.entries()) {
            // STEP 1: trova gli ID a partire dai nomi
            const idsData = await (await fetch('https://esi.evetech.net/latest/universe/ids/', {
                method: 'POST',
                body: JSON.stringify(chunk),
                headers: {
                    "X-Compatibility-Date": getCurrentDateUTCMinus11(),
                    "Accept-Language": "en",
                    "Content-Type": "application/json"
                }
            })).json();

            const inventory_types = await idsData.inventory_types || [];

            // STEP 2: per ogni item, recupera info dettagliate
            const results: EveItem[] = await Promise.all(
                inventory_types.map(async (item: { id: number }) => {
                    const typeResp = await fetch(`https://esi.evetech.net/latest/universe/types/${item.id}/?datasource=tranquility`, {
                        headers: { 'Accept-Language': 'en' }
                    });

                    if (!typeResp.ok) throw new Error(`Failed to fetch type ${item.id}`);

                    const data = await typeResp.json() as {
                        name: string;
                        group_id: number;
                        category_id: number;
                        dogma_attributes?: { attribute_id: number; value: number }[];
                    };

                    // STEP 3: group name
                    const groupResp = await fetch(`https://esi.evetech.net/latest/universe/groups/${data.group_id}/?datasource=tranquility`, {
                        headers: { 'Accept-Language': 'en' }
                    });
                    const groupData = await groupResp.json() as { name: string, category_id: number };

                    // STEP 4: category name
                    const categoryResp = await fetch(`https://esi.evetech.net/latest/universe/categories/${groupData.category_id}/?datasource=tranquility`, {
                        headers: { 'Accept-Language': 'en' }
                    });
                    const categoryData = await categoryResp.json() as { name: string };

                    // STEP 5: deduci il tech level
                    let techLevel = "Unknown";
                    const techAttr = data.dogma_attributes?.find(a => a.attribute_id === 422);
                    if (techAttr) {
                        const techVal = Math.round(techAttr.value);
                        techLevel = `T${techVal}`;
                    } else if (/navy|fleet|pirate|faction/i.test(data.name) || /faction/i.test(groupData.name)) {
                        techLevel = "Faction";
                    }

                    return {
                        typeId: item.id,
                        name: data.name,
                        imageUrl: `https://images.evetech.net/types/${item.id}/256.png`,
                        className: groupData.name,
                        objectType: categoryData.name,
                        groupId: data.group_id,
                        categoryId: data.category_id,
                        techLevel // e.g. "T1", "T2", "T3", "Faction"
                    };
                })
            );

            fullResult = [...fullResult, ...results];
            await sleep(1000);
        }

        return fullResult;
    } catch (error: any) {
        console.error(error);
        throw new Error('Failed to fetch data from ESI');
    }
}
