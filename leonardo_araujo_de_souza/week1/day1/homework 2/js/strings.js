//Dr. Evil
const drEvil = function(number){
   return number === 1000000 ? `${number} dollars! (pinky)` : `${number} dollars`;
};

console.log(drEvil(100));
console.log(drEvil(1000000));

//Mix Up
const mixUp = function(word1, word2){
    const word1part1 = word1.substr(0,2);
    const word2part1 = word2.substr(0,2);
    const newWord1 = word1.replace(word1part1,word2part1);
    const newWord2 = word2.replace(word2part1,word1part1);
    return `${newWord1} ${newWord2}`;
};

console.log(mixUp(`mix`, `pod`));
console.log(mixUp(`dog`, `dinner`));

//fixStart
const fixStart = function(string){
    const firstChar = string[0];
    let output = firstChar;
    for( let i = 1; i < string.length; i++ ){
        string[i] === firstChar ? output += "*" : output += string[i];
    };
    return output;
};

console.log(fixStart("babble"));
console.log(fixStart("google"));

//verbing
const verbing = function(word){
    return word.length < 3 ? word : ((word.endsWith("ing")) ? word += "ly" : word += "ing");
};

console.log(verbing("swim"));
console.log(verbing("swimming"));
console.log(verbing("go"));

//notBad
const notBad = function(phrase){
    const indexOfBad = phrase.toLowerCase().indexOf("bad");
    const indexOfNot = phrase.toLowerCase().indexOf("not");
    const output = indexOfNot < indexOfBad ? phrase.replace(/not.*bad/,"good") : phrase;
    return output;
    // one-liner
    //return (phrase.toLowerCase().indexOf("not")) < (phrase.toLowerCase().indexOf("bad")) ? phrase.replace(/not.*bad/,"good") : phrase;
};

console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This dinner is bad!'));
