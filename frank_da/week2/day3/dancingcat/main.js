let img = document.getElementsByTagName('img')[0];
let countLeft = 0;
let startLeft = true;

const catWalk = function () {
    if (startLeft === true) {
        let left = parseInt(img.style.left, 10);
        img.style.left = (left + 2) + 'px';  
        countLeft += 1; 
        if (countLeft === 100) {
            startLeft = false; 
            img.style.transform = 'scaleX(-1)';
        }        
    } else {
        let newleft = parseInt(img.style.left, 10);
        img.style.left = (newleft - 2) + 'px';
        countLeft -= 1;
        if (countLeft === 0) {
            startLeft = true;
            img.style.transform = 'scaleX(1)';
        }
    }
}

setInterval (catWalk, 10);