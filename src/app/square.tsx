const Square = ({ square }: { square: any }) => {
  return (
    <>
      <div
        className={`flex items-center justify-center uppercase tracking-tighter text-xs font-bold text-center h-[100px] w-[100px] border border-black p-2 ${
          square.company ? square.company.color : ""
        }`}
      >
        {square.type === "start" ? "Start" : ""}
        {square.type === "brokerFee" ? "Broker Fee" : ""}
        {square.type === "sellAll" ? `Sell all ${square.company.name}` : ""}
        {square.type === "stock" ? square.company.name : ""}
      </div>
    </>
  );
};

export default Square;
