// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function(a,b){
  if( a > b ){
    return a;
  } else  {
    return b;
  }
};

console.log(`The largest number is ${ maxOfTwoNumbers(2,6)}`);

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

console.log("**********************************");

const maxOfThree = function(a,b,c){
  if ( a > b && a > c ) {
    return a;
  } else if ( b > a && b > c ) {
    return b;
  } else {
    return c;
  }
};

console.log(`The largest number is ${ maxOfThree(2,10,8)}`);

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
console.log("**********************************");


const checkLetters = function(character){
  if(character === "a" || character === "e" || character === "i" || character === "o" || character === "u"){
    return true;
  } else {
    return false;
  }
};

console.log( checkLetters("h") );


// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
console.log("**********************************");

const sumArray = function(a){
  let total = 0;
  for(let i = 0; i < a.length; i++){
    total = a[i] + total

  }
  return total
};

console.log(`Total is ${ sumArray([2,3,4])}`);

console.log("*********************************");

const multiplyArray = function(a){
  let total = 1;
  for(let i = 0; i < a.length; i++){
    total = a[i] * total

  }
  return total
};

console.log(`Total is ${ multiplyArray([2,3,4])}`);





// Bonus
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
console.log("*********************************");
const reverseString = function(character){
  const splitString = character.split("");
  const reverseArray = splitString.reverse();
  const joinArray = reverseArray.join("");
  return joinArray;

}

console.log( reverseString("yukiko"));




// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
console.log("*********************************");
const findLongestWord = function(array){
  let max ='';
  for(let i = 0; i < array.length; i++ ){
    if(max.length < array[i].length){
      max = array[i];
    }
  }
  return max;
};

console.log( findLongestWord(["Yukiko", "Abebebebbebebeb", "Josh"]))



// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
console.log("*********************************");

const filterLongWords = function(arrayOfWords,number){
  const longWords = [];
  for(let i = 0; i < arrayOfWords.length; i++)
   if(arrayOfWords[i].length >= number){
     longWords.push( arrayOfWords[i] );
  }
  return longWords;
}

console.log( filterLongWords(["hiroshi","camina","Azh"],1));
