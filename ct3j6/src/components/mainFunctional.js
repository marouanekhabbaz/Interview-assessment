import React, { useState, useEffect } from "react";
import user from "../APIs/user";
import cats from "../APIs/cats";
import countries from "../APIs/countries";
import covid from "../APIs/covid";
import spaceX from "../APIs/spaceX";

import rates from "../APIs/ChangeRate";
import axios from "axios";
import ListOfContries from "./ListOfContries";
import FilterUser from "./FilterUser";
import Header from "./Header";

function MainFunctional() {
  const [users, setUsers] = useState([]);
  const [country, setCountry] = useState([]);
  const [covidStats, setCovidStats] = useState([]);
  const [changeRate, SetChangeRate] = useState([]);
  const [search, setSearch] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);
  const [cache, SetCache] = useState([]);

  const handleChange = (event) => {
    setSearch(event.target.value);
    let searchedFor = cache.filter((item) =>
      item.name.toUpperCase().includes(event.target.value.toUpperCase())
    );
    setCountry(searchedFor);
  };

  const submitHundler = (event) => {
    event.preventDefault();
    setSearchClicked(true);
    let searchedFor = cache.filter((item) =>
      item.name.toUpperCase().includes(search.toUpperCase())
    );
    setCountry(searchedFor);
  };

  const resetHundler = (event) => {
    event.preventDefault();
    setSearchClicked(false);
    setCountry(cache);
    setSearch("");
  };

  useEffect(() => {
    user.getRandomUserNames().then((response) => {
      setUsers(response.data.results);
    });

    rates.getRates().then((response) => {
      // console.log("device: ", response.data.rates);

      SetChangeRate(response.data.rates);
    });

    countries.getCountries().then((response) => {
      // console.log("got countries: ", response.data[0]);
      setCountry(response.data);
      SetCache(response.data);
    });

    covid
      .getCurrentCovidCountries()
      .then((response) => {
        // console.log("got covid per country", response);
        setCovidStats(response.data.features);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <div className="container align-middle">
        <form onSubmit={submitHundler}>
          <div className="input-group ">
            <div className="form-outline">
              <input
                type="search"
                id="form1"
                onChange={handleChange}
                value={search}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              search
            </button>
            {searchClicked && (
              <button
                type="button"
                onClick={resetHundler}
                className="btn btn-secondary"
              >
                reset
              </button>
            )}
          </div>
        </form>

        <ListOfContries
          country={country}
          users={users}
          changeRate={changeRate}
          covidStats={covidStats}
        />
      </div>
    </div>
  );
}

export default MainFunctional;
