import { createClient } from "@/utils/supabase/server";
import ShortUrl from "./components/ShortUrl";
import SignOut from "./components/SignOut";
import Link from "next/link";

export default async function Home() {
  const supabase = createClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  
  let { data: urls, error } = await supabase
    .from('urls')
    .select('*');

 

  return (
    <>
      {
        !user ? (
          <div className="loginBtns">
            <Link href="/login"><button>login</button></Link>
            <Link href="/login"><button>signup</button></Link>
          </div>
        ) : <SignOut/>
          
        
      }
    
      <ShortUrl urls={urls} user={user}/>
    </>
  );
}
