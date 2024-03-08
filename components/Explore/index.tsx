import React from "react";
import { GameCard, Pagination } from "..";
import { IGame } from "@/types";
import { fetchGameList } from "@/app/(actions)";

type props = {
  page: number;
};

export default async function Explore({ page }: props) {
  const games = await fetchGameList(page);

  return (
    <section className="flex flex-col justify-center items-center gap-10 pt-10">
      <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-sky-400 via-violet-500 to-fuchsia-500 bg-clip-text inline-block">
        Explore
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-10 overflow-scroll p-4">
        {games.results.map((game: IGame) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      <Pagination />
    </section>
  );
}
