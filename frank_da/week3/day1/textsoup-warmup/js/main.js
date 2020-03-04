function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

const bookText = $('.hidden p').text().replace(/[^A-Za-z]/,'').split(' ');
$('.hidden').hide();
console.log(bookText);

const randomColor = function() {
    const red = Math.random() * 255;
    const green = Math.random() * 255;
    const blue = Math.random() * 255;
    return `rgb(${red}, ${green}, ${blue})`
};

setInterval(function(){
    const newWord = $(`<p>${bookText[getRandomInt(0, bookText.length)]}</p>`);
    newWord.css({
        position: 'absolute',
        top: Math.random() * window.innerHeight,
        left: Math.random() * window.innerWidth,
        color: randomColor()
    });
    newWord
        .appendTo('body')
        .hide()
        .fadeIn()
        .delay(1000)
        .fadeOut(null, function(){
            newWord.remove();
        });
}, 100);
