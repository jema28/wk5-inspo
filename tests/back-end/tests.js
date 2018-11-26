const test = require('tape')
const shot = require('shot')
const router = require('../../src/router.js')
const fs = require('fs')
const path = require('path')

test('Initialise', (t) => {
  var num = 2
  t.equal(num, 2, 'Should return 2')
  t.end()
})

test('Home route', function (t) {
  var filePath = path.join(__dirname, '../..', 'public/index.html')
  var indexFile = fs.readFileSync(filePath).toString()
  const reqOptions = {
    method: 'get',
    url: '/'
  }

  shot.inject(router, reqOptions, function (res) {
    t.equal(res.statusCode, 200, 'should respond with status code of 200')
    t.equal(res.headers['content-type'], 'text/html', 'content-type is html text')
    t.equal(res.payload, indexFile, 'index.html HERE')
    t.end()
  })
})

test('Unknown route test', function (t) {
  const reqOptions = {
    method: 'get',
    url: '/hiba'
  }

  shot.inject(router, reqOptions, function (res) {
    t.equal(res.statusCode, 404, 'should respond with status code of 404')
    t.equal(res.headers['content-type'], 'text/plain', 'content-type is plain text')
    t.end()
  })
})

test('css style route test', function (t) {
  const reqOptions = {
    method: 'get',
    url: '/style.css'
  }

  shot.inject(router, reqOptions, function (res) {
    t.equal(res.statusCode, 200, 'should respond with status code of 200')
    t.equal(res.headers['content-type'], 'text/css')
    t.end()
  })
})

test('index js route test', function (t) {
  var filePath = path.join(__dirname, '../..', 'public/index.js')
  var indexJsFile = fs.readFileSync(filePath).toString()

  const reqOptions = {
    method: 'get',
    url: '/index.js'
  }

  shot.inject(router, reqOptions, function (res) {
    t.equal(res.statusCode, 200, 'should respond with status code of 200')
    t.equal(res.headers['content-type'], 'application/js')
    t.equal(res.payload, indexJsFile, 'index.js HERE ')
    t.end()
  })
})
