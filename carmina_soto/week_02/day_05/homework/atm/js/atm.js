$(document).ready(function(){
  let checkingMoney = 0; //checking Balance
  const $checkBal = $('#checking-balance'); //id where to display checking balance
  const $checkAmt = $('#checking-amount'); //id where to get the checking amount
  let savingsMoney = 0; // savings Balance
  const $savingsBal = $('#savings-balance'); // id where to display savings balance
  const $savingsAmt = $('#savings-amount'); // id where to get the savings amount

  //deposit Money
  const depositMoney = function(event){
    const amount = parseInt(event.data.amt.val()); //convert input to number
    if (!isNaN(amount)){ // checks if entered amount is number
      if(event.data.isChecking){ // checks if it's the checking account
        checkingMoney += amount;
        event.data.account.html(`$ ${checkingMoney}`);
        if (checkingMoney > 0){ // if checking balance is more than zero, change background to gray
            event.data.account.removeClass('zero');
        }
        $checkAmt.val(''); // reset input
      }else { // for savings account
        savingsMoney += amount;
        event.data.account.html(`$ ${savingsMoney}`);
        if (savingsMoney > 0){
            event.data.account.removeClass('zero');
        }
        $savingsAmt.val('');
      }
    }
  };
  $('#checking-deposit').on('click', { // checking account deposit button
    account: $checkBal,
    amt: $checkAmt,
    isChecking: true
  }, depositMoney);

  $('#savings-deposit').on('click', { // savings account deposit button
    account: $savingsBal,
    amt: $savingsAmt,
    isSavings: true
  }, depositMoney);

  //determine account
  let currentAcctBalance, otherAcctBalance, currentAcct, otherAcct;
  const determineAccount = function (acct1, acct2, bal1, bal2) {
      currentAcctBalance = bal1;
      otherAcctBalance = bal2;
      currentAcct = acct1;
      otherAcct = acct2;
  }

  //withdraw money
  const withdrawMoney = function(event){
    let amount = parseInt(event.data.amt.val()); //convert input to number
    if (event.data.isChecking){
      determineAccount(event.data.checkingAcct, event.data.savingsAcct, checkingMoney, savingsMoney);
    }else {
      determineAccount(event.data.savingsAcct, event.data.checkingAcct, savingsMoney, checkingMoney);
    };
    if (currentAcctBalance >= amount){ // first, check if the current balance is enough for withdrawal
      currentAcctBalance -= amount;
    }else if (currentAcctBalance + otherAcctBalance >= amount){  // check if there's enough money from two accounts for withdrawal
      amount -= currentAcctBalance;
      currentAcctBalance = 0;
      otherAcctBalance -= amount;
      otherAcct.html(`$ ${otherAcctBalance}`);
    }else { // display not enough money to withdraw message
      $('#message').show();
    }
    if (event.data.isChecking){ // update global checking and savings balance
      checkingMoney = currentAcctBalance;
      savingsMoney = otherAcctBalance;
    } else {
      savingsMoney = currentAcctBalance;
      checkingMoney =otherAcctBalance;
    }
    if (checkingMoney === 0) { // if checking balance is zero, change background to red
      event.data.checkingAcct.addClass('zero');
    }
    if (savingsMoney === 0) { // if savings balance is zero, change background to red
      event.data.savingsAcct.addClass('zero');
    }
    currentAcct.html(`$ ${currentAcctBalance}`); // display amount
    event.data.amt.val('');
  };

  $('#checking-withdraw').on('click',{ //checking account withdraw button
    checkingAcct: $checkBal,
    savingsAcct: $savingsBal,
    amt: $checkAmt,
    isChecking: true
  }, withdrawMoney);

  $('#savings-withdraw').on('click',{ //savings account withdraw button
    checkingAcct: $checkBal,
    savingsAcct: $savingsBal,
    amt: $savingsAmt,
    isSavings: true
  }, withdrawMoney);

  $('#clear-button').on('click', function(){ // hide messages again
    $('#message').hide();
  });
});


//original code!
// $(document).ready(function(){
  //deposit money - Checking
  // let checkingMoney = 0;
  // const checkBal = $('#checking-balance');
  // const checkAmt = $('#checking-amount');
  // $('#checking-deposit').on('click', function (){
  //   const amount = parseInt(checkAmt.val());
  //   if (!isNaN(amount))
  //   {
  //     checkingMoney += amount;
  //     checkBal.html(`$ ${checkingMoney}`); //display money
  //     if (checkingMoney > 0) {
  //       checkBal.removeClass('zero')
  //   }
  // }
  // });

  //deposit money - Savings
  // let savingsMoney = 0;
  // const savingsBal = $('#savings-balance');
  // const savingsAmt = $('#savings-amount');
  // $('#savings-deposit').on('click', function (){
  //   const amount = parseInt(savingsAmt.val());
  //   if (!isNaN(amount)){
  //     savingsMoney += amount;
  //     savingsBal.html(`$ ${savingsMoney}`); //display money
  //     if (savingsMoney > 0) {
  //       savingsBal.removeClass('zero')
  //     }
  //   }
  // });

  //withdraw money - Checking
  // $('#checking-withdraw').on('click', function(){
  //   let amount = parseInt(checkAmt.val());
  //   if (checkingMoney >= amount) {
  //     checkingMoney -= amount;
  //   }else if (checkingMoney + savingsMoney >= amount){
  //     amount -= checkingMoney;
  //     checkingMoney = 0;
  //     savingsMoney -= amount;
  //     savingsBal.html(`$ ${savingsMoney}`);
  //   }
  //   if (checkingMoney === 0) {
  //     checkBal.addClass('zero');
  //   }
  //   if (savingsMoney === 0){
  //     savingsBal.addClass('zero');
  //   }
  //   checkBal.html(`$ ${checkingMoney}`);
  // });

  // //withdraw money - Savings
//   $('#savings-withdraw').on('click', function(){
//     let amount = parseInt(savingsAmt.val());
//     if (savingsMoney >= amount) {
//       savingsMoney -= amount;
//     }else if (savingsMoney + checkingMoney >= amount){
//       amount -= savingsMoney;
//       savingsMoney = 0;
//       checkingMoney -= amount;
//       checkBal.html(`$ ${checkingMoney}`);
//     }
//     if (savingsMoney === 0) {
//       savingsBal.addClass('zero');
//     }
//     if (checkingMoney === 0){
//       checkBal.addClass('zero');
//     }
//     savingsBal.html(`$ ${savingsMoney}`);
//   });
// });
// });
