

// const arrSum = function (arr1, arr2) {
//   const sum = 0;
//   // function to loop through inner Arrays and add them up
//   //function to loop through the main array and sum them
//   for (let i = 0; i < arr1.length; i++) {
//     sum += arr1[i];
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     sum += arr2[i];
//   }
//   return sum;
// }
//
// console.log(arrSum([2, 6.4, 3], [3, 3.6, 2]));


 const arrSumBonus = function (){
   let sum = 0;
   for (let i = 0; i < arguments.length; i++) {
     for (let j = 0; arguments[i].length; i++) {
       sum += arguments[i][j]
     }
   }
return sum;
 }
console.log()
