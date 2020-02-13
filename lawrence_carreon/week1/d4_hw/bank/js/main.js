let bank = 
{  
    account: {
        "Joe Blow": 15000.00,
        "Donald Trump": 0.00,
        "Fred Trump": 200000000.00
    },

    moneyInBank: function(){
        const totalMoney = Object.values(bank.account).reduce((total, currentElement) => total + currentElement); 
        return `There is $${totalMoney} in this bank. Please don't rob us!`;
    },

    addAccount: function(name, balance){
        this.account[name] = balance;
        return `${name}'s has been made with a balance of: ${balance}`;
    },

    withdraw: function(name, amount){
        //makes sure that users can't go into the negative
        if( this.account[name] - amount < 0){
            return `You broke bruh! You can only withdraw $${this.account[name]} or less`
        };
        //checks for a valid user by checking for an undefined value, because an undefined key will have an undefined value
        if( this.account[name] === undefined){
            return `MoneyGrubbers doesn't have an account under the name: ${name}`;
        };
        //makes sure that the amount being entered is a number
        if( isNaN(amount) ){
            return `MoneyGrubbers can't make this transaction, please try again.`
        }
        this.account[name] -= amount;
        return `Thanks for sticking with MoneyGrubbers!

        You withdrew: $${amount}
        Current balance: $${this.account[name]}`;
    },

    deposit: function(name, amount){
        if( this.account[name] === undefined){
            return `MoneyGrubbers doesn't have an account under the name: ${name}`;
        };
        if( isNaN(amount) ){
            return `MoneyGrubbers can't make this transaction, please try again.`
        }
        this.account[name] += amount;
        return `Your deposit of $${amount} has been made!
        Your current balance is: $${this.account[bank]}
        Thanks for using MoneyGrubbers!`
    },

    transfer( giver, receiver, amount ){
        if( this.account[giver] === undefined || this.account[receiver] === undefined){
            return `MoneyGrubbers doesn't have one of the clients in this transfer!`;
        };
        if( this.account[giver] - amount < 0){
            return `You broke bruh! You can only transfer $${this.account[giver]} or less`
        };
        this.account[giver] -= amount;
        this.account[receiver] += amount;
        return `Your transaction was completed!
        Transferred amount: $${amount}
        ${giver}'s new balance: $${this.account[giver]}
        ${receiver}'s new balance: $${this.account[receiver]}`;
    }
}

