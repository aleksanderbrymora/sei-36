// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function (num1,num2){
  if (num1 > num2){
    return num1;
  } else {
    return num2;
  }
}
console.log(maxOfTwoNumbers(70,20));
console.log(maxOfTwoNumbers(40,90));
// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
const maxOfThree = function (num1, num2, num3){
  if (num1 > num2 && num1 > num3){
    return num1;
  } else if (num1 < num2 && num2 > num3){
    return num2;
  } else {
    return num3;
  }
}
console.log(maxOfThree(20,100,70));
console.log(maxOfThree(40,30,90));
console.log(maxOfThree(80,50,10));
// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const checkVowel = function(char) {
    // if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ){
    //   return true;
    // } else {
    //   return false;
    // }
    const vowelArray = ['a','e','i','o','u'];
    for (let i = 0; i < vowelArray.length; i++){
      if (vowelArray[i] === char){
        return true;
      }
    }
    return false;
}
console.log(checkVowel('a'));
console.log(checkVowel('s'));
console.log(checkVowel('d'));
console.log(checkVowel('e'));

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const sumArray = function(arrayNum){
let result = 0;
  for(let i=0; i < arrayNum.length; i++){
      result = arrayNum[i] + result;
  }
  return result;
}

const multiplyArray = function(arrayNum){
let result = 1;
  for(let i=0; i < arrayNum.length; i++){
    result = arrayNum[i] * result;
  }
  return result;
}
console.log(sumArray([1,2,3,4]));
console.log(multiplyArray([1,2,3,4]));
console.log(sumArray([2,3,4,5]));
console.log(multiplyArray([2,3,4,5]));

// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
const reverseString = function(word){
  let result = '';
  console.log(word.length);
  for(let i = word.length - 1; i >= 0; i--){
    result = result + word[i];
  }
  return result;
}
console.log(reverseString("jag testar"));
// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
const findLongestWord = function(wordArray){
  let wordLength = [];
  for (let i = 0; i < wordArray.length; i++){
    wordLength.push(wordArray[i].length);
  }
  let getLength = 0;
  let longestWord;
  for (let i = 0; i < wordLength.length; i++){
    if (getLength < wordLength[i]){
      getLength = wordLength[i];
      longestWord = wordArray[i];
    }
  }
  return `The longest word is ${longestWord} with the length ${getLength}`;
}
console.log(findLongestWord(["piloted","worlds","go"]));
console.log(findLongestWord(["apple","overachiever","side"]));
// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
const filterLongWords = function (wordArray, num){
  let longWords = [];
  for (let i = 0; i < wordArray.length; i++){
    if (wordArray[i].length > num){
      longWords.push(wordArray[i]);
    }
  }
  return longWords;
}
console.log(filterLongWords(["hello","world","bye"],3));
console.log(filterLongWords(["harder","after","riser","door","laptop","electric"],5));
