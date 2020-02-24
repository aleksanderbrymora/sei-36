const scrabble = function (
  word,
  isDouble = false,
  isTripple = false ,doubles = [], tripple= []
) {
  word = word.toLowerCase();
  let out = 0;
  const points = {
    a: 1,
  e: 1,
  i: 1,
  o: 1,
  u: 1,
  l: 1,
  n: 1,
  r: 1,
  s: 1,
  t: 1,
  d: 2,
  g: 2,
  b: 3,
  c: 3,
  m: 3,
  p: 3,
  f: 4,
  h: 4,
  v: 4,
  w: 4,
  y: 4,
  k: 5,
  j: 8,
  x: 8,
  q: 10,
  z: 10,

  };
  for (let i = 0; i < word.length; i++) {
    if (doubles.includes(word[i])) {
      out += points[word[i]] * 2;
      const letter = doubles.indexOf(word[i]);
      doubles.splice(letter, 1);
    }
    else if (triples.includes(word[i])) {
      out += points[word[i]] * 3;
      const letter = triples.indexOf(word[i]);
      triples.splice(letter, 1);
    }else {
    out += points[word[i]]
  }
  };
  if (isDouble) { out = out * 2 }
  if (isTripple) { out *= 3 }
  return out;
}
console.log(scrabble('cabbage', true, false, ['b'], ['g']));
