// const CustomError = require("../extensions/custom-error");

// const chainMaker = {

//   arr:[],

//   getLength() {
//     return this.arr.length;
//   },

//   addLink(value) {
//     if(value == null){
//       this.arr.push(`( ${value} )`);
//       return this;
//     }else if(value == undefined){
//       this.arr.push(`(  )`);
//       return this;
//     }else{
//       this.arr.push(`( ${value} )`);
//       return this;
//     }
//   },

//   removeLink(position) {
//       if(position<0 || position>this.arr.length || !Number.isInteger(position)) {
//         this.arr = [];
//         throw new Error();
//       }     
  

//     this.arr.splice(position-1,1);
//     return this;
  
//   },

//   reverseChain() {
//     let start = 0;
//     let end = this.arr.length-1;
//     let mem = null;
//     while(start<end){
//       mem = this.arr[start];
//       this.arr[start] = this.arr[end];
//       this.arr[end]=mem
//       start++;
//       end--;
//     }
//     return this
//   },

//   finishChain() {

//     let mem = this.arr.join('~~');
//     this.arr = []
//     return mem;
//   }
// };

// module.exports = chainMaker;

