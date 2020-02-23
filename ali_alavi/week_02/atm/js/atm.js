//
$(function() {
  //
  let id = "";

  //
  function Deposit(val, acc) {
    return val + acc;
  }

  $("input[type=button]").on("click", function() {
    id = $(this).attr("id");

    if (id.includes("deposit")) {
      alert($("#checking-amount").val() + $("#checking-balance").html());
    }

    //alert(id);
  });
});

// // filter only numbers and decimal point, rounding from MDN
// const filterValue = function(val) {
//   return Number(val.replace(/[^\w\s\.]/gi, ""));
// };

// // retrive balances
// const getBalance = function(acct) {
//   return filterValue($(`#${acct}-balance`).html());
// };

// //
// $("input").click(function() {
//   if (this.id === "checking-deposit") {
//     $("#checking-balance").html(
//       `$${Deposit(
//         $("#checking-amount").val(),

//         $(this)
//           .parent()
//           .attr("id")
//       )}`
//     );
//   } else if (this.id === "savings-deposit") {
//     $("#savings-balance").html(
//       `$${Deposit(
//         $("#savings-amount").val(),

//         $(this)
//           .parent()
//           .attr("id")
//       )}`
//     );
//   } else if (this.id === "savings-withdraw") {
//     $("#savings-balance").html(
//       `$${Withdraw(
//         $("#savings-amount").val(),

//         $(this)
//           .parent()
//           .attr("id")
//       )}`
//     );
//   } else if (this.id === "checking-withdraw") {
//     //debugger;
//     $("#checking-balance").html(
//       `$${Withdraw(
//         $("#checking-amount").val(),

//         $(this)
//           .parent()
//           .attr("id")
//       )}`
//     );
//   }
// });

// function Deposit(val, acc) {
//   return filterValue(val) + getBalance(acc);
// }

// function Withdraw(val, acc) {
//   let checkingBal = getBalance("checking");
//   // if enough withdraw
//   if (acc === "savings" && getBalance(acc) - filterValue(val) >= 0) {
//     return getBalance(acc) - filterValue(val);
//   } else if (acc === "checking") {
//     // less from savings
//     if (getBalance("checking") - filterValue(val) >= 0) {
//       return getBalance(acc) - filterValue(val);
//     } else if (getBalance("checking") + getBalance("savings") >= val) {
//       checkingBal = Math.abs(checkingBal - filterValue(val));
//       $("#checking-balance").html(0);
//       //debugger;
//       //alert("take from savings"); Math.abs(x)
//       $("#savings-balance").html(`$${getBalance("savings") - checkingBal}`);
//       // set checking balance to zero
//       return getBalance(acc);
//     } else {
//       $("#checking-balance").html(checkingBal);

//       alert("not enough funds");
//       return getBalance(acc);
//     }
//   } else {
//     // else
//     return getBalance(acc);
//   }
// }
