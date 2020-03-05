// #Title: ATM App
//
// ###Type:
// - Lab
//
// ###Summary
// - This lab will help you practice JavaScript functions and manipulating the DOM with jQuery.
// - You'll be selecting elements, manipulating HTML, and manipulating style along
// with building out the logic using JavaScript.
//
// ###Objectives:
// - DOM selection, appending, removal, updating
//
// ###Specification:
$(document).ready(function() {
  var checkingAmt = 0;
  var savingAmt = 0;
  var totalAmt = checkingAmt + savingAmt;

//Deposit in Checking Account
  var onCheckingDeposit = function() {
    // Change the amount into interger and then back into with "$" sign
    checkingAmt = checkingAmt + parseInt($('#checking-amount').val(), 10);
    var checkingString = '$' + checkingAmt;
    $('#checking-balance').text(checkingString);
    //if amount is greater than 0 then remove red colour
    if(checkingAmt > 0) {
      $('#checking-balance').removeClass('zero');
    }
  };

//withdrawal from Checking Account
  var onCheckingWithdraw = function() {

    var currAmt = parseInt($('#checking-amount').val(), 10);

    totalAmt = checkingAmt + savingAmt;
    //if the amount enter by user is more than what is available in Checking
    //then extract amount from saving account also and update the two accounts
    //with new values
    if(currAmt > checkingAmt && currAmt <= totalAmt){
      var overdraftAmount = currAmt - checkingAmt;
        checkingAmt = 0;
        var checkingString = '$' + checkingAmt;
        $('#checking-balance').text(checkingString);
        savingAmt = savingAmt - overdraftAmount;
        var savingString = '$' + savingAmt;
        $('#savings-balance').text(savingString);
    }
    //if the checking account has sufficient funds to satisfy what eneterd by user
    var difference = checkingAmt - currAmt;
    if(difference >= 0)
    {
      checkingAmt = difference;
      var checkingString = '$' + checkingAmt;
      $('#checking-balance').text(checkingString);
    }
    // If the checking Amount is less than what user enter on webpage,
    // the checking amount will be zero from above and the color changes to red
    if(checkingAmt <= 0) {
      $('#checking-balance').addClass('zero');
    }
  };

  var onSavingDeposit = function() {
    // while saving in savings account, if the amount is greater than 0 then
    //reset the color to gray
    savingAmt = savingAmt + parseInt($('#savings-amount').val(), 10);
    var savingString = '$' + savingAmt;
    $('#savings-balance').text(savingString);
    if(savingAmt > 0) {
      $('#savings-balance').removeClass('zero');
    }
  };

  var onSavingWithdraw = function() {
    var currAmt = parseInt($('#savings-amount').val(), 10);
    totalAmt = checkingAmt + savingAmt;
  //If the amount in savings is not sufficient to satisfy what user entered on webpage,
  //it take the difference amount from checking account
    if(currAmt > savingAmt && currAmt <= totalAmt){
      var overdraftAmount = currAmt - savingAmt;
        savingAmt = 0;
        var savingsString = '$' + savingAmt;
        $('#savings-balance').text(savingsString);
        checkingAmt = checkingAmt - overdraftAmount;
        var checkingString = '$' + checkingAmt;
        $('#checking-balance').text(checkingString);
    }
    var difference = savingAmt - parseInt($('#savings-amount').val(), 10);
    //Savings account has sufficient amount to satisfy what user entered
    if(difference >= 0)
    {
      savingAmt = difference;
      var savingString = '$' + savingAmt;
      $('#savings-balance').text(savingString);
    }
    //if savings account is empty , then set its color to red
    if(savingAmt <= 0) {
      $('#savings-balance').addClass('zero');
    }
  };

$('#checking-deposit').on('click', onCheckingDeposit);
$('#checking-withdraw').on('click', onCheckingWithdraw);

$('#savings-deposit').on('click', onSavingDeposit);
$('#savings-withdraw').on('click', onSavingWithdraw);

});
