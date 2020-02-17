/**
 *  MTA Lab by Ali A.
 * 
 * Create a program that models a simple subway system.

 The program takes the line and stop that a user is getting on at and the line and stop that user
 is getting off at and prints the journey and the total number of stops for the trip in the console.
 */

// Store to store train lines
const lines = [];

// constructor for lines
function Line(name, stations = []) {
  this.name = name;
  this.stations = stations;
}

// Static takes a line object and adds it to store
Line.addLine = function(l) {
  lines.push(l);
};

// facade for line class
const l = function(n, stations) {
  if (isString(n)) {
    return new Line(n, stations);
  }
};

// constructor
function Station(name, edges = []) {
  this.name = name;
  // other nodes connected to
  this.edges = edges;
}

// Unused (WIP)
const _ = function(n) {
  if (isString(n)) {
    return new Station(n);
  }
};

/**
 * Sanitize input
 * @param {String}
 */
function isString(s) {
  // only space, letters and numbers shall pass
  if (s.match(/^[0-9a-zA-Z ]+$/) === null) {
    return false;
  }
  return true;
}
/**
 *  Add stations to a particular line
 * @param {Array} Array of stations to be added
 * @param {String} Line name to be added to
 */
const addStations = function(arr, line) {
  if (arr.length > 0) {
    arr.forEach(function(val) {
      for (let i = 0; i < lines.length; i++) {
        // once we are on the correct line add
        if (lines[i].name === line) {
          // only add stations with valid names
          if (isString(val)) {
            let station = new Station(val);
            lines[i].stations.push(station);
          }
        }
      }
    });
  }
};

// add edges (WIP)
const addEdge = function(line, station, edge) {
  // check inputs
  if (isString(line) && isString(station) && isString(edge)) {
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].name === line) {
        for (let j = 0; j < lines[i].stations.length; j++) {
          if (lines[i].stations[j].name === station) {
            if (lines[i].stations[j].edges.indexOf(edge) < 0)
              lines[i].stations[j].edges.push(edge);
          }
        }
      }
    }
  } else {
    return false;
  }
};

/**
 * Calculates stops along a linear line
 * @param {String} l1 Name of line
 * @param {String} s1 Name of start Station
 * @param {String} s2 Name of end station
 */
const tripOnSameLine = function(l1, s1, s2) {
  let saveLine;
  let indexes = [];
  let stops = [];
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].name === l1) {
      //save the line in question
      saveLine = lines[i].stations;
      // save indexes of stations
      for (let j = 0; j < saveLine.length; j++) {
        if (saveLine[j].name === s1) {
          indexes.push(j);
        }
      }
      for (let j = 0; j < saveLine.length; j++) {
        if (saveLine[j].name === s2) {
          indexes.push(j);
        }
      }
    }
  }
  // if travelling up the line
  if (indexes[0] < indexes[1]) {
    for (let i = indexes[0] + 1; i <= indexes[1]; i++) {
      stops.push(saveLine[i].name);
    }
  } else {
    for (let i = indexes[0] - 1; i >= indexes[1]; i--) {
      stops.push(saveLine[i].name);
    }
  }
  // display output
  return stops;
};

/**
 * Trip Planer.. duh!
 * @param {String} s1 Station to start
 * @param {String} s2 End station
 * @param {String} l1 Line to start at (Optional)
 * @param {String} l2 Line to end at (Optional)
 */
const tripPlanner = function(s1, s2, l1 = null, l2 = null) {
  // lines not provided
  if (!l1 && !l2) {
    // store all stops, unique only using indexOf
    let stops = [{ start: [], end: [] }];
    //temp veriables
    let possibleTrips = [];
    let trip;

    // find all start and end nodes O(n^3)
    for (let i = 0; i < lines.length; i++) {
      for (let j = 0; j < lines[i].stations.length; j++) {
        if (lines[i].stations[j].name === s1) {
          if (stops[0].start.indexOf(lines[i].name) < 0) {
            stops[0].start.push(lines[i].name);
          }
        }
        if (lines[i].stations[j].name === s2) {
          if (stops[0].end.indexOf(lines[i].name) < 0) {
            stops[0].end.push(lines[i].name);
          }
        }
      }
    }

    //Display all possible trips
    stops[0].start.forEach(function(line1) {
      stops[0].end.forEach(function(line2) {
        if (line1 === line2) {
          trip = tripOnSameLine(line1, s1, s2);

          //display output
          possibleTrips.push(
            `Number of stops are ${
              trip.length
            }, with the following stations: ${trip.join(", ")}.`
          );
        } else {
          trip = tripOnSameLine(line1, s1, "Union Square");
          trip = trip.concat(tripOnSameLine(line2, "Union Square", s2));
          possibleTrips.push(
            `Number of stops are ${
              trip.length
            }, change at Union Square for line ${line2}. The stops are: ${trip.join(
              ", "
            )}.`
          );
        }
      });
    });

    return possibleTrips;
  }

  // if the lines are provided and are the same
  if (l1 === l2) {
    const stops = tripOnSameLine(l1, s1, s2);

    //display output
    return `Number of stops are ${
      stops.length
    }, with the following stations: ${stops.join(", ")}.`;
  } else {
    let stops = tripOnSameLine(l1, s1, "Union Square");
    stops = stops.concat(tripOnSameLine(l2, "Union Square", s2));
    return `Number of stops are ${
      stops.length
    }, change at Union Square for line ${l2}. The stops are: ${stops.join(
      ", "
    )}.`;
  }
};

// ALL OUTPUT

// create lines
const newl = l("N");
const newl2 = l("L");
const newl3 = l("6");

// Add line objects to store
Line.addLine(newl);
Line.addLine(newl2);
Line.addLine(newl3);
//Populate lines
addStations(
  ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "N"
);

addStations(["8th", "6th", "Union Square", "3rd", "1st"], "L");
addStations(
  ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
  "6"
);

lines;

// Set directions
addEdge("N", "Union Square", "L");

// same line
const t3 = tripPlanner("8th", "34th", "N", "N");
t3;
// multi-line
const t4 = tripPlanner("8th", "34th", "L", "N");
t4;
// no lines provided
const t5 = tripPlanner("28th", "8th");
t5;
