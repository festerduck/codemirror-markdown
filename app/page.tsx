"use client";
import Image from "next/image";
import CodeMirror from "./_components/_editor/codemirror";
import { useState } from "react";
import HomePage from "./pages/page";
export default function Home() {
  return (
    <main className="w-full h-full">
      <HomePage />
    </main>
  );
}
