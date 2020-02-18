// ## Exercises: Arrays
//
// # Your top choices
//
// - Create an array to hold your top choices (colors, presidents, whatever).
// - For each choice, log to the screen a string like: "My #1 choice is blue."
// - Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.
const topChoices = ['blue', 'obama', 'mercedes', 'programmer', 'apple'];
for (let i=0;i<topChoices.length;i++){
  let choce;
  if (i == 0){
    choce = '1st'
    console.log(`My ${choce} choice is ${topChoices[i]}`);
  } else if (i==1) {
    choce = '2nd'
    console.log(`My ${choce} choice is ${topChoices[i]}`);
  }else if (i==2){
    choce = '3rd'
    console.log(`My ${choce} choice is ${topChoices[i]}`);
  }else{
    choce = (i+1) + "th"
    console.log(`My ${choce} choice is ${topChoices[i]}`);
  }
};

/// note feb12 20 think on that
