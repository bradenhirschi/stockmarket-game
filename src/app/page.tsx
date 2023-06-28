'use client'

import { useState } from "react";
import Square from "./square"

export default function Game() {

  const [woolworthPrice, setWoolworthPrice] = useState(30);
  const [americanMotorsPrice, setAmericanMotorsPrice] = useState(10);
  const [maytagPrice, setMaytagPrice] = useState(15);
  const [generalMillsPrice, setGeneralMillsPrice] = useState(18);
  const [westernPublishingPrice, setWesternPublishingPrice] = useState(10);
  const [jICasePrice, setJICasePrice] = useState(15);
  const [internationalShoePrice, setInternationalShoePrice] = useState(18);
  const [alcoaPrice, setAlcoaPrice] = useState(30);

  const sliderIntervals = {
    'Woolworth': 4,
    'Alcoa': 4,
    'American Motors': 2,
    'Western Publishing': 2,
    'Maytag': 1,
    'J.I. Case': 1,
    'International Shoe': .5,
    'General Mills': .5
  }

  const companies = {
    woolworth: {name: 'Woolworth', colorClass: 'bg-orange-500', price: woolworthPrice, dividend: 4},
    alcoa: { name: 'Alcoa', colorClass: 'bg-red-500', alcoaPrice, dividend: 4},
    americanMotors: { name: 'American Motors', colorClass: 'bg-blue-500', price: americanMotorsPrice, dividend: 3},
    westernPublishing: { name: 'Western Publishing', colorClass: 'bg-green-300', price: westernPublishingPrice, dividend: 3},
    maytag: { name: 'Maytag', colorClass: 'bg-green-500', price: maytagPrice, dividend: 2},
    jICase: { name: 'J. I. Case', colorClass: 'bg-yellow-500', jICasePrice, dividend: 2},
    generalMills: { name: 'General Mills', colorClass: 'bg-blue-300', price: generalMillsPrice, dividend: 1},
    internationalShoe: { name: 'International Shoe', colorClass: 'bg-purple-500', price: internationalShoePrice, dividend: 1}
  }

  const squares: Array<{company: any, direction: string} | 'Broker Fee' > = [
    'Broker Fee',
    { company: companies.internationalShoe, direction: 'counter'},
  ]



  return (
    <div>
      <>
      {squares.map((square) => (
        <Square key={square.company} company={square.company} colorClass={square.colorClass} price={square.price!} />
      ))}
      </>
    </div>
  )
}