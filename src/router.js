var handlers = require('./handlers.js');

var router = function(request, response) {
  // check the url of the request
  // use the correct handler
  if (request.url === '/') {
    handlers.home(request, response);
  }
  //if (request.url === '/question') {
  //  handlers.question(request,response);
  //}
  if (request.url === '/style.css') {
   handlers.style(request,response);
  }
  if (request.url === '/index.js') {
   handlers.index(request,response);
  }
  else {
    handlers.notFound(request, response);
  }
};

module.exports = router;
