const checkBalanceForBackground = function () {
    const $balance = $('.balance') ;
    for (let i = 0; i < $balance.length; i++) {
        const balance = parseInt($balance.eq(i).text().slice(1));
        if (balance === 0) {
            $balance.eq(i).parent().css('background-color', 'red');
        }
    }
}

const deposit = function () {
    $('input[type="button"][value="Deposit"]').on('click', function () {
        $input = $(this).prev();
        $balance = $(this).prev().prev();
        const increase = parseInt($balance.text().slice(1)) + parseInt($($input).val());
        $balance.text('$' + increase);
        if (parseInt($balance.text().slice(1)) > 0) {
            $(this).parent().css('background-color', 'grey');
        };
    });
}

const withdraw = function () {
    $('input[type="button"][value="Withdraw"]').on('click', function () {
        const checkBalance = parseInt($('#checking-balance').text().slice(1));
        const savingsBalance = parseInt($('#savings-balance').text().slice(1));        
        const total = checkBalance + savingsBalance;
        const withdraw = parseInt($(this).prev().prev().val());
        $input = $(this).prev().prev();
        $otherBalance = $('.balance').not($(this).prev().prev().prev());
        $thisBalance = $(this).prev().prev().prev();
        const thisBalance = parseInt($thisBalance.text().slice(1));

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