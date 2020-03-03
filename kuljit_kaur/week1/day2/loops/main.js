// Exercises: for loops
// The even/odd reporter
// Write a for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is even or odd, and report that to the screen
// (e.g. "2 is even").
//


for(var i=0;i<=20;i++)
{
if (i % 2 == 0)
  console.log(`${i} is even`);
  else {
    console.log(`${i} is odd`);
  }
}

// Multiplication Tables
// Write a for loop that will iterate from 0 to 10. For each iteration of the for
// loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
//
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to
// 10 (100 results total).
//

for(var i=1;i<=10;i++)
{
  for(var j=1;j<=10;j++)
  {
    console.log(`${i} * ${j} = ${ i * j }`);
  }
}

// The Grade Assigner
// Check the results of assignGrade function from the conditionals exercise for
// every value from 60 to 100 - so your log should show "For 89, you got a B.
// For 90, you got an A.", etc.

const assignGrade = function(score)
{

}
for(i=60;i<=100;i++)
{

}



// Exercises: Arrays**************************
// Your top choices
// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."

const synths = ['Teenage Engineering OP-1','Arthuria Microfreak',
                'Korg Volca Modular', 'Yamaha REFACE CS'];
for (let i=0; i < synths.length; i++)
{
  console.log(`My ${i+1} choice is ${synths[i]}`);
}
