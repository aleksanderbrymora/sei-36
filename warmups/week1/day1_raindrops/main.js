/**
 * Given a year, return the century it is in.
 *
 * @param {Number} n A full calender year
 */

const centuryFromYear = function(n) {
  let century = n / 100;
  if (century >= 0) {
    return `${Math.floor(century) + 1}AD`;
  } else {
    return `${Math.ceil(century) * -1 + 1}BC`;
  }
};
