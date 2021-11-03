const eqArrays = function(arr1a, arr1b){
  if (arr1a.length !== arr1b.length){
    return false;
  }
  for (i = 0; i < arr1a.length; i++) {
    if (arr1a[i] !== arr1b[i]){
      return false;
    }
  } 
  return true;
}

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed ${arr1} === ${arr2}`);
}
  else {
    console.log(`🛑🛑🛑 Assertion Failed ${arr1} !== ${arr2}`);
  }

};

const words = ["jenny", "lenny", "renny", "henny", "kenny"];
const map = function(array, callback){
  const result = []
  for (let val of array){
    result.push(callback(val))
  }
}
const answer = map(words, element => element)
console.log(assertArraysEqual(answer, words));
console.log(assertArraysEqual(answer, [6, 6, 6, 6,6]))
