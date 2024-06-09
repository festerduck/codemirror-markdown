"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  CardTitle,
  CardDescription,
  CardContent,
  Card,
} from "@/components/ui/card";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NotesHome() {
  const router = useRouter();
  const handleNewNote = () => {
    const notesId = Math.random().toString(36).substring(7);
    router.push(`/notes/${notesId}`);
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="flex items-center h-14 border-b shrink-0 lg:h-16">
        <div className="container flex items-center gap-4 px-4 md:gap-8 md:px-6">
          <Link
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
            href="#"
          >
            <Package2Icon className="w-6 h-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <nav className="hidden gap-4 text-sm font-medium lg:flex lg:gap-5">
            <Link className="text-gray-500 dark:text-gray-400" href="#">
              Notes
            </Link>
            <Link className="font-semibold" href="#">
              Tags
            </Link>
            <Link className="text-gray-500 dark:text-gray-400" href="#">
              Settings
            </Link>
          </nav>
          <form className="flex-1 ml-auto md:w-[400px] lg:w-[300px]">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                className="w-full bg-white shadow-none appearance-none pl-8 dark:bg-gray-950"
                placeholder="Search notes..."
                type="search"
              />
            </div>
          </form>
        </div>
      </header>
      <main className="flex-1 overflow-auto p-4 md:p-6">
        <div className="container flex flex-col gap-4 md:gap-8">
          <div className="grid items-center gap-2 md:grid-cols-2">
            <h1 className="text-2xl font-semibold">All Notes</h1>
            <Button
              className="justify-self-end"
              size="sm"
              onClick={handleNewNote}
            >
              New Note
            </Button>
          </div>
          <div className="grid gap-4">
            <Card>
              <CardContent className="flex flex-col pt-6 md:flex-row items-start md:items-center gap-4 md:gap-8">
                <div className="flex flex-col gap-1 md:gap-2">
                  <CardTitle className="text-base font-semibold">
                    Meeting Notes
                  </CardTitle>
                  <CardDescription className="text-sm">
                    Notes from the weekly meeting
                  </CardDescription>
                </div>
                <div className="ml-auto flex flex-col justify-center gap-2 text-sm shrink-0">
                  <time className="font-medium text-sm">2 hours ago</time>
                  <div className="flex items-center gap-3">
                    <Button className="rounded-full w-6 h-6" size="icon">
                      <Link2Icon className="w-4 h-4" />
                      <span className="sr-only">Edit note</span>
                    </Button>
                    <Button className="rounded-full w-6 h-6" size="icon">
                      <TrashIcon className="w-4 h-4" />
                      <span className="sr-only">Delete note</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

interface Package2IconProps extends React.SVGProps<SVGSVGElement> { }
function Link2Icon(props: Package2IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 17H7A5 5 0 0 1 7 7h2" />
      <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
      <line x1="8" x2="16" y1="12" y2="12" />
    </svg>
  );
}
function Package2Icon(props: Package2IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function SearchIcon(props: Package2IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function TrashIcon(props: Package2IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
