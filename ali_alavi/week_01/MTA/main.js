// Store
const lines = [];

// constructor
function Line(name, stations = []) {
  this.name = name;
  this.stations = stations;
}

// Static takes a line object and adds it to store
Line.addLine = function(l) {
  lines.push(l);
};

// facade
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

//
const _ = function(n) {
  if (isString(n)) {
    return new Station(n);
  }
};

/**
 * Sanatize input
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

const tripPlanner = function(s1, l1, s2, l2) {
  // if the lines are the same
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
    }, change at Union Square following stations: ${stops.join(", ")}.`;
  }
};

//
const newl = l("N");
const newl2 = l("L");
newl;
Line.addLine(newl);
Line.addLine(newl2);
lines;
addStations(
  ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "N"
);

addStations(["8th", "6th", "Union Square", "3rd", "1st"], "L");
lines;
const t1 = lines[0].stations[4].name;
t1;
addEdge("N", "Union Square", "L");
const t2 = lines[0].stations[4].edges;
//addEdge("N", "Union Square", "");
t2;

// same line
const t3 = tripPlanner("8th", "N", "34th", "N");
t3;
const t4 = tripPlanner("8th", "L", "34th", "N");
t4;
