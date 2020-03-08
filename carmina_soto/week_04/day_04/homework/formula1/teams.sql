CREATE TABLE teams (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  base TEXT,
  world_champ INTEGER,
  image TEXT
);

INSERT INTO teams (name, base, world_champ) VALUES ('Mercedes', 'United Kingdom', 6);
INSERT INTO teams (name, base, world_champ) VALUES ('Ferrari', 'Italy', 16);
