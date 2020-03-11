CREATE TABLE butterflies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT
  family TEXT
  image TEXT --url for image
);

--seed data

INSERT INTO butterflies (name, family) VALUES ('Monarch', 'Nympho');
INSERT INTO butterflies (name, family) VALUES ('Ulysee', 'topho');
