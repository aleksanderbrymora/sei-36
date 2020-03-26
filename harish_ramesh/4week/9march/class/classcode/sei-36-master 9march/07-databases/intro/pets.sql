CREATE TABLE pets (
  id INTEGER PRIMARY KEY,
  name TEXT,
  breed TEXT,
  age INTEGER,
  dead BOOLEAN -- actually just an integer
);

-- seed data
INSERT INTO pets (id, name, breed, age, dead) VALUES (1, 'Fluffy', 'unicorn', 1000, 0);
INSERT INTO pets VALUES (2, 'Gigantor', 'robot', 1, 1);
