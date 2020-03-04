// $(document).ready(function () {
//   $('#name').on('focus', function () {
//     $('header').addClass('active');
//   });
//   $('#name').on('blur', function () {
//     $('header').removeClass('active');
//   });
// });

//chaining
$(document).ready(function () {
  $('#name').on('focus', function () {
    $('header').addClass('active');
  }).on('blur', function () {
    $('header').removeClass('active');
  }).on('keyup', function () {
    const input = $(this).val();
    $('header h1').text(`Welcome ${input}`);
  });

  const $bill = $('img'); //cacheing
  $(window).on('mousemove', function(event) {
    const opacity = event.clientY / window.innerHeight;
    $bill.css('opacity', opacity);

    const randomColor = function () {
      return Math.random() * 255;
    };

    const $body = $('body');
    $(window).on('mousemove', function() {
      const bgColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
      $body.css('background-color', bgColor);
    });
  });
});
