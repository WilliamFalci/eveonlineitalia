import { serverSupabase } from '../utils/supabase'

export default defineEventHandler(async () => {
    let { data: result, error } = await serverSupabase
        .from('eveonline_scanner')
        .insert([{
            dscan: null,
            lscan: null
        }])
        .select()

    return result![0] ? {id: result![0].id , createdAt: result![0].created_at} : null
})