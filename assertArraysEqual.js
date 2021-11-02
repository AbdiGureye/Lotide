const eqArrays = require(`./eqArrays`);
// const eqArrays = function(arr1a, arr1b){
//   if (arr1a.length !== arr1b.length){
//     return false;
//   }
//   for (i = 0; i < arr1a.length; i++) {
//     if (arr1a[i] !== arr1b[i]){
//       return false;
//     }
//   } 
//   return true;
// }

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed ${arr1} === ${arr2}`);
}
  else {
    console.log(`🛑🛑🛑 Assertion Failed ${arr1} !== ${arr2}`);
  }

};

module.exports = assertArraysEqual;