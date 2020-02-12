// ///Calculator Part 1
// const squareNumber = function(num){
//     const squareOfNum = Math.pow(num,2);
//     console.log(`The result of squaring ${num} is ${squareOfNum}`);
//     return squareOfNum;
// };
//
// const halfNumber = function(num){
//     const halved = num/2;
//     console.log(`Half of ${num} is ${halved}`);
//     return halved;
// };
//
// const percentOf = function(num1,num2){
//     const percentage = num1/num2 * 100;
//     console.log(`${num1} is ${percentage}% of ${num2}`);
//     return percentage;
// };
//
// const areaOfCircle = function(radius){
//     const area = (Math.PI * Math.pow(radius, 2)).toFixed(2);
//     console.log(`The area for a circle with a radius of ${radius} is ${area}`);
//     return area;
// };
//
// squareNumber(3);
// halfNumber(5);
// percentOf(2,4);
// areaOfCircle(2);
//
// //Calculator Part 2
// const mathMania = function(number){
//     const halfNum = halfNumber(number);
//     const squaredNum = squareNumber(halfNum);
//     const areaOfSquared = areaOfCircle(squaredNum);
//     percentOf(areaOfSquared,squaredNum);
// };
//
// mathMania(4);
