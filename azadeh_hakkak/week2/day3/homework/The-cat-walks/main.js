const image = document.getElementsByTagName('img')[0];
image.style.position = 'absolute';
image.style.left = '0px';

const catWalk = function() {
  const oldPosition = parseInt(image.style.left);
  const currentPosition = oldPosition + 10;
  image.style.left = currentPosition + 'px';

};
setInterval(catWalk , 50);
