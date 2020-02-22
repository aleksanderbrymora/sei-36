const arrSum = function(arr1, arr2) {
	let sum = 0;
	for (let i = 0; i < arr1.length; i++) {
		sum += arr1[i];
	}
	for (let i = 0; i < arr2.length; i++) {
		sum += arr2[i];
	}
	return sum;
};

console.log(arrSum([2, 6.4, 3], [3, 3.6, 2]));

const arrMultiSum = function() {
	let sum = 0;
	for (let i = 0; i < arguments.length; i++) {
		for (let j = 0; j < arguments[i].length; j++) {
			sum += arguments[i][j];
		}
	}
	return sum;
};

console.log(arrMultiSum([2, 6.4, 3], [3, 3.6, 2], [2, 6.4, 3], [3, 3.6, 2]));
