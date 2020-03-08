// ## Calculator
//
// Start with this webpage, which has inputs and buttons for things to calculate:
// ```html
// ```
// - Create a new Javascript file and link to it with a script tag at the bottom.
// - For each operation, create an event listener for the button, and when it's clicked, find the value of the appropriate input and show the result of the calculation in the solution div.
// - Bonus: respond to key presses so that the user doesn't have to click the button.

const $square = $('#square-input');
const squareValue = $square.val();

const $squareBtn = $('#square-button');
$squareBtn.click(function(){
    const result = squareValue * squareValue;
    $('#solution').html(result);
});
