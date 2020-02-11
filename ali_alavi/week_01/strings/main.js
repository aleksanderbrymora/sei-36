//
const notBad = function(s) {
  if (s.indexOf("bad") > s.indexOf("not")) {
    return s.slice(0, s.indexOf("not")) + "good!";
  } else {
    return s;
  }
};

notBad("This dinner is not that bad!"); //'This dinner is good!'

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
