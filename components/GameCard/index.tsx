import { IGame } from "@/types";
import Image from "next/image";
import React from "react";
import { FaPlus } from "react-icons/fa";

type props = {
  game: IGame;
};

export default function GameCard({ game }: props) {
  return (
    <div className="flex flex-col items-center justify-center w-80 gap-3 bg-zinc-700 rounded-lg shadow-xl cursor-pointer hover:scale-110">
      <div className="w-full h-40 overflow-hidden relative">
        <Image
          src={game.background_image}
          alt="game cover"
          className="min-h-full object-cover rounded-md"
          width={500}
          height={500}
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold">{game.name}</h2>
      </div>
      <div className="p-4 w-full flex justify-between items-center ">
        <button className="bg-violet-500 py-2 px-4 rounded-lg transition-all hover:scale-105 shadow-xl ">
          More Info
        </button>
        <button className="bg-sky-500 py-3 px-4 rounded-lg text-black transition-all hover:scale-105 shadow-xl">
          <FaPlus />
        </button>
      </div>
    </div>
  );
}
