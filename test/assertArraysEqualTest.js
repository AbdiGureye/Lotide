const assertArraysEqual = require(`../assertArraysEqual`);
const eqArrays = require(`../eqArrays`);
const assert = require('chai').assert;


let arr1= ["left", "right", "middle", 16, 32];
let arr2 = ["left", "right", "middle", 16, 32];

assertArraysEqual(eqArrays(arr1, arr2), true);