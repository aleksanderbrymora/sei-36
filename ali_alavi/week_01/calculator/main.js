/**
 * A function that will take one argument (a number), square that number,
 * and return the result in a string.
 * @param  {Number} n The number to be squared.
 * @return {String}
 */
const squareNumber = function(n) {
  const result = n * n;
  return console.log(`The result of squaring the number ${n} is ${result}.`);
};

/**
 * A function  that will take one argument (a number), divide it by 2, and return
 * a string with the result.
 * @param  {Number} n  Number to be halved.
 * @return {string}
 */

const halfNumber = function(n) {
  const half = n / 2;
  return `Half of ${n} is ${half.toFixed(2)}.`;
};

/**
 * A function called percentOf that will take two numbers, figure out what percent
 *  the first number represents of the second number, and return a string.
 * @param  {Number} a
 * @param  {Number} b
 * @return {String}
 */

const percentOf = function(a, b) {
  const percentage = (a / b).toLocaleString(false, {
    style: "percent",
    minimumFractionDigits: 2
  });
  return `${a} is ${percentage} of ${b}.`;
};

/**
 * A function that will take one argument (the radius), calculate
 * the area based on that, and return the result as a string.
 * @param  {Number} r Radius
 * @return {String}
 */

const areaOfCircle = function(r) {
  const area = Math.PI * (r * r);
  return `The area for a circle with radius ${r} is ${area.toFixed(2)}.`;
};

/**
 * A function that will take one argument (a number) and perform the following operations.
 * @param  {Number} n
 * @return {String}
 */

const mathOperations = function(n) {
  const half = (n / 2).toFixed(2);
  const square = half * half;
  const area = Math.PI * (square * square);
  const percOfArea = percentOf(square, area.toFixed(2));
  return percOfArea;
};
