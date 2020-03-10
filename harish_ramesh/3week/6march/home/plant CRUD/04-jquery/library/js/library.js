const books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
  }
];

$(document).ready(function () {
  const $ul = $('<ul></ul>');

  for (let i = 0; i < books.length; i++) {
    const book = books[ i ];
    const $li = $(`<li>${ book.title } by ${ book.author }</li>`);

    if (book.alreadyRead) {
      $li.addClass('read');
    }

    $li.appendTo( $ul );
  };

  $ul.appendTo( 'body' );

});



// const ul = document.createElement('ul'); // Detached DOM node.
// document.body.appendChild( ul ); // Minimise the amount of DOM manipulation
//
// for (let i = 0; i < books.length; i++) {
//   const book = books[ i ];
//   const bookInfo = `${ book.title } by ${ book.author }`;
//
//   const li = document.createElement('li');
//   li.innerHTML = bookInfo;
//
//   if (book.alreadyRead) {
//     li.className = 'read';
//   }
//
//   ul.appendChild( li );
// };
