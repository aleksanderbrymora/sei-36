// Activity
// Create a program that models a simple subway system.
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."

//Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

//Do N Line first

//Get on from station 1 (use Time Square station)
//Inform customer which station he/she aboard (ie Time Square)
//Inform customer that he/she must travel the remaining stops
//Inform customer that he/she will get off at which station (ie N8)
//Calculate the total number of stops (ie 5 stops in this case)


//////////////////////////////////////////////////////////

//Need a list of stops 
    // start from 1st stop
        // use Array.prototype.indexOf() to find the customer's first stop
    // find the last stop
        // use Array.prototype.indexOf() to find the customer's last stop
    // then can find the list of stops 
// i need a total of stops ()

//cucd 
const lineN = ["Time Square", "34", "28", "23", "Union Square", "8"];
let numOfStops = [];

const myTrip = function (getOnLine, getOnStation, getOffLine, getOffStation) {
    console.log (`You are catching this train on Line ${getOnLine} station ${getOnStation}.`)
    for (let i = lineN.indexOf(getOnStation)+1; i <= lineN.indexOf(getOffStation); ++i){
            numOfStops.push(lineN[i]);        
     }
    console.log (`You will be traveling through the following stops on Line ${getOnLine}: ${numOfStops}.`)
    console.log (`You are getting off this train on Line ${getOffLine} station ${getOffStation}`)
    console.log(`You have travelled a total of ${numOfStops.length} stops.`)
}
console.log (myTrip ("N", "Time Square", "N", "Union Square"))



