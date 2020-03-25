currentPage = 1;
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
    '_q.jpg' // Change this to something else for different sizes (see docs)
  ].join('');
}

const showImages = function (results) {
  console.log( results ); // For debugging.
  _( results.photos.photo ).each(function (photo) {
    const thumbnailURL = generateURL(photo);
    const $img = $('<img>', {src: thumbnailURL});
    $img.appendTo('#images');
  });
};

const searchFlickr = function (words) {
  if (aRequestIsInProgressAlready) {
  return;
  } else {
    console.log('Searching Flickr for', words);
    const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
    $.getJSON(flickrURL, {
      method: 'flickr.photos.search',
      api_key: '2f5ac274ecfac5a455f38745704ad084', // This is not a secret key
      text: words,
      format: 'json',
      page: currentPage++
    }).done(showImages);
  }  
};

$(document).ready(function () {
  $('form#search').on('submit', function (event) {
    event.preventDefault(); // Don't go anywhere.

    const term = $('#query').val();
    searchFlickr( term );
  });

  // Extremely twitchy: TODO: chill out
  $(window).on('scroll', function () {
    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    if (scrollBottom < 100) {
      const term = $('#query').val();
      _.delay(searchFlickr( term ), 1000);
    }
  });
});
