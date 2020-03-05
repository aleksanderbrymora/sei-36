//Global Scope ////////////////////////////////////////////////
//line of code that isnt in a forLoop or if/elses statement and can be accessed inside functions

//Function Scope////////////////////////////////////////////
//line of code defines inside function  and therefore can only be called inside the functiong not outside

//var keyword
//var inside a block (curlies {}) // wont exist outside of the block while let wil
//use outside and will keep ecisting and has function scope

//const let has block scope

//block scope
//in a for loop using a let value it will go out of scope once used

//factoris = mass produce objects //////////////////////////////////////////////
catFactory = function(n, a, f) {
  return {
    name: n,
    age: a,
    furColor: f,
    createdAt: Date()
  }
}

const cuteCats = [

		{ name: "Angel", age: 18, furColor: "grey" },
		{ name: "Evil", age: 14, furColor: "red" },
		{ name: "Meh", age: 12, "Fur Color": "white" }

	]

for (let i = 0; i < cuteCats.length; i++) {
  let cat = cuteCats[i];
  console.log(`${cat.name} has ${cat.furColor} fur.`);
}
