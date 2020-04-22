const dashatize = (num) => {
	if (Number.isNaN(num)) return num;

	// num = num.toString()

	// if (num[0] === '-') num.slice(1)

	num = Math.abs(num).toString();

	let out = num[0];

	for (let i = 1; i < num.length; i++) {
		if (parseInt(num[i]) % 2 !== 0) {
			out += `-${num[i]}-`;
		} else {
			out += num[i];
		}
	}

	out = out.replace(/--/g, '-');
	if (out[out.length - 1] === '-') {
		out = out.slice(0, -1);
	}

	return out;
};

// FRANK's ANSWER

const dashatize = function (num) {
	if (Number.isNaN(num)) return num;
	numArray = Math.abs(num).toString();
	let newStr = '';
	for (let i = 0; i < numArray.length - 1; i++) {
		newStr += numArray[i];
		if (parseInt(numArray[i]) % 2 || parseInt(numArray[i + 1]) % 2) {
			newStr = newStr + '-';
		}
	}
	return (newStr += numArray[numArray.length - 1]);
};

console.log(dashatize(274));
console.log(dashatize(5311));
console.log(dashatize(86320));
console.log(dashatize(974302));
console.log(dashatize(NaN));
console.log(dashatize(0));
console.log(dashatize(-1));
console.log(dashatize(-28369));
