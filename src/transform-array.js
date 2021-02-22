const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if(!(arr instanceof Array)) throw('Error');
  
  let resArr = arr;
 let i=0;
  {// function discardNext(index){
  //   if(index!==resArr.length-1){
  //     resArr.splice(index,2)
  //   } else{
  //     resArr.splice(-1,1)
  //   }
  // }

  // function discardPrev (index){
  //     if(index!==0){
  //       resArr.splice(index-1,2)
  //     }else{
  //       resArr.splice(0,1)
  //     }
  // }

  // function doubleNext(index){
  //   if(index!==resArr.length-1){
  //     resArr.splice(index,1,resArr[index+1])
  //   }else{
  //     resArr.splice(-1,1)
  // }
  // }

  // function doublePrev(index){  
  //   if(index!==0){
  //         resArr.splice(index,1,resArr[index-1])
  //   }else{
  //       resArr.splice(0,1)
  //     }
  // }

  //  for(let i=0;i<arr.length;i++){
  //   if(resArr[i]=='--discard-next'){
  //     discardNext(i);
  //   }else if(resArr[i]=='--discard-prev'){
  //     console.log(resArr);
  //     discardPrev(i);
  //   }else if(resArr[i]=='--double-next'){
  //     console.log(resArr);
  //     doubleNext(i);
  //   }else if(resArr[i]=='--double-prev'){
  //     console.log(resArr);
  //     doublePrev(i);
  //   }
  // }
}

function delNext(index){
  if(index<resArr.length){
    resArr.splice(index,2)
  }else{
    resArr.splice(index,1)
  }
} 

function delPrev(index){
  if(index>0 && index<resArr.length){
    resArr.splice(index,2)
  }else{
    resArr.splice(index,1)
  }
} 

function doubleNext(index){
  if(index<resArr.length-1){
    resArr.splice(index,1,resArr[index+1])
  }else{
    resArr.splice(index,1)
  }
}

function doublePrev(index){
  if(index>0 && index<resArr.length){
    resArr.splice(index,1,resArr[index-1])
  }else{
    resArr.splice(index,1)
  }
  
}


while (i < arr.length){
  if(resArr[i]=='--discard-next'){
    console.log(i)
    delNext(i);
    i=i;
  }else if(resArr[i]=='--discard-prev'){
    delPrev(i);
    i-=1;
  }else if(resArr[i]=='--double-next'){
    doubleNext(i);
    i+=1;
  }else if(resArr[i]=='--double-prev'){
    doublePrev(i);
    i+=1;
  }else{i++} 
}
  return resArr
};
 
  
