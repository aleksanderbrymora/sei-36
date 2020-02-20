// # Geometry Function Lab
//
// ### Part 1, Rectangle
//
// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:
//
// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle

const rectangleA = {
  length: 4,
  width: 4,
  isSquare: true
};

const rectangleB = {
  length: 4,
  width: 7,
  isSquare: false
};

// if (rectangleA.isSquare === true) {
//   let area = rectangleA.length ** 2;
//   let perimeter = rectangleA.length * 4;
//   console.log(`perimeter: ${perimeter} \n area: ${area}`)
// }

function findRectangle(shape) {
  if (shape.isSquare) {
    console.log('This ${shape} is a square.');
  } else if (shape.isSquare === false) {
    let area = shape.length * shape.width;
    let perimeter = 2 * (shape.length * shape.width);
    console.log(`perimeter: ${perimeter} \n area: ${area}`)
  } else {
    console.log(`no`);
  }
}
findRectangle(rectangleA);
findRectangle(rectangleB);

// if (rectangleA.length === rectangleA.width) {
//   let area = rectangleA.length ** 2;
//   let perimeter = rectangleA.length * 4;
//   console.log(`perimeter: ${perimeter} \n area: ${area}`)
// }


// ### Part 2, Triangle
//
// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:
//
// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not
