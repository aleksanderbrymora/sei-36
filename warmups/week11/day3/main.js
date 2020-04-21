const wordyCalc = (calcQuestion) => {
	// Grabbing a passed string of instructions from the arguments
	const question = calcQuestion || process.argv[2];

	// Parsing only interesting part which is number operator number
	const relevantPart = question.match(/-?\d+\D+-?\d+/)[0];

	// Splitting those into an array of separate things
	const calc = relevantPart.split(/ \D+ /);

	// console.log(calc);

	switch (relevantPart.match(/ \D+? ?\D+ /)[0].trim()) {
		case 'plus':
			console.log(
				relevantPart + ' is ' + (parseInt(calc[0]) + parseInt(calc[1])),
			);
			break;

		case 'minus':
			console.log(
				relevantPart + ' is ' + (parseInt(calc[0]) - parseInt(calc[1])),
			);
			break;

		case 'divided by':
			console.log(
				relevantPart + ' is ' + parseInt(calc[0]) / parseInt(calc[1]),
			);
			break;

		case 'multiplied by':
			console.log(
				relevantPart + ' is ' + parseInt(calc[0]) * parseInt(calc[1]),
			);
			break;

		default:
			console.log("Sorry didn't really get that");
			break;
	}
};

wordyCalc();
wordyCalc('What is 5 plus 13 ?');
wordyCalc('What is 7 minus 5 ?');
wordyCalc('What is -6 multiplied by 4 ?');
wordyCalc('What is 25 divided by -5 ?');
