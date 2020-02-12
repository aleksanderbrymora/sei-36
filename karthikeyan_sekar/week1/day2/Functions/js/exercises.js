/*                                           The Calculator

Part 1
1.Write a function called squareNumber that will take one argument (a number), square that number, and return the result.
 It should also log a string like "The result of squaring the number 3 is 9."*/

const squareNumber = function (number)
{
const answer = `The result of squaring the number ${number} is ${number * number}`;
return answer;
};

const sq = squareNumber(3);
console.log(sq);
/*---------------------------------------------*/
/*2.Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result.
 It should also log a string like "Half of 5 is 2.5.".*/

 const halfNumber = function (half)
{
const ans = `Half of ${half} is ${half/2}`;
  return ans;
}

const halfNo = halfNumber(9);
console.log(halfNo);

/*---------------------------------------------*/
/*3.Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number,
and return the result. It should also log a string like "2 is 50% of 4."*/

const percentOf = function (num1,num2)
{
  const per = `${num1} is ${num2 * 100/num1}% of ${num2}`;
  return per;
}

const perc = percentOf(5,10);
console.log(perc);
/*---------------------------------------------*/
/*4.Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result.
It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."*/
//Bonus: Round the result so there are only two digits after the decimal.

function roundoff_2(num) {
    return Math.round(num * 100) / 100;
}

const areaOfCircle = function (radius)
{
  const area = `The area for a circle with radius ${radius} is ${roundoff_2(Math.PI * radius * radius)}`;
  return area;
}

const areaOfCir = areaOfCircle(2);
console.log(areaOfCir);
