"use client";
import Image from "next/image";
import CodeMirror from "./components/editor/codemirror";
import Uwi from "./components/uwi/uwi";
import MdParser from "./components/md-parse/mdparser";
import { useState } from "react";
export default function Home() {
  const [value, setValue] = useState("");
  const handleReturn = (data: string) => {
    setValue(data);
    console.log("value in main: ", value);
  };
  return (
    <main className="min-h-screen gap-4 bg-neutral-800">
      <CodeMirror />
      <Uwi />
    </main>
  );
}
