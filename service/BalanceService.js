var https = require("https");

var service = {
  getEthereumBalance: function(address) {
    return new Promise((resolve) => {
      https.get("https://api.etherscan.io/api?module=account&action=balance&address=" + address + "&tag=latest&apikey=TESTAPIKEY", (response) => {
        let data = "";

        response.on("data", (chunk) => {
          data += chunk;
        });

        response.on("end", () => {
          var returnObject = JSON.parse(data);
          resolve(returnObject);
        });
      }).on("error", (error) => {
        console.log("ERROR: " + error.message);
      });
    });
  }
};

module.exports = service;
