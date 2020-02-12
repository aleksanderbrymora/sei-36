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

//1#
const maxOfTwoNumbers = function(num1,num2){
  if (num1>num2){
    return num1;
  }else{
    return num2;
  }
};

console.log(maxOfTwoNumbers(23,56));

//2#
const maxOfThree = function(num1,num2,num3){
  let maxOfFirstTwo = maxOfTwoNumbers(num1,num2);
  let maxOfLastTwo = maxOfTwoNumbers(maxOfFirstTwo,num3)
  return maxOfLastTwo;
  }

console.log(maxOfThree(23,18,90));
console.log(maxOfThree(73,68,30));

//3#
let vowels = ['a','e','i','o','u'];
const vowelFinder = function(char){
  let letter = char.toLowerCase();
  for (i=0;i<vowels.length;i++){
    if (vowels[i] == letter){
      return true;
    }
  }
  return false;
};

console.log(vowelFinder('r'));
console.log(vowelFinder('a'));
console.log(vowelFinder('E'));
console.log(vowelFinder('F'));

//4# add

const sumArray = function(array){
  let sum = 0;
  for (i=0;i<array.length;i++){
    sum += array[i]
  }
  return sum;
};
console.log(sumArray([1,2,3,4]));
//4# Multiply
const arrayMultiplier = function(aray){
  let product = 1;
  for(i=0;i<aray.length;i++){
    product = product * aray[i];
  }
  return product;
}

console.log(arrayMultiplier([1,2,3,4]));

//5#
function reverse(str){
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--){
    reversed += str[i];
  }
  return reversed;
}

console.log(reverse('sydney'));

// const longestWord = function(wordarray){
//   let longWord = 0;
//   for (let i=0;i<wordarray.length;i++){
//     for (let j=0;i<wordarray.length;i++){
//       if (wordarray[i][j].length > longWord){
//         longWord = wordarray[i][j].length
//       }
//     }
//
//   }
//  return longWord;
// }
// console.log(longestWord(['gita','sarah','milan','london']));(some wrong code - polish later)
//6#
const findLength = function(words){
  let lengthy = 0;
  for (let i=0;i<words.length;i++){
    if (words[i].length > lengthy){
      lengthy = words[i].length
    }
  }
  return lengthy;
}
console.log(findLength(['gita','sarah','milan','london']));

//7#
const findWordLength = function(words){
  let lengthy = 0;
  let lenWord;
  for (let i=0;i<words.length;i++){
    if (words[i].length > lengthy){
      lengthy = words[i].length
      lenWord = words[i];
    }
  }
  return lenWord;
}
console.log(findWordLength(['gita','sarah','milan','london']));
