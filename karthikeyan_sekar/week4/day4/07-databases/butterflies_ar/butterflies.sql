CREATE TABLE butterflies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  family TEXT,
  image TEXT -- URL of a photo of a butterfly
);


-- seed data
INSERT INTO butterflies (name,family) VALUES ('Monarch', 'Nymphalidae');
INSERT INTO butterflies (name,family) VALUES ('Ulysses', 'blue');
