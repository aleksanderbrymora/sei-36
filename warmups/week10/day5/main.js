const happyNumbers = (amount, numbers = [], current = 1) => {
	const isHappy = (num, cycle = []) => {
		if (num <= 0) throw new Error('Number must be positive');
		const potentiallyHappy = num
			.toString()
			.split('')
			.reduce((acc, num) => acc + +num * +num, 0);
		if (potentiallyHappy === 1) return true;
		if (cycle.includes(potentiallyHappy)) return false;
		return isHappy(potentiallyHappy, [...cycle, potentiallyHappy]);
	};

	if (numbers.length === amount) return numbers;

	return isHappy(current)
		? happyNumbers(amount, [...numbers, current], current + 1)
		: happyNumbers(amount, numbers, current + 1);
};

console.log(happyNumbers(1000));
