// let favouriteRecipe = {
//   title: "Mole",
//   servings: 2,
//   ingredients: ["cinnamon", "cumin", "cocoa"]
// }
// console.log(favouriteRecipe.title);
// console.log('serves:'favouriteRecipe.servings);
// console.log("Ingredients :");
// for (let i = 0; i < favouriteRecipe.ingredients.lenght; i++) {
//   console.log(favouriteRecipe.ingredients[i]);
//   console.log(favouriteRecipe.ingredients)
// }
// //
//
//
// //
// let library = [
//   {title: 'The Hobbit',
//   author: 'J.R.R. Tolkien',
//   alreadyRead: true
// },
//   {title: 'The Lord of the Rings',
//   author: 'J.R.R. Tolkien',
//   alreadyRead: false
//
// },
//   {title: 'Godel',
//   author: 'douglas',
//   alreadyRead: false
//
// },
//   {title: 'Against the day',
//   author: 'Thomas',
//   alreadyRead: false
//
//   }
// ];
//   for (let i = 0; i < library.length; i++) {
//     let book = library[i];
//     let bookInfo = `"${book.title}" by ${book.author}`;
// if (book.alreadyRead === true) {
//   console.log(`you already read ${bookInfo}.`);
// }else {
//   console.log(`You still need to read ${bookInfo}.`)
// }
// }
// //
//
// const favouriteMovie = {
//   title:"o brother wher art thou!",
//   duration: 107,
//   stars: ['george clooney', 'John Goodman', 'Gillian Welch']
// };
// const ghostbusters = {
//   title:"Ghost busters",
//   duration: 105,
//   stars: ['george clooney', 'John Goodman', 'Gillian Welch']
// };
// const alian = {
//   title:"Alian",
//   duration: 117,
//   stars: ['george clooney', 'John Goodman', 'Gillian Welch']
// };
//
// const movieInfo = function (movie) {
//   const info = `${ movie.title } lasts for ${ movie.duration } minutes. Stars: ${movie.stars.join(', ')}`;
//   console.log( info );
// }
//*************************************

// const arr = [1,9,3,7];
// let sum = 0;
//
//
// for (let i = 0; i < arr.length; i++) {
//   //console.log(arr[i]);
//   sum = sum + arr[i];
//
// }
//
//   console.log(sum);
////////////////////////////////////////////////////////////
// The even/odd reporter
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even.`);
  }
}
//////////////////////////////////////////////////////////////
// Multiplication Tables
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
//
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).???????????

for (let i = 0; i <= 10; i++) {
  let result = i * 9;
  console.log(`${i} * 9 = ${result}`);
}
///////////////////////////////////////////////

// The Grade Assigner
// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

const gradeAssigner = function (grade) {

  if (grade < 75 && grade >= 60) {
    return `You got a C.`;
  } else if (grade >= 75 && grade < 90) {
    return `you got a B.`;
  } else if (grade >= 90) {
    return `You got an A.`;
  } else {
    return `You failed!`;
  }
}
console.log(gradeAssigner(89));
console.log(gradeAssigner(65));
////////////////////////////////////////////////

// Exercises: Arrays
// Your top choices
// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

const topChoices = ["black", "white", "gray"];
console.log(`My 1st choice is ${topChoices[0]}.`);
console.log(`My 2nd choice is ${topChoices[1]}.`);
console.log(`My 3rd choice is ${topChoices[2]}.`);
