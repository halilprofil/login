"use server"

import { defaultHeader } from "@/utils/header";
import { makeid } from "@/utils/link";
import { createClient } from "@/utils/supabase/server";

export async function linkToShortAction(prevState, formData){
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    console.log(user.user_metadata.role);
    console.log(user);

    const longUrl = formData.get("longUrl");
    if(!longUrl) return { error: "Url alanı boş olamaz" }
    const regex = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/

    if(!regex.test(longUrl)) return { error: "Geçersiz bir url girdiniz" }
    const shortUrl = makeid(6);
    const response = await fetch("https://apcspemppdfwmvxshfkb.supabase.co/rest/v1/urls", {
        method: "POST",
        headers: defaultHeader,
        body: JSON.stringify({
            short_url: shortUrl,
            long_url: longUrl,
            user_id: user ? user.id : null
            
        })
    })

    if(response.ok){
        return { message: "Link başarıyla kısaltıldı" }
    }
    
}