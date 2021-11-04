const {tail} = require(`../index`);

//const assertEqual = require(`../assertEqual`);
const assert = require('chai').assert;

describe("#tail", ()=> {
  it("should return 3 for ['One','two', 'three']", () => {
    assert.deepEqual(tail(["One", "two", "three"]), ["two", "three"])
  });
  it("should return 3 for [5,6, 7,8]", () => {
    assert.deepEqual(tail([5,6, 7,8]), [6,7,8])
  });

})

// const words = ["One", "two", "three"];
// console.log(words.length);
// tail(words);
// console.log(words.length);
// assertEqual(words.length, 3);