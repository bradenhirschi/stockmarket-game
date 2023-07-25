"use client";

import { useState } from "react";
import Square from "./square";
import React from "react";

const Board = () => {
  const [woolworthPrice, setWoolworthPrice] = useState(30);
  const [americanMotorsPrice, setAmericanMotorsPrice] = useState(10);
  const [maytagPrice, setMaytagPrice] = useState(15);
  const [generalMillsPrice, setGeneralMillsPrice] = useState(18);
  const [westernPublishingPrice, setWesternPublishingPrice] = useState(10);
  const [jICasePrice, setJICasePrice] = useState(15);
  const [internationalShoePrice, setInternationalShoePrice] = useState(18);
  const [alcoaPrice, setAlcoaPrice] = useState(30);

  const sliderIntervals = {
    Woolworth: 4,
    Alcoa: 4,
    "American Motors": 2,
    "Western Publishing": 2,
    Maytag: 1,
    "J.I. Case": 1,
    "International Shoe": 0.5,
    "General Mills": 0.5,
  };

  const [roll, setRoll] = useState(0);

  const [player, setPlayer] = useState({
    position: 6,
  });

  function rollTheDice() {
    let localDiceRoll;
    let localPlayerPosition = player.position;

    // Generate dice roll
    const dieOne = Math.floor(Math.random() * 6 + 1);
    const dieTwo = Math.floor(Math.random() * 6 + 1);
    localDiceRoll = dieOne + dieTwo;

    // Set roll purely to display to the player
    setRoll(localDiceRoll);

    // Find which square the player is occupying
    let currentlyOccupiedSquare = squares.find(
      (square) => square.gamePosition === player.position
    );

    // Move function's local player variable
    if (currentlyOccupiedSquare.type === "start") {
      if (localDiceRoll % 2 === 0) {
        // If roll is even, move the player counterclockwise
        localPlayerPosition -= localDiceRoll;
      } else {
        // If roll is odd, move the player clockwise
        localPlayerPosition += localDiceRoll;
      }
    } else if (currentlyOccupiedSquare.direction === "clock") {
      localPlayerPosition += localDiceRoll;
    } else if (currentlyOccupiedSquare.direction === "counter") {
      localPlayerPosition -= localDiceRoll;
    }

    // Correct if player position moves past the 0 square
    if (localPlayerPosition < 0) {
      localPlayerPosition += 48;
    } else if (localPlayerPosition > 47) {
      localPlayerPosition -= 48;
    }

    // Update player position to show to user
    setPlayer({ position: localPlayerPosition });

    {
      /*setDiceRolled(roll)
		dicesPlayed.push(roll)
		moveTokenOnBoard()
		setLandedCardPreview(true)
		collectTaxes()
    inJail()*/
    }
  }

  const companies = {
    woolworth: {
      name: "Woolworth",
      color: "bg-orange-500",
      price: woolworthPrice,
      dividend: 4,
    },
    alcoa: { name: "Alcoa", color: "bg-red-700", alcoaPrice, dividend: 4 },
    americanMotors: {
      name: "Am. Motors",
      color: "bg-blue-500",
      price: americanMotorsPrice,
      dividend: 3,
    },
    westernPublishing: {
      name: "Western Pub.",
      color: "bg-lime-500",
      price: westernPublishingPrice,
      dividend: 3,
    },
    maytag: {
      name: "Maytag",
      color: "bg-emerald-600",
      price: maytagPrice,
      dividend: 2,
    },
    jICase: {
      name: "J. I. Case",
      color: "bg-yellow-500",
      jICasePrice,
      dividend: 2,
    },
    generalMills: {
      name: "General Mills",
      color: "bg-teal-500",
      price: generalMillsPrice,
      dividend: 1,
    },
    internationalShoe: {
      name: "Int. Shoe",
      color: "bg-rose-600",
      price: internationalShoePrice,
      dividend: 1,
    },
  };

  const squares: any[] = [
    {
      type: "brokerFee",
      gamePosition: 0,
      physicalPosition: 0,
      direction: "counter",
    },
    {
      type: "sellAll",
      gamePosition: 1,
      physicalPosition: 1,
      company: companies.jICase,
      direction: "counter",
    },
    {
      type: "stock",
      gamePosition: 2,
      physicalPosition: 2,
      company: companies.internationalShoe,
      direction: "counter",
    },
    {
      type: "stock",
      gamePosition: 3,
      physicalPosition: 3,
      company: companies.maytag,
      direction: "counter",
    },
    {
      type: "stock",
      gamePosition: 4,
      physicalPosition: 4,
      company: companies.westernPublishing,
      direction: "clock",
    },
    {
      type: "stock",
      gamePosition: 5,
      physicalPosition: 5,
      company: companies.woolworth,
      direction: "clock",
    },
    { type: "start", gamePosition: 6, physicalPosition: 6 },
    {
      type: "stock",
      gamePosition: 7,
      physicalPosition: 7,
      company: companies.alcoa,
      direction: "clock",
    },
    {
      type: "stock",
      gamePosition: 8,
      physicalPosition: 8,
      company: companies.americanMotors,
      direction: "clock",
    },
    {
      type: "stock",
      gamePosition: 9,
      physicalPosition: 9,
      company: companies.jICase,
      direction: "clock",
    },
    {
      type: "stock",
      gamePosition: 10,
      physicalPosition: 10,
      company: companies.generalMills,
      direction: "clock",
    },
    {
      type: "sellAll",
      gamePosition: 11,
      physicalPosition: 11,
      company: companies.maytag,
      direction: "clock",
    },
    {
      type: "brokerFee",
      gamePosition: 12,
      physicalPosition: 12,
      direction: "counter",
    },

    {
      type: "sellAll",
      gamePosition: 47,
      physicalPosition: 13,
      company: companies.westernPublishing,
      direction: "clock",
    },
    {
      type: "sellAll",
      gamePosition: 13,
      physicalPosition: 14,
      company: companies.woolworth,
      direction: "counter",
    },
    {
      type: "stock",
      gamePosition: 46,
      physicalPosition: 15,
      company: companies.alcoa,
      direction: "clock",
    },
    {
      type: "stock",
      gamePosition: 14,
      physicalPosition: 16,
      company: companies.americanMotors,
      direction: "counter",
    },
    {
      type: "stock",
      gamePosition: 45,
      physicalPosition: 17,
      company: companies.americanMotors,
      direction: "clock",
    },
    {
      type: "stock",
      gamePosition: 15,
      physicalPosition: 18,
      company: companies.alcoa,
      direction: "counter",
    },
    {
      type: "stock",
      gamePosition: 44,
      physicalPosition: 19,
      company: companies.maytag,
      direction: "clock",
    },
    {
      type: "stock",
      gamePosition: 16,
      physicalPosition: 20,
      company: companies.generalMills,
      direction: "clock",
    },
    {
      type: "stock",
      gamePosition: 43,
      physicalPosition: 21,
      company: companies.generalMills,
      direction: "clock",
    },
    {
      type: "stock",
      gamePosition: 17,
      physicalPosition: 22,
      company: companies.maytag,
      direction: "clock",
    },
    { type: "start", gamePosition: 42, physicalPosition: 23 },
    { type: "start", gamePosition: 18, physicalPosition: 24 },
    {
      type: "stock",
      gamePosition: 41,
      physicalPosition: 25,
      company: companies.internationalShoe,
      direction: "clock",
    },
    {
      type: "stock",
      gamePosition: 19,
      physicalPosition: 26,
      company: companies.jICase,
      direction: "clock",
    },
    {
      type: "stock",
      gamePosition: 40,
      physicalPosition: 27,
      company: companies.jICase,
      direction: "clock",
    },
    {
      type: "stock",
      gamePosition: 20,
      physicalPosition: 28,
      company: companies.internationalShoe,
      direction: "clock",
    },
    {
      type: "stock",
      gamePosition: 39,
      physicalPosition: 29,
      company: companies.westernPublishing,
      direction: "counter",
    },
    {
      type: "stock",
      gamePosition: 21,
      physicalPosition: 30,
      company: companies.woolworth,
      direction: "clock",
    },
    {
      type: "stock",
      gamePosition: 38,
      physicalPosition: 31,
      company: companies.woolworth,
      direction: "counter",
    },
    {
      type: "stock",
      gamePosition: 22,
      physicalPosition: 32,
      company: companies.westernPublishing,
      direction: "clock",
    },
    {
      type: "sellAll",
      gamePosition: 37,
      physicalPosition: 33,
      company: companies.americanMotors,
      direction: "counter",
    },
    {
      type: "sellAll",
      gamePosition: 23,
      physicalPosition: 34,
      company: companies.alcoa,
      direction: "clock",
    },
    {
      type: "brokerFee",
      gamePosition: 36,
      physicalPosition: 35,
      direction: "counter",
    },

    {
      type: "sellAll",
      gamePosition: 35,
      physicalPosition: 36,
      company: companies.internationalShoe,
      direction: "clock",
    },
    {
      type: "stock",
      gamePosition: 34,
      physicalPosition: 37,
      company: companies.maytag,
      direction: "clock",
    },
    {
      type: "stock",
      gamePosition: 33,
      physicalPosition: 38,
      company: companies.generalMills,
      direction: "clock",
    },
    {
      type: "stock",
      gamePosition: 32,
      physicalPosition: 39,
      company: companies.alcoa,
      direction: "clock",
    },
    {
      type: "stock",
      gamePosition: 31,
      physicalPosition: 40,
      company: companies.americanMotors,
      direction: "clock",
    },
    { type: "start", gamePosition: 30, physicalPosition: 41 },
    {
      type: "stock",
      gamePosition: 29,
      physicalPosition: 42,
      company: companies.westernPublishing,
      direction: "clock",
    },
    {
      type: "stock",
      gamePosition: 28,
      physicalPosition: 43,
      company: companies.woolworth,
      direction: "clock",
    },
    {
      type: "stock",
      gamePosition: 27,
      physicalPosition: 44,
      company: companies.internationalShoe,
      direction: "counter",
    },
    {
      type: "stock",
      gamePosition: 26,
      physicalPosition: 45,
      company: companies.jICase,
      direction: "counter",
    },
    {
      type: "sellAll",
      gamePosition: 25,
      physicalPosition: 46,
      company: companies.generalMills,
      direction: "counter",
    },
    {
      type: "brokerFee",
      gamePosition: 24,
      physicalPosition: 47,
      direction: "counter",
    },
  ];

  return (
    <>
      <button onClick={rollTheDice}>Roll the dice</button>
      <div>Your roll: {roll}</div>

      <div className="relative">
        <div className="grid grid-cols-13 h-[1300px] w-[1300px]">
          {squares.map((square) => (
            <div
              key={square.gamePosition}
              className={
                square.gamePosition <= 47 && square.gamePosition >= 37
                  ? "col-span-12"
                  : ""
              }
            >
              {square.gamePosition <= 47 && square.gamePosition >= 37 ? (
                <div className="grid grid-cols-12">
                  <Square square={square} player={player} />
                  <div className="col-span-11"></div>
                </div>
              ) : (
                <Square square={square} player={player} />
              )}
            </div>
          ))}
        </div>

        <div className="absolute top-[100px] left-[300px] grid grid-cols-7">
          <div className="h-[100px] w-[100px]">
            <div className="grid grid-rows-2 h-full">
              <div className="flex items-center justify-center uppercase tracking-tighter text-xs font-bold border">
                1 for 1
              </div>
              <div className="flex items-center justify-center uppercase tracking-tighter text-xs font-bold border">
                2 for 1
              </div>
            </div>
          </div>
          <div className="h-[100px] w-[100px]">
            <div className="grid grid-rows-2 h-full">
              <div className="flex items-center justify-center uppercase tracking-tighter text-xs font-bold border">
                1
              </div>
              <div className="flex items-center justify-center uppercase tracking-tighter text-xs font-bold border">
                3 for 1
              </div>
            </div>
          </div>
          <div className="h-[100px] w-[100px]">
            <div className="grid grid-rows-2 h-full">
              <div className="flex items-center justify-center uppercase tracking-tighter text-xs font-bold border">
                1
              </div>
              <div className="flex items-center justify-center uppercase tracking-tighter text-xs font-bold border">
                2 for 1
              </div>
            </div>
          </div>
          <div className="h-[100px] w-[100px]">
            <div className="grid grid-rows-2 h-full">
              <div className="flex items-center justify-center uppercase tracking-tighter text-xs font-bold border">
                1
              </div>
              <div className="flex items-center justify-center uppercase tracking-tighter text-xs font-bold border">
                3 for 1
              </div>
            </div>
          </div>
          <div className="h-[100px] w-[100px]">
            <div className="grid grid-rows-2 h-full">
              <div className="flex items-center justify-center uppercase tracking-tighter text-xs font-bold border">
                1
              </div>
              <div className="flex items-center justify-center uppercase tracking-tighter text-xs font-bold border">
                2 for 1
              </div>
            </div>
          </div>
          <div className="h-[100px] w-[100px]">
            <div className="grid grid-rows-2 h-full">
              <div className="flex items-center justify-center uppercase tracking-tighter text-xs font-bold border">
                1
              </div>
              <div className="flex items-center justify-center uppercase tracking-tighter text-xs font-bold border">
                3 for 1
              </div>
            </div>
          </div>
          <div className="h-[100px] w-[100px]">
            <div className="grid grid-rows-2 h-full">
              <div className="flex items-center justify-center uppercase tracking-tighter text-xs font-bold border">
                1 for 1
              </div>
              <div className="flex items-center justify-center uppercase tracking-tighter text-xs font-bold border">
                2 for 1
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
