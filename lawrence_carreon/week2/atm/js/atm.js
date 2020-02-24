//object that interacts with the DOM
const ui = {
    update: function(action, account){    
        const transaction = +parseFloat($(`#${account}-amount`).val()).toFixed(2); //+ is added to trim the leading zero from the number after rounding
        logic.changeAccountAmounts(transaction, account, action); 
    },

    userMessage: function(isTransactionValid, account, amount, action){
        if(isTransactionValid){
            $(".clear").html(`<br>You have successfully made a ${action} of $${amount}!`);
            $(`#checking-balance`).html(`$${logic.checking}`);
            $(`#savings-balance`).html(`$${logic.savings}`);
            $(`#${account}-amount`).val("");
        }else{
            $(".clear").html(`<br>Invalid ${action} transaction attempt made on the ${account} account!<br>(You either attempted to withdraw more than what is in both checking or savings or have invalid inputs)`);
        };
    },
};

//object that performs the balance calculations
const logic = {
    checking: 0.00,
    savings: 0.00,

    changeAccountAmounts: function(amount, account, action){
        if( ((this.checking + this.savings) - amount < 0 && action === "withdraw")|| isNaN(amount) ){return ui.userMessage(false, account, amount, action)};
        if( account === "checking" && this.checking < amount && action === "withdraw"){
            this.savings -= ( amount - this.checking );
            this.checking = 0;
        }else if( action === "withdraw"){
            this[account] -= amount;
        }else{
            this[account] += amount;
        };
        ui.userMessage(true, account, amount, action)
    },
};

$(document).ready(function(){
    $("[type='button']").on("click", function(){
        ui.update($(this).val(), $(this).attr("account"));
    }); //event handler for buttons
    $("[type='text']").on("click", function(){
        $(".clear").html("");
    }); //event handler for text fields
});