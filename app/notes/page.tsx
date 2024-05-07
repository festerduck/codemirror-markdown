import NavBar from "@/components/navbar";
import CodeMirror from "../_components/_editor/codemirror";
import Main from "@/components/main";

import { supabase } from "@/lib/supabaseClient";
import { useRouter, redirect } from "next/navigation";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';


export default async function Notes() {

  const supabase = createServerComponentClient({ cookies });


  const { data: { user } } = await supabase.auth.getUser()

  console.log(user)
  if (!user) {
    redirect('/login')

  }
  return (
    <Main>
      <CodeMirror />
    </Main>
  );
}
