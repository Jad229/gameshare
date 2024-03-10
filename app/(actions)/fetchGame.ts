"use server";

import { IGame } from "@/types";

async function fetchGame(id: string): Promise<IGame> {
  const response = await fetch(
    `https://api.rawg.io/api/games/${id}?key=${process.env.RAWG_API_KEY}`
  );

  if (response.ok) {
    const data = response.json();
    return data;
  }

  throw new Error("Failed to fetch game");
}

export { fetchGame };
