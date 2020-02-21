


const sortWord = function (word) {
  return word.split('').sort().join('');
}


const anagram = function(word, toCheck) {
  const sortedInput = sortWord(word);
  const out = []
  for (let i = 0; i < toCheck.length; i++) {
    if (sortedInput === sortWord(toCheck[i])) {
    out.push(toCheck[i]);
    }
  }
  return out.join(', ');
}

console.log(anagram('listen', ["enlists", "google", "inlets", "banana"]));
