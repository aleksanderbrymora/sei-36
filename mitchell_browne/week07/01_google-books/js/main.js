const fetchBook = function(value) {

  removeBooks();

  let bookTitle = '';

  // assign book title to either input value if provided or take value from book clicked by user
  if (value === '') {
    bookTitle = document.getElementById('bookInput').value;
  } else {
    bookTitle = value;
    document.getElementById('bookInput').value = bookTitle;
  };

  // add the book title to log
  addLog(bookTitle);

  const xhr = new XMLHttpRequest();

  // display books when server has served the data
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return
    };

    let data = JSON.parse(xhr.responseText);

    displayBooks(data);
  };

  // send request to API
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${bookTitle}`);
  xhr.send();

};


// Add book title to left pane log
const addLog = function(bookTitle) {
  let p = document.createElement('p');
  p.innerHTML = bookTitle;
  document.getElementById('log_container').appendChild(p);

  document.getElementById('pileCount').innerHTML = document.getElementById('log_container').childElementCount;
}

// Remove the books from the search pane, ready for new books
const removeBooks = function(data) {
  let books = document.getElementById('bookcase');
  book = books.firstElementChild;
  while (book) {
    books.removeChild(book);
    book = books.firstElementChild;
  }
}

// Display all books from search result
const displayBooks = function(data) {

  let books = data.items

  if (books.length <= 1) {
    let h1 = document.createElement('h1');
    h1.innerHTML = 'This is your pile!';
    document.getElementById('bookcase').appendChild(h1);
    return
  }

  books.forEach((book, i) => {
    let p = document.createElement('p');
    p.innerHTML = book.volumeInfo.title;

    let img = document.createElement('img');
    img.src = book.volumeInfo.imageLinks.thumbnail;
    img.classList.add('thumbnail');

    let div = document.createElement('div');
    div.classList.add('book');
    div.addEventListener('click', function() {
      fetchBook(p.innerHTML);
    });

    div.appendChild(p);
    div.appendChild(img);

    document.getElementById('bookcase').appendChild(div)
  });
};

// Await button click, and call fetchBook function when clicked
let fetchButton = document.getElementById('fetch');
fetchButton.addEventListener('click', function() {
  fetchBook('');
});

// Await enter click from user, and call fetchButton
let bookInput = document.getElementById('bookInput');
bookInput.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    fetchButton.click();
  };
});
