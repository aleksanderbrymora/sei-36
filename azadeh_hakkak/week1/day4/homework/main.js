const maxOfTwo = function (num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(maxOfTwo(8, 16));
/////////////////////////////////////////////////////

const maxOfThree = function (num1, num2, num3) {
  let result = Math.max(num1, num2, num3);
  return result;

}
console.log(maxOfThree(8, 18, 7));
///////////////////////////////////////////////////

const vowelFinder = function (char) {
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < vowels.length; i++) {
    if (char === vowels[i]) {
      return `Its a vowel.`
    }
  return `Its not a vowel.`;
}
}

console.log(vowelFinder("a"));
console.log(vowelFinder("g"));
/////////////////////////////////


const sumArray = function (array) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    counter = counter + array[i];
  }
  return counter;
}


console.log(sumArray([1, 2, 3, 4]));
///////////////////////////////////////////

const multiplyArray = function (array) {
  let counter = 1;
  for (let i = 0; i < array.length; i++) {
    counter = counter * array[i];
  }
  return counter;
}

console.log(multiplyArray([1, 2, 3, 4]));
//////////////////////////////////////////

const reverseString = function (string) {
  let splitStr = string.split('');
  let revers = splitStr.reverse();
  let joinRev = revers.join('');
  return joinRev;

}


console.log(reverseString("jag testar"));
/////////////////////////////////////////////////////////////////

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
const findLongestWord = function (array) {
    // variable to hold longest word so far... first word
    // for loop the array, starting at the second word, i = 1; i < array.length
    // inside for loop, have an if statement testing if variable word.length < second word.length
    // then reassign variable to second word variable = second word
    // run loop again
    // return variable word
let counter = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i].length > counter.length) {
    counter = array[i];
  }
}
return counter;

}

console.log(findLongestWord(['azadeh', 'carmina', 'yuki']));
////////////////////////////////////////////////////
//i want a variable to hold the result.
//for loop to go through the array to check if the length of the words are bigger than the number.
// if true hold that item in result and push it to the array.
//return result.

const filterLongWords = function(array, num) {
let result = [];
for (let i = 0; i < array.length; i++) {
  if (array[i].length > num) {
    result.push(array[i]);
  }
}
return result;
}

console.log(filterLongWords(['azadeh', 'carmina', 'yuki'], 4));
/////////////////////////////////////////////

let wordToGuess = ['F', 'o', 'x'];
let currentGuessedLetters = ['_', '_', '_'];

const guessLetter = function (letter) {
  for (let i = 0; i < wordToGuess.length; i++) {
  if (letter === wordToGuess[i]) {
    currentGuessedLetters[i] = letter ;//currentGuessedLetters.splice(0,1, letter);
    console.log(`${currentGuessedLetters.join('')} You found a new letter.`);

  } else {
    console.log(`its a bad guess.`);
    
  }

}
}




console.log(guessLetter('F'));
// const rectangular = {
//   length: 10,
//   width: 5,
//   height: 3
// };
// const square = {
//   length: 10,
//   width: 10,
//   height: 10
// };
// const findSuare = function (object) {
//
//   if (object.lenght === object.width) {
//     return (`The object is quare.`);
//   } else {
//     return (`The object is not square.`);
//   }
// };
//
// const area = function (object) {
//   const result = object.length * object.width;
//     return (`The area is ${ result }.`);
// };
//
// const perimeter = function (object) {
//   const result = 2 * (object.length + object.width);
//     return (`The premier is ${result}.`);
// };
//
//
// console.log(findSuare(rectangular));
// console.log(area(rectangular));
// console.log(perimeter(rectangular));
//
// //####################################
//
// const triangle = {
//   n1: 3,
//   n2: 4,
//   n3: 4
// };
//
// const isEquilateral = function (side) {
//
//   if (side.n1 === side.n2 && side.n2 === side.n3) {
//     return ('Triangle is equilateral.');
//   } else {
//     return (`Triangle is not equilateral.`);
//   }
// };
//
//
// const isIsosceles = function (side) {
//   if (side.n1 === side.n2 || side.n2 === side.n3 || side.n1 === side.n3) {
//     return (`Triangle is isosceles.`);
//   } else {
//     return (`Triangle is not isosceles.`);
//   }
// };
//
//
// const areaA = function (side) {
//   const s = ((side.n1 + side.n2 + side.n3) / 2);
//     return Math.sqrt(s * (s - side.n1) * (s - side.n2) * (s - side.n3)).toFixed(2);
// };
//
//
// const isObtuse = function (side) {
//   //If a2 + b2 < c2, then it is obtuse triangle.
//   if (Math.hypot(side.n1 + side.n2) < Math.hypot(side.n3)) {
//     return `Triangle is obtuse.`;
//   } else {
//     return `Triangle is not obtuse.`;
//     }
// };
//
//
//
// console.log(isEquilateral(triangle));
// console.log(isIsosceles(triangle));
// console.log(areaA(triangle));
// console.log(isObtuse(triangle));

//****************************************

// const cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: ".60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
// //
//
// const cashRegister = function (items) {
//   let prices = Object.values(items);
//   let numbers = parseFloat(prices[i]);
//   let counter = 0;
//   for
















// const cashRegister = function (items) {
//   // 1. extract values from items
//   // 2. convert values to numbers
//   // 3. use the loop to add up the values.
//   // 4. return
//   let prices = Object.values(items);
//
//   console.log(prices);
//   let result = 0
//   for (let i = 0; i < prices.length; i++) {
//     let num = parseFloat(prices[i]);
//     result = result + num;
//   }
//   return result;
// ``
