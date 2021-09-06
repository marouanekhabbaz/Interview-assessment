function ChangeRateToUSD ({country , changeRate }){
  
  const currencies =  country[0].code;

 return (
   <>
   <h5> Currencies:  {country[0].name} </h5>
   <h5> 1 USD = {changeRate[currencies]} {currencies}  </h5>
   </>
 ) 
 
}

export default ChangeRateToUSD ;