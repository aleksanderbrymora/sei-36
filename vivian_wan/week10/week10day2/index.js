const express = require('express');
const ejs = require('ejs');
const axios = require('axios')

const PORT = 1337;

const server = express();
server.use(express.static('public'));
server.set('view-engine', ejs);

server.get('/', (req, res) => {
  res.render('home.ejs');
});

server.get('/info', (req, res) => {
    const bookName = req.query.bookname;
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=title/${ bookName }`).then ((response) => {
        const bookCover = response.data;
        res.render('result.ejs', {bookName: bookName, bookCover: bookCover});
      });
    });
  
  server.listen(PORT, () => console.log(`Listening on http://localhost:${ PORT }`));
  