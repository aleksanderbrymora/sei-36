const subway = {
	N: [ "Times Square", "34th", "28th N ", "23rd N", "Union Square", "8th"],
	L: [ "8th", "6th", "Union Square", "3rd", "1st"],
	6 : ["Grand Central", "33rd", "28th 6", "23rd 6", "Union Square","Astor Place"]
};



//* something to be overwrriten several times//

let message = 'You must travel through the following stops on the ';
let countTotal = 0;
let stationsToStop =[];


/// 0 . get the line to get on ////
const line = function (line) {
  console.log(`You must travel through the following stops on the ${line} line: `);
};


// 1 . get the stations to stop depending on the current location // case 1: if they are before Union Squuare(ex.N, 34th)

const tripToSquare1 = function(line,station){
  let startStation = subway[line].indexOf(station);
  let intersect = subway[line].indexOf("Union Square");

  if ( startStation < intersect ) {
    for (let i = startStation + 1; i <= intersect; i++) {
      stationsToStop.push(subway[line][i]);
    }
    message = message + line + ": " + stationsToStop.join(",");
    return message

// 2 . get the stations to stop depending on the current location// case 2: if they are after  Union Squuare(ex. N, 8th)
  } else if ( startStation > intersect ) {
    for (let i = startStation -1; i <= intersect; i--) {
      stationsToStop.push(subway[line][i]);
    }
    message = message + line + ": " + stationsToStop.join(",");
    return message
  }

};

console.log( tripToSquare1("N","Time Square"));
console.log( tripToSquare1("L","3rd"));
//


//
// //3 . decide whether it needs to change at Union Square >> if statement
//
//
//
//
// //4 . get the another stations to stop depending on the current location// case 1: if they are after  Union Squuare
// const tripToDestination1 = function(){
//   for(let )
// }
//
//
//
// //5 . get the another stations to stop depending on the current location// case 2: if they are after  Union Squuare
// const tripToDestination1 = function(){
//   for(let )
// }
//
//
//
// //6. In case they do not need to change (tripInSingleLine)
//
//
//
// //7 . calculate the total stops
// return countTotal
//
//
//
// //8 . excute plantrip()
