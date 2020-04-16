const number = {
	hasNonNumerals: function(num) {
		return /\D/.test(num);
	},

	elevenTest: function(num) {
		// if (num[0] === '1') {
		// 	return num.slice(1);
		// } else {
		// 	return false;
		// }
		return num[0] === '1' ? num.slice(1) : false;
	},

	formatToNumber: function(num) {
		// (123) 456-7890
		let out = '';
		out += `(${num.slice(0, 3)}) `;
		out += `${num.slice(3, 6)}-`;
		out += `${num.slice(6)}`;
		return out;
	},

	format: function(num) {
		let numString = num.toString();
		const invalid = '0000000000';
		if (this.hasNonNumerals(numString)) {
			return invalid;
		}
		if (numString.length === 11) {
			const afterTest = this.elevenTest(numString);
			if (afterTest === false) {
				return invalid;
			} else {
				numString = afterTest;
			}
		}
		if (numString.length !== 10) {
			return invalid;
		} else {
			return this.formatToNumber(numString);
		}
	},
};

console.log(number.format(321));
console.log(number.format('321s'));
console.log(number.format(11234567890));
