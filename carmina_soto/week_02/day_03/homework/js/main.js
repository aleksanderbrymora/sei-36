// - Create a new Javascript file and link to it with a script tag at the bottom.
// - Create a variable to store a reference to the img.
// - Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// - Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// - Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

const img = document.getElementById('cat1');
img.style.left = "0px";
const catWalk = function(){
  const left = parseInt(img.style.left);
  const walkLeft = left + 10;
  img.style.left = walkLeft + "px";
  if(1024 < walkLeft){
    img.style.left = "0px";
  }
};
window.setInterval(catWalk, 50);

const cat2 = document.getElementById('cat2');
cat2.style.left = "0px";

const catWalkLeft = function(){
  const left = parseInt(cat2.style.left);
  const walkLeft = left - 10;
  cat2.style.left = walkLeft + 'px';
  if (0 < walkLeft) {
    console.log(cat2.style.left);
    // window.clearInterval(window.setInterval(catWalkLeft, 50));
    // window.setInterval(catWalkRight, 50);
  }
}
const catWalkRight = function(){
const right = parseInt(cat2.style.left);
let walkRight = right + 10;
cat2.style.left = walkRight + "px";
  if (1024 < walkRight){
    window.clearInterval(stop);
    window.setInterval(catWalkLeft, 50);
  }
};
const stop = window.setInterval(catWalkRight, 50);
// - Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
