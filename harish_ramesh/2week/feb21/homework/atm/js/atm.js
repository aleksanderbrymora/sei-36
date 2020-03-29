let checkBalance = 0;
let savingBalance = 0;
let combinedBalance = 0; //should this has to be mentioned inside depo n withdraw func??



const checkDeposit = function() {
  checkBalance += parseInt($("#checking-amount").val());
  combinedBalance = checkBalance + savingBalance;
  $("#checking-balance").html(`$${checkBalance}`);
  checkBalanceIndicator();
}

$("#checking-deposit").on('click', checkDeposit);

const savingDeposit = function() {
  savingBalance += parseInt($("#savings-amount").val());
  combinedBalance = checkBalance + savingBalance;
  $("#savings-balance").html(`$${savingBalance}`);
  savingBalanceIndicator();
}

$("#savings-deposit").on('click', savingDeposit);

const checkWithdraw = function() {
  let withDrawAmount = 0;
  withDrawAmount = parseInt($("#checking-amount").val());
  if (checkBalance >= withDrawAmount){
    checkBalance -= withDrawAmount;
    combinedBalance = checkBalance + savingBalance;
  }else if (combinedBalance >= withDrawAmount){
    withDrawAmount -= checkBalance;
    checkBalance = 0;
    savingBalance -= withDrawAmount;
    combinedBalance = checkBalance + savingBalance;
  }else if ( combinedBalance<withDrawAmount ){
    $("<p>withdrawal amount exceeds the funds available</P>").appendTo(".clear")
  }
  $("#checking-balance").html(`$${checkBalance}`);
  $("#savings-balance").html(`$${savingBalance}`);
  checkBalanceIndicator();
  savingBalanceIndicator();
};

$("#checking-withdraw").on("click",checkWithdraw);

const savingWithdraw = function() {
  let withDrawAmount = 0;
  withDrawAmount = parseInt($("#savings-amount").val());
  if (savingBalance >= withDrawAmount){
    savingBalance -= withDrawAmount;
    combinedBalance = checkBalance + savingBalance;
  }else if (combinedBalance >= withDrawAmount){
    withDrawAmount -= savingBalance;
    savingBalance = 0;
    checkBalance -= withDrawAmount;
    combinedBalance = checkBalance + savingBalance;
  }else if ( combinedBalance<withDrawAmount ){
    $("<p>withdrawal amount exceeds the funds available</P>").appendTo(".clear")//HOW TO remove WITH NEXT ACTIVITY?
  }
  $("#savings-balance").html(`$${savingBalance}`);
  $("#checking-balance").html(`$${checkBalance}`);
  savingBalanceIndicator();
  checkBalanceIndicator();
};

$("#savings-withdraw").on("click",savingWithdraw);

const checkBalanceIndicator = function(){ //can we use one balance indicator for both????
  if ( checkBalance === 0 ){
    $("#checking").addClass("zero");
  } else {
    $("#checking").removeClass("zero");
    $("#checking").addClass("balance");
  }
};
const savingBalanceIndicator = function(){ //can we use one balance indicator for both????
  if ( savingBalance === 0 ){
    $("#savings").addClass("zero");
  } else {
    $("#savings").removeClass("zero");
    $("#savings").addClass("balance");
  }
};
