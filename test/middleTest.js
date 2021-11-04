const {middle} = require(`../index`);
const assertArraysEqual = require(`../assertArraysEqual`)
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
    it("returns '5' for ['5']", () => {
      assert.deepEqual(middle(['5']), ['5']); 
    });
    
});

// const test = [1, 2, 3, 4] 
// const test1 = [1, 2, 3] 
// assertArraysEqual(middle(test), [2, 3]) // result expected [2, 3]
// assertArraysEqual(middle(test1), [2]) // result expected [2]