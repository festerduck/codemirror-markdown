"use client"
import Image from "next/image";
import { ModeToggle } from "./theme-toggle";
import Link from "next/link";
import { ProfileIcon } from "./ui/profile-icon";
import { useEffect, useState } from "react";
import { Session, createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Button } from "./ui/button";
import LoadingButton from "./ui/loading-button";
import { Loader2 } from "lucide-react";

export default function NavBar({ session }: { session: Session | null }) {
  // const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const supabase = createClientComponentClient();
      const { data } = await supabase.auth.getSession();
      if (data) {
        setLoading(false)
      }
      // setSession(data.session);
    };
    getSession();
  }, [session]);

  return (
    <>
      <nav className="w-full py-6 px-10 flex items-start justify-between">
        <Link href={"/"}>
          <div className="flex gap-2 items-center cursor-pointer">
            <Image
              className="dark:hidden w-8 h-8"
              src={"./logo.svg"}
              alt="logo"
              width={34}
              height={34}
              priority={true}
            />
            <Image
              className="hidden dark:block w-8 h-8"
              src={"./logo-dark.svg"}
              alt="logo"
              width={34}
              height={34}
              priority={true}
            />
            <span className="logo text-lg text-foreground font-semibold">
              Composr
            </span>
          </div>
        </Link>
        <div className="flex items-center justify-between gap-6">
          {loading && <Button ><Loader2 className="animate-spin" /></Button>}
          {session && !loading && <ProfileIcon />}
          {!session && !loading &&
            <Link href={"/login"}>
              <Button >Login</Button>
            </Link>
          }
          <ModeToggle />
        </div>
      </nav>
    </>
  );
}
