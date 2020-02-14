

// # Geometry Function Lab

//Part 1, Rectangle

const rectangleAB = {
    length: 8,
    width: 8
  };

const myRectangle = function (anyRectangle)  {

    console.log (`The area of the rectangle is ${anyRectangle.length * anyRectangle.width}.`) // length * width
    console.log (`The perimeter of the rectangle is ${2 * (anyRectangle.length + anyRectangle.width)}.`) // P=2(length + width)

    if (anyRectangle.length === anyRectangle.width) {
        console.log (`The length and the width of the rentangle is ${(anyRectangle.length)}, which means the rectangle is a square.`) //is width = length?
        } else if (anyRectangle.length !== anyRectangle.width) {
        console.log (`The length and the width of the rentangle is different, which means the rectangle is not a square.`) //is width = length?
           }   
        }
myRectangle(rectangleAB)


//Part 2, Triangle

const triangleAB = {
    sideA: 4,
    sideB: 6,
    sideC: 5
  };

const myTriangle = function (anyTriangle) {
   
    console.log (`The area of the triangle is ${anyTriangle.sideA * anyTriangle.sideB * anyTriangle.sideC}.`) // area of triangle

    if (anyTriangle.sideA === anyTriangle.sideB === anyTriangle.sideC) {
        console.log (`This triangle is equilateral.`); 
        } else { 
        console.log (`This triangle is not equilateral.`)
        }
}
myTriangle(triangleAB);


    // if (anyTriangle.sideA === anyTriangle.sideB || anyTriangle.sideB || anyTriangle.sideC) {
    //     console.log (`This triangle is isosceles.`); 
    //     } else { 
    //     console.log (`This triangle is not isosceles.`)
    //     }
    // }   






// The Cash Register

const cartForParty = {  
    banana: 1.25,
    handkerchief: .99,
    Tshirt: 25.01,
    apple: 0.60,
    nalgene: 10.34,
    proteinShake: 22.36
};

const values = function(obj) {
    const prices = Object.values(obj);
    console.log(prices);  
    
    var j = 0;
    for (let i = 0; i < prices.length; ++i) { //prices.length 
        j += prices[i]
    }
    console.log(j)
}
values(cartForParty)  

//Credit card validation

//CC number  must be 

// const ccNumber = {
//     numberOfDigit: 16
// }


// bank 



