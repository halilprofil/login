"use client"
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ShortUrl({urls ,user}) {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [data, setData] = useState([]);

  console.log(user)

  useEffect(()=>{
    setData(urls)

  },[data])


  const generateShortUrl = () => {
    return Math.random().toString(36).substring(2, 8);
  };

  const handleSubmit = async () => {
    const short = generateShortUrl();
    setShortUrl(short);

    const response = await fetch('https://apcspemppdfwmvxshfkb.supabase.co/rest/v1/urls', {
      method: 'POST',
      headers: {
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwY3NwZW1wcGRmd212eHNoZmtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4MDI2ODUsImV4cCI6MjA0MzM3ODY4NX0.QSLFWq25bHcLDnVSOKWS6tCJlQ6tFCvIhLacXO6iqko',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwY3NwZW1wcGRmd212eHNoZmtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4MDI2ODUsImV4cCI6MjA0MzM3ODY4NX0.QSLFWq25bHcLDnVSOKWS6tCJlQ6tFCvIhLacXO6iqko',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ long_url: longUrl, short_url: short , user_id: user.id })
    });

    if (response.ok) {
      alert("URL kısaltıldı!");
    } else {
      alert("Bir hata oluştu.");
    }
  };

  const handleDelete = async (id) => {
    const response = await fetch(`https://apcspemppdfwmvxshfkb.supabase.co/rest/v1/urls?id=eq.${id}`, {
      method: 'DELETE',
      headers: {
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwY3NwZW1wcGRmd212eHNoZmtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4MDI2ODUsImV4cCI6MjA0MzM3ODY4NX0.QSLFWq25bHcLDnVSOKWS6tCJlQ6tFCvIhLacXO6iqko',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwY3NwZW1wcGRmd212eHNoZmtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4MDI2ODUsImV4cCI6MjA0MzM3ODY4NX0.QSLFWq25bHcLDnVSOKWS6tCJlQ6tFCvIhLacXO6iqko'
      }
      
    });
  
    const result = await response.json();
    
    if (response.ok) {
      alert("URL silindi!");
      setData(data.filter(item => item.id !== id));
    } else {
      console.error("Silme hatası:", result);
      alert("Silme işlemi başarısız oldu.");
    }
  };
  
  

  return (
    <div className="container">
      {user ? <h1>merhaba {user.email}</h1> : ''}
      <h1>URL Kısaltıcı</h1>
      <input 
        type="text" 
        placeholder="Uzun URL'yi girin" 
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
      />
      <button onClick={handleSubmit}>Kısalt</button>

      {data && (
        <div className="url-list">
          {data.map(x => (
            <p key={x.id}>
              <Link href={x.long_url}>{x.short_url}</Link> - {x.long_url}
              <button onClick={() => handleDelete(x.id)}>Sil</button>
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
