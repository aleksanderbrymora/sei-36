const fetchFact = function () {

  document.getElementById('book-result').innerHTML = "";

  let bookWord = document.getElementById('search-box')
  let bookName = bookWord.value

  const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return; 
    }

    // console.log(xhr.responseText);

    const data = JSON.parse( xhr.responseText );
    const bookInfo = data.items[0].volumeInfo;
    const bookTitle = bookInfo.title;
    const bookCover = bookInfo.imageLinks.thumbnail;

    // console.log(bookTitle);

    document.getElementById('book-result').classList.add('resultBorder');

    const p = document.createElement('p');
    p.innerHTML = bookTitle
    document.getElementById('book-result').appendChild(p);

    const img = document.createElement('img');
    img.src = bookCover;
    document.getElementById('book-result').appendChild(img);
  };
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${ bookName }`);
  xhr.send();
};

document.getElementById('search-btn').addEventListener('click', fetchFact);
