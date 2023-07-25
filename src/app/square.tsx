import { AiFillStar } from "react-icons/ai";

const Square = ({ square, player }: { square: any; player: any }) => {
  const isPlayerOnSquare = player.position === square.gamePosition;

  return (
    <>
      <div
        className={`flex flex-col items-center justify-center uppercase tracking-tighter text-xs font-bold text-center h-[100px] w-[100px] border border-black p-2 ${
          square.company ? square.company.color : ""
        } `}
      >
        {square.type === "start" ? "Start" : ""}
        {square.type === "brokerFee" ? "Broker Fee" : ""}
        {square.type === "sellAll" ? `Sell all ${square.company.name}` : ""}
        {square.type === "stock" ? square.company.name : ""}
        <div> {square.gamePosition}</div>
        <div>{isPlayerOnSquare ? <AiFillStar size="24" /> : ""}</div>
        <div>{square.direction}</div>
      </div>
    </>
  );
};

export default Square;
