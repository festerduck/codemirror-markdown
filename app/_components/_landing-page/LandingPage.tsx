import Image from "next/image";

import LoadingButton from "@/components/ui/loading-button";
import { BadgeButton } from "@/components/component/badge-button";




const LandingPage = () => {


  return (
    <>
      <section className="w-full h-full px-10 flex flex-col items-center gap-3 ">
        <section className="relative w-full h-5/6 lg:h-3/4 px-4 flex flex-col items-center justify-center gap-5 lg:gap-6 rounded-[24px]">
          <BadgeButton />
          <h1 className="lg:w-1/2 text-[48px] lg:text-center text-foreground tracking-tight leading-[56px]">
            Minimal
            <span
              className={`text-[56px] pf-italic text-[#E87205] dark:text-[#FB9537]`}
            >
              {" "}
              Markdown Writer{" "}
            </span>{" "}
            for Productive People.
          </h1>
          <p className="text-center text-secondary-foreground">
            Composr offers a simple markdown writer - from writing notes &
            saving code.
          </p>
          <LoadingButton route="/login">Get Started</LoadingButton>
          <Image
            className="dark:hidden hidden lg:block lg:absolute lg:left-32  left-4 bottom-1  "
            src={"./messy.svg"}
            alt="messy"
            width={450}
            height={350}
          />
          <Image
            className="messy-dark dark:lg:block hidden absolute lg:left-32 left-4 bottom-1 "
            src={"./messy-dark.svg"}
            alt="messy"
            width={450}
            height={350} />
          <Image
            className="dark:hidden hidden lg:block lg:absolute lg:right-32 -bottom-6 right-4"
            src={"./zombie.svg"}
            alt="zombie"
            width={500}
            height={350}
          />
          <Image
            className="hidden dark:lg:block absolute lg:right-32 -bottom-6 right-0"
            src={"./zombie-dark.svg"}
            alt="zombie"
            width={500}
            height={350}
          />
        </section>
      </section>
    </>
  );
};

export default LandingPage;

