const bank = {
  // accounts array
  accounts: [
    { accountNumber: 1, name: "Tim Smith", balance: 30.0 },
    { accountNumber: 2, name: "Jenny Cho", balance: 10000.0 },
    { accountNumber: 3, name: "Ali Alavi", balance: 60.0 }
  ],

  addAccount: function(name, balance) {
    this.accounts.push({
      accountNumber: this.accounts.length + 1,
      name,
      balance
    });
  }
};

// Add an account
bank.addAccount("Sharon Holt", 100);

/**
 *  Deposit - increase in balance
 * @param {Object} account
 * @param {Number} amount
 */
const deposit = function(account, amount) {
  account.balance += amount;
  return account;
};

//deposit(accounts[0], 10);

/**
 * Withdraw function: Ensures that the accounts cannot have negative values.
 * @param {Object} account
 * @param {Number} amount
 */

const withdraw = function(account, amount) {
  if (account.balance - amount >= 0) {
    account.balance -= amount;
    return account;
  }
  return account;
};

/**
 * Transfer from first account to second
 * @param {object} account1
 * @param {object} account2
 * @param {number} amount
 */
const transfer = function(account1, account2, amount) {
  const balanceBeforeTransfer = account1.balance;
  //attempt withdrawal
  if (withdraw(account1, amount).balance === balanceBeforeTransfer) {
    // true if not enough to transfer, failed transfer
    return `Sorry, not enough funds to complete the transfer. Balance is ${account1.balance}.`;
  } else {
    // if enough in balance, perform transfer by deposit
    deposit(account2.balance, amount);
    return `Transfer was succesful! Your balance now is ${account1.balance}.`;
  }
};

// test withdraw
//let x = withdraw(accounts[0], 900);

//test transfer
let tran = transfer(bank.accounts[0], bank.accounts[1], 30);
tran;

//CC validate with Luhn
// Luhn algo

const luhn = function(n) {
  let arrFrom_n = n + "";
  arrFrom_n = arrFrom_n.split("").reverse();

  //set accumulator to start as first digit
  let total = Number(arrFrom_n[0]);
  //let sum; //

  //start from 2nd number
  for (let i = 1; i < arrFrom_n.length; i++) {
    let sum; // to hold temp sum

    //check index is even and double
    if (i % 2) {
      // double value
      sum = Number(arrFrom_n[i]) * 2;
      // if over 9 add the digits of the product
      if (sum > 9) {
        sum = sum - 10 + 1;
        total += sum;
      } else {
        // add to to total
        total += sum;
      }
    } else {
      // add odd values on to total
      total += Number(arrFrom_n[i]);
    }
  }

  // Check for multiple of 10
  if (total % 10 === 0) {
    return true;
  } else {
    return false;
  }

  //Do it with reduce(wip)
};

const validateCard = function(str) {
  // filter number
  let ccArray = str.match(/[0-9]/g);
  // store the length of number
  const length = ccArray.length;
  // convert to number from array
  ccArray = ccArray.join("");
  // check card number length
  if (length === 16) {
    if (luhn(ccArray)) {
      return true; // valid number
    }
  } else {
    return false; // Invalid;
  }
};

const isMyCardValid = function(n) {
  let outputObj = {
    valid: null,
    number: n,
    message: null
  };

  outputObj.valid = validateCard(outputObj.number);

  outputObj.valid
    ? (outputObj.message = `Valid Credit Card provided.`)
    : (outputObj.message = `Invalid Card number, please check the digits.`);

  outputObj;
  return outputObj;
};

isMyCardValid("4578-4230-1376-9219");
