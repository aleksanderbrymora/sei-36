let cnt = 0;
let screenWidth = window.innerWidth-230;

const catWalk = function() {
  cnt+=10;
  var img = document.getElementsByTagName('img')[0];
  img.style.left = cnt + 'px';
  if (cnt>=screenWidth) {
    cnt=0
    img.style.left = cnt + 'px';
  }
};

console.log('screenWidth: ' + screenWidth);
setInterval( catWalk, 50 );
