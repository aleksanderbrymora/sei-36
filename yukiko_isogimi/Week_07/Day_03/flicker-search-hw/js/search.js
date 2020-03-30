const state = {
  currentPage: 1,
  lastPageReached: false
};

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
  if (state.lastPageReached === true) {
    return;
  }

  console.log('Searching Flickr for', words);

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084', // This is not a secret key
    text: words,
    format: 'json',
    page: state.currentPage++ // increment currentPage for the next iteration
  }).done(showImages).done(function (data) {
    if (data.photos.page >= data.photos.pages) {
      state.lastPageReached = true;
    }
  });
};

$(document).ready(function () {
  $('form#search').on('submit', function (event) {
    event.preventDefault(); // Don't go anywhere.

    state.currentPage = 1;
    state.lastPageReached = false;

    $('#images').empty();

    const term = $('#query').val();
    searchFlickr( term );
  });

  const debouncedSearchFlickr = _.debounce(searchFlickr, 4000, {trailing: false});

  // Extremely twitchy
  $(window).on('scroll', function () {
    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    if (scrollBottom < 700) {
      const term = $('#query').val();
      debouncedSearchFlickr( term );
    }
  });
});
