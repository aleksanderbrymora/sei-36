console.log('hey Josh');


// Array and Functions Bonus Material
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
// Bonus
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.

// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function(a, b) {
  let biggerNumber;
	if ( a > b ) {
		biggerNumber = a;
	} else {
		biggerNumber = b;
	}
  console.log(`${ biggerNumber } is a the largest number`);
  return biggerNumber;
};

maxOfTwoNumbers(4,12);
maxOfTwoNumbers(11,46);

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.


const maxOfThree = function(a, b, c) {
	let bestOfThree;
	if (a > b) {
		bestOfThree = a;
	} else if (a > c) {
		bestOfThree = a;
	} else {
		bestOfThree = b;
	}
	console.log(`${ bestOfThree } is the largest number`)
	return bestOfThree;
};

maxOfThree(1,5,10);
maxOfThree(12,2,4);

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

const sumArray = function(a) {
	let sumAnswer = 0;
	for (var i = 0, sum = 0; i < a.length; i++) {
		sumAnswer += a[i];
	}
	console.log(sumAnswer);

	console.log(`The sum of these three numbers are ${ sumAnswer }`);
	return sumAnswer;
};
sumArray([6,2,4]);

// Bonus
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function(word) {
	let reverseWord;
	// For loop that loops throught the word that is add to the function, with the reverse(), not sure.
	console.log(`When you reverse the ${ word } you get ${ reverseWord }`);
}
reverseString("Hotdogs");

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
const findLongestWord = function(a) {
	let theLongesatWord;
	for (var i = 0; i < a.length; i++) {
		// if statements that find the longest word? is there a better way to tdo this?
	}
}
