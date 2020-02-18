// object trainNetwork
const trainNetwork = {

  // function to run the methods to plan the trip
  planTrip: function() {
    this.addTrip();
    this.tripCount.trip = Object.keys(this.trips).length;
    let count = this.tripCount.trip;
    this.inputMessage(count);
    if (!this.lineExists(count)) {
      return;
    };
    // test if station provided exists
    if (!this.stationExists(count)) {
      return;
    };
    // test if both stations are the same line
    if (this.compareLine(count)) {
      this.tripSameLine(count);
      this.tripSameLineMessage(count);
      return;
    };
    // returns the stops on each line to catch
    this.tripOne(count);
    this.tripTwo(count);
    this.tripMessage(count);
  },

  // factory to add further lines
  addLine: function(name, stops) { // name is key, stops is array
    this.lines[name] = stops;
    console.log(`Added ${name} line: ${this.lines[name]}.`)
  },

  // factory to add trip details once button is clicked
  addTrip: function() {
    let start = prompt('Whats station do you want to get on at?');
    let lineFrom = prompt('On which line?');
    let end = prompt('What station do you want to go to?');
    let lineTo = prompt('On which line?')
    let tripNumber = this.tripCount.trip + 1;
    //let tripNumber = Object.keys(this.trips).length+1;
    this.trips[tripNumber] = {lineFrom: lineFrom, start: start, lineTo: lineTo, end: end};
  },

  // object to hold the stops of each line
  lines: {
    N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    L: ['8th', '6th', 'Union Square', '3rd', '1st'],
    6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
  },

  // object to hold details of each trip
  trips: {
    // 0: {lineFrom: 'N', start: '34th', lineTo: 'L', end: '1st', lineExists: 'true', stationExists: 'true',
    // sameLine: 'false', tripOneArray: ["28th", "23rd", "Union Square"], tripTwoArray: ["3rd", "1st"], stops: 5}
  },

  tripCount: {
    trip: 0
  },

  printTrips: function() {
    console.log(`----- TRIPS -----`);
    if (this.tripCount.trip === 0) {
      console.log(`No trips have been planned.`);
      return;
    }
    for (const trip in this.trips) {
      if (this.trips[trip].lineExists === false || this.trips[trip].stationExists === false) {
        console.log(`Trip ${trip}: ${this.trips[trip].start} (${this.trips[trip].lineFrom}) \
to ${this.trips[trip].end} (${this.trips[trip].lineTo}) could not be completed.`);
      } else {
      console.log(`Trip ${trip}: ${this.trips[trip].start} (${this.trips[trip].lineFrom}) \
to ${this.trips[trip].end} (${this.trips[trip].lineTo}) with ${this.trips[trip].stops} stops.`);
      }
    }
  },

  printLines: function() {
    for (let i = 0; i < Object.keys(this.lines).length; i++) {
      let key = Object.keys(this.lines)[i];
      console.log(`${key}: ${this.lines[key].join(', ')}`);
    }
  },

  lineExists: function(count) {
    if (Object.keys(this.lines).indexOf(this.trips[count].lineFrom) < 0) {
      console.log(`${this.trips[count].lineFrom} line does not exist on this network.`);
      return this.trips[count].lineExists = false;
    } else if (Object.keys(this.lines).indexOf(this.trips[count].lineTo) < 0) {
      console.log(`${this.trips[count].lineTo} line does not exist on this network.`);
      return this.trips[count].lineExists = false;
    }
    return this.trips[count].lineExists = true;
  },

  // tests if station input exists on the input line
  stationExists: function(count) {
    if (this.lines[this.trips[count].lineFrom].indexOf(this.trips[count].start) < 0) {
      console.log(`${this.trips[count].start} station does not exist on the ${this.trips[count].lineFrom} line.`)
      return this.trips[count].stationExists = false;
    } else if (this.lines[this.trips[count].lineTo].indexOf(this.trips[count].end) < 0) {
      console.log(`${this.trips[count].end} station does not exist on the ${this.trips[count].lineTo} line.`)
      return this.trips[count].stationExists = false;
    }
    return this.trips[count].stationExists = true;
  },

  // test if each station is on the same line
  compareLine: function(count) {
    if (this.trips[count].lineFrom === this.trips[count].lineTo) {
      return this.trips[count].sameLine = true;
    };
    return this.trips[count].sameLine = false;
  },

  // finds each station stop and adds to an array to return
  tripSameLine: function(count) {
    this.trips[count].tripSameLineArray = [];
    const firstStationIndex = this.lines[this.trips[count].lineFrom].indexOf(this.trips[count].start);
    const lastStationIndex = this.lines[this.trips[count].lineFrom].indexOf(this.trips[count].end);

    if (firstStationIndex < lastStationIndex) {
      for (let i = firstStationIndex + 1; i <= lastStationIndex; i++) {
        this.trips[count].tripSameLineArray.push(this.lines[this.trips[count].lineFrom][i]);
      }
    } else {
      for (let i = firstStationIndex - 1; i >= lastStationIndex; i--) {
        this.trips[count].tripSameLineArray.push(this.lines[this.trips[count].lineFrom][i]);
      }
    }
    this.trips[count].stops = this.trips[count].tripSameLineArray.length;
  },

  // finds each station stop from start station to union square, returns an array
  tripOne: function(count) {
    this.trips[count].tripOneArray = [];
    const firstLine = this.lines[this.trips[count].lineFrom];
    const firstStationIndex = firstLine.indexOf(this.trips[count].start);
    const toUnionSquareIndex = firstLine.indexOf('Union Square');
    if (firstStationIndex < toUnionSquareIndex) {
      for (let i = firstStationIndex + 1; i <= toUnionSquareIndex; i++) {
        this.trips[count].tripOneArray.push(firstLine[i]);
      }
    } else {
      for (let i = firstStationIndex - 1; i >= toUnionSquareIndex; i--) {
        this.trips[count].tripOneArray.push(firstLine[i]);
      }
    }
  },

  // finds each station from union square to final station, returns an array
  tripTwo: function(count) {
    this.trips[count].tripTwoArray = [];
    const secondLine = this.lines[this.trips[count].lineTo];
    const fromUnionSquareIndex = secondLine.indexOf('Union Square');
    const lastStationIndex = secondLine.indexOf(this.trips[count].end);
    if (lastStationIndex < fromUnionSquareIndex) {
      for (let i = fromUnionSquareIndex - 1; i >= lastStationIndex; i--) {
        this.trips[count].tripTwoArray.push(secondLine[i]);
      }
    } else {
      for (let i = fromUnionSquareIndex + 1; i <= lastStationIndex; i++) {
        this.trips[count].tripTwoArray.push(secondLine[i]);
      }
    }
    this.trips[count].stops = (this.trips[count].tripOneArray.length + this.trips[count].tripTwoArray.length);
  },

  // logs the details inputed by user
  inputMessage: function(count) {
    console.log(`----- TRIP ${count}: ${this.trips[count].start} (${this.trips[count].lineFrom}) \
to ${this.trips[count].end} (${this.trips[count].lineTo}) -----`);
  },

  // logs the same line trip details to console for user
  tripSameLineMessage: function(count) {
    console.log(`You must travel through the following stops on the ${this.trips[count].lineFrom} line: \
${this.trips[count].tripSameLineArray.join(', ')}.`);
    console.log(`No change.`);
    console.log(`${this.trips[count].stops} stops in total.`);
  },

  // logs the trip details to console for user
  tripMessage: function(count) {
    console.log(`You must travel through the following stops on the ${this.trips[count].lineFrom} line: \
${this.trips[count].tripOneArray.join(', ')}.`);
    console.log(`Change at Union Square to the ${this.trips[count].lineTo} line.`);
    console.log(`Your journey continues through the following stops: ${this.trips[count].tripTwoArray.join(', ')}.`);
    console.log(`${this.trips[count].stops} stops in total.`);
  }
};

const planTripButton = document.getElementById('planTripButton');
planTripButton.addEventListener('click', addTripTrainNetwork, false);

function addTripTrainNetwork() {
  trainNetwork.planTrip();
};

const printTripButton = document.getElementById('printTripButton');
printTripButton.addEventListener('click', printTripTrainNetwork, false);

function printTripTrainNetwork() {
  trainNetwork.printTrips();
};

const printLinesButton = document.getElementById('printLines');
printLinesButton.addEventListener('click', printLinesTrainNetwork, false);

function printLinesTrainNetwork() {
  trainNetwork.printLines();
};


//document.getElementsByTagName('button').addEventListener('click', trainNetwork.planTrip);


// trainNetwork.planTrip('M', 'Times Square', '6', '33rd');
// trainNetwork.planTrip('L', '8th', '6', '33rd');
// trainNetwork.planTrip('L', '8th', 'L', '3rd');
// trainNetwork.planTrip('6', '9th', 'L', '3rd');
