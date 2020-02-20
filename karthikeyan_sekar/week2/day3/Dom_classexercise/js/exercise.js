document.body.style.fontfamily = 'Arial, sans-serif';
const nicknames = document.getElementById('nick');
const favo = document.getElementById('favor');
const homes = document.getElementById('home');
const listItems = document.querySelectorAll('li');

nicknames.innerHTML = 'yeskay';
favo.innerHTML = 'homebush';
homes.innerHTML = 'sydney';

for (let i = 0; i < listItems.length ; i++) {
  const listItem = listItems[ i ];
  listItem.className = "effects";
}
