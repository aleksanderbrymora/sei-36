// // Part 1
// // Write a function called squareNumber that will take one argument (a number),
// //square that number, and return the result. It should also log a string like
// "The result of squaring the number 3 is 9."
// // Write a function called halfNumber that will take one argument (a number),
// divide it by 2, and return the result. It should also log a string like "Half of
//  5 is 2.5.".
// // Write a function called percentOf that will take two numbers, figure out what
// percent the first number represents of the second number, and return the result.
//  It should also log a string like "2 is 50% of 4."
// // Write a function called areaOfCircle that will take one argument (the radius)
// , calculate the area based on that, and return the result. It should also log a
// string like "The area for a circle with radius 2 is 12.566370614359172."
// // Bonus: Round the result so there are only two digits after the decimal.


//SQUARENUMBER()
console.log ("To square a number call function: squareNumber(number)");
const squareNumber = function(num)
{
  let square = num * num ;
  square = square.toFixed(2);
  return square;
  console.log( `The result of squaring the number ${num} is ${square} ` );
}

// //HALFNUMBER()
console.log ("To half a number call function: halfNumber(number)");
const halfNumber = function(num)
{
  let half = num / 2;
  return half;
  console.log(`Half of ${num} is ${half} ` );
}

//PERCENTOF()
console.log ("To find percent of 2 number call function: percentOf(number)");
const percentOf = function(num1, num2)
{
  let per = ((num1/num2)*100);
  per = per.toFixed(2);
  return per;
  console.log(`${num1} is ${per}% of ${num2}`);
}

//AREAOFCIRCLE
console.log ("To find Area of circle call function: areaOfCircle(radius)");
const areaOfCircle = function (radius)
{
  let area = Math.PI * radius * radius;
  area = area.toFixed(2);
  return area;
  console.log(`The area for a circle with radius ${radius} is ${area}`);
}

// Part 2
// Write a function that will take one argument (a number) and perform the
//following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

console.log(" Call function operation(number) :");
const operation = function (num) {
  var result = halfNumber(num),
      squareresult = squareNumber(result),
      area = areaOfCircle(squareresult);
  console.log(`Area :${area} is ${percentOf(area,squareresult)}% of ${squareresult}`);
}
