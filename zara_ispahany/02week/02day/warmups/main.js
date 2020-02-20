// # Scrabble Score
//
// Write a program that, given a word, computes the scrabble score for that word.
//
// ```javascript
// scrabble('cabbage');
// // => 14
// scrabble('cabbage'); // with b doubled, g tripled and a double word
// // => 42
// ```
//
// ## Letter Values
//
// ```plain
// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10
// ```
//
// ## Extensions
//
// - You can play a `:double` or a `:triple` letter.
// - You can play a `:double` or a `:triple` word.



const scrabble = function(
  word,
  isDouble = false,
  isTriple = false,
  doubles = [], //extension
  triples = []
  ) {
  word = word.toLowerCase();
  let out = 0; //start to count the points from zero
  const points = {
		a: 1,
		e: 1,
		i: 1,
		o: 1,
		u: 1,
		l: 1,
		n: 1,
		r: 1,
		s: 1,
		t: 1,
		d: 2,
		g: 2,
		b: 3,
		c: 3,
		m: 3,
		p: 3,
		f: 4,
		h: 4,
		v: 4,
		w: 4,
		y: 4,
		k: 5,
		j: 8,
		x: 8,
		q: 10,
		z: 10,
    };
    for (let i = 0; i < word.length; i++) {
      if (doubles.includes(word[i])) { //extension
        out += points[word[i]] * 2;
        const letter = doubles.indexOf(word[i]);
        doubles.splice(letter, 1);
      } else if (triples.includes(word[i])) { //extension
        out += points[word[i]] * 3;
        const letter = triples.indexOf(word[i]);
        doubles.splice(letter, 1);
      } else {
        out += points[word[i]]; //accessing every single letter of the word by looping it //same thing as points['c']
    }
    if (isDouble) {
      out = out * 2;
    }
    if (isTriple) {
      out *= 3;
    }
    return out;
};
console.log(scrabble('cabbage', true, false, ['b'], ['g'])); //abb is extension
