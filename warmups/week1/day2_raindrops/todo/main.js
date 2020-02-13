// const centuryFromYear = function(year) {
//   let result;
//   if (year % 100 === 0) {
//     result = year / 100;
//   } else {
//     result = (Math.floor(year / 100) + 1)
//   }
//   return result
// }

const centuryFromYear = function(year) {
  let result;
 // BC
  if (year < 0) {
    const century = Math.ceil((year * (-1)) / 100)
    result = `${century} BC`
  }
// AD
  else {
    const century = Math.ceil(year / 100)
    result = `AD ${century}`
  }
  return result
}

console.log(centuryFromYear(1705))
console.log(centuryFromYear(1900))
console.log(centuryFromYear(-1900))
console.log(centuryFromYear(-9999))
