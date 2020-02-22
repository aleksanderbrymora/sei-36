// console.log("HELLO");
//
// let pageNode = document.body;
// pageNode.style.fontFamily = "Arial, sans-serif";
// pageNode.style.backgroundColor = "pink";
//
// document.querySelector('#nickname').innerHTML = "thickie";
// document.querySelector('#favorites').innerHTML = "music, train lines, blurred lines";
// document.querySelector('#hometown').textContent = "ibiza";
//
// liNode = document.getElementsByTagName('li');
//
// for (let i = 0; i < liNode.length; i++) {
//   liNode[i].className = "listitem";
//   // liNode[i].style.color = 'red'
//   document.querySelectorAll('.listitem')[i].style.color = 'red';
// };
//
// let newImg = document.createElement('img');
// newImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTioT0b6ai2L2kMK_GPltpYBKrHsLAAChI0NFFG64WI-8CBz6Cj";
// pageNode.append(newImg);



// - Create a new Javascript file and link to it with a script tag at the bottom.
// - (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
// - (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
// - Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// - Create a new img element and set its src attribute to a picture of you. Append that element to the page.

$('body').css({'background-color':'pink'});
$('#nickname').html('Thickshake');
$('span#favorites').html('music, women and reading glasses');
$('#hometown').html('ibiza');

for (let i = 0; i < $('li').length; i++) {
  $('li').eq(i).addClass('listitem');
};

$('body').append('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTioT0b6ai2L2kMK_GPltpYBKrHsLAAChI0NFFG64WI-8CBz6Cj">');

$('.listitem').css({'color':'pink', 'background-color':'red'});
$('h1').funText(33, 'candy');
