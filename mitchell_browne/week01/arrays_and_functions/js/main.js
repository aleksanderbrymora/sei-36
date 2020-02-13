console.log("Let's tango! cha cha cha");

// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function(num1, num2) {
  return result = (num1 > num2) ? num1 : num2;
};

// const maxOfTwoNumbers = function(num1, num2) {
//   return result = (Array.from([num1, num2]).sort((a, b) => b - a))[0];
// };

console.log(maxOfTwoNumbers(2, 4));

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

// const maxOfThree = function(num1, num2, num3) {
//   const higher = (num1 > num2) ? num1 : num2;
//   return result = (higher > num3) ? higher : num3;
// }

// const maxOfThree = function(num1, num2, num3) {
//   const array = [num1, num2, num3];
//   const result = array.sort((a, b) => b - a);
//   return result[0];
// };

const maxOfThree = function(num1, num2, num3) {
  return result = (Array.from([num1, num2, num3]).sort((a, b) => b - a))[0];
};

console.log(maxOfThree(10,2,3));

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

/*
const vowelCharacter = function(string) {
  const vowels = ['a','e','i','o','u'];
  for (let i = 0; i < vowels.length; i++) {
      if (string[0] === vowels[i]) {
        return true;
      }
  }
  return false;
};
*/

const vowelCharacter = function(letter) {
  //const vowels = 'aeiou';
  return result = ('aeiou'.search(letter.toLowerCase()) >= 0);
};

console.log(vowelCharacter('i'));
console.log(vowelCharacter('f'));

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const sumArray = function(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
};

console.log(sumArray([1,2,3,4]));

const multiplyArray = function(array) {
  let result = 1;
  for (let i = 0; i < array.length; i++) {
    result = result * array[i];
  }
  return result;
};

console.log(multiplyArray([1,2,3,4]));


// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".


// const reverseString = function(string) {
//   let result = '';
//   for (let i = (string.length - 1); i >= 0; i--) {
//     result = result + string[i];
//   }
//   return result;
// }


const reverseString = function(string) {
  return string.split('').reverse().join('');
}

console.log(reverseString("jag tester"));

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

const findLongestWord = function(array) {
  let longest = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i].length > longest.length) {
      longest = array[i];
    }
  }
  return longest;
}

console.log(findLongestWord(['my', 'mate', 'tom']));

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

const filterLongWords = function(array, number) {
  const arrayResult = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > number) {
      arrayResult.push(array[i]);
    }
  }
  return arrayResult;
}

console.log(filterLongWords(['my', 'mate', 'tom'], 2));
