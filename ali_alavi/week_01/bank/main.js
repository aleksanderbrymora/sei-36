//main

const accounts = [
  { accountNumber: 1, name: "Tim Smith", balance: 200.0 },
  { accountNumber: 2, name: "Jenny Cho", balance: 10000.0 },
  { accountNumber: 3, name: "Ali Alavi", balance: 60.0 }
];

//
const deposit = function(account, amount) {
  account.balance += amount;
  return account;
};

deposit(accounts[0], 10);

const withdraw = function(account, amount) {
  account.balance -= amount;
  return account;
};
const transfer = function(account1, account2, amount) {
  account1.balance -= amount;
  account2.balance += amount;
};

//
let x = withdraw(accounts[0], 35);
let t = transfer(accounts[0], accounts[1], 35);

//Ensure that the accounts cannot have negative values.
