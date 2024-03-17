"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

// export const authenticateWithCredentials = async (credentials) => {}

export const authenticateWithGoogle = async () => {
  try {
    await signIn("google");
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        default:
          console.log(error);
          return "Something went wrong.";
      }
    }
    throw error;
  }
};
