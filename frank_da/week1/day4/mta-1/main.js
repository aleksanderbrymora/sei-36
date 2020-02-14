const lineN = ['Time Square', '34th', '28th', '23rd', 'Union Square', '8th'];
const lineL = ['8th', '6th', 'Union Square', '3rd', '1st'];
const line6 = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];

const lines = {
    N: ['Time Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    L: ['8th', '6th', 'Union Square', '3rd', '1st'],
    6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}

const planTrip = function(line1, startStop, line2, endStop) {
    // result
    let totalStops = 0;
    let passingStops= [];

    // get index of start stop
    let indexLine1UnionSquare = lines[line1].indexOf('Union Square');
    let indexLine2UnionSquare = lines[line2].indexOf('Union Square');
    let indexStartStop = lines[line1].indexOf(startStop);
    let indexEndStop = lines[line2].indexOf(endStop);

    // passing stops
    // single line situation
    if (line1 === line2) {
        if (indexEndStop > indexStartStop) {
            passingStops = lines[line1].slice(indexStartStop, indexEndStop + 1);
        } else {
            passingStops = lines[line1].slice(indexEndStop, indexStartStop + 1).reverse();
        }
    // multiple lines situation
    } else {
        console.log('line1 != line2');
        
        // line1 passing stop list
        if (indexLine1UnionSquare > indexStartStop) {
            passingStops = lines[line1].slice(indexStartStop, indexLine1UnionSquare + 1);
        } else {
            passingStops = lines[line1].slice(indexLine1UnionSquare, indexStartStop + 1).reverse();
        }
        console.log(`passingStops for line1 is ==== ${ passingStops }`);
        
        // line2 passingStops
        if (indexLine2UnionSquare > indexEndStop) {
            passingStops = passingStops.concat(lines[line2].slice(indexEndStop, indexLine2UnionSquare).reverse());
        } else {
            passingStops = passingStops.concat(lines[line2].slice(indexLine2UnionSquare + 1, indexEndStop + 1));
        }
    }
    console.log(passingStops);

    // get total stops
    if (line1 === line2) {
        totalStops = Math.abs(indexEndStop - indexStartStop);
    } else {
        totalStops = Math.abs(indexStartStop - indexLine1UnionSquare) + Math.abs(indexEndStop - indexLine2UnionSquare);
    }
    console.log(totalStops);
}

// planTrip('N', '34th', 'N', '8th');
// planTrip('N', '8th', 'N', '34th');
planTrip('N', '34th', 'L', '6th');
planTrip('N', '34th', '6', 'Astor Place');

