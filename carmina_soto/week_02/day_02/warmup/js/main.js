const scrabble = function(word){
  const alphabet = {
    one: ['A','E','I','O','U','L','N','R','S','T'],
    two: ['D','G'],
    three: ['B','C','M','P'],
    four: ['F','H','V','W','Y'],
    five: ['K'],
    eight: ['J','X'],
    ten: ['Q','Z']
  };
  for(let i = 0; i < word.length; i++){

  }
  console.log(Object.values(alphabet));
}
scrabble('cabbage');
