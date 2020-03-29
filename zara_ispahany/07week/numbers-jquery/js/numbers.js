const fetchFact = function () {
  // new version
  $.ajax('http://numbersapi.com/random/trivia?json').done(function (result) {
    $('h1').after(`<p>${ result.text }</p>`);
  }).fail(function ( {
    alert('Sorry Error!')
  })); //.done you can add more and more functions like that

  // old version of ajax
  // $.ajax('http://numbersapi.com/random/trivia?json', {
  //   success: function (result) {
  //     const $p = $('<p></p>').text( result.text );
  //     $p.appendTo('body');
  //   }
  // });
};

$(document).ready(function () {
  $('#fetch').on('click', fetchFact);
  fetchFact();
});
