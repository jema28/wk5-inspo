var fs = require('fs');
var url = require('url');

var headers = {
  'html': {'content-type' : 'text/html'},
  'css': {'content-type' : 'text/css'},
  'js': {'content-type' : 'application/js'},
  'plain': {'content-type' : 'text/plain'}
};

var handlers = {};

handlers.home = function(request, response) {
  response.writeHead(200, headers.html);
  fs.readFile(__dirname + '/../public/index.html', function(error,file) {
    if (error) {
      console.log(error);
      return;
    }
    response.end(file);
 });
}

handlers.style = function(request, response) {
  response.writeHead(200, headers.css);
  fs.readFile(__dirname + '/../public/style.css', function(error,file) {
    if (error) {
      console.log(error);
      return;
    }
    response.end(file);
 });
}

handlers.index = function(request, response) {
  response.writeHead(200, headers.js);
  fs.readFile(__dirname + '/../public/index.js', function(error,file) {
    if (error) {
      console.log(error);
      return;
    }
    response.end(file);
 });
}

handlers.questions = function(request, response) {
  var parsedURL = url.parse(request.url, true);
  var tag = parsedURL.query.tag;

  // make request

  response.writeHead(200, headers.plain);
  response.end('sick');
}

handlers.notFound = function(request, response) {
  response.writeHead(404, headers.plain);
  response.end('Resource not found');
}

module.exports = handlers;
