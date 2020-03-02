$(document).ready(function() {
	const words = $('.toRemove')
		.text()
		.split(/\W+/);

	$('.toRemove').hide();
	setInterval(function() {
		const word = words[Math.floor(Math.random() * words.length)];
		const newWord = $(`<p>${word}</p>`);
		newWord.css({
			position: 'absolute',
			top: Math.random() * window.innerHeight,
			left: Math.random() * window.innerWidth,
			color: randomColor(),
		});
		newWord
			.appendTo('body')
			.hide()
			.fadeIn()
			.delay(2000)
			.fadeOut(null, function() {
				newWord.remove();
			});
	}, 100);
});

const randomColor = function() {
	const red = Math.floor(Math.random() * 255);
	const green = Math.floor(Math.random() * 255);
	const blue = Math.floor(Math.random() * 255);
	return `rgb(${red},${green},${blue})`;
};
