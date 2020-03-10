CREATE TABLE animals  (
id INTEGER PRIMARY KEY,
name TEXT,
breed TEXT,
age INTEGER,
dead BOOLEAN -- actually a integer
);

--seed data

INSERT INTO animals(id, name, breed, age, dead) VALUES (1, 'fluffy', 'unicorn', 1000, 0);
INSERT INTO animals(id, name, breed, age, dead) VALUES (2, 'gigna', 'reptile', 2, 1);
INSERT INTO animals(id, name, breed, age, dead) VALUES (3, 'gnat', 'tile', 10, 0);
INSERT INTO animals(id, name, breed, age, dead) VALUES (4, 'yaaru', 'alien', 234, 0);
