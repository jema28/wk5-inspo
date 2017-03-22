var handlers = require('./handlers.js');
var url = require('url');

var router = function(request, response) {
  var parsedURL = url.parse(request.url);

  // check the url of the request
  // use the correct handler
  if (request.url === '/') {
    handlers.home(request, response);
  }
  else if (parsedURL.pathname === '/questions') {
   handlers.questions(request,response);
  }
  else if (request.url === '/style.css') {
    handlers.style(request,response);
  }
  else if (request.url === '/index.js') {
    handlers.index(request,response);
  }
  else {
    handlers.notFound(request, response);
  }
};

module.exports = router;
