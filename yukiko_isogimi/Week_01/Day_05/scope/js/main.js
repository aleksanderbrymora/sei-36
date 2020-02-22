//Global Scope/////////////////////////////////////////////////////////////////

const message = "Hello World from the global scope";

const showGlobal = function(){
  console.log( message );///The global constant is visible/accessible/in scope for this function//
}

showGlobal();


///Function Scope///////////////////////////////////////////////////////////////

const showLocal = function(){
  const localMessage = "Good bye cruel world";
  console.log( localMessage );//In scope
};

showLocal();
// console.log( localMessage );//out of visibility


if (23 === 23 ){
  var hotdogs = "wirh BBQ and onions";
  console.log( hotdogs );
};

console.log( hotdogs );

if ( 23 === 23) {
  let goldfish = true;
  console.log( goldfish );
};


const bros = ["chudks","hgjdksks","hgjdlksl"];

for (let i = 0; i < bros.length; i++){
  console.log( bros[ i ]);
}
