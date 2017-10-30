var app = require("./app");
var port = process.env.port || 3000;

var server = app.listen(port, function () {
  console.log("Server started on port " + port);
});
