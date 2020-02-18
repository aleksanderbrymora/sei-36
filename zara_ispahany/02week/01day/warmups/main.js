// console.log("test");
// const polybiusBoard = {
//   rowL: [1, 2, 3, 4, 5],
//   row1: ["a", "b", "c", "d", "e"],
//   row2: ["f", "g", "h", "i", "j"],
//
// }
//
// //function(letter) //search the arrays for this letter
// //polybiusBoard[0] === rowL
// //indexOf to match positions
// const cypher = function(letter) {
//   //rowL[1] = row1[1] / output rowL[1]
//   for (let i = 0; i < polybiusBoard.row1.length; i++) {
//     console.log(polybiusBoard.row1[i]);
//     console.log(polybiusBoard.rowL[i]);
//   }
// }

//Aleks solution
const poly = function(message) {
  const cypher = 'abcdefghijklmnopqrstuvwxyz,.?!'; //can make arrays in arrays for each row = [[a, b,], [f, g]]
  let output = ''; //let output = string
  for (let i = 0; i < message.length; i++) {
    const letter = message[i].toLowerCase();
    const letterIndex = cypher.indexOf(letter); //will search for the lowercased letter
    if (letterIndex !== -1) { //not all will equal -1 need to account for those ones
      output += (letterIndex % 5) + 1; //offset from zero and we dont want it from zero
      output += Math.floor(letterIndex / 6) + 1; //6 is the heigh of the table
      output += ' ';
    }
  }
  return output;
}
console.log(poly("cat"));
