// # The Calculator
//
// ## Part 1
// - Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
const squareNumber = function(number){
  let squared = (number ** 2)
  console.log(`The result of squaring the number ${number} is ${squared}.`);
  return squared
}
squareNumber(6);


// - Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function(number){
  const halvedNumber = number/2
  console.log(`Half of ${number} is ${halvedNumber}.`);
  return halvedNumber
}
halfNumber(10);
// - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
const percentOf = function(num1, num2){
  const percent = (num1/num2)*100
  console.log(`${num1} is ${percent}% of ${num2}`);
  return percent
}
percentOf(10,100);
percentOf(50,4);

// - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// - Bonus: Round the result so there are only two digits after the decimal.
const areaOfCircle = function(radius){
  const area = Math.floor((Math.PI * (radius ** 2))*100)/100
  console.log(`the area of the circle with radius ${radius} is ${area}.`);
  return area
}
areaOfCircle(5);
// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// - Take half of the number and store the result.
const part2 = function(num){
  let sliced = halfNumber(num);
  let doubled = squareNumber(sliced);
  let cirAr = areaOfCircle(doubled);
  let compare = percentOf(cirAr,doubled);
};

part2(4); // ASK WHY UNDEFINED IS COMING?????
// - Square the result of #1 and store that result.

// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3).
