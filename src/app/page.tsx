"use client";

import { useState } from "react";
import Board from "./board";

const Game = () => {
  return (
    <div className="flex flex-col items-center m-10">
      <h1 className="font-serif font-bold uppercase text-5xl mb-4">
        Stock Market
      </h1>

      <Board />
    </div>
  );
};

export default Game;
