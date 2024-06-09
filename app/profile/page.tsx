
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function ProfileInfo() {
  "use server"
  const cookieStore = cookies()
  const supabase = createServerComponentClient({
    cookies: () => cookieStore
  })

  const {
    data: { session }
  } = await supabase.auth.getSession()

  if (!session) {
    redirect("/login")
  }

  const user = session.user.email


  return <h2>{user}</h2>
}