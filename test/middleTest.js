const middle = require(`../middle`);
const assertArraysEqual = require(`../assertArraysEqual`)

const test = [1, 2, 3, 4] 
const test1 = [1, 2, 3] 
assertArraysEqual(middle(test), [2, 3]) // result expected [2, 3]
assertArraysEqual(middle(test1), [2]) // result expected [2]