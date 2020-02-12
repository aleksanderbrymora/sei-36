// Exercises: if/else statements
// What number's bigger?
// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
//

///My version
const greaterNum = function(num1,num2){
  if(num1 > num2){
    console.log(`The greater number of ${num1} and ${num2} is ${num1}`);
  } else {
    console.log(`The greater number of ${num1} and ${num2} is ${num2}`);
  }
};

greaterNum(2,3);
greaterNum(3,2);
greaterNum(4,5);

//Joe version
const greaterNum = function(a,b){
  if (a > b) {
    return = a;
  } else {
    return = b;
  }
};

console.log(`The greater number of 5 and 10 ${ greaterNum(5,10)}.`);
console.log(`The greater number of 10 and 5 ${ greaterNum(10,5)}.`);
console.log(`The greater number of 10 and 10 ${ greaterNum(10,10)}.`);




//
// The World Translator
// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.


const helloWorld = function(code){

  if (code === "es") {
    console.log("Hola");

  } else if (code === "ja") {
    console.log("Konnichiwa");

  } else if (code === "de") {
    console.log("Hallo Welt");

  } else {
    console.log("Hello World");
  }

};

helloWorld("es");
helloWorld("ja");
helloWorld("de");

//Joe version
const helloWorld = function(code) {
if (code === 'es') {
  return 'Hola mundo';
} else if (code === 'de') {
  return 'Hallo Welt';
}  else (code === '') {
  return ''
}



};

console.log( helloWorld('es') );
console.log( helloWorld('en') );
console.log( helloWorld('de') );
console.log( helloWorld('ja') );

//
//
// The Grade Assigner
// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

const assignGrade = function(score) {
  if (score >= 80) {
    return 'A';

  } else if (score >= 70) {
    return 'B';

  } else if (score >= 60) {
    return 'C';

  } else if (score >= 50) {
    return 'D';

  } else {
    return 'F';
  }

};

console.log( assignGrade(100) );
console.log( assignGrade(70) );
console.log( assignGrade(60) );
console.log( assignGrade(50) );
console.log( assignGrade(40) );



// The Pluralizer
// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".
//

///Joe version

const pluralize = function(noun, number){
  if (number === 1) {
    return `${number} ${noun}`;

  } else {
    return `${number} ${noun}s`
  }
};


console.log( pluralize('cat',5) );
console.log( pluralize('dog',0) );
console.log( pluralize('turtle',1) );
//
//
