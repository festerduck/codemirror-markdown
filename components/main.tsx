import { ReactNode } from "react";

export default function Main({ children }: { children: ReactNode }) {
  return (
    <main className="w-full h-full flex flex-col items-center ">
      {children}
    </main>
  );
}
