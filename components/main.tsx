import { ReactNode } from "react";
import { BgLightGradient6 } from "./ui/background-grid";

export default function Main({ children }: { children: ReactNode }) {
  return (
    <main className="w-full h-full relative flex flex-col items-center ">
      <BgLightGradient6 />
      {children}
    </main>
  );
}
