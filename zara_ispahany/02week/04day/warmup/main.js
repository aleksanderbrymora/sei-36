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

//first method
// const ceasar = function(message, key) {
//   message = message.toLowerCase();
//   let out = ''; //access and return outside of the loop thats why it's empty
//   for (let i = 0; i < message.length; i++) {
//     const ascii = message[i].charCodeAt(0); //message.charCodeAt(i)
//     const newAscii = ascii + key;
//     const newChar = String.fromCharCode(newAscii);
//     out += newChar; //append it all to here pretty much
//   }
//   return out;
// }
//
// console.log(ceasar('please help this is boring', 1));

//problem with this code is that space === ! due to ASCII
//so we want to ignore all symbols that arent words


//fixing the space problem
//so we will add a regular expression
// cant test regular expressions via /\w/.test('a') in the dev tools chrome
// const ceasar = function(message, key) {
//   message = message.toLowerCase();
//   let out = ''; //access and return outside of the loop thats why it's empty
//   for (let i = 0; i < message.length; i++) {
//     if (/\w/.test(message[i])) {
//       const ascii = message[i].charCodeAt(0); //message.charCodeAt(i)
//       const newAscii = ascii + key;
//       const newChar = String.fromCharCode(newAscii);
//       out += newChar; //append it all to here pretty much
//     } else {
//       out += message[i];
//     }
//   }
//   return out;
// }
//
// console.log(ceasar('please help, this is boring', 1));

//problem: when it hits z it will add a symbol after
//so after z we want to loop back to a to account for there being no letter after z
const ceasar = function(message, key) {
  message = message.toLowerCase();
  let out = ''; //access and return outside of the loop thats why it's empty
  for (let i = 0; i < message.length; i++) {
    if (/\w/.test(message[i])) {
      const ascii = message[i].charCodeAt(0); //message.charCodeAt(i)
      let newAscii = ascii + key; //was changed to let to override it
      if (newAscii > 'z'.charCodeAt(0)) { //could do > 122
        newAscii -= 26;
      }
      const newChar = String.fromCharCode(newAscii);
      out += newChar; //append it all to here pretty much
    } else {
      out += message[i];
    }
  }
  return out;
}

console.log(ceasar('please help, this is boringzz', 1));
