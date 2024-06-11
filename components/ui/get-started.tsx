"use client"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react";
import { ReactNode, useState } from "react"


export default function LoadingButton({ children }: { children: ReactNode }) {
  const [load, setLoad] = useState(false);

  const handleClick = () => {
    setLoad(true)
    setTimeout(() => {
    }, 500)

    setLoad(false)
  }

  return (

    <>
      {
        !load ?
          <Button variant={"default"} className="bg-foreground font-semibold" onClick={handleClick}>
            {children}
          </Button> :
          <Button variant={"default"} className="bg-foreground font-semibold"><Loader2 className="animate-spin" /> </Button>
      }
    </>)
}
