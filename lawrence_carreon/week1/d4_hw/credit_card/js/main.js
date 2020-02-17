const creditCard = {
    card: {
        valid: true,
        number: ``,
        error: ``
    },

    // I designed my validation function to pass to other "helper" functions so I could log every possible error that was made with the card entry before returning the card object
    // It makes the code a lot easier to read, sorry about the excessive "this" though -> "this" refers to the object the function or key is stored in. (in this case this.card === creditCard.card) 
    // I am also assumming that the card is not going to have other characters on its edges
    // the expiry date format must be MM-DD-YYYY
    validateCreditCard: function(cardNumber, expiry){
        this.card.error = ``; // empties the errors field before starting again.
        this.card.number = cardNumber;
        cardNumber = cardNumber.toLowerCase().replace(/[-]/g, ""); // this expression finds ALL instances of dashes in the string
        const cardNumArray = cardNumber.split("");
        const checkExpiry = new Date ( expiry );
        this.checkNumLength(cardNumArray);
        this.checkDate(checkExpiry);
        this.checkInvalidChars(cardNumArray);
        this.checkTwoDigits(cardNumArray);
        this.checkFinalDigit(cardNumArray);
        this.checkSumOfDigits(cardNumArray);
        this.card.error = this.card.error.trim() // gets rid of any white spaces at the end of the string!
        return this.card;
    },

    checkNumLength: function(numArray){
        if(numArray.length < 16){
            this.card.error += `invalid_card_length | `;
            this.card.valid = false;
        };
    },

    checkDate: function(date){
        if( date === undefined ){
            this.card.error += `invalid_expiry_date | `;
            this.card.valid = false;
            return;
        };
        const dateToInt = date.getTime(); // I am converting the date to milliseconds from Jan 01 1970 to compare
        const currentTimeInt = new Date().getTime();
        if( dateToInt < currentTimeInt ){
            this.card.error += `card_expired | `;
            this.card.valid = false;
        };
    },

    checkInvalidChars: function(numArray){
        //converts joins and then converts the "card number" passed into an integer, which will result in NaN if it has any letters in it
        const toInteger = parseInt(numArray.join(""));
        if( isNaN(toInteger) ){
            this.card.error += `invalid_characters_detected | `
            this.card.valid = false;
        }
    },

    checkTwoDigits: function(numArray){
        const checkDupes = [...new Set(numArray)]; // generates a "Set", which is an array with no duplicates
        if(checkDupes.length < 2){
            this.card.error += `use_more_than_one_type_of_number | `;
            this.card.valid = false;
        }; //if checkDupes is less than two it would mean the card number has more than 1 different kind of character in it
    },

    checkFinalDigit: function(numArray){
        //easy enough, we check if the last indexed character is even or not
        if( numArray[15] % 2 !== 0){
            this.card.error += `last_digit_must_be_even | `;
            this.card.valid = false;
        };
    },

    checkSumOfDigits: function(numArray){
        //use reduce() to evaluate the value of our card number, look up the MDN docs to find out more about this array method
        const sumOfDigits = numArray.reduce((total,element) => parseInt(total) + parseInt(element)); // don't forget to turn those string elements to integers! 
        if( sumOfDigits <= 16 ){
            this.card.error += `sum_of_digits_less_than_16 | `;
            this.card.valid = false;
        };
    }
};