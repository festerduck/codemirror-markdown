"use client";
import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { vim } from "@replit/codemirror-vim";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Uwi() {
  const [value, setValue] = React.useState("");
  const onChange = (val: string) => {
    console.log(value);
    setValue(val);
  };
  const existingMarkdown = `# Hello World!`;
  const processedValue = value.replace(/\n/g, "\n\n");
  const updatedMarkdown = existingMarkdown + "\n\n" + processedValue + `!`;

  return (
    <>
      <CodeMirror
        value={value}
        height="200px"
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
      />

      <Markdown
        className={"bg-white"}
        remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
      >
        {updatedMarkdown}
      </Markdown>
    </>
  );
}
export default Uwi;
