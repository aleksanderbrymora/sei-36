console.log("HE")

// - Create a new Javascript file and link to it with a script tag at the bottom.
// - For each operation, create an event listener for the button, and when it's clicked, find the value of the appropriate input and show the result of the calculation in the solution div.
// - Bonus: respond to key presses so that the user doesn't have to click the button.

const square_button = document.querySelector('#square-button');
const square = function() {
  const number = document.querySelector('#square-input').value;
  const result = number ** 2;
  console.log(result);
}
square_button.addEventListener('click', square);

const half_button = document.querySelector('#half-button');
const half = function() {
  const number = document.querySelector('#half-input').value;
  const result = number / 2;
  console.log(result);
}
half_button.addEventListener('click', half);


const percent_button = document.querySelector('#percent-button');
const percent = function() {
  const fraction = document.querySelector('#percent1-input').value;
  const whole = document.querySelector('#percent2-input').value;
  const result = fraction / whole;
  console.log(`${result*100}%`);
}
percent_button.addEventListener('click', percent);
