var app = require("./app");
var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
  console.log("Server started on port " + port);
});
server.timeout = 60000;
