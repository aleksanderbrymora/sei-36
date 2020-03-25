$(document).ready(function() {

  const requestJoke = function(direction) {
    $.ajax('https://icanhazdadjoke.com/', {
      headers: {
        Accept: "application/json"
      },
      success: function(data) {
        console.log(direction);
        const joke = data.joke;
        const $div = $(`<div align="center"><p>${joke}</p></div>`);
        $('#log_container').append($div);
      },
      error: function(data) {
        alert('Request failed.');
      }
    });
  };

  const addFace = function(direction) {
    if (direction === 'left') {
      $('#not_funny').prop({'type':'image','src':'images/not_funny.jpg'});
      setTimeout(removeFace, 200);
    } else {
      $('#funny').prop({'type':'image','src':'images/funny.jpg'});
      setTimeout(removeFace, 200);
    }
  };

  const removeFace = function(direction) {
    $('.choice').prop({'type':'button','src':''});
  }

  requestJoke();

  $('#not_funny').on('click', function() {
    $('#log_container div:last-child').attr('align','left').addClass('left');
    let $count = + $('#not_funny_count').html() + 1;
    $('#not_funny_count').html($count);
    addFace('left');
    requestJoke('left');
  });
  $(document).on('keyup', function(event) {
    if (event.keyCode === 37) {
      $('#not_funny').click();
    }
  })

  $('#funny').on('click', function() {
    $('#log_container div:last-child').attr('align','right').addClass('right');
    let $count = + $('#funny_count').html() + 1;
    $('#funny_count').html($count);
    addFace('right');
    requestJoke('right');
  });
  $(document).on('keyup', function(event) {
    if (event.keyCode === 39) {
      $('#funny').click();
    }
  })



})
