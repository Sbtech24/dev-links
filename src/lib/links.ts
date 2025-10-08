import { createClient } from "@/utils/superbase/client";


export async function getUserLinks(userId:string){
const supabase = await createClient()
   const {data,error} = await supabase.from("links").select("*").eq("user_id",userId)

   if(error) throw error
   return data
}
export async function addLinks(userId:string,platform: string, url: string){
const supabase = await createClient()
   const {data,error} = await supabase.from("links").insert([{user_id:userId,platform,url}]).select().single()

   if(error) throw error
   return data[0]
}

export  async function removeLinks(linkId:string){
const supabase = await createClient()
   const {error} = await supabase.from("links").delete().eq("id",linkId)

   if(error) throw error

}
export async function updateLink(linkId: string, updates: { platform?: string; url?: string }) {
const supabase = await createClient()
 
    const { data, error } = await supabase
    .from("links")
    .update(updates)
    .eq("id", linkId)
    .select()
    .single();

  if (error) throw error;
  return data;
}
