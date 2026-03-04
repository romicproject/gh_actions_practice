const assert = require("assert");

function sum(a, b) {
  return a + b;
}

// "tests"
assert.strictEqual(sum(2, 3), 6); //Temporarily intentional error
assert.strictEqual(sum(-1, 1), 0);

console.log("All tests passed ✅");
