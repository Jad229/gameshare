"use client";
import React from "react";
import { GameCard } from "..";
import { IGame, IGameList } from "@/types";
import { motion } from "framer-motion";

type props = {
  games: IGameList;
};

export default function AnimatedGameCardList({ games }: props) {
  const gameCardList = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const gameCardWrapper = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      {games && (
        <motion.div
          initial="hidden"
          variants={gameCardList}
          animate="visible"
          className="flex flex-wrap justify-center items-center gap-10 overflow-scroll p-4"
        >
          {games.results.map((game: IGame) => (
            <motion.div variants={gameCardWrapper} key={game.id}>
              <GameCard game={game} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
}
