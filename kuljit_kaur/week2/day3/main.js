
var catImg = document.getElementsByTagName("img");
var maxWidthReached = false;
var minWidthReached = false;

var newPos = 0;
var newPos1 = 0;
catImg[0].style.left = 0;
// catImg[1].style.left = 0;
// catImg[2].style.left = 0;

const catWalk = function() {

// Bonus #2: When the cat reaches the right-hand of the screen, make them move
// backwards instead. They should keep walking back and forth forever and ever.

  // when cat reaches right side
  if(newPos >= screen.width - catImg[0].width){
    maxWidthReached = true;
    minWidthReached = false;
    catImg[0].style.transform = 'rotateY(180deg)';
    // newPos1 = 0;
  }
  else if (newPos <= 10) {
    // When cat reaches left side
    maxWidthReached = false;
    minWidthReached = true;
    catImg[0].style.transform = 'rotateY(360deg)';
    // newPos1 = parseInt(catImg[1].style.left) + 10;
    // catImg[1].style.left = newPos1 + 'px';
  }

  if(minWidthReached === true){
        newPos = parseInt(catImg[0].style.left) + 10;
        catImg[0].style.left = newPos + 'px';
  } else if (maxWidthReached == true){
    newPos = parseInt(catImg[0].style.left) - 10;
    catImg[0].style.left = newPos + 'px';
  }

  // Bonus #1: When the cat reaches the right-hand of the screen, restart them at the
  // left hand side ("0px"). So they should keep walking from left to right across
  // the screen, forever and ever.


  // if(newPos1 >= screen.width - catImg[1].width){
  //   newPos1 = 0;
  //   else if (newPos1 <= 10){
  //     newPos1 = parseInt(catImg[1].style.left) + 10;
  //     catImg[1].style.left = newPos1 + 'px';
  //   }



};
window.setInterval(catWalk, 50);

// Bonus #3: When the cat reaches the middle of the screen, replace the img with
// an image of a cat dancing, keep it dancing for 10 seconds, and then replace the
// img with the original image and have it continue the walk.
