const poly = function (message) {
    const cypher = 'abcdefghijklmnopqrstuvwxyz,.?!'
    let output = '';
    for (let i = 0; i < message.length; i++) {
        const letter = message[i].toLowerCase();
        const letterIndex = cypher.indexOf(letter);
        if (letterIndex !== -1) {
            output += (letterIndex % 5) + 1
            output += Math.floor(letterIndex / 6) + 1
            output += ' '
        }
    }
    return output;
}

console.log(poly('message'))
console.log(poly('Ciphers] are confusing!/]'))