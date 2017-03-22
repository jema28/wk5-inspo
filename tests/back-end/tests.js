const test = require('tape');
const shot = require('shot');

test('Initialise', (t) => {
  var num = 2;
  t.equal(num, 2, 'Should return 2');
  t.end();
});
