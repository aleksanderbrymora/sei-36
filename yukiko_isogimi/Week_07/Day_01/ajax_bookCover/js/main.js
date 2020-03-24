const fetchFact = function () {
  document.getElementById('placehere').innerHTML="";
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return;
    }

    const data = JSON.parse( xhr.responseText );
    const bookInfo = data.items[0].volumeInfo;
    const bookTitle = bookInfo.title;
    const bookCover = bookInfo.imageLinks.thumbnail;

    const p = document.createElement('p');
    p.innerHTML = bookTitle;
    document.getElementById('placehere').appendChild(p);

    const img = document.createElement('img');
    img.src = bookCover;
    document.getElementById('placehere').appendChild(img);

};

  book = document.getElementById('bookInfo').value;
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${book}`);
  xhr.send();
};

document.getElementById('fetch').addEventListener('click', fetchFact);












// AJAX
// Asychronous
// Javascript
// And
// XML
