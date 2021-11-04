const assertEqual = require(`../assertEqual`);
const eqArrays = require(`../eqArrays`);
const assert = require('chai').assert;
describe("#eqArrays", () => {
  it("returns true", () => {
    assert.deepEqual(eqArrays([1, 2, 3],  [1, 2, 3]), true);
  });
    it("returns false", () => {
      assert.deepEqual(eqArrays(['5'], ['8']), false); 
    });
    
});

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [1, 3, 2]), true);
// assertEqual(eqArrays([1, 3, 2], ["1", "3", 2]), false);
