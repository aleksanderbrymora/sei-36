// CALLBACKS REVIEW //////////////////////////////////////////////////////////

// A callback function is a function provided to another function
// which calls your function for you, at some later point in time

// Timers
console.log('A');
setTimeout(function() {
  console.log('B');
}, 4000);
console.log('C');

// jQuery's document ready
// will output as 1, 3 ,2
console.log('I: before the document ready');
$(document).ready(function () {
  console.log('II: the document is now ready');
});
console.log('III: after the document ready');

// Event handlers:
console.log('Groucho');
$(document).on('click', function () {
  console.log('Harpo');
});
console.log('Chico');

// NOT EXPECTED TO UNDERSTAND
const colors = ['red', 'orange'];

const each = function (someArray, callbackFunction) {
  for (let i = 0; i < someArray.length; i++) {
    callbackFunction( someArray[i] );
  }
};

each(colors, function (c) {
  console.log(c);
});

each(['Groucho', 'Harpo', 'Chico'], function (brother) {
  console.log(brother.toUpperCase());
});

colors.forEach(function (anything) {
  console.log(anything);
});
