export default defineEventHandler(async (event) => {
    const body = JSON.parse(await readBody(event));

    const id = body?.id || null;
    const type = body?.type || null;
    const data = body?.data || null

    if (id && type && data) {

        const udpatedData = []

        if (type == 'DSCAN_TYPES') udpatedData.push({ dscan_object_types: data})
        if (type == 'SYSTEM') udpatedData.push({ system: data })
        if (type == 'DSCAN') udpatedData.push({ dscan: data })
        if (type == 'LSCAN') udpatedData.push({ lscan: data })
        let { data: result, error } = await serverSupabase
            .from('eveonline_scanner')
            .update(udpatedData)
            .eq('id', id)
            .select()

        return (result && result[0]) ? result[0] : null
    } else {
        return 'Invalid Request'
    }

})