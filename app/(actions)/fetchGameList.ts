"use server";

import { IGameList } from "@/types";
import { revalidatePath } from "next/cache";

async function fetchGameList(page: number): Promise<IGameList> {
  const response = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&page=${page}&page_size=5`
  );

  if (response.ok) {
    const data = response.json();
    revalidatePath("/");
    return data;
  }

  throw new Error("Failed to fetch games");
}

export { fetchGameList };
