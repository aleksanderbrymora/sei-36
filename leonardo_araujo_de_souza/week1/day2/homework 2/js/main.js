// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else



function maxOfTwoNumbers(firstNum, secondNum){

   if (firstNum > secondNum) {
      console.log(firstNum + " is larger than " + secondNum);
    } else {
        console.log(firstNum + " is less than " + secondNum);
    }
return;

 }
//
// //  two numbers for maxOfTwoNumbers
 maxOfTwoNumbers (10,20);


// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
function maxOfThree(num1,num2,num3){
  if((num1 !== num2) && (num2 !== num3) && (num3 !== num1)){
      if(num1 > num2){
        if(num1 > num3){
           return num1;
        } else{
          return num3;
        }
  }else if(num2 > num1){
         if(num2 > num3){
           return num2;
         } else{
           return num3;
         }
  }
  } else{
     if(num1 === num2){
        if(num2 > num3){
           return num2;
        }else {
          return num3;
        }
     } else if(num2 === num3){
       if(num1 > num3){
          return num1;
       } else{
         return num3;
       }
     } else if(num1 === num3){
          if(num3 > num2){
            return num3;
          } else{
            return num2;
          }
     }
  }
}


function maxOfThreeRight(num1,num2,num3){
  if (num1> num2 && num1 > num3){
		return num1;
	} else if(num2 > num3){
		return num2;
	} else {
		return num3;
	}
}


maxOfThree(7,8,3);



// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

// Write a function that takes a character (i.e. a string of length 1)
// and returns true if it is a vowel, false otherwise.

function isVowel(argument){

	var text;
	var argument = argument.toLowerCase();

    var vowels = (['a', 'e', 'i', 'o', 'u']);

    for (var i = 0; i <= vowels.length; i++){
        if (argument != vowels[i]) {
            continue;
        }
        return true;
    }
    return false;
}


var char = "A";

if (isVowel(char)) {
	console.log(char + " is a vowel");
} else {
	console.log(char + " is not a vowel");
}


// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

function sum(numbers) {
var total = 0;
for (var i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
return total;
}
// Print out the total to the console
console.log(sum([1,2,3,4]));


// Set multiplication

function multiply(numbers) {
var total = 1;
for (var i = 0; i < numbers.length; i++) {
  total = (total * numbers[i]);
}
return total;
}
// Print out the total to the console
console.log(multiply([1,2,3,4]));
//


// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

var new_str = " "
function reverse(string) {
  for (var i = string.length - 1; i >= 0; i--) {
    new_str += string[i];
  }
  //return new_str;
}

console.log(reverse('jag testar'));
var string = 'ratset gaj';
console.log(new_str === string);


// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
function findLongestWord(str) {
  var strSplit = str.split(' ');
  var longestWord = '';
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord.length){
	     longestWord = strSplit[i];
     }
  }
  console.log(longestWord);
  return longestWord;
}
findLongestWord("my dog is really crazy");

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

let filterLongWords = function (arr, integer) {
  let longWords = [];
  for(let i = 0; i < arr.length; i++) {
    if (arr[i].length > integer){
      longWords.push(arr[i]);
    }
  }
  return longWords;
}

console.log(filterLongWords(["is", "very", "hard", "to", "understand"], 4));
