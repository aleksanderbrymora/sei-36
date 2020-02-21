$('body').keydown(function(e) {
  if (e.keyCode === 37) {
    $('img').animate({"left" : "-=100px"}, "fast");
  }
});

$('body').keydown(function(e) {
  if (e.keyCode === 39) {
    $('img').animate({"left" : "+=100px"}, "fast");
  }
});

$('body').keydown(function(e) {
  if (e.keyCode === 38) {
    $('img').animate({"top" : "-=100px"}, "fast");
  }
});

$('body').keydown(function(e) {
  if (e.keyCode === 40) {
    $('img').animate({"top" : "+=100px"}, "fast");
  }
});
