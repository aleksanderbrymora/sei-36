CREATE TABLE authors (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  born INTEGER,
  died INTEGER,
  genre TEXT,
  image TEXT
);

INSERT INTO authors (name, born, died, genre, image) VALUES ('Leo Tolstoy', 1828, 1910, 'Fiction, Philosophy, Nonfiction', 'images/war-and-peace-book.jpg');
INSERT INTO authors (name, born, died, genre, image) VALUES ('Vladimir Nabokov', 1899, 1977, 'Fiction, Poetry', 'iamges/vladimir-nabokov.jpg');
