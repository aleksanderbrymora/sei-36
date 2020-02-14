// console.log('I am a great Programmer');
// # Geometry Function Lab
//
// ### Part 1, Rectangle
//
// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:
//
// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle
// -------try writing the below in a single array---harish------

const rectangleA = {
  Rlength: 4,
  width: 4
};

const rectangleB = {
  Rlength: 7,
  width: 4
};

const rectangleC = {
  Rlength: 9,
  width: 9
};
//-----isSquare--------
const isSquare = function(rAngle){
  if (rAngle.Rlength === rAngle.width){
    console.log(`This is a square`);
  }else {
    console.log(`This is a rectangle`);
  }
};

isSquare(rectangleA);
isSquare(rectangleB);
isSquare(rectangleC);
//-------area--------
const isArea = function(rAngle){
  let recArea = rAngle.Rlength * rAngle.width
    console.log(recArea);
    return recArea
};
isArea(rectangleA);
isArea(rectangleB);
isArea(rectangleC);
//--------perimeter---------
const perimetr = function(rAngle){
  let recPmtr = rAngle.Rlength + rAngle.width
    console.log(recPmtr);
    return recPmtr
};

perimetr(rectangleA);
perimetr(rectangleB);
perimetr(rectangleC);
// ### Part 2, Triangle
//
// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:
//
// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not

const triangleA = {
  sideA: 2,
  sideB: 5,
  sideC: 6
};
const triangleB = {
  sideA: 3,
  sideB: 6,
  sideC: 4
};
const triangleC = {
  sideA: 4,
  sideB: 4,
  sideC: 4
};
const triangleD = {
  sideA: 2,
  sideB: 4,
  sideC: 4
};
//(tri.sideA == tri.sideB && tri.sideA == tri.sideB)
//((tri.sideC ** 2) < ((tri.sideA ** 2)+(tri.side ** 2)))
//((tri.sideC ** 2) > ((tri.sideA ** 2)+(tri.side ** 2)))
//-----------whats wrong with the following code?-------
// const typeOfTri = function(tri){
//   let type;
//   if (((tri.sideA ** 2)+(tri.sideB ** 2))/2 === (tri.sideC ** 2)){
//     type = 'Equilateral'
//   console.log('its a ' + type + " triangle");
//   return type;
// }else if((tri.sideC ** 2) < ((tri.sideA ** 2)+(tri.side ** 2))){
//   type = 'Acute'
//  console.log('its a ' + type + " triangle");
//  return type;
// }else if ((tri.sideC ** 2) > ((tri.sideA ** 2)+(tri.side ** 2))){
//   type = 'Obtuse';
//  console.log('its a ' + type + " triangle");
// }else{
//   return
// }
// };

//------whats wrong with this one too???

// const typeOfTri = function(tri){
//   if (((tri.sideA ** 2)+(tri.sideB ** 2))/2 === (tri.sideC ** 2)){
//     console.log("its a equilateral triangle");
//   }else if((tri.sideC ** 2) < ((tri.sideA ** 2)+(tri.side ** 2))){
//     console.log("its a Acute triangle");
//   }else if ((tri.sideC ** 2) > ((tri.sideA ** 2)+(tri.side ** 2))){
//     console.log("its a Obtuse triangle");
//   }else{
//     return
//   }
// };

//-----isequal------
const isEqui = function(tri){
  if (tri.sideA == tri.sideB && tri.sideA == tri.sideC){
    console.log("its is equilateral triangle")
  }else{
    console.log("Its not a equilateral triangle") // if i try to return without else , its not working
  }
};


isEqui(triangleA);
isEqui(triangleC);
isEqui(triangleB);
isEqui(triangleD);

const triangleAI = {
  sideA: 2,
  sideB: 5,
  sideC: 2
};
const triangleBI = {
  sideA: 3,
  sideB: 3,
  sideC: 4
};
const triangleCI = {
  sideA: 4,
  sideB: 4,
  sideC: 4
};
const triangleDI = {
  sideA: 2,
  sideB: 4,
  sideC: 4,
  height: 5
};
//------is iscocles
const isIso = function(tri){
  if (!(tri.sideA == tri.sideB && tri.sideA == tri.sideC) && (tri.sideA == tri.sideB || tri.sideA == tri.sideC || tri.sideB == tri.sideC)){
    console.log("its is isosceles triangle")
  }else {
    console.log("Its not a isosceles triangle")
  }
};

isIso(triangleAI);
isIso(triangleBI);
isIso(triangleCI);
isIso(triangleDI);
isIso(triangleB);
//----- triangle area------
const triArea = function(tria){
  let area = (tria.sideB * tria.height)/2
  return area;
};

console.log(triArea(triangleDI));
//-----isObtuse
const isObtuse = function(angle){
  if ((angle.sideC ** 2) > ((angle.sideA ** 2)+(angle.sideB ** 2))){
    console.log("its a obtuse triangle");
  }else{
    console.log("its not obtuse")
  }
};

isObtuse(triangleA);
isObtuse(triangleC);
isObtuse(triangleB);
isObtuse(triangleD);
