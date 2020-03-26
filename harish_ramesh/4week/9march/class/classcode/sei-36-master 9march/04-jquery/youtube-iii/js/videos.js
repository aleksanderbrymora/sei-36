$(document).ready(function () {
  const thumbnailify = function ($l) {
    const href = $l.attr('href'); // Getter: 1 argument

    const thumbnailURL = youtube.generateThumbnailUrl( href );
    const $image = $('<img>'); // detached DOM node
    $image.attr('src', thumbnailURL); // Setter: 2 arguments

    $l.prepend( $image );

    $l.on('click', function (event) {
      event.preventDefault(); // Stay on this page.
      const embedURL = youtube.generateEmbedUrl(href);
      const embedHTML = `<iframe width="560" height="315" src="${ embedURL }" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

      $('#player').hide().html( embedHTML ).fadeIn(5000); // chaining
    });
  };

  const $links = $('li a');

  for (let i = 0; i < $links.length; i++) {
    const $link = $links.eq( i );
    thumbnailify( $link );
  }

  $('h2').funText(100, 'candy');
  $('a').funText(50, 'candy');

});
