const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(type){
    this.type = type;
    this.alphabet ='abcdefghijklmnopqrstuvwxyz';
  }

  encrypt(message, key) {
    message = message.toLowerCase();
    key = key.toLowerCase();
    let keyStr = '';// сформированная ключ-строка согласно длине message
    let resCipher = '';

    if(!message||!key){
      throw new Error();
    }

//формируем ключ строку

    keyStr = key.repeat(Math.ceil(message.length/key.length)).slice(0,message.length).split(''); 

//формируем шифр

      for(let i =0; i<message.length;i++){

        if(this.alphabet.includes(message[i])){
          let messageInd = this.alphabet.indexOf(message[i]);
          let keyInd = this.alphabet.indexOf(keyStr.shift());
          resCipher+=this.alphabet[(messageInd+keyInd)%this.alphabet.length]
        }else{
          resCipher+=message[i];
        }
      }
     
// возвращ результат

    if(this.type==true||this.type==undefined){
            return resCipher.toUpperCase()
    } else{
      return resCipher.toUpperCase().split('').reverse().join('')
    }
  }   
  // расшифр

  decrypt(message, key) {
    message = message.toLowerCase();
    key = key.toLowerCase();

    let keyStr = '';// сформированная ключ-строка согласно длине message
    let resCipher = '';

    if(!message||!key){
      throw new Error();
    }

//формируем ключ строку

    keyStr = key.repeat(Math.ceil(message.length/key.length)).slice(0,message.length).split(''); 

//дешифруем шифр

      for(let i =0; i<message.length;i++){

        if(this.alphabet.includes(message[i])){
          let messageInd = this.alphabet.indexOf(message[i]);
          let keyInd = this.alphabet.indexOf(keyStr.shift());
          resCipher+=this.alphabet[(messageInd+this.alphabet.length-keyInd)%this.alphabet.length]
        }else{
          resCipher+=message[i];
        }
      }
     
// возвращ результат

    if(this.type==true||this.type==undefined){
            return resCipher.toUpperCase()
    } else{
      return resCipher.toUpperCase().split('').reverse().join('')
    }
  }   
  

}

module.exports = VigenereCipheringMachine;
