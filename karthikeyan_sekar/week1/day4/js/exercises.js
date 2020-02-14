/*Geometry Function Lab
Part 1, Rectangle
Given the following a rectangle object like the one below, write the following functions which accept a rectangle object
 as an argument:
isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle

const rectangleA = {
  length: 4,
  width: 4
};*/

const rectangle = {
  length: 4,
  width: 4
};

const isSquare = function (rec)
{
  let rect;
  let comm = 'The rectangle is';
  if (rec.length === rec.width )
  {
   rect = `${comm} a square`;
  }
  else
    {
       rect = `${comm} not a square`;
    }
return rect;
}

const area = function(are)
{
  const ar = `The area of the rectangle is ${are.length * are.width}`;

  return ar;
}

const perimeter = function(peri)
{
  const per = `The perimeter of the rectangle is ${2*(peri.length + peri.width)}`;
  return per;
}

console.log(isSquare(rectangle));
console.log(area(rectangle));
console.log(perimeter(rectangle));

/*Part 2, Triangle
Given the following a triangle object like the one below, write the following functions which accept a triangle
object as an argument:
isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};*/

const triangleA = {
  sideA: 4,
  sideB: 3,
  sideC: 6
}

const isEquilateral = function (equ)
{
let tri;
  if (equ.sideA == equ.sideB == equ.sideC)
  {
   tri = 'The triangle is equilateral';
   }
  else
  {
  tri = 'The triangle is not equilateral';
   }
   return tri;
}


  const isIsosceles = function (equ)
  {
    let tri;

    if (equ.sideA == equ.sideB || equ.sideC == triangleA.sideB || equ.sideC == triangleA.sideA)
    {
    tri = 'The triangle is Isosceles';
    }
    else
    {
    tri = 'The triangle is not Isosceles';
    }
      return tri;

  }
  const isObtuse = function(obt)
{
   let tri;
  if ((obt.sideC * obt.sideC) > ((obt.sideA * obt.sideA)+(obt.sideB * obt.sideB)))
  {
    tri = 'The triangle is Obtuse';
  }
  else
  {
    tri = 'The triangle is not Obtuse';
  }
  return tri;
}

  console.log(isEquilateral(triangleA));

  console.log(isIsosceles(triangleA));

  console.log(isObtuse(triangleA));


/*  The Cash Register
  Write a function called cashRegister that takes a shopping cart object. The object contains item names and
  prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

  // Input
  const cartForParty = {
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
  };*/

  // Output
//  cashRegister(cartForParty)); // 60.55

const shoppingCartObject = {
  banana: 1.25,
  handkerchief: .99,
  Tshirt: 25.01,
  apple: 0.60,
  nalgene: 10.34,
  proteinShake: 22.36
};

const cashRegister = function(price)
{
  total = `The total price of the shopping cart is ${shoppingCartObject.banana + shoppingCartObject.handkerchief + shoppingCartObject.Tshirt + shoppingCartObject.apple + shoppingCartObject.nalgene + shoppingCartObject.proteinShake}`;
  console.log(total);
}
cashRegister(shoppingCartObject) ;
