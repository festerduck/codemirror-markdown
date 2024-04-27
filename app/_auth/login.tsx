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
import React, { useState } from "react";
import { User } from "../types/types";

const SignIn = () => {
  const [user, setUser] = useState<User>({ email: "", password: "" });
  const inputStyle =
    "w-full h-[42px] px-3 rounded-[8px] ring-0 bg-neutral-100 focus:outline-none text-sm";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(user);
  };
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
