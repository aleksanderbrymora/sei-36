// # The Calculator
//
// ## Part 1
// - Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
console.log("Part 1:");
const squareNumber = function(number){
  const result = number * number;
  console.log(`The result of squaring the number ${ number } is ${ result }.`);
  return result;
};
squareNumber(7);
// - Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
const halfNumber = function (number){
  const result = number / 2;
  console.log(`Half of ${ number } is ${ result }.`);
  return result;
};
halfNumber(8);
// - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function(num1, num2){
  const result = num1 / num2;
  const percent = result * 100;
  // console.log (`${ num1 } is ${Math.ceil(percent)}% of ${Math.ceil(num2)}.`);
  console.log (`${ num1 } is ${percent.toFixed(2)}% of ${num2.toFixed(2)}.`);
};
percentOf(10,25);
// - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
const areaOfCircle = function(radius) {
    const areaNum = Math.PI * (radius * radius);
    // console.log(`The area for a circle with radius ${radius} is ${ Math.ceil(areaNum) }.`);
    console.log(`The area for a circle with radius ${radius} is ${ areaNum.toFixed(2) }.`);
    return areaNum;
  };
areaOfCircle(9);
// - Bonus: Round the result so there are only two digits after the decimal.
//


// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

// - Take half of the number and store the result.
// - Square the result of #1 and store that result.
// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3).
console.log("Part 2:");
const takeNum = function(number){
  const halfNum = halfNumber(number);
  const squareNum = squareNumber(halfNum);
  const areaNum = areaOfCircle(squareNum);
  const percentNum = percentOf(squareNum,areaNum)
};

takeNum(2);
