//The Calcultor 
// Part 1

//(1)
const squareNumber = function (number1) {
    const result1 = `The result of squaring the number ${number1} is ${number1*number1}.`;
    return result1;
}
console.log (squareNumber(3))

//(2)
const halfNumber = function (number2) {
    const result2 = `Half of ${number2} is ${number2/2}.`;
    return result2;
}
console.log (halfNumber(5));

//(3)
const percentOf = function (num1, num2) {
    const result = `${num1} is ${num1 / num2 *100}% of ${num2}.`;
    return result;
}
console.log (percentOf(5, 20)); //5 is 25% of 20.

//(4)
const areaOfCircle = function (radius) {
    const area = `The area for a circle with radius ${radius} is ${Math.PI * Math.pow(radius,2)}.`; 
    // can use radius ** 2 for to the power of.
    // try to use toFixed to round to 2 d.p.
    return area;
}
console.log (areaOfCircle(2));
//Math.pow(radius, 2) * pI; // PT * r^2

//Part 2

const part2 = function (num) {
    const result1 = `${num/2}`; // ask Aleks
    const result2 = `${result1 * result1}`;
    const areaOfCircle2 = `${Math.PI * Math.pow(result2,2)}`;
    const percentOfArea = `${result2 / areaOfCircle2 *100}`; //Calculate what percentage that area is of the squared result (#3).
    return percentOfArea;
}
console.log (`The percentage that area is ${Math.round(part2(4))}% of the squared result (#3).`);

//The Strings 
// DrEvil

const drEvil = function (amt) {
    if (amt == 1000000) {
        return result = `You have ${amt} dollars (pinky).`;
    } else {
        return result = `You have ${amt} dollars.`;
    }
}
console.log (drEvil(1000000));  // can use conditional 

