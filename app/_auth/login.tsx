"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SignIn = () => {
  const inputStyle =
    "w-full h-[42px] px-3 rounded-[8px] ring-0 bg-neutral-100 focus:outline-none text-sm";
  return (
    <>
      <Card className="mx-auto max-w-sm min-h-[500px] flex flex-col justify-center">
        <CardHeader className="text-center">
          <CardTitle className="font-medium">Welcome to Composr</CardTitle>
          <CardDescription>
            Ready to dive back in? Sign in below
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <form className="flex flex-col gap-3">
            <input
              className={inputStyle}
              type="text"
              placeholder="Email or Username"
              required
            />
            <input
              className={inputStyle}
              type="password"
              placeholder="Password"
              required
            />
            <Button type="submit" className="w-full h-[42px]">
              Sign in
            </Button>
          </form>
          <div className="text-sm text-center text-neutral-500 mt-2">
            Forgot your password?{" "}
            <Link href={"#"} className="text-neutral-800 font-medium">
              Reset
            </Link>{" "}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default SignIn;
