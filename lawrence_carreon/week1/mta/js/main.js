const mta = {
        'N':{ "Times Square": 1 , "34th": 2 , "28th": 3 , "23rd": 4 , "Union Square": 5 , "8th": 6 },
        'L':{ "8th": 1 , "6th": 2 ,  "Union Square": 3 , "3rd": 4 ,  "1st": 5 },
        '6':{ "Grand Central": 1 , "33rd": 2 , "28th": 3 , "23rd": 4 , "Union Square": 5 , "Astor Place": 6 },
        totalStops: 0,
        //I have put the stations into object deliberately to help with calculations

    travelMessage: function( startStation, exitStation, line, destination ){
        const goingRight = this[line][startStation] > this[line][exitStation] ? false : true; //Determine which direction on the line the trip is going
        let stopsForLine = Object.keys(this[line]); //turns the line in question into an array with all the stop names
        if(!(goingRight)){ stopsForLine = stopsForLine.reverse() }; //turns the above array around if required
        const lineStops =  goingRight ? this[line][exitStation] - this[line][startStation] : this[line][startStation] - this[line][exitStation]; //calculates how many stops are going to be visited on the line being travelled on
        this.totalStops += lineStops;
        const stops = goingRight ? stopsForLine.slice(this[line][startStation],this[line][exitStation]).join(", ") : stopsForLine.slice(this[line][exitStation],this[line][startStation]).join(", ");
        //the above conditional fills variable "stops" with the stops visited delimited by the object values associated with the station names and the direction of the trip
        console.log(`Travel on the "${line}" line, for ${lineStops} stops, through: ${stops}`);
        //the conditional helps toggle between whether or not a "change" or "arrival" message is logged, it also stops the code from logging "change" if you wanted to end the trip at Union Square
        exitStation === "Union Square" && destination !== "Union Square" ? console.log(`Change at Union Square`) : console.log(`Arrive at ${exitStation} on the ${line} line`);
    },

    planTrip: function(entryLine, entryStop, exitLine, exitStop){
        this.totalStops = 0; //resets totalStops in the MTA object at whenever planTrip is called!
        // validates that all inputs are correct by checking against keys in the MTA object and then the train lines objects in the MTA object
        if( Object.keys(mta).includes(entryLine) && Object.keys(mta).includes(exitLine) && Object.keys(mta[entryLine]).includes(entryStop) && Object.keys(mta[exitLine]).includes(exitStop)){
            if( entryLine === exitLine ){
                this.travelMessage(entryStop, exitStop, entryLine, exitStop); //single line trip
            }else{
                //since i am given a specific intersection point, 
                this.travelMessage(entryStop, "Union Square", entryLine, exitStop);
                this.travelMessage("Union Square", exitStop, exitLine, exitStop);
            };
            console.log(`Total Number of stops: ${this.totalStops}`);
        }else{
            console.log(`One of your inputs is invalid! (inputs are case sensitive)`);
        };
        console.log("Thank you for not using SydneyTrains!");
    }
};

// mta.planTrip('N', '8th', 'N', 'Times Square'); //single line trip
// mta.planTrip('N', 'Times Square', '6', '33rd'); //HW task test case
mta.planTrip('6', '33rd', 'N', 'Times Square'); //Reverse of the HW task test case