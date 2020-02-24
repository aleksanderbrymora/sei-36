console.log("Let's tango! cha cha cha");

// - Add an event listener to the button so that it calls a makeMadLib function when clicked.
// - In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")

// const button = document.getElementById('lib-button');
//
// const makeMadLib = function() {
//   const noun = document.getElementById('noun').value;
//   const adj = document.getElementById('adjective').value;
//   const name = document.getElementById('person').value;
//
//   let result = document.createElement('p');
//   result.textContent = `${name} really likes ${adj} ${noun}.`;
//   document.body.appendChild(result);
// }
//
// button.addEventListener('click', makeMadLib);

// - Add an event listener to the button so that it calls a makeMadLib function when clicked.
// - In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")

$('body').css({'display':'inline-block'});

$('body').append('<div class="right">');
let $childs = $('body').children();


const makeMadLib = function() {
  let $noun = $('input#noun');
  let $adj = $('#adjective');
  let $person = $('input#person');
  let $message = `${$person} really likes ${$adj} ${$noun}!`;
  $('.right').append($message);
}

$('#lib-button').on('click', makeMadLib);
