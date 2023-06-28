const Square = ({ company, colorClass, price }: { company: string, colorClass: string, price: number }) => {
  return (<div className={`h-20 w-20 ${colorClass}`}>
    {company}
    ${price ? price.toLocaleString() :  '0'}
  </div>)
}

export default Square;