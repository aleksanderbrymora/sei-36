// The Cash Register

const cartForParty = {  
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
  };
  
  const cashRegister = function (cart) {
      let sum = 0;
      let cartArray = Object.values(cart);
      for (let i = 0; i < cartArray.length; i ++) {
        sum = sum + parseFloat(cartArray[i]);
      }
      return sum;
  }

  console.log(cashRegister(cartForParty));
  