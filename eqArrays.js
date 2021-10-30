const assertEqual = function(actual, expected){
  if (actual === expected){
    console.log(`✅✅✅ Assertion Passed ${actual} === ${expected}`);
  }
    else {
      console.log(`🛑🛑🛑 Assertion Failed ${actual} !== ${expected}`);
  
  
    }
    
  }
 
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
 

  

  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
  assertEqual(eqArrays([1, 2, 3], [1, 3, 2]), true);
  assertEqual(eqArrays([1, 3, 2], ["1", "3", 2]), false);


