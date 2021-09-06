import FilterUser from "./FilterUser"
import ChangeRateToUSD from "./ChangeRateToUSD"
import CovidStat from "./CovidStat"

function ListOfContries({ country, users , changeRate , covidStats }){

  

  let listOfContries =  country.map((item , index)=>{

    return(
<div className="card" key={index}>
    <div className="card-header">
      <img src={item.flag}  alt="rover" />
    </div>


    <div className="card-body">
      <span className="tag tag-teal">{item.name}</span>
      <h4>
      Capital: {item.capital}
      </h4>
      <h5>
      Languages: {item.languages.map((l, i)=> {
        return (
          <span key={i}>{l.name} </span>
        )
      })}
      </h5>
      <h5>
      Population: {item.population}
      </h5>
      <h5>
      Area: {item.area }
      </h5>
  
    <ChangeRateToUSD country={country[index].currencies}  changeRate={changeRate} />
    <CovidStat covidStats={covidStats}  country={item.name} />
    <FilterUser country={item.name}  users={users}/>

    </div>

    
  </div>
      )

  })


return(

  <>
  {listOfContries}
  </>

)

}

export default ListOfContries;