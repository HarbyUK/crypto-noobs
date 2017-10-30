var express = require("express");
var router = express.Router();
var BalanceService = require("../service/BalanceService");

router.get("/", getBalance);

function getBalance(request, response) {
  console.log(request.url);
  BalanceService.getEthereumBalance("1234").then((data) => {
    response.status(200).send(data);
  });
}

module.exports = router;
