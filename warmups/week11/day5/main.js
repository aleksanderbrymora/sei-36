const isIsogram = (word) => {
	word = word.toLowerCase();
	for (let i = 0; i < word.length; i++) {
		for (let j = i + 1; j < word.length; j++) {
			if (word[i] === word[j]) {
				return false;
			}
		}
	}

	return true;
};

//prettier-ignore
let i=s=> new Set(s.toLowerCase()).size==s.length

console.log(isIsogram('Dermatoglyphics')); // => true
console.log(isIsogram('isogram')); // => true
console.log(isIsogram('aba')); // => false, "same chars may not be adjacent"
console.log(isIsogram('moOse')); // => false, "same chars may not be same case"
console.log(isIsogram('isIsogram')); // => false
console.log(isIsogram('')); // => true, "an empty string is a valid isogram"

console.log('=========');

console.log(i('Dermatoglyphics')); // => true
console.log(i('isogram')); // => true
console.log(i('aba')); // => false, "same chars may not be adjacent"
console.log(i('moOse')); // => false, "same chars may not be same case"
console.log(i('isIsogram')); // => false
console.log(i('')); // => true, "an empty string is a valid isogram"

// Lawrence's solution
const isIsogram = (string) => (string === '' ? true : !/(.).*\1/i.test(string));
console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('isogram'));
console.log(isIsogram('aba'));
console.log(isIsogram('moOse'));
console.log(isIsogram('isIsogram'));
console.log(isIsogram(''));
