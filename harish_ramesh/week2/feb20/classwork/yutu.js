// const linkArray = document.querySelectorAll('li a');
// for (let i=0;i<linkArray.length;i++){
//   const link = linkArray[i];
//   const href = link.getAttribute('href'); //link.href;
//   const thumNail = youtube.generateThumbnailUrl(href);
//   const image = document.createElement('img');
//   image.setAttribute('src', thumNail);
//   link.appendChild(image);
// }

//------write the above in jQuery........

// const linkArray = $('li a');
// for (let i=0;i<linkArray.length;i++){
//
//   const link = linkArray[i];
//   const href = link.getAttribute('href'); //link.href;
//   const thumNail = youtube.generateThumbnailUrl(href);
//   const image = document.createElement('img');
//   image.setAttribute('src', thumNail);
//   link.appendChild(image);
// }

//trying to play the video on the page instead of navaigating away//

const thumbNail = function($l){
  const href = $l.attr('href');
  const generateThumbnailUrl = youtube.generateThumbnailUrl(href);
  const $image = $('<img>');
  $image.attr('src',thumNailURL);
  $l.prepend ($image);
  $l.on('click',function(event)){
    event.preventDefault();

    const embedHTML = ``
  }
}
