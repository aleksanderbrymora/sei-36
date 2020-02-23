// filter only numbers and decimal point, rounding from MDN
const filterValue = function(val) {
  return Number(val.replace(/[^\w\s\.]/gi, ""));
};

// retrive balances
const getBalance = function(acct) {
  return filterValue($(`#${acct}-balance`).html());
};

let checkingBal = filterValue($("#checking-balance").html());
let savingBal = filterValue($("#savings-balance").html());

//
$("input").click(function() {
  if (this.id === "checking-deposit") {
    $("#checking-balance").html(
      `$${Deposit(
        $("#checking-amount").val(),

        $(this)
          .parent()
          .attr("id")
      )}`
    );
  } else if (this.id === "savings-deposit") {
    $("#savings-balance").html(
      `$${Deposit(
        $("#savings-amount").val(),

        $(this)
          .parent()
          .attr("id")
      )}`
    );
  } else if (this.id === "savings-withdraw") {
    $("#savings-balance").html(
      `$${Withdraw(
        $("#savings-amount").val(),

        $(this)
          .parent()
          .attr("id")
      )}`
    );
  } else if (this.id === "checking-withdraw") {
    $("#checking-balance").html(
      `$${Withdraw(
        $("#checking-amount").val(),

        $(this)
          .parent()
          .attr("id")
      )}`
    );
  }
});

function Deposit(val, acc) {
  return filterValue(val) + getBalance(acc);
}

function Withdraw(val, acc) {
  let checkingBal = getBalance("checking");
  // if enough withdraw
  if (acc === "savings" && getBalance(acc) - filterValue(val) >= 0) {
    return getBalance(acc) - filterValue(val);
  } else if (acc === "checking") {
    // less from savings
    if (getBalance("checking") - filterValue(val) >= 0) {
      return getBalance(acc) - filterValue(val);
    } else if (getBalance("checking") + getBalance("savings") >= val) {
      //debugger;
      $("#checking-amount").val(0);
      $("#checking-balance").html(`$0`);
      //alert("take from savings"); Math.abs(x)
      $("#savings-balance").html(
        `$${getBalance("savings") - Math.abs(checkingBal - filterValue(val))}`
      );
      // set checking balance to zero
    } else {
      alert("not enough funds");
    }
  } else {
    // else
    return getBalance(acc);
  }
}
