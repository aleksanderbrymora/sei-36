$( document ).ready(function() {
    // console.log( "ready!" );
    // Define two variables that store the balance of checking and savings
		let checkingBalance = 0;
		let savingBalance = 0;

		// Create a function that lets a user deposit money to checking
    const $addToChecking = function () {
			checkingBalance = $("#checking-amount").val();
	    $("#checking-balance").html(checkingBalance);
		}
		$("#checking-deposit").on('click', $addToChecking)

		const $addToSaving = function () {
			savingBalance = $("#savings-amount").val();
			$("#savings-balance").html(savingBalance);
		}
		$("#savings-deposit").on('click', $addToSaving)
		// Create a function that lets a user withdraw money

		// checking withdraw
		const $withdrawChecking = function () {
			let withdrawAmount;
			withdrawAmount = $("#checking-amount").val();
			if (checkingBalance < withdrawAmount) {
				alert("Sorry you dont have enough funds")
			} else {
				checkingBalance = checkingBalance - withdrawAmount;
			}
			$("#checking-balance").html(checkingBalance);
		}
		$("#checking-withdraw").on('click', $withdrawChecking);

		//saving withdraw
		const $withdrawSaving = function () {
			let withdrawAmount;
			withdrawAmount = $("#savings-amount").val();
			if (savingBalance < withdrawAmount) {
				alert("Sorry you dont have enough funds")
			} else {
				savingBalance = savingBalance - withdrawAmount;
			}
			$("#savings-balance").html(savingBalance);
		}
		$("#savings-withdraw").on('click', $withdrawSaving);

		$("#checking-balance").html(checkingBalance);
		$("#savings-balance").html(savingBalance);

});
