var express = require("express");
var router = express.Router();

router.get("/", pingServer);

function pingServer(request, response) {
  response.status(200).send();
}

module.exports = router;
