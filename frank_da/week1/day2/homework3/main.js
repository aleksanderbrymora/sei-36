const wordLetters = ['F', 'O', 'X'];
const guessedLetters =['_', '_', '_'];
const letterHistory = [];
let reward = 0;
let correctCount = 0;
let trackNumber = 0;

const guessLetter = function (guessedLetter) {
  if (letterHistory.includes(guessedLetter)) {
    return;
  }
  letterHistory.push(guessedLetter);
  trackNumber = trackNumber + 1;
  let isNew = true;
  let randomReward = Math.round(Math.random() * 10);
  for (let n = 0; n < wordLetters.length; n ++) {
    if (guessedLetter === wordLetters[n]) {
      isNew = guessedLetters.includes(guessedLetter);
      guessedLetters[n] = guessedLetter;
      reward = reward + randomReward;
      trackNumber = trackNumber - 1;
      correctCount ++;
      console.log(guessedLetters);
    }
  }
  console.log(`Current guessed letter is ${ guessedLetter }.`);
  if (trackNumber === 6) {
    console.log('   ----\n  |    |      \n  |    o\n  |   /|\\\n  |    |\n  |   /\n _|_\n|   |______\n|          |\n|__________|');
  }
  if (!isNew) {
    console.log('You found a new letter');
  }
  if (wordLetters.length !== correctCount) {
    console.log('There are more letters need to be guessed');
  } else {
    console.log('Congratulations, you win this game!');
    console.log(`Your reward is ${ reward }`);
  }
}

// Test
guessLetter('X');
console.log('=====');
guessLetter('Y');
console.log('=====');
guessLetter('O');
console.log('=====');
guessLetter('F');
console.log('-------------');
guessLetter('q');
guessLetter('w');
guessLetter('e');
guessLetter('t');
guessLetter('y');
