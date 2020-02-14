// Part 1, Rectangle
const rectangleA = {
  length: 4,
  width: 4
};

const isSquare = function (obj){
  let checkSquare = false;
  if (obj.length === obj.width) {
      checkSquare = true;
  }
  return checkSquare;
};

const areaRectangle = function (obj) {
  return obj.length * obj.width;
};

const perimeterRectangle = function (obj) {
  if (isSquare(obj)) {
      return (4 * obj.length);
  }
  return(-1);
};

console.log(`Is rectangleA a square ? ${isSquare(rectangleA)?'yes':'no'}`);
console.log(`Rectangle area: ${areaRectangle(rectangleA)}`);
console.log(`Rectangle perimeter: ${perimeterRectangle(rectangleA)}`);


// Part 2, Triangle
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const isEquilateral = function (obj) {
  let allSidesEqual = false;
  if (obj.sideA === obj.sideB && obj.sideB === obj.sideC && obj.sideC === obj.sideA) {
    sidesEqual = true;
  }
  return allSidesEqual;
}

const isIsosceles = function (obj) {
  let twoSidesEqual = false;
  if (obj.sideA === obj.sideB) {
    twoSidesEqual = true;
  }
  if (obj.sideB === obj.sideC) {
    twoSidesEqual = true;
  }
  if (obj.sideC === obj.sideA) {
    twoSidesEqual = true;
  }
  return twoSidesEqual;
}

const isObtuse = function (o) {
  let isObt = false;
  if (((o.sideA*o.sideA)+(o.sideB*o.sideB)) < (o.sideC*o.sideC)) {
    isObt = true;
  }
  return isObt;
}

const areaTriangle = function (obj) {
  return((obj.sideB*obj.sideC)/2);
}


console.log(`Is triangleA an equilateral triangle ? ${isEquilateral(triangleA)?'yes':'no'}` );
console.log(`Is triangleA an Isosceles triangle ? ${isIsosceles(triangleA)?'yes':'no'}` );
console.log(`Is triangleA an obtuse triangle ? ${isObtuse(triangleA)?'yes':'no'}` );
console.log(`Area of triangleA : ${areaTriangle(triangleA)}`);



// The Cash Register
// Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};
const cashRegister = function (o) {
  let oArray = Object.values(o);
  let total = 0;
  for (var i = 0; i < oArray.length; i++) {
    total += Number(oArray[i]);
  }
  // console.log(total);
  return total;
}

// Output
console.log(`Cart for party Total: ${cashRegister(cartForParty)}`);


// JavaScript Bank
const jsBank = {
  accounts: [
    { acctId: 0, name: "Mary Palmher",  balance: 100.00 },
    { acctId: 1, name: "Peter Pehn", balance: 199.00 },
    { acctId: 2, name: "John Dhoe",  balance: 1200.00 }
  ],
  getBalance: function (oAcct) {
    return (oAcct.balance);
  },
  deposit: function (oAcct, amount) {
    return (oAcct.balance += amount);
  },
  withdraw: function (oAcct, amount) {
    let success = false;
    if( amount <= oAcct.balance) {
      oAcct.balance -= amount
      success = true;
    }
    return success;
  },
  transfer: function (oSource, oTarget, amount){
    let success = false;
    if(this.withdraw(oSource,amount)) {
        this.deposit(oTarget,amount);
        success = true;
    }
    return success;
  },
  totalBankBalance: function (){
    let total = 0;
    for (var i = 0; i < this.accounts.length; i++) {
      total += this.accounts[i].balance;
    }
    return total;
  }
}

console.log(`JsBank's total account balance is: $ ${jsBank.totalBankBalance().toFixed(2)}`);
console.log(`John Doe's current balance: $ ${jsBank.getBalance(jsBank.accounts[2]).toFixed(2)}`);
console.log(`Deposit $340 into John Dhoe's account: $ ${jsBank.deposit(jsBank.accounts[2],340).toFixed(2)}`);
console.log(`Wihdraw $99.95 from John Doe's account: $ ${jsBank.withdraw(jsBank.accounts[2],99.95)?'Balance left:':'Insufficient fund'} ${jsBank.accounts[2].balance}`);
