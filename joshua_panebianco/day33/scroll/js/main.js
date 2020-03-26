// console.log("Hello");

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
	console.log( results );
	_( results.photos.photo ).each(function (photo) {
	  const thumbnailURL = generateURL(photo);
		const $img = $('<img>', {src: thumbnailURL});
		$img.appendTo('#images');
	});
};

const searchFlickr = function (words) {
	console.log('Searching Flickr for', words)

	const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: words,
    format: 'json'
  }).done(showImages);
};

$(document).ready(function () {
	$('form#search').on('submit', function (event) {
		event.preventDefault();

		const term = $('#query').val();
		searchFlickr( term );
	});
	$(window).on('scroll', function () {
    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    if (scrollBottom < 700) {
      const term = $('#query').val();
      searchFlickr( term );
    }
  });
});
