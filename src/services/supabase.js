import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv';
config()
const SUPABASE_URL='https://yvgixqrdlesydfrdvwbj.supabase.co'
console.log('Variables', process.env)

const supabase = createClient(SUPABASE_URL, process.env.SUPABASE_API_KEY)
export default supabase