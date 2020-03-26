const getBookData = function(){
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function (){
    if (xhr.readyState !== 4){
      return;
    }
    const book = JSON.parse(xhr.responseText);

    const img = document.getElementById('book_img');
    img.src = book.items[0].volumeInfo.imageLinks.thumbnail;

  }
  const book_title = document.getElementById('book_title').value
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=${book_title}`)
  xhr.send();
};

document.getElementById('search').addEventListener('click', getBookData);
