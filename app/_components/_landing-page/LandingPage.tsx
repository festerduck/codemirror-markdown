import Image from "next/image";
import { Playfair_Display } from "next/font/google";

import { Button } from "@/components/ui/button";

const playfair = Playfair_Display({ subsets: ["latin"] });
const LandingPage = () => {
  return (
    <>
      <main className="w-full h-full px-10 flex flex-col items-center gap-3 bg-white">
        <section className="relative w-full h-3/4 px-4 flex flex-col items-center justify-center gap-3 bg-[#F1F1F1] rounded-[24px]">
          <h1 className="text-[48px] text-center text-neutral-800 tracking-tight leading-[48px]">
            Minimal{" "}
            <span className={`text-[56px] pf-italic text-[#E87205]`}>
              {" "}
              Markdown Writer{" "}
            </span>{" "}
            for <br /> Productive People.
          </h1>
          <p className="text-center text-neutral-600">
            Composr offers a simple markdown writer - from writing notes &
            <br />
            saving code.
          </p>
          <Button>Get Started</Button>
          <Image
            className="absolute left-32 bottom-1"
            src={"./messy.svg"}
            alt="messy"
            width={434}
            height={326}
          />
          <Image
            className="absolute right-32 -bottom-6"
            src={"./zombie.svg"}
            alt="zombie"
            width={465}
            height={348}
          />
        </section>
      </main>
    </>
  );
};

export default LandingPage;
