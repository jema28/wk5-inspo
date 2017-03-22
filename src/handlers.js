var fs = require('fs');
var url = require('url');

var requestModule = require('request');

var NUM_RESULTS = 10;

var headers = {
  'html': {'content-type' : 'text/html'},
  'css': {'content-type' : 'text/css'},
  'js': {'content-type' : 'application/js'},
  'json': {'content-type' : 'application/json'},
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
  // get tag
  var parsedURL = url.parse(request.url, true);
  var tag = parsedURL.query.tag;

  var tags = {
    'all': '',
    'js': '&tagged=js',
    'node': '&tagged=nodejs'
  };

  // make request
  var stackURL = 'https://api.stackexchange.com/2.2/questions?order=desc&sort=creation&site=stackoverflow' + tags[tag];

  var reqOptions = {
    uri: stackURL,
    gzip: true /* EFFING HELL */
  }

  requestModule(reqOptions, function(error, res, body) {
    if (error) {
      response.writehead(500, headers.plain);
      response.end('Server error! Holy moly!');
    }

    // format and send response
    var data = JSON.parse(body).items.slice(0, NUM_RESULTS);
    response.writeHead(200, headers.json);
    response.end(JSON.stringify(data));
  });
}

handlers.notFound = function(request, response) {
  response.writeHead(404, headers.plain);
  response.end('Resource not found');
}

module.exports = handlers;
