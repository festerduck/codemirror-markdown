import Image from "next/image"
import { ModeToggle } from "./theme-toggle";

export default function NavBar() {

  return (
    <>
      <nav className="w-full py-8 px-10 flex items-start justify-between">
        <div className="flex gap-2 items-center cursor-pointer pointer-events-none">
          <Image
            className="w-8 h-8"
            src={"./logo.svg"}
            alt="logo"
            width={34}
            height={34}
            priority={true}
          />
          <span className="logo text-lg text-black font-semibold">Composr</span>
        </div>

        <ModeToggle />
      </nav>
    </>
  );
}
