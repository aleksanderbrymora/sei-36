const reverse = function(arr) {
	const output = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		output.push(arr[i]);
	}
	return output;
};

console.log(reverse([1, 2, 3, 4]));

const flatten = function(arr) {
	const output = [];
	arr.forEach(function(element) {
		if (Array.isArray(element)) {
			element.forEach(function(inside) {
				output.push(inside);
			});
		} else {
			output.push(element);
		}
	});
	return output;
};

console.log(
	flatten(['Hello', ['World', 42], 46, 'dsto', {}, [12, 15, 65, 45]]),
);

const flattenRecursive = function(arr, out = []) {
	arr.forEach(function(el) {
		if (Array.isArray(el)) {
			flattenRecursive(el, out);
		} else {
			out.push(el);
		}
	});
	return out;
};

console.log(
	flattenRecursive([
		'Hello',
		['World', 42],
		46,
		'dsto',
		{},
		[12, [15, [65]], 45],
	]),
);
