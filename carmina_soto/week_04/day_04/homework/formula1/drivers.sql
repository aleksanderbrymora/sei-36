CREATE TABLE drivers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
<<<<<<< HEAD
  team_id INTEGER,
=======
  team TEXT,
>>>>>>> 71e4864be61bfaaccdcacf39c18a15b67c88453c
  podiums INTEGER,
  image TEXT
);

<<<<<<< HEAD
INSERT INTO drivers (name, team_id, podiums, image) VALUES ('Lewis Hamilton', 1, 151, 'https://www.formula1.com/content/fom-website/en/drivers/lewis-hamilton/_jcr_content/image.img.1920.medium.jpg/1554818913486.jpg');
INSERT INTO drivers (name, team_id, podiums, image) VALUES ('Valterri Bottas', 1, 45, 'https://www.formula1.com/content/fom-website/en/drivers/valtteri-bottas/_jcr_content/image.img.1920.medium.jpg/1554818929157.jpg');
=======
INSERT INTO drivers (name, team, podiums) VALUES ('Lewis Hamilton', 'Mercedes', 151);
INSERT INTO drivers (name, team, podiums) VALUES ('Valterri Bottas', 'Mercedes', 45);
>>>>>>> 71e4864be61bfaaccdcacf39c18a15b67c88453c
