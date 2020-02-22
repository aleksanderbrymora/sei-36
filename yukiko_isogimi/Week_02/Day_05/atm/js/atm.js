$(document).ready(function() {


  // const updateUI = function(){
  //   if (totalChecking === 0) {
  //     $balance.addClass("zero");
  //     $balance.text("$" + totalChecking);
  //   } else {
  //     $balance.removeClass("zero");
  //     $balance.text("$" + totalChecking);
  //   }
  //
  //   if (totalSavings === 0) {
  //     $savingsBalance.addClass("zero");
  //     $savingsBalance.text("$" + totalSavings);
  //   } else {
  //     $savingsBalance.removeClass("zero");
  //     $savingsBalance.text("$" + totalSavings);
  //   }
  //
  // };




//checking account deposit ///
  // let totalChecking = 0;
  const $balance = $("#checking-balance")
  let totalChecking = 0;
  $("#checking-deposit").click(function() {
    const valueDeposit = +$("#checking-amount").val();
    totalChecking += valueDeposit;
    $balance.text("$" + totalChecking);

    if (totalChecking === 0) {
      $balance.addClass("zero");
      $balance.text("$" + totalChecking);
    } else {
      $balance.removeClass("zero");
      $balance.text("$" + totalChecking);
    }
    $('#checking-amount').val('');
  });




////saving account deposit ////
    let totalSavings = 0;
    const $savingsBalance = $("#savings-balance");

    $("#savings-deposit").click(function() {
      const valueSavings = +$("#savings-amount").val();
      totalSavings += valueSavings;
      $savingsBalance.text("$" + totalSavings);
      // updateUI();

      if (totalSavings === 0) {
        $savingsBalance.addClass("zero");
        $savingsBalance.text("$" + totalSavings);
      } else {
        $savingsBalance.removeClass("zero");
        $savingsBalance.text("$" + totalSavings);
      }
      $("#savings-amount").val('');
    });



///checking account withdrawal ///

  $("#checking-withdraw").click(function() {
    let valueWithdraw = +$("#checking-amount").val();

    if ( totalChecking - valueWithdraw >= 0 ){
      totalChecking -= valueWithdraw;
      $balance.text("$" + totalChecking);
      if (totalChecking === 0){
        $balance.addClass("zero");
        $balance.text("$" + totalChecking);
      } else {
        $balance.removeClass("zero");
        $balance.text("$" + totalChecking);
      }

    } else if (totalChecking + totalSavings - valueWithdraw >= 0 ){
      valueWithdraw -= totalChecking;
      totalChecking = 0;
      totalSavings -= valueWithdraw;

      $balance.addClass("zero");
      $balance.text("$" + totalChecking);
        if( totalSavings === 0) {
          $savingsBalance.addClass("zero");
          $savingsBalance.text("$" + totalSavings);

        } else {
            $savingsBalance.removeClass("zero");
            $savingsBalance.text("$" + totalSavings);

        }
    } else {
        console.log("You cant withdraw money!!")
    }
    $("#checking-amount").val('');

  });




///saving account withdrawl ////

  $("#savings-withdraw").click(function() {
    let valueWithdraw = +$("#savings-amount").val();

    if ( totalSavings - valueWithdraw >= 0 ){
      totalSavings -= valueWithdraw;
      $savingsBalance.text("$" + totalSavings);
      if (totalSavings === 0) {
        $savingsBalance.addClass("zero");
        $savingsBalance.text("$" + totalSavings);
      } else {
        $savingsBalance.removeClass("zero");
        $savingsBalance.text("$" + totalSavings);
      }

    } else if (totalSavings + totalChecking - valueWithdraw >= 0){
      valueWithdraw -= totalSavings;
      totalSavings = 0;
      totalChecking -= valueWithdraw;

      $savingsBalance.addClass("zero");
      $savingsBalance.text("$" + totalSavings);
        if ( totalChecking === 0 ){
          $balance.addClass("zero");
          $balance.text("$" + totalChecking);
        } else {
          $balance.removeClass("zero");
          $balance.text("$" + totalChecking);
        }
    } else {
        console.log("You can't withdraw money!!")
    }

  $("#savings-amount").val('');
});


});
