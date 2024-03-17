"use client";

import { authenticateWithGoogle } from "@/app/(actions)";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function SignInWithGoogle() {
  return (
    <form
      action={authenticateWithGoogle}
      className="flex justify-center w-[400px]"
    >
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-white text-black py-4 px-6 rounded-xl shadow-xl font-bold"
      >
        Sign In With <FcGoogle size={20} />
      </button>
    </form>
  );
}
