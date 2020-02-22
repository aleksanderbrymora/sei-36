const isLeapYear = function(year) {
	if (year % 400 === 0) return true;
	if (year % 100 === 0) return false;
	if (year % 4 === 0) return true;
	return false;
};

console.log(isLeapYear(1997));
console.log(isLeapYear(1996));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));

const button = document.querySelector('button');
const input = document.querySelector('input');

button.addEventListener('click', function() {
	const year = parseInt(input.value);
	console.log(year);
	document.querySelector('p').innerText = isLeapYear(year);
});
