// User enters the line and stop their getting ON
// User enters the line and stop their getting OFF
// NEO tells
/*
  "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."

  "Change at Union Square."

  "Your journey continues through the following stops: 23rd, 28th, 33rd."

  "7 stops in total."
*/

const lineN = ['Times Square','34th','28th','23rd','Union Square','8th'];
const lineL = ['8th','6th','Union Square','3rd','1st'];
const line6 = ['Grand Central','33rd','28th','23rd','Union Square','Astor Place'];

const trip = {
  startOnLine: "N",
  startOnStop: "Times Square",
  endOnLine:"N",
  endOnStop:"8th"
};

// stores the planned trip
const tripPlan = {

}

function planTrip (trip) {
  console.log('Plan Trip :');
  console.log(trip.startOnStop);
  switch (trip.startOnLine) {
    case 'N':
        if (isSameLine) {
          sameLine(trip,line6);
        }
      break;
    case '6':
      break;
    case 'N':
      break;
    default:
  }
}

function isSameLine(trip) {
  let isSameLine = false;
  if (trip.startOnLine === trip.endOnLine) {
    isSameLine = true;
  }
  return isSameLine;
}

function sameLine(trip,line){
  let stopsOnTrip = [];
  let index = lineN.indexOf(trip.startOnStop);
  console.log('index: ' + index);
  let noOfStops = line6.length - index;
  console.log('noOfStops: ' + noOfStops);
  for (let i = 0; i < noOfStops; i++) {
      stopsOnTrip[i] = line6[i];
  }
  console.log('stopsOnTrip :');
  console.log(stopsOnTrip);
}

planTrip(trip);
