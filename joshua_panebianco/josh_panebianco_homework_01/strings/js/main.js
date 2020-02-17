console.log("Hello World");

// Strings
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
//
// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

const DrEvil = function (number) {
	if (number == 1000000) {
		console.log(`${ number } dollars (pinky)`)
	} else {
		console.log(`${ number } dollars`);
	}
};
DrEvil(1000000);

// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

const mixUp = function (mix1, mix2) {
	console.log(`${ mix1 } ${ mix2 }`);
}
mixUp("dog", "food");

// FixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

const fixStart = function (fixThis) {
	const firstLetter = fixThis[0];
	let newString = firstLetter;

	// Loop through looking for matching letters
	for (var i = 1; i < fixThis.length; i++) {
     // console.log(fixThis[i])
		 if (fixThis[i] == firstLetter) {
	 		// fixStart.replace([i], [i]);
			newString = newString + '*';
	 	} else {
			newString = newString + fixThis[i];
		}
  }
	console.log(newString);
};
fixStart("babble");

// Verbing
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
const verbing = function (threeLetterString) {
	
}
