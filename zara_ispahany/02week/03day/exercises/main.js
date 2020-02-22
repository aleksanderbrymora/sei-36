// - Create a new Javascript file and link to it with a script tag at the bottom.
// - (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
document.body.style.fontFamily = "Arial, sans-serif"; //yay

// - (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
const nickname = document.getElementById('nickname'); //step 1 to get the nickname
nickname.innerHTML = 'Okaayfinee';

document.getElementById('hometown').innerHTML = 'Ctown';

document.getElementById('favorites').innerHTML = 'dragons';

// - Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
const listItems = document.querySelectorAll('li'); // .getElementsByTagName('tagName')
for (let i = 0; i < listItems.length; i++) {
  const listItem = listItems[i];
  listItem.className = 'listitem'; //style.css item
}

// - Create a new img element and set its src attribute to a picture of you. Append that element to the page.

const bill = document.createElement('img'); //Detached to the DOM
bill.src = 'http://www.fillmurray.com/80/150';
document.body.appendChild(bill); //Attach to the dom
