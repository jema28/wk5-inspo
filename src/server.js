var http = require('http');
var handlers = require('./handlers.js');
var PORT = process.env.port || 4000;

var router = function(req, res) {
  // check the url of the request
  // use the correct handler
  if (req.url === '/') {
    handlers.home(req, res);
  }
  else {
    handlers.notFound(req, res);
  }
};

// create server
var server = http.createServer(router);

// make server listen on port
server.listen(PORT, function() {
  console.log('server listening on port', PORT);
});
