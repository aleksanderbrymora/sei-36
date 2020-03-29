CREATE TABLE clients (

  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT,
  last_name TEXT,
  contact_number INTEGER,
  image TEXT

);

INSERT INTO clients (first_name, last_name, contact_number) VALUES ('Sarah', 'Smith', 0481448773);
INSERT INTO clients (first_name, last_name, contact_number) VALUES ('Mel', 'Jameyi', 0481466111);
