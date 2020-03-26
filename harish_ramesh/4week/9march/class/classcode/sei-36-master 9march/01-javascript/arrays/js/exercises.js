// # Your top choices
//
// - Create an array to hold your top choices (colors, presidents, whatever).
// - For each choice, log to the screen a string like: "My #1 choice is blue."

const synths = ['Teenage Engineering OP-1', 'Arturia Microfreak',
                'Korg Volca Modular', 'Yamaha REFACE CS'];

for (let i = 0; i < synths.length; i++) {
  console.log( `My #${ i+1 } choice is ${ synths[i] }` );
}
