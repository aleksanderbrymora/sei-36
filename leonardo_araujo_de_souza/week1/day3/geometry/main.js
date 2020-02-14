// Geometry Function Lab

### Part 1, Rectangle

// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:
//
// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle
//
// ```javascript
// const rectangleA = {
//   length: 4,
//   width: 4
// };
// ```
var rectangle = {
    length: 4,
    width: 4,
    isSquare: function() {
      return (this.length == this.width);
    },
    area: function() {
      return (this.length * this.width);
    },
    perimeter: function() {
      return (this.length * 2 + this.width * 2);
    }
  };

  // ### Part 2, Triangle
  //
  // Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:
  //
  // * isEquilateral - Returns whether the triangle is equilateral or not
  // * isIsosceles - Returns whether the triangle is isosceles or not
  // * area - Returns the area of the Triangle
  // * isObtuse - Returns whether the triangle is obtuse or not
  //
  // ```javascript
  // const triangleA = {
  //   sideA: 3,
  //   sideB: 4,
  //   sideC: 4
  var triangle = {
    sideA: 3,
    sideB: 4,
    sideC: 4,
    isEquilateral: function() {
      return (this.sideA == this.sideB && this.sideB == this.sideC);
    },
    isIsosceles: function() {
      return (this.sideA == this.sideB || this.sideB == this.sideC || this.sideC == this.sideA);
    },
    area: function() {
      p = this.sideA + this.sideB + this.sideC;
      return Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
    },
    isObtuse: function() {
      max = Math.max(this.sideA, this.sideB, this.sideC);
      if (this.sideA == max) {
        return this.sideA > Math.sqrt(this.sideB * this.sideB + this.sideC * this.sideC);
      }
      else if (this.sideB == max) {
        return this.sideB > Math.sqrt(this.sideA * this.sideA + this.sideC * this.sideC);
      }
      else {
        return this.sideC > Math.sqrt(this.sideB * this.sideB + this.sideA * this.sideA);
      }
    }
  };

  console.log("Rectangle is a square " + rectangle.isSquare());
  console.log("Area of rectangle: " + rectangle.area());
  console.log("Perimeter of rectangle: " + rectangle.perimeter());
  console.log("Triangle is equilateral " + triangle.isEquilateral());
  console.log("Triangle is isosceles " + triangle.isIsosceles());
  console.log("Area of triangle: " + triangle.area());
  console.log("Triangle is obtuse " + triangle.isObtuse());



  \\]\
