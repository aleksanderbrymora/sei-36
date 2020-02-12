const reverseStr = function(s) {
  return s
    .split("")
    .reverse()
    .join("");
};

reverseStr("Hi world");

const findLongestWord = function(arr) {
  // let l = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   l = arr[i].length > l ? arr[i].length : l;
  // }
  // return l;

  return arr.reduce(function(acc, current) {
    return current.length > acc ? current.length : acc;
  }, 0);
};

//findLongestWord(["jesus", "mary", "joseph"]);

const filterLongWords = function(arr, n) {
  // for loop
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > n) {
      newArray.push(arr[i]);
    }
  }
  return newArray;

  // // reduce
  // return arr.reduce(function(accumulator, current) {
  //   if (current.length > n) {
  //     accumulator.push(current);
  //     return accumulator;
  //   } else {
  //     return accumulator;
  //   }
  // }, []);
};

//filterLongWords(["jesus", "mary", "joseph"], 4);

/**
 * Hangman game
 */

let secretWord = "cockatoo";
let guessedLetters = [];

let crypticWord = "_".repeat(secretWord.length);

const guessLetter = function(letter) {
  // store guessed letters
  if (!guessedLetters.includes(letter)) {
    guessedLetters.push(letter);
  }
  // Matching for loop
  for (let i = 0; i < secretWord.length; i++) {
    if (secretWord.split("")[i] === letter) {
      crypticWord = crypticWord.split("");
      crypticWord[i] = letter;
      crypticWord = crypticWord.join("");
    }
  }

  // Game state if conditional
  if (crypticWord === secretWord) {
    return `Congratulations! You win. The word was ${secretWord}.`;
  } else {
    return `Still need a few more! ${crypticWord}. So far you guessed with the fallowing letters: ${guessedLetters}.`;
  }
};

guessLetter("c");
guessLetter("a");
guessLetter("l");
