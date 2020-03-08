CREATE TABLE specials (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    direction TEXT,
    image TEXT
);

-- seed data
INSERT INTO specials (name, direction) VALUES ("Blaster", "Neutral");
INSERT INTO specials (name, direction) VALUES ("Wolf Flash", "Side");
INSERT INTO specials (name, direction) VALUES ("Fire Wolf", "Up");
INSERT INTO specials (name, direction) VALUES ("Reflector", "Down");
