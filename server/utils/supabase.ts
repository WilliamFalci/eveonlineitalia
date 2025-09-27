import { createClient } from '@supabase/supabase-js'

const config = useRuntimeConfig()

export const serverSupabase = createClient(
  config.public.supabaseUrl as string,
  config.public.supabaseAnonKey as string
)