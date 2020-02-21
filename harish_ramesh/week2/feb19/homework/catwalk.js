
const img = document.getElementsByTagName('img')[0];
img.style.position = 'absolute';
img.style.left = '0px';
const catWalk = function() {
  let oldTop = parseInt(img.style.left);
  let newTop = oldTop + 10;
  img.style.left = newTop + 'px';
};
setInterval(catWalk, 100);
