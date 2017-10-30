var express = require("express");
var app = express();

var PingController = require("./controller/PingController");
app.use("/api/ping", PingController);

var BalanceController = require("./controller/BalanceController");
app.use("/api/balance", BalanceController);

module.exports = app;
