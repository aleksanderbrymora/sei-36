<<<<<<< HEAD
const validateCreditCard = function (card) {
    let result = {};
    let pureCard = card.split('-').join('');
    let digitCheck = [];
    let twoDigitsCheck = [];
    let sum = 0;

    // check last digit first
    if (parseInt(card[card.length-1]) % 2) {
        result.valid = false;
        result.number = card;
        result.error = 'final digit is not even';
        return result;
    }

    // check if there are any letters in it
    if (isNaN(pureCard)){
        result.valid = false;
        result.number = card;
        result.error = 'invalid characters';
        return result;
    }

    // check number is 16 digits
    if (pureCard.length < 16) {
        result.valid = false;
        result.number = card;
        result.error = 'card number is less than 16';
        return result;
    }

    // check if there is only 1 digit （is there a easier way to do this)
    for (let i = 0; i < pureCard.length; i ++) {
        if (!digitCheck.includes(pureCard[i])){
            digitCheck.push(pureCard[i]);
        }
    }
    if (digitCheck.length === 1) {
        result.valid = false;
        result.number = card;
        result.error = 'only one type of number';
        return result;
    }

    // check sum of all digits
    for (let i = 0; i < pureCard.length; i ++) {
        sum = sum + parseInt(pureCard[i]);
        // sum += + pureCard[i];
        // sum += Number(pureCard[i]);
    }
    if (sum < 16) {
        result.valid = false;
        result.number = card;
        result.error = 'sum less than 16';
        return result;
    }
}

card1 = '9999-9999-8888-0000';
card2 = '4444-4444-4444-4444';
card3 = '1111-1111-1111-1110';
card4 = 'a923-3211-9c01-1112';
console.log(validateCreditCard(card2));
=======
const validateCreditCard = function (card) {
    let result = {};
    let pureCard = card.split('-').join('');
    let digitCheck = [];
    let twoDigitsCheck = [];
    let sum = 0;

    // check last digit first
    if (parseInt(card[card.length-1]) % 2) {
        result.valid = false;
        result.number = card;
        result.error = 'final digit is not even';
        return result;
    }

    // check if there are any letters in it
    if (isNaN(pureCard)){
        result.valid = false;
        result.number = card;
        result.error = 'invalid characters';
        return result;
    }

    // check number is 16 digits
    if (pureCard.length < 16) {
        result.valid = false;
        result.number = card;
        result.error = 'card number is less than 16';
        return result;
    }

    // check if there is only 1 digit （is there a easier way to do this)
    for (let i = 0; i < pureCard.length; i ++) {
        if (!digitCheck.includes(pureCard[i])){
            digitCheck.push(pureCard[i]);
        }
    }
    if (digitCheck.length === 1) {
        result.valid = false;
        result.number = card;
        result.error = 'only one type of number';
        return result;
    }

    // check sum of all digits
    for (let i = 0; i < pureCard.length; i ++) {
        sum = sum + parseInt(pureCard[i]);
    }
    if (sum < 16) {
        result.valid = false;
        result.number = card;
        result.error = 'sum less than 16';
        return result;
    }
}

card1 = '9999-9999-8888-0000';
card2 = '4444-4444-4444-4444';
card3 = '1111-1111-1111-1110';
card4 = 'a923-3211-9c01-1112';
console.log(validateCreditCard(card2));
>>>>>>> 74124ff7134751ac20686ab9e194db26c2ea52d1
