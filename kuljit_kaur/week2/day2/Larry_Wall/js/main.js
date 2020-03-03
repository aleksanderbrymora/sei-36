
var text = document.getElementsByClassName("show");
var maxWidthReached = false;
var minWidthReached = false;

var newPos = 360px;
const showText = function() {
text[0].style.left = 360px;
if(newPos >= 410){
    maxWidthReached = true;
    minWidthReached = false;
    text[0].style.transform = 'rotateY(180deg)';
  }
  else if (newPos <= 360) {
    maxWidthReached = false;
    minWidthReached = true;
    text[0].style.transform = 'rotateY(360deg)';
  }

  if(minWidthReached === true){
        newPos = parseInt(text[0].style.left) + 10;
        text[0].style.left = newPos + 'px';
  } else if (maxWidthReached == true){
    newPos = parseInt(catImg[0].style.left) - 10;
    text[0].style.left = newPos + 'px';
  }
};
window.setInterval(showText, 50);
