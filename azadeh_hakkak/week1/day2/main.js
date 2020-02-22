// centuryFromYear(1705) returns (18)
// centuryFromYear(1900) returns (19)
// centuryFromYear(1601) returns (17)
// centuryFromYear(2000) returns (20)

// Given a year, return the century it is in.

// const centuryFromYear = function(year) {
//   let result;
//   if (year % 100 === 0) {
//     result = year / 100;
//   }
//   else{
//     result = Math.floor(year / 100) + 1;
//   }
// return result
// }

const centuryFromYear = function(year) {
  let result = Math.ceil(year / 100)
  return result;
}

console.log(centuryFromYear(1705));
// add
