// # Strings

// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

// ## DrEvil

// Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
// ```
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
// ```
const DrEvil = function ( amount ) {
    if (amount >= 100000) {
        return `${ amount } dollars (pinky)`;
    } else {
        return `${ amount } dollars`;
    }
}
console.log(DrEvil(300));

// ## MixUp

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
// ```
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
// ```
const mixUp = function ( string1, string2) {
    let firstCharOfString1 = string1[0];
    let firstCharOfString2 = string2[0];
    string1 = string1.replace(string1[0], firstCharOfString2);    
    string2 = string2.replace(string2[0], firstCharOfString1);    
    
    return `${ string1 } ${ string2 }`;
}
console.log(mixUp('mix', 'pod'));

// ## FixStart

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// ```
const fixStart = function ( string ) {
    let firstChar = string[0];
    let re = new RegExp(firstChar, 'g');
    let newStr = string.replace(re, '*');
    newStr = newStr.replace('*', firstChar);

    return newStr;
}
console.log(fixStart('babble'));


// ## Verbing

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
// ```
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// ```
const verbing = function ( string ) {
    if (string.length >= 3) {
        if (string.slice(-3) === 'ing') {
            return `${ string }ly`;
        } else {
            return `${ string }ing`;
        }
    } else {
        return string;
    }
}
console.log(verbing('swim'));
console.log(verbing('swimming'));
console.log(verbing('go'));

// ## Not Bad

// Create a function called notBad that takes a single argument, a string.
// - It should find the first appearance of the substring 'not' and 'bad'.
// - If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// - If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

// For example:
// ```
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
// ```

const notBad = function ( string ) {
    indexOfNot = string.indexOf('not');
    indexOfBad = string.indexOf('bad');
    if (indexOfBad > indexOfNot && indexOfNot !== -1) {
        let newStr = string.split(string.slice(indexOfNot, indexOfBad+3)).join('good');
        return newStr;
    } else {
        return string;
    }
}
console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This dinner is bad!'));
