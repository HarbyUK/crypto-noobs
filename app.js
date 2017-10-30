var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var PingController = require("./controller/PingController");
app.use("/api/ping", PingController);

var BalanceController = require("./controller/BalanceController");
app.use("/api/balance", BalanceController);

module.exports = app;
