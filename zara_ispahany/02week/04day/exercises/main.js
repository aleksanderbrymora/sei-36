// ### Step by Step:
// - Create an array of every link on the page using document.querySelectorAll(cssSelector)
// - Iterate through the array. In each iteration of the loop:
//
//     - Find the current href using [element.getAttribute(name)](https://developer.mozilla.org/en-US/docs/DOM/element.getAttribute), and store into a variable
//     - Generate a thumbnail URL using [youtube.generateThumbnailUrl(videoUrl)](http://www.teaching-materials.org/jquery/youtube_doc.html)
//     - Create an IMG element using [document.createElement(tagName)](https://developer.mozilla.org/en-US/docs/DOM/document.createElement)
//     - Set the "src" of the IMG element using [element.setAttribute(name, value)](https://developer.mozilla.org/en-US/docs/DOM/element.setAttribute)
//     - Append the IMG to the link using [element.appendChild(element)](https://developer.mozilla.org/en-US/docs/DOM/Node.appendChild)
//
// Quick Tip: If you need a refresher on the DOM API, check out slides 1-12 from the [DOM Review here](http://www.teaching-materials.org/jsdom/)

//solution
// const videoLinks = document.getElementsByTagName('a');
// for (let i = 0; i < videoLinks.length; i++) {
//   let videoLink = videoLinks[i];
//   let linkUrl = videoLink.getAttribute('href');
//   let thumbnailUrl = youtube.generateThumbnailUrl(linkUrl);
//   let thumbnailImg = document.createElement('img');
//   thumbnailImg.setAttribute('src', thumbnailUrl);
//   videoLink.appendChild(thumbnailImg);
// }

//joelsmethod
//creating an array
const links = document.querySelectorAll('li a');

for (let i = 0; i < links.length; i++) {
  //console.log(links[i]); //testing to see if it works at this far
  const link = links[i]; //instead of writing links[i] all the time

  const href = link.getAttribute('href'); //same as link.href
  //console.log(href); //will only show the href

  //generateThumbnailUrl
  const thumbnailURL = youtube.generateThumbnailUrl(href);
  //console.log(thumbnailURL); //will output the jpg path

  const image = document.createElement('img'); //detached DOM node
  image.setAttribute('src', thumbnailURL);
  console.log(image); //output img src = link

  link.appendChild(image); //where you've got ur link tag stick the image in there too 
}
