const pairwise = (arr, sum) => {
	const pairs = [];
	arr.forEach((element, index) => {
		const found = arr.indexOf(sum - element);
		if (found >= 0) {
			if (!pairs.includes(index) || !pairs.includes(found)) {
				pairs.push(index, found);
			}
		}
	});
	return pairs.reduce((acc, curr) => acc + curr);
};

console.log(pairwise([7, 9, 11, 13, 15], 20));
