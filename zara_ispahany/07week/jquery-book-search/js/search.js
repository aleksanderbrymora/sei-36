$(document).ready(function () {
  $('form').on('submit', function (event) {
    event.preventDefault();

    // get book title
    const bookTitle = $('#book-title').val();
    // create google books url
    const url = `https://www.googleapis.com/books/v1/volumes?q=title:${ bookTitle }`;
    // make the request
    $.ajax(url).done(function (data) {
      // done():
      //  get the cover
      const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
      //  display the cover
      $('#cover').attr('src', cover);
    }).fail(function () {
      alert('Something bad happen');
    })
  });
});
