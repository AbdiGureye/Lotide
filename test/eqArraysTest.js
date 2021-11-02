const assertEqual = require(`../assertEqual`);
const eqArrays = require(`../eqArrays`);

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 3, 2]), true);
assertEqual(eqArrays([1, 3, 2], ["1", "3", 2]), false);
