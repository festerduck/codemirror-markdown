"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

import React, { useState } from "react";
import { User } from "../types/types";
import Image from "next/image";

//Supabase
import { useRouter } from "next/navigation";

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { AuthError } from "@supabase/supabase-js";
import { AlertCircle, Loader2 } from "lucide-react";
import LoadingButton from "@/components/ui/loading-button";



const SignIn = () => {
  const supabase = createClientComponentClient();
  const [user, setUser] = useState<User>({ email: "", password: "" });
  const [errorAuth, setErrorAuth] = useState<string>("")
  const [load, setLoad] = useState(false)
  const router = useRouter();



  const inputStyle =
    "w-full h-[52px] px-3 rounded-[8px] ring-0 dark:bg-background bg-neutral-100 text-foreground focus:outline-none dark:focus:ring text-sm";



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorAuth("")
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoad(true)

    setErrorAuth("")
    e.preventDefault();
    const email = user.email;
    const password = user.password;

    const { error } = await supabase.auth.signInWithPassword({
      email, password
    })

    if (error) {
      console.error("Error message: ", error.message)
      setErrorAuth(error.message);
      setLoad(false)
    }
    else {

      router.refresh()

      setLoad(false)
    }
    console.log(user);
  };
  return (
    <>
      <Card className="mx-auto w-full h-4/6 md:w-[26rem] md:min-h-[500px] bg-transparent md:bg-transparent border-0 md:border flex flex-col rounded-[16px] justify-center gap-2">
        <CardHeader className="text-center">
          <CardTitle className="font-semibold text-foreground flex flex-col items-center gap-4">
            <Image src={"./logo.svg"} className="dark:hidden" alt="logo" height={60} width={60} />
            <Image src={"./logo-dark.svg"} className="hidden dark:block" alt="logo" height={60} width={60} />
            Welcome to Composr
          </CardTitle>
          <CardDescription className="text-secondary-foreground">
            Ready to dive back in? Sign in below
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <input
              name="email"
              className={inputStyle}
              type="email"
              placeholder="Email or Username"
              value={user.email}
              onChange={handleInputChange}
              required
            />
            <input
              name="password"
              className={inputStyle}
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={handleInputChange}
              required
            />
            {
              !load ? (
                <Button type="submit" className="w-full h-[52px]" variant={"default"}>
                  Sign in
                </Button>
              ) :

                <Button className="w-full h-[52px] " ><Loader2 className="animate-spin" /></Button>

            }
          </form>
          {
            errorAuth &&
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                {errorAuth}
              </AlertDescription>
            </Alert>
          }
          <div className="text-sm text-center text-secondary-foreground mt-2">
            Forgot your password?{" "}
            <Link href={"#"} className="text-foreground  font-semibold">
              Reset
            </Link>{" "}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default SignIn;
