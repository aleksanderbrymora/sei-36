const express = require('express');
const ejs = require('ejs');
const axios = require('axios');

const PORT = 7575;

const app = express();
app.use(express.static('public'));
app.set('view-engine', ejs);

app.get('/', (req, res) => {
  res.render('home.ejs');
});

app.get('/book', (req, res) => {
  const bookName = req.query.book_name;
  const BOOK_URL = `https://www.googleapis.com/books/v1/volumes?q=${bookName}`;
  axios.get(BOOK_URL).then((book) => {
    const bookInfo = book.data["items"];
    res.render('show.ejs', {bookInfo: bookInfo});
  })
})

app.listen(PORT,  () => console.log(`Listening on http://localhost:${PORT}`));
