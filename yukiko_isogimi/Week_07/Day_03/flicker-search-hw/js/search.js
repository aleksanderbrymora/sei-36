// console.log($.fn.jquery, _.VERSION);

const state = {
   currentPage :1,
   requestInProgress: false
};

const generateURL = function (p) {
  // console.log(p);
  return [
    'http://farm',
    p.farm,
    '.static.flickr.com/',
    p.server,
    '/',
    p.id,
    '_',
    p.secret,
    '_q.jpg'//change this to something else for different sizes ( see docs )

  ].join('');

}

const showImages = function (results) {
  console.log( results );
  _.each(results.photos.photo,function (photo) {
    // console.log(generateURL);
    const thumbnailURL = generateURL(photo);
    // console.log(generateURL);
    const $img = $('<img>',{src: thumbnailURL});
    $img.appendTo('#images');

  });
};

const searchFlickr = function (words){
  if (state.requestInProgress === true){
    return;
  }
  console.log('Searching Flickr for', words);

  state.requestInProgress = true;

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
  $.getJSON(flickrURL, {

    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084', // This is not a secret key
    text: words,
    page: state.currentPage++,
    format: 'json'
  }).done(showImages).done(function () {
    state.requestInProgress = false;
  });

};



$(document).ready(function(){
  $('form#search').on('submit',function(event){
    event.preventDefault(); //Dont go anywhere

    state.currentPage = 1;
    //find the search term
    const term = $('#query').val();
    searchFlickr( term );
  });

  //Extremely twitchy : todo chill out
  $(window).on('scroll', function () {
    // console.log('scroll' + Math.random());
    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    if (scrollBottom < 700) {
      const term = $('#query').val();
      // currentTerm = term;
      searchFlickr( term );
    }

  });

});
