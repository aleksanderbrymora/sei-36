const maxOfTwoNumbers = function(num1, num2){
    return num1 < num2 ? num2 : num1;
};

const maxOfThreeNumbers = function(num1, num2, num3){
    return maxOfTwoNumbers( maxOfTwoNumbers(num1,num2) , num3 ); 
};

const sumArray = function(array){
    return array.reduce(function(a,b){return a + b});
};

const multiplyArray = function(array){
    return array.reduce(function(a,b){return a * b});
};

const reverseString = function(string){
    return string.split("").reverse().join("");
};

const findLongestWord = function(wordArray){
    const sortedArray = wordArray.sort(function(a,b){return a.length - b.length});
    return sortedArray[sortedArray.length - 1];
};

const filterLongWord = function(wordArray, lengthCap){
    return wordArray.filter(element => element.length > lengthCap );
};
