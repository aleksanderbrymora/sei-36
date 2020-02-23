const scrabble = function(
	word,
	doubles = [],
	triples = [],
	isDouble = false,
	isTriple = false,
) {
	word = word.toLowerCase();
	let sum = 0;
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
		const index = word[i];
		if (doubles.includes(index)) {
			sum += points[index] * 2;
			doubles.splice(doubles.indexOf(word), 1);
		} else if (triples.includes(index)) {
			sum += points[index] * 3;
			triples.splice(triples.indexOf(word), 1);
		} else {
			sum += points[index];
		}
	}
	if (isDouble) sum *= 2;
	if (isTriple) sum *= 3;
	return sum;
};

console.log(scrabble('cabbage', ['b'], ['g'], true, false));