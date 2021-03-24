const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let optSep = options['separator'];
  let addSep = options['additionSeparator'];
  let repeatTimes = options['repeatTimes']
  let additionRepeat = options['additionRepeatTimes'] ;
  let additionList = [];
  let strList = []
  if(!optSep) optSep = '+';
  if(!addSep) addSep = '|';
  if(!additionRepeat) additionRepeat = 0;
  if(!repeatTimes) repeatTimes = 1;
  if(options['addition']&&!additionRepeat) additionRepeat=1;

  for(let i = 0;i<additionRepeat; i++){
    additionList.push(String(options['addition']))
  }

  let additionStr = additionList.join(addSep);

  str +=additionStr; 


  for(let j = 0; j<repeatTimes; j++){
    strList.push(str)
  }
return strList.join(optSep);
};
  