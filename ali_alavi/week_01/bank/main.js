// accounts array
const accounts = [
  { accountNumber: 1, name: "Tim Smith", balance: 30.0 },
  { accountNumber: 2, name: "Jenny Cho", balance: 10000.0 },
  { accountNumber: 3, name: "Ali Alavi", balance: 60.0 }
];

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
let tran = transfer(accounts[0], accounts[1], 30);
tran;

//accounts;
