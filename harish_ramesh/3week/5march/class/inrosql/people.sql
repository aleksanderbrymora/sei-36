-- comments SQL:Structured Queried Language

CREATE TABLE people (
  id INTEGER PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  age INTEGER
);

--seed data

INSERT INTO people(id, first_name, last_name, age) VALUES (1, 'harish', 'ramesh', 32);
INSERT INTO people(id, first_name, last_name, age) VALUES (2, 'java', 'ruby', 23);
