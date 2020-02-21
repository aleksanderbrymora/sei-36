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
// const drEvil = function(num){
//   if (num >= 1000000){
//     console.log(num + " " + "dollars " + "Pinky");
//   }else {
//     console.log(`${num} dollars.`);
//   }
// };
//
// drEvil(10000000);
// drEvil(100);
//
//
//
// // ## MixUp
// const mixUp = function(word1, word2){
//   const newString1 = word1.replace(word1[0],word2[0]);
//   const newString2 = word2.replace(word2[0],word1[0]);
//   const result = (newString1 + " " + newString2);
//   return result
// };
// console.log(mixUp('rambo','kumar'));









// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
// ```
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
// ```
//
// ## FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// ```
// try using .includes for fixStart
// const fixStart = function(stringy){
//   let part2 = stringy.substring(1,stringy.length);
//   let part1 = stringy[0];
//   for (let i=0;i<part2.length;i++){
//     if (part2[i] === part1){
//       part2 = part2[i].replace(part1,'*');
//     console.log(part1 + part2 );
//   }
//  }
// };
//
//  fixStart('goggle');
const fixStart = function(stringy){
let part2 = stringy.substring(1,stringy.length);
let part1 = stringy[0];
for (let i=0; i>length)
};
fixStart('googgle');



// let word = 'google'
// const firstLetter = word[0].toLowerCase()
//   console.log(word.match(firstLetter));
//   console.log(word.search(firstLetter));
//   console.log(word.replace(word[0],"*"));
// ## Verbing
//
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
// ```
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// ```



// const verbing = function(str){
//   if (str.length >= 3 && str.substring((str.length-3),(str.length)) !== 'ing'){
//     console.log(str + 'ing')
//   }else if (str.substring((str.length-3),(str.length)) === 'ing'){
//     console.log(str + 'ly')
//   }else{
//     console.log(str);
//   }
// };
//
// (verbing('mar'));
// (verbing('go'));
// (verbing('swiming'));
// (verbing('caring'));
// (verbing('share'));
// (verbing('re'));




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
