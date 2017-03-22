const test = require('tape');
const shot = require('shot');
const router = require('../../src/router.js');
test('Initialise', (t) => {
  var num = 2;
  t.equal(num, 2, 'Should return 2');
  t.end();
});

test('Home route', function(t) {
  const reqOptions = {
    method: 'get',
    url: '/'
  }

  shot.inject(router, reqOptions, function(res) {
    t.equal(res.statusCode, 200, 'should respond with status code of 200');
    t.equal(res.headers['content-type'], 'text/html', 'content-type is html text');
    t.end();
  });
});

test('Unknown route test', function(t) {

  const reqOptions={
    method: 'get',
    url: '/hiba'
  }

  shot.inject(router,reqOptions,function(res) {
    t.equal(res.statusCode,404,'should respond with status code of 404');
    t.equal(res.headers['content-type'],'text/plain','content-type is plain text');
    t.end();
  });
});
