import { fetchGame } from "@/app/(actions)";
import { IGame } from "@/types";
import React from "react";

type props = {
  params: {
    id: string;
  };
};

export default async function GamePage({ params }: props) {
  const { id } = params;

  const game: IGame = await fetchGame(id);
  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-10 h-[85vh] my-3">
      <div
        className="relative flex h-full w-full items-center overflow-hidden rounded-2xl bg-cover bg-center"
        style={{
          backgroundImage: `url(${game?.background_image})`,
        }}
      ></div>
      <div className="h-full md:w-1/2 xl:w-1/3 flex flex-col gap-10 justify-center items-center p-4">
        <h1 className="text-3xl font-bold">{game.name}</h1>
        <div className="bg-zinc-800 rounded-xl shadow-inner drop-shadow-2xl h-[400px] overflow-scroll p-3 ">
          <p className="text-lg">{game.description_raw}</p>
        </div>
        <button className="bg-violet-500 inline-block w-full p-6 font-bold text-xl rounded-xl shadow-xl">
          Add To Library
        </button>
      </div>
    </section>
  );
}
