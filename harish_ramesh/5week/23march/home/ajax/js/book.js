const fetchBook = function () {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return;
    }

    const data = JSON.parse( xhr.responseText );

    const img = document.createElement('img');
    img.src = data.items[0].volumeInfo.imageLinks.smallThumbnail;

    document.getElementById('image').appendChild(img);
  };

  let link = `https://www.googleapis.com/books/v1/volumes?q=title:${document.getElementById('book').value}`

  xhr.open('GET', link); // ready state 1
  xhr.send(); // Asynchronous // ready state 2 and 3 and 4
};

document.getElementById('fetch').addEventListener('click', fetchBook);
// fetchFact();
