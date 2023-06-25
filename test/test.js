const assert = require("chai").assert;
const multiply = require("../multiply");

describe("multiply", function () {
  it("Oh! Its still green", function () {
    assert.equal(multiply(23, 45), 23 * 45);
  });
});
