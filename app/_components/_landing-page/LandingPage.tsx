import Image from "next/image";
import { Playfair_Display } from "next/font/google";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import SignIn from "@/app/_auth/login";
import Link from "next/link";
import { cookies } from "next/headers";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";



const playfair = Playfair_Display({ subsets: ["latin"] });

const LandingPage = () => {
  const [btn, setBtn] = useState(false);

  const supabase = createClientComponentClient();

  return (
    <>
      <main className="w-full h-full px-10 flex flex-col items-center gap-3 bg-background">
        <section className="relative w-full h-3/4 px-4 flex flex-col items-center justify-center gap-4 bg-[#F1F1F1] dark:bg-neutral-800 rounded-[24px]">
          <h1 className="text-[48px] text-center text-foreground tracking-tight leading-[48px]">
            Minimal{" "}
            <span
              className={`text-[56px] pf-italic text-[#E87205] dark:text-[#FB9537]`}
            >
              {" "}
              Markdown Writer{" "}
            </span>{" "}
            for <br /> Productive People.
          </h1>
          <p className="text-center text-secondary-foreground">
            Composr offers a simple markdown writer - from writing notes &
            <br />
            saving code.
          </p>
          <Link href={btn ? "/notes" : "/login"}>
            <Button variant={"default"} className="bg-foreground font-semibold">
              Get Started
            </Button>{" "}
          </Link>
          <Image
            className="dark:hidden absolute left-32 bottom-1 "
            src={"./messy.svg"}
            alt="messy"
            width={434}
            height={326}
          />
          <Image
            className="messy-dark dark:block hidden absolute left-32 bottom-1"
            src={"./messy-dark.svg"}
            alt="messy"
            width={434}
            height={326}
          />
          <Image
            className="dark:hidden absolute right-32 -bottom-6"
            src={"./zombie.svg"}
            alt="zombie"
            width={465}
            height={348}
          />
          <Image
            className="hidden dark:block absolute right-32 -bottom-6"
            src={"./zombie-dark.svg"}
            alt="zombie"
            width={465}
            height={348}
          />
        </section>
      </main>
      )
    </>
  );
};

export default LandingPage;
