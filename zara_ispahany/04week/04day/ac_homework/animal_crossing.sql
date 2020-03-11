CREATE TABLE animal_crossing (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  species TEXT,
  image TEXT
);

-- seed some data
INSERT INTO animal_crossing (name, species) VALUES ('Tom Nook', 'Tanuki');
