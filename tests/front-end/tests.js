QUnit.test("a test", function(assert) {
  function name(name) {
    return name;
  }
  var myName = "hiba";
  assert.equal(myname, "hiba", "should return the same name");
});
