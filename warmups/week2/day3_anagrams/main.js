const anagram = {
	anagrams: [],
	strSort: function(str) {
		return str
			.split('')
			.sort()
			.join('');
	},
	compare: function(word, wordList) {
		for (let i = 0; i < wordList.length; i++) {
			if (this.strSort(word) === this.strSort(wordList[i])) {
				this.anagrams.push(wordList[i]);
			}
		}
		return this.anagrams;
	},
};

console.log(
	anagram.compare('listen', ['enlists', 'google', 'inlets', 'banana']),
);
