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





module.exports = tail;