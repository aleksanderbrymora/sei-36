console.log('Hey Josh');

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."

// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
const allStations = {
   nLine: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
   lLine: ["8th", "6th", "Union Square", "3rd", "1st"],
   sixLine: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};
// console.log(nLine[2]);

const planTrip = function(startLine, startingStation, endLine, destinationStation) {
   // let startingStation;
	 // let destinationStation;
	 if (startLine === endLine) {
		 // console.log(`This is just on one line`);
		 const singleTrip = function(startLine, startingStation, destinationStation) {
			 startingStation = allStations[startLine].indexOf(startingStation);
				console.log(startLine, startingStation);

				destinationStation = allStations[endLine].indexOf(destinationStation);
 				console.log(endLine, destinationStation);
		 }
	 } else {
		 console.log(`This is a multi line trip`);
	 }
	 let directions;
	 // 1) loop throught nline, to find the start location
      startingStation = allStations[startLine].indexOf(startingStation);
				console.log(startLine, startingStation);
				// return startingStation

	 // }
	 // 2) loop through nLine, to find the destination
       destinationStation = allStations[endLine].indexOf(destinationStation);
				console.log(endLine, destinationStation);
				// return destinationStation;

   // 3) List the number of stations between the startingStation and destinationStation, define that as directions
	 directions = allStations[startLine].slice(startingStation, destinationStation+1)
	 console.log(directions);

	 // 4) conole.log the directions in a string

	 // Change lines at Union Square
	 // list the number of station to Union from startingStation
	let directionsToUnion;
	directionsToUnion = allStations.nLine.slice(startingStation, allStations.nLine.indexOf("Union Square")+1)
	console.log(directionsToUnion);
}
// planTrip("34th", "8th");
planTrip('nLine', 'Times Square', 'sixLine', '33rd');
planTrip('nLine', 'Times Square', 'nLine', '34rd');

// single trip function, from any station to any stations
// A trip to another line is just two single trips
//
