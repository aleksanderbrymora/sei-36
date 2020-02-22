

//joelsmethod
//creating an array
// const $links = $('li a'); //document.querySelectorAll('li a');
//
// for (let i = 0; i < $links.length; i++) {
//   //console.log(links[i]); //testing to see if it works at this far
//   const $link = links[i]; //instead of writing links[i] all the time
//
//   //const href = link.getAttribute('href');
//
//   //generateThumbnailUrl
//   const thumbnailURL = youtube.generateThumbnailUrl($href);
//   //console.log(thumbnailURL); //will output the jpg path
//
//   const image = document.createElement('img'); //detached DOM node
//   image.setAttribute('src', thumbnailURL);
//   console.log(image); //output img src = link
//
//   link.appendChild(image); //where you've got ur link tag stick the image in there too
// }

//simple way line by line
const $links = $('li a');

for (let i = 0; i < $links.length; i++) {
  const link = $links[i];
  const $link = $(link); //turn it back into jquery

  const href = $link.attr('href'); //just a string

  const thumbnailURL = youtube.generateThumbnailUrl(href);

  const $image = $('<img>');
  $image.attr('src', thumbnailURL);

  $link.prepend($image); //append will be after the link
}

//full jqeury
const $links = $('li a');

for (let i = 0; i < $links.length; i++) {
  const $link = $links.eq(i); //save link in its own variable

  const href = $link.attr('href'); //just a string

  const thumbnailURL = youtube.generateThumbnailUrl(href);

  const $image = $('<img>');
  $image.attr('src', thumbnailURL);

  $link.prepend($image); //append will be after the link
}

//how joel would write it in real
$('li a').each(function () {
  $(this).prepend(
    $('<img>').attr('src', youtube.generateThumbnailUrl( $(this).attr('href')))
  );
});
//this = current element
