var http = require("http");
var url = require("url");

var server = http.createServer(function(req, res) {
  //get the url and parse it
  var parsedUrl = url.parse(req.url, true);
  //get the path from the url
  var path = parsedUrl.pathname;
  var trimmedPath = path.replace(/^\/+|\/+$/g, "");
  //send the response
  res.end("Server is initiated and Hello World");
  //log what path does the person ius asking for i.e. log the request
  console.log("Request is received on this path: " + trimmedPath);
});

server.listen(3000, function() {
  console.log("Server is listening on port 3000");
});
