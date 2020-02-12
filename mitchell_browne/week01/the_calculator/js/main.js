// # The Calculator
//
// ## Part 1
// - Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
const squareNumber = function(number) {
  const squaredNumber = number * number; // number^2 // number ** 2
  console.log(`The result of squaring the number ${number} is ${squaredNumber}.`)
  return squaredNumber;
};

squareNumber(3);

// - Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
const halfNumber = function(number) {
  const dividedNumber = number / 2;
  console.log(`Half of ${number} is ${dividedNumber}.`);
  return dividedNumber;
};

halfNumber(5);
halfNumber(5.5);

// - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
const percentOf = function(numberOne, numberTwo) {
  const percentOfNumberOne = numberOne / numberTwo;
  console.log(`${numberOne} is ${percentOfNumberOne*100}% of ${numberTwo}`);
  return percentOfNumberOne;
};

percentOf(2, 4);

// - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// - Bonus: Round the result so there are only two digits after the decimal.
const areaOfCircle = function(radius) {
  const area = Math.PI * radius * radius; //PI * r^2 radius ** 2
  const areaRounded = Math.round(area * 100) / 100;
  console.log(`The area for a circle with radius ${radius} is ${areaRounded}.`);
  return areaRounded;
};

areaOfCircle(2);

//
// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// - Take half of the number and store the result.
// - Square the result of #1 and store that result.
// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3).

const magicBox = function(number) {
  const halfedNumber = halfNumber(number);
  const squaredNumber = squareNumber(halfedNumber);
  const areaNumber = areaOfCircle(squaredNumber);
  const percentAreaOfSquared = percentOf(areaNumber, squaredNumber);
  console.log("Number:", number);
  console.log(`Half of ${number}: ${halfedNumber}`);
  console.log(`Square of ${halfedNumber}: ${squaredNumber}`);
  console.log(`Area of circle with radius ${squaredNumber}: ${areaNumber}`);
  console.log(`Percentage that area ${areaNumber} is of ${squaredNumber}: ${percentAreaOfSquared*100}%`);
};

magicBox(2);
