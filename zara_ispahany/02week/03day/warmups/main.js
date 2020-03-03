// # Anagram Detector
//
// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word. A word is an anagram if its letters can be rearrangedd to create a new word.
//
// In other words, given: `"listen"` and `["enlists" "google" "inlets" "banana"]` the program should return "inlets".
//
// ## Suggestions
//
// - Start out by getting this working with discrete functions.
// - If you feel comfortable with that, try to put all your functions, collections, etc, into an object.

////object methos
const objectAnagram = {
  out: [],
  sortWord: function(word) {
    return word.split('').sort().join('');
  },
  anagram: function(word, toCheck) {
    const sortedInput = this.sortWord(word); //this. is added as it is in the object just above
    const out = []
    for (let i = 0; i < toCheck.length; i++) {
      if (sortedInput === sortWord(toCheck[i])) {
        out.push(toCheck[i])  //push = to add to the array
      }
    }
    return out.join(', ');
  }
}


////simpler way
const sortWord = function(word) {
  return word.split('').sort().join('');
}

const anagram = function(word, toCheck) {
  const sortedInput = sortWord(word);
  const out = []
  for (let i = 0; i < toCheck.length; i++) {
    if (sortedInput === sortWord(toCheck[i])) {
      out.push(toCheck[i])  //push = to add to the array
    }
  }
  return out.join(', ');
}

console.log(anagram('listen', ["enlists", "google", "inlets", "banana"]));
