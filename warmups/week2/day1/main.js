const polybius = function(message) {
	const cipher = 'abcdefghijklmnopqrstuvwxyz,.?!';
	let output = '';
	for (let i = 0; i < message.length; i++) {
		const index = cipher.indexOf(message[i].toLowerCase());
		if (index !== -1) {
			output += (index % 5) + 1;
			output += Math.floor(index / 5) + 1;
			output += ' ';
		}
	}
	return output;
};

console.log(polybius("Hi, I'm Aleks"));
