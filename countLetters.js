const assertEqual = function(actual, expected){
  if (actual === expected){
    console.log(`✅✅✅ Assertion Passed ${actual} === ${expected}`);
  }
    else {
      console.log(`🛑🛑🛑 Assertion Failed ${actual} !== ${expected}`);
  
  
    }
    
  }

const countLetters = function(string){
let newObj = {}
const newString = string.split(" ").join("")
for(let letter of newString) {
  if(newObj[letter]) {
    newObj[letter] += 1
  } else {(newObj[letter] = 1)
}

}
return newObj;
}

const string = "example of example" 
console.log(countLetters(string))
