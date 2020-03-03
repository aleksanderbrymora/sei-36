
const img = document.querySelector('img');
img.style.position = "absolute";
img.style.left = "0px";

const catWalk = function(){

  const oldPlace = parseInt(img.style.left);
  const newPlace = oldPlace + 10;
  img.style.left = newPlace + "px";

};

window.setInterval(catWalk,50);
