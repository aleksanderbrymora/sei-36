// # Sum of arrays
//
// Write a function that receives two arguments, both of which are Arrays and sums them. These arrays contain only numbers.
// You don't know their length and they can contain both integers and floating point numbers.
//
// ## Example
//
// [2, 6.4, 3] + [3, 3.6, 2] = 20
// sum([2, 6.4, 3], [3, 3.6, 2]) => 20
//
// ## Bonus
//
// Sum all of the arrays that are passed into the function.
// sum([2, 6.4, 3], [3, 3.6, 2], [2, 6.4, 3], [3, 3.6, 2]) => 40
// OR
// sum([[2, 6.4, 3], [3, 3.6, 2], [2, 6.4, 3], [3, 3.6, 2]]) => 40

const sum = function(){
  let result = 0.0;
  for(let i = 0; i < arguments.length; i++)
  {
    const array = arguments[i];
    for (let x = 0; x < array.length; x++){
      result += array[x];
    }
  }
  return result;
};

console.log(sum([2, 6.4, 3], [3, 3.6, 2]));
console.log(sum([2,6.4,3],[3,3.6,2],[2,6.4,3],[3,3.6,2]));
