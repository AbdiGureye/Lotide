const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed");
  } else {
    console.log("🛑🛑🛑 Assertion Failed");


  }
};
const head = function(array){
  console.log(array);
  return array[0]
}
assertEqual(head([5,6,7]), 5);


assertEqual("Lighthouse Labs" , "Lighthouse Labs");
assertEqual("Test", "Testing");
assertEqual(33, 33);
assertEqual(30, 23);