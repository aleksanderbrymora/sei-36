console.log(_.VERSION);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
_( nums ).each( function (n) { console.log(n); } );

// Alternative
_( nums ).each(function (number, index, entireArray) {

});

const obj = {
  4: 'four',
  5: 'five',
  'six': 6
};

_( obj ).each(function (value, key, entireObject) {
  console.count('iteration:');
})

// .map() //////////////////////////////////
// returns a new array
console.log( nums );

const byFive = function (n) {
  return n * 5
}

// const multiplesOfFive = _( nums ).map( byFive );

// Also for objects


const grouchoFacts = _( groucho ).map(function () {

});

// .find() //////////////////////////
const multiplesOfFive = function (n) {
  console.log('considering', n, n % 5 === 0);
  return n % 5 === );
};

// nums[ Math.floor( Math.random() * nums.length ) ]
// .sample
// .shuffle
