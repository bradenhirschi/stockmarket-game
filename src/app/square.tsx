const Square = ({square}: {square: any}) => {
  return (<div className={`h-20 w-20 ${square.company ? square.company.color : ''}`}>
    {square.type==='start' ? 'Start' : ''}
    {square.type==='brokerFee' ? 'Broker Fee' : ''}
    {square.type==='sellAll' ? `Sell all ${square.company.name}` : ''}
    {square.type==='stock' ? square.company.name : ''}
  </div>)
}

export default Square;