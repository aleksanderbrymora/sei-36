// Anagram Detector
// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word. A word is an anagram if its letters can be rearrangedd to create a new word.

// In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlets".

// Suggestions
// Start out by getting this working with discrete functions.
// If you feel comfortable with that, try to put all your functions, collections, etc, into an object.

let R = ["enlists", "google", "inlets", "banana"]



const sortWord = function (word) {
    return word.split('').sort().join();
}
const anagram = function (word, toCheck) {
    const sortedInput = sortWord(word);
    const out = [];
    for (let i = 0; i<toCheck.length; ++i) {
        if (sortedInput === sortWord(toCheck[i])) {
            out.push(toCheck[i]);
        }
    }
    return out.join(', ');
}




console.log (anagram("listen",["enlists", "google", "inlets", "banana"]))