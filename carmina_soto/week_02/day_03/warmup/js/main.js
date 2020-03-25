// # Anagram Detector
//
// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word. A word is an anagram if its letters can be rearranged to create a new word.
//
// In other words, given: `"listen"` and `["enlists" "google" "inlets" "banana"]` the program should return "inlets".
//
// ## Suggestions
//
// - Start out by getting this working with discrete functions.
// - If you feel comfortable with that, try to put all your functions, collections, etc, into an object.

const anagram = function(word,array){
  // get word lengths in array
  let wordArrayLength;
  for (let i = 0; i < array.length; i++){
    wordArrayLength = array[i].length;
    if (wordArrayLength === word.length) {
      let regex = `/[${array[i]}]+/gm`;
      console.log(regex);
      // if(array[i].search(regex) != -1) {
      //   return array[i];
      // }
    }
  }
}
// console.log(anagram("listen",["enlists","google","inlets","banana"]));
anagram("listen",["enlists","google","inlets","banana"]);
