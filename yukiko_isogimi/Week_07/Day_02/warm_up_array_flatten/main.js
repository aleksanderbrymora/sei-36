// const reverse = function(array) {
//   const newArray = array.reverse();
//   console.log(newArray);
// }
//
// reverse([1, 2, 3, 4]);

// const flatten = function (array) {
//   const newArray = array.flat();
//   console.log(newArray);
// }
//
// flatten(['Hello', ['World', 42]]);


// Alex version

// const reverse = function(array) {
//   const output = []
//   for (let i = array.length; i >= 0; i--) {
//     output.push(array[i]);
//   }
//   return output;
// };
//
// console.log(reverse([1, 2, 3, 4]));

const flatten = function(arr){
    const output = [];
    arr.forEach(function(element){
      if (Array.isArray(element)) {
        element.forEach(function(inside) {
          output.push(inside)
        });
      } else {
        output.push(element);
      }

    })
    return output;
};

console.log(flatten(['Hello', ['World', 42]]));

// 
// const flattenRecursive = function (arr, out =[]) {
//   arr.forEach(function(el){
//     if (Array.isArray(el)) {
//       flattenRecursive(el, out);
//     } else {
//       out.push(el);
//     }
//
//   });
//   return output;
// }
