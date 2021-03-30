const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber,turnsSpeed) {
  let resObj = {turns:1,seconds:0};
   resObj.turns = Math.pow(2,disksNumber)-1;
   resObj.seconds = Math.floor(3600*resObj.turns/turnsSpeed)
   return  resObj
 };
