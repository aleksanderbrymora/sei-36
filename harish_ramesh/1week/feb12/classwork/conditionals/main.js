// # Exercises: if/else statements
//
// ## What number's bigger?
//
// Write a function named greaterNum that:
// - takes 2 arguments, both numbers.
// - returns whichever number is the greater (higher) number.
// - Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

const greaterNum = function(num1,num2){
  if (num1 > num2) {
    console.log(`The greater among ${num1} and ${num2} is ${num1}.`);
    return num1;
  }else{
    console.log(`The greater among ${num1} and ${num2} is ${num2}.`);
    return num2;
  }
};

greaterNum(23,78);

//8888play with it again

// ## The World Translator
//
// Write a function named helloWorld that:
// - takes 1 argument, a language code (e.g. "es", "de", "en")
// - returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// - Call that function for each of the supported languages and log the result to make sure it works.

const helloWorld = function(lcode){
  const spanish = 'Hola Mundo';
  const french = "Bonjour le monde";
  const english = "hello World";
  if (lcode === 'es'){
    return spanish
  }
  else if (lcode === 'de'){
    return french
  }
  return english
};

console.log(helloWorld('es'));
console.log(helloWorld('de'));
console.log(helloWorld('en'));

// //const hellworls = function(code{
//   if ('es' === code){
//     return 'halo mundo'
//   }
// })
// ## The Grade Assigner
//
// Write a function named assignGrade that:
// - takes 1 argument, a number score.
// - returns a grade for the score, either "A", "B", "C", "D", or "F".
// - Call that function for a few different scores and log the result to make sure it works.
//22222 the countdown down here is a way to call loop with out a looop
//sample for knowledge   const countdown = function(number) {
//   if (number < 0){
//     return;
//   }else {
//     console.log( number );
//     countdown( number-1)
//   }
// };




const graeAssigner = function(mark){
  if (mark>=80){
    return 'A'
  }else if (mark>=70){
    return 'B'
  }else if (mark>=60){
    return 'C'
  }else{
    return 'F'
  }
};
console.log(graeAssigner(67));
console.log(graeAssigner(57));
console.log(graeAssigner(77));
console.log(graeAssigner(87));
// ## The Pluralizer
//

const nounPluralizer = function(noun,num){
  let word;
  if (num>1){
    word = num+ noun + "s"
    console.log(word);
  } else{
    word = num + noun;
    console.log(word);
  }
};
nounPluralizer('dog',1);
nounPluralizer('dog',4);
// Write a function named pluralize that:
// - takes 2 arguments, a noun and a number.
// - returns the number and pluralized form, like "5 cats" or "1 dog".
// - Call that function for a few different scores and log the result to make sure it works.
// - Bonus: Make it handle a few collective nouns like "sheep" and "geese".
