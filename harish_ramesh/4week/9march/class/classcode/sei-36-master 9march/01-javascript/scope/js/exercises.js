// Global Scope ////////////////////////////////////////////////////////////////

const message = "Hello World from the global scope";

const showGlobal = function () {
  console.log( message ); // The global constant is visible/accessible/in scope for this function.
};

showGlobal();

// Function Scope //////////////////////////////////////////////////////////////

const showLocal = function () {
  const localMessage = "Goodbye cruel world";
  console.log( localMessage ); // In scope
};

showLocal();

// console.log( localMessage ); // Out of scope


// var inside a block //////////////////////////////////////////////////////////
if (23 === 23) {
  var hotdogs = "with BBQ sauce and onions";
  console.log( hotdogs );
}

console.log( hotdogs ); // var is still in scope.

// Block scope (a let inside a block) //////////////////////////////////////////
if (23 === 23) {
  let goldfish = true;
  console.log( goldfish );
}

// console.log( goldfish ); // let has gone out of scope.


// Block scope (a let inside a loop) ///////////////////////////////////////////
const bros = ['Groucho', 'Harpo', 'Chico'];

for (let i = 0; i < bros.length; i++) {
  console.log( bros[ i ] );
}

// console.log( i ); // i has gone out of scope

// Block scope (const has the same scope as let) ///////////////////////////////
if (23 === 23) {
  const password = 'swordfish';
  console.log( password );
}

console.log( password );
