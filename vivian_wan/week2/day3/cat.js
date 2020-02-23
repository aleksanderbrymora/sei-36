
//Create a variable to store a reference to the img

var cat = document.getElementsByTagName ('img')[0];

//Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.

cat.style.left = "0px";



// var styleCat = document.body;
// styleCat.style.colour = 'red';
// console.log(styleCat.innerHTML);

//Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.

const catWalk = function () {

    const catRight = parseInt(cat.style.left, 10);
    const newCatRight = catRight + 50 + "px"; //50px
    cat.style.left = newCatRight
}
// console.log (catWalk)

window.setInterval(catWalk, 1000);

