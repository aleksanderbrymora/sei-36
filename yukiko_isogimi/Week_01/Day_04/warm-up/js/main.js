// Filter
// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
// Example:
// Input:

// const filterWords = function(words){
//   const array=[];
//   for ( let i = 0; i < words.length; i++) {
//
//     if ( !array.includes(words[i])){
//       array.push(words[i])
//     }
//   }
//   return array;
// };
//
// console.log( filterWords(['Hello', 'Yukiko', 'Yukiko', 'Kanpai', 'Kanpai','hahahahaha']));
//


//Alek version//

const filterWords = function(str) {
  const words = str.split(' ');
  const output = [];

  for (let i = 0; i < words.length; i++){
    if ( !output.includes(words[i])) {
      output.push(words[i]);
    }
  }
  return output.join(' ');

};

console.log( filterWords('alpha alpha beta beta gamma gamma',),);
//

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
//
// Output:
//
// 'alpha beta gamma delta'
//
// Bonus question
// // Create a function that returns a string 'banana'. The catch is you can only use letters 'a' and 'b'. Super extra bonus points for proving "how well engineered Javascript really is".
//
// const banana = function(aba){
//   let word;
//   if ( 'a' )
//
// }



const banana = function(){
  const out = 'b' + 'a' + + 'a' + 'a';


}
