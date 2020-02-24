const subway = {
	N: [ "Times Square", "34th", "28th N", "23rd N", "Union Square", "8th"],
	L: [ "8th", "6th", "Union Square", "3rd", "1st"],
	6 : ["Grand Central", "33rd", "28th 6", "23rd 6", "Union Square","Astor Place"]
};

///variables//
 let count = 0;



// 1 . get the stations to stop depending on the current location // case 1: if they are after Union Squuare(ex. N, 8th)
// 2 . get the stations to stop depending on the current location// case 2: if they are before  Union Squuare((ex.N, 34th)


const tripToSquare = function(lineStart,stationStart){
  let stationsToStop =[];
  let startStation = subway[lineStart].indexOf(stationStart);
  let intersect = subway[lineStart].indexOf("Union Square");
	let message = "You must travel through the following stops on the ";


  if ( startStation > intersect ){
    for (let i = startStation -1; i >= intersect; i--) {
			stationsToStop.push(subway[lineStart][i]);
			count = count + 1;

		}
		message = message + lineStart + ": " + stationsToStop.join(",")+ " \n" + "Change at Union Square";
	} else if ( startStation < intersect ){
		for (let i = startStation; i <= intersect; i++) {
			stationsToStop.push(subway[lineStart][i]);
			count = count + 1;

	}
	message = message + lineStart + ": " + stationsToStop.join(",") + " \n" + "Change at Union Square";

} else if ( startStation === intersect) {
	message = "";
}
	return message

};

// console.log(tripToSquare("L","1st"));
// console.log(tripToSquare("L","8th"));
// console.log(tripToSquare("L","Union Square"));



//3 . get the another stations to stop from Union Square to final destination//

const tripToDestination = function(lineExit,stationExit){
	let message = "Continue through the following stops on the " + lineExit + " line: ";
  let stationsToStop =[];
  let startStation = subway[lineExit].indexOf("Union Square");
  let finalDestination = subway[lineExit].indexOf(stationExit);

//case 1 final destination is after Union Square //case 2 final destination is before Union Square

  if ( finalDestination > startStation ) {
    for (let i = finalDestination; i > startStation; i-- ){
		stationsToStop.push(subway[lineExit][i]);
		count ++

		}
		message = message + stationsToStop.reverse().join(",");

	} else if ( finalDestination < startStation ) {
		for ( let i = finalDestination; i < startStation; i++){
			stationsToStop.push(subway[lineExit][i]);
			count ++
		}
		message = message + stationsToStop.reverse().join(",");

		} else {
		message = "You are already at Union Square!!";

	}
	return message

};

// console.log(tripToDestination("6","33rd"));
// console.log(tripToDestination("N","34th"));
// console.log(tripToDestination("6","Astor Place"));


// 4 . Single line travel
const tripOfSingleLine = function(startLine1, startStation1,exitLine1,exitStation1){
	let stationsToStop1 = [];
	let firstStation = subway[startLine1].indexOf(startStation1);
	let secondStation= subway[exitLine1].indexOf(exitStation1);
	let message1 = "You must travel through the following stops on the " + startLine1 + ":"

	if (startLine1 === exitLine1 && firstStation < secondStation ){
		for( let i = firstStation; i <= secondStation; i++ ){
		stationsToStop1.push(subway[startLine1][i]);
		count++
	}
	message1 = message1 + stationsToStop1.join(",");
} else if (startLine === exitLine && firstStation > secondStation) {
	for (let i =secondStation; i >= firstStation; i--) {
		stationsToStop.push(subway[startLine][i]);
		count++
	}
	message = message + stationsToStop.join(",");
}
	return message1;
}



//5. Plan Trip // Excute functions above

const planTrip = function(startLine, startStation, exitLine,exitStation){
	if ( startLine === exitLine ){
	 console.log( tripOfSingleLine(startLine, startStation,exitLine,exitStation));

 } else {
	 console.log( tripToSquare(startLine,startStation));
	 console.log( tripToDestination(exitLine,exitStation));
 }

 console.log(`You traveled through ${count} stops`);
 count = 0;

};


planTrip("N","Times Square","N","34th");
planTrip("N","Times Square","L","8th");
planTrip("N","Times Square","6","23rd");
planTrip("N","Union Square","6","Union Square");
