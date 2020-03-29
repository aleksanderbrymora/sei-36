// ## What number's bigger?
//
// Write a function named greaterNum that:
// - takes 2 arguments, both numbers.
// - returns whichever number is the greater (higher) number.
// - Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

const greaterNum = function (a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

console.log(`The greater number of 5 and 10 is ${ greaterNum(5, 10) }.`);
console.log(`The greater number of 10 and 5 is ${ greaterNum(10, 5) }.`);
console.log(`The greater number of 10 and 10 is ${ greaterNum(10, 10) }.`);

// ## The World Translator
//
// Write a function named helloWorld that:
// - takes 1 argument, a language code (e.g. "es", "de", "en")
// - returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// - Call that function for each of the supported languages and log the result to make sure it works.

const helloWorld = function (code) {
  if ('es' === code) {
    return 'Hola mundo';
  } else if ('de' === code) {
    return 'Hallo Welt';
  } else {
    return 'Hello World';
  }
};

console.log( helloWorld('es') );
console.log( helloWorld('de') );
console.log( helloWorld('en') );
console.log( helloWorld('ko') );

// ## The Grade Assigner
//
// Write a function named assignGrade that:
// - takes 1 argument, a number score.
// - returns a grade for the score, either "A", "B", "C", "D", or "F".
// - Call that function for a few different scores and log the result to make sure it works.


const assignGrade = function (score) {
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

console.log( assignGrade(100) ); // A
console.log( assignGrade(70) ); // B
console.log( assignGrade(50) ); // D
console.log( assignGrade(14) ); // F

// ## The Pluralizer
//
// Write a function named pluralize that:
// - takes 2 arguments, a noun and a number.
// - returns the number and pluralized form, like "5 cats" or "1 dog".
// - Call that function for a few different scores and log the result to make sure it works.
// - Bonus: Make it handle a few collective nouns like "sheep" and "geese".

const pluralize = function (noun, number) {
  const message = `${ number } ${ noun }`;
  if (1 === number) {
    return message;
  } else {
    return message + 's';
  }
};

console.log( pluralize('cat', 5) );
console.log( pluralize('dog', 0) );
console.log( pluralize('turtle', 1) );

////////////////////////////////////////////////////////////////////////////////
// How to do loops with just if statements and functions?
// Recursion

const countdown = function (number) {
  if (number < 0) {
    return; // exit
  } else {
    console.log( number );
    countdown( number-1 );
  }
};
