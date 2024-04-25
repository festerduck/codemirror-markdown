"use client";
import { dracula, coolGlow } from "thememirror";
import {
  autocompletion,
  closeBrackets,
  closeBracketsKeymap,
  completionKeymap,
} from "@codemirror/autocomplete";
import { vim } from "@replit/codemirror-vim";
import { defaultKeymap, history, historyKeymap } from "@codemirror/commands";
import { markdown } from "@codemirror/lang-markdown";
import { javascript } from "@codemirror/lang-javascript";
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
import { visit } from "unist-util-visit";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula as drac } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeMirror() {
  const targetElement = useRef(null);
  const initialText = "Hello This is a text";
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("");
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
          doc: initialText,
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
            ]),
            vim(),
            markdown(),
            updateListener,
            coolGlow,
            EditorView.theme({
              "&": {
                height: "500px",
                minHeight: "500px", // Use minHeight to ensure it does not shrink below this height
              },
            }),
          ],
        }),
      });
      return () => {
        editorView.destroy(); // Clean up the EditorView when component unmounts
      };
    }
  }, []);
  // const handleOnChange = (val: string) => {
  //   setValue(val);
  //   console.log(value);
  // const updatedValue = value.replace(/\n/g, "\n\n");
  const clean = DOMPurify.sanitize(value);
  // };
  return (
    <main className="w-full h-full ">
      <div className="min-h-[200px]" ref={targetElement}></div>

      <Markdown
        className={"bg-white"}
        remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
        children={clean}
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
      {/* {updatedValue} */}
    </main>
  );
}
