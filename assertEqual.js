const assertEqual = function(actual, expected){
if (actual === expected){
  console.log(`✅✅✅ Assertion Passed ${actual} === ${expected}`);
}
  else {
    console.log(`🛑🛑🛑 Assertion Failed ${actual} !== ${expected}`);


  }
  
}


assertEqual ("Lighthouse Labs" , "Lighthouse Labs");
assertEqual ("Test", "Testing");
assertEqual (33, 33);
assertEqual (30, 23)