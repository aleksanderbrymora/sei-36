/*
JavaScript Bank
In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

Bank
There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a set of common functionality.

Accounts
Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

Tips
Don't overthink this. Shorter code is probably the answer.

Bonus
Ensure that the accounts cannot have negative values.
Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
Additional
Begin exploring the JavaScript Koans. Fork, clone and start trying them.
*/

let bankAccounts = [{accountName: 'john', balance: 0},{accountName: 'peter', balance: 1000},{accountName: 'cristina', balance:9000}];

let accountDetails = function()
{
for (var i = 0; i < bankAccounts.length; i++)
{
  console.log(`the account details are Account name : ${ bankAccounts[i].accountName} and its balance : ${bankAccounts[i].balance}`);
}
}

const addNewAccount = function(accountname,startbalance=0)
{
  bankAccounts.push({accountName:accountname , balance: startbalance});
  console.log(`New Account details  with the Bank are as follows \n \n`);
  accountDetails();
}

const withdrawAmount = function (accountname,withdrawAmount)
{
let account = bankAccounts.find(bankAccount => (bankAccount.accountName == accountname)) ;
let balanceCheck = account.balance - withdrawAmount;
if(balanceCheck > 0)
{
account.balance = account.balance - withdrawAmount;
accountDetails();
}
else
{
console.log(`Insufficient balance \n\n`);
console.log(`Here is the Bank Statement`);
console.log(`account name: ${accountname} Balance: ${account.balance}`);
}
}


const depositAmount = function (accountname,depositAmount)
{
let account = bankAccounts.find(bankAccount => (bankAccount.accountName == accountname)) ;
account.balance = account.balance + depositAmount;
console.log(`Here is the Bank Statement`);
console.log(`account name: ${accountname} Balance: ${account.balance}`);
}
addNewAccount('geetha',100);
withdrawAmount('cristina',10000);
depositAmount('geetha',200);
