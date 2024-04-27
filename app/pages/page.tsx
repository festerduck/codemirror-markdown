import SignIn from "../_auth/login";
import CodeMirror from "../_components/_editor/codemirror";
import LandingPage from "../_components/_landing-page/LandingPage";

export default function HomePage() {
  return (
    <main className="h-full w-full bg-black">
      <SignIn />
      {<LandingPage />}
    </main>
  );
}
