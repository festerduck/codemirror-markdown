import Image from "next/image";
import { ModeToggle } from "./theme-toggle";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav className="w-full py-6 px-10 flex items-start justify-between">
        <Link href={"/"} >
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
        <ModeToggle />
      </nav>
    </>
  );
}
