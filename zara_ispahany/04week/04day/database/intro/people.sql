-- SQL: Structured Query Language
CREATE TABLE people (
  id INTEGER PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  age INTEGER
);

-- sqlite3 database.sqlite3 < people.sql
-- ^ enter in the terminal to import to database
-- sqlite3 database.sqlite3
-- .schema
