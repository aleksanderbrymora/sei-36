let word = [];
const rewardType = ['+','-'];

let guess = [];
let guessOk = [];
let reward = 0;
let wrongGuessCtr = 0;

const hangman = [`
  +---+
  |   |
      |
      |
      |
      |
=========
`, `
  +---+
  |   |
  O   |
      |
      |
      |
=========
`, `
  +---+
  |   |
  O   |
  |   |
      |
      |
=========
`, `
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========
`, `
  +---+
  |   |
  O   |
 /|\\\  |
      |
      |
=========
`, `
  +---+
  |   |
  O   |
 /|\\\  |
 /    |
      |
=========
`, `
  +---+
  |   |
  O   |
 /|\\\  |
 / \\\  |
      |
=========
`];

const guessLetter = function (ltr){
  let matchFound = false;
  for (var i = 0; i < word.length; i++) {
    // Yes Match
    if (ltr.toUpperCase() === word[i].toUpperCase()) {
      if (guessOk[i] === true) {
        // letter already guessed
        // keep searching for another match
        matchFound = true;
        continue;
      } else {
        guess[i] = ltr;
        guessOk[i]=true;
        calculateReward(rewardType[0]);
        console.log(guess);
        matchFound = true;
        continue;
      }
    } else { // Not Matched
      if ((i === word.length-1) && !matchFound) { // finished searching
        wrongGuessCtr++;
        calculateReward(rewardType[1]);
        console.log(hangman[wrongGuessCtr]);
        break;
      }
    }
  }
}

function initGame(){
  let letters = prompt('Enter the word for guessing ? ');
  for (var i = 0; i < letters.length; i++) {
    word[i] = letters[i].toUpperCase();
    guess[i]='_';
    guessOk[i]=false;
  }
  console.log('Welcome to hangman');
  console.log(hangman[0]);
  console.log(guess);
}

const isGameWon = function (){
  let winLose = true;
  for (var i = 0; i < guessOk.length; i++) {
    winLose &= guessOk[i];
  }
  return winLose;
}

function calculateReward(rTyp) {
  if (rTyp === rewardType[0]) {
    reward = guessOk.length * getRandomInt(50,1);
    // console.log('+ : ' + reward);
  }else {
    reward -= getRandomInt(20,1);
    // console.log('- : ' + reward);
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

initGame();
while (1) {
  let ltr = prompt('Enter a letter.');
  guessLetter(ltr);


  if(isGameWon() == true) {
    console.log('You won: $'+ reward );
    break;
  }
  if (wrongGuessCtr === 6) {
    console.log('Game Over!');
    break;
  }
}
