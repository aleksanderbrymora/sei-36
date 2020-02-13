//rectangle
const rectangleA = {
    "length": 4,
    "width": 4,

    //writing functions within the object
    //when referring to a key or a property within an object you must use "this.<key name>"
    isSquare: function(){
        const squareOrNot = this.length === this.width ?  true : false;
        return squareOrNot ? `Your rectangle is a square!` : `Your rectangle is a not a square...`; //determines whether or not squareOrNot is true or false and returns a string betweeen the above stated options
    },

    area: function(){
        return `The area of your rectangle is: ${this.length * this.width} units`;
    },

    perimeter: function(){
        return `The perimeter of your rectangle is: ${ 2 * this.length + 2 * this.width} units`;
    }
};

//object calling its methods
console.log(rectangleA.isSquare());
console.log(rectangleA.area());
console.log(rectangleA.perimeter());

//triangle

const triangleA = {
    "sideA": 3,
    "sideB": 4,
    "sideC": 4,

    isEquilateral: function(){
        const equi = (this.sideA === this.sideB && this.sideB === this.sideC) ? true : false;
        return equi ? `Your triangle is equilateral!` : `Your triangle is not equilateral`;
    },

    isIsoceles: function(){
        const isos = (this.sideA === this.sideB || this.sideB === this.sideC || this.sideC === this.sideA ) ? true : false;
        return isos ? `Your triangle is isosceles!` : `Your triangle is not isosceles`;
    },
    
    //Heron's theorem the square root of p(p-a)(p-b)(p-c), where p is the perimeter, is the area of the triangle
    area: function(){
        const perimeter = this.sideA + this.sideB + this.sideC;
        const area = Math.sqrt(perimeter * (perimeter - this.sideA) * (perimeter - this.sideB) * (perimeter - this.sideC));
        return `The area of your triangle is: ${area} units squared`;
    },

    //pythag's theorem: if sideA^2 + sideB^2 < sideC^2 the triangle is obtuse  
    isObtuse: function(){
        const obtuse = ( Math.pow(this.sideA,2) + Math.pow(this.sideB,2) ) < ( Math.pow(this.sideC, 2) ) ? true : false;
        return obtuse ? `Your triangle is obtuse!` : `Your triangle is not obtuse!`;
    }
};

console.log(triangleA.isEquilateral());
console.log(triangleA.isIsoceles());
console.log(triangleA.area());
console.log(triangleA.isObtuse());

//cashRegister
const cartForParty = {  
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
};
//I put the computing function outside of the object so I can properly use the Object.values() method for the prices of the object - functions within objects are also treated as key value pairs (the function being the value)
const cashRegister = function(cart){
    let valueArr = Object.values(cart);
    let priceOfCart = 0.00;
    valueArr.forEach(function(element){
        priceOfCart += parseFloat(element);
    });
    return `The total price of your cart is: ${priceOfCart}`;
}

console.log(cashRegister(cartForParty));
