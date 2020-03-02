  const links = document.querySelectorAll('li a');
  // console.log(links);
  for (let i = 0; i < links.length; i++) {
    // console.log(liks[i]);
    const link = links[i];
    const href = link.getAttribute('href');// link.href
    // console.log(href);

    const thumbnailURL = youtube.generateThumbnailUrl(href);
    const image = document.createElement('img'); // detached DOM node
    image.setAttribute('src', thumbnailURL);
    link.appendChild(image);
    // append
    console.log(image);
  }

  // const links = document.querySelectorAll('li a');
  // for (let i = 0; i < links.length; i++) {
  //   const href = links[i].getAttribute('href');
  //   const thumbnailify = youtube.generateThumbnailUrl(href);
  //   const img = document.createElement('img');
  //   img.setAttribute('src', thumbnailify);
  //   link.appendChild(img);
  //   console.log(img);
  // }

//   Exercise: jQuery Events & Animation
// In this exercise, you'll add code to the so that you can actually watch the videos on the page.
//
// Start with your code from the jQuery workshop.
//
// In the body of your HTML, create a <div> to hold the video player, either below or to the side of the list, and give it an id.
// In the script tag that you were working in before, create a thumbnailify() function that takes a single argument.
// Move the code that is currently inside your for loop into that thumbnailify() function.
// Change the contents of your function so that it uses a single argument, which is a jQuery object that represents an <a>, rather than an array of elements.
// Move the for loop so that it occurs after you define thumbnailify()
// Call thumbnailify() from inside your for loop.
// Make sure your player first works like it did before. Hint: you should only reference an array index from inside of the for loop.
// Now, in the thumbnailify() function, add a click listener to the link. We recommend using an anonymous function for the callback (not a named function). Put a console.log inside the callback to make sure it works.
// In the click listener callback, you will be using the "create and store, manipulate, inject" pattern to display an embedded video in the DIV you created.
// To find out what the code for an embedded Youtube video looks like, go to Youtube.com and find any embed code for a video.
// You can use youtube.generateEmbedUrl() from the youtube.js library to generate an embed URL.
// Use string concatenation, .html(), or other jQuery method of your choice to assemble and insert the embedded video element.
// Check your work! Try all your video links. Is there anything you need to change?
// As a bonus, try to make the video watcher <div> fade in using jQuery.
// Make sure that you use your browser developer tools to make debugging easier while working on this. Check for errors, and use console.log() to figure out how far your code makes it, and what the values of your variables are along the way.

const thumbnailify = function ($l) {

}
const $links = $('la a');

for (let i = 0; i < link.length; i++) {
  const $link = $links.eq(i);
  const href = $link.attr('href');
  const thumbnailURL = youtube.generateThumbnailUrl(href);
  const image = $('<img>');
  $image.attr('src', thumbnailURL);
  $('href').on('click', function () {
  console.log('clicked!');
});
  $link.prepend($image);
}
