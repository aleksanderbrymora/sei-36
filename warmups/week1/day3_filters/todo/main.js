const filterWords = function(str) {
  const words = str.split(' ');
  const output = [];

  for (let i = 0; i < words.length; i++) {
    if (!output.includes(words[i])) {
      output.push(words[i])
    }
  }
  const outString = output.join(', ')
  return outString;
}

console.log(filterWords('alpha alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))

const banana = function() {
  const out = 'b' + 'a' + + 'a' + 'a';
  console.log(out.toLowerCase());
}

banana()
