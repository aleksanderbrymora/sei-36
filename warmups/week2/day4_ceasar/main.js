const ceasar = function(message, key) {
	message = message.toLowerCase();
	let out = '';
	for (let i = 0; i < message.length; i++) {
		if (/[a-z]/.test(message[i])) {
			// Convert to ascii number
			let ascii = message.charCodeAt(i);

			// Check if it goes above z
			if (ascii + key > 'z'.charCodeAt(0)) {
				ascii -= 26;
			}

			// Define new encoded character
			out += String.fromCharCode(ascii + key);
		} else {
			out += message[i];
		}
	}
	return out;
};

console.log(ceasar('please help, this is boringzz', 1));
