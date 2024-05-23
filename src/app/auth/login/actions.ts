'use server'

import { createClient } from '@/utils/supabase/server'

export async function login(data: {
  email: string,
  password: string
}) {
  const supabase = await createClient()


 const result = await supabase.auth.signInWithPassword({
  email: data.email,
  password: data.password
 })

 
 return JSON.stringify(result)




}

