"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useFormState } from "react-dom"; 
import { linkToShortAction } from "@/actions/link"; 

export default function ShortUrl({ urls, user }) {
  const [data, setData] = useState([]);
  
  
  const [state, action] = useFormState(linkToShortAction, {
    message: null,
    error: null,
  });

  useEffect(() => {
    setData(urls);
  }, [urls]);

  
  return (
    <div className="container">
      {user ? <h1>Merhaba {user.user_metadata.firstName}</h1> : ""}
      <h1>URL Kısaltıcı</h1>
     
      <form action={action}>
        <input
          type="text"
          placeholder="Uzun URL'yi girin"
          name="longUrl" 
        />
        <button type="submit">Kısalt</button>
      </form>

      
      {state.error && <p>{state.error}</p>}
      {state.message && <p>{state.message}</p>}

   
      {data && (
        <div className="url-list">
          {data.map((x) => (
            <p key={x.id}>
              <Link href={x.long_url}>{x.short_url}</Link> - {x.long_url}
              <button>Sil</button>
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
