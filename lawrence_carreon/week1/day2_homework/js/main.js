//Calculator Part 1
const squareNumber = function(num){
    const squareOfNum = Math.pow(num,2);
    console.log(`The result of squaring ${num} is ${squareOfNum}`);
    return squareOfNum;
};

const halfNumber = function(num){
    const halved = num/2;
    console.log(`Half of ${num} is ${halved}`);
    return halved;
};

const percentOf = function(num1,num2){
    const percentage = num1/num2 * 100;
    console.log(`${num1} is ${percentage}% of ${num2}`);
    return percentage;
};

const areaOfCircle = function(radius){
    const area = (Math.PI * Math.pow(radius, 2)).toFixed(2);
    console.log(`The area for a circle with a radius of ${radius} is ${area}`);
    return area;
};

squareNumber(3);
halfNumber(5);
percentOf(2,4);
areaOfCircle(2);

//Calculator Part 2
const mathMania = function(number){
    const halfNum = halfNumber(number);
    const squaredNum = squareNumber(halfNum);
    const areaOfSquared = areaOfCircle(squaredNum);
    percentOf(areaOfSquared,squaredNum);
};

mathMania(4);

//Strings

//Dr. Evil
const drEvil = function(number){
   return number === 1000000 ? `${number} dollars! (pinky)` : `${number} dollars`;
//    same as
    // if( number === 1000000 ){
    //     return `${number} dollars! (pinky)`;
    // }else{
    //     return `${number} dollars`;
    // };
};

console.log(drEvil(100));
console.log(drEvil(1000000));

//Mix Up
const mixUp = function(word1, word2){
    const word1part1 = word1.substr(0,2);
    const word2part1 = word2.substr(0,2);
    const newWord1 = word1.replace(word1part1,word2part1);
    const newWord2 = word2.replace(word2part1,word1part1);
    return `${newWord1} ${newWord2}`;
};

console.log(mixUp(`mix`, `pod`));
console.log(mixUp(`dog`, `dinner`));

//fixStart
const fixStart = function(string){
    const firstChar = string[0];
    let output = firstChar;
    for( let i = 1; i < string.length; i++ ){
        string[i] === firstChar ? output += "*" : output += string[i]; 
    };
    return output;
};

console.log(fixStart("babble"));
console.log(fixStart("google"));

//verbing
const verbing = function(word){
    return word.length < 3 ? word : ((word.endsWith("ing")) ? word += "ly" : word += "ing");
};

console.log(verbing("swim"));
console.log(verbing("swimming"));
console.log(verbing("go"));

//notBad
const notBad = function(phrase){
    const indexOfBad = phrase.toLowerCase().indexOf("bad");
    const indexOfNot = phrase.toLowerCase().indexOf("not");
    const output = indexOfNot < indexOfBad ? phrase.replace(/not.*bad/,"good") : phrase;
    return output;
    // one-liner 
    //return (phrase.toLowerCase().indexOf("not")) < (phrase.toLowerCase().indexOf("bad")) ? phrase.replace(/not.*bad/,"good") : phrase;
};

console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This dinner is bad!'));
