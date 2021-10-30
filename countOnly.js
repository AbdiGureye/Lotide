const assertEqual = function(actual, expected){
  if (actual === expected){
    console.log(`✅✅✅ Assertion Passed ${actual} === ${expected}`);
  }
    else {
      console.log(`🛑🛑🛑 Assertion Failed ${actual} !== ${expected}`);
  
  
    }
    
  }

  const countOnly = function(allItems, itemsToCount) {
    let newObj={}
    
    for(let item of allItems) {
      if(itemsToCount[item]) {
        if(newObj[item]) {
          newObj[item] += 1
        } else{
          newObj[item] = 1 
        }
        
        
      }
    }
    return newObj;
  }

  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];


  const objectNames ={ "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }
  
  const result1 = countOnly(firstNames, objectNames);
  
  assertEqual(result1["Jason"], 1);
  assertEqual(result1["Karima"], undefined);
  assertEqual(result1["Fang"], 2);
  assertEqual(result1["Agouhanna"], undefined);