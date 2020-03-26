const $links = $('li a');

for (let i = 0; i < $links.length; i++) {
  const $link = $links.eq( i ); // Save the ith link into its own variable.

  const href = $link.attr('href'); // Getter: 1 argument

  const thumbnailURL = youtube.generateThumbnailUrl( href );
  const $image = $('<img>'); // detached DOM node
  $image.attr('src', thumbnailURL); // Setter: 2 arguments

  $link.prepend( $image );
}

// Too clever for now
// $('li a').each(function () {
//   $(this).prepend(
//     $('<img>').attr('src', youtube.generateThumbnailUrl( $(this).attr('href') ))
//   );
// });
