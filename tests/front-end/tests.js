QUnit.test("test QUnit is working", function(assert) {
  assert.ok(true, "test should pass");
});

QUnit.test("test render function", function(assert){
  var section = document.getElementById('posts-container');
  assert.equal(section.innerHTML, '', 'posts-container is empty');
  renderToList(null, mockRenderData);
  assert.equal(section.childNodes.length,1,'render function add ul');
  var ulElement = section.childNodes[0];
  assert.equal(ulElement.childNodes.length, 10, 'should add 10 elements to ul');
});
