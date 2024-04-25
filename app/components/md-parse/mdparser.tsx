import React from "react";


export default function Uwi({ props }: { props: string }) {
  const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| ahekklsdkl | | bback |
| ---------- | | ----- |
| Hello | | Hwllo |
| ---------- | |  ----- |
This ~is not~ strikethrough, but ~~this is~~
!`;
  return (
    <>
    </>
  );
}
