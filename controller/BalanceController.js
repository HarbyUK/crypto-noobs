var express = require("express");
var router = express.Router();
var BalanceService = require("../service/BalanceService");

router.post("/", getBalance);

function getBalance(request, response) {
  console.log(request.body);
  BalanceService.getEthereumBalance(request.body.text).then((data) => {
    var responseMsg  = "*Address:* " + request.body.text + "\n";
    responseMsg += "*Currency:* Ethereum\n";
    responseMsg += "*Amount:* " + convertToEthereum(parseFloat(data.result)) + " ETH";
    var json = {
        "response_type": "in_channel",
        "text": responseMsg,
    }
    response.status(200).send(json);
  });
}

function convertToEthereum(amount) {
  return (amount / 1000000000000.0);
}

module.exports = router;
