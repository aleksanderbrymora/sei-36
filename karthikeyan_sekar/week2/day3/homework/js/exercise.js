var img = document.getElementsByTagName('img')[0];
img.style.position = 'absolute';
img.style.left = '0px';
var watchKittyFall = function() {
  var oldTop = parseInt(img.style.left);
  var newTop = oldTop +10;
  img.style.left = newTop + 'px';
};
setInterval(watchKittyFall,100);
