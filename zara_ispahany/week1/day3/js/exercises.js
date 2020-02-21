//Going to complete later

// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
//
// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

//1.
const maxOfTwoNumbers = function(a, b){
  let result;
  if (a > b) {
    result = a;
  } else {
    result = b;
  }
  return result;
}
console.log(maxOfTwoNumbers(2, 5));
console.log(maxOfTwoNumbers(6, 3));

//2
const maxOfThree = function(c, d, e){
  let result;
  if (c > d && c > e) {
    result = c;
  } else if (d > c && d > e) {
    result = d;
  } else {
    result = e;
  }
  return result;
}
console.log(maxOfThree(2, 2, 9));

//3
const findVowel = function(letter) {
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < vowels.length; i++) {
    if (letter === vowels[i]) {
      console.log(`${letter} is a vowel`);
      return;
    }
  }
  console.log("no");
}
findVowel("a");
findVowel("e");
findVowel("i");
findVowel("p");

//4
//sumArray
let sArray = [];
function sumArray(sArray) {
  let total = 0;
  for (let j = 0; j < sArray.length; j++) {
    total += sArray[j];
  }
  console.log(total);
}
sumArray([4, 5]);
sumArray([1, 2, 3, 4]);

//multiplyArray
let mArray = [];
function multiplyArray(mArray) {
  let mTotal = 1;
  for (let k = 0; k < mArray.length; k++) {
    mTotal *= mArray[k];
  }
  console.log(mTotal);
}
multiplyArray([1, 2, 3, 4]);

//5 - reverse string
const reverseString = function(string) {
  let reversed;
  for (let z = string.length - 1; z >= 0; z--) {
    reversed += string[z];
  }
  console.log(reversed);
}
reverseString("fish");
reverseString("jad tester");

//6 - find longest word
// array.length will count each string in the array not the letters
// let wordArray = [];
// const findLongestWord = function(wordArray) {
//
// }
let wordArray = [];
function wwrd(w0rd) {
  const splitArray = w0rd.split(' ');
  var longest = 0;
    var worD = null;
  for (var t = 0; t < splitArray.length - 1; t++) {
        if (longest < splitArray[t].length) {
            longest = splitArray[t].length;
            worD = str[i];
        }
    }
    console.log(word);
}
wwrd(["fish, cat"]);
