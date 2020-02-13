console.log("Hey Josh");

// Geometry Function Lab
// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions which accept a rectangle object as an argument:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

const rectangleA = {
  length: 4,
  width: 4
};

const rectangleB = {
  length: 12,
  width: 6
};

const isSquare = function(a) {
	let result;
	if (a.length === a.width) {
		result = `A rectangle with a width of ${ a.length } and a ${ a.width } is really a square`;
	} else {
	  result = `This is not a square`;
	}
	return result;
};
console.log(isSquare(rectangleA));
console.log(isSquare(rectangleB));

// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const isEquilateral = function (a) {
    let triangletype;
		if (a.sideA === a.sideB && a.sideC === a.sideB ) {
		   triangletype = `This triangle is an equilateral triangle`
		} else {
			 triangletype = `This triangle is not Equilateral triangle`
		}
		return triangletype;
};
console.log(isEquilateral(triangleA));

// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

// Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function(a) {
	let totalPrice;
	let priceOfCart = 0.00;
	totalPrice = Object.values(a);
	// return totalPrice;
	// How do I sum the total of an array
	// parseFloat(text)
	totalPrice.forEach(function(num){
		 priceOfCart += parseFloat(num)
	});
	return `${ priceOfCart }`;
}

// Output
console.log(cashRegister(cartForParty));


// Credit Card Validation
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:
//
// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:
//
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number
// Example
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// Hint: Remove the dashed from the input string before checking if the input credit card number is valid.
//
// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.

// const customerCards = {
// 	card1: 'a923-3211-9c01-1112', // invalid characters
// 	card2: 4444-4444-4444-4444, // only one type of number
// 	card3: 1111-1111-1111-1110, //sum less than 16
// 	card4: 6666-6666-6666-6661, // odd final number
// 	card5: 9999-9999-8888-0000, // valid card
// 	card6: 6666-6666-6666-1666 // valid card
// }



const validateCreditCard = function(number) {
   let status;
	 if (number.length < 16) {
		 status = `Credit card number is invalid, please try again`;
	 } else if (isNaN(number)) {
		 status = `Credit card number is invalid, please try again`;
	 } else {
		 status = `Thank you this card is valid`;
	 }
	 return status;
};
console.log(validateCreditCard('6666-6666-6666-1666'));
