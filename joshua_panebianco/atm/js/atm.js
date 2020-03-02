let checkingBalance = 0;
let savingBalance = 0;
let totalBalance = checkingBalance + savingBalance;

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

	// Checking widthdraw Function
	const withdrawFromChecking = function () {
		let withdrawAmount = parseInt($("#checking-amount").val());
		if (checkingBalance >= withdrawAmount) {
			checkingBalance = checkingBalance - withdrawAmount;
		} else if ((checkingBalance + savingBalance) >= withdrawAmount) {
			let excessAmount = withdrawAmount - checkingBalance; // define excess amount
			checkingBalance = 0; // withdrawChecking - checkingBalance; // widthdraw from checking
			savingBalance = savingBalance - excessAmount; // widthdraw from saving
			$("#checking-balance").html(checkingBalance); // update DOM for checking balance
			$("#savings-balance").html(savingBalance); // udpate DOM for saving balance
		} else {
			$(".clear").html("<h3>Sorry you dont have enough funds</h3>");
		}
	}; // $withdrawChecking()

	$("#checking-withdraw").on('click', withdrawFromChecking);

	//Saving withdraw function
	const withdrawFromSaving = function () {
		let withdrawAmount = parseInt($("#savings-amount").val());
		if (savingBalance >= withdrawAmount) {
			savingBalance = savingBalance - withdrawAmount;
		} else if ((checkingBalance + savingBalance) >= withdrawAmount) {
			let excessAmount = withdrawAmount - savingBalance; // define excess amount
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
