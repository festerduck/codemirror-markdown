"use client"

import { SVGProps } from "@/app/types/types"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export function BadgeButton() {
  const theme = useTheme();


  return (
    <>

      <Button className="w-70 h-8 px-4 py-2 font-normal text-black dark:text-white bg-transparent hover:bg-transparent rounded-full shadow-sm    ring-black  dark:ring-white ring-1 focus:outline-none   " >
        <span className="flex items-center">
          <span>New snippets added</span>
          {theme.theme == "light" ? <CloudLightningIcon className="mx-2 text-yellow-300" /> : <CloudLightningIconDark className="mx-2 text-yellow-300" />}

          {/*  <span>Read more</span>

          {theme.theme == "light" ? <ArrowRightIcon className="ml-2" /> : <ArrowRightIconDark className="ml-2" />}
          */}</span>
      </Button>
    </>
  )
}

function ArrowRightIcon(props: SVGProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#E87205"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
function ArrowRightIconDark(props: SVGProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FB9537"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function CloudLightningIcon(props: SVGProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#E87205"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
      <path d="m13 12-3 5h4l-3 5" />
    </svg>
  )
}
function CloudLightningIconDark(props: SVGProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FB9537"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
      <path d="m13 12-3 5h4l-3 5" />
    </svg>
  )
}
