// // What number's bigger?
// // Write a function named greaterNum that:
// //
// // takes 2 arguments, both numbers.
// // returns whichever number is the greater (higher) number.
// // Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
//
// const greaterNum = function(a, b) {
//   let result;
//   if (a > b) {
//     result = a;
//   }else {
//     result = b;
//   }
//   return result;
// }
// console.log(`The greater number of ${ a } and ${ b } is ${ result }.`);
// const greaterNum = function (x, y) {
// //   if (x > y){
// //     console.log(`The greater number of ${x} and ${y} is ${x}.`)
// //   } else {
// //     console.log(`The greater number of ${x} and ${y} is ${y}`)
// //   }
// //
// // }
// // greaterNum(5, 10);
// let result;
// if (x > y) {
//   result = x;
// } else {
//   result = y;
// }
// return result;
// };
// console.log(`The greater number of 5 and 10 is 10.`)
//
//
// // The World Translator
// // Write a function named helloWorld that:
// //
// // takes 1 argument, a language code (e.g. "es", "de", "en")
// // returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// // Call that function for each of the supported languages and log the result to make sure it works.
// const helloWorld = function (code) {
//   if (code === 'es') {
//     return 'Halo mundo';
//   } else if (code === 'de') {
//     return 'Hallo Welt';
//   } else {
//     return 'Hello World';
//   }
// };
// console.log(helloWorld('es'));
// console.log(helloWorld('de'));
// console.log(helloWorld('es'));
const HelloWorld = function (code) {
  if (code === 'es') {
    return `Halo munda`;
  }else if (code === 'de') {
    return `Hallo Welt`;
  }else {
    return 'Hello World';
  }

};
console.log(HelloWorld('fr'));
// //


// The even/odd reporter
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
//
// for (let n = 0; n <= 20; n++ ) {
//   if ( n % 2 === 0){
//     console.log(`${ n } is even.`);
//   }else {
//     console.log(`${ n } is odd.`);
//   }
// };
for (let i = 0; i <= 20; i++) {
  if ( i % 2 === 0) {
    console.log(`${ i } is even.`)
  }else {
    console.log(`${ i } is odd.`);
  }
};


// Multiplication Tables
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
//

// for (let i = 0; i <= 10; i++) {
//   console.log(`${ i } * 9 = ${ i * 9 }`);
//
// };

for (let i = 0; i <= 10; i++) {
  const result = i * 9;
  console.log(`${ i } * 9; = ${result}. `);
}



// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
//
// The Grade Assigner
// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.
// for (let studentsScore = 60; studentsScore <= 100; studentsScore++) {
//   console.log(`for ${studentsScore}`)
// };

// Exercises: Arrays
// Your top choices
// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

// var colors = [black, white, gray];
// for (var i = 0; i < colors.lenght; i++) {
//   console.log(`My #${ i + 1 } choice is [0].`);
//
// }
// let numbers = [];
// for (let i = 0; i < numbers.lenght; i++) {
//   result = i +
// }
