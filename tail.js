const assertEqual = require(`./assertEqual`);

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log("✅✅✅ Assertion Passed");
//   } else {
//     console.log("🛑🛑🛑 Assertion Failed");
//  }
//   };
const tail = function(array) {
  return array.slice(1);

};
const words = ["One", "two", "three"];
console.log(words.length);
tail(words);
console.log(words.length);
assertEqual(words.length, 3);

module.exports = tail