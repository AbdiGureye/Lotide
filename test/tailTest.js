const tail = require(`../tail`);
const assertEqual = require(`../assertEqual`);

const words = ["One", "two", "three"];
console.log(words.length);
tail(words);
console.log(words.length);
assertEqual(words.length, 3);