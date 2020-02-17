//
const DrEvil = function(d) {
  if (d < 1000000) {
    return `${d} dollars.`;
  } else {
    return `${d} dollars (pinky)`;
  }
};

//
const MixUp = function(a, b) {
  return `${b.slice(0, 2) + a.slice(2, a.length)} ${a.slice(0, 2) +
    b.slice(2, b.length)}`;
};

//
const notBad = function(s) {
  if (s.indexOf("bad") > s.indexOf("not")) {
    return s.slice(0, s.indexOf("not")) + "good!";
  } else {
    return s;
  }
};

//
const verbing = function(s) {
  if (s.indexOf("ing")) {
    return s + "ly";
  } else {
    return s;
  }
};

//
const fixStart = function(s) {
  let remainingStr = s.slice(1);
  return s[0] + remainingStr.split(s[0]).join("*");
};
