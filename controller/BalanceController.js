var express = require("express");
var router = express.Router();
var BalanceService = require("../service/BalanceService");

router.post("/", getBalance);

function getBalance(request, response) {
  console.log(request.body);
  BalanceService.getEthereumBalance(request.body.text).then((data) => {
    var responseMsg = "Currency: Ethereum\n";
    responseMsg += "Amount: " + parseInt(data.result, 10) / 1000000 + "ETH";
    response.status(200).send(responseMsg);
  });
}

module.exports = router;
