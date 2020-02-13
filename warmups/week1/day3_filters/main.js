const removeDuplicateWords = function(s) {
	const words = s.split(' ');
	const output = [];
	for (let i = 0; i < words.length; i++) {
		if (!output.includes(words[i])) {
			output.push(words[i]);
		}
	}
	return output.join(' ');
};

console.log(
	removeDuplicateWords(
		'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta',
	),
);

const banana = function() {
	return ('b' + 'a' + +'b' + 'a').toLowerCase();
};

console.log(banana());
