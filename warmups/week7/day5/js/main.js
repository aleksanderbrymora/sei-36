// Lawrence's solution

$(document).ready(function() {
	// regular text soup stuff;
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
			color: `rgba(${text.colourController})`,
			'font-size': `${text.fontSize}em`,
		});
		newWord
			.appendTo('body')
			.hide()
			.fadeIn(text.fadeIn)
			.delay(text.wordInterval)
			.fadeOut(text.fadeOut, function() {
				newWord.remove();
			});
	}, 100);

	// dat.gui setup
	const FizzyText = function() {
		this.message = 'Text Soup settings';
		this.fadeIn = 500;
		this.fadeOut = 500;
		this.fontSize = 1;
		// bonus
		this.wordInterval = 2000;
		// RGB with alpha
		this.colourController = [0, 128, 255, 0.75];
	};

	const text = new FizzyText();
	const gui = new dat.GUI();
	gui.add(text, 'message');
	gui.add(text, 'fadeIn', 50, 4000);
	gui.add(text, 'fadeOut', 50, 4000);
	gui.add(text, 'fontSize', 1, 20);
	// bonus stuff
	gui.add(text, 'wordInterval', 500, 4000);
	gui.addColor(text, 'colourController');
});

// Aleks's solution

$(document).ready(function() {
	const words = $('.toRemove')
		.text()
		.split(/\W+/);

	$('.toRemove').hide();

	let timerID = null;

	const controls = {
		fadeIn: 2000,
		fadeOut: 2000,
		fontSize: 30,
		timerInterval: 100,
		addWord: '',
	};

	const gui = new dat.GUI();

	gui.add(controls, 'fadeIn', 0, 5000);
	gui.add(controls, 'fadeOut', 0, 5000);
	gui.add(controls, 'fontSize', 0, 5000);
	gui.add(controls, 'addWord');
	gui
		.add(controls, 'timerInterval', 1, 1000)
		.onFinishChange(function(newValue) {
			console.log(newValue);
			window.clearInterval(timerID);
			timerID = window.setInterval(displayWord, newValue);
		});

	const displayWord = function() {
		let word = words[Math.floor(Math.random() * words.length)];

		if (controls.addWord.length > 0 && Math.random() > 0.5) {
			word = controls.addWord;
		}

		const newWord = $(`<p>${word}</p>`);
		newWord.css({
			position: 'absolute',
			top: Math.random() * window.innerHeight,
			left: Math.random() * window.innerWidth,
			color: randomColor(),
			fontSize: `${controls.fontSize}pt`,
			transform: `rotate(${Math.floor(Math.random() * 360)}deg)`,
		});

		newWord
			.appendTo('body')
			.hide()
			.fadeIn(controls.fadeIn)
			.delay(2000)
			.fadeOut(controls.fadeOut, function() {
				newWord.remove();
			});
	};

	timerID = setInterval(displayWord, 100);
});

const randomColor = function() {
	const red = Math.floor(Math.random() * 255);
	const green = Math.floor(Math.random() * 255);
	const blue = Math.floor(Math.random() * 255);
	return `rgb(${red},${green},${blue})`;
};
