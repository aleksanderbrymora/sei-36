console.log('Hey Josh');

// const cat = document.getElementsByTagName('img');

const img = document.querySelector('img');
// console.log(img);
img.style.left = '0px';
let catWalk = function() {
  let oldLeft = parseInt(img.style.left);
  let newLeft = oldLeft + 20;
  img.style.left = newLeft + 'px';
};
window.setInterval(catWalk, 1000);
