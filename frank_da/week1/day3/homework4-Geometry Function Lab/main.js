// Part 1, Rectangle

const rectangleA = {
    length: 4,
    width: 4
  };

const isSquare = function (rectangle) {
    if (rectangle.width === rectangle.length) {
        return 'rectangle is square';
    } else {
        return 'rectangle is not square';
    }
}

const area1 = function (rectangle) {
    return rectangle.width * rectangle.length;
}

const perimeter = function (rectangle) {
    return (rectangle.width + rectangle.length) * 2;
}

console.log('Part 1 test:');
console.log(isSquare(rectangleA));
console.log('Rectangle area is ' + area1(rectangleA));
console.log('Rectangle perimeter is ' + perimeter(rectangleA));
console.log();

// Part 2, Triangle

const triangleA = {
    sideA: 3,
    sideB: 4,
    sideC: 4
  };

const isEquilateral = function (triangle) {
    if (triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC) {
        return 'Triangle is equilateral';
    } else {
        return 'Triangle is not equilateral';
    }
}

const isIsosceles = function (triangle) {
    if ((triangle.sideA === triangle.sideB && triangle.sideB !== triangle.sideC)
    || (triangle.sideA === triangle.sideC && triangle.sideB !== triangle.sideC)
    || (triangle.sideC === triangle.sideB && triangle.sideA !== triangle.sideC)) {
        return 'Triangle is isosceles';
    } else {
        return 'Triangle is not isosceles';
    }
}

const area2 = function (triangle) {
    let a = triangle.sideA;
    let b = triangle.sideB;
    let c = triangle.sideC;
    let p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

const isObtuse = function (triangle) {
    let a = triangle.sideA * triangle.sideA;
    let b = triangle.sideB * triangle.sideB;
    let c = triangle.sideC * triangle.sideC;
    if ( (a + b) < c || (a + c) < b || (c + b) < a) {
        return 'Triangle is obtuse';
    } else {
        return 'Triangle is not obtuse';
    }
}

console.log('Part 2 test:');
console.log(isEquilateral(triangleA));
console.log(isIsosceles(triangleA));
console.log('area is ' + area2(triangleA));
console.log(isObtuse(triangleA));

