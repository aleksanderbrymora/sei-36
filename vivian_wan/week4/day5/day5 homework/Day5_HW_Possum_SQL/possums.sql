CREATE TABLE possums (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    year INTEGER,
    weight INTEGER,
    image TEXT
);

-- seed data
INSERT INTO possums (name, year, weight) VALUES ('Awesome', 2016, 2);
INSERT INTO possums (name, year, weight) VALUES ('Stinky', 2018, 4);
INSERT INTO possums (name, year, weight) VALUES ('Cutie', 2019, 0.45);
INSERT INTO possums (name, year, weight) VALUES ('Honey', 2017, 2);

