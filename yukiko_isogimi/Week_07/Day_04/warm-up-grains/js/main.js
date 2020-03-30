// chessboard = _.range(1,65);
//
//
// const calcGrain = function (number){
//   let result = 1
//   for
//   console.log(`Square ${number}: ${result}`);
// }
// console.log( calcGrain(3));

///////////////////////////
////Aleks version //////

const grains = {
  oneSquare: function(square){
  return 2 ** (square - 1)
  },
  eachSquare: function () {
  allSquares = []
  for (let i = 0; i < 64; i++){
    allSquares.push(this.oneSquare(i+1))
    }
    return allSquares;
  },
  printAllSquare: function(){
    const allSquares = this.eachSquare()
    allSquares.map(function (square) {
      console.log(`Square ${index + 1 }: ${square}`);
    })
  },
  total: function(){
    const allSquares = this.eachSquare()
     return allSquares.reduce(function(accumulator, current){
      return accumulator + current
    })
  }
}

console.log(grains.oneSquare(5));
console.log(grains.total());
