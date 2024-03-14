import { LoginForm } from "@/components/Forms";
import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <main className="flex flex-col lg:flex-row justify-center items-center h-screen">
      <Link href={"/"} className="text-center lg:ml-auto mt-auto lg:mt-0 p-6">
        <h1 className="text-7xl tracking-widest font-bold">
          Game
          <span className="text-transparent bg-gradient-to-r from-sky-400 via-violet-500 to-fuchsia-500 bg-clip-text inline-block">
            Share
          </span>
        </h1>
      </Link>

      <LoginForm />
    </main>
  );
}
