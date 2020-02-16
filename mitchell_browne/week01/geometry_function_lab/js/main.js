// ### Part 1, Rectangle
//
// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:
//
// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle

const rectangleA = {
  length: 4,
  width: 5
};

const isSquare = function(rectangle) {
  rectangle.isSquare = (rectangle.length === rectangle.width);
};

const areaRect = function(rectangle) {
  rectangle.area = (rectangle.length * rectangle.width);
};

const perimeter = function(rectangle) {
  rectangle.perimeter = (rectangle.length * 2) + (rectangle.width * 2);
}

console.log('---- Rectangle ----');
isSquare(rectangleA);
areaRect(rectangleA);
perimeter(rectangleA);
printObject(rectangleA);


// ### Part 2, Triangle
//
// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:
//
// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not

const triangleA = {
  sideA: 5,
  sideB: 6,
  sideC: 7
};

const isEquilateral = function(tri) {
  tri.isEquilateral = (tri.sideA === tri.sideB && tri.sideA === tri.sideC);
};

const isIsosceles = function(tri) {
  tri.isIsosceles = (tri.sideA === tri.sideB || tri.sideA === tri.sideC || tri.sideB === tri.sideC);
};

const areaTri = function(tri) {
  let s = (tri.sideA + tri.sideB + tri.sideC) / 2;
  let heronArea = Math.sqrt(s * ((s - tri.sideA)*(s - tri.sideB)*(s - tri.sideC)));
  tri.area = heronArea.toFixed(3);
};

const isObtuse = function(tri) {
  if ((tri.sideA**2) + (tri.sideB**2) < (tri.sideC**2)){
    return tri.isObtuse = true;
  } else if ((tri.sideC**2) + (tri.sideA**2) < (tri.sideB**2)){
    return tri.isObtuse = true;
  } else if ((tri.sideB**2) + (tri.sideC**2) < (tri.sideA**2)){
    return tri.isObtuse = true;
  } else {
    return tri.isObtuse = false;
  }
};

function printObject(object) {
  for (const property in object) {
    console.log(`${property}: ${object[property]}`);
  }
};

console.log('---- Triangle ----');
isEquilateral(triangleA);
isIsosceles(triangleA);
areaTri(triangleA);
isObtuse(triangleA);
printObject(triangleA);
