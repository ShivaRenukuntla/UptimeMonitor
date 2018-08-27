var http = require("http");

var server = http.createServer(function(req, res) {
  res.end("Server is initiated and Hello World");
});

server.listen(3000, function() {
  console.log("Server is listening on port 3000");
});
