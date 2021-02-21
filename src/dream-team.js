const CustomError = require("../extensions/custom-error");

module.exports =  function createDreamTeam(arr) {
  if(Array.isArray(arr)){
     let res = arr.filter(item=>typeof(item)=='string').map(str=>str.trim().toUpperCase()).sort().map(str=>str.slice(0,1)).join('');
    return res
  }else{
      return false
    }
  }

