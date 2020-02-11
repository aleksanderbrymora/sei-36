// Examples
// centuryFromYear(1705) returns (18)
// centuryFromYear(1900) returns (19)
// centuryFromYear(1601) returns (17)
// centuryFromYear(2000) returns (20)
// centuryFromYear(86) returns (1)
// Bonus
// Add support for BC and AD (before year 0 and after). Follow examples for explanation
//
// centuryFromYear(1705) returns "AD 18"
// centuryFromYear(86) returns "AD 1"
// centuryFromYear(-1) returns "1 BC" - One year BC
// centuryFromYear(-100) returns "1 BC"
// centuryFromYear(-5634) returns "57 BC"




// #Myversion

const centuryFromYear = function(year){
  const result = Math.floor(year / 100) + 1

  if ( result > 0){
    return `${result} BC`
  } else {
    return `AD ${result}`
  }
}
centuryFromYear(1989);

// #Alex1
// const centuryFromYear = function(year){
//   let result;
//   if(year % 100 === 0) {
//     result = year / 100;
//   } else {
//     result = (Math.floor(year / 100) + 1)
//   }
//   return result
// }
//
// console.log(centuryFromYear(1999))

// #Alex2
const centuryFromYear = function(){
  return result = Math.ceil(year / 100)

}

console.log(centuryFromYear(1999))


const centuryFromYear = function(year){
  let result;
  if (year < 0) {
    const century = Math.ceil(year * (-1))/100);
    result = `BC ${century}`

  } else {
    result = Math.ceil(year / 100);
    result = `AD${century}`
}

return result

}
