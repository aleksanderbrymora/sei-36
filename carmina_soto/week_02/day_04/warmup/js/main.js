// # Implement Ceasar/Shift cipher
//
// Don't be scared, this one is much simpler. The cipher takes in a message and using a given key 'shifts' every character by that ammount.
//
// ## Examples
//
// When given `key = 1`
// 'a' will become 'b', because we shift it by one character in the alphabet.
// A string `please help this is boring` becomes `qmfbtf ifmq uijt jt cpsjoh`.
//
// ## Bonus
//
// Make cipher ignore special characters like `.,/?!` so remember to account for that.
// A string `please help, this is boring` becomes `qmfbtf ifmq, uijt jt cpsjoh`.
//
// ## Hint
//
// _Don't read if you want some challenge_
// Have a look at converting characters to ASCII numbers.

const cipher = function(message,key){
  // const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  message = message.toLowerCase();
  let result = '';
  for(let i = 0; i < message.length; i++){
    if(/\w/.test(message[i])){
      const ascii = message[i].charCodeAt(0);
      let newAscii = ascii + key;
      if (newAscii > 'z'.charCodeAt(0)){
        newAscii -= 26;
      }
      const newChar = String.fromCharCode(newAscii);
      result += newChar;
    } else {
      result += message[i];
    }
  }
    return result;
}
console.log(cipher("please help, this is boringz!",1));
