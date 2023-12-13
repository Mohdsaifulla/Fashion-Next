interface Ammount {
   amount:number
}

const FormattedPrice = ({amount}:Ammount) => {
    const formattedPrice=new Intl.NumberFormat('en-us',{
        style:'currency',
        currency:'USD'
    }).format(amount)

  return (
    <span>{formattedPrice}</span>
  )
}

export default FormattedPrice