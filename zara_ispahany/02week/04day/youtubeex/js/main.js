// const thumbnailify = function($l) {
//   const href = $l.attr('href'); // Getter: 1 argument
//
//   const thumbnailURL = youtube.generateThumbnailUrl( href );
//   const $image = $('<img>'); // detached DOM node
//   $image.attr('src', thumbnailURL); // Setter: 2 arguments
//
//   $l.prepend( $image );
// }
//
// const $links = $('li a');
// for (let i = 0; i < $links.length; i++) {
//   const $link = $links.eq( i );
//   thumbnailify($link);
// }


const thumbnailify = function($l) {
  const href = $l.attr('href'); // Getter: 1 argument

  const thumbnailURL = youtube.generateThumbnailUrl( href );
  const $image = $('<img>'); // detached DOM node
  $image.attr('src', thumbnailURL); // Setter: 2 arguments

  $l.prepend( $image );

  $l.on('click', function() {
    event.preventDefault(); //stay on this page

    const embedURL = youtube.generateEmbedUrl(href);
    const embedHTML = `<iframe width="560" height="315" src="${embedURL}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    $('#video-player').hide().html(embedHTML).fadeIn(1700); //chaining
  });
};

const $links = $('li a');
for (let i = 0; i < $links.length; i++) {
  const $link = $links.eq( i );
  thumbnailify($link);
}

$('.page-header').funText(70, 'candy');
$('a').funText(40, 'candy');
