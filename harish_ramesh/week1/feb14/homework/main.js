
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

// ***************BONUS ------ TRY CREATING A INTERACTIVE HTML PAGE FOR THE SAME --------***************//

const lines = [
  { name: "L", stops: ["8th", "6th","Union Square", "3rd", "1st"] },
  { name: "N", stops: ["34th", "28th", "23rd", "Union Square", "8th"]},
  { name: "6", stops: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]}
];

const indexFinder = function(l,s){
  let lsIndex = [];
  for (let i=0;i<lines.length;i++){
    if (l === lines[i].name ){
      lsIndex.push(lines.indexOf(lines[i]));
      lsIndex.push(lines[i].stops.indexOf(s));
      return lsIndex;
    }
  }
};


const stopsCounter = function(sLine, origin, eLine, dest){
  let startIn = indexFinder(sLine, origin);
  let endIn = indexFinder(eLine, dest);
  let sUsqIn = indexFinder(sLine, "Union Square");
  let eUsqIn = indexFinder(eLine, "Union Square");
  let noOfStops;
  if ( sLine === eLine ){
    noOfStops = Math.abs(endIn[1] - startIn[1]);
    return noOfStops;
  }else{
    noOfStops = (Math.abs(sUsqIn[1] - startIn[1])) + (Math.abs(eUsqIn[1] - endIn[1]));
    return noOfStops;
  }
};

// //-----------Ask how to create a array using "for" loop------//////

const stopsLister = function(s, o, e, d){
  let startIn = indexFinder(s, o);
  let endIn = indexFinder(e, d);
  let sUsqIn = indexFinder(s, "Union Square");
  let eUsqIn = indexFinder(e, "Union Square");
  let listOfStops;
  let stopsAfterChange;
  if ( s === e && startIn[1] < endIn[1] ){
    listOfStops = "Travel through following stops " + lines[startIn[0]].stops.slice((startIn[1]+1),(endIn[1]+1)) + "; Total no. of stops " + stopsCounter(s,o,e,d,);
    return listOfStops;
  }else if ( s === e && startIn[1] > endIn[1] ){
    listOfStops = lines[startIn[0]].stops.slice((endIn[1]),(startIn[1]));
    listOfStops = "Travel through following stops " + listOfStops.reverse() + "; Total no. of stops " + stopsCounter(s,o,e,d,);
    return listOfStops;
  }else if ( s !== e && startIn[1] < sUsqIn[1] && eUsqIn[1] < endIn[1] ){
    stopsAfterChange = (lines[endIn[0]].stops.slice(eUsqIn[1]+1, endIn[1]+1));
    stopsAfterChange = stopsAfterChange.toString();
    listOfStops = "Travel through following stops " + lines[startIn[0]].stops.slice((startIn[1]+1),(sUsqIn[1]+1)) + (". change at Union Square, journey continues through ") + stopsAfterChange + "; Total no. of stops " + stopsCounter(s,o,e,d,);
    return listOfStops;
  }else if ( s !== e && startIn[1]<sUsqIn[1] && eUsqIn[1]>endIn[1] ){
    stopsAfterChange = lines[endIn[0]].stops.slice(endIn[1], eUsqIn[1]);
    stopsAfterChange = stopsAfterChange.reverse();
    listOfStops = "Travel through following stops " + lines[startIn[0]].stops.slice((startIn[1]+1),(sUsqIn[1]+1)) + (". change at Union Square, journey continues through ") + stopsAfterChange + "; Total no. of stops " + stopsCounter(s,o,e,d,);
    return listOfStops;
  }else if ( s !== e && startIn[1]>sUsqIn[1] && eUsqIn[1]>endIn[1] ){
    stopsAfterChange = lines[endIn[0]].stops.slice(endIn[1], eUsqIn[1]);
    stopsAfterChange = stopsAfterChange.reverse();
    listOfStops = "Travel through following stops " + (lines[startIn[0]].stops.slice(sUsqIn[1], startIn[1])).reverse() + (". change at Union Square, journey continues through ") + stopsAfterChange + "; Total no. of stops " + stopsCounter(s,o,e,d,);
    return listOfStops;
  }else if ( s !== e && startIn[1]>sUsqIn[1] && eUsqIn[1]<endIn[1] ){
    stopsAfterChange = lines[endIn[0]].stops.slice(eUsqIn[1]+1, endIn[1]+1);
    listOfStops = "Travel through following stops " + (lines[startIn[0]].stops.slice(sUsqIn[1], startIn[1])).reverse() + (". change at Union Square, journey continues through ") + stopsAfterChange + "; Total no. of stops " + stopsCounter(s,o,e,d,);
    return listOfStops;
  }
};
//
console.log(stopsLister("L","8th","N","8th"));
console.log(stopsLister("L","8th","6","Grand Central"));
console.log(stopsLister("L","1st","6","Grand Central"));
console.log(stopsLister("L","1st","6","Astor Place"));
console.log(stopsLister("6","Grand Central","6","Astor Place"));
console.log(stopsLister("6","Astor Place","6","Grand Central"));
