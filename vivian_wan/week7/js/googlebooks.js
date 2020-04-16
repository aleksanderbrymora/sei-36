const book = function () {
    let bookWord = document.getElementById('cover').value
    const gbook = new XMLHttpRequest();
    gbook.open( "GET", `https://www.googleapis.com/books/v1/volumes?q=title:${ bookWord }`);
    gbook.send();
    gbook.onreadystatechange = function () {
        if ( gbook.readyState !== 4 ) {
            return;
        }
        const data = JSON.parse( gbook.responseText );
        const booktitle = data.items[0].volumeInfo.title
        const bookStory = data.items[0].volumeInfo.imageLinks.thumbnail
        const bookauthor = data.items[0].volumeInfo.authors

        const t = document.createElement('p');
        t.innerHTML = booktitle;
        document.body.appendChild(t);

        const img = document.createElement("img");$(document).ready(function () {
  $('form').on('submit', function (event) {
    event.preventDefault();

    const bookTitle = $('#book_title').val();
    const url = `https://www.googleapis.com/books/v1/volumes?q=title:${ bookTitle }`;
    $.ajax(url).done(function (data) {
      const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
      $('#cover').attr('src', cover);
    }).fail(function () {
      alert('Something bad happen');
    })
  });
});
        img.src = bookStory;
        document.body.appendChild(img);

        const a = document.createElement('p');
        a.innerHTML = bookauthor;
        document.body.appendChild(a);
        };const generateURL = function (p) {
            return [
              'http://farm',
              p.farm,
              '.static.flickr.com/',
              p.server,
              '/',
              p.id,
              '_',
              p.secret,
              '_q.jpg' // Change this to something else for different sizes (see docs)
            ].join('');
          }
    };

    document.getElementById('bookinfo').addEventListener('click', book);



