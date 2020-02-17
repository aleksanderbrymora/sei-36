
/* Strings

These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

## DrEvil

Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
```
  DrEvil(10): 10 dollars
  DrEvil(1000000): 1000000 dollars (pinky)
```
*/

const DrEvil = function(amount) {
  let result = amount + " dollars";
  if (parseInt(amount, 10) == 1000000) {
    result = result + ' (pinky)';
  };
  return result;
};
console.log(DrEvil(10));
console.log(DrEvil(1000000));

/*MixUp

Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
```
  mixUp('mix', 'pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
```
*/


const mixUp = function(strOne, strTwo) {
  const result = strTwo.slice(0,2) + strOne.slice(2) + " " + strOne.slice(0,2) + strTwo.slice(2);
  return result;
};

console.log(mixUp('mix', 'pod'));
console.log(mixUp('dog', 'dinner'));

// ## FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// ```
//

const fixStart = function(string) {
  let result = string.charAt(0);
  for (let i = 1; i < string.length; i++) {
    if (string.charAt(i) == string.charAt(0)) {
      result += '*';
    }
    else {
      result += string.charAt(i);
    };
  };
  return result;
};

console.log(fixStart('wawee'));

/*## Verbing

Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
```
  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'
``` */


const verbing = function(string) {
  let result = string;
  if (string.length < 3) {
    return result;
  }
  else if (string.slice(-3) == 'ing') {
    result = result + 'ly';
    return result;
  }
  else {
    result = result + 'ing';
    return result;
  }
};

console.log(verbing('swim'));
console.log(verbing('swimming'));
console.log(verbing('go'));

/*## Not Bad

Create a function called notBad that takes a single argument, a string.
- It should find the first appearance of the substring 'not' and 'bad'.
- If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
- If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

For example:
```
  notBad('This dinner is not that bad!'): 'This dinner is good!'
  notBad('This movie is not so bad!'): 'This movie is good!'
  notBad('This dinner is bad!'): 'This dinner is bad!'
```
*/



const notBad = function(string)
{
  const firstPoint = string.indexOf('not');
  const lastPoint = string.indexOf('bad');
  const corPoint = lastPoint + 3;
  if (firstPoint == -1)
  {
    return string;
  }
  else {
    const searchFor = string.slice(firstPoint, corPoint);
    const replaceWith = 'good';
    const newString = string.replace(searchFor, replaceWith);
    return newString;
  }
};


console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This dinner is bad!'));
//console.log(notBad('This dinner is badnot!'));
//console.log(notBad('This dinner is just dinner!'));
=======
/* Strings

These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

## DrEvil

Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
```
  DrEvil(10): 10 dollars
  DrEvil(1000000): 1000000 dollars (pinky)
```
*/

const DrEvil = function(amount) {
  let result = amount + " dollars";
  if (parseInt(amount, 10) == 1000000) {
    result = result + ' (pinky)';
  };
  return result;
};
console.log(DrEvil(10));
console.log(DrEvil(1000000));

/*MixUp

Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
```
  mixUp('mix', 'pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
```
*/


const mixUp = function(strOne, strTwo) {
  const result = strTwo.slice(0,2) + strOne.slice(2) + " " + strOne.slice(0,2) + strTwo.slice(2);
  return result;
};

console.log(mixUp('mix', 'pod'));
console.log(mixUp('dog', 'dinner'));

// ## FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// ```
//

const fixStart = function(string) {
  let result = string.charAt(0);
  for (let i = 1; i < string.length; i++) {
    if (string.charAt(i) == string.charAt(0)) {
      result += '*';
    }
    else {
      result += string.charAt(i);
    };
  };
  return result;
};

console.log(fixStart('wawee'));

/*## Verbing

Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
```
  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'
``` */


const verbing = function(string) {
  let result = string;
  if (string.length < 3) {
    return result;
  }
  else if (string.slice(-3) == 'ing') {
    result = result + 'ly';
    return result;
  }
  else {
    result = result + 'ing';
    return result;
  }
};

console.log(verbing('swim'));
console.log(verbing('swimming'));
console.log(verbing('go'));

/*## Not Bad

Create a function called notBad that takes a single argument, a string.
- It should find the first appearance of the substring 'not' and 'bad'.
- If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
- If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

For example:
```
  notBad('This dinner is not that bad!'): 'This dinner is good!'
  notBad('This movie is not so bad!'): 'This movie is good!'
  notBad('This dinner is bad!'): 'This dinner is bad!'
```
*/

const notBad = function(string) {
  const firstPoint = string.indexOf('not');
  const lastPoint = string.lastIndexOf('bad')+3;
  if (firstPoint == -1 || lastPoint == -1) {
    return string;
  }
  else if (firstPoint > lastPoint-3) {
    return string;
  }
  else {
    const searchFor = string.slice(firstPoint, lastPoint);
    const replaceWith = 'good';
    const newString = string.replace(searchFor, replaceWith);
    return newString;
  };
};

console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This dinner is bad!'));
console.log(notBad('This dinner is badnot!'));
console.log(notBad('This dinner is just dinner!'));
