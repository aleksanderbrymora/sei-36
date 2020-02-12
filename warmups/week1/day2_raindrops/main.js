const centuryFromYear = function(year) {
	let century;
	if (year % 100 === 0) {
		century = year / 100;
	} else {
		century = Math.floor(year / 100) + 1;
	}
	return century;
};

// rewrite it with Math.ceil
// get rid of if else
// return the calculation straight away

// const centuryFromYear = function(year) {
//     return Math.ceil(year/100)
// }

const centuryACBC = function(year) {
	if (year >= 0) {
		const century = Math.ceil(year / 100);
		return `AD ${century}`;
	} else {
		const century = Math.ceil((year * -1) / 100);
		return `${century} BC`;
	}
};

console.log(centuryFromYear(1705));
console.log(centuryFromYear(0));
console.log(centuryFromYear(86));
console.log(centuryFromYear(2000));
console.log(centuryFromYear(1900));
console.log(centuryFromYear(1601));

console.log(centuryACBC(1705));
console.log(centuryACBC(86));
console.log(centuryACBC(-1));
console.log(centuryACBC(-100));
console.log(centuryACBC(-5634));
