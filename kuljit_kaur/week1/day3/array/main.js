// Array and Functions Bonus Material
// 1. Define a function maxOfTwoNumbers that takes two numbers as arguments and
// returns the largest of them. Use the if-then-else construct available in
// Javascript. You'll have to remember your pre-work, or do some googling to
// figure this out.

const maxOfTwoNumbers = function(num1,num2) {
if (num1 > num2)
return num1;
else
return num2;
}

console.log("Maximum of 2 numbers 2, 10 is " + maxOfTwoNumbers(2,10));
console.log("Maximum of 2 numbers 5, -1 is " + maxOfTwoNumbers(5,-1));


// 2. Define a function maxOfThree that takes three numbers as arguments and
// returns the largest of them.

const maxOfThree = function(num1,num2,num3) {
const max_two = maxOfTwoNumbers(num1,num2);
return maxOfTwoNumbers(num3,max_two);
}

console.log("The Maximum of 3 numbers (2,3,4):"+ maxOfThree(2,3,4));
console.log("The Maximum of 3 numbers (10,3,-1):"+ maxOfThree(10,3,-1));

// 3. Write a function that takes a character (i.e. a string of length 1) and
// returns true if it is a vowel, false otherwise.

const checkChar = function(char1){
switch(char1)
{
case'a':
case'e':
case'i':
case'o':
case'u':return true;
default: return false;
}
}

// 4. Define a function sumArray and a function multiplyArray that sums and
// multiplies (respectively) all the numbers in an array of numbers. For example, 
// sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should
// return 24.

let array1 = [1,2,3,4];

const sumArray = function(array1){
  var sum = 0;
  for (let i=0; i<array1.length;i++)
  sum += array1[i];
  return sum;
}

const multiplyArray = function(array1){
  var multiply = 1;
  for (let i=0; i<array1.length;i++)
  multiply *= array1[i];
  return multiply;
}

console.log("The sum of numbers in the array is " + sumArray(array1));
console.log("The multiplication of numbers in the array is " + multiplyArray(array1));


// 5. Define a function reverseString that computes the reversal of a string.
// For example, reverseString("jag testar") should return the string "ratset gaj".

const revString = function(str)
{
return str.split("").reverse().join("");
}

console.log(`The reverse of "jag testar" is  " ${revString('jag testar')} "`);

// 6. Write a function findLongestWord that takes an array of words and returns
// the length of the longest one.

let arr = ["A","AAAAAA","AAA","AAAA"];
const findLongestWord = function(arr)
{
let maxLength = arr[0].length;
for(let i=0; i<arr.length ;i++)
{
    if (arr[i].length > maxLength )
    maxLength = arr[i].length;
}
return maxLength;
}

console.log(`For the Array ["A","AAAAAA","AAA","AAAA"] , the length of the
longest one is ${findLongestWord(arr)}`);

// 7. Write a function filterLongWords that takes an array of words and an number 
// i and returns the array of words that are longer than i.
let arrWords = ["A","AAAAAA","AAA","AAAA"];
const filterLongWords = function (arrWords,numb)
{ let eachLength = arrWords[0].length;
  let newarr = [];
  for(let i=0; i<arrWords.length ;i++)
  {   eachLength = arrWords[i].length;
      if (eachLength > numb)
      newarr.push(arrWords[i]);
  }
  return newarr;
}
console.log(`For the Array ["A","AAAAAA","AAA","AAAA"] and number 2, output is
${filterLongWords(arrWords,2)}`);

// Homework: The Word Guesser
// You'll create a simple word guessing game where the user gets infinite tries to
// guess the word (like Hangman without the hangman, or like Wheel of Fortune
//   without the wheel and fortune).
// * Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O',
// 'X'), and one to hold the current guessed letters (e.g. it would start with '_',
//  '_', '_' and end with 'F', 'O', 'X').
// * Write a function called guessLetter that will:
// * Take one argument, the guessed letter.
// * Iterate through the word letters and see if the guessed letter is in there.
// * If the guessed letter matches a word letter, changed the guessed letters array
// to reflect that.
// * When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// * It should also figure out if there are any more letters that need to be guessed,
//  and if not, it should congratulate the user for winning the game.
// * Pretend you don't know the word, and call guessLetter multiple times with
// various letters to check that your program works.

let arryWord =['F', 'O', 'X'];
let arryGuess =['_', '_', '_'];
let counter = arryWord.length;
const guessLetter = function(guessedLetter)
{
  for (let i=0; i<arryWord.length;i++)
    {
    if (guessedLetter === arryWord[i])
    {
      arryGuess[i] = arryWord[i];
      console.log(arryGuess);
      console.log(`Congratulations!!!!...You found a new letter ${arryGuess[i]}`);
      counter = counter - 1;
      if(counter === 0)
      {
      console.log(`*****Congratulations user for winning the game!!! ${arryWord}****`);
      }
      else
      console.log(`${counter} more spaces are left` );
     }
   }
 }

guessLetter('A');
guessLetter('X');
guessLetter('F');
guessLetter('B');
guessLetter('P');
guessLetter('O');
