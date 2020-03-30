
const state = {
  currentPage: 1,
  requestInProgress: false
};




const generateURL = function(p) {
  return [
    'http://farm',
    p.farm,
    'static.flickr.com/',
    p.server,
    '/',
    p.id,
    '_',
    p.secret,
    '_q.jpg'
  ].join('');
}

const showImages = function(results) {
  console.log( results )
  _.each(results.photo.photo ).each(function(photo){
    const thumbnailURL = generateURL(photo);
    const $img = ('<img>', {src: thumbnailURL});
    $img.appendTo('#images');
  });
};

const searchFlickr = function(words){
  if (state.requestInProgress === true ){
    return;
  }
  console.log( "Searching Flickr for", words);
  state.requestInProgress = true;
  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: 'json',
    page: state.currentPage ++
  }).done(showImages).done(function(){
    state.requestInProgress = false;
  });
};

$(document).ready(function(){
  $('form#search').on('submit', function(event){
    event.preventDefault();

    state.currentPage = 1;

    const term = $('#query').val();
    searchFlickr( term );
  });

  $(window).on('scroll', function(){
    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
  if (scrollBottom < 700) {
    const term = $('#query').val();
    searchFlickr( term );
      }
    });
  });
