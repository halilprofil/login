"use client"; 

import { useRouter } from 'next/navigation';
import { createClient } from "@/utils/supabase/client"; 

export default function SignOutButton() {
  const router = useRouter();
  const supabase = createClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh(); 
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
}