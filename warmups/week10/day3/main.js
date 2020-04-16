const fs = require('fs');
const grades = () => {
	const genRange = () => [...Array(11).keys()];
	return genRange().map((row) => genRange().map((col) => col * row));
};

console.table(grades());

const sumtxt = () => {
	try {
		const nums = fs.readFileSync('./numbers.txt', 'utf-8');
		return nums
			.split('\n')
			.map((num) => parseInt(num))
			.reduce((acc, curr) => acc + curr);
	} catch (error) {
		console.error(error);
	}
};

console.log('Sum of the numbers:', sumtxt());

const rgbtohex = (rgb) => {
	const toHex = (val) => (val >= 10 ? String.fromCharCode(val + 55) : val);
	return rgb.reduce(
		(acc, color) => acc + toHex(Math.floor(color / 16)) + toHex(color % 16),
		'',
	);
};

console.log('RGB to HEX:', rgbtohex([13, 246, 133]));
