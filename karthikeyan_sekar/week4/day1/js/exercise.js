
$(document).ready(function(){
const bookText = $('.para')
           .text()
           .replace(/\W+/,'')
           .split('');
$('.para').hide();
console.log(bookText);
setInterval(function() {
const newWord = $(
  `<p>${bookText[Math.floor(Math.random() * bookText.length)]}`
);
newWord.css({
  position: 'absolute';
  top: window.innerH
})

})


}
