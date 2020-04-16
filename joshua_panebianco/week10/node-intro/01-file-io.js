const fs = require('fs');

const fileData = fs.readFileSync('flintstones.text', 'utf-8');


fs.readFile('flintstones.txt', 'utf-8', function (data)
  console.log(data);
});
