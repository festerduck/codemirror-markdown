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


  return (
    <>
      <section className="w-full h-full px-10 flex flex-col items-center gap-3 ">
        <section className="relative w-full h-3/4 px-4 flex flex-col items-center justify-center gap-4   rounded-[24px]">
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
          <Link href={"/login"}>
            <Button variant={"default"} className="bg-foreground font-semibold">
              Get Started
            </Button>{" "}
          </Link>
          <Image
            className="dark:hidden absolute lg:left-32  left-4 bottom-1  "
            src={"./messy.svg"}
            alt="messy"
            width={400}
            height={300}
          />
          <Image
            className="messy-dark dark:block hidden absolute lg:left-32 left-4 bottom-1 "
            src={"./messy-dark.svg"}
            alt="messy"
            width={400}
            height={300} />
          <Image
            className="dark:hidden absolute lg:right-32 -bottom-6 right-4"
            src={"./zombie.svg"}
            alt="zombie"
            width={400}
            height={300}
          />
          <Image
            className="hidden dark:block absolute lg:right-32 -bottom-6 right-0"
            src={"./zombie-dark.svg"}
            alt="zombie"
            width={400}
            height={300}
          />
        </section>
      </section>
    </>
  );
};

export default LandingPage;

