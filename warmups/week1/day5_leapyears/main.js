const isLeapYear = function(year) {
  if (year % 400 === 0) return 'its a leap year'
  if (year % 100 === 0) return false
  if (year % 4 === 0) return true
  return false
}

console.log(isLeapYear(1997))
console.log(isLeapYear(1996))
console.log(isLeapYear(1900))
console.log(isLeapYear(2000))
