const maxOfTwoNumbers = function (num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

const maxOfThree = function (num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}

const checkChar = function (str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.includes(str)) {
    return true;
  }
}

const sumArray = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i ++) {
    sum = sum + array[i];
  }
  return sum;
}

const multiplyArray = function (array) {
  let multiple = 1;
  for (let i = 0; i < array.length; i ++) {
    multiple = multiple * array[i];
  }
  return multiple;
}
