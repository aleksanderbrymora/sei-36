// add train trip factory to store each trip plan into an object and grab and store values from/in the object

const trainNetwork = {

  // factory to add further lines
  lineFactory: function(name, stops) { // name is key, stops is array
    this.lines[name] = stops;
  },

  // factory to add trip details
  tripFactory: function(lineFrom, start, lineTo, end) {
    let tripNumber = Object.keys(this.trips).length+1;
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
    // 0: {lineFrom: , start: , lineTo: , end: }
  },

  tripCount: {
    trip: 0
  },

  // function to run the methods to plan the trip
  planTrip: function(lineFrom, start, lineTo, end) {
    this.tripFactory(lineFrom, start, lineTo, end);
    this.tripCount.trip = Object.keys(this.trips).length;
    this.inputMessage();
    if (!this.lineExists(lineFrom, lineTo)) {
      return;
    };
    // test if station provided exists
    if (!this.stationExists(lineFrom, start, lineTo, end)) {
      return;
    };
    // test if both stations are the same line
    if (this.compareLine(lineFrom, lineTo)) {
      const tripSameLineArray = this.tripSameLine(lineFrom, start, end);
      this.tripSameLineMessage(lineFrom, tripSameLineArray);
      return;
    };
    // returns the stops on each line to catch
    const tripOneArray = this.tripOne(lineFrom, start);
    const tripTwoArray = this.tripTwo(lineTo, end);
    this.tripMessage(lineFrom, tripOneArray, lineTo, tripTwoArray);
  },

  // test if each station is on the same line
  compareLine: function(lineFrom, lineTo) {
    if (lineFrom === lineTo) {
      return true;
    };
    return false;
  },

  lineExists: function(lineFrom, lineTo) {
    if (Object.keys(this.lines).indexOf(lineFrom) < 0) {
      console.log(`${lineFrom} line does not exist on this network.`);
      return false;
    } else if (Object.keys(this.lines).indexOf(lineTo) < 0) {
      console.log(`${lineTo} line does not exist on this network.`);
      return false;
    }
    return true;
  },

  // tests if station input exists on the input line
  stationExists: function(lineFrom, start, lineTo, end) {
    if (this.lines[lineFrom].indexOf(start) < 0) {
      console.log(`${start} station does not exist on the ${lineFrom} line.`)
      return false;
    } else if (this.lines[lineTo].indexOf(end) < 0) {
      console.log(`${end} station does not exist on the ${lineTo} line.`)
      return false;
    }
    return true;
  },

  // finds each station stop and adds to an array to return
  tripSameLine: function(lineFrom, start, end) {
    const tripSameLineArray = [];
    const firstStationIndex = this.lines[lineFrom].indexOf(start);
    const lastStationIndex = this.lines[lineFrom].indexOf(end);

    if (firstStationIndex < lastStationIndex) {
      for (let i = firstStationIndex + 1; i <= lastStationIndex; i++) {
        tripSameLineArray.push(this.lines[lineFrom][i]);
      }
    } else {
      for (let i = firstStationIndex + 1; i >= lastStationIndex; i--) {
        tripSameLineArray.push(this.lines[lineFrom][i]);
      }
    }
    return tripSameLineArray;
  },

  // finds each station stop from start station to union square, returns an array
  tripOne: function(lineFrom, start) {
    const tripOneArray = [];
    const firstLine = this.lines[lineFrom];
    const firstStationIndex = firstLine.indexOf(start);
    const toUnionSquareIndex = firstLine.indexOf('Union Square');
    if (firstStationIndex < toUnionSquareIndex) {
      for (let i = firstStationIndex + 1; i <= toUnionSquareIndex; i++) {
        tripOneArray.push(firstLine[i]);
      }
    } else {
      for (let i = firstStationIndex + 1; i >= toUnionSquareIndex; i--) {
        tripOneArray.push(firstLine[i]);
      }
    }
    return tripOneArray;
  },

  // finds each station from union square to final station, returns an array
  tripTwo: function(lineTo, end) {
    const tripTwoArray = [];
    const secondLine = this.lines[lineTo];
    const fromUnionSquareIndex = secondLine.indexOf('Union Square');
    const lastStationIndex = secondLine.indexOf(end);
    if (lastStationIndex < fromUnionSquareIndex) {
      for (let i = fromUnionSquareIndex-1; i >= lastStationIndex; i--) {
        tripTwoArray.push(secondLine[i]);
      }
    } else {
      for (let i = fromUnionSquareIndex; i <= lastStationIndex; i++) {
        tripTwoArray.push(secondLine[i]);
      }
    }
    return tripTwoArray;
  },

  // logs the details inputed by user
  inputMessage: function(lineFrom, start, lineTo, end) {
    console.log(`----- TRIP ${this.tripCount.trip}: ${this.trips[this.tripCount.trip].start} (${lineFrom}) to ${end} (${lineTo}) -----`);
  },

  // logs the trip details to console for user
  tripMessage: function(lineFrom, tripOneArray, lineTo, tripTwoArray) {
    console.log(`You must travel through the following stops on the ${lineFrom} line: ${tripOneArray.join(', ')}.`);
    console.log(`Change at Union Square to the ${lineTo} line.`);
    console.log(`Your journey continues through the following stops: ${tripTwoArray.join(', ')}.`);
    console.log(`${tripOneArray.length+tripTwoArray.length} stops in total.`);
  },

  // logs the same line trip details to console for user
  tripSameLineMessage: function(line, tripSameLineArray) {
    console.log(`You must travel through the following stops on the ${line} line: ${tripSameLineArray.join(', ')}.`);
    console.log(`No change.`);
    console.log(`${tripSameLineArray.length} stops in total.`);
  }
};

trainNetwork.planTrip('M', 'Times Square', '6', '33rd');
trainNetwork.planTrip('L', '8th', '6', '33rd');
trainNetwork.planTrip('L', '8th', 'L', '3rd');
