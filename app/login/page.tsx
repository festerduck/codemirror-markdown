import SignIn from "../_auth/login";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Login() {


  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (data?.session) {
    redirect('/notes');
  }

  return (
    <div className=" w-full h-5/6 flex flex-col items-center justify-center">
      <SignIn />
    </div>
  );
}
