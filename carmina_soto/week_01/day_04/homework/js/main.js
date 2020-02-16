// # Geometry Function Lab
//
// ### Part 1, Rectangle
//
// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:
//
// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle
//
// ```javascript
// const rectangleA = {
//   length: 4,
//   width: 4
// };
// ```
//
const rectangleA = { length: 4, width: 4 };
const rectangleB = { length: 5, width: 2 };
const rectangleC = { length: 3, width: 9 };

const isSquare = function(shape){
  if(shape.length === shape.width) {
    return true;
  } else {
    return false;
  }
}

const area = function(shape){
  const checkSquare = isSquare(shape);
  if (!checkSquare){
    const result = shape.length * shape.width;
    return `The area of the rectangle is ${result}.`;
  } else {
    return `This shape is a square.`;
  }
}

const perimeter = function(shape){
  const checkSquare = isSquare(shape);
  if(!checkSquare){
    const result = 2 * ( (shape.length) + (shape.width) );
    return `The perimeter of the rectangle is ${result}.`;
  } else {
    return 'This shape is a square';
  }
}

console.log(area(rectangleA));
console.log(area(rectangleB));
console.log(area(rectangleC));
console.log(perimeter(rectangleA));
console.log(perimeter(rectangleB));
console.log(perimeter(rectangleC));
// ### Part 2, Triangle
//
// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:
//
// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not
//
// ```javascript
// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
// ```
const triangleA = { sideA: 3, sideB: 4, sideC: 4};
const triangleB = { sideA: 4, sideB: 4, sideC: 4};
const triangleC = { sideA: 3, sideB: 2, sideC: 4};

const isEquilateral = function(shape){
  if (shape.sideA === shape.sideB && shape.sideA === shape.sideC && shape.sideB === shape.sideC){
    return true;
  } else {
    return false;
  }
}

const isIsosceles = function(shape){
  const checkEquilateral = isEquilateral(shape);
  if (checkEquilateral){
    return `Equilateral`
  } else if (shape.sideA === shape.sideB || shape.sideA === shape.sideC || shape.sideB === shape.sideC){
    return `Isosceles`;
  }
}

const isObtuse = function(shape){
  const message = `This triangle is`
  const checkIsosceles = isIsosceles(shape);
  if (checkIsosceles !== "Equilateral" && checkIsosceles !== "Isosceles"){
      if (shape.sideA !== shape.sideB && shape.sideA !== shape.sideC && shape.sideB !== shape.sideC){
      return `${message} Obtuse.`;
      } else {
      return `${message} Unknown.`;
    }
  } else {
    return `${message} ${checkIsosceles}.`;
  }
}

const areaTriangle = function(shape){
  let semiPerimeter = ( shape.sideA + shape.sideB + shape.sideC ) / 2;
  const result = Math.sqrt(semiPerimeter * (semiPerimeter - shape.sideA) * (semiPerimeter - shape.sideB) * (semiPerimeter - shape.sideC));
  return `The area of the triangle is ${result.toFixed(2)}.`;
}

console.log(isObtuse(triangleA));
console.log(isObtuse(triangleB));
console.log(isObtuse(triangleC));
console.log(areaTriangle(triangleA));
console.log(areaTriangle(triangleB));
console.log(areaTriangle(triangleC));
// # The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example
//
// ```
// // Input
// const cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
//
// // Output
// cashRegister(cartForParty)); // 60.55
const grocery = {
  banana: 1.25,
  handkerchief: 0.99,
  tshirt: 25.01,
  apple: 0.60,
  nalgene: 10.34,
  proteinShake: 22.36
}

const cashRegister = function(shoppingCart){
  const amount = Object.values(shoppingCart).reduce((a,b) => a + b, 0);
  return `The total amount is ${amount}`;

}

console.log(cashRegister(grocery));
// # Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// - Number must be 16 digits, all of them must be numbers
// - You must have at least two different digits represented (all of the digits cannot be the same)
// - The final digit must be even
// - The sum of all the digits must be greater than 16
//
// The following credit card numbers are valid:
//
// - `9999-9999-8888-0000`
// - `6666-6666-6666-1666`
//
// The following credit card numbers are invalid:
//
// - `a923-3211-9c01-1112` invalid characters
// - `4444-4444-4444-4444` only one type of number
// - `1111-1111-1111-1110` sum less than 16
// - `6666-6666-6666-6661` odd final number
//
// ## Example
// ```
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// ```
//
// *Hint*: Remove the dashed from the input string before checking if the input credit card number is valid.
//
const validateCreditCard = function(creditCardNum){
  const regex = /-/g;
  const strCreditCard = creditCardNum.replace(regex,'');
  const splitCreditCard = strCreditCard.split('');
  let parsed;
  let result = 0;
  let checkDigits = [];
  let getLastDigit;
  let passed = false;

  for (let i = 0; i < splitCreditCard.length; i++){
    parsed = parseInt(splitCreditCard[i], 10);
    if (!isNaN(parsed)) { //check if digit is a number or not
        result = result + parsed; //total the digits
        if(!checkDigits.includes(parsed))
        {
          checkDigits.push(parsed);
        }
      } else {
        return `${creditCardNum} is invalid: Invalid characters.`
      }
    }

   if (splitCreditCard.length === 16){ //check if length is 16
     getLastDigit = splitCreditCard.length - 1.
     if (splitCreditCard[getLastDigit] % 2 === 0){ //check if last digit is even
       passed = true;
     } else {
       return `${creditCardNum} is invalid: Last digit is not even.`
     }
   } else {
     return `${creditCardNum} is invalid: Length is not equal to 16.`
   }

   if (result > 16){ //check if the sum of the digits is more than 16
     passed = true;
   }
   else{
     return `${creditCardNum} is invalid: Sum of digits less than 16.`
   }

   if (checkDigits.length > 1){ // check if there's one more type of number
     passed = true;
   } else {
     return `${creditCardNum} is invalid: Only one type of number.`
   }

   return(`${creditCardNum} is valid.`);
  }


console.log(validateCreditCard(`9999-9999-8888-0000`));
console.log(validateCreditCard(`6666-6666-6666-1666`));
console.log(validateCreditCard(`a923-3211-9c01-1112`));
console.log(validateCreditCard(`4444-4444-4444-4444`));
console.log(validateCreditCard(`1111-1111-1111-1110`));
console.log(validateCreditCard(`6666-6666-6666-6661`));
