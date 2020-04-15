const revString = (str) => {
	let out = '';
	for (let i = str.length - 1; i >= 0; i--) {
		out += str[i];
	}
	return out;
};

console.log('\nreverse string:', revString('stuff'));

const odds = () => {
	let out = [];
	let num = 1;
	while (num <= 99) {
		out.push(num);
		num += 2;
	}
	return out.join(', ');
};

console.log('\nOdds:', odds());

const largest = (arr) => {
	// let heighest = -Infinity;
	// arr.forEach((num) => {
	// 	if (num > heighest) {
	// 		heighest = num;
	// 	}
	// });
	// return heighest;
	return arr.sort((a, b) => a - b)[arr.length - 1];
};

console.log(
	'\nLargest number:',
	largest([654, 636, 495, 213, 41654, 213, 2136]),
);

const fib = (left, curr = 1, prev = 1) => {
	if (left === 1 || left === 2) return curr;
	return fib(left - 1, curr + prev, curr);
};

console.log('\nFibonnacci:', fib(6));
