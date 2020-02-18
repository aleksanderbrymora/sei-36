const lines = {
    N: ['Time Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    L: ['8th', '6th', 'Union Square', '3rd', '1st'],
    6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}

const planTrip = function(line1, startStop, line2, endStop) {
    // result
    let totalStops = 0;
    let passingStops= [];

    // get index of start/end stop
    let indexLine1UnionSquare = lines[line1].indexOf('Union Square');
    let indexLine2UnionSquare = lines[line2].indexOf('Union Square');
    let indexStartStop = lines[line1].indexOf(startStop);
    let indexEndStop = lines[line2].indexOf(endStop);

    // route of passing stops
    // single line situation
    if (line1 === line2) {
        if (indexEndStop > indexStartStop) {
            passingStops = lines[line1].slice(indexStartStop, indexEndStop + 1);
        } else {
            passingStops = lines[line1].slice(indexEndStop, indexStartStop + 1).reverse();
        }
        
    // multiple lines situation
    } else {        
        // line1 passing stop list
        if (indexLine1UnionSquare > indexStartStop) {
            passingStops = lines[line1].slice(indexStartStop, indexLine1UnionSquare + 1);
        } else {
            passingStops = lines[line1].slice(indexLine1UnionSquare, indexStartStop + 1).reverse();
        }
        console.log(`You must travel through the following stops on the ${ line1 } line: ${ passingStops.join(', ')}.`);
        console.log('Change at Union Square');
        
        // line2 passingStops
        if (indexLine2UnionSquare > indexEndStop) {
            passingStops = lines[line2].slice(indexEndStop, indexLine2UnionSquare).reverse();
        } else {
            passingStops = lines[line2].slice(indexLine2UnionSquare + 1, indexEndStop + 1);
        }
        console.log('Your journey continues through the following stops: ' + passingStops.join(', '));
        
    }

    // get total stops
    if (line1 === line2) {
        totalStops = Math.abs(indexEndStop - indexStartStop);
    } else {
        totalStops = Math.abs(indexStartStop - indexLine1UnionSquare) + Math.abs(indexEndStop - indexLine2UnionSquare);
    }
    console.log(`${ totalStops } stops in total.`);
}

planTrip('N', '34th', '6', 'Grand Central');

