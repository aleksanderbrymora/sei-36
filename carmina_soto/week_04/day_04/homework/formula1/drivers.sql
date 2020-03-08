CREATE TABLE drivers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  team TEXT,
  podiums INTEGER,
  image TEXT
);

INSERT INTO drivers (name, team, podiums) VALUES ('Lewis Hamilton', 'Mercedes', 151);
INSERT INTO drivers (name, team, podiums) VALUES ('Valterri Bottas', 'Mercedes', 45);
