/**
 *
 *
 * @param {number} num1
 * @param {number} num2
 */
const maxOfTwoNumbers = function(num1, num2) {
  if (num1 > num2) {
    return console.log(`${num1} is the larger number.`);
  } else if (num2 > num1) {
    return console.log(`${num2} is the larger number.`);
  } else {
    return console.log(`The numbers are equal.`);
  }
};

const maxOfThree = function(num1, num2, num3) {
  if (num1 > num2) {
    if (num1 > num3) {
      return num1;
    } else {
      return num3;
    }
  } else if (num2 > num3) {
    return num2;
  } else {
    return num3;
  }
};

const isVowel = function(str) {
  if (str.match(/[aeiouAEIOU]/g) !== null) {
    return true;
  } else {
    return false;
  }
};

const sumArray = function(a) {
  let total = 0;
  for (let i = 0; i < a.length; i++) {
    total = a[i] + total;
  }
  return total;
};

const multiplyArray = function(a) {
  let total = 1;
  for (let i = 0; i < a.length; i++) {
    total = a[i] * total;
  }
  return total;
};

const reverseString = function(str) {
  return str;
};
