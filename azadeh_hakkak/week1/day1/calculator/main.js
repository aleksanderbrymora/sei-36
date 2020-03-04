// // The Calculator
// // Part 1
// // Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function(number) {
  let square = Math.pow(number, 2);
  console.log(`The result of squaring the number ${number} is ${square}.`);
  return square;
}
console.log(squareNumber(3));
////////////////////////////////////////////
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function (num1, num2) {
  let percent = (num1 * 100) / num2;
  console.log(`${num1} is ${percent}% of ${num2}.`);
  return percent;
}
console.log(percentOf(2, 4));
//////////////////////////////////////////////
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
const halfNumber = function (number) {
  let half = number / 2;
  console.log(`Half of ${number} is ${half}.`);
  return half;
}
console.log(halfNumber(5));
// // // Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// // // Bonus: Round the result so there are only two digits after the decimal.

const areaOfCircle = function (radius) {
  let area = (Math.pow(radius, 2) * Math.PI).toFixed(2);
  console.log(`The area for a circle with radius ${radius} is ${area}.`)
  return area;
}
console.log(areaOfCircle(2));



// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).
const calculator = function(number) {
const halfNum = halfNumber(number);
console.log(halfNum);
const squared = squareNumber(halfNum);
console.log(squared);
const areaOf = areaOfCircle(squared);
console.log(areaOf);
let result = percentOf(areaOf, squared);
console.log(result);

}
calculator(10);


//
// //////////////////////////////////////////////////////////////////
//
//
// // switch (prompt("What is the weather like?")) {
// //   case "rainy":
// //     console.log("Remember to bring an umbrella.");
// //     break;
// //     case "sunny":
// //       console.log("Dress lightly.");
// //       break;
// //     case "cloudy":
// //       console.log("Go outside.");
// //       break;
// //
// //     default:
// //       console.log("Unknown weather type!");
// //       break;
//
//
// /////////////////////////////////////////////
// //
// // for (let i = 1; i <= 100; i++) {
// //   if (i % 3 === 0 && i % 5 === 0) {
// //     console.log("FizzBuzz");
// //   }
// //   else if (i % 5 === 0) {
// //     console.log("Buzz");
// //   }
// //   else if (i % 3 === 0) {
// //     console.log("Fizz");
// //   }else {
// //     console.log(i);
// // }
// //
// // }
// ////////////////////////////////////////////
//
// const square = function (number) {
//   return number * number;
// }
// console.log(square(12));
// ///////////////////////////////////////////
// const halve = function (n) {
//   return n / 2;
// }
// console.log(halve(100));
// ////////////////////////////////////////
// function greet(who) {
//   console.log(`Hello ` + who);
// }
// greet("Billy");
// console.log("bye");
// //////////////////////////////////////////
//
// // we need to return a result as a number.
// // we need a function to loop through every character and if it is uppercase add to counter .
// // let counter = 0;
// // function countB (letters) {
// //
// //   for (let i = 0; i < letters.length; i++) {
// //     if (ispper(countB[i])) {
// //       counter = cunter + 1;
// //       return counter;
// //     }
// //   }
// // }
// // console.log(countB("AzaDeh"));
// ////////////////////////////////////////////
//
// // const sayMyName = function (name) {
// //   return (`Hello ` + name);
// // }
// // console.log(sayMyName("Azi"));
// ///////////////////////////////////////
//
//
//
// const sayMyName = function (firstName ,lastName) {
//   console.log(`Hello ${firstName} ${lastName}`);
// }
// sayMyName("Azadeh" ,"Hakkak");
// //////////////////////////////////////////////
// const addNumbers = function (num1, num2) {
//   let result = num1 + num2;
//   return result;
// }
// console.log(addNumbers(19, 20));
// /////////////////////////////////////////////
// // - Store the following into variables: number of children, partner's name, geographic location, job title.
// // - Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids.
//
// const numberOfChildren = 5;
// const partnerName = "Sam";
// const geLocation = "Paris";
// const jobTitle = "Artist";
// console.log(`You will be an ${jobTitle} in ${geLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`);
//
// //////////////////////////////////////////////
// // ## The Age Calculator
// //
// // Forgot how old someone is? Calculate it!
// //
// // - Store the current year in a variable.
// // - Store their birth year in a variable.
// // - Calculate their 2 possible ages based on the stored values.
// // - Output them to the screen like so: "They are either NN or NN", substituting the values.
// const currentYear = 2020;
// const yearBorn = 1983;
// const ageAfterBirthday = currentYear - yearBorn;
// const ageBeforeBirthday = ageAfterBirthday - 1;
// console.log(`They are either ${ageAfterBirthday} or ${ageBeforeBirthday}.`);
// //////////////////////////////////////////////////////////////
//
// // ## The Lifetime Supply Calculator
// //
// // Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// //
// // - Store your current age into a variable.
// // - Store a maximum age into a variable.
// // - Store an estimated amount per day (as a number).
// // - Calculate how many you would eat total for the rest of your life.
// // - Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
// const currentAge = 37;
// const maxAge = 80;
// const amountPerDay = 2;
// const amountPerYear = Math.round(amountPerDay * 365.25);
// const lifeTimeSupply = (maxAge - currentAge) * amountPerYear;
// console.log(`You will need ${lifeTimeSupply} to last you until the ripe old age of ${maxAge}.`);
//
// /////////////////////////////////////////////////
// // ## The Geometrizer
// //
// // Calculate properties of a circle, using [the definitions here](http://math2.org/math/geometry/circles.htm).
// //
// // - Store a radius into a variable.
// // - Calculate the circumference based on the radius, and output "The circumference is NN".
// // - Calculate the area based on the radius, and output "The area is NN"
// const radius = 5;
// const diameter = radius * 2;
// //area = PI r2
// const area = Math.round(Math.PI * square(radius));
// console.log(`The area is ${area}.`);
// //Circumference of Circle = PI x diameter = 2 PI x radius
// const circumference = Math.round((2 * Math.PI) * radius);
// console.log(`The circumference is ${circumference}.`);
// ////////////////////////////////////////////////////////
// // ## The Temperature Converter
// //
// // It's hot out! Let's make a converter based on [the steps here](http://www.mathsisfun.com/temperature-conversion.html).
// //
// // - Store a celsius temperature into a variable.
// // - Convert it to fahrenheit and output "NN°C is NN°F".
// // - Now store a fahrenheit temperature into a variable.
// // - Convert it to celsius and output "NN°F is NN°C."
//
// const celcius = 100;
// // °C to °F	Multiply by 9, then divide by 5, then add 32
// const convertToFarenheit = celcius * 1.8 + 32;
// console.log(`${celcius}°C is ${convertToFarenheit}°F.`);
// //°F to °C	Deduct 32, then multiply by 5, then divide by 9
// const farenheit = 500;
// const convertToCelcius = (farenheit - 32) / 1.8;
// console.log(`${farenheit}°F is ${convertToCelcius}°C.`);
////////////////////////////////////////////////////////
