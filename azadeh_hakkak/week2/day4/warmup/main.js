const ceasar = function(message, key) {
  message = message.toLowerCase()
  let out = '';
  for (let i = 0; i < message.length; i++) {
    if (/\w/.test(message[i])) {
    const ascii = message[i].charCodeAt(0);
    let newAscii = ascii + key;
    if (newAscii > ,'z'.charCodeAt(0)) {
      newAscii -= 26;
    }
    const newChar = String.fromCharCode(newAscii);
    out += newChar;
  } else {
    out += message[i]
    }
  }
  return out;
}
console.log(ceasar('please help this is boringzz', 1))



//regular expression
