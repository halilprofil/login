
import ShortUrl from "./components/ShortUrl";


export default async function Home() {

  const data = await fetch('https://apcspemppdfwmvxshfkb.supabase.co/rest/v1/urls?select=*', {
    headers: {
      'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwY3NwZW1wcGRmd212eHNoZmtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4MDI2ODUsImV4cCI6MjA0MzM3ODY4NX0.QSLFWq25bHcLDnVSOKWS6tCJlQ6tFCvIhLacXO6iqko',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwY3NwZW1wcGRmd212eHNoZmtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4MDI2ODUsImV4cCI6MjA0MzM3ODY4NX0.QSLFWq25bHcLDnVSOKWS6tCJlQ6tFCvIhLacXO6iqko'  // Yetkilendirme için de eklemen gerekiyor
    }
  }).then(r => r.json());

  return (
    <>
    <ShortUrl data={data}/>
    </>
  );
}


