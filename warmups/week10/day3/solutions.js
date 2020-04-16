const fs = require('fs');

const grades = () => {
	// const table = [];
	// for (let i = 0; i < 11; i++) {
	// 	const row = [];
	// 	for (let j = 0; j < 11; j++) {
	// 		row.push(i * j);
	// 	}
	// 	table.push(row);
	// }
	// return table;
	const genRange = () => [...Array(13).keys()];
	return genRange().map((row) => genRange().map((col) => col * row));
};

// console.table(grades());

const sumtxt = () => {
	try {
		// const nums = fs.readFileSync('./numbers.txt', 'utf-8');
		// const numsArr = nums.split('\n');
		// const parsedNumsArr = numsArr.map((num) => parseInt(num));
		// const sum = parsedNumsArr.reduce((acc, curr) => acc + curr, 0);
		const nums = fs.readFileSync('./numbers.txt', 'utf-8');
		return nums
			.split('\n')
			.map((num) => parseInt(num))
			.reduce((acc, curr) => acc + curr, 0);
	} catch (error) {
		console.error(error);
	}
};

console.log(sumtxt());

const rgbtohex = (rgb) => {
	// const toHex = (val) => {
	// 	if (val >= 10) {
	// 		return String.fromCharCode(val + 55)
	// 	} else {
	// 		return val
	// 	}
	// }
	const toHex = (val) => (val >= 10 ? String.fromCharCode(val + 55) : val);
	// let out = '#';
	// rgb.map((color) => {
	// 	out += toHex(Math.floor(color / 16));
	// 	out += toHex(color % 16);
	// });
	// return out;
	return rgb.reduce(
		(acc, color) => acc + toHex(Math.floor(color / 16)) + toHex(color % 16),
		'#',
	);
};

console.log(rgbtohex([13, 242, 144]));
// #FE16A6
