// const assertArraysEqual = function (arr1, arr2) {
//   if (eqArrays(arr1, arr2)) {
//     console.log(`✅✅✅ Assertion Passed ${arr1} === ${arr2}`);
// }
//   else {
//     console.log(`🛑🛑🛑 Assertion Failed ${arr1} !== ${arr2}`);
//   }

// };
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

// const middle = function(arr){
//   if (arr.length <= 2){
//     return [];
//   }
//   else if (arr.length % 2 !== 0){
//     const odd = Math.floor(arr.length / 2 )
//     return [arr[odd]];
//   }
//   else { 
//     const even = arr.length / 2 
//     const even1 = arr.length / 2 -1
    
//    return [arr[even1], arr[even]]
   
  
//   }
//   };

// const test = [1, 2, 3, 4] 
// const test1 = [1, 2, 3] 

// assertArraysEqual(middle(test), [2, 3]) // result expected [2, 3]
// assertArraysEqual(middle(test1), [2]) // result expected [2]

const myObject = {
  a: 6,     // Number
  b: "abc", // String
  c: true,  // Boolean
  d: null,  // Null
};
return myObject