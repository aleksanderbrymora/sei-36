//Array and Functions Bonus Material

//Question 1 Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}
console.log(maxOfTwoNumbers(300,99));

//Question 2 Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3
    }
}
console.log(maxOfThree (22,15,9));

//Question 3 Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const vowel = ["a", "e", "i", "o", "u"];
const trueForVowel = function (character) {
    if (character === vowel[0] || character === vowel[1] || character === vowel[2] || character === vowel[3] ||character === vowel[4]) {
         return true;
    } else {
           return false
            }    
    }
console.log(trueForVowel("y"));


// Question 4 Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

let addResult = 0; //cannot use const because addResult is expected to change in the For loop.
const sumArray = function (array) {
    for (let i = 0; i < array.length; ++i) {
        addResult = array[i] + addResult;
    }
    return addResult;
}
console.log (sumArray([1,2,3,4]));

let multiplyResult = 1; //cannot use const because multiplyResult is expected to change in the For loop.
const multiplyArray = function (array) {
    for (let i = 0; i < array.length; ++i) {
        multiplyResult = array[i] * multiplyResult;
    }
    return multiplyResult;
}
console.log (multiplyArray([1,2,3,4]));

//Question 5 Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

let returnString="";
const reverseString = function (string) {
   for (let i = string.length-1; i>=0; --i)  { 
        returnString = returnString + string[i];
     }
     return returnString;
}
console.log(reverseString("koikoi"));


//Question 6 Write a function findLongestWord that takes an array of words and returns the length of the longest one.
                    // const findLongestWord = function (arrayOfWords) {
                    //     var stringSplit = arrayOfWords.split(" ");
                    //     var newArrayOfWords = [stringSplit]
                    //     return newArrayOfWords
                    
// //     if (character === vowel[0] || character === vowel[1] || character === vowel[2] || character === vowel[3] ||character === vowel[4]) {
// //         return ("True");
// //     } else {
// //         return ("False")
// //     }    
// // }
// // console.log(trueForVowel("i"));



// Question 7 Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.


let result;
let num1;
let i = 0;
let newArray =[];
const filterLongWords = function (array, num1) {
   for (let i = 0; i < array.length; ++i) {
        if (num1 < array[i].length) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log (filterLongWords(["Good","hihii"],4));
