var fs = require('fs');

var headers = {
  'html': {'content-type' : 'text/html'},
  'css': {'content-type' : 'text/css'},
  'js': {'content-type' : 'application/js'},
};

var handlers = {};

handlers.home = function(require, response) {
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

handlers.notFound = function(request, response) {
    response.writeHead(404, headers);
    response.end('Resource not found');
}

module.exports = handlers;
