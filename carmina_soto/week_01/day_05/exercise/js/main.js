// Factories ////////////////////////////////////////////////////////////////

const catFactory = function(n, a, f){
  return {
    name: n,
    age: a,
    furColor: f,
    meow: function () {
      console.log('Meow!!');
    }
  }
};

const cuteCats = [
catFactory('Angel', 18, 'grey'),
catFactory('Evil', 14, 'red'),
catFactory('Meh', 12, 'white')
];

for (let i = 0; i < cuteCats.length; i++) {
  let cat = cuteCats[i];
  console.log(`${cat.name} has ${cat.furColor} fur.`);
}
