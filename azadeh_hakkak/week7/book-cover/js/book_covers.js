
const fetchCover = function () {
  document.getElementById('picture').innerHTML="";

  const title = document.getElementById('book_title').value;
  const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) {
        return;
      }
      const data = JSON.parse(xhr.responseText);
      const image = document.createElement('img');
      image.setAttribute('src', data.items[0].volumeInfo.imageLinks.thumbnail);
      document.getElementById('picture').appendChild(image)
      document.getElementById('book_title').value="";
    }
    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${title}`);
    xhr.send();
  };

document.getElementById('fetch').addEventListener('click', fetchCover);
