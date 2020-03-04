// all code waits for DOM to be ready
$(document).ready(function() {

  // - Create a new Javascript file and link to it with a script tag at the bottom.
  // - Create a variable to store a reference to the img.
  // - Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
  // - Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
  // - Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
  //
  // const cat = document.getElementById('cat');
  // cat.style.left = "425px";
  const $cat = $('#cat').css({'left':'425px'});

  $('body').keydown(function(e) {
    event.preventDefault();
    if (e.keyCode === 37) {
      // goes left...
      $('#cat').animate({'left':'-=10px'}, 'fast');
    };
  });
  $('body').keydown(function(e) {
    event.preventDefault();
    if (e.keyCode === 38) {
      //goes up...
      $('#cat').animate({'top':'-=10px'}, 'fast');
    };
  });
  $('body').keydown(function(e) {
    event.preventDefault();
    if (e.keyCode === 39) {
      //goes right
      $('#cat').animate({'left':'+=10px'}, 'fast');
    };
  });
  $('body').keydown(function(e) {
    event.preventDefault();
    if (e.keyCode === 40) {
      //goes down
      $('#cat').animate({'top':'+=10px'}, 'fast');
    };
  });


  // const timerID = setInterval(function() {
  //
  //   $cat.animate({'left':'+=10px'}, 'fast')
  //   console.log(parseInt($cat.css('left')));
  //   if (parseInt($cat.css('left')) > 650) {
  //     clearInterval(timerID);
  //     $cat.css({'left':'650px'});
  //     console.log("HEY");
  //   };
  // }, 30
  // );

  // const catWalk = function() {
  //   let oldLeft = parseInt($cat.css('left'));
  //   let newLeft = oldLeft + 1;
  //   $cat.css
  //   cat.style.left = newLeft +'px';
  //   if (parseInt(cat.style.left) > 650) {
  //     clearInterval(timerID);
  //   }
  // };
  //
  // const timerID = setInterval(catWalk, 30);



  const gun_left = document.getElementById('gun_left');
  gun_left.style.visibility = 'hidden';

  const left_x = document.getElementById('left_x');
  const right_x = document.getElementById('right_x');
  const o = document.getElementById('o');
  left_x.style.visibility = 'hidden';
  right_x.style.visibility = 'hidden';
  o.style.visibility = 'hidden';

  const gunShot = function() {
    gun_left.style.visibility = 'visible';
    left_x.style.visibility = 'visible';
    right_x.style.visibility = 'visible';
    o.style.visibility = 'visible';


  };

  setInterval(gunShot, 7000);


  //cat slowly coming out of the forest, cheser cat
  //cat moving from behind a dressing curtain

});
