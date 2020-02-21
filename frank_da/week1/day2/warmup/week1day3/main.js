// # Centuries

// ## Introduction

// The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

// ## Task

// Given a year, return the century it is in.

// ## Examples

// - centuryFromYear(1705) returns (18)
// - centuryFromYear(1900) returns (19)
// - centuryFromYear(1601) returns (17)
// - centuryFromYear(2000) returns (20)
// - centuryFromYear(86) returns (1)
const centuryFromYear = function ( year ) {
    if (year > 0) {
        let century = Math.ceil( year / 100 );
        century = `AD ${ century }`;
        return century;
    } else {
        let century = Math.ceil( -year / 100 );
        century = `BC ${ century }`;
        return century;
    }
}
console.log(centuryFromYear(1705));
console.log(centuryFromYear(-1));
console.log(centuryFromYear(-9999));
console.log(centuryFromYear(86));

// ## Bonus

// Add support for BC and AD (before year 0 and after). Follow examples for explanation

// - centuryFromYear(1705) returns "AD 18"
// - centuryFromYear(86) returns "AD 1"
// - centuryFromYear(-1) returns "1 BC" - One year BC
// - centuryFromYear(-100) returns "1 BC"
// - centuryFromYear(-5634) returns "57 BC"
