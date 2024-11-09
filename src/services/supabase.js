import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL='https://yvgixqrdlesydfrdvwbj.supabase.co'

const supabase = createClient(SUPABASE_URL, import.meta.env.VITE_SUPABASE_API_KEY)

export default supabase