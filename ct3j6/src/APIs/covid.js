import axios from "axios";



const covid = {

  // Add a method to call covid stats for countries 
  // documentation @https://developers.arcgis.com/rest/services-reference/enterprise/query-feature-service-layer-.htm



  getCurrentCovidCountries: () => {
    return new Promise((resolve, reject) => {
      axios
        .get("https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases2_v1/FeatureServer/2/query?where=1%3D1&outFields=*&outSR=4326&f=json")
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

//documentation @https://covidtracking.com/data/api
//feel free to add more functions!

  getCurrentCovidStats: () => {
    return new Promise((resolve, reject) => {
      axios
        .get("https://api.covidtracking.com/v1/states/current.json")
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getHistoricDailyCovidStats: () => {
    return new Promise((resolve, reject) => {
      axios
        .get("https://api.covidtracking.com/v1/states/daily.json")
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
};

export default covid;
