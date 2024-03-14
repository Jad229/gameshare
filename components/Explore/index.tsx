import React from "react";
import { fetchGameList } from "@/app/(actions)";
import AnimatedGameCardList from "./AnimatedGameCardList";
import PaginationArrow from "../PaginationArrow";

type props = {
  page: number;
};

export default async function Explore({ page }: props) {
  const games = await fetchGameList(page);

  return (
    <section className="flex flex-col justify-center items-center gap-10 pt-10 w-11/12 mx-auto">
      <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-sky-400 via-violet-500 to-fuchsia-500 bg-clip-text inline-block">
        Explore
      </h1>
      <div className="flex gap-5 p-2">
        <PaginationArrow direction="left" />
        <AnimatedGameCardList games={games} />
        <PaginationArrow direction="right" />
      </div>
    </section>
  );
}
