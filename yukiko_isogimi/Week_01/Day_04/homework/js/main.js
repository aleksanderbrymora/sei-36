// // // # Geometry Function Lab

// ### Part 1, rectangle
// * isSquare - Returns whether the rectangle is a square or not
const rectangleA = {
  length: 4,
  width: 6
};

const isSquare = function(shape){
  if (shape.length === shape.width) {
      return 'Its square';
  } else {
    return 'Its not square';
  }

};

console.log( isSquare(rectangleA));

// * area - Returns the area of the rectangle
const area = function(result){
  let x = result.length * result.width
  return x
}

console.log( `The area is ${area(rectangleA)}`);



// // * perimeter - Returns the perimeter of the rectangle
const perimeter = function(result){
  let y = result.length * 2 + result.width * 2
  return y
}

console.log( `The perimeter is ${perimeter(rectangleA)}`);


// // ### Part 2, Triangle

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

// * isEquilateral - Returns whether the triangle is equilateral or not
const isEquilateral = function(result){
  if (result.sideA === result.sideB === result.sideC) {
      return 'Its equilateral';
  } else {
    return 'Its not equilateral';
  }

};

console.log( isEquilateral(triangleA));

// * isIsosceles - Returns whether the triangle is isosceles or not

const isObtuse = function(result){
  if (result.sideB === result.sideC) {
      return `It's isosceles `;
  } else {
      return `It's not isosceles`;
  }

};

console.log( isObtuse(triangleA));


// * area - Returns the area of the Triangle
const areaofTriangle = function(result){
  let x = (result.sideA * result.sideB) / 2
  return x
}

console.log( `The area is ${areaofTriangle(triangleA)}`);

// // # The Cash Register
//version 1
// const shopping = [
//   {name:"banana" , price:1.25},
//   {name:"handkerchief" , price:.99},
//   {name:"Tshirt" , price:25.01},
//   {name:"apple" , price:0.60},
//   {name:"nalgene" , price:10.34},
//   {name:"proteinShake" , price:22.36}
// ];
// const cashRegister = function(total){
//   let result = 0
//   for(let i = 0; i < shopping.length; i++) {
//     result = result + total[i].price
//   }
//   return result;
// }
//
// console.log( `The total is ${cashRegister( shopping)}`);

//version 2
const shopping = {
  banana:1.25,
  handkerchief:.99,
  Tshirt:25.01,
  apple:0.60,
  nalgene :10.34,
  proteinShake:22.36
};

const cashRegister = function(total){
  let result = 0;
  for(const price in total){
    result = result + total[price] ;

  }
return result;
}

console.log( `The total is ${cashRegister( shopping)}`);


// // # Credit Card Validation

//Check if number is 16 digits
const validateCreditCard = function(numberOfCreditcard){
  let a = numberOfCreditcard.split('-').join('');
  const good16Number = a.length === 16;
  if( !good16Number){
    return false;
  };

//Check if number is all numbers
if (a !== Number(a).toString()) {
    return false;
  }


//Check if numbers have at least two different digits
  let digitsAreSame = true;
  for(let i = 0; i < a.length; i++) {
    if(a[0] !== a[i]){
      digitsAreSame = false;
      break;
    }
  }
  if (digitsAreSame) {
    return false;
  }

// check if final number is even
  const finalDigitEven = a[15] % 2 === 0
  if( !finalDigitEven) {
    return false;
  }

//check if sum of numbers is greater than 16
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum = sum + parseInt(a[i]);
  }
  if ( sum < 16){
    return false;
 }
 return true;
};

  console.log( validateCreditCard('9999-9999-8888-0000'));
  console.log( validateCreditCard('6666-6666-6666-1666'));

  console.log( validateCreditCard('a923-3211-9c01-1112'));
  console.log( validateCreditCard('4444-4444-4444-4444'));
  console.log( validateCreditCard('1111-1111-1111-1110'));
  console.log( validateCreditCard('6666-6666-6666-6661'));



// // *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is
// //
// // ```
// // { valid: true, number: 'a923-3211-9c01-1112' }
// // { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// // ```
// //
// // *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
// //

// #### JavaScript Bank

const bank = [
  {name:"Yukiko Isogimi", balance:8000000},
  {name:"Camina Sato", balance:20},
  {name:"Azh Ki", balance:300},
  {name:"Joel Suzuki", balance:9000000},

];

const totalAmount = function(money){
  let result = 0;
  for(let i = 0; i < money.length; i++){
   result = result + money[i].balance;
   return result
 }
};



console.log( `The total amout of bank is ${totalAmount( bank)} !! `);

const addAccount = function(newAccount){
  bank.push(newAccount)
};


console.log(`The added account name is: ${addAccount({name:"Honey", balance:200})}`);
// console.log( `The new total amout of bank is ${totalAmount( bank)} !! `);

//
// const addAccount = function(newAccount){
//   bank.push(newAccount);
// }
//
// console.log( `We just added a new account of ${addAccount({name:"yukiko", balance:20})}`);

//
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an `addAccount` method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// #### Accounts
//
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions `console.log()` values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// ### Tips
//
// Don't overthink this. Shorter code is probably the answer.
//
// ## Bonus
//
// - Ensure that the accounts cannot have negative values.
// - Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
//
// ## Additional
//
// Begin exploring the [JavaScript Koans](https://github.com/liammclennan/JavaScript-Koans). Fork, clone and start trying them.
