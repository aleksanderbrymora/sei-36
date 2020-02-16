function removeDuplicate(str) {
  let newStr = [];
  let strArray = str.split(' ');
  for (let n = 0; n < strArray.length; n ++) {
    if (!newStr.includes(strArray[n])) {
      newStr.push(strArray[n]);
    }
  }
  return newStr.join(' ');
}

const banana = function () {
  const out = 'b' + 'a' + + 'a' + 'a';
  console.log(out.toLowerCase());
}
banana();
