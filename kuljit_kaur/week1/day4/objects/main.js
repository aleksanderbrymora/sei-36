// Geometry Function Lab
//
// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following
// functions which accept a rectangle object as an argument:
// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle
// const rectangleA = {
//   length: 4,
//   width: 4
// };

const rectShape = {
  length: 2,
  width: 4
};

const sqShape = {
  length: 2,
  width: 2
};

const isSquare = function(shape)
{
  if (shape.length == shape.width)
  return true;
  else
  return false;
}

const area = function(shape)
{
  return (shape.length * shape.width);
}

const perimeter = function(shape)
{
  return (2 * (shape.length + shape.width));
}
// Test for rectangle
console.log("Is it a square : " + isSquare(rectShape));
console.log("Area : " + area(rectShape));
console.log("perimeter : " + perimeter(rectShape));

// Test for Square
console.log("Is it a square : " + isSquare(sqShape));
console.log("Area : " + area(sqShape));
console.log("perimeter : " + perimeter(sqShape));


// Part 2, Triangle
// Given the following a triangle object like the one below, write the following
// functions which accept a triangle object as an argument:
// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not
// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };

const triShape = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const isEquilateral = function(shape1)
{
  if ((shape1.sideA === shape1.sideB) && (shape1.sideA === shape1.sideC))
  return true;
  else
    return false;
}

const isIsosceles = function(shape1)
{
  if ((shape1.sideA === shape1.sideB)||
      (shape1.sideA === shape1.sideC)||
      (shape1.sideB === shape1.sideC))
      return true;
  else
     return false;
}

const areaTriangle = function(shape1)
{
var s = (shape1.sideA + shape1.sideB + shape1.sideC)/2;
var areaTriangle =  Math.sqrt(s*((s-shape1.sideA)*(s-shape1.sideB)*(s-shape1.sideC))); //"Heron Formula"
return areaTriangle;
}

const isObtuse = function (shape1)
{
var maxsideSq, minsideSq;
if ((shape1.sideA > shape1.sideB) && (shape1.sideA > shape1.sideC))
{ maxsideSq = shape1.sideA * shape1.sideA;
  minsideSq = ((shape1.sideB * shape1.sideB) + (shape1.sideC * shape1.sideC));
}
else
{ if ((shape1.sideB > shape1.sideA) && (shape1.sideB > shape1.sideC))
  { maxsideSq = shape1.sideB * shape1.sideB;
    minsideSq = ((shape1.sideA * shape1.sideA) + (shape1.sideC * shape1.sideC));
  }
  else
  { maxsideSq = shape1.sideC * shape1.sideC;
    minsideSq = ((shape1.sideA * shape1.sideA) + (shape1.sideB * shape1.sideB));
  }
}
if (maxsideSq > minsideSq)
return true;
else
return false;
}

// Test for rectangle
console.log("isEquilateral " + isEquilateral(triShape));
console.log("isIsosceles: " + isIsosceles(triShape));
console.log("Area : " + areaTriangle(triShape));
console.log("isObtuse : " + isObtuse(triShape));

// The Cash Register
// Write a function called cashRegister that takes a shopping cart object.
// The object contains item names and prices (itemName: itemPrice).
// The function should return the total price of the shopping cart. Example
// // Input
// const cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };

const cart = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function(cart)
{
  let totalPrice = 0;
  for (const property in cart)
  {
    totalPrice = totalPrice + parseFloat(cart[property], 10);
  }
return totalPrice;
}

console.log(`Total Price for the shopping list is
            ${cashRegister(cart)}`);


// Credit Card Validation
// You're starting your own credit card business. You've come up with a new way
// to validate credit cards with a simple function called validateCreditCard that
// returns true or false.
// Here are the rules for a valid number:
// * Number must be 16 digits, all of them must be numbers
// * You must have at least two different digits represented (all of the digits
// cannot be the same)
// * The final digit must be even
// * The sum of all the digits must be greater than 16
// The following credit card numbers are valid:
// * 9999-9999-8888-0000
// * 6666-6666-6666-1666
// The following credit card numbers are invalid:
// * a923-3211-9c01-1112 invalid characters
// * 4444-4444-4444-4444 only one type of number
// * 1111-1111-1111-1110 sum less than 16
// * 6666-6666-6666-6661 odd final number

let card = {
  valid : true,
  cardString : "                   ",
  message : " "
};

const validateCreditCard = function(card){
  let carWithoutStr = card[cardString].split("-").join();
  // let cardnum;
  // cardnum = card.replace(/-/g, " ");
  // if (card.length != 16)
  // return false;
  // debugger;
  // if (typeof(card) != 'number')
  // return false;
  // cardStr = card.toString();


}

// console.log(validateCreditCard("true","9999-9999-8888-0000"," "));
