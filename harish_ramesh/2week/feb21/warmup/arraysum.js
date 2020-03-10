const arraySum = function(a1){
  let a1Sum = 0;
  let a2Sum = 0;
  for (let i=0;i<a1.length;i++){
    a1Sum += a1[i];
  }
  return a1Sum;
};
//
console.log(arraySum([1,2,3,4]));
// const sum = function(a){
//   let eq = 0;
//   for (let i=0;i<a.length;i++){
//     eq += a[i];
//   return eq; // return should be after for loop
//   }
// };
// console.log(sum([2,3,4]));


const arrSum = function(arr1,arr2){
  let sum = 0;
  for  (let i=0;i<arr1.length;i++){
    sum += arr1[i];
  }
  for  (let i=0;i<arr2.length;i++){
    sum += arr2[i];
  }
return sum;
};

console.log(arrSum([1,2,3],[2,3,4]));

const arrBonus = function(){
  //used nested for loops
}
