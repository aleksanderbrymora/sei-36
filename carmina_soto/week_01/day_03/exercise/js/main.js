console.log(`Exercises: if/else statements`);
//
// ## What number's bigger?
//
// Write a function named greaterNum that:
// - takes 2 arguments, both numbers.
// - returns whichever number is the greater (higher) number.
// - Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
//
const greaterNum = function(num1, num2){
  if (num2 > num1){
    return num2;
  } else {
    return num1;
  }
}
console.log(`The greater number of 5 and 10 is ${greaterNum(5,10)}.`);
console.log(`The greater number of 7 and 3 is ${greaterNum(7,3)}.`);
// ## The World Translator
//
// Write a function named helloWorld that:
// - takes 1 argument, a language code (e.g. "es", "de", "en")
// - returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// - Call that function for each of the supported languages and log the result to make sure it works.
//
const helloWorld = function(langcode){
  if (langcode === "es") {
    return "Hola Mundo";
  } else if ( langcode === "de") {
    return "Hallo Welt"
  } else {
    return "Hello World";
  }
}
console.log(helloWorld("es"));
console.log(helloWorld("de"));
console.log(helloWorld("en"));
console.log(helloWorld("fr"));
// ## The Grade Assigner
//
// Write a function named assignGrade that:
// - takes 1 argument, a number score.
// - returns a grade for the score, either "A", "B", "C", "D", or "F".
// - Call that function for a few different scores and log the result to make sure it works.
//
const assignGrade = function(score){
  let grade;
  if (score <= 100 && score >= 90) {
    grade = "A";
  } else if (score <= 89 && score >= 80) {
    grade = "B";
  } else if (score <= 79 && score >= 70) {
    grade = "C";
 } else if (score <= 69 && score >= 60) {
   grade = "D";
 } else {
   grade = "F";
 }
 return grade;
}
console.log(assignGrade(100));
console.log(assignGrade(84));
console.log(assignGrade(73));
console.log(assignGrade(69));
console.log(assignGrade(40));
// ## The Pluralizer
//
// Write a function named pluralize that:
// - takes 2 arguments, a noun and a number.
// - returns the number and pluralized form, like "5 cats" or "1 dog".
// - Call that function for a few different scores and log the result to make sure it works.
// - Bonus: Make it handle a few collective nouns like "sheep" and "geese".

const pluralize = function(noun,number){
  const message = `${number} ${noun}`;
  if (noun === "sheep"){
    return message;
  } else if (noun === "goose") {
    if (number > 1) {
      return `${number} geese`;
    } else {
      return message;
    }
  } else if (number === 1){
    return message;
  } else {
    return message + "s";
  }
}
console.log(pluralize("cat",3));
console.log(pluralize("dog",1));
console.log(pluralize("turtle",0));
console.log(pluralize("sheep",2));
console.log(pluralize("sheep",1));
console.log(pluralize("goose",2));
console.log(pluralize("goose",1));

// Loops with if statements and functions (Recursion)

const countdown = function (number) {
  if (number < 0) {
    return;
  } else {
    console.log(number);
    countdown(number - 1);
  }
}

console.log(`Exercises: for loops`);
//
// ## The even/odd reporter
//
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
//
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}
// ## Multiplication Tables
//
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
//
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
//
let result;
for (let i = 0; i <= 10; i++) {
  for (let x = 1; x <= 10; x++){
    result = i * x;
    console.log(`${i} * ${x} = ${result}`);
  }
}
// ## The Grade Assigner
//
// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.
for (let i = 60; i <= 100; i++) {
  console.log(`For ${i}, you got a ${assignGrade(i)}`);
}

console.log("Exercises: Arrays");
//
// # Your top choices
//
// - Create an array to hold your top choices (colors, presidents, whatever).
// - For each choice, log to the screen a string like: "My #1 choice is blue."
// - Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

let topChoices = ['big bang', 'snsd', 'red velvet', 'twice'];
for (let i = 0; i < topChoices.length; i++){
  console.log(`My #${i + 1} choice is ${topChoices[i]}.`);
}
