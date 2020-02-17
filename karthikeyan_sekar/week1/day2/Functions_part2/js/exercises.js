/*                                           The Calculator

Part 2
Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3).*/

const squareNumber = function (number)
{
  let final = number * number;
console.log(`The result of squaring the number ${number} is ${final}`);
return final;
};


 const halfNumber = function (half)
{
  let final = half/2;
console.log(`Half of ${half} is ${final}`);
  return final;
}


const percentOf = function (num1,num2)
{
  let final = (num2 * 100/num1);
  console.log(`The number ${num1} is ${final} % of ${num2}`);
  return final;
}


function roundoff_2(num) {
    return Math.round(num * 100) / 100;
}

const areaOfCircle = function (radius)
{
  let final = roundoff_2(Math.PI * radius * radius);
  console.log(`The area for a circle with radius ${radius} is ${final}`);
  return final;
}


const combinedFunc = function (numb)
{
  halfNumberResult = halfNumber(numb);
  squareNumberResult = squareNumber(halfNumberResult);
  areaOfCircleResult = areaOfCircle(squareNumberResult);
  percentOfResult = percentOf(areaOfCircleResult,squareNumberResult);
}
console.log('Here is the result of the combined function problem');
combinedFunc(9);
