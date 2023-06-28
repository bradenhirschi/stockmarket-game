const Square = (square: any) => {
  return (<div className={`h-20 w-20 bg-${square.company ? square.company.color : 'white'}`}>
    {square.type==='start' ? 'Start' : ''}
    {square.type==='brokerFee' ? 'Start' : ''}
    {square.type==='sellAll' ? 'Start' : ''}
    {square.type==='stock' ? square.company.name : ''}
  </div>)
}

export default Square;