const happyNumbers = (amount, numbers = [], current = 1) => {
	const isHappy = (num, cycle = []) => {
		// const numToString = num.toString();
		// const splitToDigits = numToString.split('');
		// const parsedDigits = splitToDigits.map((d) => parseInt(d));
		// let potentiallyHappyNumber = 0;

		// for (let i = 0; i < parsedDigits.length; i++) {
		// 	potentiallyHappyNumber += parsedDigits[i] * parsedDigits[i];
		// }

		const potentiallyHappyNumber = num
			.toString()
			.split('')
			.map((d) => parseInt(d))
			.reduce((acc, num) => acc + num * num, 0);

		if (potentiallyHappyNumber === 1) return true;
		if (cycle.includes(potentiallyHappyNumber)) return false;
		return isHappy(potentiallyHappyNumber, [...cycle, potentiallyHappyNumber]);
	};

	if (numbers.length === amount) return numbers;

	// if (isHappy(current)) {
	// 	// numbers.push(current)
	// 	return happyNumbers(amount, [...numbers, current], current + 1);
	// } else {
	// 	return happyNumbers(amount, numbers, current + 1);
	// }

	return isHappy(current)
		? happyNumbers(amount, [...numbers, current], current + 1)
		: happyNumbers(amount, numbers, current + 1);
};

console.log(happyNumbers(1000));
