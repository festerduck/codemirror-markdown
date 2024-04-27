"use client";
import NavBar from "@/components/navbar";
import SignIn from "../_auth/login";
import CodeMirror from "../_components/_editor/codemirror";
import LandingPage from "../_components/_landing-page/LandingPage";
import { useState } from "react";
export default function HomePage() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <main className="h-full w-full bg-white">
      <NavBar />
      {!authenticated ? <LandingPage /> : <h1>Sign in</h1>}
    </main>
  );
}
