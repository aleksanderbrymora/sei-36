// - Create a new Javascript file and link to it with a script tag at the bottom.
// - (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
// - (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
// - Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// - Create a new img element and set its src attribute to a picture of you. Append that element to the page.
$(document).ready(function(){
  $('body').css("font-family","Arial, sans-serif");
  $('#nickname').html("Kim");
  $('#favorites').html("Color Purple");
  $('#hometown').html("Quezon City, Philippines");
  $('li').addClass('listitem');
  const $image = $('<img>');
  $image.attr("src", "http://www.fillmurray.com/100/100");
  $("ul").append($image);
})

// document.body.style.fontFamily = "Arial, sans-serif";
// // document.getElementById('nickname').innerHTML = "Kim";
// document.getElementById('favorites').innerHTML = "Color purple";
// document.getElementById('hometown').innerHTML = "Quezon City, Philippines";
// const list = document.getElementsByTagName('li')
// for (let i = 0; i < list.length; i++) {
//   list[i].className = 'listitem';
// }
// const image = document.createElement('img');
// image.src ="http://www.fillmurray.com/100/100";
// document.body.appendChild(image);
