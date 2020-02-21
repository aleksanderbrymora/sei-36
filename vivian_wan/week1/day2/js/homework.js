//The Calcultor 
// Part 1

//(1) Write a function called squareNumber that will take one argument (a number), square that number,
// and return the result. It should also log a string like "The result of squaring the number 3 is 9." 

const squareNumber = function (number1) {
    const result1 = `The result of squaring the number ${number1} is ${number1*number1}.`;
    return result1;
}
console.log (squareNumber(3))

//(2) Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result.
// It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function (number2) {
    const result2 = `Half of ${number2} is ${number2/2}.`;
    return result2;
}
console.log (halfNumber(5));

//(3)Write a function called percentOf that will take two numbers, 
// figure out what percent the first number represents of the second number, and return the result.
// It should also log a string like "2 is 50% of 4."

const percentOf = function (num1, num2) {
    const result = `${num1} is ${num1 / num2 *100}% of ${num2}.`;
    return result;
}
console.log (percentOf(5, 20)); //5 is 25% of 20.

//(4) Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, 
// and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

const areaOfCircle = function (radius) {
    const area = `The area for a circle with radius ${radius} is ${Math.PI * Math.pow(radius,2)}.`; 
    // can use radius ** 2 for to the power of.
    // try to use toFixed to round to 2 d.p.
    return area;
}
console.log (areaOfCircle(2));
//Math.pow(radius, 2) * pI; // PT * r^2

//Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).



const part2 = function (num) {
    const result1 = `${num/2}`; 
    const result2 = `${result1 * result1}`;
    const areaOfCircle2 = `${Math.PI * Math.pow(result2,2)}`;
    const percentOfArea = `${result2 / areaOfCircle2 *100}`; //Calculate what percentage that area is of the squared result (#3).
    return percentOfArea;
}
console.log (`The percentage that area is ${Math.round(part2(4))}% of the squared result (#3).`);

//The Strings 
// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', 
// except it will add '(pinky)' at the end if the amount is 1 million. For example:
// DrEvil(10): 10 dollars
// DrEvil(1000000): 1000000 dollars (pinky)

const drEvil2 = function (dollar) {
   if (dollar === 1000000) {
    return result = `DrEvil2 (${dollar}): ${dollar} dollars (pinky).`
   } else {
        return result = `DrEvil2 (${dollar}): ${dollar} dollars.`
    }
}
console.log(drEvil2(10))
console.log(drEvil2(1000000))

//MIXUP
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a
// space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long.
// For example:
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!


const mixUp = function (str1, str2) {
    result = str2.slice (0, 2) + str1.slice (2) + " " + str1.slice(0, 2) + str2.slice(2)
    return result
}
console.log(mixUp("mix", "pod"))  
console.log(mixUp("dog", "dinner"))

//FixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its
// first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one
// character long. 
// For example:
// fixStart('babble'): 'ba**le'

// let newArray = [];
// const fixStart = function (str4) {
// let newArray = str4[0]
//     for (let i = 1; i < str4.length; ++i) {
//         if (str4[i] !== str4) {
//             return 
//         }
//     }
// }
// console.log (fixStart("babble"))



//Verbing

//Create a function called verbing. It should take a single argument, a string. 
//If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead.
//If the string length is less than 3, it should leave it unchanged.
// For example:
// verbing('swim'): 'swimming'
// verbing('swimming'): 'swimmingly'
// verbing('go'): 'go'

//if length => 3, and does not end in "ing" then add "ing" to the end
//if length => 3, and does end in "ing" then add "ly" to the end
//if length < 3, then do nothing

const verbing = function (str5) {
    if (str5.length >= 3 && str5.substring(str5.length -3) === "ing") {
        return str5 + "ly"
    } else if (str5.length >= 3 && str5.substring(str5.length -3) !== "ing") {
        return str5 + "ing"
    } else {
        return str5
    }
}
console.log(verbing("swimm"))
console.log(verbing("swimming"))
console.log(verbing("go"))


// https://tc39.github.io/ecma262/#sec-array.prototype.includes
if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
      value: function(searchElement, fromIndex) {
  
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }
  
        // 1. Let O be ? ToObject(this value).
        var o = Object(this);
  
        // 2. Let len be ? ToLength(? Get(O, "length")).
        var len = o.length >>> 0;
  
        // 3. If len is 0, return false.
        if (len === 0) {
          return false;
        }
  
        // 4. Let n be ? ToInteger(fromIndex).
        //    (If fromIndex is undefined, this step produces the value 0.)
        var n = fromIndex | 0;
  
        // 5. If n ≥ 0, then
        //  a. Let k be n.
        // 6. Else n < 0,
        //  a. Let k be len + n.
        //  b. If k < 0, let k be 0.
        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
  
        function sameValueZero(x, y) {
          return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
        }
  
        // 7. Repeat, while k < len
        while (k < len) {
          // a. Let elementK be the result of ? Get(O, ! ToString(k)).
          // b. If SameValueZero(searchElement, elementK) is true, return true.
          if (sameValueZero(o[k], searchElement)) {
            return true;
          }
          // c. Increase k by 1. 
          k++;
        }
  
        // 8. Return false
        return false;
      }
    });
  }