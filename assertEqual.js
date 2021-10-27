const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed");
  } else {
    console.log("🛑🛑🛑 Assertion Failed");


  }
  
};


assertEqual("Lighthouse Labs" , "Lighthouse Labs");
assertEqual("Test", "Testing");
assertEqual(33, 33);
assertEqual(30, 23);