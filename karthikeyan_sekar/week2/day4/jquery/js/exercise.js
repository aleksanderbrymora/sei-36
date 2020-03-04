// const links = document.querySelectorAll('li a');
//
// for(let i = 0; i < links.length;i++)
// {
//   const link = links[ i ];
//   const href = link.getAttribute('href');
//   const thumbnailURL = youtube.generateThumbnailUrl( href );
//   const image = document.createElement('img');
//   image.setAttribute('src', thumbnailURL);
//   link.appendChild(image);
// }

// const $links = $('li a');
//
// for(let i = 0; i < links.length;i++)
// {
//   const $link = $(link).eq(i);
//   const href = $link.attr('href');
//   const thumbnailURL = youtube.generateThumbnailUrl( href );
//   const $image = $('img');
//   image.attr('src', thumbnailURL);
//   $link.prepend($image);
// }

// Too clever for now
// $('li a').each(function () {
//   $(this).prepend(
//     $('<img>').attr('src', youtube.generateThumbnailUrl( $(this).attr('href') ))
//   );
// });



const thumbnailify = function($l)
{
  const href = $l.attr('href');
  const thumbnailURL = youtube.generateThumbnailUrl( href );
  const $image = $('<img>');
  $image.attr('src', thumbnailURL);
  $l.prepend($image);
  $l.on('click', function (event)
  {
    event.preventDefault(); // Stay on this page.
    const embedURL = youtube.generateEmbedUrl(href);
    const embedHTML = `<iframe width="560" height="315" src="${ embedURL }" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    $('#player').hide().html( embedHTML ).fadeIn(5000); // chaining
  });
};

const $links = $('li a');

for (var i = 0; i < $links.length; i++) {
  const $link = $links.eq(i);
  thumbnailify($link);
}

$('h2').funText(86,'candy');
