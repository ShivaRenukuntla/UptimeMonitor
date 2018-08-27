var http = require("http");
var url = require("url");
var StringDecoder = require("string_decoder").StringDecoder;

var server = http.createServer(function(req, res) {
  //get the url and parse it
  var parsedUrl = url.parse(req.url, true);

  //get the path from the url
  var path = parsedUrl.pathname;
  var trimmedPath = path.replace(/^\/+|\/+$/g, "");

  // Get the query string as an object
  var queryStringObject = parsedUrl.query;

  //getting the method of the request
  var method = req.method.toLowerCase();

  // get the headers as an object
  var headers = req.headers;

  //get the payload if any
  var decoder = new StringDecoder("utf-8");

  //send the response
  res.end("Server is initiated and Hello World");

  //log what path does the person ius asking for i.e. log the request
  console.log(
    "Request is received on this path:  " +
      trimmedPath +
      "  With the method:  " +
      method +
      " With this query String parameters:  ",
    queryStringObject
  );
  console.log("Received with the headers: ", headers);
});

server.listen(3000, function() {
  console.log("Server is listening on port 3000");
});
