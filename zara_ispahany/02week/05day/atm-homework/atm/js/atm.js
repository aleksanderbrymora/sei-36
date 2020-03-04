//1// create a variable of the input amount

let currentCheckingBalance = 0;
let currentSavingsBalance = 0;

//2/ create a function and add the chk amount in it
const chkDeposit = function() {
  const checkAmt = parseFloat($('#checking-amount').val());
  if (isNaN(checkAmt)) {
    alert('Please enter an amount without $');
  } else {
    currentCheckingBalance += checkAmt;
    console.log(currentCheckingBalance);
    $('#checking-balance').html(`$${currentCheckingBalance}`);
  }
}
$('#checking-deposit').on('click', chkDeposit);

// const chkWithdraw = function() {
//   const checkAmt = parseFloat($('#checking-amount').val());
//   if (isNaN(checkAmt)) {
//     alert('Please enter an amount without $');
//   } else {
//     currentCheckingBalance -= checkAmt;
//     console.log(currentCheckingBalance);
//     $('#checking-balance').html(`$${currentCheckingBalance}`);
//   }
// }
// $('#checking-withdraw').on('click', chkWithdraw);

//if checking balance < 0

const chkWithdraw = function() {
  if (currentCheckingBalance <= 0) {
    alert('Cannot withdraw if your balance is below $0');
  } else {
  const checkAmt = parseFloat($('#checking-amount').val());
  if (isNaN(checkAmt)) {
    alert('Please enter an amount without $');
  } else {
    currentCheckingBalance -= checkAmt;
    console.log(currentCheckingBalance);
    $('#checking-balance').html(`$${currentCheckingBalance}`);
  }
}
}
$('#checking-withdraw').on('click', chkWithdraw);


// $('#checking-balance').addClass('zero');

//aleks solution
//in css made three new prooerties
//and in html changed some class to like balance zero where zero is the class
//and  reated a .message in html

const bank = {
  checking: 0,
  savings: 0,
  checkForZero = function() {
    const checkingBox = $('checking-balance');
    const savingsBox = $('savings-balance')
    if (this.checking === 0) {
      checkingBox.addClass('zero');
    } else {
      checkingBox.removeClass('zero');
    }
    if (this.savings === 0) {
      checkingBox.addClass('zero');
    } else {
      checkingBox.removeClass('zero');
    }
  }
}
