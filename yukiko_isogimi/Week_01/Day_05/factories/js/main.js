////factories///////////////////////////////////////////////////////////////////
const catFactory = function(n,a,f){
  return {
  name:n,
  age:a,
  furColor:f,
  createdAt: new Date(),
  species:'feline',
  lives:9,
  meow: function(){
    console.log("meow");
    console.log("meow, my name is " + this.name); ///n is available
    }

  };
};

const cuteCats = [
catFactory("angels",18,"grey")


];

//
//
// const cuteCats = [
//   { name: "Angel" age:18,furColor:"grey"},
//   { name: "Angel" age:18,furColor:"grey"},
//   { name: "Angel" age:18,"Fur Color":"white"},
//
// ];


// for ( let i = 0; i < cuteCats.length; i++) {
//   let cat = cuteCats[ i ];
//   console.log(`${cat.name} has ${cat.furColor} fur.`);
// }
//



///Constructor ///Prototypal inheritance

const Cat = function(n,a,f){
  //No need to create the object: it;s already there AND it's called 'this///'
  this.name = n;
  this.age = a;
  this.furColor = f;
  this.meow = function (){
    console.log("meow, my name is " + this.name);
  }
  //no need to return this--- it gets retuerned automanically///
};


///instances
const cooper = new Cat ('cooper',18,'pink');
const autrery = new Cat ('cooper',18,'pink');


Cat.pro
