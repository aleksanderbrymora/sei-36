  // const links = document.querySelectorAll('li a');
  // // console.log(links);
  // for (let i = 0; i < links.length; i++) {
  //   // console.log(liks[i]);
  //   const link = links[i];
  //   const href = link.getAttribute('href');// link.href
  //   // console.log(href);
  //
  //   const thumbnailURL = youtube.generateThumbnailUrl(href);
  //   const image = document.createElement('img'); // detached DOM node
  //   image.setAttribute('src', thumbnailURL);
  //   link.appendChild(image);
  //   // append
  //   console.log(image);
  // }


  const $links = $('li a');
  for (let i = 0; i < $links.length; i++) {
  const link = $links[i];
  const $link = $ (link);
  const href = $link.attr('href');
  const thumbnailUrl = youtube.generateThumbnailUrl(href);
  //create an image and set attribute image src
  const img = $('<img>').attr('src', thumbnailUrl);

  $link.append(img);

  }

// const $links = $('li a');
// for (let i = 0; i < $links.length; i++) {
//   // const link = $links[i]
//   // const $link = $( link );
//   const
//   const href = $link.attr('href'); //Getter 1 argument
//   ;
//   $('a').attr('href', 'http://www.yahoo.com');
// }


//
// $('li a').each(function() {
//   $(this).prepend(
//     $('<img>').attr('src', youtube.generateThumbnailUrl( $(this).attr('href')))
//   );
//
// });
