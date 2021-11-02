const head = require('../head');
const assertEqual = require(`../assertEqual`);

assertEqual(head([5,6,7]), 5);


assertEqual("Lighthouse Labs" , "Lighthouse Labs");
assertEqual("Test", "Testing");
assertEqual(33, 33);
assertEqual(30, 23);