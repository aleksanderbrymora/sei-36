console.log("me work?");

// # The Calculator
//
// ## Part 1
// - Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// - Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// - Bonus: Round the result so there are only two digits after the decimal.

//Part 1.1
const squareNumber = function(numP1) { //numP1 = Number for Part 1
  const squaredResult = numP1 * numP1; // numP1^2
  console.log(`The result of squaring the number ${numP1} is ${squaredResult}.`);
  return squaredResult;
}
squareNumber(3);

//Part 1.2
const halfNumber = function(numP12) { //numP12 = Number for Part 1.2
  const numberHalved = numP12/2;
  console.log(`Half of ${numP12} is ${numberHalved}.`);
  return numberHalved;
}
halfNumber(8);

// Part 1.3
const percentOf = function(number1, number2) {
  const percentage = number1/number2 * 100;
  console.log(`${number1} is ${percentage}% of ${number2}.`);
  return percentage;
}
percentOf(3, 12);

// Part 1.4
const areaOfCircle = function(radius) {
  const area = Math.PI * radius ** 2;
  console.log(`The area for a circle with a radius of ${radius} is ${area.toFixed(2)}`);
  return area;
}
areaOfCircle(3);

//
// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// - Take half of the number and store the result.
// - Square the result of #1 and store that result.
// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3).

const percArea = function(numberP2) {
  const halfNum = numberP2/2;
  const squaredNum1 = halfNum ** 2;
  const circleArea = Math.PI * squaredNum1 ** 2;
  const percentageOfSquared = squaredNum1/circleArea * 100;
  console.log(`Number:${numberP2} Halved:${halfNum} Sqaured:${squaredNum1} Area of Circle:${circleArea.toFixed(2)} Percentage:${percentageOfSquared.toFixed(2)}% `);
}
percArea(8);
