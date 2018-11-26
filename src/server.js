var http = require('http')
var router = require('./router.js')
var PORT = process.env.port || 4000

// create server
var server = http.createServer(router)

// make server listen on port
server.listen(PORT, function () {
  console.log('server listening on port', PORT)
})
