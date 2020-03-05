const checkBalanceForBackground = function () {
    const $balance = $('.balance') ;
    for (let i = 0; i < $balance.length; i++) {
        const balance = parseInt($balance.eq(i).text().slice(1));
        if (balance === 0) {
            $balance.eq(i).parent().css('background-color', 'red');
        } else {
            $balance.eq(i).parent().css('background-color', 'grey');
        }
    }
}

const deposit = function () {
    $('input[type="button"][value="Deposit"]').on('click', function () {
        $input = $(this).prev();    // Deposit amount
        $balance = $(this).prev().prev();   // Original balance amount
        // const increase = parseInt($balance.text().slice(1)) + parseInt($($input).val());    // deposit + original
        const increase = parseInt($balance.text().slice(1)) + $($input).val(parseInt);    // deposit + original

        $balance.text('$' + increase);  // Add $ sign before the number

        checkBalanceForBackground();
    });
}

const withdraw = function () {
    $('input[type="button"][value="Withdraw"]').on('click', function () {
        $input = $(this).prev().prev();     // Withdraw amount
        $otherBalance = $('.balance').not($(this).prev().prev().prev());    // Another balance
        $thisBalance = $(this).prev().prev().prev();    // Current balance
        const total = parseInt($otherBalance.text().slice(1)) + parseInt($thisBalance.text().slice(1));
        const withdraw = parseInt($(this).prev().prev().val());
        const thisBalance = parseInt($thisBalance.text().slice(1));

        // Different situation
        if (thisBalance < withdraw && withdraw <= total) {            
            $thisBalance.text('$' + 0);
            $otherBalance.text('$' + (parseInt($otherBalance.text().slice(1)) - withdraw + thisBalance));
        } else if (withdraw <= thisBalance) {
            $thisBalance.text('$' + (thisBalance - withdraw));
        }
        checkBalanceForBackground();
    });
}

$(document).ready(function(){
    checkBalanceForBackground();
    deposit();
    withdraw();
});

// add method of parseint in jquery code