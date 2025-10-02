import { createClient } from "@/utils/superbase/client";

const supabase = createClient()


export default async function updateProfile(firstName:string,lastName:string,email:string,avatarFile?:File ){
    const {data:{user}} = await supabase.auth.getUser();
    if(!user) throw new Error("not authenticated")

    let avatar_url: string | null = null;

    if(avatarFile){
        const {data,error} = await supabase.storage.from("avatars").upload(`${user.id}/${avatarFile.name}`, avatarFile, {
        upsert: true,
      });
       if (error) throw error;
    avatar_url = data.path;

    }
     const { error } = await supabase
    .from("profiles")
    .upsert({
      id: user.id,
      first_name: firstName,
      last_name: lastName,
      email:email,
      avatar_url,
      updated_at: new Date(),
    });

  if (error) throw error;
    

}


