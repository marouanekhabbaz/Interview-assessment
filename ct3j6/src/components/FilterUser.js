

function FilterUser({country , users }){
  let usersBycontry = users.filter((user)=> user.location.country.toUpperCase() == country.toUpperCase());

  let filteredUsers = usersBycontry.map((user, i)=> {
    return (    
    <div className="user" key ={i}>
    <img src={user.picture.medium}alt="user" />
    <div className="user-info">
      <h5>{user.first} {user.name.last}</h5>
      <small> <a href={`mailto:${user.email}`}> {user.email}</a></small>
    </div>
  </div>)
  })
  
  if(filteredUsers.length){
    return (
      <> 
       <h5> Our Network in {country} </h5> 
      {filteredUsers}
       </>
    )
  }else{
    return (
      <h5> We don't have a Network in {country} </h5> 
    )
  }
}

export default FilterUser;