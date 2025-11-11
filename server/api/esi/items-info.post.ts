import { chunkArray, sleep } from "~/utils/utils"

type EveItem = {
    typeId: number
    name: string
    className: string
    objectType: string
    groupId: number
    categoryId: number
}

export default defineEventHandler(async (event) => {
    const body = await readBody<{ uniqueTypes?: string[] }>(event)

    if (!body.uniqueTypes || !Array.isArray(body.uniqueTypes) || body.uniqueTypes.some(n => typeof n !== 'string')) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Invalid request body. Expected { names: string[] }'
        })
    }

    const names = body?.uniqueTypes || [];

    try {

        const chunks = chunkArray(names, 499);
        let fullResult: any[] = []

        for (const [index, chunk] of chunks.entries()) {
            // STEP 1: trova gli ID a partire dai nomi
            const idsData = await $fetch('https://esi.evetech.net/latest/universe/ids/', {
                method: 'POST',
                body: chunk
            })

            const inventory_types = await idsData.inventory_types || []

            // STEP 2: per ogni item, recupera info dettagliate
            const results: EveItem[] = await Promise.all(
                inventory_types.map(async (item) => {
                    const typeResp = await fetch(`https://esi.evetech.net/latest/universe/types/${item.id}/?datasource=tranquility`)
                    if (!typeResp.ok) {
                        throw new Error(`Failed to fetch type ${item.id}`)
                    }

                    const data = await typeResp.json() as {
                        name: string
                        group_id: number
                        category_id: number
                    }

                    // STEP 3: nome del gruppo (classe)
                    const groupResp = await fetch(`https://esi.evetech.net/latest/universe/groups/${data.group_id}/?datasource=tranquility`)
                    const groupData = await groupResp.json() as { name: string, category_id: number }

                    // STEP 4: nome della categoria (tipo di oggetto)
                    const categoryResp = await fetch(`https://esi.evetech.net/latest/universe/categories/${groupData.category_id}/?datasource=tranquility`)
                    const categoryData = await categoryResp.json() as { name: string }

                    return {
                        typeId: item.id,
                        name: data.name,
                        imageUrl: `https://images.evetech.net/types/${item.id}/256.png`,
                        className: groupData.name,
                        objectType: categoryData.name,
                        groupId: data.group_id,
                        categoryId: data.category_id
                    }
                })
            )

            fullResult = [...fullResult, ...results];

            await sleep(1000); 
        }

        return fullResult
    } catch (error: any) {
        console.error(error)
        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Failed to fetch data from ESI'
        })
    }
})
