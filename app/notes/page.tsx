import NavBar from "@/components/navbar";
import CodeMirror from "../_components/_editor/codemirror";
import Main from "@/components/main";

export default function Notes() {
  return (
    <Main>
      <NavBar />
      <CodeMirror />
    </Main>
  );
}
