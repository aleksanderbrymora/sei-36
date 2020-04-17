const primeFactors = (num) => {
	if (num <= 1) throw new Error('Number must be greater than one');
	const isPrime = (n) => {
		for (let i = 2; i < n; i++) {
			if (n % i === 0) return false;
		}
		return true;
	};

	// let primes = [];
	// for (let i = 2; i < num; i++) {
	// 	primes.push(i);
	// }
	// primes = primes.filter((n) => isPrime(n));

	const allNums = [...Array(num + 1).keys()].slice(2);
	const primes = allNums.filter((n) => isPrime(n));

	const out = [];
	while (num !== 1) {
		const factor = primes.find((n) => num % n === 0);
		out.push(factor);
		num /= factor;
	}
	return out;
};

console.log(primeFactors(60));

// const primeFactorsRec = (num, factors = [], divider = 2) => {
// 	if (num === 1) return factors;
// 	return num % divider !== 0
// 		? primeFactorsRec(num, factors, divider + 1)
// 		: primeFactorsRec(num / divider, [...factors, divider]);
// };

const primeFactorsRec = (num, factors = [], divider = 2) =>
	num === 1
		? factors
		: num % divider !== 0
		? primeFactorsRec(num, factors, divider + 1)
		: primeFactorsRec(num / divider, [...factors, divider]); // factors.push(divider)

console.log(primeFactorsRec(60));
