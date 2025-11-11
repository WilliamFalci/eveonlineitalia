export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const id = body?.id || null;

    if (id) {
        let { data: result, error } = await serverSupabase
            .from('eveonline_scanner')
            .select()
            .eq('id', id)
            
        return (result && result[0]) ? result[0] : null
    } else {
        return 'Invalid Request'
    }

})