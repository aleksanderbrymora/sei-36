// # Filter
//
// 1. Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
//
// ## Example:
//
// Input:
//
// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
//
// Output:
//
// 'alpha beta gamma delta'

const removeDuplicates = function(string){
  const splitString = string.split(' ');
  let finalArray = [ ];
  for (let i = 0; i < splitString.length; i++){
    if (!finalArray.includes(splitString[i])) {
      finalArray.push(splitString[i]);
    }
  }
  return finalArray.join(' ');
}

console.log(removeDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));
//
// # Bonus question
//
// Create a function that returns a string 'banana'. The catch is you can only use letters 'a' and 'b'.
// Super extra bonus points for proving "how well engineered Javascript really is".

const banana = function() {
  return output = 'b' + 'a' + + 'a' + 'a';
}
console.log(banana());
