const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {

  let catsCounter = 0;

  arr.forEach(element => {

    for(let i=0;i<element.length;i++){

      if(element[i]=='^^'){
        
        catsCounter++
      }
    } 
  });
  return catsCounter
  // remove line with error and write your code here
};
