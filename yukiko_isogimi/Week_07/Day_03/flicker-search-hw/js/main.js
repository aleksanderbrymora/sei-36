////franks

console.log($.fn.jquery, _.VERSION);
let pageNumber = 1;
let requestInProgress = false;

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

  const generateWebURL = function (p) {
    return [
        'https://www.flickr.com/photos/',
        p.owner,
        '/',
        p.id
    ].join('');
  };

const showImages = function (results) {
    console.log(results);
    console.log(results.photos.pages);

    if (results.photos.pages >= pageNumber) {
        _(results.photos.photo).each(function (photo) {
            const thumbnailURL = generateURL(photo);
            const webURL = generateWebURL(photo);
            const $img = $('<img>', {src: thumbnailURL});
            const $a = $('<a>', {href: webURL});
            $a.append($img).appendTo('#images');
        });
    };
};

const searchFlickr = function (words, ) {
  if (requestInProgress === true) {
    return;
  }
  requestInProgress = true;
    const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084', // This is not a secret key
        text: words,
        format: 'json',
        per_page: 20,
        page: pageNumber++ // increment currentPage for the next iteration
    }).done(showImages).done(function(){
      requestInProgress = false;
    });
};

const scrollTrigger = function () {
    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    if (scrollBottom < 700) {
        const term = $('#query').val();
        searchFlickr(term);
    };
}; 

const debounce = function(func, wait) {
    let timeout;
    return function() {     // why need return
        clearTimeout(timeout);
        timeout = setTimeout(func, wait)
    }
};


// go back to top button
const goTop = function () {
    if ($(window).scrollTop() > 200) {
        $('#gotop').fadeIn(400);
    } else {
        $('#gotop').stop().fadeOut(400);    // .stop() to prevent bounce
    };
};

$(document).ready(function () {
    $('button#search').on('click', function () {
        event.preventDefault();

        const term = $('#query').val();
        searchFlickr(term, pageNumber);
    });

    // scroll to refresh
    $(window).on('scroll', debounce(scrollTrigger, 500));
    $(window).on('scroll', goTop);

    $("#gotop").click(function(){
        $("html,body").animate({scrollTop:"0px"},200);
    });
});
