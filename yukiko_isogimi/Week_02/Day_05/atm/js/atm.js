$(document).ready(function() {
  ////checking account


  let totalChecking = 0;
  const $balance = $("#checking-balance")

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

  $("#checking-withdraw").click(function() {
    const valueDeposit = +$("#checking-amount").val();
    // if ((totalChecking-valueDeposit) < 0)
    // $("#checking-balance").text("$" + totalChecking)
    totalChecking -= valueDeposit;

    if (totalChecking === 0) {
      $("#checking-balance").addClass("zero");
      $("#checking-balance").text("$" + totalChecking);
    } else {
      $("#checking-balance").removeClass("zero");
      $("#checking-balance").text("$" + totalChecking);
    }
    $('#checking-amount').val('');
  });



  ////saving account
  let totalSavings = 0;
  $("#savings-deposit").click(function() {
    const valueSavings = +$("#savings-amount").val();
    totalSavings += valueSavings;
    $("#savings-balance").text("$" + totalSavings);

    if (totalSavings === 0) {
      $("#savings-balance").addClass("zero");
      $("#savings-balance").text("$" + totalSavings);
    } else {
      $("#savings-balance").removeClass("zero");
      $("#savings-balance").text("$" + totalSavings);
    }
    $("#savings-amount").val('');
  });

  $("#savings-withdraw").click(function() {
    const valueSavings = +$("#savings-amount").val();
    totalSavings -= valueSavings;
    $("#savings-balance").text("$" + totalSavings);

    if (totalSavings === 0) {
      $("#savings-balance").addClass("zero");
      $("#savings-balance").text("$" + totalSavings);
    } else {
      $("#savings-balance").removeClass("zero");
      $("#savings-balance").text("$" + totalSavings);
    }
    $("#savings-amount").val('');
  });
});
