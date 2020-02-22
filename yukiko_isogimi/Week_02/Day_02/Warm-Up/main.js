const scrabble = function(word) {
  word = word.toLowerCase();
  let out = 0;
  const points = {
    a:1,
    e:1,
    i:1,
    o:1,
    u:1,
    l:1,
    n:1,
    r:1,
    s:1,
    t:1,
    d:2,
    g:2,
    b:3,
    c:3,
    m:3,
    p:4,
    f:4,
    h:4,
    v:4,
    w:4,
    y:5,
    j:8,
    x:8,
    q:10,
    z:10,
  };
  for (let i = 0; i < word.length; i++){
    out += points[word[i]];
  }
  return out;
};

console.log( scrabble("cabbage"));
