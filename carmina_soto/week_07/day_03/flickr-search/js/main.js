let count, totalPages;

const generateURL = function(p){
    return ['http://farm',
            p.farm,
            '.static.flickr.com/',
            p.server,
            '/',
            p.id,
            '_',
            p.secret,
            '_q.jpg' //Change this to something else for diff sizes (see docs)
          ].join('');
};
const showImages = function(results){
  totalPages = results.photos.pages;
  console.log(totalPages, count);
  console.log(results) //for debugging
  _(results.photos.photo).each(function(photo){
    const thumbnailURL= generateURL(photo);
    // console.log(thumbnailURL);
    const $img = $('<img>', {src: thumbnailURL, class: 'result', id: photo.id});
    $img.appendTo('#images');
  });
  count++;
  console.log(count);
};

const searchFlickr = function(words) {
  console.log('Searching Flickr for', words);
  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
  $.getJSON(flickrURL,{
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: words,
    format: 'json',
    page: count
  }).done(showImages);
};

$(document).ready(function(){
  $('form#search').on('submit', function(event){
    event.preventDefault(); // don't go anywhere
    const img_value = $('#img_search').val();
    $("#images").empty();
    count = 1;
    totalPages = 0;
    searchFlickr(img_value);
  });
  $('#images').on('click', 'img', function(){
    const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
    console.log($(this).attr('id'));
    $.getJSON(flickrURL,{
      method: 'flickr.photos.getInfo',
      api_key: '2f5ac274ecfac5a455f38745704ad084',
      photo_id: $(this).attr('id'),
      format: 'json',
    }).done(function(result){
      const url = result.photo.urls.url[0]._content;
      window.open(url, '_blank');
    });
  });
  $(window).on('scroll', function(){
    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    if(scrollBottom === 0 && count <= totalPages) {
      // console.log(scrollBottom);
      const term = $('#img_search').val();
      searchFlickr(term);
    };
  });
});
