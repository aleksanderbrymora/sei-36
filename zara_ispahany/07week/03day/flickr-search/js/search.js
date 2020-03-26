let currentPage = 1;
let allPages;

const generateURL = function (p) {
  return [
    'http://farm',
    p.farm,
    '.static.flickr.com/',
    p.server,
    '/',
    p.id,
    '_',
    p.secret,
    '_q.jpg'
  ].join('');
}

const showImages = function (results) {
  console.log(results);
  _( results.photos.photo ).each(function (photo) {
    const thumbnailURL = generateURL(photo);
    const $img = $('<img>', {src: thumbnailURL})
    $img.appendTo('#images');
  });
};

const searchFlickr = function (words) {
  console.log('Searching Flickr for', words);
  if (currentPage >= allPages) {
    return;
  }

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: words,
    format: 'json',
    page: currentPage++,
    pages: allPages,
  }).done(showImages);
};

$(document).ready(function () {
  $('form#search').on('submit', function (event) {
    event.preventDefault();
    currentPage = 0;

    const term = $('#query').val();
    searchFlickr( term );
  });

  $(window).on('scroll', function () {
    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    if (scrollBottom < 700) {
      const term = $('#query').val();
      searchFlickr(term);
    }
  });
});

// # AJAX Flickr Lab

// - Support infinite scroll to show all results from Flickr (eventually, after a lot of scrolling).
// perpage
// pageNumber
// toggle something ??
// timer
// timeout
// _underscore timeout
// - **Prevent your code from making too many requests**: only one at a time, please
// - Don't request more images when you reach the last "page" of Flickr results
// something = allPages ??
// results.photos.pages
// - Make sure you go back to the first page when searching for a new term!
// reset page = 0 ????????
// - Make it beautiful
// - Add other features as you see fit
// - Bonus: display larger images in an attractive slideshow
// - Bonus: add links back to each image's own page on Flickr.com
