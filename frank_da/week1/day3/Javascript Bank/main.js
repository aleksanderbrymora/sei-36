const bank = {
    accounts: [
        {name: 'frank', balance: 45},
        {name: 'lawrrence', balance: 99}
    ],
    showSum: function () {
        let sum = 0;
        for (let i = 0; i < this.accounts.length; i ++){
            let accountBalance = Object.values(this.accounts[i])
            sum += accountBalance[1]
        }
        return 'Sum of all accounts is ' + sum;
    },
    addAccount: function (name, balance=0) {
        let newAccount = {};
        newAccount.name = name;
        newAccount.balance = balance;
        this.accounts.push(newAccount);
        return console.log(`New account` , newAccount, `is added`);
    },
    changeBalance: function (name, money) {
        for (let i = 0; i < this.accounts.length; i ++){
            if (this.accounts[i].name === name) {
                this.accounts[i].balance += money;
                if (this.accounts[i].balance < 0) {
                    return 'You don\'t have enough balance';
                } else {
                    return `(${ this.accounts[i].name })'s balance changed to ${ this.accounts[i].balance }`;
                }
            } else {
                return 'The name you entered has no account';
            }
        }
    },
    transfer: function (name1, name2, money) {
        // change account1 balance first
        for (let i = 0; i < this.accounts.length; i ++){
            if (this.accounts[i].name === name1) {
                this.accounts[i].balance -= money;
                if (this.accounts[i].balance < 0) {
                    return '(${ this.accounts[i].name }) doesn\'t have enough balance';
                } else {
                    console.log(`(${ this.accounts[i].name })'s balance changed to ${ this.accounts[i].balance }`);
                }
            }
        }
        // change account2 balance
        for (let i = 0; i < this.accounts.length; i ++){
            if (this.accounts[i].name === name2) {
                this.accounts[i].balance += money;
                console.log(`(${ this.accounts[i].name })'s balance changed to ${ this.accounts[i].balance }`);
            }
        }
    }
}
