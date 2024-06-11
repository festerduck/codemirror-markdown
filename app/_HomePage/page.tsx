"use server"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import LandingPage from "../_components/_landing-page/LandingPage";
;
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
export default async function HomePage() {

  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getUser();

  if (data?.user) {
    redirect('/notes');
  }



  return (
    <LandingPage />
  );
}
