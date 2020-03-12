CREATE TABLE books (

  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  author TEXT,
  published_at INTEGER,
  image TEXT
);

INSERT INTO books (name, author, published_at) VALUES ('War and Peace', 'Leo Tolstoy', 1869);
INSERT INTO books (name, author, published_at) VALUES ('Pale Fire', 'Vladimir Nabokov', 1962);
