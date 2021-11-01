const eqObjects = function(object1, object2){
  if(Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for( let key in object1){
    if(Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      const output= eqArrays(object1[key], object2[key]);
      if(!output) {
        return true
      }
    } else if (object1[key] !== object2[key]){
      return false;
    }
  }
return true;
}

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect; 
  if(eqObjects(actual, expected)) {
   console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    (`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
}
}
let test = { 1:'a', 2:'b', 3:'c'}
let test2 = { 1:'a', 2:'c', 3:'b'}

assertObjectsEqual(eqObjects(test, test2), false)

