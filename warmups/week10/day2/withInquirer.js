const inquirer = require('inquirer');

// Reverse a string
const revStr = (str) => {
	// str.split('').reverse().join('');
	let out = '';
	for (let i = str.length - 1; i >= 0; i--) {
		out += str[i];
	}
	return out;
};

// console.log('Reverse a string:', revStr('stuff'));

// Print odd numvers from 1 to 99
const odds = () => {
	const out = [];
	let i = 1;
	while (i <= 99) {
		out.push(i);
		i += 2;
	}
	return out.join(', ');
};

// console.log('\nOdds:', odds());

// Largest in array

const largest = (arr) => arr.sort()[arr.length - 1];

// console.log('\nlargest in array:', largest([1, 2, 3, 89, 2, 6, 6, 4]));

const fib = (left, now = 1, last = 1) => {
	if (left === 1 || left === 2) return now;
	return fib(left - 1, now + last, now);
};

// console.log('\nfibonacci:', fib(6));

inquirer
	.prompt([
		{
			name: 'yegge',
			type: 'list',
			message: 'Pick one',
			choices: [
				'Reverse a string',
				'Print all the odds up to 99',
				'Find the largest number in an array',
				'Find nth Fibonnacci number',
				'All of them',
			],
		},
	])
	.then(async (answer) => {
		let res;
		switch (answer.yegge) {
			case 'Reverse a string':
				res = await inquirer.prompt([
					{
						name: 'string',
						type: 'input',
						message: 'What string do you want to reverse',
					},
				]);
				console.log('Reverse a string:', revStr(res.string));
				break;

			case 'Print all the odds up to 99':
				console.log('\nOdds:', odds());
				break;

			case 'Find the largest number in an array':
				res = await inquirer.prompt([
					{
						name: 'numbers',
						type: 'input',
						message: 'Type in numbers separated by a space',
					},
				]);

				console.log('\nlargest in array:', largest(res.numbers.split(' ')));
				break;

			case 'Find nth Fibonnacci number':
				res = await inquirer.prompt([
					{
						name: 'number',
						type: 'number',
						message: 'What number would you like to check',
					},
				]);
				console.log('\nfibonacci:', fib(res.number));
				break;

			case 'All of them':
				console.log('Reverse a string:', revStr('stuff'));
				console.log('\nOdds:', odds());
				console.log('\nlargest in array:', largest([1, 2, 3, 89, 2, 6, 6, 4]));
				console.log('\nfibonacci:', fib(6));
				break;

			default:
				break;
		}
	});
