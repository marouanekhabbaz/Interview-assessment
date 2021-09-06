import axios from "axios";



const rates = {
  getRates: (device) => {
    return new Promise((resolve, reject) => {
      axios
        .get("https://api.exchangerate.host/latest?base=USD")
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          console.log("error", error);
        });
    });
  }
};

export default rates;