$(document).ready(function() {
  let totalChecking = 0;
  let totalSavings = 0;
  const $balance = $("#checking-balance");
  const $savingsBalance = $("#savings-balance");

  //Update UI

  const updateUI = function(account) {
    if (account === "checking") {
      if (totalChecking === 0) {
        $balance.addClass("zero");
        $balance.text("$" + totalChecking);
      } else {
        $balance.removeClass("zero");
        $balance.text("$" + totalChecking);
      }
    } else if (account === "savings") {
      if (totalSavings === 0) {
        $savingsBalance.addClass("zero");
        $savingsBalance.text("$" + totalSavings);
      } else {
        $savingsBalance.removeClass("zero");
        $savingsBalance.text("$" + totalSavings);
      }
    }
  };

  //checking account deposit ///

  $("#checking-deposit").click(function() {
    const valueDeposit = +$("#checking-amount").val();
    totalChecking += valueDeposit;
    $balance.text("$" + totalChecking);
    updateUI("checking");
    $("#checking-amount").val("");
  });

  ////saving account deposit ////

  $("#savings-deposit").click(function() {
    const valueSavings = +$("#savings-amount").val();
    totalSavings += valueSavings;
    $savingsBalance.text("$" + totalSavings);
    updateUI("savings");
    $("#savings-amount").val("");
  });

  ///checking account withdrawal ///

  $("#checking-withdraw").click(function() {
    let valueWithdraw = +$("#checking-amount").val();

    if (totalChecking - valueWithdraw >= 0) {
      totalChecking -= valueWithdraw;
      $balance.text("$" + totalChecking);
      updateUI("checking");
    } else if (totalChecking + totalSavings - valueWithdraw >= 0) {
      valueWithdraw -= totalChecking;
      totalChecking = 0;
      totalSavings -= valueWithdraw;

      $balance.addClass("zero");
      $balance.text("$" + totalChecking);
      updateUI("checking");
      updateUI("savings");
    }

    $("#checking-amount").val("");
  });

  ///saving account withdrawl ////

  $("#savings-withdraw").click(function() {
    let valueWithdraw = +$("#savings-amount").val();

    if (totalSavings - valueWithdraw >= 0) {
      totalSavings -= valueWithdraw;
      $savingsBalance.text("$" + totalSavings);
      updateUI("savings");
    } else if (totalSavings + totalChecking - valueWithdraw >= 0) {
      valueWithdraw -= totalSavings;
      totalSavings = 0;
      totalChecking -= valueWithdraw;

      $savingsBalance.addClass("zero");
      $savingsBalance.text("$" + totalSavings);
      updateUI("checking");
      updateUI("savings");
    }
    $("#savings-amount").val("");
  });
});
