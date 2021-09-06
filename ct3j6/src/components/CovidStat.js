

function CovidStat({country , covidStats}) {
  let statsByCountry
      if(covidStats){
        statsByCountry = covidStats.find((stats)=> country === stats.attributes.Country_Region)
      }


        if(statsByCountry){
          return (
            <>

<ul className="list-group">
  <li className="list-group-item  tag-teal "> Covid statistics: </li>
  <li className="list-group-item">Confirmed cases: {statsByCountry.attributes.Confirmed}</li>
  <li className="list-group-item">Deaths: {statsByCountry.attributes.Deaths}  </li>
  <li className="list-group-item">Mortality_Rate: {statsByCountry.attributes.Mortality_Rate} </li>

</ul>
     
          </>

          )

        }else{
          return(
         
            <ul className="list-group">
              <li className="list-group-item tag-teal "> Covid statistics: </li>
              <li className="list-group-item">  Covid Stats not available  </li>
           </ul>)
        }

 
  
    }


  export default CovidStat;