/*
MTA Lab
Objectives:
Apply your knowledge of Javascript to solve a real world problem.
Get really good at array manipulation.
Activity
Create a program that models a simple subway system.
The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."
There are 3 subway lines:
The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
Hints:
Work out how you would do it on paper first! Then start to explain that process in Javascript.
Get the program to work for a single line before trying to tackle multiple lines.
Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
The key to the lab is finding the index positions of each stop. (hint: indexOf())
Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
*/


// given start: line L, station 34th
// given destination: line six, station Grand Central

// find index of 34th
// calculate stops between 34th and union square
// find index of Grand Central
// calculate stops between Union Square and Grand Central


var lines = {
	N: [ "Times Square", "34th", "28th N", "23rd N", "Union Square", "8th N"],
	L: ["8th L", "6th", "Union Square", "3rd", "1st"],
	"6" : ["Grand Central", "33rd", "28th 6", "23rd 6", "Union Square",
"Astor Place"]
};

var intersectStation = "Union Square";

var listTrip1 = function(lineName, line, station) {
	var count = 0;
	var intersect = line.indexOf(intersectStation);
	var tripMessage = "Travel through the following stops on the " + lineName + " line: ";

	// if station 1 is after union square
	if (station > intersect) {
		// start listing from one stop after station 1
		for (var i = station - 1; i >= intersect; i--) {
			if (i !== intersect) {
				tripMessage += line[i] + ", ";
			}
			else {
				tripMessage += line[i] + ".";
			}
			count++;
		}
	}

	// else if station 1 is before union square
	else {
		// start listing from one stop after station 1
		for (var i = station + 1; i <= intersect; i++) {
			if (i !== intersect) {
				tripMessage += line[i] + ", ";
			}
			else {
				tripMessage += line[i] + ".";
			}
			count++;
		}
	}
	console.log(tripMessage);
	return count;
}

var listTrip2 = function(lineName, line, station) {
	var count = 0;
	var intersect= line.indexOf(intersectStation);
	var tripMessage = "Continue through the following stops on the " + lineName + " line: "

	// if station 2 is after union square
	if (station > intersect) {
		// start listing from one stop after union station
		for (var i = intersect + 1; i <= station; i++) {
			if (i !== station) {
				tripMessage += line[i] + ", ";
			}
			else {
				tripMessage += line[i] + ".";
			}
			count++;
		}
	}

	// else if station 2 is before union square
	else {
		// start lisiting from one stop after union station
		for (var i = intersect - 1; i >= station; i--) {
			if (i !== station) {
				tripMessage += line[i] + ", ";
			}
			else {
				tripMessage += line[i] + ".";
			}
			count++;
		}
	}

	console.log(tripMessage);
	return count;
}

var listTripSingleLine = function(lineName, line, stationOne, stationTwo) {
	var count = 0;
	var tripMessage = "Travel through the following stops on the " + lineName + " line: ";

	// if station 2 is after station 1
	if (stationTwo > stationOne) {
		// start listing from one stop after station 1
		for (var i = stationOne + 1; i <= stationTwo; i++) {
			if (i !== stationTwo) {
				tripMessage += line[i] + ", ";
			}
			else {
				tripMessage += line[i] + ".";
			}
			count++;
		}
	}

	// else if station 2 is before station 1
	else {
		// start lisiting from one stop after station 1
		for (var i = stationOne - 1; i >= stationTwo; i--) {
			if (i !== stationTwo) {
				tripMessage += line[i] + ", ";
			}
			else {
				tripMessage += line[i] + ".";
			}
			count++;
		}
	}

	console.log(tripMessage);
	return count;
}

var planTrip = function(lineOne, stationOne, lineTwo, stationTwo) {
	var line1 = lineOne.toUpperCase();
	var line2 = lineTwo.toUpperCase();

	var l1 = lines[line1] // same as var l2 = line.N except using string as index/key
	var l2 = lines[line2]; // same as var l2 = line.N except uses string as index/key

	if ((l1 === undefined || l1 === null) || (l2 === undefined || l2 === null)) {
		console.log("Line(s) " + lineOne + " and/or " + lineTwo + " do not exist");
	}
	else {
		var s1 = l1.indexOf(stationOne); // station1 position/index in line1 array
		var s2 = l2.indexOf(stationTwo);// station2 position/index in line2 array

		var count = 0;

		if (lineOne !== lineTwo && stationOne !== stationTwo) {

			count += listTrip1(lineOne, l1, s1);

			if (line1 === line2) {
				console.log(intersectStation);

			}
			else {
				console.log("Change at " + intersectStation);
			}

			count += listTrip2(lineTwo, l2, s2);

			console.log(count + " stops travelled.");

		}

		else if (lineOne === lineTwo && stationOne !== stationTwo) {
			count += listTripSingleLine(lineOne, l1, s1, s2);
			console.log(count + " stops travelled.");
		}

		else {
			console.log("You have entered the same start and destination. Try again");
		}
	}
}
