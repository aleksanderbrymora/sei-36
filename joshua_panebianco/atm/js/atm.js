let checkingBalance = 0;
let savingBalance = 0;

$( document ).ready(function() {
    // Define two variables that store the balance of checking and savings

		// Create a function that lets a user deposit money to checking
    const $addToChecking = function () {
			checkingBalance = checkingBalance + parseInt($("#checking-amount").val());
	    $("#checking-balance").html(checkingBalance);
		}
		$("#checking-deposit").on('click', $addToChecking)

		// Create a function that lets a user deposit money to saving
		const $addToSaving = function () {
			savingBalance = savingBalance + parseInt($("#savings-amount").val());
			$("#savings-balance").html(savingBalance);
		}
		$("#savings-deposit").on('click', $addToSaving)

		// Create a function that lets a user withdraw money

		// Checking withdraw
		// const $withdrawChecking = function () {
		// 	let withdrawAmount;
		// 	withdrawAmount = $("#checking-amount").val();
		// 	if (checkingBalance < withdrawAmount) {
		// 		$(".clear").after("<h3>Sorry you dont have enough funds</h3>");
		// 		$("h3").addClass(".status");
		// 	} else {
		// 		checkingBalance = checkingBalance - withdrawAmount;
		// 	}
		// 	$("#checking-balance").html(checkingBalance);
		// }
		// $("#checking-withdraw").on('click', $withdrawChecking);

		//Saving withdraw
		// const $withdrawSaving = function () {
		// 	let withdrawAmount = parseInt($("#savings-amount").val());
		// 	if (savingBalance < withdrawAmount) {
		// 		$(".clear").after("<h3>Sorry you dont have enough funds</h3>");
		// 	} else {
		// 		savingBalance = savingBalance - withdrawAmount;
		// 	}
		// 	$("#savings-balance").html(savingBalance);
		// }
		// $("#savings-withdraw").on('click', $withdrawSaving);
		//
		// $("#checking-balance").html(checkingBalance);
		// $("#savings-balance").html(savingBalance);


// IF the checking balance is enough,
//    take the withdrawal amount from checkingBalance
// ELSE IF the balance from savings + checking is enough
//    calcualate the excess withhdrawal amount that is not in the checking balance
//    withdraw everything from checking,
//    withdraw the leftover/remainder from savings
//    update the DOM display for both accounts from the balances for checking and savings
// ELSE
//    show error message 'insufficient funds'
// END
	const withdrawFromChecking = function () {
		console.log('here?');
		let withdrawAmount = parseInt($("#checking-amount").val());
		if (checkingBalance >= withdrawAmount) {
			checkingBalance = checkingBalance - withdrawAmount;
		} else if ((checkingBalance + savingBalance) >= withdrawAmount) {
			console.log('did we get here?');
			let excessAmount = withdrawAmount - checkingBalance; // define excess amount
			// let widthdrawChecking = withdrawAmount - excessAmount; // define checking Widthdraw amount
			checkingBalance = 0; // withdrawChecking - checkingBalance; // widthdraw from checking
			savingBalance = savingBalance - excessAmount; // widthdraw from saving
			$("#checking-balance").html(checkingBalance); // update DOM for checking balance
			$("#savings-balance").html(savingBalance); // udpate DOM for saving balance
		} else {
			$(".clear").html("<h3>Sorry you dont have enough funds</h3>");
		}
	}; // $withdrawChecking()

	$("#checking-withdraw").on('click', withdrawFromChecking);

	//Saving withdraw
	const withdrawFromSaving = function () {
		// console.log('here?');
		let withdrawAmount = parseInt($("#savings-amount").val());
		if (savingBalance >= withdrawAmount) {
			savingBalance = savingBalance - withdrawAmount;
		} else if ((checkingBalance + savingBalance) >= withdrawAmount) {
			// console.log('did we get here?');
			let excessAmount = withdrawAmount - savingBalance; // define excess amount
			// let widthdrawChecking = withdrawAmount - excessAmount; // define checking Widthdraw amount
			savingBalance = 0; // withdrawChecking - checkingBalance; // widthdraw from checking
			checkingBalance = checkingBalance - excessAmount; // widthdraw from saving
			$("#checking-balance").html(checkingBalance); // update DOM for checking balance
			$("#savings-balance").html(savingBalance); // udpate DOM for saving balance
		} else {
			$(".clear").html("<h3>Sorry you dont have enough funds</h3>");
		}
	}; // $withdrawFromChecking()

	$("#savings-withdraw").on('click', withdrawFromSaving);

}); // document.ready tag

// Widthdraw from both accounts
// if the balance of checking is not enough, then check saving balance
// if the balance of checking and savings is not enough, alert user "not enough funds"
// if the balance from saving has enough money withdraw from savings
// if the balance from savings and checking is enough withdraw from both
// update the values of both savings and checking
