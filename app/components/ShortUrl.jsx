"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useFormState } from "react-dom"; // useFormState ile form state'ini kontrol ediyoruz.
import { linkToShortAction } from "@/actions/link"; // Backend veya server action

export default function ShortUrl({ urls, user }) {
  const [data, setData] = useState([]);
  
  // useFormState kullanarak formun state'ini yönetiyoruz
  const [state, action] = useFormState(linkToShortAction, {
    message: null,
    error: null,
  });

  useEffect(() => {
    setData(urls);
  }, [urls]);

  // Form gönderildiğinde tetiklenen fonksiyon burada action tarafından yönetilir
  return (
    <div className="container">
      {user ? <h1>Merhaba {user.email}</h1> : ""}
      <h1>URL Kısaltıcı</h1>
      {/* Form action ile bağlanıyor */}
      <form action={action}>
        <input
          type="text"
          placeholder="Uzun URL'yi girin"
          name="longUrl" // Name değeri ile backend'e gönderiyoruz
        />
        <button type="submit">Kısalt</button>
      </form>

      {/* Action'dan gelen error ya da message'ı gösterebiliriz */}
      {state.error && <p>{state.error}</p>}
      {state.message && <p>{state.message}</p>}

      {/* Veriler render ediliyor */}
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
