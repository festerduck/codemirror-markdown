"use client"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react"


export default function LoadingButton({ children, route }: { children: ReactNode, route?: string }) {
  const [load, setLoad] = useState(false);
  const router = useRouter()
  const handleClick = () => {
    setLoad(true)
    if (route) {
      setTimeout(() => {

        router.push(route)
        setLoad(false)
      }, 500)
    }
  }

  return (

    <>
      {
        load ?

          <Button variant={"default"} className="bg-foreground font-semibold"><Loader2 className="animate-spin" /> </Button> :
          <Button variant={"default"} className="bg-foreground font-semibold" onClick={handleClick}>
            {children}
          </Button>
      }
    </>)
}
