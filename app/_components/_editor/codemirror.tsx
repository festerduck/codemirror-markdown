"use client";
import { dracula } from "@ddietr/codemirror-themes/dracula.js";

import {
  autocompletion,
  closeBrackets,
  closeBracketsKeymap,
  completionKeymap,
} from "@codemirror/autocomplete";
import {
  defaultKeymap,
  history,
  historyKeymap,
  indentWithTab,
} from "@codemirror/commands";
import { markdown } from "@codemirror/lang-markdown";
import {
  bracketMatching,
  defaultHighlightStyle,
  foldGutter,
  foldKeymap,
  indentOnInput,
  syntaxHighlighting,
} from "@codemirror/language";
import { lintKeymap } from "@codemirror/lint";
import { highlightSelectionMatches, searchKeymap } from "@codemirror/search";
import { EditorState } from "@codemirror/state";
import {
  crosshairCursor,
  drawSelection,
  dropCursor,
  EditorView,
  highlightActiveLine,
  highlightActiveLineGutter,
  highlightSpecialChars,
  keymap,
  lineNumbers,
  rectangularSelection,
} from "@codemirror/view";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useRef, useEffect, useState } from "react";
import DOMPurify from "dompurify";
// import { visit } from "unist-util-visit";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula as drac } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "@/components/ui/button";

export default function CodeMirror() {
  const targetElement = useRef(null);
  const initialText = "Hello This is a text";
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("");
  const [edit, setEdit] = useState(true);
  useEffect(() => {
    if (targetElement.current) {
      const updateListener = EditorView.updateListener.of((update) => {
        if (update.docChanged) {
          const newValue = update.state.doc.toString();
          setValue(newValue);
        }
      });
      const editorView = new EditorView({
        parent: targetElement.current,
        state: EditorState.create({
          doc: value,
          extensions: [
            lineNumbers(),
            highlightActiveLineGutter(),
            highlightSpecialChars(),
            history(),
            foldGutter(),
            drawSelection(),
            dropCursor(),
            EditorState.allowMultipleSelections.of(true),
            indentOnInput(),
            syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
            bracketMatching(),
            closeBrackets(),
            autocompletion(),
            rectangularSelection(),
            crosshairCursor(),
            highlightActiveLine(),
            highlightSelectionMatches(),
            keymap.of([
              ...closeBracketsKeymap,
              ...defaultKeymap,
              ...searchKeymap,
              ...historyKeymap,
              ...foldKeymap,
              ...completionKeymap,
              ...lintKeymap,
              indentWithTab,
            ]),
            markdown(),
            updateListener,
            dracula,
            EditorView.theme({
              "&": {
                height: "100%",

                // minHeight: "500px", // Use minHeight to ensure it does not shrink below this height
              },
            }),
          ],
        }),
      });
      return () => {
        editorView.destroy(); // Clean up the EditorView when component unmounts
      };
    }
  }, [edit]);
  // const clean = DOMPurify.sanitize(value);

  function formatMarkdownInput(input: string) {
    let formattedInput = input.replace(/\n/g, "  \n");

    return formattedInput;
  }

  // processing the newlines so that instead of the double spaces and double return, only single keypress adds a newline.
  const processedInput =
    value == "" ? "The document has been deleted." : formatMarkdownInput(value);

  return (
    <section className="w-full h-full p-4">
      <div className="w-full h-full flex flex-col items-center  text-foreground border border-foreground rounded-lg">
        <div className="bottons w-full h-12 flex gap-2 border-b-foreground border-b  p-1">
          <Button
            className="text-xs"
            size={"sm"}
            variant={edit ? "default" : "secondary"}
            onClick={() => setEdit(true)}
          >
            Edit
          </Button>
          <Button
            className="text-xs"
            size={"sm"}
            variant={edit ? "secondary" : "default"}
            onClick={() => setEdit(false)}
          >
            Preview
          </Button>
        </div>
        <div className="section w-full h-full flex">
          {edit ? (
            <div className="w-full h-full" ref={targetElement}></div>
          ) : (
            <Markdown
              className={"w-full h-full bg-white"}
              remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
              children={processedInput}
              components={{
                code(props) {
                  const { children, className, node, ...rest } = props;
                  const match = /language-(\w+)/.exec(className || "");
                  const getLang = match ? match[1] : "";
                  setLanguage(getLang);
                  console.log(language);
                  return match ? (
                    <SyntaxHighlighter
                      // {...rest}
                      PreTag="div"
                      children={String(children).replace(/\n$/, "")}
                      language={match[1]}
                      style={drac}
                    />
                  ) : (
                    <code {...rest} className={className}>
                      {children}
                    </code>
                  );
                },
              }}
            />
          )}{" "}
        </div>
      </div>
    </section>
  );
}
