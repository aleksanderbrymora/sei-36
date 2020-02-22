// # MTA Lab
//
// ## Objectives:
// * Apply your knowledge of Javascript to solve a real world problem.
// * Get really good at array manipulation.
//
// #### Activity
// * Create a program that models a simple subway system.
//
// * The program takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// ```javascript
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// ```
//
// * There are 3 subway lines:
//   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
//
//
// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

// create subway lines
const nSubwayLine = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
const lSubwayLine = ["8th", "6th", "Union Square", "3rd", "1st"];
const sixSubwayLine = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];

//determine which subway lines to use
const getSubwayLines = function (subwayLine){
  if (subwayLine === 'N') return nSubwayLine;
  if (subwayLine === 'L') return lSubwayLine;
  if (subwayLine === '6') return sixSubwayLine;
  return 'Unknown Line';
}

//count stops in forward direction
const forwardDirection = function (startStopIndex, endStopIndex, lineArray){
const subwayStops = {};
let listStops = [];
let countStops = 0;
for (let i = startStopIndex + 1; i <= endStopIndex; i++){
  countStops += 1;
  listStops.push(lineArray[i]);
  }
  subwayStops.count = countStops;
  subwayStops.list = listStops;
  return subwayStops;
}

//count stops in reverse direction
const reverseDirection = function (startStopIndex, endStopIndex, lineArray){
  const subwayStops = {};
  let listStops = [];
  let countStops = 0;
  for (let i = startStopIndex - 1; i >= endStopIndex; i--) {
    countStops += 1;
    listStops.push(lineArray[i]);
  }
  subwayStops.count = countStops;
  subwayStops.list = listStops;
  return subwayStops;
}

//count stops
const getStops = function (startStopIndex, endStopIndex, lineArray){
  let stops;
  if (startStopIndex < endStopIndex){
    stops = forwardDirection(startStopIndex, endStopIndex, lineArray);
  } else {
    stops = reverseDirection(startStopIndex, endStopIndex, lineArray);
  }
  return stops;
}

const planTrip = function (startLine, startStop, endLine, endStop) {
  let getStartLine;
  let getEndLine;
  let message;
  let listStops = [];
  let totalStops = 0;

  //Get which subway lines to use
  getStartLine = getSubwayLines(startLine);
  getEndLine = getSubwayLines(endLine);

  //determine which index is the stop in the start and end subway lines
  let getStartStopIndex;
  let getEndStopIndex;
  getStartStopIndex = getStartLine.indexOf(startStop);
  getEndStopIndex = getEndLine.indexOf(endStop);

  // determine if we need to change lines
  let getUnionSqIndexStart;
  let getUnionSqIndexEnd;
  let listOfSubwayStops;

  // traversing one line only
  if (getStartLine === getEndLine){
    listOfSubwayStops = getStops(getStartStopIndex, getEndStopIndex, getStartLine);
    message = `You must travel through the following stops on the ${startLine} line: ${listOfSubwayStops.list.join(', ')}.\nTotal Number of Stops: ${listOfSubwayStops.count}`;
    // traversing 2 lines
  } else {
    getUnionSqIndexStart = getStartLine.indexOf("Union Square");
    getUnionSqIndexEnd = getEndLine.indexOf("Union Square");
    //start stop to Union Square
    listOfSubwayStops = getStops(getStartStopIndex, getUnionSqIndexStart, getStartLine);
    message = `You must travel through the following stops on the ${startLine} line: ${listOfSubwayStops.list.join(', ')}.\nChange on Union Square.`;
    totalStops += listOfSubwayStops.count;
    //Union Square to end stop
    if (getEndStopIndex < getUnionSqIndexEnd){
        listOfSubwayStops = reverseDirection(getUnionSqIndexEnd, getEndStopIndex, getEndLine);
    } else {
      listOfSubwayStops = forwardDirection(getUnionSqIndexEnd, getEndStopIndex, getEndLine);
    }
    totalStops += listOfSubwayStops.count;
    message = `${message}\nYour journey continues through the following stops on the ${endLine} line: ${listOfSubwayStops.list.join(', ')}.\nTotal Number of Stops: ${totalStops}`;
  }


  // if(getStartLine != getEndLine){
  //   //get index of union square (intersection)
  //   getUnionSqIndexStart = getStartLine.indexOf("Union Square");
  //   getUnionSqIndexEnd = getEndLine.indexOf("Union Square");
  //   //start: count stops for start line
  //   // check if start stop index is less than the union square index (forward direction)
  //   if (getStartStopIndex < getUnionSqIndexStart){
  //     // do not count start stop and add index count
  //     for (let i = getStartStopIndex + 1; i <= getUnionSqIndexStart; i++)  {
  //       countStops += 1;
  //       listStops.push(getStartLine[i]);
  //     }
  //   } else { // reverse direction
  //     // do not count start stop and subtract index count
  //     for (let i = getStartStopIndex - 1; i >= getUnionSqIndexStart; i--) {
  //       countStops += 1;
  //       listStops.push(getStartLine[i]);
  //     }
  //   }
  //   message = `You must travel through the following stops on the ${startLine} line: ${listStops.join(', ')}.\n Change at Union Square.`
  //   //end: count stops for start line
  //
  //   //start: count stops for end line
  //   //clear array for list of stops
  //   listStops = [];
  //   //check if end stop index is less than the union square index (reverse direction)
  //   if (getEndStopIndex < getUnionSqIndexEnd){
  //     // do not count union square stop (this was already included in the start line) and subtract index count
  //     for (let i = getUnionSqIndexEnd - 1; i >= getEndStopIndex; i--)  {
  //       countStops += 1;
  //       listStops.push(getEndLine[i]);
  //     }
  //   } else { //forward direction
  //     // do not count union square stop (this was already included in start line) and add index count
  //     for (let i = getUnionSqIndexEnd + 1; i <= getEndStopIndex; i++) {
  //       countStops += 1;
  //       listStops.push(getEndLine[i]);
  //     }
  //   }
  //   message = `${message}\n Your journey continues through the following stops: ${listStops.join(', ')}. \n Total Number of Stops: ${countStops}`
  //   //end: count stops for end line
  // }
  // //traversing one line ONLY
  // else{
  //   //count number of stops -> probably convert to function
  //   // //check if start stop index is less than end stop index (forward direction)
  //   // if (getStartStopIndex < getEndStopIndex){
  //   //   // do not count start stop and add index count
  //   //   for (let i = getStartStopIndex + 1; i <= getEndStopIndex; i++)  {
  //   //     countStops += 1;
  //   //     listStops.push(getStartLine[i]);
  //   //   }
  //   // } else { //reverse direction
  //   //   // do not count start stop and subtract index count
  //   //   for (let i = getStartStopIndex - 1; i >= getEndStopIndex; i--) {
  //   //     countStops += 1;
  //   //     listStops.push(getStartLine[i]);
  //   //   }
  //   }
  //   message = `You must travel through the following stops on the ${startLine} line: ${listStops.join(', ')}.\n Total Number of Stops: ${countStops}`;
  // }

  return message;
}

//traversing one line, forward and reverse directions
console.log(planTrip("N","Times Square","N","8th"));
console.log(planTrip("N","8th","N","34th"));
// traversing two lines, first going forward then going backward
console.log(planTrip("N","Times Square","6","33rd"));
//traversing two lines, first going backward then going forward
console.log(planTrip("L","1st","6","Astor Place"));
