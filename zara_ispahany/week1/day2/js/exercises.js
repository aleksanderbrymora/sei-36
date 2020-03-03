console.log("me work?");

// # The Calculator
//
// ## Part 1
// - Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// - Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// - Bonus: Round the result so there are only two digits after the decimal.

//Part 1.1
const squareNumber = function(numP1) { //numP1 = Number for Part 1
  const squaredResult = numP1 * numP1; // numP1^2
  console.log(`The result of squaring the number ${numP1} is ${squaredResult}.`);
  return squaredResult;
}
squareNumber(3);

//Part 1.2
const halfNumber = function(numP12) { //numP12 = Number for Part 1.2
  const numberHalved = numP12/2;
  console.log(`Half of ${numP12} is ${numberHalved}.`);
  return numberHalved;
}
halfNumber(8);

// Part 1.3
const percentOf = function(number1, number2) {
  const percentage = number1/number2 * 100;
  console.log(`${number1} is ${percentage}% of ${number2}.`);
  return percentage;
}
percentOf(3, 12);

// Part 1.4
const areaOfCircle = function(radius) {
  const area = Math.PI * radius ** 2;
  console.log(`The area for a circle with a radius of ${radius} is ${area.toFixed(2)}`);
  return area;
}
areaOfCircle(3);

//
// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// - Take half of the number and store the result.
// - Square the result of #1 and store that result.
// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3).

const percArea = function(numberP2) {
  const halfNum = numberP2/2;
  const squaredNum1 = halfNum ** 2;
  const circleArea = Math.PI * squaredNum1 ** 2;
  const percentageOfSquared = squaredNum1/circleArea * 100;
  console.log(`Number:${numberP2} Halved:${halfNum} Sqaured:${squaredNum1} Area of Circle:${circleArea.toFixed(2)} Percentage:${percentageOfSquared.toFixed(2)}% `);
}
percArea(8);

console.log("me work?");
// # Strings
//
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
//
// ## DrEvil
//
// Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
// ```
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
// ```

const DrEvil = function(cash) {
  if (cash === 1000000) {
    console.log(`${cash} dollars (pinky)`);
  } else {
    console.log(`${cash} dollars`);
  }
  return cash;
}
DrEvil(10);
DrEvil(1000000);
DrEvil(99999999);
DrEvil(100000);

//
// ## MixUp
//
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
// ```
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
// ```

const mixUp = function(word1, word2) {
  const firstLetter1 = word1[0];
  const firstLetter2 = word2[0];
  console.log(word1.replace(firstLetter1, firstLetter2) + " " + word2.replace(firstLetter2, firstLetter1));
}
mixUp("purple", "dragons");

//
// ## FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// for let i = 1

const fixStart = function(aWord) {
  const letterOne = aWord[0];
  if (aWord.includes(letterOne)) {
    const wordy = aWord.replace(/s/g, '*');
    console.log(wordy);
  } else {
    console.log(`no`);
  }
}
fixStart("sissle");

//
// ## Verbing
//
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
// ```
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// ```
//
// ## Not Bad
//
// Create a function called notBad that takes a single argument, a string.
// - It should find the first appearance of the substring 'not' and 'bad'.
// - If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// - If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
//
// For example:
// ```
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
// ```
