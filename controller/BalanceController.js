var express = require("express");
var router = express.Router();
var BalanceService = require("../service/BalanceService");

router.post("/", getBalance);

function getBalance(request, response) {
  console.log(request.body);
  BalanceService.getEthereumBalance(request.body.text).then((data) => {
    var responseMsg  = "*Address:* " + request.body.text;
    responseMsg += "*Currency:* Ethereum\n";
    responseMsg += "*Amount:* " + convertToEthereum(parseInt(data.result, 10)) + " ETH";
    response.status(200).send(responseMsg);
  });
}

function convertToEthereum(amount) {
  return (amount / 1000000);
}

module.exports = router;
