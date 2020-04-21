const collatz = (num, iterations = []) => {
	if (num === 1) return iterations;
	return num % 2 === 0
		? collatz(num / 2, [...iterations, num])
		: collatz(3 * num + 1, [...iterations, num]);
};

console.table(collatz(7));
