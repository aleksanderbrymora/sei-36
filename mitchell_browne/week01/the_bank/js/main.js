// # The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.


const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function(object) {
  let sum = 0;
  for (const property in object) {
    sum += + (object[property]);
  }
  return sum;
}

console.log(cashRegister(cartForParty));

// # Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// - Number must be 16 digits, all of them must be numbers
// - You must have at least two different digits represented (all of the digits cannot be the same)
// - The final digit must be even
// - The sum of all the digits must be greater than 16

const errorMessage = function(array) {
  return `valid: ${array.valid}, number: ${array.card}, error: ${array.error}`;
}

const testError = function(array) {
  if (!array.test0) {
    array.error = `incorrect_characters`;
  } else if (!array.test1) {
      array.error = `incorrect_length`;
  } else if (!array.test2) {
    array.error = `same_digits`;
  } else if (!array.test3) {
    array.error = `final_digit_odd`;
  } else if (!array.test4) {
    array.error = `digit_sum_<16`;
  } else {
    return `valid: ${array.valid}, number: ${array.card}`;
  }
  return errorMessage(array);
}

const validateCreditCard = function(card) {
  // object to hold each validity test, 4 in total
  // BONUS: change test names to something more meaningful i.e. `incorrect_length`
  const testArray = {
    card: card,
    test0: false,
    test1: false,
    test2: false,
    test3: false,
    test4: false,
    error: "",
    valid: false
  };

  // turn card into string of 16 characters
  card = card.split('-').join('');

  // digits only test
  if (card === (parseInt(card)).toString()) {
    testArray.test0 = true;
  }

  // digit length === 16 test
  if (card.length === 16) {
    testArray.test1 = true;
  }

  // at least 2 different digits test
  for (let i = 1; i < card.length; i++) {
    if (card[0] !== card[i]) {
      testArray.test2 = true;
      break;
    }
  }

  // final digit must be even
  if (card[card.length-1] % 2 === 0) {
    testArray.test3 = true;
  }

  // sum of all digits > 16
  let sum = 0;
  for (let i = 0; i < card.length; i++) {
    sum += + card[i];
    if (sum > 16) {
      testArray.test4 = true;
      break;
    }
  }

  if (testArray.test0 && testArray.test1 && testArray.test2 && testArray.test3 && testArray.test4) {
    testArray.valid = true;
  }
  return testError(testArray);
}

// valid tests
console.log(validateCreditCard(`9999-9999-8888-0000`));
console.log(validateCreditCard(`6666-6666-6666-1666`));


// invalid tests
console.log(validateCreditCard(`a923-3211-9c01-1112`));
console.log(validateCreditCard(`4444-4444-4444-4444`));
console.log(validateCreditCard(`1111-1111-1111-1110`));
console.log(validateCreditCard(`6666-6666-6666-6669`));
console.log(validateCreditCard(`6666-6666-6666-666`));

// # JavaScript Bank
//
// In this homework, you'll create a basic `bank` in Javascript. The bank has many `accounts` and the following capabilities that you need to write.
//
// #### Bank
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

// --- FUNCTIONS ---

// initialise array variable accounts with owner/balance objects
const accounts = [
  {owner: 'Gary', balance: 1000},
  {owner: 'Archibald', balance: 35000000},
  {owner: 'Scooby', balance: 7}
];

// add account owner and initial funds to accounts list
const addAccount = function(name, funds) {
  if (funds < 0) {
    return `Insufficient funds to open account ${name}.`;
  }
  accounts.push({owner: name, balance: funds});
  return `Account added: ${name}, Balance: $${funds}`;
}

// log balance of each owner's account
const accountBalance = function() {
  accounts.forEach(function (object) {
    console.log(object);
  });
}

// deposit funds to owner of amount deposit
const depositFunds = function(name, deposit) {
  const account = accounts.find( ({owner}) => owner === name);
  account.balance += deposit;
  return `Account: ${account.owner}, Deposit: $${deposit}, Balance: $${account.balance}`;

  // for (let i = 0; i < accounts.length; i++) {
  //   if (accounts[i].owner == name) {
  //     accounts[i].balance += deposit;
  //   }
  // }
}

// withdraw funds to owner of amount withdraw
const withdrawFunds = function(name, withdraw) {
  const account = accounts.find( ({owner}) => owner === name);
  if (account.balance - withdraw < 0) {
    return `Not enough funds to withdraw. Current Balance: $${account.balance}`;
  }
  account.balance -= withdraw;
  return `Account: ${account.owner}, Withdrawal: $${withdraw}, Balance: $${account.balance}`;

  // for (let i = 0; i < accounts.length; i++) {
  //   if (accounts[i].owner == name) {
  //     accounts[i].balance -= withdraw;
  //   }
  // }
}

// transfer $amount from -> to
const transfer = function(from, to, amount) {
  const fromAccount = accounts.find( ({owner}) => owner === from);
  const toAccount = accounts.find( ({owner}) => owner === to);
  if ((fromAccount.balance - amount) < 0) {
    return `Not enough funds to transfer from ${fromAccount.owner}. Current Balance: $${fromAccount.balance}`;
  }
  fromAccount.balance -= amount;
  toAccount.balance += amount;
  return `Account: ${fromAccount.owner}, Transfer: $${-amount}, Balance: $${fromAccount.balance}
  \nAccount: ${toAccount.owner}, Transfer: $${amount}, Balance: $${toAccount.balance}`
}

// --- TESTS ---

accountBalance();

console.log(addAccount('tom', 5000));
console.log(depositFunds('Gary', 10));
console.log(withdrawFunds('Scooby', 2));
console.log(transfer('tom', 'Scooby', 312));

accountBalance();
