console.log("HEY");

var books = [
  {title: 'The Design of EveryDay Things',
   author: 'Don Norman',
   alreadyRead: false
  },
  {title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true
  }];

// const ul = document.createElement('ul');
//
//
// for (let i = 0; i < books.length; i++) {
//   const book = books[i];
//   const bookInfo = `${book.title} by ${book.author}.`
//
//   const li = document.createElement('li');
//   li.innerHTML = bookInfo;
//
//   if (book.alreadyRead) {
//     li.className = 'read';
//   }
//
//   ul.appendChild(li);
//
// };
//
// document.body.appendChild(ul); // perform afterwards to minimise amount of DOM manipulation
// console.log(ul);

// - Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
// - Bonus: Use a ul and li to display the books.
// - Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
// - Bonus: Change the style of the book depending on whether you have read it or not.

const $ul = $('<ul>');

for (let i = 0; i < books.length; i++) {
  const $book = $('<li>').html(`${books[i].title} by ${books[i].author}.`);
  $ul.append($book);
  if (books[i].alreadyRead) {
    $book.css({'color':'#00FF00','background-color':'#FF00FF'});
  }
}

$('body').append($ul);
