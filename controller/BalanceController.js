var express = require("express");
var router = express.Router();
var BalanceService = require("../service/BalanceService");

router.post("/", getBalance);

function getBalance(request, response) {
  console.log(request.body);
  BalanceService.getEthereumBalance(request.body.text).then((data) => {
    var responseMsg  = "*Address:* " + request.body.text + "\n";
    responseMsg += "*Currency:* Ethereum\n";
    responseMsg += "*Amount:* ";
    responseMsg += convertToEthereum(parseFloat(data.result));
    responseMsg += " ETH";
    var json = {
        "response_type": "in_channel",
        "text": responseMsg
    }
    response.status(200).send(json);
  });
}

function convertToEthereum(amount) {
  var amountDivided = amount / 1000000000000.0;
  console.log("Amount: " + amount);
  console.log("Amount Divided: " + amountDivided);
  return amountDivided;
}

module.exports = router;
